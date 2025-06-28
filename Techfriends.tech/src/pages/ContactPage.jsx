
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, Mail, MapPin, PhoneCall, Send, ExternalLink } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactInfoItem = ({ icon: Icon, title, children, href, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    className="flex items-start space-x-4 p-4 bg-gray-800/50 rounded-lg shadow-md hover:bg-gray-700/70 transition-colors"
  >
    <Icon className="h-8 w-8 text-cyan-400 mt-1 flex-shrink-0" />
    <div>
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      {href ? (
        <a href={href} className="text-cyan-300 hover:text-cyan-200 transition-colors flex items-center group">
          {children} <ExternalLink className="ml-1.5 h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </a>
      ) : (
        <p className="text-gray-300">{children}</p>
      )}
    </div>
  </motion.div>
);

const ContactPage = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent (Simulated)",
      description: "🚧 This feature isn't fully implemented yet. Your message would be sent here! 🚀",
    });
    e.target.reset();
  };

  const handleBookMeeting = () => {
    toast({
      title: "Calendar Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀 A real calendar booking system would open here.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Tech Friends IO</title>
        <meta name="description" content="Get in touch with Tech Friends IO for consultations, support, or to discuss your next project. Book a meeting or send us a message." />
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
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
            >
              We're here to help you achieve your business goals. Reach out to us for consultations, support, or to discuss your next innovative project.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-sky-300">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfoItem icon={Mail} title="Email Us" href="mailto:contact@techfriends.io" delay={0}>
                  contact@techfriends.io
                </ContactInfoItem>
                <ContactInfoItem icon={PhoneCall} title="Call Us" href="tel:+15551234567" delay={1}>
                  +1 (555) 123-4567
                </ContactInfoItem>
                <ContactInfoItem icon={MapPin} title="Our Office" delay={2}>
                  123 Tech Avenue, Innovation City, CA 90210
                </ContactInfoItem>
              </div>

              <Card className="mt-12 bg-gradient-to-br from-gray-800/70 via-gray-850/80 to-gray-900/70 border-sky-500/30 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center text-sky-300">
                    <CalendarDays className="mr-3 h-7 w-7" /> Book a Consultation
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Schedule a meeting with our experts to discuss your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gray-900/50 rounded-lg shadow-inner mb-6 text-center">
                    <p className="text-gray-300 mb-4">
                      Our interactive calendar for booking meetings is coming soon!
                    </p>
                    <div className="aspect-video bg-gray-700/50 rounded-md flex items-center justify-center">
                      <CalendarDays className="h-16 w-16 text-gray-500" />
                    </div>
                  </div>
                  <Button
                    onClick={handleBookMeeting}
                    size="lg"
                    className="w-full text-md bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 rounded-lg shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    Notify Me When Available
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gray-800/60 backdrop-blur-md p-8 md:p-10 rounded-xl shadow-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-teal-300">Send Us a Message</h2>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</Label>
                  <Input type="text" id="name" name="name" required className="bg-gray-700/50 border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</Label>
                  <Input type="email" id="email" name="email" required className="bg-gray-700/50 border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">Subject</Label>
                  <Input type="text" id="subject" name="subject" required className="bg-gray-700/50 border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">Message</Label>
                  <Textarea id="message" name="message" rows={5} required className="bg-gray-700/50 border-gray-600 text-white focus:border-teal-500 focus:ring-teal-500" />
                </div>
                <div>
                  <Button type="submit" size="lg" className="w-full text-md bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 rounded-lg shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out">
                    Send Message <Send className="ml-2.5 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default ContactPage;
