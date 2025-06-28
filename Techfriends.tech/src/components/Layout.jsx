import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { Menu, X, LogOut, ChevronDown, ExternalLink, Building, Home as HomeIcon, Palette as PaletteIcon, MonitorPlay, Brain, Briefcase as ServicesIcon, Settings, Phone, Shield, Users, BookOpen, Info, Server } from "lucide-react";
import { Footer } from "@/components/Footer";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { supabase } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";

const ListItemContent = ({ title, children, isExternal, icon: Icon }) => (
  <>
    <div className="text-sm font-medium leading-none flex items-center">
      {Icon && <Icon className="h-4 w-4 mr-2 text-cyan-400" />}
      {title}
      {isExternal && <ExternalLink className="h-3 w-3 ml-1.5 text-cyan-400" />}
    </div>
    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground text-gray-400">
      {children}
    </p>
  </>
);

const ListItem = React.forwardRef(({ className, title, children, href, icon, onClick, ...props }, ref) => {
  const isInternal = href && href.startsWith('/') && !href.startsWith('//');
  const isExternalUrl = href && (href.startsWith('http') || href.startsWith('//'));
  
  const commonClass = cn(
    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white",
    className
  );

  const content = <ListItemContent title={title} children={children} isExternal={isExternalUrl} icon={icon} />;

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <li>
      <NavigationMenuLink asChild>
        {isInternal ? (
          <Link to={href} ref={ref} className={commonClass} onClick={handleClick} {...props}>
            {content}
          </Link>
        ) : (
          <a
            ref={ref}
            href={href || '#'}
            target={isExternalUrl ? '_blank' : '_self'}
            rel={isExternalUrl ? 'noopener noreferrer' : ''}
            className={commonClass}
            onClick={handleClick}
            {...props}
          >
            {content}
          </a>
        )}
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


const NavLinkItem = ({ to, children, isMobile = false, onClick, ...props }) => {
  const navLinkClass = cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:text-white hover:bg-gray-700/50");
  const mobileNavLinkClass = "block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50";
  
  const handleClick = () => {
    if (onClick) onClick();
  };
  return (
    <NavigationMenuLink asChild>
      <Link to={to} className={isMobile ? mobileNavLinkClass : navLinkClass} onClick={handleClick} {...props}>
        {children}
      </Link>
    </NavigationMenuLink>
  );
};

const companyLinks = [
  { title: "Meet Our Team", href: "/team", description: "Get to know the experts at Tech Friends.", icon: Users },
  { title: "Contact Us", href: "/contact", description: "Reach out for consultations or support.", icon: Phone },
];

const policyLinks = [
  { title: "Tech Friends Privacy Policy", href: "/privacy-policy", description: "Our main privacy policy.", icon: Shield },
  { title: "Microsoft Privacy Policy", href: "#", description: "For Microsoft services integration.", icon: Settings },
  { title: "Marketplace Apps Policy", href: "#", description: "Regarding apps from marketplaces.", icon: Settings },
  { title: "Meta Privacy Policy", href: "#", description: "For Meta platform integrations.", icon: Settings },
  { title: "Stripe Privacy Policy", href: "#", description: "Concerning payment processing.", icon: Settings },
  { title: "Slack Bot Policy", href: "#", description: "For our Slack bot interactions.", icon: Settings },
];

const servicePages = [
  { title: "Citrix Consulting", href: "/citrix-consulting", description: "Effortless Citrix deployment and management.", icon: Server },
  { title: "Copilot Hub", href: "/copilot-hub", description: "AI-powered productivity solutions.", icon: Brain },
  { title: "AVD Hub", href: "/azure-virtual-desktop-hub", description: "Cloud-native desktop virtualization.", icon: MonitorPlay },
  { title: "Brand Identity Hub", href: "/brand-identity-hub", description: "Strategic design & consistency.", icon: PaletteIcon },
  { title: "Construction Hub", href: "/construction-hub", description: "Tech for the construction industry.", icon: Building },
  { title: "Real Estate Hub", href: "/real-estate-hub", description: "Innovations for property sales.", icon: HomeIcon },
];


const Layout = ({ children, session, setSession, showLogin, setShowLogin }) => {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const navLinkClass = cn(navigationMenuTriggerStyle(), "bg-transparent text-gray-300 hover:text-white hover:bg-gray-700/50");
  const mobileExternalLinkClass = "block px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-600/50";


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({ title: "Logout Error", description: error.message, variant: "destructive" });
    } else {
      setSession(null);
      setShowLogin(false);
      toast({ title: "Logged Out", description: "You have been successfully logged out." });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col">
      <Toaster />
      <nav className="sticky top-0 w-full z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-700/50 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
               <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/3cc6863b-aa63-40c5-9045-6df1c569a4c2/ffa730bce418579384bb6af899cf9dd9.png"
                  alt="Tech Friends Logo"
                  className="h-12 w-auto mr-3"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
                  Tech Friends
                </span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem><NavLinkItem to="/" onClick={() => setIsMenuOpen(false)}><HomeIcon className="mr-1 h-4 w-4 inline-block" />Home</NavLinkItem></NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(navLinkClass, "focus:bg-gray-700/50 data-[state=open]:bg-gray-700/50")}>
                        <ServicesIcon className="mr-1 h-4 w-4 inline-block" /> Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
                        {servicePages.map((service) => (
                          <ListItem
                            key={service.title}
                            title={service.title}
                            href={service.href}
                            icon={service.icon}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavLinkItem to="/resources" onClick={() => setIsMenuOpen(false)}><BookOpen className="mr-1 h-4 w-4 inline-block" />Resources</NavLinkItem>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(navLinkClass, "focus:bg-gray-700/50 data-[state=open]:bg-gray-700/50")}>
                        <Info className="mr-1 h-4 w-4 inline-block" /> Company
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
                        {companyLinks.map((link) => (
                          <ListItem
                            key={link.title}
                            title={link.title}
                            href={link.href}
                            icon={link.icon}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className={cn(navLinkClass, "focus:bg-gray-700/50 data-[state=open]:bg-gray-700/50")}>
                        <Shield className="mr-1 h-4 w-4 inline-block" /> Policies
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-gray-800/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-lg">
                        {policyLinks.map((policy) => (
                          <ListItem
                            key={policy.title}
                            title={policy.title}
                            href={policy.href}
                            icon={policy.icon}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {policy.description}
                          </ListItem>
                        ))}
                         <ListItem
                            title="Terms of Service"
                            href="/terms-of-service"
                            icon={Settings}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Read our terms and conditions.
                          </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  {session ? (
                    <NavigationMenuItem>
                      <Button
                        onClick={handleLogout}
                        variant="ghost"
                        className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-700/50 px-4 py-2"
                      >
                        <LogOut className="mr-2 h-5 w-5" /> Logout
                      </Button>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem>
                      <Button
                        onClick={() => { setShowLogin(true); setIsMenuOpen(false); }}
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2"
                      >
                        Login
                      </Button>
                    </NavigationMenuItem>
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800/95 border-t border-gray-700/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLinkItem to="/" isMobile={true} onClick={() => setIsMenuOpen(false)}><HomeIcon className="mr-2 h-5 w-5 inline-block" />Home</NavLinkItem>
              
              <details className="group">
                <summary className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 cursor-pointer">
                  <ServicesIcon className="mr-2 h-5 w-5 inline-block" />Services <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-1 space-y-1">
                  {servicePages.map((service) => (
                    <Link 
                      key={`mobile-${service.title}`} 
                      to={service.href} 
                      onClick={()=>setIsMenuOpen(false)} 
                      className={mobileExternalLinkClass}
                    >
                      <service.icon className="inline h-4 w-4 mr-2" />{service.title}
                    </Link>
                  ))}
                </div>
              </details>

              <NavLinkItem to="/resources" isMobile={true} onClick={() => setIsMenuOpen(false)}><BookOpen className="mr-2 h-5 w-5 inline-block" />Resources</NavLinkItem>
              
              <details className="group">
                <summary className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 cursor-pointer">
                  <Info className="mr-2 h-5 w-5 inline-block" />Company <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-1 space-y-1">
                  {companyLinks.map((link) => (
                    <Link 
                      key={`mobile-${link.title}`} 
                      to={link.href} 
                      onClick={()=>setIsMenuOpen(false)} 
                      className={mobileExternalLinkClass}
                    >
                      <link.icon className="inline h-4 w-4 mr-2" />{link.title}
                    </Link>
                  ))}
                </div>
              </details>
              
              <details className="group">
                <summary className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 cursor-pointer">
                  <Shield className="mr-2 h-5 w-5 inline-block" />Policies <ChevronDown className="h-5 w-5 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 mt-1 space-y-1">
                  {policyLinks.map((policy) => {
                    const isInternal = policy.href && policy.href.startsWith('/');
                    const isExternalUrl = policy.href && (policy.href.startsWith('http') || policy.href.startsWith('//'));
                    return isInternal ? (
                      <Link key={`mobile-${policy.title}`} to={policy.href} onClick={()=>setIsMenuOpen(false)} className={mobileExternalLinkClass}>
                        {policy.title}
                      </Link>
                    ) : (
                      <a 
                        key={`mobile-${policy.title}`} 
                        href={policy.href || '#'} 
                        onClick={()=>setIsMenuOpen(false)}
                        target={isExternalUrl ? '_blank' : '_self'}
                        rel={isExternalUrl ? 'noopener noreferrer' : ''}
                        className={mobileExternalLinkClass}
                      >
                        {policy.title} {isExternalUrl && <ExternalLink className="inline h-3 w-3 ml-1" />}
                      </a>
                    );
                  })}
                   <Link to="/terms-of-service" onClick={()=>setIsMenuOpen(false)} className={mobileExternalLinkClass}>
                      Terms of Service
                    </Link>
                </div>
              </details>
              
              {session ? (
                 <Button
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    variant="ghost"
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-cyan-400 hover:text-cyan-300 hover:bg-gray-700/50"
                  >
                    <LogOut className="mr-2 h-5 w-5 inline" /> Logout
                  </Button>              ) : (
                <Button
                  onClick={() => { setShowLogin(true); setIsMenuOpen(false); }}
                  className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-3 py-2"
                >
                  Login
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </nav>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;