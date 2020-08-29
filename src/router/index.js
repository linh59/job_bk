import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            name: 'signinPage', path: '/', component: () => import('../views/signInPage.vue'), display: 'Sign in'
        },
        {
            name: 'forgotPasswordPage', path: '/forgotPassword', component: () => import('../views/forgotPasswordPage.vue'), display: 'forgot password'
        },
        {
            name: 'dashboardPage', path: '/dashboard', component: () => import('../views/dashboardPage.vue'), display: 'Dashboard'
        },
        {
            name: 'gameManagementPage', path: '/gamemanagement', component: () => import('../views/gameManagementPage.vue'), display: 'Game management'
        },
        {
            name: 'gameSettingPage', path: '/gamesettings', component: () => import('../views/gameSettingPage.vue'), display: 'Game setting'
        },
        {
            name: 'affiliatePage', path: '/affiliate', component: () => import('../views/affiliatePage.vue'), display: 'My Affiliate'
        },
        {
            name: 'settingPage', path: '/setting', component: () => import('../views/settingPage.vue'), display: 'My Setting'
        },
        {
            name: 'signinPage', path: '*', component: () => import('../views/signInPage.vue'), display: 'Sign in'
        },
    ]
  })
  