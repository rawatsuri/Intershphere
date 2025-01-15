import { Card } from "@/components/ui/card"
import { 
  Search, 
  Palette, 
  Mail, 
  MessageSquare, 
  DollarSign, 
  Globe 
} from "lucide-react"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO services including local SEO, on-page and off-page optimization, keyword research, and link building to improve your online visibility"
    },
    {
      icon: Palette,
      title: "Logo Creation",
      description: "Custom logo design services to establish your brand identity and make a lasting impression on your target audience"
    },
    {
      icon: Mail,
      title: "Email/SMS Automation",
      description: "From basic welcome sequences to advanced nurturing and promotional campaigns, we help you stay connected with your customers"
    },
    {
      icon: MessageSquare,
      title: "Social Media Content",
      description: "Tailored social media posts designed to fit your brand voice and engage your audience effectively across platforms"
    },
    {
      icon: DollarSign,
      title: "Paid Advertising",
      description: "Strategic setup and management of Facebook and Google ad campaigns to maximize your ROI (ad spend not included)"
    },
    {
      icon: Globe,
      title: "Website Creation",
      description: "Professional website development as an add-on service, perfect for businesses looking to establish or upgrade their online presence"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/services-hero.jpg"
            alt="Services Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Marketing Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Comprehensive digital marketing solutions to grow your business online
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}