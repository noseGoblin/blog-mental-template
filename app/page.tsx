import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-start justify-between p-4'>
      <div>
        <Navbar />
        <h1>New alliangroup Blog</h1>
      </div>
    </main>
  );
}
