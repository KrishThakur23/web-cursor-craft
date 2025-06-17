
import { ArrowRight, Code, Palette, Zap, Users, CheckCircle, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+918882173672?text=Hi, I would like to discuss a website project with Aegentrix AI', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden relative">
      {/* Floating WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>

      {/* Header */}
      <header className={`container mx-auto px-4 sm:px-6 py-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} ${scrollY > 50 ? 'backdrop-blur-lg bg-gray-900/80 fixed top-0 left-0 right-0 z-40' : ''}`}>
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2 group">
            <Code className="w-8 h-8 text-purple-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="text-xl sm:text-2xl font-bold transition-all duration-300 group-hover:text-purple-300">Aegentrix AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-purple-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-purple-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="hover:text-purple-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-purple-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="hover:text-purple-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-purple-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Pricing
            </button>
            <Button 
              onClick={() => scrollToSection('cta')}
              variant="outline" 
              className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 blur-3xl animate-pulse"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            We Build Websites That Convert
          </h1>
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Professional web development with modern design, blazing performance, and seamless user experience.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              onClick={() => scrollToSection('cta')}
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/25 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              onClick={() => scrollToSection('portfolio')}
              size="lg" 
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 sm:px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:text-purple-300"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 hover:text-purple-300">Why Choose Aegentrix AI?</h2>
          <p className="text-gray-400 text-base sm:text-lg transition-all duration-500 hover:text-gray-300">We combine cutting-edge technology with creative design</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            { icon: Zap, title: "Lightning Fast", desc: "Built with modern frameworks for optimal performance and SEO.", delay: "0ms" },
            { icon: Palette, title: "Custom Design", desc: "Unique designs tailored to your brand and business goals.", delay: "200ms" },
            { icon: Users, title: "User-Focused", desc: "Designed with your users in mind for maximum engagement.", delay: "400ms" }
          ].map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group" style={{ animationDelay: feature.delay }}>
              <CardContent className="p-6 sm:p-8 text-center">
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white transition-all duration-300 group-hover:text-purple-300">{feature.title}</h3>
                <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-300 text-sm sm:text-base">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 hover:text-purple-300">Recent Projects</h2>
          <p className="text-gray-400 text-base sm:text-lg transition-all duration-500 hover:text-gray-300">See what we've built for our clients</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-500 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <div className="absolute bottom-4 left-4 transition-all duration-300 group-hover:scale-110">
                  <div className="w-3 h-3 bg-red-500 rounded-full inline-block mr-2 animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full inline-block mr-2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full inline-block animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white transition-all duration-300 group-hover:text-purple-300">E-commerce Platform</h3>
                <p className="text-gray-400 mb-4 transition-all duration-300 group-hover:text-gray-300 text-sm sm:text-base">Modern online store with advanced features</p>
                <div className="flex items-center text-purple-400 transition-all duration-300 group-hover:text-purple-300">
                  <span className="text-sm">View Project</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 hover:text-purple-300">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-base sm:text-lg transition-all duration-500 hover:text-gray-300">Choose the perfect plan for your needs</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {[
            { 
              title: "Starter", 
              price: "$2,999", 
              desc: "Perfect for small businesses",
              features: ['Responsive Design', 'Up to 5 Pages', 'Contact Form', 'Basic SEO'],
              highlight: false,
              delay: "0ms"
            },
            { 
              title: "Professional", 
              price: "$5,999", 
              desc: "For growing companies",
              features: ['Everything in Starter', 'Up to 15 Pages', 'CMS Integration', 'Advanced SEO', 'Analytics Setup'],
              highlight: true,
              delay: "200ms"
            },
            { 
              title: "Enterprise", 
              price: "$12,999", 
              desc: "For large organizations",
              features: ['Everything in Professional', 'Unlimited Pages', 'Custom Features', 'Priority Support', 'Ongoing Maintenance'],
              highlight: false,
              delay: "400ms"
            }
          ].map((plan, index) => (
            <Card 
              key={index} 
              className={`p-6 sm:p-8 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl group ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-purple-600/20 to-purple-800/20 border-purple-500 hover:shadow-purple-500/20 relative' 
                  : 'bg-gray-800/50 border-gray-700 hover:border-purple-400 hover:shadow-purple-400/10'
              }`}
              style={{ animationDelay: plan.delay }}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
                </div>
              )}
              <CardContent className="p-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white transition-all duration-300 group-hover:text-purple-300">{plan.title}</h3>
                <div className="text-3xl sm:text-4xl font-bold mb-4 text-purple-400 transition-all duration-300 group-hover:scale-110">{plan.price}</div>
                <p className="text-gray-400 mb-6 transition-all duration-300 group-hover:text-gray-300 text-sm sm:text-base">{plan.desc}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1 text-sm sm:text-base">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-3 transition-all duration-300 hover:scale-110 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className={`w-full transition-all duration-300 hover:scale-105 ${
                  plan.highlight 
                    ? 'bg-purple-600 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/25' 
                    : 'bg-gray-700 hover:bg-gray-600 hover:shadow-lg hover:shadow-gray-600/25'
                }`}>
                  {plan.title === 'Enterprise' ? 'Contact Us' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 transition-all duration-700 hover:text-purple-300">What Our Clients Say</h2>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {[
            {
              stars: 5,
              text: "Aegentrix AI delivered exactly what we needed. Our new website has increased our leads by 300%.",
              name: "Sarah Johnson",
              title: "CEO, TechStart",
              gradient: "from-purple-400 to-blue-400",
              delay: "0ms"
            },
            {
              stars: 5,
              text: "Professional, fast, and exactly what we envisioned. Highly recommend Aegentrix AI for any web project.",
              name: "Michael Chen",
              title: "Founder, GrowthCo",
              gradient: "from-green-400 to-blue-400",
              delay: "300ms"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 p-6 sm:p-8 transition-all duration-500 hover:transform hover:scale-105 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-400/10 group" style={{ animationDelay: testimonial.delay }}>
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current transition-all duration-300 hover:scale-110" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic transition-all duration-300 group-hover:text-white text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${testimonial.gradient} rounded-full mr-4 transition-all duration-300 group-hover:scale-110 flex-shrink-0`}></div>
                  <div>
                    <div className="font-semibold text-white transition-all duration-300 group-hover:text-purple-300 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-gray-400 text-xs sm:text-sm transition-all duration-300 group-hover:text-gray-300">{testimonial.title}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center max-w-3xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent transition-all duration-700 hover:scale-105">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 transition-all duration-500 hover:text-white">
              Let's build something amazing together. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-600/25 group">
                Start Your Project Today
                <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleWhatsAppClick}
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 sm:px-8 py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 group"
              >
                <svg className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.645"/>
                </svg>
                Contact on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 transition-all duration-500 hover:bg-gray-900/70">
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0 group">
              <Code className="w-8 h-8 text-purple-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <span className="text-xl sm:text-2xl font-bold transition-all duration-300 group-hover:text-purple-300">Aegentrix AI</span>
            </div>
            <div className="text-gray-400 transition-all duration-300 hover:text-gray-300 text-sm sm:text-base text-center">
              © 2024 Aegentrix AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
