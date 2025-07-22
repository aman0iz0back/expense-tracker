
// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { useGlobalContext } from '../context/globalContext'
// import { FiEye, FiEyeOff } from 'react-icons/fi'
// import { useRef } from 'react'


// export default function UserRegister() {
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState('')
//   const [showPassword, setShowPassword] = useState(false)
//   const [password, setPassword] = useState('')
//   const [passwordStrength, setPasswordStrength] = useState('')
//   const navigate = useNavigate()
//   const { registerUser } = useGlobalContext()

//   const getPasswordStrength = (password) => {
//     if (password.length < 6) return 'Weak'
//     const hasUpper = /[A-Z]/.test(password)
//     const hasLower = /[a-z]/.test(password)
//     const hasNumber = /\d/.test(password)
//     const hasSymbol = /[^A-Za-z0-9]/.test(password)
//     if (hasUpper && hasLower && hasNumber && hasSymbol) return 'Strong'
//     return 'Medium'
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     setIsLoading(true)
//     setError('')

//     const formData = new FormData(event.currentTarget)

//     try {
//       const { token, user } = await registerUser(
//         formData.get('name'),
//         formData.get('email'),
//         password
//       )

//       if (token && user) {
//         localStorage.setItem('user', token)
//         navigate('/')
//       }

//     } catch (err) {
//       setError('An unexpected error occurred.')
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
//       <div className="w-full max-w-md space-y-8">
//         <div>
//           <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
//             Create your Account
//           </h2>
//           <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
//             Start managing your expenses smarter
//           </p>
//         </div>

//         <div className="bg-white dark:bg-gray-800 py-10 px-8 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 transition duration-300">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
//                 Full Name
//               </label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 placeholder="Aman Saxena"
//                 className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-white"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 placeholder="aman@example.com"
//                 className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-white"
//               />
//             </div>

//             <div className="relative">
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   autoComplete="new-password"
//                   required
//                   value={password}
//                   onChange={(e) => {
//                     setPassword(e.target.value)
//                     setPasswordStrength(getPasswordStrength(e.target.value))
//                   }}
//                   className="block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 pr-12 text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-white"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
//                   tabIndex={-1}
//                 >
//                   {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
//                 </button>
//               </div>

//               {/* Password strength meter */}
//               {password && (
//                 <div className="mt-2">
//                   <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded">
//                     <div
//                       className={`h-2 rounded transition-all duration-300 ${
//                         passwordStrength === 'Weak'
//                           ? 'w-1/4 bg-red-500'
//                           : passwordStrength === 'Medium'
//                           ? 'w-2/4 bg-yellow-500'
//                           : 'w-full bg-green-500'
//                       }`}
//                     ></div>
//                   </div>
//                   <p className={`text-xs font-medium mt-1 ${
//                     passwordStrength === 'Weak'
//                       ? 'text-red-500'
//                       : passwordStrength === 'Medium'
//                       ? 'text-yellow-500'
//                       : 'text-green-500'
//                   }`}>
//                     {passwordStrength} password
//                   </p>
//                 </div>
//               )}
//             </div>

//             {error && (
//               <div className="text-sm text-red-600 dark:text-red-400 font-medium">
//                 {error}
//               </div>
//             )}

//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="group relative flex w-full justify-center rounded-xl border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? 'Signing up...' : 'Sign up'}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
//             Already have an account?{' '}
//             <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
//               Log in
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/globalContext'
import { FiEye, FiEyeOff } from 'react-icons/fi'

export default function UserRegister() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordStrength, setPasswordStrength] = useState('')
  const navigate = useNavigate()
  const { registerUser } = useGlobalContext()
  const formRef = useRef(null)

  const triggerShake = () => {
    if (formRef.current) {
      formRef.current.classList.remove('animate-shake')
      void formRef.current.offsetWidth
      formRef.current.classList.add('animate-shake')
    }
  }

  const triggerSuccess = () => {
    if (formRef.current) {
      formRef.current.classList.remove('animate-success')
      void formRef.current.offsetWidth
      formRef.current.classList.add('animate-success')
    }
  }

  const evaluatePasswordStrength = (password) => {
    if (!password) return ''
    if (password.length < 6) return 'Weak'
    if (password.length < 10) return 'Moderate'
    return 'Strong'
  }

  const getStrengthColor = (strength) => {
    switch (strength) {
      case 'Weak': return 'text-red-500'
      case 'Moderate': return 'text-yellow-500'
      case 'Strong': return 'text-green-500'
      default: return 'text-gray-500'
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const pass = formData.get('password')

    if (!name || !email || !pass) {
      setError('All fields are required.')
      triggerShake()
      setIsLoading(false)
      return
    }

    try {
      const { token, user } = await registerUser(name, email, pass)
      if (token && user) {
        localStorage.setItem('user', token)
        triggerSuccess()
        setTimeout(() => navigate('/'), 500)
      } else {
        setError('Registration failed.')
        triggerShake()
      }
    } catch (err) {
      setError('An unexpected error occurred.')
      triggerShake()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Create your Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            Start managing your expenses smarter
          </p>
        </div>

        <div
          ref={formRef}
          className="bg-white dark:bg-gray-800 py-10 px-8 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 transition duration-300 ease-in-out"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Aman Saxena"
                className="mt-1 block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Email Address
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
                  autoComplete="new-password"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setPasswordStrength(evaluatePasswordStrength(e.target.value))
                  }}
                  className="block w-full rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-2 pr-12 text-sm shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 focus:ring-indigo-500 text-gray-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  tabIndex={-1}
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {password && (
                <p className={`mt-1 text-xs font-medium ${getStrengthColor(passwordStrength)}`}>
                  Strength: {passwordStrength}
                </p>
              )}
            </div>

            {error && (
              <div className="text-sm text-red-600 dark:text-red-400 font-medium">
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full justify-center rounded-xl border border-transparent bg-indigo-600 py-2 px-4 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Signing up...' : 'Sign up'}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
