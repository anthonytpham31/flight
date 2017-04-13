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
    .state({
      name: 'flights',
      url: '/flights',
      component: 'map'
    })
  }
