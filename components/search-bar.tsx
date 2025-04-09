"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Briefcase, GraduationCap } from "lucide-react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { fetchJobData } from "@/lib/data"
import type { JobData } from "@/types/job"
import { motion, AnimatePresence } from "framer-motion"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<{ text: string; type: string }[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [jobData, setJobData] = useState<JobData[]>([])
  const [educationData, setEducationData] = useState<string[]>([])
  const [isFocused, setIsFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Education data like degrees and streams
  useEffect(() => {
    setEducationData([
      // Degrees
      "B.Tech",
      "B.E.",
      "M.Tech",
      "M.E.",
      "B.Sc",
      "M.Sc",
      "BCA",
      "MCA",
      "B.Com",
      "M.Com",
      "BBA",
      "MBA",
      "BA",
      "MA",
      "LLB",
      "LLM",
      "MBBS",
      "MD",
      "BDS",
      "B.Pharm",
      "M.Pharm",
      "B.Ed",
      "M.Ed",
      "Ph.D",
      // Streams
      "Computer Science",
      "Information Technology",
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Electronics & Communication",
      "Chemical Engineering",
      "Science Stream",
      "Commerce Stream",
      "Arts Stream",
      "Humanities",
      "Medical",
      "Engineering",
      "Law",
      "Diploma",
      "ITI Courses",
    ])
  }, [])

  useEffect(() => {
    const loadJobData = async () => {
      const data = await fetchJobData()
      setJobData(data)
    }

    loadJobData()

    // Click outside to close suggestions
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (searchQuery.length > 1) {
      // Match jobs
      const jobSuggestions = jobData
        .filter((job) => job["Job Role"].toLowerCase().includes(searchQuery.toLowerCase()))
        .map((job) => ({ text: job["Job Role"], type: "job" }))

      // Match education data
      const educationSuggestions = educationData
        .filter((edu) => edu.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((edu) => ({ text: edu, type: "education" }))

      // Combine and limit suggestions
      const combinedSuggestions = [...jobSuggestions, ...educationSuggestions].slice(0, 7)

      setSuggestions(combinedSuggestions)
      setShowSuggestions(combinedSuggestions.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery, jobData, educationData])

  const handleSearch = (query: string = searchQuery) => {
    if (query.trim()) {
      // Route based on suggestion type
      const matchedSuggestion = suggestions.find((s) => s.text === query)

      if (matchedSuggestion) {
        if (matchedSuggestion.type === "job") {
          router.push(`/jobs/${encodeURIComponent(query.trim())}`)
        } else if (matchedSuggestion.type === "education") {
          // Handle education searches - route to appropriate page based on found text
          if (
            query.includes("Stream") ||
            query.includes("Science") ||
            query.includes("Commerce") ||
            query.includes("Arts") ||
            query.includes("Humanities")
          ) {
            router.push(`/education/after-10th`)
          } else if (query.includes("B.Tech") || query.includes("B.E.") || query.includes("Engineering")) {
            router.push(`/education/degree/btech-in-computer-science`)
          } else if (query.includes("Diploma")) {
            router.push(`/education/stream/diploma-courses`)
          } else if (query.includes("ITI")) {
            router.push(`/education/stream/iti-courses`)
          } else {
            router.push(`/education`)
          }
        }
      } else {
        router.push(`/jobs/search?q=${encodeURIComponent(query.trim())}`)
      }

      setShowSuggestions(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    handleSearch(suggestion)
  }

  return (
    <div className="relative max-w-2xl mx-auto" ref={searchRef}>
      <div
        className={`flex rounded-lg overflow-hidden search-bar transition-all duration-300 ${isFocused ? "shadow-gold-500/20 shadow-lg" : ""}`}
      >
        <Input
          type="text"
          placeholder="Search for jobs, courses, or skills..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsFocused(true)
            if (searchQuery.length > 1 && suggestions.length > 0) {
              setShowSuggestions(true)
            }
          }}
          onBlur={() => setIsFocused(false)}
          className="rounded-r-none h-12 text-base bg-transparent border-none text-foreground"
        />
        <Button
          onClick={() => handleSearch()}
          className="rounded-l-none h-12 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 border-none"
        >
          <Search className="h-5 w-5" />
          <span className="ml-2 hidden sm:inline">Search</span>
        </Button>
      </div>

      <AnimatePresence>
        {showSuggestions && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="absolute z-10 w-full mt-1 p-2 max-h-60 overflow-auto border-gold-500/20 bg-navy-900/90 backdrop-blur-lg shadow-xl">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="p-2 hover:bg-navy-800/50 cursor-pointer rounded flex items-center"
                  onClick={() => handleSuggestionClick(suggestion.text)}
                >
                  {suggestion.type === "job" ? (
                    <Briefcase className="h-4 w-4 text-gold-400 mr-2" />
                  ) : (
                    <GraduationCap className="h-4 w-4 text-gold-400 mr-2" />
                  )}
                  <span>{suggestion.text}</span>
                </div>
              ))}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
