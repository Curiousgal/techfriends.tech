import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Users, Database } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const policySections = [
    {
      icon: FileText,
      title: "Introduction",
      content: "Welcome to Tech Friends IO's Privacy Policy. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at privacy@techfriends.io.",
      delay: 0.1,
    },
    {
      icon: Users,
      title: "Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website or otherwise when you contact us. The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.",
      delay: 0.2,
    },
    {
      icon: Database,
      title: "How We Use Your Information",
      content: "We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.",
      delay: 0.3,
    },
    {
      icon: ShieldCheck,
      title: "Data Security",
      content: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.",
      delay: 0.4,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Tech Friends IO</title>
        <meta name="description" content="Read the Tech Friends IO Privacy Policy to understand how we collect, use, and protect your personal information." />
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
              Privacy Policy
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
            {policySections.map((section) => (
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
                <p className="text-gray-300 leading-relaxed">If you have questions or comments about this policy, you may email us at <a href="mailto:privacy@techfriends.io" className="text-cyan-400 hover:underline">privacy@techfriends.io</a> or by post to:</p>
                <p className="text-gray-300 mt-2">Tech Friends IO, LLC<br/>[Your Company Address Here]<br/>Coconut Creek, FL 33066<br/>United States</p>
              </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;