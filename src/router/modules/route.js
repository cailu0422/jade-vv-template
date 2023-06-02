export default [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/pinia',
      name: 'pinia',
      component: () => import('@/views/PiniaView.vue'),
    },
  ];
  