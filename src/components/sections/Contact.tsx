import React, { useState, useCallback } from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Facebook, MessageSquare } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SOCIAL_LINKS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kvn2004",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vihanga-nimsara-6a8181317/",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "#",
    ariaLabel: "Visit my Facebook profile",
  },
] as const;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: Implement form submission logic
      console.log("Form submitted:", formData);
    },
    [formData],
  );

  return (
    <Section id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary font-mono text-lg" aria-hidden="true">
              04.
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">What's Next?</h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-muted text-lg leading-relaxed mb-8">
            I'm currently looking for freelance opportunities or internships.
            However, if you have other requests or questions, don't hesitate to
            use the form.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-muted">
              <Mail className="text-primary" aria-hidden="true" />
              <a
                href="mailto:knimsaravihanga@gmail.com"
                className="hover:text-primary transition-colors"
                aria-label="Send email to knimsaravihanga@gmail.com"
              >
                knimsaravihanga@gmail.com
              </a>
            </div>
            <div
              className="flex gap-4 mt-4"
              role="list"
              aria-label="Social media links"
            >
              {SOCIAL_LINKS.map(({ icon: Icon, label, href, ariaLabel }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 bg-white/5 rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label={ariaLabel}
                  role="listitem"
                >
                  <Icon size={24} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageSquare className="text-primary" aria-hidden="true" /> Send
              a Message
            </h3>
            <form
              className="space-y-4"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-muted"
                  >
                    Name{" "}
                    <span className="text-primary" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="Vihanga Nimsara"
                    required
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-muted"
                  >
                    Email{" "}
                    <span className="text-primary" aria-label="required">
                      *
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                    placeholder="vihanga@example.com"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-muted"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-muted"
                >
                  Message{" "}
                  <span className="text-primary" aria-label="required">
                    *
                  </span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  placeholder="Hello, I'd like to talk about..."
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
