---
outline: deep
---

# Anti Corruption Layer (ACL) for your API communication

## What's an Anti Corruption Layer?

Short said, it makes sure that the data you use in your frontend will always be as you expected it when you 
did the implementation. So even if the response from the API alters, your frontend will not run into fatal
errors. 

For this will introduce a layer (the ACL) that will transform the data received from the API into
previously defined models only used on the frontend. We basically remove the dependency the frontend
has to the backend. 

::: tip
A good **Anti Corruption Layer** makes your application work even if one or more API requests fail, by setting
default values for all properties the frontend needs to work.
:::

## Why should you use an ACL in your application

Already small changes in the data you receive from the API-request may break your application. Imagine a
property name of a json response changes like this:

```json
{
  ...
  "isValid": true, // [!code --]
  "isValidForUsage": true, // [!code ++]
  ...
}
```

This will affect all the usages for `isValid` you have in your application and will end up in errors or not
correctly rendered components if you try to access `isValid` while it's not present anymore.

::: info Possible error if you don't check for this property: 
```console
Uncaught TypeError: Cannot read properties of undefined (reading 'isValid') at...  // [!code error]
```
:::
## How to implement an ACL into your Application

To avoid any console errors, or even non-rendered components that will break your application layout and 
usability, we will now introduce an ACL step-by-step.


### Initial State without ACL
Let's start with the following setup of code:

::: code-group
```typescript [API Layer]
export const fetchDataFromApi = async (): AxiosPromise<BackEndApiResponse[]> => {
  return await axios.get('/data');
};
```

```typescript [Service Layer]
export const fetchData = async (): Promise<BackEndApiResponse[]> => {
  try {// [!code focus]
    // fetch data, by calling the API layer // [!code focus]
    const {data: responseData} = await fetchDataFromApi();// [!code focus]
// [!code focus]
    // return the plain backend dto to the application // [!code focus]
    return responseData.data;// [!code focus]
  } catch (error) {
    handleError(error)

    return [];
  }
};
```

```typescript [Pinia Store]
export const useDataStore = defineStore('dataStore', () => {
  const yourData Ref<BackEndApiResponse[]> = ref([]);
  
  const getData = async () => {
    // here we call the Service layer, that will then call the API layer
    fetchData().then((data: BackEndApiResponse[]) => {
      yourData.value = data;
    });
  };
})
```

```vue [Vue Component] 
<template>
  <CustomComponent :isValid="yourData.isValid"/> // [!code highlight]
</template>

<script setup lang="ts">
  
  const dataStore = useDataStore();
  const { yourData } = storeToRefs(dataStore);
</script>
```

```typescript [Interfaces] 
export interface BackEndApiResponse {
  createdAt: number;
  createdBy: string;
  isValid: boolean;
}
```
:::

### Plan, what properties you need on the Frontend

As you can see from the snippet of the `Vue Component`, we currently only access **one** of the three properties
(`isValid`) of the `BackEndApiResponse` interface that is returned by the backend. Still we re-use the same
interface for the frontend implementation, making the frontend rely on the backend and carrying two 
unnecessary properties with us.

::: info 
You don't need to think too much about what you need now and what you might need in the future. It's enough
to just focus on ***what you need for the current implementation***.
:::

**Let's change that!**


### Create Frontend Interfaces
First step of detaching the frontend from the backend is by introducing independent models, types and 
interfaces, only used by the frontend. 

::: tip
This also applies if the interface is (for now) exactly the same as the interface used for the frontend.
We set this up for a clean project and for easy maintainability in the future.

For small projects that might sound overwhelming and overengineered, but you will thank yourself in 
the future, when you have to change / improve something.
:::

```typescript [Interfaces]
export interface BackEndApiResponse {
  createdAt: number;
  createdBy: string;
  isValid: boolean;
}

export interface FrontEndInterface { // [!code ++]
  isValid: boolean; // [!code ++]
} // [!code ++]
```

### Create Mapper Layer
Now that we have our frontend only interface, we need a new layer -> **The Mapper Layer**.

This layer is responsible to map our data in two ways:

> 1. Backend Interfaces -> Frontend Interfaces (when fetching data)
> 2. Frontend Interfaces -> backend Interfaces (when posting data)

```typescript
// mapper file


// Backend -> Frontend
const mapBackendInterfaceToFrontendInterface = (dataFromBackend: BackEndApiResponse[]): FrontEndInterface[] => {
  const mappedData: FrontEndInterface[] = [];

  dataFromBackend.map((dataEntry) => {
    const mappedTechStackEntry: BackEndApiResponse = {
      isValid: dataEntry.isValid,
    };

    mappedData.push(mappedTechStackEntry);
  });

  return mappedData;
}

// Frontend -> Backend 
const mapFrontendInterfaceToBackendInterface = (frontendData: FrontEndInterface, User: UserData): BackEndApiResponse => {
  return {
    isValid: frontendData.isValid,
    createdAt: new Date().getTime(),
    createdBy: User.Username
  }
}
```


### Map data in Service Layer
Now that we have the mappers ready, we can use them in our Service Layer.

::: info :heavy_exclamation_mark: Don't forget change the Store Implementation :heavy_exclamation_mark:
In the same step you have to update your store implementation and all other places that still use
the backend interface, to only use the Frontend Interface.
:::

::: warning
If you made any changes to the properties when creating the frontend interfaces, make sure to also update
your frontend components.
:::

::: code-group
```typescript [Service Layer]
export const fetchData = async (): Promise<FrontEndInterface[]> => {
  try {
    // fetch data, by calling the API layer
    const {data: responseData} = await fetchDataFromApi();
    // return the plain backend dto to the application // [!code --]
    return responseData.data;// [!code --]
    // map the data we fetched into our frontend interface // [!code ++]
    return mapFrontendInterfaceToBackendInterface(responseData.data); // [!code ++]
  } catch (error) {
    handleError(error)

    return [];
  }
};
```

```typescript [Pinia Store]
export const useDataStore = defineStore('dataStore', () => {
  const yourData Ref<BackEndApiResponse[]> = ref([]); // [!code --]
  const yourData Ref<FrontEndInterface[]> = ref([]); // [!code ++]
  
  const getData = async () => {
    // here we call the Service layer, that will then call the API layer
    fetchData().then((data: BackEndApiResponse[]) => { // [!code --]
    fetchData().then((data: FrontEndInterface[]) => { // [!code ++]
      yourData.value = data;
    });
  };
});
```
:::

### What happens if the dto from the Backend updates
Now we come to the real benefit of an ACL! Let's assume you have everything setup as mentioned above,
and the api response (dto) changes a property (in our case **~~isValid~~ -> isInvalid**). As you can see, 
this does not just change the property name, but also inverts the logic of the property, making all your
components and methods that use it incorrect.

Now instead of fixing all the places we use this property in, you only have to fix ***one place***, 
the ***Anti Corruption Layer***!

::: tip
In this example, we will retain the logic we have in our frontend by just inverting the boolean value we
retrieve from the backend. With this, our frontend interface stays the same, which saves us a lot of time!
:::

::: code-group
```typescript [Interfaces]
export interface BackEndApiResponse {
  createdAt: number;
  createdBy: string;
  isValid: boolean;// [!code --]
  isInvalid: boolean;// [!code ++]
}

export interface FrontEndInterface {
  isValid: boolean;
}
```

```typescript [Mapper]
// mapper file


// Backend -> Frontend
const mapBackendInterfaceToFrontendInterface = (dataFromBackend: BackEndApiResponse[]): FrontEndInterface[] => {
  const mappedData: FrontEndInterface[] = [];

  dataFromBackend.map((dataEntry) => {
    const mappedTechStackEntry: BackEndApiResponse = {
      isValid: dataEntry.isValid, // [!code --]
      isValid: !dataEntry.isInvalid, // [!code ++]
    };

    mappedData.push(mappedTechStackEntry);
  });

  return mappedData;
}

// Frontend -> Backend 
const mapFrontendInterfaceToBackendInterface = (frontendData: FrontEndInterface, User: UserData): BackEndApiResponse => {
  return {
    isValid: frontendData.isValid, // [!code --]
    isInvalid: !frontendData.isValid, // [!code ++]
    createdAt: new Date().getTime(),
    createdBy: User.Username
  }
}
```
:::


## Summary

If you followed the steps above, you successfully created an Anti Corruption layer for your Vue
Application. As you've seen, updating or maintaining your application that uses an Anti Corruption Layer
for your API requests is very easy. So even thought in the first place it takes more time to set up all
the layers on your application, you will save a lot of time if your application grows, and you need to
maintain it.

As a last step, here is an overview of how your code could look like if you're done with the implementation
of your first ACL, as well as a quick 'Rule of Thumb' for the layers we used.

::: code-group
```typescript [API Layer]
export const fetchDataFromApi = async (): AxiosPromise<BackEndApiResponse[]> => {
  return await axios.get('/data');
};
```

```typescript [Service Layer]
export const fetchData = async (): Promise<FrontEndInterface[]> => {
  try {
    const {data: responseData} = await fetchDataFromApi();
    
    return mapFrontendInterfaceToBackendInterface(responseData.data);
  } catch (error) {
    handleError(error)

    return [];
  }
};
```

```typescript [Mapper]
const mapBackendInterfaceToFrontendInterface = (dataFromBackend: BackEndApiResponse[]): FrontEndInterface[] => {
  const mappedData: FrontEndInterface[] = [];

  dataFromBackend.map((dataEntry) => {
    const mappedTechStackEntry: BackEndApiResponse = {
      isValid: dataEntry.isValid,
    };

    mappedData.push(mappedTechStackEntry);
  });

  return mappedData;
}

const mapFrontendInterfaceToBackendInterface = (frontendData: FrontEndInterface, User: UserData): BackEndApiResponse => {
  return {
    isValid: frontendData.isValid,
    createdAt: new Date().getTime(),
    createdBy: User.Username
  }
}
```

```typescript [Pinia Store]
export const useDataStore = defineStore('dataStore', () => {
  const yourData Ref<FrontEndInterface[]> = ref([]);
  
  const getData = async () => {
    fetchData().then((data: FrontEndInterface[]) => {
      yourData.value = data;
    });
  };
});
```

```vue [Vue Component] 
<template>
  <CustomComponent :isValid="yourData.isValid"/> // [!code highlight]
</template>

<script setup lang="ts">
  
  const dataStore = useDataStore();
  const { yourData } = storeToRefs(dataStore);
</script>
```

```typescript [Interfaces]
export interface BackEndApiResponse {
  createdAt: number;
  createdBy: string;
  isValid: boolean;
}

export interface FrontEndInterface {
  isValid: boolean;
}
```
:::

### Dataflow
```console
 Backend
    ↑
    |
    ↓
Api Layer
    ↑
    |
    ↓
Service Layer <------> Mapper Layer
    ↑
    |
    ↓
Frontend
```

::: warning
Data in the structure from the backend (using backend interfaces) should never get past the
**Service Layer**.
:::

::: details API Layer
The ***API Layer*** is responsible for **only one** action: Making requests to the API! 
This means it should **never** have any logic inside.
:::

::: details Service Layer
The ***Service Layer*** should hold all the logic that is needed so the Frontend can communicate with the 
API-Layer. Therefor it does the following:
- Call the API Layer (to fetch or send data)
- Call the Mapper Layer to prepare data 
:::

::: details Mapper Layer
The ***Mapper Layer*** is responsible to map the data in both ways - 
Backend -> Frontend & Frontend -> Backend.
:::
