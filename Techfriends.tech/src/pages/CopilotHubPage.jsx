import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bot, Brain, Cloud, Code, Cpu, Database, ExternalLink, Layers, MessageSquare, Zap, CheckCircle, Settings, Shield, Briefcase, ArrowRight, Network, Columns, GitBranch, HardDrive } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const FeatureTableItem = ({ feature, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="p-4 border-b border-gray-700/70 last:border-b-0 md:grid md:grid-cols-3 md:gap-4 items-start"
    >
      <h4 className="font-semibold text-purple-300 text-md mb-1 md:mb-0 md:col-span-1">{feature}</h4>
      <p className="text-gray-400 text-sm md:col-span-2">{description}</p>
    </motion.div>
  );
};

const UseCaseCard = ({ icon: Icon, title, description, delay }) => {
  const { toast } = useToast();
  const handleActionClick = () => {
    toast({
      title: "Use Case Exploration",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.15 }}
      className="flex flex-col bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-md rounded-xl shadow-xl p-6 hover:shadow-purple-500/40 transition-all duration-300 group h-full"
    >
      <div className="flex items-center text-purple-400 mb-4">
        <Icon size={30} className="mr-3.5 group-hover:scale-110 transition-transform" />
        <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-300 to-pink-400 text-transparent bg-clip-text">{title}</h3>
      </div>
      <p className="text-gray-300 flex-grow mb-5 text-sm leading-relaxed">{description}</p>
      <Button
        onClick={handleActionClick}
        variant="outline"
        className="mt-auto w-full bg-purple-600/25 hover:bg-purple-500/40 border-purple-500 text-purple-300 hover:text-white transition-all duration-300 group-hover:shadow-md group-hover:shadow-purple-500/30"
      >
        Explore More <Zap className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
};

const BenefitListItem = ({ text, delay }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: delay * 0.1 }}
    className="flex items-center mb-2.5"
  >
    <CheckCircle className="h-5 w-5 mr-3 text-green-400 flex-shrink-0" />
    <span className="text-gray-300 text-sm">{text}</span>
  </motion.li>
);

const CopilotHubPage = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  const features = [
    { feature: "Microsoft Copilot for M365", description: "Seamlessly integrated in Word, Excel, PowerPoint, Outlook, and Teams—Copilot helps draft, summarize, analyze, and automate your daily workflows." },
    { feature: "Custom Copilot Agents", description: "Domain-specific agents built using Microsoft Copilot Studio—trained on your internal data, processes, and business goals." },
    { feature: "Multichannel Deployment", description: "Agents work inside Teams, web apps, portals, and even WhatsApp via approved connectors." },
    { feature: "Adaptive Cards & Actions", description: "Visual responses, embedded workflows, and actionable messages for smarter user experiences." },
    { feature: "Private Access & Compliance", description: "Secure, enterprise-ready deployment using Microsoft Entra ID, with optional private LLMs and local connectors." },
  ];

  const useCases = [
    { icon: Bot, title: "Chat-Land Real Estate", description: "Smart companion surfacing listings, qualifying leads, and chatting on Teams or WhatsApp." },
    { icon: Layers, title: "Permit Assistant", description: "AI agent for navigating permit approvals, contractor docs, and city workflows." },
    { icon: Cpu, title: "Internal Productivity", description: "Schedule meetings, answer HR questions, analyze data, or summarize reports efficiently." },
  ];

  const deploymentOptions = [
    { icon: Cloud, title: "Fully Cloud-Based", description: "Microsoft-hosted via Copilot Studio for ease of use and scalability." },
    { icon: HardDrive, title: "Hybrid or Private Mode", description: "Windows or Docker container with agent cards + plugin APIs for enhanced control." },
    { icon: GitBranch, title: "Scalable Deployment", description: "Across regions and departments with human-in-the-loop configuration options." },
  ];
  
  const copilotBenefits = [
    "Native Microsoft 365 productivity",
    "Fast no-code/low-code agent creation",
    "Natural language interface for apps & APIs",
    "Backed by Microsoft’s security & compliance foundation",
    "Fully extensible for enterprise needs"
  ];

  return (
    <>
      <Helmet>
        <title>Microsoft Copilot Hub - Tech Friends IO</title>
        <meta name="description" content="Empower your workforce with Microsoft Copilot and custom Copilot Agents. Streamline tasks, enhance decision-making, and elevate teamwork." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-indigo-900 text-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative py-24 md:py-32 text-center overflow-hidden"
          style={{ backgroundImage: `linear-gradient(rgba(10, 0, 30, 0.8), rgba(5, 0, 15, 0.9)), url('https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070')` }}
        >
          <div className="absolute inset-0 bg-black/30 opacity-50 -z-0"></div>
          <div className="container mx-auto px-6 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <Brain className="w-20 h-20 text-purple-400 mx-auto mb-8 opacity-90" />
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
                <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text leading-tight">
                  Copilot Intelligence Suite
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                AI that works <span className="text-purple-300 font-semibold">with you</span>, not just for you. Empower your workforce with Microsoft Copilot and custom-built Copilot Agents—designed to streamline tasks, enhance decision-making, and elevate the way your team works across Microsoft 365 and beyond.
              </p>
              <Button
                onClick={() => document.getElementById('copilot-features')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="text-lg px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg shadow-xl hover:shadow-purple-500/60 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Explore Features <Zap className="ml-2.5 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section id="copilot-features" className="py-20 md:py-28 bg-black/30">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 text-transparent bg-clip-text"
            >
              What’s Included
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden"
            >
              {features.map((item, index) => (
                <FeatureTableItem key={item.feature} feature={item.feature} description={item.description} delay={index} />
              ))}
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 md:py-28">
           <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-orange-500 text-transparent bg-clip-text"
            >
              Real-World Use Cases
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((uc, index) => (
                <UseCaseCard key={uc.title} icon={uc.icon} title={uc.title} description={uc.description} delay={index}/>
              ))}
            </div>
           </div>
        </section>

        <section className="py-20 md:py-28 bg-gray-900/70 backdrop-blur-md">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-green-500 text-transparent bg-clip-text"
            >
              Flexible Deployment Options
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {deploymentOptions.map((option, index) => (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-teal-500/30 transition-shadow duration-300"
                >
                  <option.icon className="w-10 h-10 text-teal-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-100 mb-2">{option.title}</h3>
                  <p className="text-sm text-gray-400">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-l from-purple-400 to-pink-500 text-transparent bg-clip-text">
                  Why Copilot & Agents Together?
                </h3>
                <ul className="space-y-2">
                  {copilotBenefits.map((benefit, index) => (
                    <BenefitListItem key={benefit} text={benefit} delay={index} />
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="p-2 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl shadow-2xl"
              >
                <img 
                  alt="Abstract representation of AI collaboration and interconnected Microsoft 365 apps"
                  className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[380px]"
                 src="https://images.unsplash.com/photo-1696258680451-a70ef0725070" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gradient-to-t from-gray-900 to-black/70">
            <div className="container mx-auto px-6 text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold mb-6 text-purple-300"
                >
                    Ready to Unlock Copilot Potential?
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
                >
                    Discover how Microsoft Copilot and custom agents can revolutionize your business. Contact us for a personalized consultation.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button 
                        size="lg" 
                        onClick={handleContactClick}
                        className="text-lg px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 rounded-lg shadow-lg hover:shadow-pink-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Get Copilot Consultation <MessageSquare className="ml-2.5 h-5 w-5" />
                    </Button>
                </motion.div>
            </div>
        </section>

      </div>
    </>
  );
};

export default CopilotHubPage;