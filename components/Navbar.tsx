import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

export default function Navbar() {
  return (
    <nav className='w-full relative flex items-center justify-between p-4'>
      <Link href='/' className='font-bold text-3xl font-sans'>
        <span className='text-primary'>a</span>lliant
        <span className='text-primary'>Blog</span>
      </Link>

      <ModeToggle />
    </nav>
  );
}
