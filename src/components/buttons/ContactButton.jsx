import React from 'react';
import { MenuItem } from '../Header';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Phone } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

function ContactButton() {
  const { user } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MenuItem icon={<Phone size={18} />} label="Contact" />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>
          <p className="text-center">⛳</p>
          <p>teegolf@gmail.com</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <p>Tel: 02-1234567-89</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ContactButton;
