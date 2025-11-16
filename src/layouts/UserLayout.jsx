export default function UserLayout() {
  return (
    <div className="flex">
      <aside className="w-64 border-r">Sidebar</aside>
      <main className="flex-1">
        <header className="p-4 border-b">User Header</header>
        <Outlet />
      </main>
    </div>
  );
}
