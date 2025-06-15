
import { ArrowRight, Code, Palette, Zap, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-purple-400" />
            <span className="text-2xl font-bold">WebCraft</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-purple-400 transition-colors">Portfolio</a>
            <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            We Build Websites That Convert
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Professional web development with modern design, blazing performance, and seamless user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose WebCraft?</h2>
          <p className="text-gray-400 text-lg">We combine cutting-edge technology with creative design</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Fast</h3>
              <p className="text-gray-400">Built with modern frameworks for optimal performance and SEO.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <Palette className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-white">Custom Design</h3>
              <p className="text-gray-400">Unique designs tailored to your brand and business goals.</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4 text-white">User-Focused</h3>
              <p className="text-gray-400">Designed with your users in mind for maximum engagement.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-gray-400 text-lg">See what we've built for our clients</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-purple-500 transition-all duration-300 group">
              <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full inline-block mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full inline-block mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full inline-block"></div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">E-commerce Platform</h3>
                <p className="text-gray-400 mb-4">Modern online store with advanced features</p>
                <div className="flex items-center text-purple-400">
                  <span className="text-sm">View Project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400 text-lg">Choose the perfect plan for your needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-white">Starter</h3>
              <div className="text-4xl font-bold mb-4 text-purple-400">$2,999</div>
              <p className="text-gray-400 mb-6">Perfect for small businesses</p>
              <ul className="space-y-3 mb-8">
                {['Responsive Design', 'Up to 5 Pages', 'Contact Form', 'Basic SEO'].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gray-700 hover:bg-gray-600">Get Started</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-purple-600/20 to-purple-800/20 border-purple-500 p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm">Most Popular</span>
            </div>
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-white">Professional</h3>
              <div className="text-4xl font-bold mb-4 text-purple-400">$5,999</div>
              <p className="text-gray-400 mb-6">For growing companies</p>
              <ul className="space-y-3 mb-8">
                {['Everything in Starter', 'Up to 15 Pages', 'CMS Integration', 'Advanced SEO', 'Analytics Setup'].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Get Started</Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-4 text-white">Enterprise</h3>
              <div className="text-4xl font-bold mb-4 text-purple-400">$12,999</div>
              <p className="text-gray-400 mb-6">For large organizations</p>
              <ul className="space-y-3 mb-8">
                {['Everything in Professional', 'Unlimited Pages', 'Custom Features', 'Priority Support', 'Ongoing Maintenance'].map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gray-700 hover:bg-gray-600">Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <CardContent className="p-0">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "WebCraft delivered exactly what we needed. Our new website has increased our leads by 300%."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-gray-400 text-sm">CEO, TechStart</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 border-gray-700 p-8">
            <CardContent className="p-0">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "Professional, fast, and exactly what we envisioned. Highly recommend WebCraft for any web project."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-white">Michael Chen</div>
                  <div className="text-gray-400 text-sm">Founder, GrowthCo</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's build something amazing together. Get started with a free consultation.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg">
            Start Your Project Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Code className="w-8 h-8 text-purple-400" />
              <span className="text-2xl font-bold">WebCraft</span>
            </div>
            <div className="text-gray-400">
              © 2024 WebCraft. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
