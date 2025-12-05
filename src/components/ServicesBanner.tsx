import { Code, Smartphone, Layout, Database, Globe, Palette } from 'lucide-react';

const services = [
  { icon: Code, label: 'CMS Software' },
  { icon: Smartphone, label: 'App Development' },
  { icon: Globe, label: 'Web Development' },
  { icon: Database, label: 'Dashboards' },
  { icon: Layout, label: 'Custom Software' },
  { icon: Palette, label: 'UI/UX Design' },
];

const ServicesBanner = () => {
  return (
    <section className="relative py-6 overflow-hidden bg-gradient-to-r from-primary via-accent to-primary">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)] animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          <span className="font-display font-bold text-lg text-white">We Build:</span>
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 hover:bg-white/25 transition-all cursor-default"
            >
              <service.icon className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white whitespace-nowrap">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;
