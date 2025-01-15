"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  plan: {
    name: string
    price: string
    description: string
    features: string[]
    popular?: boolean
  }
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`relative ${plan.popular ? 'transform -translate-y-4' : ''}`}>
      <div
        className={`relative p-8 rounded-xl backdrop-blur-sm transition-all duration-500 ${
          plan.popular
            ? 'bg-white shadow-2xl'
            : 'bg-black/50 text-white border border-white/10 hover:border-white/20'
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm font-semibold py-2 px-6 rounded-full shadow-xl">
            MOST POPULAR
          </div>
        )}
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-black' : 'text-white'}`}>
          {plan.name}
        </h3>
        <div className="mb-4">
          <span className={`text-6xl font-bold ${plan.popular ? 'text-black' : 'text-white'}`}>
            {plan.price}
          </span>
          <span className={plan.popular ? 'text-gray-600' : 'text-gray-300'}>/month</span>
        </div>
        <p className={`mb-8 ${plan.popular ? 'text-gray-600' : 'text-gray-300'}`}>
          {plan.description}
        </p>
        <Button
          className={`w-full mb-8 h-12 text-lg font-semibold transition-all duration-500 ${
            plan.popular
              ? 'bg-black text-white hover:bg-gray-900'
              : 'bg-white text-black hover:bg-gray-100'
          }`}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get Started
        </Button>
        <ul className="space-y-4">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <Check className={`h-5 w-5 mr-3 ${plan.popular ? 'text-black' : 'text-white'}`} />
              <span className={`${plan.popular ? 'text-gray-800' : 'text-gray-300'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
