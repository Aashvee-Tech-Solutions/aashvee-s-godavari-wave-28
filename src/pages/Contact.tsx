import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Aashvee Tech Solutions - Get in Touch</title>
        <meta name="description" content="Contact Aashvee Tech Solutions for AI solutions, web development, mobile apps, and digital transformation. Located in Andhra Pradesh, India." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20 relative overflow-hidden hero-gradient">
            <div className="absolute inset-0 neural-pattern opacity-30" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full ai-gradient-border text-sm font-semibold mb-6 animate-fade-in-up">
                  <Sparkles className="w-4 h-4 text-accent animate-pulse" />
                  <span className="text-gradient">Let's Connect</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
                  Start Your <span className="text-gradient">AI Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in-up delay-200">
                  Ready to transform your business? We're here to help you succeed.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="animate-slide-in-left">
                  <h2 className="font-display text-3xl font-bold mb-8">
                    Get in <span className="text-gradient">Touch</span>
                  </h2>
                  
                  <div className="space-y-6 mb-12">
                    {[
                      { icon: MapPin, label: 'Address', value: 'Andhra Pradesh, India', color: 'primary' },
                      { icon: Phone, label: 'Phone', value: '+91 98765 43210', color: 'magenta' },
                      { icon: Mail, label: 'Email', value: 'info@aashveetech.com', color: 'accent' },
                      { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9:00 AM - 6:00 PM', color: 'primary' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-2xl glass">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          item.color === 'primary' ? 'bg-primary/20' :
                          item.color === 'magenta' ? 'bg-ai-magenta/20' : 'bg-accent/20'
                        }`}>
                          <item.icon className={`w-6 h-6 ${
                            item.color === 'primary' ? 'text-primary' :
                            item.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                          }`} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Services */}
                  <div className="p-6 rounded-2xl glass">
                    <h3 className="font-display font-bold mb-4">Quick Services</h3>
                    <div className="flex flex-wrap gap-2">
                      {['AI Solutions', 'Web Development', 'Mobile Apps', 'CMS Software', 'Dashboards', 'Cloud'].map((service) => (
                        <span key={service} className="px-3 py-1.5 rounded-full text-sm bg-primary/10 text-primary">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="animate-slide-in-right delay-200">
                  <form onSubmit={handleSubmit} className="p-8 rounded-3xl glass">
                    <h3 className="font-display text-2xl font-bold mb-6">Send us a Message</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="+91 00000 00000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                          placeholder="Your company"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Service Interested In</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        <option value="ai">AI Solutions</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile Apps</option>
                        <option value="cms">CMS Software</option>
                        <option value="dashboard">Dashboards</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <Button type="submit" variant="hero" size="xl" className="w-full group">
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Contact;
