"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  TrendingUp,
  Users,
  MessageSquare,
  Search,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Lock,
  Globe,
  ArrowRight,
  Bot,
  Star,
  Sparkles,
  Eye,
} from "lucide-react"

export default function CryptoLandingPage() {
  const [tokenInput, setTokenInput] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random stars for background animation
    const generateStars = () => {
      const newStars = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 5,
      }))
      setStars(newStars)
    }
    generateStars()
  }, [])

  const handleAnalyze = () => {
    setIsAnalyzing(true)
    setTimeout(() => setIsAnalyzing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-blue-200 rounded-full animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: "3s",
            }}
          />
        ))}
      </div>

      {/* Shooting Star Animation */}
      <div className="fixed top-20 left-0 w-full h-1 pointer-events-none">
        <div className="shooting-star"></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center relative">
                <Star className="w-5 h-5 text-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-xl font-semibold text-slate-900">StarCheck</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                How it works
              </a>
              <a href="#pricing" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
                Pricing
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-28 relative hero-grid-bg">
        {/* Multiple Shooting Stars and Meteors Animation Over Grid */}
        <div className="hero-shooting-star star1" aria-hidden="true"></div>
        <div className="hero-shooting-star star2" aria-hidden="true"></div>
        <div className="hero-shooting-star star3" aria-hidden="true"></div>
        <div className="hero-meteor meteor1" aria-hidden="true"></div>
        <div className="hero-meteor meteor2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">
                <Star className="w-3 h-3 mr-1" />
                AI-Powered Token Intelligence
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Navigate the crypto universe with{" "}
                <span className="text-blue-600 relative">
                  stellar insights
                  <div className="absolute -top-2 -right-2">
                    <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
                  </div>
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Get comprehensive token analysis through intelligent conversation. Our AI examines smart contracts,
                tokenomics, and market sentiment to guide your investment decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Start Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 bg-transparent"
                >
                  Watch Demo
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Spy Character Container */}
                  <div className="spy-container">
                    <div className="spy-character">
                      <div className="spy-body"></div>
                      <div className="spy-head"></div>
                      <div className="spy-hat"></div>
                      <div className="spy-lens">
                        <div className="lens-glass"></div>
                        <div className="scanning-beam"></div>
                      </div>
                    </div>
                  </div>

                  {/* Scanning Effect */}
                  <div className="scanning-grid">
                    <div className="scan-line"></div>
                    <div className="scan-line" style={{ animationDelay: "0.5s" }}></div>
                    <div className="scan-line" style={{ animationDelay: "1s" }}></div>
                  </div>

                  {/* Threat Indicators */}
                  <div className="threat-indicator threat-1">
                    <div className="threat-pulse"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mb-1">
                        <span className="text-xs font-bold text-white">₿</span>
                      </div>
                      <span className="text-xs text-slate-600">BTC</span>
                    </div>
                  </div>
                  <div className="threat-indicator threat-2">
                    <div className="threat-pulse"></div>
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1 bg-white/90 backdrop-blur-sm">
                        <img src="/Solana-Logo.jpg" alt="Solana" className="w-6 h-6 object-contain" />
                      </div>
                      <span className="text-xs text-slate-600 font-medium">SOL</span>
                    </div>
                  </div>
                  <div className="threat-indicator threat-3">
                    <div className="threat-pulse"></div>
                    <div className="flex flex-col items-center">
                      <Search className="w-4 h-4 text-blue-600 mb-1" />
                      <span className="text-xs text-slate-600">SCAN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Stellar token intelligence</h2>
              <Star className="w-6 h-6 text-blue-600 ml-2" />
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our AI constellation analyzes multiple data points to illuminate the true nature of any cryptocurrency
              token.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Rug Pull Detection",
                description: "Advanced algorithms scan for malicious patterns and potential exit scams.",
                color: "text-red-600",
                bg: "bg-red-50",
                border: "border-red-100",
              },
              {
                icon: BarChart3,
                title: "Tokenomics Analysis",
                description: "Deep dive into token distribution, vesting schedules, and economic models.",
                color: "text-blue-600",
                bg: "bg-blue-50",
                border: "border-blue-100",
              },
              {
                icon: Users,
                title: "Community Sentiment",
                description: "Real-time social media analysis and community engagement metrics.",
                color: "text-green-600",
                bg: "bg-green-50",
                border: "border-green-100",
              },
              {
                icon: Lock,
                title: "Contract Security",
                description: "Comprehensive smart contract audit and vulnerability assessment.",
                color: "text-purple-600",
                bg: "bg-purple-50",
                border: "border-purple-100",
              },
              {
                icon: TrendingUp,
                title: "Market Intelligence",
                description: "Price trends, volume analysis, and market capitalization insights.",
                color: "text-orange-600",
                bg: "bg-orange-50",
                border: "border-orange-100",
              },
              {
                icon: Globe,
                title: "Ecosystem Mapping",
                description: "Comprehensive analysis of partnerships, integrations, and use cases.",
                color: "text-teal-600",
                bg: "bg-teal-50",
                border: "border-teal-100",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`bg-white ${feature.border} shadow-sm hover:shadow-md transition-all duration-300 relative group`}
              >
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Star className="w-3 h-3 text-yellow-400" />
                </div>
                <CardContent className="p-6">
                  <div className={`w-12 h-12 rounded-lg ${feature.bg} flex items-center justify-center mb-4`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="security" className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Risk Assessment</h2>
            <p className="text-slate-600 text-lg">Advanced threat detection and security analysis</p>
          </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-slate-900 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  Rug Pull Detection
                </CardTitle>
                <CardDescription className="text-slate-600">
                  AI-powered analysis to identify potential rug pull schemes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Liquidity Lock Status</span>
                  <Badge variant="destructive">High Risk</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Developer Wallet Activity</span>
                  <Badge variant="secondary">Monitoring</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">Contract Verification</span>
                  <Badge className="bg-green-100 text-green-700 border-green-200">Verified</Badge>
                </div>
                <div className="pt-4">
                  <div className="text-sm text-slate-600 mb-2">Risk Score</div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-yellow-500 to-red-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="text-right text-sm text-red-500 mt-1">75% Risk</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-100">
              <CardHeader>
                <CardTitle className="text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  Security Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-slate-700">Smart Contract Audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Real-time Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-slate-700">Deep Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-slate-700">Risk Alerts</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Conversations that illuminate</h2>
              </div>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Ask natural questions about any token and receive comprehensive analysis. Our AI guides you through
                complex crypto data with simple, clear explanations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Is this token safe?",
                  "What are the red flags?",
                  "How's the tokenomics?",
                  "Community sentiment?",
                ].map((question, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-700">{question}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Card className="bg-white border-slate-200 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-4 h-4 text-slate-600" />
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-50 rounded-lg p-3">
                          <p className="text-slate-900 text-sm">Analyze SHIB token - is it worth investing?</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative">
                        <Bot className="w-4 h-4 text-white" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                          <p className="text-slate-900 text-sm font-medium mb-2">SHIB Token Analysis:</p>
                          <div className="grid grid-cols-1 gap-2 text-sm text-slate-700">
                            <div className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span>Contract verified ✓</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <AlertTriangle className="w-4 h-4 text-yellow-600" />
                              <span>High volatility risk</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <TrendingUp className="w-4 h-4 text-blue-600" />
                              <span>Strong community base</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Star className="w-4 h-4 text-purple-600" />
                              <span>Ecosystem development active</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-purple-50"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-8 h-8 text-blue-600 animate-pulse" />
            <Sparkles className="w-6 h-6 text-purple-600 ml-2 animate-bounce" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to explore the crypto cosmos?</h2>
          <p className="text-xl text-slate-600 mb-8">
            Join thousands of traders who navigate the crypto universe with StarCheck's intelligent analysis.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Sparkles className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 bg-transparent"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white relative">
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center relative">
                  <Star className="w-5 h-5 text-white" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-xl font-semibold">StarCheck</span>
              </div>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Navigate the crypto universe with confidence. Our AI-powered analysis illuminates the path to smarter
                investment decisions.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Features</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pricing</li>
                <li className="hover:text-white cursor-pointer transition-colors">API</li>
                <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">About</li>
                <li className="hover:text-white cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 StarCheck. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .shooting-star {
          position: absolute;
          top: 50%;
          left: -100px;
          width: 2px;
          height: 2px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border-radius: 50%;
          animation: shoot 8s linear infinite;
        }

        .shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 1px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          left: -50px;
        }

        @keyframes shoot {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(calc(100vw + 100px)) translateY(-200px);
            opacity: 0;
          }
        }

        /* Spy Character Styles */
        .spy-container {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spy-character {
          position: relative;
          width: 120px;
          height: 180px;
          animation: spy-bob 3s ease-in-out infinite;
        }

        .spy-body {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 90px;
          background: linear-gradient(145deg, #1e293b, #334155);
          border-radius: 12px 12px 6px 6px;
        }

        .spy-head {
          position: absolute;
          bottom: 75px;
          left: 50%;
          transform: translateX(-50%);
          width: 52px;
          height: 52px;
          background: #fbbf24;
          border-radius: 50%;
          border: 3px solid #1e293b;
        }

        .spy-hat {
          position: absolute;
          bottom: 112px;
          left: 50%;
          transform: translateX(-50%);
          width: 68px;
          height: 30px;
          background: #1e293b;
          border-radius: 30px 30px 0 0;
          border: 3px solid #334155;
        }

        .spy-lens {
          position: absolute;
          bottom: 82px;
          right: 15px;
          width: 38px;
          height: 38px;
          background: #374151;
          border-radius: 50%;
          border: 3px solid #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .lens-glass {
          width: 23px;
          height: 23px;
          background: linear-gradient(145deg, #60a5fa, #3b82f6);
          border-radius: 50%;
          position: relative;
          overflow: hidden;
        }

        .scanning-beam {
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, #60a5fa, transparent);
          border-radius: 50%;
          animation: scan-rotate 2s linear infinite;
        }

        /* Scanning Grid Styles */
        .scanning-grid {
          position: absolute;
          inset: 0;
          width: 300px;
          height: 300px;
          background: 
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          border-radius: 50%;
          animation: grid-pulse 2s ease-in-out infinite;
        }

        .scan-line {
          position: absolute;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          top: 50%;
          left: 0;
          transform-origin: center;
          animation: scan-sweep 3s linear infinite;
        }

        /* Threat Indicators */
        .threat-indicator {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: threat-float 4s ease-in-out infinite;
        }

        .threat-1 {
          top: 30px;
          left: 45px;
          animation-delay: 0s;
        }

        .threat-2 {
          top: 60px;
          right: 30px;
          animation-delay: 1s;
        }

        .threat-3 {
          bottom: 45px;
          left: 60px;
          animation-delay: 2s;
        }

        .threat-pulse {
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          border: 3px solid #ef4444;
          border-radius: 50%;
          animation: pulse-ring 2s infinite;
        }

        /* Animations */
        @keyframes spy-bob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes scan-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes grid-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        @keyframes scan-sweep {
          0% { transform: rotate(-90deg); opacity: 0; }
          25% { opacity: 1; }
          50% { transform: rotate(0deg); opacity: 1; }
          75% { opacity: 1; }
          100% { transform: rotate(90deg); opacity: 0; }
        }

        @keyframes threat-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
        .hero-grid-bg {
          position: relative;
          background:
            linear-gradient(90deg, rgba(59,130,246,0.06) 1px, transparent 1px),
            linear-gradient(rgba(59,130,246,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: center;
        }
        .hero-shooting-star {
          position: absolute;
          width: 2px;
          height: 2px;
          z-index: 2;
          background: linear-gradient(45deg, #fff, #3b82f6 60%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 8px 2px #60a5fa, 0 0 24px 8px #3b82f6;
        }
        .hero-shooting-star::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -60px;
          transform: translateY(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, #fff, #3b82f6 60%, transparent 100%);
          border-radius: 2px;
          opacity: 0.7;
        }
        .star1 {
          top: 18%;
          left: -120px;
          animation: hero-shoot 7s linear infinite;
          animation-delay: 0s;
        }
        .star2 {
          top: 35%;
          left: -100px;
          animation: hero-shoot2 8s linear infinite;
          animation-delay: 2.5s;
        }
        .star3 {
          top: 60%;
          left: -140px;
          animation: hero-shoot3 9s linear infinite;
          animation-delay: 5s;
        }
        @keyframes hero-shoot {
          0% {
            transform: translateX(0) translateY(0) rotate(-15deg);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(-120px) rotate(-15deg);
            opacity: 0;
          }
        }
        @keyframes hero-shoot2 {
          0% {
            transform: translateX(0) translateY(0) rotate(-10deg);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(110vw) translateY(-80px) rotate(-10deg);
            opacity: 0;
          }
        }
        @keyframes hero-shoot3 {
          0% {
            transform: translateX(0) translateY(0) rotate(-20deg);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateX(130vw) translateY(-160px) rotate(-20deg);
            opacity: 0;
          }
        }

        /* Meteor Styles */
        .hero-meteor {
          position: absolute;
          width: 4px;
          height: 4px;
          z-index: 2;
          background: linear-gradient(45deg, #fff, #fbbf24 60%, transparent 100%);
          border-radius: 50%;
          box-shadow: 0 0 16px 4px #fbbf24, 0 0 32px 12px #f59e42;
        }
        .hero-meteor::before {
          content: '';
          position: absolute;
          top: 50%;
          left: -120px;
          transform: translateY(-50%);
          width: 160px;
          height: 4px;
          background: linear-gradient(90deg, #fff, #fbbf24 60%, transparent 100%);
          border-radius: 2px;
          opacity: 0.8;
          filter: blur(1px);
        }
        .meteor1 {
          top: 10%;
          left: -160px;
          animation: hero-meteor-fall 10s linear infinite;
          animation-delay: 1.5s;
        }
        .meteor2 {
          top: 70%;
          left: -180px;
          animation: hero-meteor-fall2 12s linear infinite;
          animation-delay: 6s;
        }
        @keyframes hero-meteor-fall {
          0% {
            transform: translateX(0) translateY(0) rotate(-30deg);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(140vw) translateY(200px) rotate(-30deg);
            opacity: 0;
          }
        }
        @keyframes hero-meteor-fall2 {
          0% {
            transform: translateX(0) translateY(0) rotate(-25deg);
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            transform: translateX(120vw) translateY(160px) rotate(-25deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
