const routes = [
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      {
        path: '/login',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: '/forgot',
        component: () => import('pages/ForgotPage.vue')
      },
      {
        path: '/confirmforgot',
        component: () => import('pages/ConfirmForgotPage.vue')
      },
      {
        path: '/register',
        component: () => import('pages/RegisterPage.vue')
      },
      {
        path: '/verify',
        component: () => import('pages/VerifyPage.vue')
      },
      {
        path: '/roles',
        component: () => import('pages/RolesPage.vue')
      }

    ]
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/results', component: () => import('pages/ResultsPage.vue') },
      { path: '/view', component: () => import('pages/ViewPage.vue') }
    ]
  },
  {
    path: '/profile',
    component: () => import('layouts/ProfileLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ProfilePage.vue') },
      { path: '/about', component: () => import('pages/AboutPage.vue') },
      { path: '/artist', component: () => import('pages/ArtistPage.vue') },
      { path: '/bio', component: () => import('pages/BioPage.vue') },
      { path: '/photos', component: () => import('pages/PhotoPage.vue') },
      { path: '/videos', component: () => import('pages/VideoPage.vue') },
      { path: '/sounds', component: () => import('pages/SoundPage.vue') },
      { path: '/equipment', component: () => import('pages/EquipmentPage.vue') },
      { path: '/complete', component: () => import('pages/CompletePage.vue') }
    ]
  },
  {
    path: '/action',
    component: () => import('layouts/ActionLayout.vue'),
    children: [
      { path: '/action', component: () => import('pages/ActionPage.vue') },
      { path: '/messages', component: () => import('pages/MessagesPage.vue') },
      { path: '/calendar', component: () => import('pages/CalendarPage.vue') }
    ]
  },
  {
  path: '/support',
  component: () => import('layouts/SupportLayout.vue'),
  children: [
    { path: '/support', component: () => import('pages/SupportPage.vue') },
    { path: '/tickets', component: () => import('pages/TicketsPage.vue') }
  ]
},
{
  path: '/admin',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    { path: '/admin', component: () => import('pages/AdminPage.vue') },
    { path: '/allprofiles', component: () => import('pages/AllProfilesPage.vue') }
  ]
},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
