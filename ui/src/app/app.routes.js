export const routes =
  /* @ngInject */
  ($stateProvider) => {
    $stateProvider
    .state({
      name: 'home',
      url: '/home',
      component: 'createUser'
    })
    .state({
      name: 'profile',
      url: '/profile',
      component: 'profile'
    })
  }
