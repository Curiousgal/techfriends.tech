
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Download, BookOpen, FileText, Search, Lightbulb } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ResourceCard = ({ title, description, icon: Icon, actionText, onActionClick, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
  >
    <Card className="bg-gray-800/60 backdrop-blur-md border-sky-700/30 shadow-xl hover:shadow-sky-500/30 transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="flex-row items-center space-x-4 pb-4">
        <Icon className="h-10 w-10 text-sky-400 flex-shrink-0" />
        <div>
          <CardTitle className="text-xl text-sky-300">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-400 mb-6">{description}</CardDescription>
      </CardContent>
      <div className="p-6 pt-0">
        <Button 
          onClick={onActionClick} 
          className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white transform hover:scale-105 transition-transform duration-300"
        >
          {actionText} <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  </motion.div>
);

const ResourcesPage = () => {
  const { toast } = useToast();

  const handleDownload = (resourceName) => {
    toast({
      title: "Download Initiated (Simulated)",
      description: `🚧 ${resourceName} download would start here. This feature isn't fully implemented yet! 🚀`,
    });
  };

  const handleViewArticles = () => {
    toast({
      title: "Knowledge Base Access",
      description: "🚧 You would be redirected to our knowledge base. This feature isn't fully implemented yet! 🚀",
    });
  };

  const resources = [
    {
      title: "AVD Strategy Guide",
      description: "Comprehensive guide to planning and deploying Azure Virtual Desktop.",
      icon: FileText,
      actionText: "Download PDF",
      onActionClick: () => handleDownload("AVD Strategy Guide"),
    },
    {
      title: "Copilot Implementation Best Practices",
      description: "Learn how to effectively integrate Microsoft Copilot into your workflows.",
      icon: FileText,
      actionText: "Download PDF",
      onActionClick: () => handleDownload("Copilot Best Practices"),
    },
    {
      title: "Cloud Migration Checklist",
      description: "A step-by-step checklist for a smooth transition to the cloud.",
      icon: FileText,
      actionText: "Download PDF",
      onActionClick: () => handleDownload("Cloud Migration Checklist"),
    },
  ];

  return (
    <>
      <Helmet>
        <title>Resources - Tech Friends IO</title>
        <meta name="description" content="Access valuable resources including PDF documentation, knowledge articles, and guides from Tech Friends IO." />
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
              Our Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Explore our collection of guides, whitepapers, and articles to help you make the most of our technologies and services.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-sky-300 flex items-center">
              <Download className="mr-4 h-8 w-8" /> PDF Documentation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((res, index) => (
                <ResourceCard 
                  key={res.title}
                  title={res.title}
                  description={res.description}
                  icon={res.icon}
                  actionText={res.actionText}
                  onActionClick={res.onActionClick}
                  delay={index}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-teal-300 flex items-center">
              <BookOpen className="mr-4 h-8 w-8" /> Knowledge Articles
            </h2>
            <Card className="bg-gray-800/60 backdrop-blur-md border-teal-700/30 shadow-xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center md:space-x-8">
                <Lightbulb className="h-20 w-20 text-teal-400 mb-6 md:mb-0 flex-shrink-0" />
                <div>
                  <CardTitle className="text-2xl text-teal-300 mb-3">Explore Our Insights</CardTitle>
                  <CardDescription className="text-gray-300 mb-6 text-lg">
                    Dive into our curated collection of articles, tutorials, and best practices. Find answers, learn new skills, and stay updated with the latest in tech.
                  </CardDescription>
                  <Button 
                    onClick={handleViewArticles} 
                    size="lg" 
                    className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white transform hover:scale-105 transition-transform duration-300"
                  >
                    Browse Knowledge Base <Search className="ml-2.5 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>

        </motion.section>
      </div>
    </>
  );
};

export default ResourcesPage;
