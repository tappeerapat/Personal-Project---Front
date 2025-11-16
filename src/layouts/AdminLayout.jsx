import { Outlet } from 'react-router';

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-black text-white p-4">Admin Panel</header>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
