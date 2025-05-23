import { useState } from "react"
import api from "@/services/api"

export const useAxios = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = async ({ url, method = "GET", data = null, config = {} }) => {
        setLoading(true)
        setError(null)

        try {
            let response

            switch (method.toUpperCase()) {
                case "GET":
                    response = await api.get(url, { ...config })
                    break
                case "POST":
                    response = await api.post(url, data, { ...config })
                    break
                case "PUT":
                    response = await api.put(url, data, { ...config })
                    break
                case "PATCH":
                    response = await api.patch(url, data, { ...config })
                    break
                case "DELETE":
                    response = await api.delete(url, { ...config })
                    break
                default:
                    throw new Error(`Unsupported method: ${method}`)
            }

            return response
        } catch (err) {
            setError(err.response?.data?.message || err.message || "Something went wrong")
            return null
        } finally {
            setLoading(false)
        }
    }

    return { loading, error, sendRequest }
}
