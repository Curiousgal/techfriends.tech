import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import AuthForm from "@/components/AuthForm";
import HomePage from "@/pages/HomePage";
import ConstructionHubPage from "@/pages/ConstructionHubPage"; 
import RealEstateHubPage from "@/pages/RealEstateHubPage";
import BrandIdentityHubPage from "@/pages/BrandIdentityHubPage";
import AzureVirtualDesktopHubPage from "@/pages/AzureVirtualDesktopHubPage";
import CopilotHubPage from "@/pages/CopilotHubPage";
import ContactPage from "@/pages/ContactPage";
import TeamPage from "@/pages/TeamPage";
import ResourcesPage from "@/pages/ResourcesPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";
import CitrixConsultingPage from "@/pages/CitrixConsultingPage";
import { supabase } from "@/lib/supabaseClient";


function App() {
  const [session, setSession] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (event === 'SIGNED_IN') {
        setShowLogin(false);
      }
    });
  
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
  
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);
  
  return (
    <Layout 
      session={session} 
      setSession={setSession} 
      showLogin={showLogin} 
      setShowLogin={setShowLogin}
    >
      {showLogin && !session && (
        <section id="login" className="py-16 md:py-24 bg-gray-800/30">
          <div className="container mx-auto px-4">
            <AuthForm onLoginSuccess={(newSession) => {
              setSession(newSession);
              setShowLogin(false);
            }} />
          </div>
        </section>
      )}
      <Routes>
        <Route path="/" element={<HomePage session={session} />} />
        <Route path="/citrix-consulting" element={<CitrixConsultingPage />} />
        <Route path="/copilot-hub" element={<CopilotHubPage />} />
        <Route path="/azure-virtual-desktop-hub" element={<AzureVirtualDesktopHubPage />} />
        <Route path="/brand-identity-hub" element={<BrandIdentityHubPage />} />
        <Route path="/construction-hub" element={<ConstructionHubPage />} />
        <Route path="/real-estate-hub" element={<RealEstateHubPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
      </Routes>
    </Layout>
  );
}

export default App;