// Authentication composable for managing user login state
// Persists auth state to localStorage for client-side authentication
// loadAuth() should be called on app mount to restore previous session

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

  // Restore authentication state from localStorage on app initialization
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