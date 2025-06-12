import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

export default function ContactSection() {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_q4wxel7", // EmailJS service ID
        "template_g295ugu", // EmailJS template ID
        form.current,
        "A25CpV49-KtfvWphk", // EmailJS public key
      )
      .then(
        () => {
          setOpen(true);
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("Email send error:", error.text);
          setLoading(false);
        },
      );
  };

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-primary" />
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a project in mind or just want to connect? Reach out and let's discuss how I can
            contribute to your team or project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-center p-6">
                <h3 className="mb-4 text-2xl font-semibold">Contact Information</h3>
                <p className="mb-6 text-muted-foreground">
                  Feel free to reach out for collaboration opportunities, job inquiries, or just to
                  say hello. I'm always open to discussing new projects and ideas.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <a href="https://mail.google.com/mail/">
                      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                        <EnvelopeClosedIcon className="h-4 w-4" />
                      </Button>
                    </a>
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">joelstalin76@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a href="https://www.linkedin.com/in/joel-j-14742417b">
                      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                        <LinkedInLogoIcon className="h-4 w-4" />
                      </Button>
                    </a>
                    <div>
                      <p className="text-sm font-medium">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/joel-j-14742417b"
                        className="text-sm text-muted-foreground"
                      >
                        linkedin.com/in/joel-j-14742417b{" "}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <a href="https://github.com/joel9591">
                      <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                        <GitHubLogoIcon className="h-4 w-4" />
                      </Button>
                    </a>
                    <div>
                      <p className="text-sm font-medium">GitHub</p>
                      <a
                        href="https://github.com/joel9591"
                        className="text-sm text-muted-foreground"
                      >
                        github.com/joel9591
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="mb-3 text-sm font-semibold">Connect on social media</h4>
                  <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/joel-j-14742417b">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <LinkedInLogoIcon className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://github.com/joel9591">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <GitHubLogoIcon className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href="https://www.instagram.com/">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <InstagramLogoIcon className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-2xl font-semibold">Send a Message</h3>
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="from_name"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="from_email"
                        type="email"
                        required
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Your email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="Your message"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Submitting..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        <Snackbar
          open={open}
          autoHideDuration={4000}
          onClose={() => setOpen(false)}
          message="Message sent successfully!"
        />
      </div>
    </section>
  );
}
