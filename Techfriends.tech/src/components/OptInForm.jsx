import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';

const OptInForm = ({ session }) => {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (session?.user?.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) {
      toast({
        title: 'Consent Required',
        description: 'Please agree to the terms to opt-in.',
        variant: 'destructive',
      });
      return;
    }
    setLoading(true);
    try {
      const optInData = {
        user_id: session?.user?.id || null,
        email: email || null,
        phone_number: phoneNumber || null,
        opted_in: true,
        opt_in_source: 'website_form',
      };

      const { error } = await supabase.from('message_opt_ins').insert(optInData);
      if (error) throw error;

      toast({
        title: 'Opt-In Successful!',
        description: "Thanks for subscribing to our messages.",
      });
      setAgreed(false); 
      if(!session?.user?.email) setEmail('');
      setPhoneNumber('');

    } catch (error) {
      toast({
        title: 'Opt-In Error',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6 p-8 rounded-lg shadow-xl bg-gray-800/70 backdrop-blur-md max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-teal-400 to-emerald-600 text-transparent bg-clip-text">
        Stay Updated
      </h2>
      <p className="text-center text-gray-300">Opt-in to receive important updates and news directly.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        {!session?.user?.email && (
           <div>
            <Label htmlFor="optin-email" className="text-gray-300">Email Address (Optional)</Label>
            <Input
              id="optin-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
            />
          </div>
        )}
        <div>
          <Label htmlFor="optin-phone" className="text-gray-300">Phone Number (Optional)</Label>
          <Input
            id="optin-phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms-optin"
            checked={agreed}
            onCheckedChange={setAgreed}
            className="border-teal-500 data-[state=checked]:bg-teal-500"
          />
          <Label htmlFor="terms-optin" className="text-gray-300">
            I agree to receive messages and updates.
          </Label>
        </div>
        <Button
          type="submit"
          disabled={loading || !agreed}
          className="w-full text-lg py-3 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 transition-all duration-300 ease-in-out disabled:opacity-50"
        >
          {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <><Send className="mr-2 h-5 w-5" /> Opt-In Now</>}
        </Button>
      </form>
    </motion.div>
  );
};

export default OptInForm;