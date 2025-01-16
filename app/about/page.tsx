import { Award, Clock, Globe, Rocket, Target, Users } from "lucide-react"
import { GooeyText } from "@/components/ui/gooey-text-morphing"
import { HighlightGroup } from "@/components/ui/highlighter"

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center">
            {/* <GooeyText
              texts={["About Us", "Our Story", "Who We Are"]}
              morphTime={3}
              cooldownTime={2}
              className="text-6xl font-bold text-white mb-6"
            /> */}
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of digital marketing experts dedicated to transforming businesses through innovative solutions and data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <HighlightGroup className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  To empower businesses with cutting-edge digital marketing solutions that drive growth, enhance online presence, and deliver measurable results. We believe in creating lasting partnerships and helping our clients stay ahead in the digital landscape.
                </p>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-black via-black/50 to-transparent" />
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  To be the leading force in digital marketing innovation, setting new standards for excellence and helping businesses thrive in an ever-evolving digital world.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Target,
                  title: "Excellence",
                  description: "Committed to delivering outstanding results"
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "Working together to achieve goals"
                },
                {
                  icon: Rocket,
                  title: "Innovation",
                  description: "Pushing boundaries in digital marketing"
                },
                {
                  icon: Award,
                  title: "Integrity",
                  description: "Building trust through transparency"
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="p-6 bg-black/5 rounded-xl hover:bg-black/10 transition-colors group"
                >
                  <div className="p-3 bg-black w-fit rounded-lg mb-4">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </HighlightGroup>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-white via-white/50 to-transparent mx-auto" />
          </div>
          <HighlightGroup className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach",
                description: "Our strategies are designed to reach audiences worldwide, helping your business expand beyond borders."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock availability ensures your marketing needs are addressed promptly and efficiently."
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "We focus on delivering measurable results that directly impact your business growth and success."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
              >
                <div className="p-3 bg-white/10 w-fit rounded-lg mb-6 group-hover:bg-white/20 transition-colors">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </HighlightGroup>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <HighlightGroup className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "95%", label: "Client Retention" },
              { number: "24/7", label: "Support" },
              { number: "100%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
                  {stat.number}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </HighlightGroup>
        </div>
      </section>
    </div>
  )
}
