import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cloud, Bot as Robot, Shield, Server, Brain, Code } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Citrix Virtual Apps & Desktops",
    description: "Enterprise-grade virtualization solutions for modern workspaces"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Azure, AWS, and Google Cloud implementation and management"
  },
  {
    icon: Robot,
    title: "AI Automation",
    description: "Smart automation solutions for business workflows"
  },
  {
    icon: Shield,
    title: "Secure Networking & Citrix Netscaler",
    description: "Advanced security and networking infrastructure"
  },
  {
    icon: Server,
    title: "VMware vSphere & Windows Server",
    description: "Professional virtualization and server management"
  },
  {
    icon: Brain,
    title: "Intelligent Process Automation",
    description: "IPA solutions for enhanced business efficiency"
  },
  {
    icon: Code,
    title: "Custom Software Solutions",
    description: "Tailored software development for SMBs"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            Comprehensive IT solutions for your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 hover:bg-gray-750 transition-colors"
            >
              <service.icon className="w-12 h-12 text-cyan-500 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}