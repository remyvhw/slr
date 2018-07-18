import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require("./components/SlrBrowser.vue"),
        name: 'browser',
        children: [{
            path: '/obstructions/:obstructionId',
            component: require("./components/Obstructions/ObstructionDetailsModal.vue"),
            name: 'obstructionDetailsModal',
            props: true,
            meta: {
                shouldBackOnClose: true
            },
            beforeEnter: (to, from, next) => {
                if (!from.name)
                    to.meta.shouldBackOnClose = false;
                next()
            }
        }]
    },
];

const router = new VueRouter({ routes });


export default router;