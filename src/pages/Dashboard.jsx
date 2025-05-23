import { useAuth } from "@/hooks/useAuth"

function Dashboard() {
    const { user } = useAuth()

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Welcome, {user?.name || "User"}!</h2>
                <p className="text-gray-600">This is a protected page that requires authentication to access.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-lg font-medium mb-4">Account Information</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Name:</span>
                            <span className="font-medium">{user?.name || "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Email:</span>
                            <span className="font-medium">{user?.email || "N/A"}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Role:</span>
                            <span className="font-medium">{user?.role || "User"}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></div>
                            <div>
                                <p className="text-gray-800">Logged in successfully</p>
                                <p className="text-gray-500 text-sm">{new Date().toLocaleString()}</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></div>
                            <div>
                                <p className="text-gray-800">Profile information updated</p>
                                <p className="text-gray-500 text-sm">{new Date(Date.now() - 86400000).toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
