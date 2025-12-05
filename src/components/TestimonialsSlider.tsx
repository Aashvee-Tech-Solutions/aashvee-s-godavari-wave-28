import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Aashvee Tech Solutions transformed our business with their AI-powered analytics. Their Data Learning platform gave us insights we never knew we needed.",
    author: "Managing Director",
    company: "Ungaam",
    rating: 5,
  },
  {
    quote: "The custom CMS they built for our college is exceptional. Student management has never been easier. Truly innovative team!",
    author: "Principal",
    company: "Abit College",
    rating: 5,
  },
  {
    quote: "Their dashboard solutions helped us streamline operations across departments. Outstanding service and support from the team.",
    author: "Administrator",
    company: "MTEC86",
    rating: 5,
  },
  {
    quote: "Professional, innovative, and reliable. Aashvee Tech delivered our web portal on time with features that exceeded our expectations.",
    author: "IT Head",
    company: "BVCR",
    rating: 5,
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden hero-gradient">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4 animate-fade-in-up">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground animate-fade-in-up delay-100">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
        </div>

        {/* Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-border shadow-lg animate-fade-in-up delay-200">
            {/* Quote Icon */}
            <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Quote Text */}
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-medium">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-accent text-2xl">★</span>
              ))}
            </div>

            {/* Author */}
            <div>
              <p className="font-display font-bold text-lg text-foreground">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-primary font-medium">
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
