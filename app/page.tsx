import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import OurWorkingProcess from '@/components/OurWorkingProcess ';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contactus from '@/components/Contactus';
import Footer from '@/components/Footer';
export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <OurWorkingProcess />
      <Team/>
      <Testimonials/>
      <Contactus/>
      <Footer/>
    </main>
  );
}