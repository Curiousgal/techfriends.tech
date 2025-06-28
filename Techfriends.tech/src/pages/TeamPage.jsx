import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Linkedin, Briefcase, Award } from 'lucide-react';

const teamMembers = [
  {
    name: "Kelly Rodrigues",
    role: "Founder",
    imageName: "KellyRodrigues.jpg",
    bio: "Kelly Rodrigues is the driving force behind Tech Friends I/O, LLC. With nearly a decade of experience as a Systems Engineer, Kelly has a proven track record in designing, implementing, and supporting virtualization solutions for enterprise clients. Her expertise spans across Windows Server, Citrix products, and various cloud platforms including VMware, AWS, Google Cloud, Azure, and Microsoft 365. Kelly is passionate about staying ahead of the curve, holding multiple certifications in Microsoft and Citrix. She is known for her ability to troubleshoot complex technical problems and collaborate effectively with cross-functional teams and vendors. Kelly is also dedicated to knowledge sharing, contributing to internal technical articles and documentation. Fluent in Portuguese, English, and Spanish, Kelly brings a global perspective to her work. Her leadership and technical skills are the backbone of Tech Friends I/O, driving the company towards innovative solutions and excellence in IT infrastructure.",
    linkedin: "#",
    highlights: [
      "Nearly 10 years in Systems Engineering",
      "Expert in Virtualization & Cloud Platforms",
      "Microsoft & Citrix Certified",
      "Trilingual: Portuguese, English, Spanish"
    ]
  },
  {
    name: "Pedro Ferreira",
    role: "Principal Escalation Engineer",
    imageName: "PedroFerreira.jpg",
    bio: "Pedro Ferreira is a seasoned Principal Escalation Engineer at Citrix/Cloud Software Group, bringing over a decade of experience in technical support and IT solutions. His career journey includes significant roles at Microsoft Support Group, FedEx Express LAC, and Stiles Corporation, where he honed his skills in troubleshooting and customer support. Pedro holds multiple Microsoft certifications, including MCSA, MCITP, and MCTS, as well as Citrix certifications such as CCA-V, CCP-V, and is currently pursuing CCE-V. His expertise in virtualization and cloud technologies makes him a valuable asset to the Tech Friends team. Fluent in English, Portuguese, and Spanish, Pedro excels in communicating complex technical issues to diverse audiences. His dedication to professional excellence and customer satisfaction is evident in his ability to handle top-priority cases and develop automated customer simulations. Pedro's technical acumen, combined with his personable and energetic approach, ensures that Tech Friends IO delivers top-notch IT solutions and support to its clients.",
    linkedin: "#",
    highlights: [
      "Over 10 years in Technical Support & IT",
      "Multiple Microsoft & Citrix Certifications",
      "Expert in Escalation Management",
      "Trilingual: English, Portuguese, Spanish"
    ]
  },
  {
    name: "Bruno Ferreira",
    role: "Senior Consultant - EUC - Horizon",
    imageName: "BrunoFerreira.jpg",
    bio: "Bruno Ferreira is a highly skilled and experienced professional with over 15 years of expertise in VMware Infrastructure Engineering. Currently serving as a Senior Consultant at Omnissa, Bruno has a rich background working with top international enterprise companies such as Petrobras, BULL, FedEx, Boeing, and VMware. Bruno holds multiple certifications, including Double VCIX 2022 DCV/DTM, VCIX5-DCV, VCIX6-DCV, VCIX7-DCV, and VCIX-DTM 2022. His technical acumen is complemented by his trilingual fluency in English, Portuguese, and Spanish, allowing him to effectively communicate and collaborate with diverse teams and clients. Known for his confidence, personable nature, and strong presentation skills, Bruno excels in representing Tech Friends I/O and delivering outstanding results. His extensive experience in network engineering and virtualization makes him an invaluable asset to the team, ensuring that Tech Friends I/O continues to provide top-notch IT solutions and support.",
    linkedin: "#",
    highlights: [
      "Over 15 years in VMware Infrastructure",
      "Double VCIX Certified (DCV/DTM)",
      "Experience with Global Enterprises",
      "Trilingual: English, Portuguese, Spanish"
    ]
  },
  {
    name: "Stephen Solari",
    role: "Senior Technical Support Engineer",
    imageName: "StephenSolari.jpg",
    bio: "Stephen Solari is a seasoned Senior Technical Support Engineer at Citrix, with a wealth of experience in managing and upgrading Citrix environments. His expertise spans across Citrix ADC (Netscaler), Citrix Gateway, Citrix ADM, and SDWAN support. Stephen has a proven track record of supporting multiple Citrix environments and managing PVS environments for large user bases. His previous roles include positions at the University of Miami Health System, Mallah Furman, and Hypower Inc., where he demonstrated his skills in network administration and IT management. Stephen's dedication to his work and his ability to handle complex technical challenges make him an invaluable asset to any team.",
    linkedin: "#",
    highlights: [
      "Expert in Citrix ADC, Gateway, ADM, SDWAN",
      "Proven PVS Environment Management",
      "Extensive Network Administration Experience",
      "Dedicated Problem Solver"
    ]
  }
];

const TeamMemberCard = ({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800/70 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-start"
  >
    <div className="md:w-1/3 flex-shrink-0 p-6 md:p-0">
      <img 
        className="w-48 h-48 md:w-full md:h-auto object-cover rounded-full md:rounded-none md:rounded-l-xl mx-auto"
        alt={`${member.name}, ${member.role}`}
       src="https://images.unsplash.com/photo-1589132012505-a2d7a7a39589" />
    </div>
    <div className="p-6 md:p-8 flex-grow">
      <h2 className="text-3xl font-bold text-cyan-400 mb-1">{member.name}</h2>
      <p className="text-xl font-semibold text-sky-300 mb-4">{member.role}</p>
      <p className="text-gray-300 mb-6 text-sm leading-relaxed">{member.bio}</p>
      
      <div className="mb-6">
        <h4 className="text-md font-semibold text-gray-100 mb-2 flex items-center"><Award className="h-5 w-5 mr-2 text-amber-400"/>Key Highlights:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
          {member.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>

      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 text-white rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
      >
        <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
      </a>
    </div>
  </motion.div>
);

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Meet Our Team - Tech Friends IO</title>
        <meta name="description" content="Meet the experienced and dedicated team behind Tech Friends IO, driving innovation in IT solutions." />
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
              Meet Our Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            >
              The passionate professionals dedicated to your success. We combine expertise with a collaborative spirit to deliver outstanding IT solutions.
            </motion.p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default TeamPage;