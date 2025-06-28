import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const AuthForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { toast } = useToast();

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let response;
      if (isSignUp) {
        response = await supabase.auth.signUp({ email, password });
        if (response.error) throw response.error;
        if (response.data.user && response.data.session) {
           toast({ title: 'Sign Up Successful!', description: 'Welcome! You are now logged in.' });
           if (onLoginSuccess) onLoginSuccess(response.data.session);
        } else if (response.data.user && !response.data.session) {
            toast({ title: 'Sign Up Successful!', description: 'Please check your email to verify your account.' });
        }
      } else {
        response = await supabase.auth.signInWithPassword({ email, password });
        if (response.error) throw response.error;
        toast({ title: 'Login Successful!', description: 'Welcome back!' });
        if (onLoginSuccess) onLoginSuccess(response.data.session);
      }
    } catch (error) {
      toast({
        title: 'Authentication Error',
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
      transition={{ duration: 0.5 }}
      className="space-y-6 p-8 rounded-lg shadow-xl bg-gray-800/70 backdrop-blur-md max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
        {isSignUp ? 'Create Account' : 'Login to Your Account'}
      </h2>
      <form onSubmit={handleAuth} className="space-y-6">
        <div>
          <Label htmlFor="email" className="text-gray-300">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
        <div>
          <Label htmlFor="password" className="text-gray-300">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-cyan-500 focus:border-cyan-500"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full text-lg py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 ease-in-out"
        >
          {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : (isSignUp ? 'Sign Up' : 'Login')}
        </Button>
      </form>
      <Button
        variant="link"
        onClick={() => setIsSignUp(!isSignUp)}
        className="w-full text-cyan-400 hover:text-cyan-300"
      >
        {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
      </Button>
    </motion.div>
  );
};

export default AuthForm;