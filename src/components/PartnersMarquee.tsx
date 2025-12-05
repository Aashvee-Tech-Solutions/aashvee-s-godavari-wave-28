const partners = [
  'TechVision', 'CloudNet', 'DataSync', 'InnoWave', 'DigiCore',
  'SmartSys', 'WebFlow', 'AppForge', 'CodeCraft', 'NetPulse',
  'ByteWorks', 'CyberEdge'
];

const PartnersMarquee = () => {
  return (
    <section className="py-12 bg-card/50 border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Our Featured Collaborations
        </h3>
      </div>

      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card/50 to-transparent z-10" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 px-8 py-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
            >
              <span className="font-display font-semibold text-lg text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
