"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.currentTarget)
      const name = formData.get('name')
      const email = formData.get('email')
      const message = formData.get('message')

      // Show success message first
      toast({
        title: "Message Ready!",
        description: "Opening your email client...",
      })

      // Reset form
      e.currentTarget.reset()
      
      // Short delay before opening email client
      setTimeout(() => {
        const mailtoLink = `mailto:interspheremarketing.inc@gmail.com?subject=Contact Form Submission from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`
        window.location.href = mailtoLink
      }, 1000)

    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-lg">Full Name</Label>
        <Input
          id="name"
          name="name"
          placeholder="John Doe"
          className="h-12 text-lg bg-white border-black/10 focus:border-black"
          required
          disabled={isSubmitting}
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
          disabled={isSubmitting}
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
          disabled={isSubmitting}
        />
      </div>
      <Button 
        type="submit" 
        size="lg" 
        className="w-full h-12 text-lg bg-black text-white hover:bg-gray-900 relative"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
