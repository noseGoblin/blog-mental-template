import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='w-full relative flex items-start justify-between max-w-2xl px-4 py-5'>
      <Link href='/' className='font-bold text-3xl font-sans'>
        <span className='text-blue-400'>a</span>lliantgroup
        <span className='text-blue-400'>Blog</span>
      </Link>
    </nav>
  );
}
