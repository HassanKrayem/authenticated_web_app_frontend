import Vue from 'vue'
import Router from 'vue-router'
import homePortalRoutes from '@/portals/home/routes.js'
import backpanelRoutes from '@/portals/backpanel/routes.js'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: {
        name: 'portal-home'
      },
    },
    ...homePortalRoutes,
    ...backpanelRoutes
  ]
})

router.beforeEach((to, from, next) => {

  if (to.meta.hasOwnProperty('guards')) {
    //checkRouteGuardsV(to, from, next, to.meta.guards)
  } else {
    next();
  }
});

export default router
