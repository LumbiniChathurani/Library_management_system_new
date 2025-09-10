import DashboardLayout from "../Components/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p className="text-gray-600 dark:text-gray-300">
        Welcome to the library management system.
      </p>
    </DashboardLayout>
  );
}

export default AdminDashboard;
