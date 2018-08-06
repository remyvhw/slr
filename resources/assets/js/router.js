import VueRouter from 'vue-router'

const routes = [
    {
        path: '/',
        component: require("./components/SlrBrowser.vue"),
        name: 'browser',
        children: [
            {
                path: 'obstructions',
                component: require("./components/Obstructions/ObstructionList.vue"),
                name: 'browser.obstructions',
                children: [
                    {
                        path: ':obstructionId',
                        component: require("./components/Obstructions/ObstructionDetailsModal.vue"),
                        name: 'browser.obstructions.details',
                        props: true,
                        meta: {
                            shouldBackOnClose: true
                        }
                    },
                ]
            },
            {
                path: 'photos/all/:page?',
                component: require("./components/Pictures/PictureList.vue"),
                name: 'browser.photos',
            },
            {
                path: '',
                component: require("./components/Changes/ChangeList.vue"),
                name: 'browser.changes',
            },

        ]
    },
    {
        path: 'photos/upload',
        component: require("./components/Pictures/PictureUploadModal.vue"),
        name: 'photos.upload',
        meta: {
            shouldBackOnClose: true
        }
    }
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    if (!from.name)
        to.meta.shouldBackOnClose = false;
    next()
});

export default router;