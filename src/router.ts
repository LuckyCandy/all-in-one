import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '~/pages/home/Index.vue'
import Publish from '~/pages/publish/Index.vue'
import Platform from '~/pages/platform/Index.vue'
import Effect from '~/pages/effect/Index.vue'
import Skeleton from '~/components/base/Skeleton.vue'



const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '', component: Skeleton, meta: { requireAuth: true }, children: [
        { path: '/', name: '首页', component: Home },
        { path: '/platform', name: '平台管理', component: Platform },
        { path: '/effect', name: '效果查看', component: Effect },
        { path: '/publish', name: '内容发布', component: Publish },
      ]
    }
  ]
})

export default router;