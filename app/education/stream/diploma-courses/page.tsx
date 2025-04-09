"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function DiplomaCoursesPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="bg-gradient-to-b from-background to-navy-950/30 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/education/after-10th" className="text-gold-400 hover:text-gold-300 transition-colors">
              ← Back to After 10th Options
            </Link>
          </div>
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl font-bold gradient-text">Diploma Courses</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Comprehensive guide to diploma courses after 10th standard
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-4">Overview</h2>
              <p className="text-muted-foreground mb-4">
                Diploma courses are specialized technical education programs that provide hands-on training and
                practical knowledge in various engineering and non-engineering fields. These courses are an excellent
                alternative to the traditional academic route of 11th and 12th, followed by a degree.
              </p>
              <p className="text-muted-foreground mb-4">
                Diplomas typically span 3 years (post-10th) or 2 years (post-12th) and focus on developing practical
                skills and technical expertise required for specific industries. They offer a faster entry into the
                workforce compared to degree programs.
              </p>
              <p className="text-muted-foreground">
                One of the significant advantages of diploma courses is the lateral entry option, which allows diploma
                holders to join directly in the second year of relevant B.Tech/B.E. programs, saving time and cost in
                pursuing higher education.
              </p>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-navy-500 rounded-lg blur opacity-30"></div>
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Diploma Education"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-8">Popular Diploma Courses</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Badge className="h-6 w-6 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      1
                    </Badge>
                    Diploma in Mechanical Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Focuses on the design, manufacturing, and maintenance of mechanical systems and machinery. It covers
                    subjects like thermodynamics, manufacturing processes, and machine design.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Manufacturing Technology
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Strength of Materials
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          CAD/CAM
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Mechanical Technician, Design Assistant, Production Supervisor, Quality Control Inspector
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹3-8 LPA depending on experience and employer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Badge className="h-6 w-6 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      2
                    </Badge>
                    Diploma in Computer Science & Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Covers programming, software development, networking, and computer hardware. This course provides
                    practical knowledge for the IT industry.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Programming Languages
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Database Management
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Web Development
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Junior Programmer, Network Administrator, Technical Support, Web Developer
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹3-10 LPA depending on skills and location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Badge className="h-6 w-6 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      3
                    </Badge>
                    Diploma in Electrical Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Focuses on electrical systems, power generation, transmission, and distribution. Covers electrical
                    machines, control systems, and power electronics.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Electrical Machines
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Power Systems
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Circuit Theory
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Electrical Supervisor, Site Engineer, Testing Engineer, Maintenance Technician
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹3-9 LPA depending on sector and experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Badge className="h-6 w-6 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      4
                    </Badge>
                    Diploma in Civil Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Covers construction, building design, surveying, and infrastructure development. Provides practical
                    training in civil construction projects.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Structural Engineering
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Surveying
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Construction Management
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Site Supervisor, Surveyor, Draftsman, Building Inspector
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹3-8 LPA depending on project scale and location</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Badge className="h-6 w-6 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      5
                    </Badge>
                    Diploma in Electronics & Communication
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Focuses on electronic devices, communication systems, and signal processing. Covers digital
                    electronics, microprocessors, and telecommunications.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Digital Electronics
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Communication Systems
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Microprocessors
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Electronics Technician, Service Engineer, Technical Support, Communication Supervisor
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹3-9 LPA depending on specialization and industry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Badge className="h-6 w-6 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      6
                    </Badge>
                    Diploma in Pharmacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Covers pharmaceutical sciences, drug formulations, and pharmacy management. Provides knowledge about
                    medications and their effects.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Subjects:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Pharmaceutics
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Pharmacology
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Pharmaceutical Chemistry
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Pharmacy Assistant, Medical Representative, Lab Technician, Healthcare Administration
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">
                        ₹2.5-7 LPA depending on sector (retail/hospital/pharmaceutical)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[radial-gradient(ellipse_at_center,rgba(49,87,181,0.1),transparent_70%)]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-8">Admission Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-gold-400" />
                    Eligibility Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Minimum 10th pass or equivalent with required percentage (typically 35-50% depending on
                          institute and category)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Science and Mathematics as subjects in 10th for engineering diplomas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Age limit varies, typically 16-25 years with relaxation for reserved categories
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Lateral entry into 2nd year possible for 12th pass (PCM) students
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-gold-400" />
                    Selection Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          State-level entrance exams (DET/JEEP/POLYCET) in many states
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Merit-based admission based on 10th marks in some institutes
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Counseling rounds for seat allocation based on rank/merit
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Document verification and medical fitness tests in some institutions
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-8">Top Polytechnic Institutes in India</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Government Polytechnic, Mumbai",
                  location: "Maharashtra",
                  specializations: "Mechanical, Electrical, Civil, Computer, Electronics",
                  features: "Oldest polytechnic in India, excellent industry connections",
                },
                {
                  name: "Delhi Polytechnic (Delhi Institute of Tool Engineering)",
                  location: "New Delhi",
                  specializations: "Mechanical, Tool & Die Making, Production",
                  features: "State-of-the-art infrastructure, strong placement record",
                },
                {
                  name: "Pusa Polytechnic, Delhi",
                  location: "New Delhi",
                  specializations: "Civil, Architectural Assistantship, Electronics",
                  features: "Excellent faculty, practical training focus",
                },
                {
                  name: "Central Polytechnic College",
                  location: "Chennai, Tamil Nadu",
                  specializations: "Mechanical, Electrical, Civil, Computer, Electronics",
                  features: "Established reputation, good placement opportunities",
                },
                {
                  name: "Government Polytechnic",
                  location: "Ahmedabad, Gujarat",
                  specializations: "Mechanical, Electrical, Civil, Computer Science",
                  features: "Strong industry linkages, modern facilities",
                },
                {
                  name: "Women's Polytechnic",
                  location: "Bangalore, Karnataka",
                  specializations: "Computer Science, Electronics, Architecture",
                  features: "Focus on women's technical education, excellent campus facilities",
                },
              ].map((institute, index) => (
                <Card
                  key={index}
                  className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{institute.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-sm text-gold-400">Location:</p>
                        <p className="text-sm text-muted-foreground">{institute.location}</p>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gold-400">Top Specializations:</p>
                        <p className="text-sm text-muted-foreground">{institute.specializations}</p>
                      </div>
                      <div>
                        <p className="font-medium text-sm text-gold-400">Key Features:</p>
                        <p className="text-sm text-muted-foreground">{institute.features}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Choose a Diploma Course?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Get personalized guidance on selecting the right diploma course based on your interests, aptitudes, and
              career goals.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-gold-500 text-gold-400 hover:text-gold-300 hover:bg-navy-800/50 animate-pulse-glow"
            >
              <Link href="/contact">Contact Our Counselors</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
