"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Instagram, Facebook } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  navigation: [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#portfolio", label: "Portfolio" },
  ],
  resources: [
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#contact", label: "Contact" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#process", label: "Our Process" },
  ],
};

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=61572342042661",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/company/getdigitell/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/getdigitell",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 py-10 border-t border-slate-200">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-8">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/getdigitell-full-logo.png"
                alt="GetDigitell Logo"
                width={200}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Building high-performance digital solutions for startups and
              businesses worldwide.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:border-primary text-slate-400 hover:text-white transition-all shadow-sm group"
                >
                  <social.icon
                    size={18}
                    className="transition-transform group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-500 hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-slate-500 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-slate-400 text-[10px] uppercase font-bold">
                  Email:
                </span>
                <a
                  href="mailto:sales@getdigitell.com"
                  className="text-slate-900 hover:text-primary transition-colors"
                >
                  sales@getdigitell.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400 text-[10px] uppercase font-bold">
                  Call:
                </span>
                <a
                  href="tel:+447544838500"
                  className="text-slate-900 hover:text-primary transition-colors"
                >
                  +44 7544 838500
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Section */}
        <div className="pt-8 border-t border-slate-200">
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-1">
                <p className="text-md font-medium text-slate-600">
                  GetDigitell is a registered trademark of Reimage Consultancy
                  Services Ltd.
                </p>
                <p className="text-sm text-slate-400">
                  Registered in England and Wales. Company No: 08478744.
                </p>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm font-bold text-slate-900">
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/cookies"
                  className="hover:text-primary transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed text-center max-w-5xl mx-auto">
              © {new Date().getFullYear()} GetDigitell. All rights reserved. All
              content on this website, including text, graphics, logos, and
              images, is the property of GetDigitell or its licensors and is
              protected by copyright laws. Do not copy any content without our
              consent.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
