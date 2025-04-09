import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Briefcase, GraduationCap, LineChart, TrendingUp, Clock } from "lucide-react"
import Image from "next/image"

export default function SoftwareArchitectPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-gold-50 to-white-100 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/jobs" className="text-gold-600 hover:underline flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Careers
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-black-900">Software Architect Career Path</h1>
            <p className="text-lg text-black-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to building a successful career as a Software Architect
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-black-900 mb-4">Role Overview</h2>
              <p className="text-black-700 mb-4">
                Software Architects design high-level software structures, make critical technical decisions, and guide
                development teams in building robust, scalable, and maintainable systems. They bridge the gap between
                business requirements and technical implementation, ensuring that software solutions align with
                organizational goals.
              </p>
              <p className="text-black-700">
                As the technical visionaries of software projects, Software Architects combine deep technical expertise
                with leadership skills to shape the direction of complex systems. This senior role offers excellent
                compensation, significant influence on product development, and the opportunity to solve challenging
                technical problems.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Software Architect"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-gold-600" />
                  Educational Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Bachelor's Degree</p>
                      <p className="text-sm text-black-600">
                        Computer Science, Software Engineering, or related technical field
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Master's Degree (Preferred)</p>
                      <p className="text-sm text-black-600">
                        Computer Science, Software Engineering, or related field with focus on architecture
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Certifications</p>
                      <p className="text-sm text-black-600">
                        AWS Certified Solutions Architect, Microsoft Certified: Azure Solutions Architect, TOGAF,
                        Certified Software Architect (iSAQB)
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-gold-600" />
                  Key Skills Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Technical Skills</p>
                      <p className="text-sm text-black-600">
                        System design, design patterns, multiple programming languages, cloud platforms (AWS/Azure/GCP),
                        microservices, distributed systems, security principles
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Soft Skills</p>
                      <p className="text-sm text-black-600">
                        Leadership, communication, problem-solving, decision-making, mentoring, stakeholder management
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Business Acumen</p>
                      <p className="text-sm text-black-600">
                        Understanding of business requirements, cost-benefit analysis, ROI considerations for technical
                        decisions
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-5 w-5 text-gold-600" />
                  Salary Range
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Associate Architect (8-10 years exp.)</p>
                      <p className="text-sm text-black-600">₹25-40 lakhs per annum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Software Architect (10-15 years)</p>
                      <p className="text-sm text-black-600">₹40-70 lakhs per annum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Senior/Lead Architect (15+ years)</p>
                      <p className="text-sm text-black-600">₹70-100+ lakhs per annum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Chief/Principal Architect</p>
                      <p className="text-sm text-black-600">₹1-2+ crores per annum</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black-900 mb-6">Career Progression Path</h2>

            <div className="relative">
              <div className="absolute left-4 h-full w-0.5 bg-gold-200"></div>

              <div className="relative z-10 mb-8 ml-10">
                <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-gold-500 bg-white flex items-center justify-center">
                  <Clock className="h-3 w-3 text-gold-600" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Software Developer/Engineer (0-5 years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Foundation stage focused on building strong programming and problem-solving skills.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Focus Areas:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Mastering programming languages and frameworks</li>
                          <li>Understanding software development lifecycle</li>
                          <li>Building components and features</li>
                          <li>Learning about system design and architecture</li>
                          <li>Developing debugging and troubleshooting skills</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-10 mb-8 ml-10">
                <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-gold-500 bg-white flex items-center justify-center">
                  <Clock className="h-3 w-3 text-gold-600" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Senior Developer / Tech Lead (5-8 years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Transition stage with increasing technical leadership and architectural responsibilities.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Focus Areas:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Leading development teams</li>
                          <li>Making technical decisions for components/modules</li>
                          <li>Designing solutions for complex features</li>
                          <li>Mentoring junior developers</li>
                          <li>Deepening knowledge of architectural patterns</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-10 mb-8 ml-10">
                <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-gold-500 bg-white flex items-center justify-center">
                  <Clock className="h-3 w-3 text-gold-600" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Associate/Solution Architect (8-10 years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Entry-level architectural role with focus on specific domains or components.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Focus Areas:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Designing architecture for specific domains</li>
                          <li>Creating technical specifications</li>
                          <li>Evaluating technologies and frameworks</li>
                          <li>Collaborating with other architects</li>
                          <li>Developing architectural governance</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-10 mb-8 ml-10">
                <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-gold-500 bg-white flex items-center justify-center">
                  <Clock className="h-3 w-3 text-gold-600" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Software Architect (10-15 years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Full architectural role with responsibility for entire systems or products.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Focus Areas:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Designing end-to-end system architecture</li>
                          <li>Making high-level technical decisions</li>
                          <li>Ensuring non-functional requirements (scalability, performance, security)</li>
                          <li>Guiding development teams on implementation</li>
                          <li>Aligning technical solutions with business goals</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-10 ml-10">
                <div className="absolute -left-10 top-1 h-6 w-6 rounded-full border-2 border-gold-500 bg-white flex items-center justify-center">
                  <Clock className="h-3 w-3 text-gold-600" />
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Chief/Principal Architect (15+ years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Senior leadership role shaping technical strategy across the organization.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Focus Areas:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Defining enterprise-wide architectural vision</li>
                          <li>Establishing architectural standards and governance</li>
                          <li>Leading architectural teams</li>
                          <li>Driving technical innovation</li>
                          <li>Participating in strategic business planning</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black-900 mb-6">Top Hiring Companies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Tech Giants</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Google - ₹70-120 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Microsoft - ₹60-110 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Amazon - ₹60-100 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Oracle - ₹50-90 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Adobe - ₹50-90 lakhs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Indian IT Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">TCS - ₹35-70 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Infosys - ₹40-75 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Wipro - ₹35-70 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">HCL Technologies - ₹40-75 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Tech Mahindra - ₹35-65 lakhs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Other Major Employers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Flipkart - ₹50-90 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Walmart Global Tech - ₹50-90 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">IBM - ₹45-85 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Accenture - ₹40-80 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">PayPal - ₹50-90 lakhs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black-900 mb-6">Industry Trends & Future Outlook</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-gold-600" />
                    Current Trends
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Cloud-Native Architecture</p>
                        <p className="text-sm text-black-600">
                          Increasing focus on designing systems specifically for cloud environments using microservices,
                          containers, and serverless
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">DevSecOps Integration</p>
                        <p className="text-sm text-black-600">
                          Embedding security considerations throughout the architecture and development lifecycle
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">AI/ML Integration</p>
                        <p className="text-sm text-black-600">
                          Designing architectures that incorporate AI/ML capabilities and accommodate their unique
                          requirements
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-gold-600" />
                    Future Outlook
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Job Market Growth</p>
                        <p className="text-sm text-black-600">
                          Projected 15-20% growth in software architect roles over the next decade, with increasing
                          demand for specialized architects
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Evolving Role</p>
                        <p className="text-sm text-black-600">
                          Shift towards architects who can bridge business strategy and technology, with greater
                          emphasis on innovation and digital transformation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Emerging Technologies</p>
                        <p className="text-sm text-black-600">
                          Growing need for architects with expertise in edge computing, quantum computing, blockchain,
                          and other emerging technologies
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gold-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-black-900 mb-4">Ready to Become a Software Architect?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black-700">
            Get personalized guidance on education, skill development, and career planning to advance your software
            architecture career.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
