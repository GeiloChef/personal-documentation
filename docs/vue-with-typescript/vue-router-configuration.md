---
outline: deep
---

# Vue Router Configuration

Following is a list of different configurations you can make for your Vue Router.

[[toc]]

### Scroll Behavior

With this setting you can determine how your application behaves ones the user switches routes.

```typescript
// router/index.ts
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // ...
    // your routes here
    // ...
  ],
  scrollBehavior(to, from, savedPosition) { // [!code ++]
    return {  // [!code ++]
      top: 0, // [!code ++]
    };  // [!code ++]
  } // [!code ++]
});
```

___

### Before-Each Route

With this hook you can execute an action before every route change. This for example is useful to check if a
user is authenticated for the route he accesses.

::: info
The following example will not let the user enter the `Login-Page` if he is already logged in. Instead, he
will remain on the page he is currently on.
:::

```typescript
// router/index.ts
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  const userIsLoggedIn = false
  
  if (to.name === 'login' && userIsLoggedIn) {
    next(from);

    return;
  }
  
  next();
});
```
