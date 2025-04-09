import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Code, Cpu } from "lucide-react"

export default function CareerPathwaysPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Career Pathways</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Detailed career progression paths for various technical degrees
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Code className="h-6 w-6 text-green-600" />
                  B.Tech in Computer Science Engineering (CSE)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      B.Tech in CSE is a comprehensive program covering the theoretical and practical foundations of
                      computation, programming, data systems, networks, and emerging fields like AI, blockchain, and
                      cybersecurity. It's the gateway to top-paying roles in the tech industry.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Scope</h3>
                    <p className="text-gray-700 mb-4">
                      CSE graduates work in web development, app development, cloud, cybersecurity, data science, AI/ML,
                      and product management. It's a dynamic field with contin cloud, cybersecurity, data science,
                      AI/ML, and product management. It's a dynamic field with continual innovation and global job
                      opportunities.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Skills to Master</h3>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Core Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Programming (Java, Python, C++)</Badge>
                        <Badge variant="outline">Data Structures & Algorithms</Badge>
                        <Badge variant="outline">DBMS, Operating Systems</Badge>
                        <Badge variant="outline">Computer Networks, OOP</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Advanced Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Web Dev: HTML, CSS, React, Node.js</Badge>
                        <Badge variant="outline">Data Science: Pandas, Scikit-learn</Badge>
                        <Badge variant="outline">AI/ML: TensorFlow, PyTorch</Badge>
                        <Badge variant="outline">Cloud: AWS, Azure, GCP</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Key Career Roles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Software Developer/Engineer</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Designs, develops, and maintains software applications. Works with front-end, back-end, or
                          full-stack technologies.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹6–12 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$80k–$120k</Badge>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Data Scientist</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Analyzes large datasets to derive actionable insights. Uses ML models and data visualization
                          techniques.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹10–25 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$100k–$150k</Badge>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">AI/ML Engineer</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Builds intelligent systems that learn from data. Works on neural networks, NLP, and deep
                          learning.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹12–30 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$110k–$160k</Badge>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Cybersecurity Analyst</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Protects networks and systems from breaches and cyber threats. Conducts penetration testing
                          and risk assessments.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹8–20 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$90k–$140k</Badge>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tools & Technologies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Frontend:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">React</Badge>
                          <Badge variant="outline">Angular</Badge>
                          <Badge variant="outline">Vue.js</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Backend:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Node.js</Badge>
                          <Badge variant="outline">Django</Badge>
                          <Badge variant="outline">Spring Boot</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Database:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">MySQL</Badge>
                          <Badge variant="outline">MongoDB</Badge>
                          <Badge variant="outline">PostgreSQL</Badge>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">DevOps:</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Jenkins</Badge>
                          <Badge variant="outline">Docker</Badge>
                          <Badge variant="outline">Kubernetes</Badge>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Top Recruiters</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Google</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Microsoft</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Amazon</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Adobe</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Infosys</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">TCS</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Cpu className="h-6 w-6 text-green-600" />
                  B.Tech in Electronics and Communication Engineering (ECE)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Overview</h3>
                    <p className="text-gray-700 mb-4">
                      ECE combines electronics, digital systems, communication networks, and embedded systems. It
                      provides the technical foundation to work in sectors like telecommunications, IoT, VLSI design,
                      and robotics.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Career Scope</h3>
                    <p className="text-gray-700 mb-4">
                      Graduates can enter electronics hardware design, chip manufacturing, communication systems, IoT
                      development, embedded software, and automation.
                    </p>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Skills to Master</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                      <li>Digital & Analog Electronics</li>
                      <li>Embedded C, RTOS, Microcontrollers</li>
                      <li>IoT protocols (MQTT, BLE, Zigbee)</li>
                      <li>Signal Processing & Communication Systems</li>
                      <li>HDL Programming (Verilog, VHDL)</li>
                    </ul>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Tools & Technologies</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>MATLAB, Simulink</li>
                      <li>Keil, STM32CubeIDE</li>
                      <li>Raspberry Pi, Arduino</li>
                      <li>Multisim, Proteus, OrCAD</li>
                      <li>Xilinx, Cadence, Synopsys</li>
                    </ul>
                  </div>

                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Key Career Roles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Electronics Engineer</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Designs and tests electronic equipment and circuits used in devices.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹5–9 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$60k–$90k</Badge>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Embedded Systems Developer</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Programs microcontrollers and builds embedded solutions for appliances, automobiles, and
                          robotics.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹6–12 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$70k–$110k</Badge>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">IoT Developer</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Creates internet-connected smart devices using sensors, cloud, and wireless communication.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹8–15 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$80k–$120k</Badge>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">VLSI/Chip Design Engineer</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Works on integrated circuit (IC) design, layout, and fabrication using HDL tools.
                        </p>
                        <div className="flex flex-wrap gap-1">
                          <Badge className="bg-green-100 text-green-800">₹10–20 LPA</Badge>
                          <Badge className="bg-blue-100 text-blue-800">$90k–$130k</Badge>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1">Embedded Systems</h4>
                        <p className="text-sm text-gray-600">NPTEL / Udemy / Coursera</p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1">IoT Fundamentals</h4>
                        <p className="text-sm text-gray-600">Cisco</p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1">VLSI Design</h4>
                        <p className="text-sm text-gray-600">IIT Courses / edX</p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-1">MATLAB Programming</h4>
                        <p className="text-sm text-gray-600">MathWorks</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-4">Top Recruiters</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Texas Instruments</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Qualcomm</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Intel</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Samsung R&D</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">DRDO</div>
                      <div className="bg-gray-50 p-3 rounded-lg text-center">Bosch</div>
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
