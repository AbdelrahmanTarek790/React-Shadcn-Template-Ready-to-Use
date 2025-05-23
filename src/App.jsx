import { AuthProvider } from "@/hooks/useAuth"
import AppRoutes from "@/routes/AppRoutes"

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    )
}

export default App
