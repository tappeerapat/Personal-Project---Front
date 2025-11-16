import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import HomePage from '../pages/HomePage';
import GuestLayout from '../layouts/GuestLayout';
import UserLayout from '../layouts/UserLayout';
import AdminLayout from '../layouts/AdminLayout';

import courseService from '@/services/course.service';
import CourseDetailPage from '@/pages/CourseDetailPage';

// ---- Layouts ----

// ---- Routers ----
const guestRouter = [
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '',
        element: <HomePage />,
        loader: courseService.getAll,
        hydrateFallbackElement: <div>Loading...</div>,
      },

      // public course browsing
      { path: 'courses', element: <p>Course List</p> },
      {
        path: 'courses/:id',
        element: <CourseDetailPage />,
        loader: courseService.getById,
        hydrateFallbackElement: <div>Loading...</div>,
      },

      { path: '*', element: <Navigate to="/" /> },
    ],
  },
];

const userRouter = [
  {
    path: '/user',
    element: <UserLayout />,
    children: [
      { path: '', element: <p>User Dashboard</p> },

      // booking system
      { path: 'courses', element: <p>Select Course</p> },
      { path: 'courses/:id', element: <p>Course Detail / Tee Times</p> },
      { path: 'booking/:teetimeId', element: <p>Booking Form</p> },
      { path: 'payment/:bookingId', element: <p>Payment Page</p> },

      // user personal pages
      { path: 'bookings', element: <p>My Bookings</p> },
      { path: 'profile', element: <p>User Profile</p> },

      { path: '*', element: <Navigate to="/user" /> },
    ],
  },
];

const adminRouter = [
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: '', element: <p>Admin Dashboard</p> },

      // CMS modules
      { path: 'courses', element: <p>Admin Course List</p> },
      { path: 'courses/new', element: <p>Create Course</p> },
      { path: 'courses/:id/edit', element: <p>Edit Course</p> },

      { path: 'tee-times', element: <p>Manage Tee Times</p> },
      { path: 'bookings', element: <p>Manage Bookings</p> },
      { path: 'payments', element: <p>Payment Records</p> },
      { path: 'course-images', element: <p>Course Images Manager</p> },

      { path: '*', element: <Navigate to="/admin" /> },
    ],
  },
];

function AppRouter({ role }) {
  let router;

  if (!role) router = guestRouter;
  else if (role === 'user') router = userRouter;
  else if (role === 'admin') router = adminRouter;

  return <RouterProvider router={createBrowserRouter(router)} />;
}

export default AppRouter;
