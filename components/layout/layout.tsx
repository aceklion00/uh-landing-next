import Head from 'next/head';
import { Footer } from './footer';
import { Navbar } from './navbar';

export function Layout(props: any) {
  return (<>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&amp;display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    <section id="root" className="main-content-wrapper z-0 pt-80">{props.children}</section>
    <Footer />
  </>);
}
