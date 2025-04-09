import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Code, Database, BotIcon as Robot, Cpu, ComponentIcon as ChipIcon, Server } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TechnicalDegrees() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">Technical Degrees</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="hover:shadow-lg transition-duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-green-600" />
              B.Tech in Computer Science
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              A solid foundation in computing principles, programming, software development, data structures,
              algorithms, databases, computer networks, and emerging technologies.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Core Subjects:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Data Structures</Badge>
                  <Badge variant="outline">Algorithms</Badge>
                  <Badge variant="outline">Operating Systems</Badge>
                  <Badge variant="outline">Databases</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Software Developer
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Data Scientist
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    System Architect
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0 text-green-600">
              <Link href="/education/degree/btech-in-computer-science" className="flex items-center">
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-green-600" />
              B.Tech in Electronics and Communication
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Focuses on the design, development, and testing of electronic equipment and communication systems,
              including circuits, signal processing, embedded systems, and wireless communication.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Core Subjects:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Electronic Circuits</Badge>
                  <Badge variant="outline">Signal Processing</Badge>
                  <Badge variant="outline">Microcontrollers</Badge>
                  <Badge variant="outline">IoT</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Electronics Engineer
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    IoT Developer
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Hardware Designer
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0 text-green-600">
              <Link href="/education/degree/btech-in-electronics" className="flex items-center">
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ChipIcon className="h-5 w-5 text-green-600" />
              B.Tech in Mechanical Engineering
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Deals with the design, development, manufacturing, and maintenance of mechanical systems, combining
              principles of physics and materials science.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Core Subjects:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Thermodynamics</Badge>
                  <Badge variant="outline">Machine Design</Badge>
                  <Badge variant="outline">Fluid Mechanics</Badge>
                  <Badge variant="outline">Robotics</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Mechanical Engineer
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    CAD Designer
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Manufacturing Engineer
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0 text-green-600">
              <Link href="/education/degree/btech-in-mechanical" className="flex items-center">
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-green-600" />
              M.Tech in AI & Machine Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Advanced knowledge of AI and ML technologies and their applications across industries, specializing in
              smart systems, deep learning, and automation.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Core Subjects:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Deep Learning</Badge>
                  <Badge variant="outline">NLP</Badge>
                  <Badge variant="outline">Neural Networks</Badge>
                  <Badge variant="outline">Big Data</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    AI Engineer
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    ML Researcher
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Data Scientist
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0 text-green-600">
              <Link href="/education/degree/mtech-in-ai-ml" className="flex items-center">
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Robot className="h-5 w-5 text-green-600" />
              M.Tech in Robotics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Focuses on designing, building, and operating robots. It integrates mechanical engineering, electronics,
              and computer science to build intelligent automation systems.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Core Subjects:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Robotic Kinematics</Badge>
                  <Badge variant="outline">Mechatronics</Badge>
                  <Badge variant="outline">AI in Robotics</Badge>
                  <Badge variant="outline">Human-Robot Interaction</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Robotics Engineer
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Automation Specialist
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Research Scientist
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0 text-green-600">
              <Link href="/education/degree/mtech-in-robotics" className="flex items-center">
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-green-600" />
              M.Tech in Data Science
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Teaches techniques to extract insights from structured and unstructured data. Students learn advanced
              statistics, data mining, predictive analytics, and machine learning.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Core Subjects:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Statistical Analysis</Badge>
                  <Badge variant="outline">Machine Learning</Badge>
                  <Badge variant="outline">Data Visualization</Badge>
                  <Badge variant="outline">Big Data Technologies</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-sm text-gray-500 mb-2">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Data Scientist
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Analytics Manager
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Data Engineer
                  </Badge>
                </div>
              </div>
            </div>
            <Button variant="link" className="mt-4 p-0 text-green-600">
              <Link href="/education/degree/mtech-in-data-science" className="flex items-center">
                View Details
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
