"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Book, GraduationCap, Briefcase, Phone, Home } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const menuItems = [
    { name: "Home", href: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Jobs", href: "/jobs/category/business-finance", icon: <Briefcase className="h-4 w-4 mr-2" /> },
    { name: "Education", href: "/education/after-12th-arts", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
    {
      name: "Technical Degrees",
      href: "/education/technical-degrees",
      icon: <GraduationCap className="h-4 w-4 mr-2" />,
    },
    { name: "Career Pathways", href: "/education/career-pathways", icon: <GraduationCap className="h-4 w-4 mr-2" /> },
    { name: "About Us", href: "/about", icon: <Book className="h-4 w-4 mr-2" /> },
    { name: "Contact Us", href: "/contact", icon: <Phone className="h-4 w-4 mr-2" /> },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-gold-500/20 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-gold-300 hover:text-gold-500 hover:bg-navy-900/50"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="border-r border-gold-500/20 bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                  <span className="gradient-text">Gyan</span>
                  <span className="text-white">Hub</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center text-lg font-medium text-muted-foreground hover:text-gold-400 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-1 font-bold text-xl">
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Gyan
            </motion.span>
            <motion.span
              className="text-white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hub
            </motion.span>
          </Link>
        </div>
        <motion.nav
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link text-sm font-medium text-muted-foreground hover:text-gold-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </motion.nav>
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            size="sm"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 hover:text-navy-950 font-medium shadow-md hover:shadow-lg transition-all duration-300 border border-gold-500/20"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </motion.div>
      </div>
    </header>
  )
}
