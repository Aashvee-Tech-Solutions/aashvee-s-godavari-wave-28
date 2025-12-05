import { Code, Smartphone, Megaphone, Palette, Cloud, CreditCard } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    features: [
      'Custom business websites & portals',
      'E-commerce store development',
      'CMS & dynamic website solutions',
      'SEO-friendly, high-performance builds'
    ],
    color: 'primary'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    features: [
      'Android app development',
      'iOS app development',
      'Cross-platform app solutions',
      'API integration & backend systems'
    ],
    color: 'accent'
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    features: [
      'Search engine optimization (SEO)',
      'Social media marketing & ads',
      'Google Ads & PPC campaigns',
      'Content creation & brand strategy'
    ],
    color: 'primary'
  },
  {
    icon: Palette,
    title: 'UI/UX & Graphic Design',
    features: [
      'Website & app UI/UX design',
      'Brand identity & logo design',
      'Marketing materials & creatives',
      'Interactive prototypes & wireframes'
    ],
    color: 'accent'
  },
  {
    icon: Cloud,
    title: 'Cloud Hosting Solutions',
    features: [
      'Secure & scalable cloud hosting',
      'Data backup & disaster recovery',
      'Dedicated & shared hosting plans',
      '24/7 server monitoring & support'
    ],
    color: 'primary'
  },
  {
    icon: CreditCard,
    title: 'NFC Digital Cards',
    features: [
      'Smart contactless business cards',
      'Custom branding & designs',
      'Easy sharing via tap or scan',
      'Integration with websites & apps'
    ],
    color: 'accent'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How We Can <span className="text-gradient">Help You</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and accelerate growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-card/80 backdrop-blur border border-border hover:border-primary/50 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-xl mb-6 flex items-center justify-center ${
                service.color === 'primary' 
                  ? 'bg-primary/20 group-hover:bg-primary/30' 
                  : 'bg-accent/20 group-hover:bg-accent/30'
              } transition-colors duration-300`}>
                <service.icon className={`w-8 h-8 ${
                  service.color === 'primary' ? 'text-primary' : 'text-accent'
                }`} />
              </div>

              {/* Title */}
              <h3 className="relative font-display text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Features */}
              <ul className="relative space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                      service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  service.color === 'primary' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'
                }`}>
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
