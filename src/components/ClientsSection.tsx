import { Building2, GraduationCap, Globe } from 'lucide-react';

const clients = [
  {
    name: 'Ungaam',
    type: 'Enterprise',
    icon: Building2,
    description: 'Leading business solutions',
  },
  {
    name: 'Abit College',
    type: 'Education',
    icon: GraduationCap,
    description: 'Premier educational institution',
  },
  {
    name: 'MTEC86',
    type: 'Technology',
    icon: Globe,
    website: 'mtec86.ac.in',
    description: 'Technical excellence center',
  },
  {
    name: 'BVCR',
    type: 'Education',
    icon: GraduationCap,
    website: 'bvcr.edu.in',
    description: 'Quality education provider',
  },
];

const ClientsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4 animate-fade-in-up">
            Our Clients
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground animate-fade-in-up delay-100">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            We partner with forward-thinking organizations across education and enterprise sectors
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group relative p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-lg hover:border-primary/30 text-center animate-fade-in-up card-lift transition-all duration-300"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <client.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Info */}
              <div className="relative">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{client.type}</span>
                <h3 className="font-display text-xl font-bold text-foreground mt-1">{client.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{client.description}</p>
                {client.website && (
                  <a 
                    href={`https://${client.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs text-primary hover:text-accent transition-colors"
                  >
                    {client.website}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee of client names */}
        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="mx-8 text-2xl font-display font-bold text-muted-foreground/20">
                {client.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
