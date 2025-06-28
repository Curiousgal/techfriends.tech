
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, BarChart2, AlertTriangle, Briefcase, Users } from 'lucide-react';

const FeatureCard = ({ icon, title, description, comingSoon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col bg-gray-800/70 backdrop-blur-md rounded-xl shadow-2xl p-6 hover:shadow-cyan-500/30 transition-shadow duration-300"
  >
    <div className="flex items-center text-cyan-400 mb-4">
      {icon}
      <h3 className="text-xl font-semibold ml-3 bg-gradient-to-r from-cyan-300 to-blue-400 text-transparent bg-clip-text">{title}</h3>
    </div>
    <p className="text-gray-400 flex-grow">{description}</p>
    {comingSoon && (
      <div className="mt-4 text-xs font-medium text-amber-400 bg-amber-900/50 px-3 py-1 rounded-full inline-flex items-center self-start">
        <AlertTriangle size={14} className="mr-1.5" />
        Feature Coming Soon
      </div>
    )}
  </motion.div>
);

const CaseStudyCard = ({ title, summary, imageAlt, imageName }) => (
 <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
  >
    <img  className="w-full h-48 object-cover" alt={imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
    <CardHeader>
      <CardTitle className="text-xl text-cyan-400">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300 text-sm">{summary}</p>
      <Button variant="link" className="text-cyan-500 hover:text-cyan-300 p-0 mt-3" onClick={() => alert("🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀")}>
        Read More &rarr;
      </Button>
    </CardContent>
  </motion.div>
);

const ConstructionHubPage = () => {
  const powerBuilderDescription = "Streamlines the permit application process for Florida construction professionals. It intelligently fills out permit forms by gathering project details and auto-completing required fields, saving time and reducing errors. The app aggregates all Florida building permit issuers—statewide and local—into one hub, enabling quick access to the correct forms and submission guidelines. With seamless collaboration inside Teams, contractors and admins can review, edit, and submit permits directly within their workflow. Copilot Agent helps simplify compliance and accelerate project starts.";

  return (
    <>
      <Helmet>
        <title>Construction Industry Hub - Tech Friends IO</title>
        <meta name="description" content="Coming Soon: Tech Friends Construction Industry Hub on Microsoft Commercial Marketplace. Explore insights, self-filling permit forms, and contract bidding opportunities." />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:py-24 text-white">
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 relative"
        >
          <div className="absolute inset-0 opacity-10 -z-10">
            <img  
              className="w-full h-full object-cover rounded-lg" 
              alt="Abstract construction or technology background"
             src="https://images.unsplash.com/photo-1699100329878-7f28bb780787" />
          </div>
          
          <img  
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3cc6863b-aa63-40c5-9045-6df1c569a4c2/8620c3aaba5777f1159855732a7aaf56.png" 
            alt="Tech Friends Construction Hub hero banner"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl mb-8"
           src="https://images.unsplash.com/photo-1449094103882-63927762b5d0" />


          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-600 text-transparent bg-clip-text">
            Tech Friends Construction Industry Hub
          </h1>
          <p className="text-2xl md:text-3xl text-amber-400 font-semibold mb-6">
            <AlertTriangle size={28} className="inline mr-2" /> Coming Soon!
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionizing the construction industry with AI-powered solutions. Get ready for smarter workflows, deeper insights, and unparalleled efficiency.
          </p>
          <p className="text-md md:text-lg text-gray-400 font-medium">
            Launching soon on the <strong className="text-sky-400">Microsoft Commercial Marketplace</strong>.
          </p>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-emerald-500 text-transparent bg-clip-text">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FileText size={28} />} 
              title="Self-Filling Permit Forms" 
              description={powerBuilderDescription}
            />
            <FeatureCard 
              icon={<BarChart2 size={28} />} 
              title="Contract Bidding Dashboard" 
              description="Access and analyze contract bidding opportunities. Streamline your proposal process and win more projects. (Detailed functionality coming soon)"
              comingSoon
            />
            <FeatureCard 
              icon={<Briefcase size={28} />} 
              title="Construction Insights" 
              description="Gain valuable insights from industry data and case studies to make informed decisions and optimize your projects. (Content being curated)"
              comingSoon
            />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">Insights & Case Studies</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            <CaseStudyCard 
              title="Case Study: Streamlining Permitting for Urban Development"
              summary="How AI-assisted form filling reduced permit processing time by 40% for a major city developer."
              imageAlt="Modern city skyline"
              imageName="Modern city skyline with construction cranes"
            />
            <CaseStudyCard 
              title="Insight: The Future of Bidding in Construction"
              summary="Exploring how data analytics and AI are changing the landscape of contract bidding and project acquisition."
              imageAlt="Data analytics dashboard"
              imageName="Abstract representation of data charts and graphs related to construction bidding"
            />
             <CaseStudyCard 
              title="Case Study: Enhancing Collaboration with Cloud-Based Tools"
              summary="Discover how a multi-state construction firm leveraged cloud platforms for seamless project management and stakeholder communication."
              imageAlt="Team collaborating on a construction project"
              imageName="Diverse team of construction professionals collaborating around a digital blueprint"
            />
            <CaseStudyCard 
              title="Insight: Sustainable Practices in Modern Construction"
              summary="An overview of emerging technologies and methodologies promoting sustainability and eco-friendly building."
              imageAlt="Green construction site"
              imageName="Eco-friendly construction site with green building materials and solar panels"
            />
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ConstructionHubPage;
