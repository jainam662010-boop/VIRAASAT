"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTitle } from "@/components/animations/text-reveal";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: ["hello@viraasat.org", "partnerships@viraasat.org"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 11 2345 6789", "Mon-Fri, 9am-6pm IST"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["National Cultural Center", "New Delhi, India 110001"],
  },
  {
    icon: Clock,
    title: "Virtual Hours",
    details: ["24/7 Online Access", "Physical visits by appointment"],
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-16 pb-16">
      {/* Header */}
      <section className="max-w-container-max mx-auto mb-16">
        <AnimatedTitle
          title="Connect With Us"
          subtitle="Whether you're an artist, researcher, collector, or cultural enthusiast, we'd love to hear from you. Reach out to collaborate, inquire, or simply share your passion for Indian art."
        />
      </section>

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Form */}
        <ScrollReveal>
          <div className="glass-panel p-8">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              Send a Message
            </h2>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  Message Sent!
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-label-caps text-[10px] text-on-surface-variant tracking-wider block mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-outline-variant/40 focus:border-primary py-3 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-label-caps text-[10px] text-on-surface-variant tracking-wider block mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-transparent border-b-2 border-outline-variant/40 focus:border-primary py-3 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-label-caps text-[10px] text-on-surface-variant tracking-wider block mb-2">
                    SUBJECT
                  </label>
                  <select
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-outline-variant/40 focus:border-primary py-3 text-on-surface outline-none transition-colors cursor-pointer"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="artist">Artist Submission</option>
                    <option value="press">Press & Media</option>
                    <option value="visit">Visit Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-label-caps text-[10px] text-on-surface-variant tracking-wider block mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-outline-variant/40 focus:border-primary py-3 text-on-surface placeholder:text-on-surface-variant/50 outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full group"
                >
                  Send Message
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </ScrollReveal>

        {/* Contact Info */}
        <div>
          <ScrollReveal>
            <h2 className="font-headline-md text-headline-md text-primary mb-8">
              Get in Touch
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 0.1}>
                <div className="glass-panel p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-label-caps text-label-caps text-on-surface mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail) => (
                      <p key={detail} className="font-body-md text-body-md text-on-surface-variant">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Social Links */}
          <ScrollReveal delay={0.4}>
            <div className="mt-12">
              <h3 className="font-label-caps text-label-caps text-on-surface mb-4">
                Follow Our Journey
              </h3>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "YouTube", "LinkedIn"].map((social) => (
                  <button
                    key={social}
                    className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
                  >
                    <span className="text-[10px] font-label-caps">{social[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-container-max mx-auto mt-24">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "How can I contribute artifacts to the museum?",
              a: "We welcome contributions from collectors and artists. Please contact our acquisitions team with detailed information and photographs of the piece.",
            },
            {
              q: "Can I visit the physical collection?",
              a: "Yes, physical visits are available by appointment. Contact us to schedule a guided tour of our Delhi facility.",
            },
            {
              q: "How do I collaborate as an artist?",
              a: "We actively partner with traditional artisans. Submit your portfolio through our artist portal or email partnerships@viraasat.org.",
            },
            {
              q: "Are educational programs available?",
              a: "We offer virtual workshops, guided tours, and educational resources for schools and universities. Contact us for program details.",
            },
          ].map((faq, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-panel p-6">
                <h3 className="font-headline-md text-lg text-on-surface mb-3">
                  {faq.q}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {faq.a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
