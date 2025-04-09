import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, GraduationCap, Clock } from "lucide-react"

export default function BTechElectronicsPage() {
  const careerPaths = [
    {
      title: "VLSI Design Engineer",
      description: "Design and develop integrated circuits and microchips for various electronic devices",
      skills: ["VLSI Design", "Verilog/VHDL", "Digital Electronics", "Semiconductor Physics"],
      companies: ["Intel", "AMD", "Qualcomm", "Texas Instruments", "Nvidia"],
    },
    {
      title: "Embedded Systems Engineer",
      description: "Develop hardware and software solutions for embedded systems and IoT devices",
      skills: ["Microcontrollers", "Embedded C/C++", "PCB Design", "RTOS"],
      companies: ["Bosch", "Siemens", "Samsung", "Honeywell", "General Electric"],
    },
    {
      title: "RF Engineer",
      description: "Design and optimize radio frequency circuits and systems for wireless communication",
      skills: ["RF Circuit Design", "Antenna Theory", "Signal Processing", "Wireless Protocols"],
      companies: ["Ericsson", "Nokia", "Qualcomm", "Cisco", "Motorola"],
    },
    {
      title: "Electronics Hardware Engineer",
      description: "Design, develop, and test electronic hardware components and systems",
      skills: ["Circuit Design", "PCB Layout", "Testing & Troubleshooting", "CAD Tools"],
      companies: ["Apple", "Samsung", "LG Electronics", "Sony", "Philips"],
    },
    {
      title: "Telecommunications Engineer",
      description: "Design and maintain telecommunications systems and network infrastructure",
      skills: ["Network Protocols", "Fiber Optics", "Wireless Systems", "Telecom Standards"],
      companies: ["Airtel", "Jio", "Vodafone", "AT&T", "Verizon"],
    },
    {
      title: "IoT Solutions Architect",
      description: "Design end-to-end IoT solutions integrating hardware, software, and cloud services",
      skills: ["IoT Protocols", "Sensor Integration", "Cloud Platforms", "Edge Computing"],
      companies: ["Amazon AWS", "Microsoft Azure", "IBM", "Cisco", "Intel"],
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
            <h1 className="text-3xl font-bold text-gray-900">B.Tech in Electronics & Communication Engineering</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to pursuing a Bachelor of Technology in Electronics & Communication Engineering
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
                  Excellent job opportunities in electronics, telecommunications, semiconductor, and IoT industries
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              B.Tech in Electronics & Communication Engineering is a four-year undergraduate program that focuses on the
              design, development, and management of electronic systems and communication networks. The program covers
              both hardware and software aspects of electronic devices, circuits, and communication systems.
            </p>
            <p className="text-gray-700 mb-4">
              The curriculum includes core electronics subjects, communication theory, signal processing,
              microprocessors, VLSI design, and emerging technologies like IoT and 5G. Students gain hands-on experience
              through laboratory sessions, projects, and industry internships.
            </p>
            <p className="text-gray-700 mb-4">
              This program prepares students for careers in diverse sectors including telecommunications, semiconductor
              manufacturing, consumer electronics, aerospace, defense, and IT industries. Graduates can work as
              electronics engineers, VLSI designers, embedded systems engineers, RF engineers, and telecommunications
              specialists.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Electronic Devices & Circuits",
                "Digital Electronics",
                "Analog Communication",
                "Digital Communication",
                "Microprocessors & Microcontrollers",
                "VLSI Design",
                "Signal Processing",
                "Electromagnetic Theory",
                "Antenna & Wave Propagation",
                "Wireless Communication",
                "Optical Communication",
                "Embedded Systems",
                "Control Systems",
                "Computer Networks",
                "IoT & Sensor Networks",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Career Paths after B.Tech in Electronics & Communication
          </h2>

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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Top Colleges for B.Tech in Electronics & Communication
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>IITs and NITs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Delhi - Department of Electrical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Bombay - Department of Electrical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Madras - Department of Electrical Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>NIT Trichy - Department of Electronics & Communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>NIT Warangal - Department of Electronics & Communication</span>
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
                    <span>BITS Pilani - Department of Electrical & Electronics</span>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Pursue B.Tech in Electronics & Communication?</h2>
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
      <h1 className="text-3xl font-bold mb-4">B.Tech in Electronics</h1>
      <p className="text-gray-700 mb-4">
        Foundation for electronics, telecommunications, and hardware careers.
      </p>
      <h2 className="text-xl font-semibold mb-2">Career Opportunities:</h2>
      <div className="flex flex-wrap gap-2">
        <span className="badge">Electronics Engineer</span>
        <span className="badge">IoT Developer</span>
        <span className="badge">Hardware Designer</span>
      </div>
    </div>
  );
}
