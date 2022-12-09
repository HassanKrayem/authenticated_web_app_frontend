const routes = [
    {
        path: '/home',
        name: 'portal-home',
        component: () => import('@/portals/home/Main.vue'),
        redirect: {
            name: 'portal-home-login',
        },
        children: [
            /*{
                path: 'profile',
                name: 'portal-home-profile',
                component: () => import('@/portals/home/pages/Home.vue'),
            },*/
            {
                path: 'login',
                name: 'portal-home-login',
                component: () => import('@/portals/home/pages/Login.vue'),
            }/*,
            {
                path: 'signup',
                name: 'portal-home-signup',
                component: () => import('@/portals/home/pages/Login.vue'),
            }*/
        ]
    }
]

export default routes
