import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, GraduationCap, Clock } from "lucide-react"

export default function BTechMechanicalPage() {
  const careerPaths = [
    {
      title: "Design Engineer",
      description: "Design mechanical components, products, and systems using CAD software and engineering principles",
      skills: ["CAD/CAM", "Product Design", "GD&T", "Simulation"],
      companies: ["Tata Motors", "Mahindra & Mahindra", "L&T", "Siemens", "General Motors"],
    },
    {
      title: "Manufacturing Engineer",
      description: "Optimize manufacturing processes, improve efficiency, and ensure quality control in production",
      skills: ["Production Planning", "Lean Manufacturing", "Quality Control", "Process Optimization"],
      companies: ["Maruti Suzuki", "Toyota", "Bosch", "Hyundai", "BHEL"],
    },
    {
      title: "Automotive Engineer",
      description: "Design, develop, and test vehicles, vehicle systems, and components",
      skills: ["Vehicle Dynamics", "Powertrain Systems", "Automotive Electronics", "NVH Analysis"],
      companies: ["Tata Motors", "Mahindra", "Ashok Leyland", "Honda", "Mercedes-Benz"],
    },
    {
      title: "Robotics Engineer",
      description: "Design, build, and maintain robotic systems for industrial and other applications",
      skills: ["Robotics", "Automation", "Control Systems", "Programming"],
      companies: ["ABB", "FANUC", "KUKA", "Yaskawa", "Rockwell Automation"],
    },
    {
      title: "Energy Systems Engineer",
      description: "Design and optimize energy generation, distribution, and utilization systems",
      skills: ["Thermodynamics", "Renewable Energy", "HVAC", "Energy Efficiency"],
      companies: ["NTPC", "Adani Power", "Siemens Energy", "GE Power", "Suzlon"],
    },
    {
      title: "Aerospace Engineer",
      description: "Design, develop, and test aircraft, spacecraft, and related systems",
      skills: ["Aerodynamics", "Aircraft Structures", "Propulsion Systems", "Flight Mechanics"],
      companies: ["HAL", "ISRO", "Boeing India", "Airbus India", "Rolls-Royce India"],
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/education" className="text-green-600 hover:underline">
              ← Back to Education Pathways
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">B.Tech in Mechanical Engineering</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to pursuing a Bachelor of Technology in Mechanical Engineering
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Duration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">4 years (8 semesters)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Eligibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">10+2 with PCM (Physics, Chemistry, Mathematics)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Career Prospects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Excellent job opportunities in automotive, manufacturing, aerospace, energy, and design industries
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              B.Tech in Mechanical Engineering is a four-year undergraduate program that focuses on the design,
              manufacturing, and maintenance of mechanical systems. It is one of the oldest and most versatile
              engineering disciplines, covering principles of physics, mathematics, and materials science to analyze,
              design, and manufacture mechanical systems.
            </p>
            <p className="text-gray-700 mb-4">
              The curriculum includes core mechanical engineering subjects like thermodynamics, fluid mechanics,
              strength of materials, manufacturing processes, machine design, and emerging areas like robotics,
              automation, and CAD/CAM. Students gain hands-on experience through laboratory sessions, workshops,
              industry visits, and capstone projects.
            </p>
            <p className="text-gray-700 mb-4">
              This program prepares students for careers across various industries including automotive, aerospace,
              manufacturing, energy, robotics, and more. Graduates can work as design engineers, manufacturing
              engineers, automotive engineers, energy systems engineers, and in many other specialized roles.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Engineering Mechanics",
                "Strength of Materials",
                "Thermodynamics",
                "Fluid Mechanics",
                "Heat Transfer",
                "Manufacturing Processes",
                "Machine Design",
                "CAD/CAM",
                "Robotics & Automation",
                "Mechanical Vibrations",
                "IC Engines",
                "Refrigeration & Air Conditioning",
                "Industrial Engineering",
                "Metrology & Quality Control",
                "Finite Element Analysis",
              ].map((subject, index) => (
                <Badge key={index} className="py-2 px-4 text-base bg-green-50 text-green-800 hover:bg-green-100">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Career Paths after B.Tech in Mechanical Engineering</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careerPaths.map((path, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{path.title}</CardTitle>
                  <CardDescription>{path.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">Key Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {path.skills.map((skill, i) => (
                          <Badge key={i} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-gray-500 mb-2">Top Hiring Companies</h3>
                      <div className="flex flex-wrap gap-2">
                        {path.companies.map((company, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {company}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Colleges for B.Tech in Mechanical Engineering</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>IITs and NITs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Delhi - Department of Mechanical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Bombay - Department of Mechanical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Madras - Department of Mechanical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>NIT Trichy - Department of Mechanical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>NIT Warangal - Department of Mechanical Engineering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Top Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>BITS Pilani - Department of Mechanical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Delhi Technological University (DTU)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Vellore Institute of Technology (VIT)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Manipal Institute of Technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Centurion University of Technology and Management (CUTM)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Pursue B.Tech in Mechanical Engineering?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance on college selection, entrance exam preparation, and career planning.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
export default function DegreePage() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">B.Tech in Mechanical</h1>
      <p className="text-gray-700 mb-4">
        Foundation for mechanical design, manufacturing, and automation careers.
      </p>
      <h2 className="text-xl font-semibold mb-2">Career Opportunities:</h2>
      <div className="flex flex-wrap gap-2">
        <span className="badge">Mechanical Engineer</span>
        <span className="badge">CAD Designer</span>
        <span className="badge">Manufacturing Engineer</span>
      </div>
    </div>
  );
}
