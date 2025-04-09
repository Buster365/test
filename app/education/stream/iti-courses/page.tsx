"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { GraduationCap, Clock, Award } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ITICoursesPage() {
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
            <h1 className="text-3xl font-bold gradient-text">ITI Courses</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Comprehensive guide to ITI (Industrial Training Institute) courses after 10th standard
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
                ITI (Industrial Training Institute) courses are skill-based vocational training programs designed to
                create a skilled workforce for the industrial sector. These courses focus on practical training in
                various trades rather than academic education.
              </p>
              <p className="text-muted-foreground mb-4">
                ITI courses develop specific job-oriented skills that prepare students for immediate employment after
                completion. The training is highly practical, with around 70% practical and 30% theoretical components.
              </p>
              <p className="text-muted-foreground">
                These courses are governed by the Directorate General of Training (DGT) under the Ministry of Skill
                Development and Entrepreneurship, and are offered at both government and private ITIs across India.
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
                  alt="ITI Training"
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
            <h2 className="text-2xl font-bold gradient-text mb-8">Popular ITI Trades</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Badge className="h-6 w-6 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      1
                    </Badge>
                    Electrician
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <p className="text-sm text-muted-foreground">Duration: 2 Years</p>
                    </div>
                    <p className="text-muted-foreground">
                      Training in installation, maintenance, and repair of electrical systems, wiring, and equipment in
                      residential, commercial, and industrial settings.
                    </p>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Skills Learned:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Circuit Assembly
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Wiring Installation
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Electrical Maintenance
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Electrician, Electrical Maintenance Technician, Wiring Contractor, Power Plant Technician
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹2-5 LPA depending on experience and location</p>
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
                    Fitter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <p className="text-sm text-muted-foreground">Duration: 2 Years</p>
                    </div>
                    <p className="text-muted-foreground">
                      Training in assembly, fitting, and repair of mechanical components and machinery in production and
                      manufacturing industries.
                    </p>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Skills Learned:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Precision Measurement
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Assembly Techniques
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Blueprint Reading
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Industrial Fitter, Maintenance Fitter, Production Line Technician, Machine Assembler
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹2-4.5 LPA depending on industry and experience</p>
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
                    Welder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <p className="text-sm text-muted-foreground">Duration: 1 Year</p>
                    </div>
                    <p className="text-muted-foreground">
                      Training in joining metals through various welding techniques for construction, manufacturing, and
                      fabrication industries.
                    </p>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Skills Learned:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Arc Welding
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Gas Welding
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          TIG/MIG Techniques
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Welder, Welding Supervisor, Fabrication Technician, Pipeline Welder
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">
                        ₹1.8-4 LPA with higher pay for specialized welding
                      </p>
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
                    Computer Operator & Programming Assistant (COPA)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <p className="text-sm text-muted-foreground">Duration: 1 Year</p>
                    </div>
                    <p className="text-muted-foreground">
                      Training in computer operation, office applications, basic programming, and IT support for various
                      organizations.
                    </p>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Skills Learned:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Office Software
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Basic Programming
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Hardware Troubleshooting
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Computer Operator, Data Entry Specialist, IT Support, Office Assistant
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">₹1.8-3.5 LPA depending on company and location</p>
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
                    Mechanic (Motor Vehicle)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <p className="text-sm text-muted-foreground">Duration: 2 Years</p>
                    </div>
                    <p className="text-muted-foreground">
                      Training in repair, maintenance, and servicing of automobiles, engines, and vehicle systems for
                      the automotive industry.
                    </p>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Skills Learned:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Engine Repair
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Vehicle Diagnostics
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Auto Electrical Systems
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Automobile Mechanic, Service Technician, Automotive Workshop Supervisor, Service Advisor
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">
                        ₹2-4.5 LPA with higher pay at authorized service centers
                      </p>
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
                    Plumber
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gold-400" />
                      <p className="text-sm text-muted-foreground">Duration: 1 Year</p>
                    </div>
                    <p className="text-muted-foreground">
                      Training in installation, repair, and maintenance of water supply, drainage, and sanitation
                      systems in buildings.
                    </p>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Key Skills Learned:</p>
                      <div className="flex flex-wrap gap-2 mt-1">
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Pipe Fitting
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Water Systems
                        </Badge>
                        <Badge variant="outline" className="bg-navy-800 text-gold-300 border-navy-700">
                          Drainage Installation
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Career Prospects:</p>
                      <p className="text-sm text-muted-foreground">
                        Plumber, Plumbing Contractor, Maintenance Technician, Construction Plumber
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-gold-400">Average Salary:</p>
                      <p className="text-sm text-muted-foreground">
                        ₹1.8-4 LPA with good potential for self-employment
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
            <h2 className="text-2xl font-bold gradient-text mb-8">Certification & Recognition</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-gold-400" />
                    National Trade Certificate (NTC)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Awarded by the National Council for Vocational Training (NCVT) after successful completion of
                          the course and passing the All India Trade Test (AITT)
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Nationally recognized qualification that validates skills and competence in the specific trade
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Enhances employability in both government and private sector jobs
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
                    Advanced Training & Further Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Advanced Vocational Training Scheme (AVTS) for skill enhancement in specialized areas
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Craftsmen Training Scheme (CTS) for technical knowledge advancement
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Lateral entry into diploma courses (2nd year) for certain engineering trades
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="text-muted-foreground">
                          Apprenticeship programs with stipends under the Apprentices Act, 1961
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
            <h2 className="text-2xl font-bold gradient-text mb-8">Benefits of ITI Training</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Badge className="h-5 w-5 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      1
                    </Badge>
                    Quick Employment Opportunity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Short duration courses (1-2 years) enable quick entry into the job market. High demand for skilled
                    workers in industries means better chances of immediate employment after training.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Badge className="h-5 w-5 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      2
                    </Badge>
                    Low-Cost Skill Acquisition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Government ITIs offer training at very affordable fees compared to other courses. Various
                    scholarships and financial assistance are available for economically disadvantaged students and
                    reserved categories.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Badge className="h-5 w-5 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      3
                    </Badge>
                    Self-Employment Potential
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Many trades (Electrician, Plumber, Welder, etc.) offer excellent self-employment opportunities after
                    gaining experience. Government schemes like PMKVY provide loans and support for entrepreneurship to
                    ITI graduates.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Badge className="h-5 w-5 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      4
                    </Badge>
                    International Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    NTC certificates are recognized in many countries, especially in the Middle East and Gulf nations.
                    This opens opportunities for overseas employment with better salary packages in countries like UAE,
                    Saudi Arabia, Singapore, etc.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Badge className="h-5 w-5 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      5
                    </Badge>
                    Government Job Eligibility
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ITI certificates qualify candidates for various technical positions in government departments, PSUs,
                    railways, defense, and other public sector units. Many government positions specifically require ITI
                    qualifications in relevant trades.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Badge className="h-5 w-5 rounded-full bg-gold-500 text-navy-950 p-1 flex items-center justify-center">
                      6
                    </Badge>
                    Practical Skill Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    ITI training focuses on hands-on practical skills that have direct industrial application. Unlike
                    purely theoretical courses, ITI graduates are job-ready with industry-relevant skills that are
                    immediately applicable in the workplace.
                  </p>
                </CardContent>
              </Card>
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
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Start Your ITI Training?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
              Get personalized guidance on selecting the right ITI trade based on your skills, interests, and career
              aspirations.
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
