import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h6>
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <p>123 Main Street, Anytown, USA 12345</p>
            </div>
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 mr-2" />
              <p>Email: info@example.com</p>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <p>Phone: +1 234 567 8901</p>
            </div>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Follow Us</h6>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Facebook"
                className="hover:bg-gray-800"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="hover:bg-gray-800"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Instagram"
                className="hover:bg-gray-800"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h6>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            {'Copyright © '}
            <a
              href="https://portfolio-a7mdmo74.vercel.app/"
              className="text-blue-400 hover:underline"
            >
              a7mdmo74
            </a>{' '}
            {new Date().getFullYear()}
            {'. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
