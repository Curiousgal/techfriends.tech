import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Layers, Zap, ShieldCheck, Users, Settings, ArrowRight } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="flex"
  >
    <Card className="bg-gray-800/60 backdrop-blur-md border-sky-700/30 shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300 w-full">
      <CardHeader className="flex flex-row items-center space-x-4 pb-3">
        <div className="p-3 bg-sky-500/20 rounded-full">
          <Icon className="h-8 w-8 text-sky-400" />
        </div>
        <CardTitle className="text-xl text-sky-300">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 text-sm">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const CitrixConsultingPage = () => {
  const features = [
    {
      icon: Server,
      title: "Centralized Management",
      description: "Unify control of your apps and desktops from a single pane of glass, reducing complexity.",
      delay: 0.1
    },
    {
      icon: Layers,
      title: "Hybrid Environment Deployment",
      description: "Seamlessly deploy and manage resources across on-premises data centers and public clouds.",
      delay: 0.2
    },
    {
      icon: Zap,
      title: "Rapid, Cost-Effective Rollouts",
      description: "Leverage Infrastructure as Code (IaC) for automated, quick, and budget-friendly deployments.",
      delay: 0.3
    },
    {
      icon: ShieldCheck,
      title: "Enhanced Security",
      description: "Implement robust security postures for your virtualized apps and desktops, protecting sensitive data.",
      delay: 0.4
    },
    {
      icon: Users,
      title: "Improved User Experience",
      description: "Deliver a consistent and high-performance experience to users on any device, anywhere.",
      delay: 0.5
    },
    {
      icon: Settings,
      title: "Simplified IT Operations",
      description: "Streamline IT administration tasks with automation and simplified management tools.",
      delay: 0.6
    }
  ];

  return (
    <>
      <Helmet>
        <title>Citrix Consulting - Tech Friends IO</title>
        <meta name="description" content="Streamline your virtual app and desktop management with Tech Friends IO's expert Citrix consulting and automated infrastructure as code services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-800 text-white py-16 md:py-24">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                <span className="block bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-500 text-transparent bg-clip-text">
                  Effortless Citrix Deployment
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
                Centralize app and desktop management. Deploy apps and desktops in hybrid environments, quickly and cost effectively.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                When workforces become more distributed, hybrid work continues to evolve, and applications are strewn across data centers, laptops, clouds, and SaaS vendors, what do you do? Distributed management and point solutions for specific use cases are not the answer. Instead, you need to look for solutions that aggregate disparate digital resources into one experience for end users, and one point of control for IT admins.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out group">
                Streamline Your Citrix Environment <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-cyan-500/30 rounded-full blur-3xl opacity-50 -z-10"></div>
              <img 
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                alt="Modern office with Citrix interface on screen"
               src="https://images.unsplash.com/photo-1643101807331-21a4a3f081d5" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sky-300">
              Why Choose Our Citrix Consulting?
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Streamline your virtual app and desktop management with our automated infrastructure as code service. We help you harness the full power of Citrix technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={feature.delay}
              />
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gray-800/70 backdrop-blur-lg p-8 md:p-12 rounded-xl shadow-2xl border border-cyan-700/40">
              <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">Ready to Optimize Your Citrix Infrastructure?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Let's discuss how our expert Citrix consulting services can transform your app and desktop delivery, enhance security, and reduce operational costs.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-lg px-10 py-6 rounded-lg shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out group">
                <a href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2.5 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </Card>
          </motion.div>

        </motion.section>
      </div>
    </>
  );
};

export default CitrixConsultingPage;