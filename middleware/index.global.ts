export default defineNuxtRouteMiddleware(async (to) => {
  if (/prohibited/.test(to.path)) {
    alert('Access to this page is prohibited. Redirecting to the about page.')
    return navigateTo('/about')
  }
})
