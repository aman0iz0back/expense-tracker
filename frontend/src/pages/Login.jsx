
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/globalContext'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { loginUser } = useGlobalContext()

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')
    const formData = new FormData(event.currentTarget)

    try {
      const { token, user } = await loginUser(
        formData.get('email'),
        formData.get('password')
      )
      if (token && user) {
        localStorage.setItem('user', token)
        navigate('/')
      }

    } catch (err) {
      setError('Invalid credentials. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Log in to your account
          </h2>
        </div>

        <div className="bg-white dark:bg-gray-800 py-10 px-8 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 transition duration-300">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="aman@example.com"
                className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-white"
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 pr-12 text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  tabIndex={-1}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-sm text-red-600 dark:text-red-400 font-medium">
                {error}
              </p>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full justify-center rounded-xl border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Logging in...' : 'Log in'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
