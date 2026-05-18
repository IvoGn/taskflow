// Route middleware to protect authenticated pages
// Redirects unauthenticated users to /login

export default defineNuxtRouteMiddleware(() => {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
})