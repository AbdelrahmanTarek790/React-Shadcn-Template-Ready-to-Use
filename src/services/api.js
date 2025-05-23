import axios from "axios"
import { toast } from "sonner"

// Create an axios instance with default configurations
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // You can add authorization headers here
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        const { response } = error

        // Handle different error status codes
        if (response) {
            switch (response.status) {
                case 401:
                    // Unauthorized - clear auth state and redirect to login
                    localStorage.removeItem("token")
                    // You might want to trigger a redirect to the login page
                    break

                case 403:
                    // Forbidden
                    toast.error("Permission Denied", {
                        description: "You don't have permission to access this resource",
                    })
                    break

                case 404:
                    // Not found
                    toast.error("Resource Not Found", {
                        description: "The requested resource could not be found",
                    })
                    break

                case 422:
                    // Validation errors
                    const validationErrors = response.data.errors
                    if (validationErrors) {
                        // Show first validation error
                        const firstError = Object.values(validationErrors)[0]
                        if (Array.isArray(firstError) && firstError.length > 0) {
                            toast.error("Validation Error", {
                                description: firstError[0],
                            })
                        }
                    }
                    break

                case 500:
                case 502:
                case 503:
                    // Server errors
                    toast.error("Server Error", {
                        description: "Something went wrong on our end. Please try again later.",
                    })
                    break

                default:
                    // Other errors
                    toast.error("Error", {
                        description: response.data?.message || "Something went wrong",
                    })
            }
        } else {
            // Network error or other issues
            toast.error("Network Error", {
                description: "Please check your internet connection and try again",
            })
        }

        return Promise.reject(error)
    }
)

export default api
