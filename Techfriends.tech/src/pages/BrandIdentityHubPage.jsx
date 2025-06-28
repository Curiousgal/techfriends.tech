import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Palette, Image as ImageIcon, Users, Layers, CheckSquare, BarChart, Zap, ThumbsUp, Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const { toast } = useToast();
  const handleActionClick = () => {
    toast({
      title: "Feature In Progress",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: delay * 0.15 }}
      className="flex flex-col bg-gradient-to-br from-gray-800/70 via-gray-850/80 to-gray-900/90 backdrop-blur-lg rounded-xl shadow-2xl p-6 hover:shadow-purple-500/40 transition-all duration-300 h-full group"
    >
      <div className="flex items-center text-purple-400 mb-5">
        <Icon size={32} className="mr-4 group-hover:scale-110 transition-transform duration-300" />
        <h3 className="text-2xl font-semibold bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text group-hover:brightness-110 transition-all duration-300">{title}</h3>
      </div>
      <p className="text-gray-300 flex-grow mb-6 text-sm leading-relaxed">{description}</p>
      <Button
        onClick={handleActionClick}
        variant="outline"
        className="mt-auto w-full bg-purple-600/20 hover:bg-purple-500/40 border-purple-500 text-purple-300 hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/30"
      >
        Learn More <Sparkles className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

const BenefitPill = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className="flex items-center bg-gray-700/50 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-gray-600/70 transition-colors duration-300"
  >
    <Icon className="h-5 w-5 text-purple-400 mr-2.5" />
    <span className="text-sm text-gray-200 font-medium">{text}</span>
  </motion.div>
);

const BrandIdentityHubPage = () => {
  const { toast } = useToast();

  const features = [
    {
      icon: ImageIcon,
      title: "Social Media Assets",
      description: "Eye-catching visuals optimized for all your social platforms, ensuring brand consistency and engagement.",
    },
    {
      icon: BarChart,
      title: "Marketing Materials",
      description: "Professionally designed marketing collateral, from digital ads to print brochures, that resonate with your audience.",
    },
    {
      icon: Layers,
      title: "Stunning Presentations",
      description: "Compelling slide decks and presentation templates that captivate and clearly convey your message.",
    },
    {
      icon: Zap,
      title: "Platform-Ready Visuals",
      description: "Generate perfectly sized and formatted visuals for any platform in seconds, adhering strictly to your brand guidelines.",
    },
  ];

  const benefits = [
    { icon: ThumbsUp, text: "Enhanced Brand Recognition" },
    { icon: CheckSquare, text: "Consistent Brand Messaging" },
    { icon: Palette, text: "Cohesive Visual Identity" },
    { icon: Users, text: "Stronger Audience Connection" },
    { icon: Sparkles, text: "Increased Engagement" },
  ];

  return (
    <>
      <Helmet>
        <title>Brand Identity Hub - Tech Friends IO</title>
        <meta name="description" content="Elevate your brand with Tech Friends IO. We provide strategic design for social media, marketing, presentations, and platform-ready visuals, ensuring brand consistency and recognition." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-bl from-gray-900 via-black to-slate-900 text-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 md:py-36 text-center overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 -z-0">
            <img 
              alt="Abstract background with brand identity elements"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1663630487487-05d4f899da6c" />
          </div>
          <div className="container mx-auto px-6 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              <Palette className="w-20 h-20 text-purple-500 mx-auto mb-8 opacity-80" />
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text leading-tight">
                  Elevate Your Brand Identity
                </span>
                <span className="block text-4xl md:text-5xl mt-2 text-gray-300">with Strategic Design & Consistency</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Cohesive, bold, Brand Tech empowers your brand recognition assets for social media material, marketing, presentations, and platform-ready visuals in seconds—all following your brand guidelines.
              </p>
              <Button
                onClick={() => {
                  const servicesSection = document.getElementById('brand-services');
                  servicesSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                size="lg"
                className="text-lg px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg shadow-xl hover:shadow-purple-500/60 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Discover Our Approach <Sparkles className="ml-2.5 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section id="brand-services" className="py-20 md:py-28 bg-black/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 text-transparent bg-clip-text"
            >
              Our Brand-Building Solutions
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-28">
           <div className="container mx-auto px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text"
            >
              Key Benefits of Strong Branding
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <BenefitPill key={benefit.text} icon={benefit.icon} text={benefit.text} delay={index} />
              ))}
            </div>
           </div>
        </section>

        <section className="py-20 md:py-28 bg-gradient-to-t from-gray-900 to-black/50">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-purple-300"
                >
                    Ready to Transform Your Brand?
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Let's discuss how Tech Friends IO can create a powerful and consistent brand identity that sets you apart.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button 
                        size="lg" 
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({ behavior: 'smooth' });
                            } else {
                                // Fallback if contact section is on another page or not found
                                window.location.href = '/#contact';
                            }
                        }}
                        className="text-lg px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded-lg shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Get a Branding Consultation
                    </Button>
                </motion.div>
            </div>
        </section>

      </div>
    </>
  );
};

export default BrandIdentityHubPage;