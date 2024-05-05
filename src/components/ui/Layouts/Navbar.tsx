import Link from 'next/link';
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function Navbar() {
  return (
    <div className='flex w-full flex-col'>
      <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-20 '>
        <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-between md:gap-5 md:text-sm lg:gap-6 '>
          <Link
            href='#'
            className='flex items-center gap-2 text-lg font-semibold md:text-base'
          >
            <Package2 className='h-6 w-6' />
            <span className='sr-only'>Acme Inc</span>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link
                href='#'
                className='flex items-center gap-2 text-lg font-semibold'
              >
                <Package2 className='h-6 w-6' />
                <span className='sr-only'>Acme Inc</span>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
          <form className='ml-auto flex-1 sm:flex-initial'>
            <div className='relative'></div>
          </form>

          <Button variant='secondary' className='rounded-full'>
            <Link href='/post-job'>Post a Job</Link>
          </Button>
        </div>
      </header>
    </div>
  );
}
