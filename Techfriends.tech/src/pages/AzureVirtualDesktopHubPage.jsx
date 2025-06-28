import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle, Cloud, DollarSign, ExternalLink, FileText, HelpCircle, Link as LinkIcon, Lock, MessageSquare, RefreshCw, Rocket, Users, MonitorPlay } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const BenefitCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex flex-col bg-gray-800/60 backdrop-blur-md rounded-xl shadow-lg p-6 h-full hover:shadow-sky-500/30 transition-shadow duration-300"
    >
      <div className="flex items-center text-sky-400 mb-4">
        <Icon size={28} className="mr-3" />
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
      </div>
      <p className="text-gray-300 flex-grow text-sm">{description}</p>
    </motion.div>
  );
};

const UseCaseItem = ({ icon: Icon, text, delay }) => (
  <motion.li
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: delay * 0.1 }}
    className="flex items-center mb-3 text-gray-300 hover:text-sky-300 transition-colors duration-200"
  >
    <Icon className="h-5 w-5 mr-3 text-sky-500" />
    {text}
  </motion.li>
);

const ResourceLink = ({ href, title, description, icon: Icon, delay }) => {
  const { toast } = useToast();
  const handleClick = (e) => {
    if (href === "#") {
      e.preventDefault();
      toast({
        title: "Resource Link Placeholder",
        description: "This resource link will be activated soon. Stay tuned!",
      });
    }
  };

  return (
    <motion.a
      href={href}
      target={href === "#" ? "_self" : "_blank"}
      rel="noopener noreferrer"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="block bg-gray-800/70 p-6 rounded-lg hover:bg-gray-700/90 transition-all duration-300 shadow-md hover:shadow-lg group"
    >
      <div className="flex items-center mb-2">
        <Icon className="h-6 w-6 mr-3 text-sky-400 group-hover:text-sky-300 transition-colors" />
        <h4 className="text-lg font-semibold text-gray-100 group-hover:text-white transition-colors">{title}</h4>
        {href !== "#" && <ExternalLink className="h-4 w-4 ml-auto text-gray-500 group-hover:text-sky-400 transition-colors" />}
      </div>
      <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </motion.a>
  );
};

const AzureVirtualDesktopHubPage = () => {
  const { toast } = useToast();

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };
  
  const benefits = [
    { icon: Lock, title: "Security", description: "Built on Microsoft’s Zero Trust architecture with identity, access, and data protection baked in." },
    { icon: Rocket, title: "Scalability", description: "Instantly scale up or down based on project needs or seasonal demand." },
    { icon: DollarSign, title: "Cost Efficiency", description: "Pay-as-you-go pricing with multi-session Windows 11 support to reduce infrastructure costs." },
    { icon: Cloud, title: "Flexibility", description: "Access desktops and apps from any device—Windows, macOS, iOS, Android, or browser." },
    { icon: RefreshCw, title: "Seamless Integration", description: "Native support for Microsoft 365, Teams, OneDrive, and SharePoint." },
    { icon: Briefcase, title: "Smart Management", description: "Centralized control via Azure Portal and automation with Azure Monitor & Intune." },
  ];

  const useCases = [
    { icon: Users, text: "Hybrid & remote workforce enablement" },
    { icon: Lock, text: "Secure contractor or vendor access" },
    { icon: Cloud, text: "BYOD (Bring Your Own Device) environments" },
    { icon: CheckCircle, text: "Education, healthcare, and financial services compliance" },
    { icon: RefreshCw, text: "Disaster recovery and business continuity" },
  ];

  const resources = [
    { href: "#", title: "Azure Virtual Desktop Strategy Guide", description: "Plan your AVD adoption effectively.", icon: FileText },
    { href: "#", title: "AVD vs. Traditional VDI Comparison", description: "Understand the key differences.", icon: HelpCircle },
    { href: "#", title: "Microsoft Cloud Adoption Framework for AVD", description: "Best practices for implementation.", icon: LinkIcon },
    { href: "#", title: "AVD Total Economic Impact Study – Forrester", description: "Explore the financial benefits.", icon: DollarSign },
  ];

  return (
    <>
      <Helmet>
        <title>Azure Virtual Desktop Hub - Tech Friends IO</title>
        <meta name="description" content="Explore Azure Virtual Desktop (AVD) with Tech Friends IO. Secure, scalable, and cost-effective cloud-native desktop and app virtualization." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-800 text-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative py-20 md:py-28 text-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1603969400008-915f3ba395b7?q=80&w=2070')`}}
        >
          <div className="container mx-auto px-4 z-10 relative">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <MonitorPlay className="w-16 h-16 md:w-20 md:h-20 text-sky-500 mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
                <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-500 text-transparent bg-clip-text leading-tight">
                  Azure Virtual Desktop
                </span>
                <span className="block text-3xl md:text-4xl mt-1 text-gray-200">Empower Your Hybrid Workforce</span>
              </h1>
              <p className="text-md md:text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Microsoft’s cloud-native desktop and app virtualization platform. Deliver secure, high-performance Windows experiences to anyone, on any device, anywhere.
              </p>
              <p className="text-md md:text-lg text-gray-400 mb-10 max-w-3xl mx-auto">
                Whether modernizing legacy VDI, enabling hybrid work, or onboarding vendors, AVD provides agility and control. 🚀
              </p>
              <Button
                onClick={() => document.getElementById('why-avd')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="text-md px-10 py-3.5 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 rounded-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Discover AVD Benefits <Rocket className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section id="why-avd" className="py-16 md:py-24 bg-black/40">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500 text-transparent bg-clip-text"
            >
              Why Choose Azure Virtual Desktop?
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={benefit.title}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-l from-sky-400 to-cyan-500 text-transparent bg-clip-text">
                  Versatile Use Cases
                </h3>
                <ul className="space-y-3">
                  {useCases.map((useCase, index) => (
                    <UseCaseItem key={useCase.text} icon={useCase.icon} text={useCase.text} delay={index} />
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-2 bg-gradient-to-br from-sky-500/30 to-cyan-500/30 rounded-xl shadow-2xl"
              >
                <img  
                  alt="Illustration of diverse professionals using AVD on various devices in different environments"
                  className="rounded-lg shadow-xl object-cover w-full h-auto md:h-[400px]"
                 src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" />
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-gray-900/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text"
            >
              Helpful Resources
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              {resources.map((resource, index) => (
                <ResourceLink
                  key={resource.title}
                  href={resource.href}
                  title={resource.title}
                  description={resource.description}
                  icon={resource.icon}
                  delay={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gradient-to-t from-gray-900 to-black/60">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-sky-300"
            >
              Ready to Modernize Your Desktop Infrastructure?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Let’s build your AVD deployment strategy together. Contact us to schedule a discovery session or nominate your customer for Microsoft-backed incentives.
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
                className="text-lg px-10 py-4 bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-700 hover:to-cyan-700 rounded-lg shadow-lg hover:shadow-sky-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Schedule Discovery Session <MessageSquare className="ml-2.5 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AzureVirtualDesktopHubPage;