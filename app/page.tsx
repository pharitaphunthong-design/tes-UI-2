import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import OurWorkingProcess from '@/components/OurWorkingProcess ';
export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
    </main>
  );
}