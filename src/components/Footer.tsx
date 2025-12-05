import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUp, Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-primary via-ai-magenta to-accent flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">Aashvee Tech</h3>
                <p className="text-xs text-ai-gold font-medium">First AI Company in AP</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Pioneering AI innovation in Andhra Pradesh. We transform businesses with 
              cutting-edge artificial intelligence, custom software, and intelligent automation.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Youtube, href: '#' },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gradient">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', to: '/' },
                { name: 'About Us', to: '/about' },
                { name: 'Services', to: '/services' },
                { name: 'AI Products', to: '/ai-products' },
                { name: 'Portfolio', to: '/portfolio' },
                { name: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gradient">Our Services</h4>
            <ul className="space-y-3">
              {[
                'AI Solutions',
                'Web Development',
                'Mobile Apps',
                'CMS Software',
                'Dashboards',
                'Cloud Solutions',
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-ai-magenta/50 group-hover:bg-ai-magenta transition-colors" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gradient">Contact Info</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Andhra Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-ai-magenta flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>info@aashveetech.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Aashvee Tech Solutions. All rights reserved. | First AI Company in Andhra Pradesh
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-ai-magenta flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
