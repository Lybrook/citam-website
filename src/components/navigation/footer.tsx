import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-accent text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <Image
              src="/logo.png"
              alt="CITAM Kitale"
              width={150}
              height={50}
              className="h-10 w-auto mb-6"
            />
            <p className="mb-6">
              Christ is The Answer Ministries (CITAM) Kitale is a vibrant church committed to
              spreading the gospel of Jesus Christ and serving the community.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5 text-white hover:text-primary transition-colors" />
              </Link>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/sermons" className="hover:text-primary transition-colors">
                  Sermons
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/ministries" className="hover:text-primary transition-colors">
                  Ministries
                </Link>
              </li>
              <li>
                <Link href="/give" className="hover:text-primary transition-colors">
                  Give
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Service Times */}
          <div>
            <h3 className="text-lg font-bold mb-6">Service Times</h3>
            <ul className="space-y-3">
              <li>
                <span className="font-semibold">Sunday First Service:</span> 8:00 AM - 10:00 AM
              </li>
              <li>
                <span className="font-semibold">Sunday Second Service:</span> 10:30 AM - 12:30 PM
              </li>
              <li>
                <span className="font-semibold">Wednesday Service:</span> 5:30 PM - 7:00 PM
              </li>
              <li>
                <span className="font-semibold">Friday Prayer Night:</span> 6:00 PM - 8:00 PM
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 text-primary" />
                <span>Kitale Town, Trans Nzoia County, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>+254 712 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>info@citamkitale.org</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="container text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CITAM Kitale. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;