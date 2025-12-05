import { useEffect, useState, useRef } from 'react';
import { Brain, Users, Award, Rocket } from 'lucide-react';

const stats = [
  { icon: Brain, value: 50, suffix: '+', label: 'AI Solutions Deployed' },
  { icon: Users, value: 100, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 5, suffix: '+', label: 'Years of Excellence' },
  { icon: Rocket, value: 200, suffix: '+', label: 'Projects Delivered' },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-muted/30">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-white border border-border shadow-sm animate-fade-in-up card-lift" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
