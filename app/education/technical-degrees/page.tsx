import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Code, Cpu, Cog, Brain, BotIcon as Robot, Database } from "lucide-react"
import Image from "next/image"

export default function TechnicalDegreesPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Technical Degrees</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore comprehensive information about popular technical degrees and their career prospects
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 mb-4">
                Technical degrees provide specialized education in engineering, computer science, and other
                technology-focused fields. These programs combine theoretical knowledge with practical skills to prepare
                students for careers in rapidly evolving industries.
              </p>
              <p className="text-gray-700">
                Whether you're interested in software development, electronics, mechanical systems, artificial
                intelligence, or data science, technical degrees offer pathways to high-demand and well-compensated
                careers across various sectors.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Technical Education"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Undergraduate Technical Degrees</h2>

          <div className="mb-16">
            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="h-6 w-6 text-green-600" />
                  B.Tech in Computer Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      B.Tech in Computer Science is one of the most sought-after undergraduate programs in the
                      engineering domain. It provides students with a solid foundation in computing principles,
                      programming, software development, data structures, algorithms, databases, computer networks, and
                      emerging technologies like AI and Machine Learning.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Subjects</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li>Data Structures and Algorithms</li>
                      <li>Operating Systems</li>
                      <li>Computer Networks</li>
                      <li>Database Management Systems</li>
                      <li>Artificial Intelligence</li>
                      <li>Machine Learning</li>
                      <li>Web & Mobile App Development</li>
                      <li>Cloud Computing</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Opportunities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Software Developer</Badge>
                        <p className="text-sm text-gray-600">Design and build applications across platforms</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Data Scientist</Badge>
                        <p className="text-sm text-gray-600">Analyze data and build predictive models</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">System Architect</Badge>
                        <p className="text-sm text-gray-600">Design complex IT systems and infrastructure</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Full Stack Developer</Badge>
                        <p className="text-sm text-gray-600">Work on both client and server-side technologies</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Cybersecurity Analyst</Badge>
                        <p className="text-sm text-gray-600">Protect systems from threats and vulnerabilities</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">DevOps Engineer</Badge>
                        <p className="text-sm text-gray-600">Streamline development and operations processes</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link href="/jobs/data-scientist" className="text-green-600 hover:underline flex items-center">
                        View detailed career path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Cpu className="h-6 w-6 text-green-600" />
                  B.Tech in Electronics and Communication Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      This program focuses on the design, development, and testing of electronic equipment and
                      communication systems. Students learn about circuits, signal processing, embedded systems, and
                      wireless communication.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Subjects</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li>Electronic Devices and Circuits</li>
                      <li>Analog and Digital Communication</li>
                      <li>Signal Processing</li>
                      <li>Microprocessors and Microcontrollers</li>
                      <li>Embedded Systems</li>
                      <li>IoT and Sensor Technology</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Opportunities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Electronics Engineer</Badge>
                        <p className="text-sm text-gray-600">Design and develop electronic equipment</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">IoT Developer</Badge>
                        <p className="text-sm text-gray-600">Create connected devices and systems</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Embedded Systems Engineer</Badge>
                        <p className="text-sm text-gray-600">Design hardware-software integrated systems</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">VLSI Designer</Badge>
                        <p className="text-sm text-gray-600">Create integrated circuits and microchips</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Telecom Engineer</Badge>
                        <p className="text-sm text-gray-600">Work on communication networks and systems</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Hardware Designer</Badge>
                        <p className="text-sm text-gray-600">Design physical components of electronic devices</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/education/degree/btech-in-electronics"
                        className="text-green-600 hover:underline flex items-center"
                      >
                        View detailed program <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Cog className="h-6 w-6 text-green-600" />
                  B.Tech in Mechanical Engineering
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      Mechanical Engineering is a core branch of engineering that deals with the design, development,
                      manufacturing, and maintenance of mechanical systems. It combines principles of physics and
                      materials science.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Subjects</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li>Thermodynamics</li>
                      <li>Fluid Mechanics</li>
                      <li>Strength of Materials</li>
                      <li>Machine Design</li>
                      <li>Manufacturing Processes</li>
                      <li>Robotics and Automation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Opportunities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Mechanical Engineer</Badge>
                        <p className="text-sm text-gray-600">Design and develop mechanical systems</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">CAD Designer</Badge>
                        <p className="text-sm text-gray-600">Create detailed 3D models and technical drawings</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Manufacturing Engineer</Badge>
                        <p className="text-sm text-gray-600">Optimize production processes and systems</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Quality Control Engineer</Badge>
                        <p className="text-sm text-gray-600">Ensure products meet quality standards</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Maintenance Engineer</Badge>
                        <p className="text-sm text-gray-600">Manage equipment maintenance and reliability</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Robotics Engineer</Badge>
                        <p className="text-sm text-gray-600">Design and develop robotic systems</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/education/degree/btech-in-mechanical"
                        className="text-green-600 hover:underline flex items-center"
                      >
                        View detailed program <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Postgraduate Technical Degrees</h2>

          <div>
            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Brain className="h-6 w-6 text-green-600" />
                  M.Tech in Artificial Intelligence and Machine Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      This program offers advanced knowledge of AI and ML technologies and their applications across
                      industries. It's ideal for students aiming to specialize in smart systems, deep learning, and
                      automation.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Subjects</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li>Deep Learning</li>
                      <li>Natural Language Processing</li>
                      <li>Reinforcement Learning</li>
                      <li>AI in Robotics</li>
                      <li>Big Data and AI</li>
                      <li>Neural Networks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Opportunities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">AI Engineer</Badge>
                        <p className="text-sm text-gray-600">Design and implement AI solutions</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">ML Researcher</Badge>
                        <p className="text-sm text-gray-600">Develop new machine learning algorithms</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Data Scientist</Badge>
                        <p className="text-sm text-gray-600">Extract insights from complex datasets</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">NLP Specialist</Badge>
                        <p className="text-sm text-gray-600">Work on language processing applications</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">AI Product Manager</Badge>
                        <p className="text-sm text-gray-600">Oversee development of AI-powered products</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="/education/degree/mtech-in-ai-ml"
                        className="text-green-600 hover:underline flex items-center"
                      >
                        View detailed program <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Robot className="h-6 w-6 text-green-600" />
                  M.Tech in Robotics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      M.Tech in Robotics focuses on designing, building, and operating robots. It integrates mechanical
                      engineering, electronics, and computer science to build intelligent automation systems.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Subjects</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li>Robotic Kinematics</li>
                      <li>Mechatronics</li>
                      <li>Industrial Automation</li>
                      <li>AI in Robotics</li>
                      <li>Embedded Systems</li>
                      <li>Human-Robot Interaction</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Opportunities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Robotics Engineer</Badge>
                        <p className="text-sm text-gray-600">Design and develop robotic systems</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Automation Specialist</Badge>
                        <p className="text-sm text-gray-600">Implement automated solutions for industry</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Research Scientist</Badge>
                        <p className="text-sm text-gray-600">Advance robotics technology through research</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Industrial Automation Engineer</Badge>
                        <p className="text-sm text-gray-600">Design automated manufacturing systems</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Control Systems Engineer</Badge>
                        <p className="text-sm text-gray-600">Develop systems that control robotic behavior</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Database className="h-6 w-6 text-green-600" />
                  M.Tech in Data Science
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      This program teaches techniques to extract insights from structured and unstructured data.
                      Students learn advanced statistics, data mining, predictive analytics, and machine learning.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Core Subjects</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                      <li>Statistical Data Analysis</li>
                      <li>Machine Learning Models</li>
                      <li>Data Mining and Visualization</li>
                      <li>Big Data Technologies</li>
                      <li>Cloud-based Data Systems</li>
                      <li>Predictive Modeling</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Opportunities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Data Scientist</Badge>
                        <p className="text-sm text-gray-600">Analyze complex data to extract insights</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Analytics Manager</Badge>
                        <p className="text-sm text-gray-600">Lead teams in data-driven decision making</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Research Scientist</Badge>
                        <p className="text-sm text-gray-600">Develop new data analysis methods</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Data Engineer</Badge>
                        <p className="text-sm text-gray-600">Build data pipelines and infrastructure</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <Badge className="bg-green-100 text-green-800 mb-2">Business Intelligence Analyst</Badge>
                        <p className="text-sm text-gray-600">Create dashboards and reports for business insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
