import Image from "next/image";
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className='w-full h-screen p-4'>
      <Navbar />
      <h1>New alliangroup Blog</h1>
    </div>
  );
}
