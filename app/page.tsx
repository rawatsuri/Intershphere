import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { Marquee } from "@/components/ui/marquee"
import { HighlightGroup } from "@/components/ui/highlighter"
import { PricingCard } from "@/components/pricing-card"
import { ArrowRight, BarChart, Check, Clock, Cloud, Code2, Database, DollarSign, Facebook, Globe, Instagram, Layout, Linkedin, Mail, MapPin, MessageSquare, Palette, Phone, Search, Shield, Star, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Dynamic Pattern */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
          <Image
            src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&q=80"
            alt="Hero background"
            fill
            className="object-cover object-center opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up space-y-8">
            <div className="inline-block">
              <div className="relative">
                <div className="absolute inset-0 blur-3xl bg-white/20 rounded-full transform -rotate-6" />
                <div className="relative flex flex-col items-center">
                  {/* <GooeyText
                    texts={["INTERSPHERE", "MARKETING", "EXCELLENCE", "FUTURE"]}
                    morphTime={2}
                    cooldownTime={1.5}
                    className="text-7xl md:text-9xl font-bold mb-6 text-white"
                    textClassName="text-white"
                  /> */}
                </div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light tracking-wide">
              A full-service digital marketing agency dedicated to helping businesses grow their online presence
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Link href="#contact">
                <Button size="lg" className="text-lg bg-white text-black hover:bg-gray-100 group">
                  Start Project
                  <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="text-lg bg-black text-white border-white/20 hover:bg-black/60">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-full">
          <Marquee className="bg-black/50 backdrop-blur-sm py-6" pauseOnHover speed={50}>
            <div className="flex gap-16 items-center px-4">
              {[
                {
                  alt: "Microsoft",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Microsoft_icon.svg/512px-Microsoft_icon.svg.png"
                },
                {
                  alt: "NVIDIA",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/512px-Nvidia_logo.svg.png"
                },
                {
                  alt: "Amazon",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Amazon_icon.svg/512px-Amazon_icon.svg.png"
                },
                {
                  alt: "Apple",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/512px-Apple_logo_black.svg.png"
                },
                {
                  alt: "Meta",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/512px-Meta_Platforms_Inc._logo.svg.png"
                },
                {
                  alt: "Netflix",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/512px-Netflix_2015_logo.svg.png"
                }
              ].map((company, i) => (
                <div key={i} className="relative w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    fill
                    className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </section>

      {/* About Section with Parallax Effect */}
      <section className="py-32 bg-white relative overflow-hidden" id="about">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#f3f3f3_25%,#f3f3f3_50%,transparent_50%,transparent_75%,#f3f3f3_75%)] bg-[length:64px_64px] opacity-20" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-black/80 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative h-[600px] transform group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                  alt="Our vision"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block">
                <h2 className="text-5xl font-bold relative">
                  Our Vision
                  <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-black" />
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Intersphere Marketing, we're committed to transforming your business's digital presence with tailored solutions.
                Our mission is to empower businesses at every stage of growth by offering accessible and effective marketing strategies.
                With our team's expertise in SEO, advertising, and content creation, we provide the tools you need to stand out in today's competitive digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "24/7", label: "Availability" },
                  { number: "100+", label: "Happy Clients" },
                  { number: "30+", label: "Posts Monthly" },
                  { number: "99%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
                    <div className="relative p-6 border border-black/10 group-hover:border-transparent transition-colors">
                      <h3 className="font-bold text-3xl mb-1 group-hover:text-white transition-colors">{stat.number}</h3>
                      <p className="text-gray-600 group-hover:text-white/80 transition-colors">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-black relative" id="services">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            {/* <GooeyText
              texts={["Our Services", "What We Do", "Solutions"]}
              morphTime={3}
              cooldownTime={2}
              className="text-5xl font-bold text-white mb-4"
              textClassName="text-white"
            /> */}
            <p className="text-gray-400 text-xl mt-6">Comprehensive digital marketing solutions tailored to your success</p>
            <div className="w-20 h-1 bg-gradient-to-r from-white via-white/50 to-transparent mx-auto mt-8" />
          </div>

          <HighlightGroup className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "SEO Optimization",
                description: "Boost your online visibility with our expert SEO strategies. We help you rank higher and attract more organic traffic.",
                features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
              },
              {
                icon: Palette,
                title: "Logo Creation",
                description: "Stand out with a unique, professional logo that captures your brand's essence and leaves a lasting impression.",
                features: ["Custom Design", "Brand Identity", "Multiple Formats", "Unlimited Revisions"]
              },
              {
                icon: MessageSquare,
                title: "Email Automation",
                description: "Engage your audience with personalized email campaigns that drive conversions and build relationships.",
                features: ["Campaign Design", "List Management", "A/B Testing", "Analytics"]
              },
              {
                icon: Layout,
                title: "Social Media",
                description: "Build a strong social presence with engaging content and strategic campaigns that connect with your audience.",
                features: ["Content Creation", "Community Management", "Analytics", "Growth Strategy"]
              },
              {
                icon: BarChart,
                title: "Paid Advertising",
                description: "Maximize your ROI with targeted paid advertising campaigns on Facebook, Google, and other platforms.",
                features: ["Campaign Setup", "Audience Targeting", "Performance Tracking", "Budget Optimization"]
              },
              {
                icon: Globe,
                title: "Website Creation",
                description: "Get a stunning, responsive website that converts visitors into customers and grows your business.",
                features: ["Custom Design", "Mobile-First", "SEO-Friendly", "Fast Loading"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-500"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-400">
                        <Check className="h-5 w-5 mr-3 text-white" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/0 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </HighlightGroup>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-black relative" id="pricing">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-20">
            {/* <GooeyText
              texts={["Pricing Plans", "Choose Your Plan", "Get Started"]}
              morphTime={3}
              cooldownTime={2}
              className="text-5xl font-bold text-white mb-4"
              textClassName="text-white"
            /> */}
            <p className="text-gray-400 text-xl mt-6">Choose the perfect plan for your business growth</p>
            <div className="w-20 h-1 bg-gradient-to-r from-white via-white/50 to-transparent mx-auto mt-8" />
          </div>
          <HighlightGroup className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Intersphere Core",
                price: "$500",
                description: "For small businesses starting their digital journey",
                features: [
                  "Basic SEO optimization",
                  "8 social media posts/month",
                  "Email/SMS automation setup",
                  "Basic welcome sequences",
                  "Reminder sequences"
                ]
              },
              {
                name: "Intersphere Radius",
                price: "$1,000",
                description: "For growing businesses expanding their reach",
                features: [
                  "Advanced SEO optimization",
                  "15 social media posts/month",
                  "Keyword research",
                  "Competitive analysis",
                  "Paid ads management",
                  "Full Core plan features",
                  "Performance tracking"
                ],
                popular: true
              },
              {
                name: "Intersphere Orbit",
                price: "$2,000",
                description: "For established businesses seeking growth",
                features: [
                  "Advanced SEO with link building",
                  "30 social media posts/month",
                  "Full email/SMS automation",
                  "Monthly performance reports",
                  "Strategy optimization",
                  "Full Radius plan features",
                  "Priority support",
                  "Custom solutions"
                ]
              }
            ].map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </HighlightGroup>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            {/* <GooeyText
              texts={["Contact Us", "Get in Touch", "Start Project"]}
              morphTime={3}
              cooldownTime={2}
              className="text-5xl font-bold mb-4"
              textClassName="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent"
            /> */}
            <p className="text-gray-600 text-xl mt-6">Let&apos;s create something amazing together</p>
            <div className="w-20 h-1 bg-gradient-to-r from-black via-black/50 to-transparent mx-auto mt-8" />
          </div>

          <HighlightGroup className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Star,
                      title: "Expert Team",
                      description: "Our experienced professionals deliver exceptional results"
                    },
                    {
                      icon: Shield,
                      title: "Proven Success",
                      description: "Track record of driving business growth"
                    },
                    {
                      icon: Clock,
                      title: "24/7 Support",
                      description: "Always here when you need us"
                    },
                    {
                      icon: Database,
                      title: "Data-Driven",
                      description: "Strategies backed by analytics and insights"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="p-3 bg-black/5 rounded-xl group-hover:bg-black/10 transition-colors">
                        <feature.icon className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black/5 rounded-2xl p-8">
              <ContactForm />
            </div>
          </HighlightGroup>
        </div>
      </section>

      {/* <section className="py-32 bg-white relative" id="contact">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <GooeyText
              texts={["Contact Us", "Get in Touch", "Start Project"]}
              morphTime={3}
              cooldownTime={2}
              className="text-5xl font-bold mb-4"
              textClassName="bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent"
            />
            <p className="text-gray-600 text-xl mt-6">Let's create something amazing together</p>
            <div className="w-20 h-1 bg-gradient-to-r from-black via-black/50 to-transparent mx-auto mt-8" />
          </div>

          <HighlightGroup className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Star,
                      title: "Expert Team",
                      description: "Our experienced professionals deliver exceptional results"
                    },
                    {
                      icon: Shield,
                      title: "Proven Success",
                      description: "Track record of driving business growth"
                    },
                    {
                      icon: Clock,
                      title: "24/7 Support",
                      description: "Always here when you need us"
                    },
                    {
                      icon: Database,
                      title: "Data-Driven",
                      description: "Strategies backed by analytics and insights"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4 group">
                      <div className="p-3 bg-black/5 rounded-xl group-hover:bg-black/10 transition-colors">
                        <feature.icon className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{feature.title}</h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-black/5 rounded-2xl p-8">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                const mailtoLink = `mailto:interspheremarketing.inc@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

                window.location.href = mailtoLink;
              }}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-lg">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="h-12 text-lg bg-white border-black/10 focus:border-black"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-lg">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-12 text-lg bg-white border-black/10 focus:border-black"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-lg">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] text-lg bg-white border-black/10 focus:border-black resize-none"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-12 text-lg bg-black text-white hover:bg-gray-900">
                  Send Message
                </Button>
              </form>
            </div>
          </HighlightGroup>
        </div>
      </section> */}
    </div>
  )
}
