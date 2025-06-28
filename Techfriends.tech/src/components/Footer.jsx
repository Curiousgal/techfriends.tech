import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, Phone, MapPin, Clock } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "X" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const quickLinks = [
  { name: "About Us (Team)", href: "/team" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms and Conditions", href: "/terms-of-service" },
  { name: "Resources", href: "/resources"},
  { name: "Blog", href: "#" }, 
  { name: "Contact Us", href: "/contact" },
];

const servicesFooter = [
  { name: "Copilot Hub", href: "/copilot-hub" },
  { name: "AVD Hub", href: "/azure-virtual-desktop-hub" },
  { name: "Brand Identity Hub", href: "/brand-identity-hub" },
  { name: "Construction Hub", href: "/construction-hub" },
  { name: "Real Estate Hub", href: "/real-estate-hub" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3cc6863b-aa63-40c5-9045-6df1c569a4c2/ffa730bce418579384bb6af899cf9dd9.png"
                alt="Tech Friends Logo"
                className="h-12 w-12 mr-3"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text">
                Tech Friends IO
              </span>
            </Link>
            <p className="text-gray-400 mb-6 text-sm">
              We help businesses simplify and scale with advanced cloud computing,
              virtualization technologies, and AI-driven automation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('http') || link.href.startsWith('#') ? (
                     <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm" target={link.href.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
                       {link.name}
                     </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3">
              {servicesFooter.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" />
                <span>Coconut Creek, FL 33066</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1 text-cyan-500 flex-shrink-0" />
                <span>Monday – Friday<br />8:00 a.m. - 5:00 p.m.</span>
              </li>
              <li>
                <a
                  href="mailto:info@techfriends.io"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-cyan-500 flex-shrink-0" />
                  info@techfriends.io
                </a>
              </li>
              <li>
                <a
                  href="tel:+13053348884"
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Phone className="h-5 w-5 mr-3 text-cyan-500 flex-shrink-0" />
                  +1 (305) 334-8884
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Tech Friends IO LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}