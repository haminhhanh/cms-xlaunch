export default [
  {
    path: '/',
    component: '@/layout/MainLayout',
    title: 'index.title',
    routes: [
      {
        exact: true,
        path: '/',
        component: '@/pages/index',
        title: 'navbar.home',
      },
      {
        exact: true,
        path: '/trade',
        component: '@/pages/Trade',
        title: 'navbar.trade',
      },
      {
        exact: true,
        path: '/ido-pool',
        component: '@/pages/IDOPool',
        title: 'navbar.idopool',
      },
      {
        exact: true,
        path: '/launchpad',
        component: '@/pages/Launchpad',
        title: 'navbar.launchpad',
      },
      {
        exact: true,
        path: '/launchpad/:id',
        component: '@/pages/Launchpad/[id]',
        title: 'navbar.launchpad.detail',
      },
    ],
  },
];
