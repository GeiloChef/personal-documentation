---
outline: deep
---

# Create axios instance for your API-layer in your Vue 3 project

An axios instance will make your life with axios in Vue 3 very easy. You can set your base url, default
parameters and default headers without having to add those information to every call you make in your
API-layer.


## 1. Create axios instance
::: info
It does make sense to have a separate instance just for the authentication calls!
:::

::: code-group
```typescript [axiosInstance.ts]
// axios/axiosInstance.ts

import axios from 'axios';

/*
  Create an instance that points to the base url of your api
  */
const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_API_URL
    // baseURL: https://your-base-url.com/api
});

/*
  Set default params that will be added to every request you make
  */
instance.defaults.params = {
    'locale': 'de', // will add &locale=de
    'populate': '*'// will add &populate=*
};

/*
  If working with autorization headers it does make sense to add that as default header for your requests
  */
const authorizationBearer = localStorage.getItem('jwt') ?? '';

instance.defaults.headers.common = {
    'Authorization': `Bearer ${authorizationBearer}`
};

export default instance;
```

```typescript [axiosAuthInstance.ts]
// axios/axiosAuthInstance.ts

import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_AUTH_API_URL
});


export default instance;
```
:::

### Export your Axios instances

In order to use the just created axios instances globally, lets add a `index.ts` inside the folder structure
to easily import the instances everywhere.

```typescript
// axios/index.ts

// eslint-disable-next-line import/export
export * from './axiosInstance';
// eslint-disable-next-line import/export
export * from './axiosAuthInstance';
```

## 2. Import Axios Instance in your Api File(s)

```typescript
// services/api/EntityNameApi.ts

import type { AxiosPromise } from 'axios';
import axios from '@/services/api/axiosInstance';

export const fetchSomeInformationFromBackend = async (yourData = 'test1'): AxiosPromise<YourInterface> => {
  return await axios.get('/your-endpoint', { data: yourData });
};
```

::: info
This will call the base api url from the axios instance setup and add the params, as well as the
default parameter to the request. The final request url will look like this: 

`https://your-base-url.com/api/your-endpoint?data=test1&locale=de&populate=*`
:::