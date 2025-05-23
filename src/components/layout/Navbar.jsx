import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import routes from "@/routes/routes"
import { useAuth } from "@/hooks/useAuth"

function Navbar() {
    const { isAuthenticated, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate(routes.public.home)
    }

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and site name */}
                    <Link to={routes.public.home} className="flex items-center">
                        <span className="font-bold text-xl">Vite React</span>
                    </Link>

                    {/* Navigation links */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            <Link
                                to={routes.public.home}
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                            >
                                Home
                            </Link>
                            <Link
                                to={routes.public.about}
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                            >
                                About
                            </Link>

                            {/* Show Dashboard link only if authenticated */}
                            {isAuthenticated && (
                                <Link
                                    to={routes.protected.dashboard}
                                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                                >
                                    Dashboard
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Auth buttons */}
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <Button onClick={handleLogout} variant="outline">
                                Log Out
                            </Button>
                        ) : (
                            <Link to={routes.public.login}>
                                <Button variant="default">Log In</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
