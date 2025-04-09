import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Briefcase, GraduationCap, LineChart, TrendingUp, Clock } from "lucide-react"
import Image from "next/image"

export default function DataScientistPage() {
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
            <h1 className="text-3xl font-bold text-black-900">Data Scientist Career Path</h1>
            <p className="text-lg text-black-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to building a successful career as a Data Scientist
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
                Data Scientists analyze complex datasets to extract insights, build predictive models, and drive
                data-informed business decisions. They combine expertise in statistics, programming, and domain
                knowledge to solve complex problems and create value from data.
              </p>
              <p className="text-black-700">
                As organizations increasingly rely on data to drive strategy and operations, Data Scientists have become
                essential across industries, from tech and finance to healthcare and retail. The role offers excellent
                compensation, intellectual challenges, and significant impact on business outcomes.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Data Scientist"
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
                        Computer Science, Statistics, Mathematics, Engineering, or related field
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Master's/PhD (Preferred)</p>
                      <p className="text-sm text-black-600">
                        Data Science, Machine Learning, Statistics, Computer Science, or related field
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Certifications</p>
                      <p className="text-sm text-black-600">
                        IBM Data Science, Google Data Analytics, Microsoft Azure Data Scientist, AWS Machine Learning
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
                        Python/R, SQL, Machine Learning, Statistical Analysis, Data Visualization (Tableau/PowerBI), Big
                        Data technologies (Hadoop, Spark)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Soft Skills</p>
                      <p className="text-sm text-black-600">
                        Problem-solving, Critical thinking, Communication, Storytelling with data, Business acumen
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Domain Knowledge</p>
                      <p className="text-sm text-black-600">
                        Understanding of the specific industry (finance, healthcare, retail, etc.) is highly valuable
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
                      <p className="font-medium">Entry Level (0-2 years)</p>
                      <p className="text-sm text-black-600">₹6-15 lakhs per annum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Mid Level (3-5 years)</p>
                      <p className="text-sm text-black-600">₹15-30 lakhs per annum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Senior Level (6+ years)</p>
                      <p className="text-sm text-black-600">₹30-60+ lakhs per annum</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <div>
                      <p className="font-medium">Lead/Director Level</p>
                      <p className="text-sm text-black-600">₹60 lakhs - 1.5+ crores per annum</p>
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
                    <CardTitle>Junior Data Scientist / Data Analyst (0-2 years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Entry-level position focused on data cleaning, basic analysis, and assisting with model
                      development.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Responsibilities:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Data cleaning and preprocessing</li>
                          <li>Basic exploratory data analysis</li>
                          <li>Creating data visualizations</li>
                          <li>Implementing simple machine learning models</li>
                          <li>Documenting findings and methodologies</li>
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
                    <CardTitle>Data Scientist (2-5 years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Mid-level position with increased autonomy in model development and project ownership.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Responsibilities:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Developing and deploying machine learning models</li>
                          <li>Feature engineering and selection</li>
                          <li>Conducting advanced statistical analysis</li>
                          <li>Translating business problems into data questions</li>
                          <li>Presenting findings to stakeholders</li>
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
                    <CardTitle>Senior Data Scientist (5-8 years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Senior role with leadership responsibilities and strategic input on data initiatives.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Responsibilities:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Leading complex data science projects</li>
                          <li>Developing advanced machine learning solutions</li>
                          <li>Mentoring junior data scientists</li>
                          <li>Collaborating with cross-functional teams</li>
                          <li>Influencing product and business strategy</li>
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
                    <CardTitle>Lead Data Scientist / Data Science Manager (8+ years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Leadership role managing teams and driving data strategy across the organization.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Responsibilities:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Managing data science teams</li>
                          <li>Setting technical direction and standards</li>
                          <li>Aligning data science initiatives with business goals</li>
                          <li>Building data science capabilities and infrastructure</li>
                          <li>Communicating with executive leadership</li>
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
                    <CardTitle>Director of Data Science / Chief Data Scientist (10+ years)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-black-700 mb-3">
                      Executive role shaping data strategy and innovation at the organizational level.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-medium text-sm">Key Responsibilities:</p>
                        <ul className="list-disc list-inside text-sm text-black-600">
                          <li>Developing organization-wide data strategy</li>
                          <li>Building and leading large data science organizations</li>
                          <li>Driving innovation and research initiatives</li>
                          <li>Representing data science at the executive level</li>
                          <li>Establishing partnerships and external collaborations</li>
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
                      <span className="text-sm">Google (Alphabet) - ₹25-80 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Microsoft - ₹20-70 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Amazon - ₹18-65 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Meta (Facebook) - ₹25-80 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Apple - ₹20-75 lakhs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Analytics Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Mu Sigma - ₹12-40 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Fractal Analytics - ₹15-45 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Tiger Analytics - ₹14-42 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Absolutdata - ₹12-38 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">LatentView Analytics - ₹13-40 lakhs</span>
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
                      <span className="text-sm">IBM - ₹15-50 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Accenture - ₹12-45 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Flipkart - ₹18-60 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">Walmart Global Tech - ₹16-55 lakhs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <span className="text-sm">American Express - ₹15-50 lakhs</span>
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
                        <p className="font-medium">AutoML & MLOps</p>
                        <p className="text-sm text-black-600">
                          Increasing adoption of automated machine learning tools and operationalization of ML models
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Generative AI</p>
                        <p className="text-sm text-black-600">
                          Growing focus on large language models and generative AI applications across industries
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Responsible AI</p>
                        <p className="text-sm text-black-600">
                          Increased emphasis on ethical AI, fairness, transparency, and explainability in models
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
                          Projected 28% growth in data science roles over the next decade, significantly faster than
                          average
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Specialization</p>
                        <p className="text-sm text-black-600">
                          Increasing demand for specialized data scientists in domains like healthcare, finance, and
                          climate science
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                      <div>
                        <p className="font-medium">Democratization of AI</p>
                        <p className="text-sm text-black-600">
                          Evolution of the role as AI tools become more accessible, with greater focus on strategic
                          implementation
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
          <h2 className="text-3xl font-bold text-black-900 mb-4">Ready to Become a Data Scientist?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-black-700">
            Get personalized guidance on education, skill development, and career planning to launch your data science
            career.
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
