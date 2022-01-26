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
      {
        exact: true,
        path: '/edit-token',
        component: '@/pages/ManageStakingPools/EditToken',
        title: 'navbar.EditToken',
      },
      {
        exact: true,
        path: '/create-token',
        component: '@/pages/ManageStakingPools/CreactToken',
        title: 'navbar.CreactToken',
      },
      {
        exact: true,
        path: '/create-support-chain',
        component: '@/pages/WalletEndSupportedChain/CreateSupportChain',
        title: 'navbar.CreateSupportChain',
      },
      {
        exact: true,
        path: '/add-delete-supported-chain',
        component: '@/pages/WalletEndSupportedChain/EditSupportChain',
        title: 'navbar.EditSupportChain',
      },
    ],
  },
];
