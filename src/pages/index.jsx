import Head from 'next/head';

import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Contact } from '@/components/Contact';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ysely - Développeur Freelance Web et Mobile</title>
        <meta
          name="description"
          content="Le développeur Full-Stack Freelance qui vous accompagne pour co-construire votre projet Web ou Mobile"
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Testimonials />
        <Faqs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
