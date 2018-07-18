import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require("./components/SlrBrowser.vue"),
        name: 'browser',
        children: [
            {
                path: '/obstructions/:obstructionId',
                component: require("./components/Obstructions/ObstructionDetailsModal.vue"),
                name: 'obstructionDetailsModal',
                props: true,
                meta: {
                    shouldBackOnClose: true
                }
            },
            {
                path: '/pictures/upload',
                component: require("./components/Pictures/PictureUploadModal.vue"),
                name: 'pictureUploadModal',
                meta: {
                    shouldBackOnClose: true
                }
            }
        ]
    },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    if (!from.name)
        to.meta.shouldBackOnClose = false;
    next()
});

export default router;