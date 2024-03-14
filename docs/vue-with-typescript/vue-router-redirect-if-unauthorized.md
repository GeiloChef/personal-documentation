---
outline: deep
---

# Redirect User if he tries to access a Route in your Vue 3 Application

If you want to prevent a user from accessing a route he's not supposed to, you can make use of the 
`beforeEach` hook of the Vue router instance you created in the `router/index.ts`.

::: info
In this example we store the json web token in the local storage, so we can access it even after
refreshing the page. For this we use `useLocalStorage` included in the `@vueuse/core` package. If you
haven't installed it yet, run:
```console
npm i @vueuse/core
```
:::

::: warning
The example assumes, that you make sure to frequently validate and update your jwt. It's recommended to do that with
every response that comes from the backend.
:::

::: code-group
```typescript {26-38} [router/index.ts]
// router/index.ts

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        // ... your route meta information
        isPublic: true, // needed to know if user can access the route if hes not logged in // [!code ++]
      }
    },
    {
      path: '/',
      name: 'private-route',
      component: PrivateRoute,
      meta: {
        // ... your route meta information
        isPublic: false, // needed to know if user can access the route if hes not logged in  // [!code ++]
      }
    },
    // ... more routes
  ]
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const userInfoStore = useUserInfoStore();
  
  // check if the route is public and if the user is logged in
  if (!to.meta.isPublic && !userInfoStore.userIsLoggendIn) {
    // is the user is not eligable to access, we send him to the login page
    next({ name: 'login' });
    
    return;
  }
  
  next();
});

export default router;
```

```typescript
// stores/userInfoStore.ts

// ... imports
export const useUserInfoStore = defineStore('userInformation', () => {
  // ... your variables in the user Store
  const jwt = useLocalStorage('jwt', '' as string);

  const isUserLoggedIn = computed((): boolean => {
    return !!jwt.value;
  });

  return {
    isUserLoggedIn,
  };
});

```
:::