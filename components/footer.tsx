import { Clock, Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">Intersphere</h2>
              <p className="text-gray-400 mt-4 text-lg leading-relaxed">
                Your partner in digital marketing excellence. We transform businesses through innovative marketing solutions, delivering exceptional results 24/7.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/5 group-hover:bg-white/10 rounded-lg transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-lg">+1 (219) 314-3947</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/5 group-hover:bg-white/10 rounded-lg transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg">interspheremarketing.inc@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="p-3 bg-white/5 group-hover:bg-white/10 rounded-lg transition-colors">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Availability</p>
                  <p className="text-lg">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-gray-400"> 2025 Intersphere Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}