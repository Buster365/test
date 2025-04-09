"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { fetchJobData } from "@/lib/data"
import type { JobData } from "@/types/job"
import { motion } from "framer-motion"

export default function PopularJobs() {
  const [popularJobs, setPopularJobs] = useState<JobData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const allJobs = await fetchJobData()

        // High-paying jobs in top MNCs with salary packages
        const highPayingJobs = [
          {
            "Job Role": "AI/ML Engineer",
            "Required Skills":
              "Python, TensorFlow/PyTorch, Deep Learning, Natural Language Processing, Computer Vision",
            "Average Salary (₹ LPA)": "₹20-60 LPA",
            "Top Hiring Companies": "Google, Microsoft, Amazon, Meta, NVIDIA",
          },
          {
            "Job Role": "Cloud Solutions Architect",
            "Required Skills": "AWS/Azure/GCP, Kubernetes, Docker, Microservices, Infrastructure-as-Code",
            "Average Salary (₹ LPA)": "₹25-70 LPA",
            "Top Hiring Companies": "AWS, Microsoft, Google Cloud, IBM, Deloitte",
          },
          {
            "Job Role": "DevOps Engineer",
            "Required Skills": "CI/CD, Docker, Kubernetes, Infrastructure-as-Code, Cloud Platforms, Monitoring",
            "Average Salary (₹ LPA)": "₹18-45 LPA",
            "Top Hiring Companies": "Amazon, Microsoft, Google, IBM, Oracle",
          },
          {
            "Job Role": "Blockchain Developer",
            "Required Skills": "Smart Contracts, Solidity, Web3.js, Distributed Systems, Cryptography",
            "Average Salary (₹ LPA)": "₹20-50 LPA",
            "Top Hiring Companies": "IBM, ConsenSys, Polygon, Infosys, TCS",
          },
          {
            "Job Role": "Data Scientist",
            "Required Skills": "Python, R, Machine Learning, Statistical Analysis, Data Visualization",
            "Average Salary (₹ LPA)": "₹15-45 LPA",
            "Top Hiring Companies": "Amazon, Microsoft, IBM, Goldman Sachs, Walmart Labs",
          },
          {
            "Job Role": "Cybersecurity Specialist",
            "Required Skills": "Network Security, Penetration Testing, Security Tools, Risk Assessment, Compliance",
            "Average Salary (₹ LPA)": "₹16-45 LPA",
            "Top Hiring Companies": "IBM, Cisco, Deloitte, Accenture, HCL",
          },
        ]

        setPopularJobs(highPayingJobs)
      } catch (error) {
        console.error("Error loading job data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadJobs()
  }, [])

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse gradient-card">
            <CardHeader className="h-24 rounded-t-lg" />
            <CardContent className="p-6">
              <div className="h-6 bg-navy-800 rounded mb-4" />
              <div className="h-4 bg-navy-800 rounded mb-2" />
              <div className="h-4 bg-navy-800 rounded mb-2" />
              <div className="h-4 bg-navy-800 rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {popularJobs.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="gradient-card hover:scale-105 transition-all duration-300 h-full">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">{job["Job Role"]}</CardTitle>
              <Badge variant="outline" className="w-fit bg-gold-500/10 text-gold-400 border-gold-500/30">
                {job["Average Salary (₹ LPA)"]}
              </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Required Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {job["Required Skills"]
                    .split(",")
                    .slice(0, 3)
                    .map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs bg-navy-800 text-gold-300">
                        {skill.trim()}
                      </Badge>
                    ))}
                  {job["Required Skills"].split(",").length > 3 && (
                    <Badge variant="secondary" className="text-xs bg-navy-800 text-gold-300">
                      +{job["Required Skills"].split(",").length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Top Companies:</p>
                  <p className="text-sm text-foreground">{job["Top Hiring Companies"]}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="p-0 text-gold-400 hover:text-gold-300">
                <Link href={`/jobs/${encodeURIComponent(job["Job Role"])}`} className="flex items-center">
                  View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
