import { useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import { Button } from "@/components/ui/button"
import routes from "@/routes/routes"
import { toast } from "sonner"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const { login } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()

    // Get the page the user was trying to access before being redirected to login
    const from = location.state?.from || routes.protected.dashboard

    const handleLogin = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            toast.error("Error", {
                description: "Please enter both email and password",
            })
            return
        }

        setIsLoading(true)

        try {
            const result = await login({ email, password })

            if (result.success) {
                toast("Success", {
                    description: "You have been logged in successfully",
                })

                // Navigate to the page the user was trying to access or dashboard
                navigate(from, { replace: true })
            } else {
                toast.error("Login Failed", {
                    description: result.error || "Invalid email or password",
                })
            }
        } catch (error) {
            toast.error("Error", {
                description: "An error occurred during login",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or{" "}
                    <Link to={routes.public.home} className="font-medium text-primary hover:text-primary/90">
                        go back to the homepage
                    </Link>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-primary hover:text-primary/90">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button type="submit" className="w-full" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Sign in"}
                            </Button>
                        </div>

                        <div className="mt-4 text-sm text-gray-600">
                            <p className="text-center">
                                Use <strong>demo@example.com</strong> with password <strong>password</strong> for demo login
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
