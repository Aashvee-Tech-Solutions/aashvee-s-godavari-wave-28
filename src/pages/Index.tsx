import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PartnersMarquee from '@/components/PartnersMarquee';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aashvee Tech Solutions | Web Development, Mobile Apps & Digital Marketing</title>
        <meta name="description" content="Aashvee Tech Solutions - Your perfect digital partner for web development, mobile app development, digital marketing, and cloud solutions. Transform your business today." />
        <meta name="keywords" content="web development, mobile app development, digital marketing, UI/UX design, cloud hosting, Aashvee Tech" />
        <link rel="canonical" href="https://aashveetech.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <PartnersMarquee />
          <ServicesSection />
          <StatsSection />
          <AboutSection />
          <PortfolioSection />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
