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
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className='flex w-full flex-col'>
   <section>
  <div className="relative w-full mx-auto 2xl:max-w-7xl">
    <div className="md:px-12 mt-8 px-8">
      <div
        x-data="{ open: false }"
        className="relative flex flex-col w-full mx-auto md:items-center md:justify-between md:flex-row border-t border-zinc-800 pt-2">
        <div
          className="flex flex-row items-center justify-between text-white lg:justify-start uppercase text-xs font-display">
          <a href="/"> Carriera</a>
          <button
            className="inline-flex items-center justify-center p-2 text-white hover:text-blue-400 focus:outline-none focus:text-white md:hidden"
            ><svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              ><path
                className="inline-flex"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"></path><path
                className="hidden"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path></svg
            ></button
          >
        </div>
        <nav
          className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row text-xs gap-4 font-display uppercase tracking-wide text-white">
          <a className="hover:text-zinc-500 lg:ml-auto duration-200" href="/"
            >Overview</a
          ><a
            className="hover:text-zinc-500 duration-200"
            href="/styleguide">Styleguide</a
          ><a
            href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/2c490f1d-6e5c-4690-9ade-038b802e07a0"
            className="hover:text-zinc-500">
            Buy Carriera</a
          >
        </nav>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
