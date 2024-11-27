'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Building2, Lightbulb, BookOpen, ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NavItem = ({ href, text, icon: Icon, dropdown = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (e) => {
    if (dropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const isActive = pathname === href;

  return (
    <div className="relative group" ref={dropdownRef}>
      <Link
        href={href}
        className={`px-3 py-2 text-sm font-medium rounded-md flex items-center ${
          isActive ? 'text-white bg-gray-700' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
        onClick={toggleDropdown}
      >
        <span className="flex items-center">
          {Icon && <Icon className="w-5 h-5 mr-2" />}
          {text}
          {dropdown && (
            <ChevronDown
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          )}
        </span>
      </Link>
      {dropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 w-48 py-2 mt-2 bg-gray-800 rounded-md shadow-xl z-10"
            >
              {dropdown.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.text}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    { href: '/', text: 'Home', icon: Home },
    {
      href: '#',
      text: 'Company',
      icon: Building2,
      dropdown: [
        { href: '/about', text: 'About Us' },
        { href: '/team', text: 'Our Team' },
        { href: '/careers', text: 'Careers' },
      ],
    },
    {
      href: '#',
      text: 'Solutions',
      icon: Lightbulb,
      dropdown: [
        { href: '/product-a', text: 'Product A' },
        { href: '/product-b', text: 'Product B' },
        { href: '/product-c', text: 'Product C' },
      ],
    },
    {
      href: '#',
      text: 'Resources',
      icon: BookOpen,
      dropdown: [
        { href: '/blog', text: 'Blog' },
        { href: '/whitepapers', text: 'Whitepapers' },
        { href: '/case-studies', text: 'Case Studies' },
      ],
    },
  ];

  const toggleMobileDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <svg
                className="h-8 w-8 text-indigo-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">
                <span className="text-blue-500">Ekak</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <NavItem key={index} {...item} />
            ))}
          </div>
          <div className="hidden md:flex md:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-800"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => toggleMobileDropdown(index)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    <span className="flex items-center">
                      {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                      {item.text}
                    </span>
                    {item.dropdown && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {item.dropdown && activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-1"
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          {subItem.text}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
