import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Intersphere Core Plan",
      price: "$500",
      description: "Ideal for small businesses starting their digital journey",
      features: [
        "Basic SEO optimization (local SEO, on-page optimization)",
        "Social media content creation (8 posts/month)",
        "Email/SMS automation setup",
        "Basic welcome sequences",
        "Reminder sequences"
      ]
    },
    {
      name: "Intersphere Radius Plan",
      price: "$1,000",
      description: "Perfect for growing businesses expanding their reach",
      features: [
        "All Core Plan features",
        "Advanced SEO optimization",
        "Keyword research",
        "Competitive analysis",
        "Social media content (15 posts/month)",
        "Paid Facebook and Google ads management"
      ],
      popular: true
    },
    {
      name: "Intersphere Orbit Plan",
      price: "$2,000",
      description: "Best for established businesses seeking significant growth",
      features: [
        "All Radius Plan features",
        "Advanced SEO (on-page and off-page)",
        "Link building",
        "Social media content (30 posts/month)",
        "Full email/SMS automation",
        "Monthly performance reports",
        "Strategy optimization"
      ]
    }
  ]

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Marketing Solutions for Every Business</h1>
          <p className="text-xl text-gray-500">
            Choose the plan that fits your growth goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 ${plan.popular ? 'border-primary shadow-lg' : ''}`}
            >
              {plan.popular && (
                <div className="text-primary text-sm font-semibold mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <p className="text-gray-500 mb-6">{plan.description}</p>
              <Button 
                className="w-full mb-6"
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-500">
                    <Check className="h-5 w-5 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}