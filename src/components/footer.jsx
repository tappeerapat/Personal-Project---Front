import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

export default function Footer() {
  // Simple helper for social icons
  const SocialIcon = ({ Icon }) => (
    <a
      href="#"
      className="w-8 h-8 bg-green-700 hover:bg-green-600 rounded-md flex items-center justify-center transition-colors"
    >
      <Icon className="w-3.5 h-3.5" />
    </a>
  );

  // Simple helper for link lists
  const FooterLink = ({ href, children }) => (
    <li>
      <a
        href={href}
        className="text-green-100 hover:text-white text-xs transition-colors"
      >
        {children}
      </a>
    </li>
  );

  // Simple helper for contact info
  const ContactItem = ({ Icon, children }) => (
    <li className="flex items-start gap-2">
      <Icon className="w-4 h-4 text-green-300 mt-1 shrink-0" />
      <div>{children}</div>
    </li>
  );

  return (
    <footer className="bg-linear-to-br from-green-900 to-green-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-green-700 text-xl">⛳</span>
            </div>
            <h3 className="text-white">TeeGolf</h3>
          </div>
          <p className="text-green-100 text-sm mb-4">
            Book premium golf courses across Thailand.
          </p>
          <div className="flex gap-3">
            <SocialIcon Icon={Facebook} />
            <SocialIcon Icon={Instagram} />
            <SocialIcon Icon={Twitter} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Golf Courses</FooterLink>
            <FooterLink href="#">Hot Deals</FooterLink>
            <FooterLink href="#">Packages</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
          </ul>
        </div>

        {/* Popular Destinations */}
        <div>
          <h4 className="text-white mb-4">Popular Destinations</h4>
          <ul className="space-y-2">
            <FooterLink href="#">Bangkok Golf Courses</FooterLink>
            <FooterLink href="#">Pattaya Golf Courses</FooterLink>
            <FooterLink href="#">Phuket Golf Courses</FooterLink>
            <FooterLink href="#">Chiang Mai Golf Courses</FooterLink>
            <FooterLink href="#">Hua Hin Golf Courses</FooterLink>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <ContactItem Icon={Phone}>
              <p className="text-green-100 text-sm">+66 2 123 4567</p>
              <p className="text-green-100 text-sm">Mon-Sun: 8AM-8PM</p>
            </ContactItem>
            <ContactItem Icon={Mail}>
              <p className="text-green-100 text-sm">info@teegolf.com</p>
            </ContactItem>
            <ContactItem Icon={MapPin}>
              <p className="text-green-100 text-sm">Bangkok, Thailand</p>
            </ContactItem>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 px-4 max-w-7xl mx-auto">
        <p className="text-green-200 text-sm">
          © 2024 TeeGolf. All rights reserved.
        </p>
        <div className="flex gap-6">
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
        </div>
      </div>
    </footer>
  );
}
