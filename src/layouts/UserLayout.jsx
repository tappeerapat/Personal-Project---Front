import { Outlet } from 'react-router';

export default function UserLayout() {
  return (
    <div className="flex">
      <Header />
      <Outlet />
    </div>
  );
}
