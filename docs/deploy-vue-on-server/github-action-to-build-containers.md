---
outline: deep
---

# Github action to build the Docker Container for the Frontend

Before we can deploy the application in our portainer instance, we need to build a docker container using a 
github action with the following code.

```yaml
name: Build Docker Images

# This line will let us run this action by hand, change to make it automated 
# on new commits for a branch
on: workflow_dispatch

permissions: write-all

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Log in to Docker Hub
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Extract Frontend metadata (tags, labels) for Docker
        id: meta_frontend
        uses: docker/metadata-action@v5.5.0
        with:
          images: ghcr.io/${{ github.repository }}/frontend
      - name: Build and publish frontend Docker image
        uses: docker/build-push-action@v5
        with:
          # depending on the project, you have to change the context and file
          context: ./frontend
          file: ./frontend/Dockerfile
          push: true
          tags: ${{ steps.meta_frontend.outputs.tags }}
          labels: ${{ steps.meta_frontend.outputs.labels }}
```

### Dispatch Workflow

This action can be run manually from the `actions` tab on the github page of this repository. It will create
the image like `ghcr.io/your-name/your-repository/frontend` and can then be deployed on portainer using a
fitting docker-compose.yml.