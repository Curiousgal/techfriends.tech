
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Services } from "@/components/Services";
import OptInForm from "@/components/OptInForm";
import { ArrowRight } from 'lucide-react';

const HomePage = ({ session }) => {
  return (
    <>
      <Helmet>
        <title>Tech Friends IO - Simplify & Scale Your Business</title>
        <meta name="description" content="Leverage advanced cloud computing, virtualization, and AI-driven automation with Tech Friends IO to propel your business success." />
      </Helmet>
      <header id="home" className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text leading-tight">
            Simplify & Scale Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Leverage advanced cloud computing, virtualization, and AI-driven automation to propel your success.
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </header>

      <Services />
      
      <section id="opt-in" className="py-16 md:py-24 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <OptInForm session={session} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
