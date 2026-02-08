import React, { useState, useCallback } from "react";
import { Section } from "../ui/Section";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Facebook,
  MessageSquare,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

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

// EmailJS Configuration
// TODO: Replace these with your actual EmailJS credentials from https://www.emailjs.com/
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitStatus("loading");
      setErrorMessage("");

      try {
        // Send email using EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "New Contact Form Submission",
          message: formData.message,
          to_name: "Vihanga Nimsara", // Your name
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY,
        );

        setSubmitStatus("success");
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } catch (error) {
        console.error("Failed to send email:", error);
        setSubmitStatus("error");
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again or contact me directly via email.",
        );

        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
          setErrorMessage("");
        }, 5000);
      }
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

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500"
                >
                  <CheckCircle size={20} aria-hidden="true" />
                  <p className="text-sm font-medium">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500"
                >
                  <AlertCircle
                    size={20}
                    className="mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </motion.div>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={submitStatus === "loading"}
              >
                {submitStatus === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
