import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Home, Users, Mic, CheckCircle, AlertTriangle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const FeatureCard = ({ icon: Icon, title, description, actionText = "Get Started", comingSoon }) => {
  const { toast } = useToast();
  const handleActionClick = () => {
    toast({
      title: "Feature In Progress",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col bg-gray-800/60 backdrop-blur-md rounded-xl shadow-2xl p-6 hover:shadow-blue-500/30 transition-shadow duration-300 h-full"
    >
      <div className="flex items-center text-blue-400 mb-4">
        <Icon size={28} className="mr-3" />
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-cyan-400 text-transparent bg-clip-text">{title}</h3>
      </div>
      <p className="text-gray-300 flex-grow mb-4 text-sm">{description}</p>
      {comingSoon ? (
        <div className="mt-auto text-xs font-medium text-amber-400 bg-amber-900/50 px-3 py-1.5 rounded-full inline-flex items-center self-start">
          <AlertTriangle size={14} className="mr-1.5" />
          Feature Coming Soon
        </div>
      ) : (
        <Button 
          onClick={handleActionClick}
          variant="outline" 
          className="mt-auto w-full bg-blue-600/20 hover:bg-blue-500/40 border-blue-500 text-blue-300 hover:text-white transition-all duration-300"
        >
          {actionText} <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}
    </motion.div>
  );
};


const RealEstateHubPage = () => {
  const { toast } = useToast();
  const handleComingSoonClick = () => {
    toast({
      title: "Feature Coming Soon!",
      description: "This exciting feature is under development. Stay tuned!",
    });
  };

  const features = [
    {
      icon: MessageSquare,
      title: "Teams & WhatsApp Messaging",
      description: "Stay connected with clients via Microsoft Teams and WhatsApp integration for seamless communication.",
      actionText: "Explore Messaging",
    },
    {
      icon: Home,
      title: "Dynamic Inventory Showcase",
      description: "Expert custom agent showcases property listings seamlessly with dynamic and interactive presentations.",
      actionText: "View Inventory Portal",
    },
    {
      icon: Users,
      title: "AI Property Sales & Leads",
      description: "AI-driven property sales and lead qualification to efficiently manage and convert prospects.",
      actionText: "Boost Sales",
    },
    {
      icon: Mic,
      title: "Voice-Enabled Agentic AI",
      description: "Specialized voice-enabled Agentic AI provides instant support and property information.",
      actionText: "Try Voice AI",
      comingSoon: true,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Hub - Tech Friends IO</title>
        <meta name="description" content="Connect and engage with ease using our Real Estate Hub for Microsoft Teams & WhatsApp, AI-driven sales, dynamic inventory, and voice AI." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white">
        <section 
          className="relative py-20 md:py-32 text-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://storage.googleapis.com/hostinger-horizons-assets-prod/3cc6863b-aa63-40c5-9045-6df1c569a4c2/1623f6dedb92357c42027d3f02925d00.png')` }}
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 z-10 relative"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-500 text-transparent bg-clip-text">
                Connect & Engage
              </span>
              <br />
              <span className="text-gray-200">with Ease</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              The Microsoft Teams and WhatsApp app for messaging, inventory presentation, property sales, and customer service.
            </p>
            <Button
              onClick={handleComingSoonClick}
              size="lg"
              className="text-lg px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </section>

        <section id="what-we-offer" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 text-transparent bg-clip-text"
            >
              What We Offer
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <FeatureCard 
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  actionText={feature.actionText}
                  comingSoon={feature.comingSoon}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="instant-support-ai" className="py-16 md:py-24 bg-gray-900/50">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text"
            >
              Instant Support via AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
            >
              Our AI-powered assistant provides real-time answers to customer inquiries, ensuring seamless interaction and enhanced satisfaction.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center items-center space-x-8"
            >
              <div className="flex items-center text-2xl font-semibold text-gray-200">
                <img  alt="Microsoft Teams Logo" class="h-10 w-10 mr-3" src="https://images.unsplash.com/photo-1643546352161-3c34e040b495" />
                Microsoft Teams
              </div>
              <div className="flex items-center text-2xl font-semibold text-gray-200">
                <img  alt="WhatsApp Logo" class="h-10 w-10 mr-3" src="https://images.unsplash.com/photo-1599382103240-5f2a57137d28" />
                WhatsApp
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealEstateHubPage;