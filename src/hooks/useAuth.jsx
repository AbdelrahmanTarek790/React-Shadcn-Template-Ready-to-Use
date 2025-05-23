import { useState, useEffect, createContext, useContext } from "react"

// Create context for authentication
const AuthContext = createContext(null)

// Provider component to wrap around the app
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    // Check for existing token on mount
    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("token")
            if (token) {
                // You could validate the token with your API here
                setIsAuthenticated(true)

                // For demo purposes, we'll just set a mock user
                setUser({
                    id: 1,
                    name: "John Doe",
                    email: "john@example.com",
                    role: "user",
                })
            }
            setIsLoading(false)
        }

        checkAuth()
    }, [])

    // Login function
    const login = async (credentials) => {
        try {
            // Here you would normally call your API for authentication
            // For demo purposes, we'll just mock a successful login
            const { email, password } = credentials

            if (email === "demo@example.com" && password === "password") {
                // Mock token
                const mockToken = "mock_token_" + Math.random().toString(36).substring(2)
                localStorage.setItem("token", mockToken)

                // Set user data
                setUser({
                    id: 1,
                    name: "John Doe",
                    email,
                    role: "user",
                })

                setIsAuthenticated(true)
                return { success: true }
            } else {
                return {
                    success: false,
                    error: "Invalid email or password",
                }
            }
        } catch (error) {
            console.error("Login error:", error)
            return {
                success: false,
                error: error.message || "An error occurred during login",
            }
        }
    }

    // Logout function
    const logout = () => {
        localStorage.removeItem("token")
        setUser(null)
        setIsAuthenticated(false)
    }

    const authContextValue = {
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
    }

    return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

// Custom hook to use the auth context
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
