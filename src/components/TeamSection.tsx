import { Linkedin, Mail, Award } from 'lucide-react';

const team = [
  {
    name: 'Dr. Yalla Venkat',
    role: 'Director & CEO',
    bio: 'Visionary leader with expertise in technology strategy and business development. Driving innovation and growth at Aashvee Tech Solutions.',
    image: null,
    linkedin: '#',
    email: 'venkat@aashveetech.com'
  },
  {
    name: 'Hemanth',
    role: 'Director & CTO',
    bio: 'Technical architect with deep expertise in software development and cloud infrastructure. Leading our engineering excellence.',
    image: null,
    linkedin: '#',
    email: 'hemanth@aashveetech.com'
  },
  {
    name: 'Mahesh',
    role: 'Director & COO',
    bio: 'Operations expert ensuring seamless project delivery and client satisfaction. Orchestrating our path to success.',
    image: null,
    linkedin: '#',
    email: 'mahesh@aashveetech.com'
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 hex-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-4">
            Our Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Meet Our <span className="text-gradient">Directors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The visionary leaders driving Aashvee Tech Solutions towards excellence and innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 rounded-3xl bg-card border border-border hover:border-primary/50 transition-all duration-500 text-center overflow-hidden">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-pulse-glow group-hover:animate-none">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    Director
                  </div>
                </div>

                {/* Info */}
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
