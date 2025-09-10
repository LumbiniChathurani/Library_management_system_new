import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-20">
        <Topbar />
        <main className="flex-1 p-6 mt-16 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;
