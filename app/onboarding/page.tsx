"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Star, 
  Key, 
  Copy, 
  Eye, 
  EyeOff, 
  CheckCircle,
  AlertTriangle,
  ArrowRight
} from "lucide-react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [walletGenerated, setWalletGenerated] = useState(false);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copiedPublic, setCopiedPublic] = useState(false);
  const [copiedPrivate, setCopiedPrivate] = useState(false);
  
  // Mock wallet keys (in real app, these would come from wallet generation)
  const [walletKeys, setWalletKeys] = useState({
    publicKey: "",
    privateKey: ""
  });

  const handleGenerateWallet = () => {
    // Mock wallet generation
    setWalletKeys({
      publicKey: "9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM",
      privateKey: "5Bb8CE4GZG4z8J2K9kX3mW7nH9qP4dF6yR8tL3nV5cM2sA1bC8dE9fG"
    });
    setWalletGenerated(true);
  };

  const copyToClipboard = async (text: string, type: 'public' | 'private') => {
    await navigator.clipboard.writeText(text);
    if (type === 'public') {
      setCopiedPublic(true);
      setTimeout(() => setCopiedPublic(false), 2000);
    } else {
      setCopiedPrivate(true);
      setTimeout(() => setCopiedPrivate(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden py-20">
      {/* Background Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= num
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {step > num ? <CheckCircle className="w-4 h-4" /> : num}
                </div>
                {num < 3 && (
                  <div className={`w-12 h-0.5 mx-2 ${step > num ? "bg-blue-600" : "bg-slate-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Welcome */}
        {step === 1 && (
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-900">
                Welcome to Rug Check!
              </CardTitle>
              <CardDescription className="text-lg mt-4">
                Your trusted companion for navigating the crypto universe safely
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Secure Analysis</h3>
                    <p className="text-slate-600">AI-powered token analysis to protect you from scams and rug pulls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Key className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Wallet Management</h3>
                    <p className="text-slate-600">Generate and manage your wallet keys securely</p>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => setStep(2)} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Generate Wallet */}
        {step === 2 && (
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <Key className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-900">
                Generate Your Wallet Keys
              </CardTitle>
              <CardDescription className="text-lg mt-4">
                Create your secure wallet to start trading safely
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-blue-800 text-sm">
                      Your wallet keys will be generated locally and securely. Make sure to save them in a safe place!
                    </p>
                  </div>
                </div>
              </div>
              
              <Button
                onClick={handleGenerateWallet}
                disabled={walletGenerated}
                className={`w-full h-12 ${
                  walletGenerated 
                    ? "bg-green-600 hover:bg-green-700" 
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {walletGenerated ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Wallet Generated!
                  </>
                ) : (
                  <>
                    <Key className="w-4 h-4 mr-2" />
                    Generate Wallet
                  </>
                )}
              </Button>
              
              {walletGenerated && (
                <Button 
                  onClick={() => setStep(3)} 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
                >
                  View Your Keys
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 3: Display Keys */}
        {step === 3 && (
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-slate-900">
                Your Wallet Keys
              </CardTitle>
              <CardDescription className="text-lg mt-4">
                Save these keys safely - you'll need them to access your wallet
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Warning */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div className="space-y-2">
                    <p className="text-red-800 font-semibold text-sm">
                      Important Security Notice:
                    </p>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Never share your private key with anyone</li>
                      <li>• Store your keys in a secure location</li>
                      <li>• Always do your own research before trading</li>
                      <li>• Be cautious of phishing attempts</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Public Key */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Public Key (Safe to share)</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-sm break-all">
                    {walletKeys.publicKey}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(walletKeys.publicKey, 'public')}
                    className="shrink-0"
                  >
                    {copiedPublic ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              {/* Private Key */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Private Key (Keep secret!)</label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-3 font-mono text-sm break-all">
                    {showPrivateKey ? walletKeys.privateKey : "•".repeat(50)}
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowPrivateKey(!showPrivateKey)}
                    className="shrink-0"
                  >
                    {showPrivateKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(walletKeys.privateKey, 'private')}
                    className="shrink-0"
                  >
                    {copiedPrivate ? <CheckCircle className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>

              <Button 
                onClick={() => window.location.href = '/'} 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12"
              >
                Continue to App
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 