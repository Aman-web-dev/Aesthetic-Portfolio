import Image from 'next/image'
import { Inter } from 'next/font/google'
import manpng from '../public/man.png'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import Intro from '@/components/Intro'
import About from '@/components/About';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Work from '@/components/Work';
import Contact from '@/components/Contact';

export default function Home() {
  return (

    <>

    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Borel&display=swap" rel="stylesheet"/>
    </Head>
    
<main className='bg-no-repeat bg-center bg-fixed'
style={{
  background: "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(227,217,217,0.9641981792717087) 50%)",
  backgroundImage: `url(${manpng.src})`,
  backgroundSize:" 90vh",
  backgroundClip: "content-box",
  backgroundRepeat:"no-repeat",
  backgroundAttachment: "fixed",
  backgroundPosition: "center center",


}}
>

    
<Navbar/>
<Intro/>
<About/> 
<Projects/>
<Work/>
<Contact/>

    </main>

    </>
  );
}


