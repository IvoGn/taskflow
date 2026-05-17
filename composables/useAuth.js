export const useAuth = () => {
  const isAuthenticated = useState(
    'auth',
    () => false
  )

  const login = () => {
    isAuthenticated.value = true

    localStorage.setItem('auth', 'true')
  }

  const logout = () => {
    isAuthenticated.value = false

    localStorage.removeItem('auth')
  }

  const loadAuth = () => {
    const storedAuth = localStorage.getItem('auth')

    isAuthenticated.value = storedAuth === 'true'
  }

  return {
    isAuthenticated,
    login,
    logout,
    loadAuth
  }
}