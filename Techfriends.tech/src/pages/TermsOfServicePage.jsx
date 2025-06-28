import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Users, Shield, AlertTriangle } from 'lucide-react';

const TermsOfServicePage = () => {
  const termsSections = [
    {
      icon: FileSpreadsheet,
      title: "Agreement to Terms",
      content: "By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service. These Terms apply to all visitors, users, and others who access or use the Service.",
      delay: 0.1,
    },
    {
      icon: Users,
      title: "User Accounts",
      content: "When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.",
      delay: 0.2,
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: "The Service and its original content, features, and functionality are and will remain the exclusive property of Tech Friends IO, LLC and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Tech Friends IO, LLC.",
      delay: 0.3,
    },
    {
      icon: AlertTriangle,
      title: "Limitation of Liability",
      content: "In no event shall Tech Friends IO, LLC, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.",
      delay: 0.4,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Tech Friends IO</title>
        <meta name="description" content="Read the Tech Friends IO Terms of Service to understand the rules and guidelines for using our website and services." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-slate-800 text-white py-16 md:py-24">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4"
        >
          <div className="text-center mb-16 md:mb-20">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-500 text-transparent bg-clip-text"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            {termsSections.map((section) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: section.delay }}
                className="bg-gray-800/60 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl border border-gray-700/50"
              >
                <div className="flex items-center mb-4">
                  <section.icon className="h-8 w-8 text-sky-400 mr-4 flex-shrink-0" />
                  <h2 className="text-2xl md:text-3xl font-bold text-sky-300">{section.title}</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-justify">{section.content}</p>
              </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-gray-800/60 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-xl border border-gray-700/50"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-sky-300 mb-4">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">If you have any questions about these Terms, please contact us at <a href="mailto:legal@techfriends.io" className="text-cyan-400 hover:underline">legal@techfriends.io</a>.</p>
              </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default TermsOfServicePage;