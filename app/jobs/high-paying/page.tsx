import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Briefcase, LineChart, Code, Globe, Cloud, Brain } from "lucide-react"
import { fetchJobData } from "@/lib/data"

export default async function HighPayingJobsPage() {
  const allJobs = await fetchJobData()

  // Sort jobs by salary (descending) and take top 12
  const highPayingJobs = [...allJobs]
    .sort((a, b) => {
      // Extract the maximum salary value from the range
      const getMaxSalary = (salaryRange: string) => {
        const matches = salaryRange.match(/\d+/g)
        if (!matches || matches.length === 0) return 0
        return Number.parseInt(matches[matches.length - 1], 10)
      }

      const maxSalaryA = getMaxSalary(a["Average Salary (₹ LPA)"])
      const maxSalaryB = getMaxSalary(b["Average Salary (₹ LPA)"])

      return maxSalaryB - maxSalaryA
    })
    .slice(0, 12)

  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/jobs" className="text-green-600 hover:underline">
              ← Back to Jobs
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">High-Paying Career Paths</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore careers with excellent compensation and growth potential
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highPayingJobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{job["Job Role"]}</CardTitle>
                  <Badge variant="outline" className="w-fit bg-green-50 text-green-800">
                    {job["Average Salary (₹ LPA)"]}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">Required Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {job["Required Skills"]
                        .split(",")
                        .slice(0, 3)
                        .map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill.trim()}
                          </Badge>
                        ))}
                      {job["Required Skills"].split(",").length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{job["Required Skills"].split(",").length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Button variant="link" className="p-0 text-green-600">
                    <Link href={`/jobs/${encodeURIComponent(job["Job Role"])}`} className="flex items-center">
                      View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Skill Development for High-Paying Jobs
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Skill Development Matters</h3>
              <p className="text-gray-700 mb-4">
                In today's job market, just having a degree is not enough. Companies look for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Practical skills</li>
                <li>Hands-on project experience</li>
                <li>Soft skills</li>
                <li>Certifications & real-world tools</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-green-600" />
                    Programming & DSA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-800 mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">Cracking coding interviews at Google, Microsoft, Amazon.</p>

                  <p className="font-medium text-gray-800 mb-2">Languages to Learn:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">C++</Badge>
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                  </div>

                  <p className="font-medium text-gray-800 mb-2">Resources:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>LeetCode – DSA problems with difficulty levels</li>
                    <li>GeeksforGeeks – Theory + code</li>
                    <li>Codeforces – Competitive programming</li>
                    <li>NeetCode – Roadmap-based prep</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-800 mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">
                    For roles in front-end, full-stack, backend in product-based MNCs.
                  </p>

                  <p className="font-medium text-gray-800 mb-2">Tech Stack (MERN Example):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Frontend: HTML, CSS, JavaScript, React.js</li>
                    <li>Backend: Node.js, Express.js</li>
                    <li>Database: MongoDB</li>
                  </ul>

                  <p className="font-medium text-gray-800 mb-2">Projects to Build:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>To-do app</li>
                    <li>E-commerce site</li>
                    <li>Portfolio website with blog</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-green-600" />
                    DevOps & Cloud
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-800 mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">
                    For infrastructure management roles in top cloud service companies.
                  </p>

                  <p className="font-medium text-gray-800 mb-2">Skills:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Linux basics, Shell scripting</li>
                    <li>Docker, Kubernetes, Jenkins</li>
                    <li>AWS, GCP, or Azure</li>
                  </ul>

                  <p className="font-medium text-gray-800 mb-2">Certifications:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>AWS Cloud Practitioner</li>
                    <li>Microsoft Azure Fundamentals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-green-600" />
                    AI, Data Science & ML
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-gray-800 mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">
                    High-paying roles in companies like Google AI, Meta, Nvidia, etc.
                  </p>

                  <p className="font-medium text-gray-800 mb-2">Skills:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                    <li>Python, Pandas, NumPy</li>
                    <li>Scikit-learn, TensorFlow</li>
                    <li>Data Visualization: Matplotlib, Seaborn</li>
                    <li>SQL</li>
                  </ul>

                  <p className="font-medium text-gray-800 mb-2">Projects to Build:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Spam classifier</li>
                    <li>Stock price predictor</li>
                    <li>Customer segmentation (KMeans)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <LineChart className="h-6 w-6 text-green-600" />
            Factors Affecting Salary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Experience Level
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Salary typically increases with years of experience. Entry-level positions offer lower compensation
                  compared to mid-level and senior roles.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Entry-level: 0-2 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Mid-level: 3-5 years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Senior: 6+ years</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Skills & Specialization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  In-demand and specialized skills command higher salaries. Continuous upskilling is essential for
                  career growth and better compensation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Technical skills (AI/ML, Cloud, Cybersecurity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Domain expertise (Finance, Healthcare, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Leadership & management skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Location & Company
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Salaries vary significantly based on location and company size. Metropolitan cities and multinational
                  corporations typically offer higher compensation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Tier 1 cities vs. Tier 2/3 cities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Startups vs. established companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Indian vs. multinational companies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
