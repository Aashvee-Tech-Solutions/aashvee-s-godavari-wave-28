import { Linkedin, Mail, Award, Crown, Code, Users } from 'lucide-react';

const team = [
  {
    name: 'Dr. Yalla Venkat',
    role: 'Chief Executive Officer',
    shortRole: 'CEO',
    bio: 'Visionary leader driving AI innovation and strategic growth. Expert in technology transformation and business development.',
    icon: Crown,
    linkedin: '#',
    email: 'venkat@aashveetech.com',
    color: 'primary',
  },
  {
    name: 'Hemanth',
    role: 'Chief Technology Officer',
    shortRole: 'CTO',
    bio: 'Technical architect leading our AI and software engineering teams. Expert in machine learning and scalable systems.',
    icon: Code,
    linkedin: '#',
    email: 'hemanth@aashveetech.com',
    color: 'magenta',
  },
  {
    name: 'Mahesh',
    role: 'Head of Human Resources',
    shortRole: 'HR',
    bio: 'Building and nurturing our talented team. Expert in organizational development and culture building.',
    icon: Users,
    linkedin: '#',
    email: 'mahesh@aashveetech.com',
    color: 'accent',
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 neural-pattern opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-ai-magenta/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full ai-gradient-border text-primary text-sm font-semibold mb-4 animate-fade-in-up">
            Leadership Team
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up delay-100">
            Meet Our <span className="text-gradient">Managing Directors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            The visionary leaders driving Aashvee Tech Solutions towards AI excellence and innovation
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 rounded-3xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 text-center overflow-hidden card-lift">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-ai-magenta/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`w-28 h-28 mx-auto rounded-full p-1 ${
                    member.color === 'primary' ? 'bg-gradient-to-br from-primary to-ai-magenta' :
                    member.color === 'magenta' ? 'bg-gradient-to-br from-ai-magenta to-accent' :
                    'bg-gradient-to-br from-accent to-primary'
                  } animate-pulse-glow group-hover:animate-none`}>
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <member.icon className={`w-10 h-10 ${
                        member.color === 'primary' ? 'text-primary' :
                        member.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                      }`} />
                    </div>
                  </div>
                  
                  {/* Role Badge */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                    member.color === 'primary' ? 'bg-primary text-primary-foreground' :
                    member.color === 'magenta' ? 'bg-ai-magenta text-white' :
                    'bg-accent text-accent-foreground'
                  }`}>
                    <Award className="w-3 h-3" />
                    {member.shortRole}
                  </div>
                </div>

                {/* Info */}
                <div className="relative">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className={`font-medium text-sm mb-4 ${
                    member.color === 'primary' ? 'text-primary' :
                    member.color === 'magenta' ? 'text-ai-magenta' : 'text-accent'
                  }`}>
                    {member.role}
                  </p>
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
                      className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-ai-magenta hover:text-white transition-all duration-300"
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
