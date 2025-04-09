"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/search-bar"
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Code,
  Database,
  Brain,
  Rocket,
  CheckCircle,
  Award,
  TrendingUp,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(49,87,181,0.15),transparent_70%),radial-gradient(circle_at_top_right,rgba(255,191,0,0.15),transparent_70%)] z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold">
                Leading and Innovative <span className="gradient-text">Career Counselling</span> Centre
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover the perfect career path based on your education, skills, and interests. Get comprehensive
                guidance for your professional journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/jobs">Explore Careers</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold-500/50 text-gold-600 hover:text-gold-700 hover:bg-gold-50"
                >
                  <Link href="/education">Education Paths</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-navy-500 rounded-lg blur opacity-30 animate-pulse"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jqzZBna3htMkcdS8WRyeGilo5EBSRJ.png"
                  alt="Career Guidance"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            className="container mx-auto px-4 md:px-6 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">OUR SERVICES</h2>
            <p className="text-muted-foreground mt-2">Comprehensive career guidance services to help you succeed</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card className="gradient-card hover:scale-105 transition-all duration-300 group overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy-800">
                    <GraduationCap className="h-5 w-5 text-gold-600 group-hover:text-gold-700 transition-colors" />
                    Education Pathways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Discover career options based on your education level - 10th, 12th, or higher degrees. Explore
                    detailed paths for Science, Commerce, and Arts streams.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-gold-600 group-hover:text-gold-700 transition-colors">
                    <Link href="/education" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="gradient-card hover:scale-105 transition-all duration-300 group overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy-800">
                    <Briefcase className="h-5 w-5 text-gold-600 group-hover:text-gold-700 transition-colors" />
                    High-Paying Jobs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Explore top-paying career options across various industries and multinational corporations with
                    excellent salary packages and growth opportunities.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-gold-600 group-hover:text-gold-700 transition-colors">
                    <Link href="/jobs/high-paying" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="gradient-card hover:scale-105 transition-all duration-300 group overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy-800">
                    <BookOpen className="h-5 w-5 text-gold-600 group-hover:text-gold-700 transition-colors" />
                    Skill Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Master in-demand skills required for your dream job through expert guidance, curated resources, and
                    personalized learning paths.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-gold-600 group-hover:text-gold-700 transition-colors">
                    <Link href="/skills" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">SKILL DEVELOPMENT</h2>
            <p className="text-muted-foreground mt-2">Essential skills for the modern professional landscape</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Code className="h-5 w-5 text-gold-600 mr-2" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master programming languages, cloud computing, and data analysis to excel in tech-driven roles.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Full-stack development (MERN, MEAN)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Cloud platforms (AWS, Azure, GCP)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">DevOps & CI/CD pipelines</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Mobile app development (React Native, Flutter)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">AI/ML frameworks (TensorFlow, PyTorch)</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">ACQUISITION METHODS:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Online courses (Coursera, Udemy), Coding bootcamps, Project-based learning, GitHub contributions,
                      Industry certifications (AWS, Azure, Google), Hackathons, Open-source contributions
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Database className="h-5 w-5 text-gold-600 mr-2" />
                    Data Literacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develop skills in data analysis, interpretation, and visualization for informed decision-making.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Data analysis tools (Python, R, SQL)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Visualization (Tableau, Power BI)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Statistical analysis & ML fundamentals</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Big data technologies (Hadoop, Spark)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Data-driven decision making</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">ACQUISITION METHODS:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Data science courses, Kaggle competitions, Analytics certifications (Google Analytics, IBM Data
                      Science), Industry workshops, Real-world data projects, Internships at data-driven companies
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Brain className="h-5 w-5 text-gold-600 mr-2" />
                    Adaptive Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Build critical thinking, problem-solving, and adaptability to thrive in rapidly changing
                    environments.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Critical thinking & logical reasoning</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Design thinking methodology</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Agile mindset & adaptability</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Complex problem-solving frameworks</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Emotional intelligence & resilience</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">ACQUISITION METHODS:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Design thinking workshops, Problem-solving exercises, Hackathons, Continuous learning practices,
                      Leadership programs, Mentorship, Case study analysis, Scenario-based training
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Rocket className="h-5 w-5 text-gold-600 mr-2" />
                    Digital Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master remote work tools, virtual communication, and digital project management platforms.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Project management tools (Jira, Asana)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Collaboration platforms (Slack, Teams)</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Virtual presentation & communication</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Remote team leadership</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Digital documentation & knowledge sharing</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">ACQUISITION METHODS:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Digital workplace certifications, Team collaboration workshops, Remote work best practices,
                      Virtual team-building activities, Agile/Scrum certifications, Communication skills training
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/skills">Explore All Skills</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* High Paying Jobs Section */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.1),transparent_70%)] z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">HIGH PAYING JOBS</h2>
            <p className="text-muted-foreground mt-2">
              Explore lucrative careers with exceptional compensation packages at leading organizations
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="gradient-card hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-black-800">Investment Banker</CardTitle>
                    <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-200">₹50-80 Lakhs</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Advise corporations, institutions, and governments on financial transactions, mergers, acquisitions,
                    and capital raising.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-black-800">Required Qualifications:</h4>
                      <p className="text-xs text-muted-foreground">
                        MBA in Finance from top-tier business schools, CFA certification, Strong analytical skills
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-black-800">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Financial Modeling
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Valuation
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Deal Structuring
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Negotiation
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-black-800">Top Hiring Companies:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Goldman Sachs
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          JP Morgan
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Morgan Stanley
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Citi
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Bank of America
                        </Badge>
                      </div>
                    </div>

                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700">
                      <Link href="/jobs/investment-banker" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="gradient-card hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-black-800">Data Scientist</CardTitle>
                    <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-200">₹25-60 Lakhs</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Analyze complex datasets to extract insights, build predictive models, and drive data-informed
                    business decisions.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-black-800">Required Qualifications:</h4>
                      <p className="text-xs text-muted-foreground">
                        Master's/PhD in Statistics, Computer Science, or related field; expertise in Python, R, ML
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-black-800">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Machine Learning
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Statistical Analysis
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Data Visualization
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Big Data
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-black-800">Top Hiring Companies:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Google
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Microsoft
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Amazon
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          IBM
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Mu Sigma
                        </Badge>
                      </div>
                    </div>

                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700">
                      <Link href="/jobs/data-scientist" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="gradient-card hover:shadow-lg transition-all duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-black-800">AI/ML Engineer</CardTitle>
                    <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-200">₹30-70 Lakhs</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Design, develop and deploy sophisticated machine learning models and AI solutions for complex
                    business problems.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-black-800">Required Qualifications:</h4>
                      <p className="text-xs text-muted-foreground">
                        Master's/PhD in Computer Science, AI, or related field; expertise in TensorFlow, PyTorch
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-black-800">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Deep Learning
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          NLP
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Computer Vision
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          MLOps
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-black-800">Top Hiring Companies:</h4>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline" className="text-xs">
                          Google
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Microsoft
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          NVIDIA
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Meta
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          OpenAI
                        </Badge>
                      </div>
                    </div>

                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700">
                      <Link href="/jobs/ai-ml-engineer" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black-800">
                  <Award className="h-5 w-5 text-gold-600" />
                  Educational Pathways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  High-paying careers typically require specialized education and continuous skill development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Advanced degrees (MBA, MS, PhD) from prestigious institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Professional certifications (CFA, PMP, AWS, Azure, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Specialized technical training in emerging technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Executive education programs for leadership development</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black-800">
                  <TrendingUp className="h-5 w-5 text-gold-600" />
                  Career Growth Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategies to accelerate your career trajectory and maximize earning potential.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Build expertise in high-demand, specialized domains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Develop leadership and management capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Strategic job transitions to progressive roles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Networking with industry leaders and decision-makers</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/jobs/high-paying">Explore All High-Paying Jobs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Popular Jobs Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.1),transparent_70%)] z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">HIGH PAYING CAREERS IN B.TECH CSE</h2>
            <p className="text-muted-foreground mt-2">
              Explore lucrative technical careers with exceptional growth potential at top MNCs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                role: "AI/ML Engineer",
                salary: "₹30-70 Lakhs",
                companies: ["Google", "Microsoft", "Amazon", "NVIDIA", "OpenAI"],
                description:
                  "Developing and implementing machine learning models and AI solutions for business problems and product innovation.",
                skills: ["Deep Learning", "NLP", "Computer Vision", "Python", "TensorFlow/PyTorch"],
              },
              {
                role: "Cloud Architect",
                salary: "₹25-60 Lakhs",
                companies: ["AWS", "Microsoft", "Google Cloud", "IBM", "Oracle"],
                description:
                  "Designing and implementing scalable, secure, and resilient cloud infrastructure solutions.",
                skills: ["AWS/Azure/GCP", "Infrastructure as Code", "Microservices", "Kubernetes", "Security"],
              },
              {
                role: "Blockchain Developer",
                salary: "₹20-50 Lakhs",
                companies: ["ConsenSys", "IBM", "Polygon", "Infosys", "TCS"],
                description:
                  "Building decentralized applications, smart contracts, and blockchain solutions for various industries.",
                skills: ["Solidity", "Web3.js", "Smart Contracts", "DApps", "Cryptography"],
              },
              {
                role: "DevOps Engineer",
                salary: "₹18-45 Lakhs",
                companies: ["Amazon", "Microsoft", "Netflix", "Uber", "Atlassian"],
                description:
                  "Implementing CI/CD pipelines, automating infrastructure, and ensuring reliable system operations.",
                skills: ["CI/CD", "Docker", "Kubernetes", "Infrastructure as Code", "Monitoring"],
              },
              {
                role: "Data Scientist",
                salary: "₹25-60 Lakhs",
                companies: ["Amazon", "IBM", "Microsoft", "Mu Sigma", "Fractal Analytics"],
                description:
                  "Analyzing complex data to extract insights, build predictive models, and drive data-informed business decisions.",
                skills: ["Machine Learning", "Statistical Analysis", "Python/R", "Data Visualization", "SQL"],
              },
              {
                role: "Software Architect",
                salary: "₹35-80 Lakhs",
                companies: ["Google", "Microsoft", "Amazon", "Oracle", "Adobe"],
                description:
                  "Designing high-level software structures, making technical decisions, and guiding development teams.",
                skills: [
                  "System Design",
                  "Scalability",
                  "Design Patterns",
                  "Technical Leadership",
                  "Multiple Languages",
                ],
              },
              {
                role: "Cybersecurity Expert",
                salary: "₹20-55 Lakhs",
                companies: ["IBM", "Cisco", "Deloitte", "TCS", "Palo Alto Networks"],
                description:
                  "Protecting systems, networks, and data from cyber threats through security measures and protocols.",
                skills: ["Network Security", "Ethical Hacking", "Security Auditing", "Threat Analysis", "SIEM"],
              },
              {
                role: "Product Manager",
                salary: "₹25-60 Lakhs",
                companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Swiggy"],
                description:
                  "Leading product development, defining product vision, and coordinating cross-functional teams.",
                skills: [
                  "Product Strategy",
                  "User Experience",
                  "Market Analysis",
                  "Agile/Scrum",
                  "Stakeholder Management",
                ],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="gradient-card border-gold-500/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-black-800">{job.role}</CardTitle>
                    <p className="text-gold-600 font-semibold">{job.salary}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="mb-3">
                      <p className="text-xs text-black-800 font-medium mb-1">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-gold-100 text-gold-800 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-black-800 font-medium mb-1">Top Companies:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.companies.map((company, i) => (
                          <span key={i} className="text-xs bg-white-200 text-black-700 px-2 py-1 rounded">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-gold-500 text-gold-600 hover:bg-gold-50 hover:text-gold-700"
                    >
                      <Link href={`/jobs/${encodeURIComponent(job.role)}`}>View Career Path</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/jobs">View All Careers</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="dark-section py-12 px-6 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Find Your Perfect Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Get personalized career guidance based on your education, skills, and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-gold-500 text-gold-400 hover:text-gold-300 hover:bg-navy-800/50 animate-pulse-glow"
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold-500 text-gold-400 hover:text-gold-300 hover:bg-navy-800/50"
              >
                <Link href="/contact">Contact Our Counselors</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
