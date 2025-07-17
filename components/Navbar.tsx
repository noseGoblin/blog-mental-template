import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import MentalHealthHubLogo from './MentalHealthHubLogo';

export default function Navbar() {
  return (
    <nav className='w-full relative flex items-center justify-between p-4'>
      <Link href='/' className='font-bold text-3xl font-sans'>
        <MentalHealthHubLogo width={200} height={80} />
      </Link>

      <ModeToggle />
    </nav>
  );
}
