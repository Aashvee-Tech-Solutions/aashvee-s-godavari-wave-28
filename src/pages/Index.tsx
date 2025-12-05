import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesBanner from '@/components/ServicesBanner';
import ClientsSection from '@/components/ClientsSection';
import AIProductsSection from '@/components/AIProductsSection';
import ServicesSection from '@/components/ServicesSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aashvee Tech Solutions | First AI Company in Andhra Pradesh</title>
        <meta name="description" content="Aashvee Tech Solutions - Pioneering AI innovation in Andhra Pradesh. Custom software, web development, mobile apps, CMS, dashboards, and AI-powered solutions." />
        <meta name="keywords" content="AI company Andhra Pradesh, artificial intelligence, web development, mobile apps, CMS software, dashboards, data learning, Aashvee Tech" />
        <link rel="canonical" href="https://aashveetech.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <ServicesBanner />
          <ClientsSection />
          <AIProductsSection />
          <ServicesSection />
          <StatsSection />
          <TestimonialsSlider />
          <TeamSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
