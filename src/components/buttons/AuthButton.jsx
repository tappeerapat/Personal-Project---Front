import { Link } from 'react-router';
import { Button } from '../ui/button';

import { Skeleton } from '../ui/skeleton';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export default function AuthButton({ onLogin }) {
  const { loading, user, logout } = useAuth();

  if (loading) {
    // user loading
    return (
      <Button variant="outline" asChild>
        <Skeleton className="h-9 w-20" />
      </Button>
    );
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="userImage" />
            <AvatarFallback>
              {user.firstName ? user.firstName.charAt(0) : 'user'}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={'/updateProfile'}>Edit profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to={'/'} onClick={logout}>
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <>
      <button
        onClick={onLogin}
        className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
      >
        <User size={18} />
        Sign In
      </button>
    </>
  );
}
