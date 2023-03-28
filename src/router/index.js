import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        name: '登录',
        path: '/',
        component: () => import('../views/Login.vue'),
    },
    {
        name: '首页',
        path: '/index',
        component: () => import('../views/Index.vue'),
        children: [
            {
                name: '博客管理',
                path: '/blog',
                component: () => import('../views/Blog.vue'),
            }, {
                name: '分类管理',
                path: '/classify',
                component: () => import('../views/Classify.vue'),
            }, {
                name: '专题管理',
                path: '/specialTopic',
                component: () => import('../views/SpecialTopic.vue'),
            }, {
                name: '个人信息',
                path: '/myInfo',
                component: () => import('../views/UserInfo.vue'),
            }, {
                name: '成员',
                path: '/member',
                component: () => import('../views/Member.vue'),
            },
        ]
    }
];

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router