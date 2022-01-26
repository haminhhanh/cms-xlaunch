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
        path: '/manage-users',
        component: '@/pages/ManageUser',
        title: 'navbar.ManageUser',
      },
      {
        exact: true,
        path: '/create-launchPad',
        component: '@/pages/LaunchPad/CreateLaunchPad',
        title: 'navbar.CreateLaunchPad',
      },
      {
        exact: true,
        path: '/edit-launch-token',
        component: '@/pages/LaunchPad/EditLaunchPad',
        title: 'navbar.CreateLaunchPad',
      },
    ],
  },
];
