import { route } from 'quasar/wrappers'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from 'stores/auth'

export default route(function () {
  const Router = createRouter({
    history: createWebHistory(),
    routes,
  })

  // 🔹 Navigation Guard
  Router.beforeEach((to) => {
    const auth = useAuthStore()

    // اگر صفحه نیاز به لاگین داشته باشه ولی کاربر لاگین نکرده
    if (to.meta.requiresAuth && !auth.isAuthenticated) {
      return '/login'
    }

    // اگر کاربر لاگین کرده و میخواد دوباره لاگین بره
    if (to.path === '/login' && auth.isAuthenticated) {
      return '/dashboard'
    }
  })

  return Router
})
