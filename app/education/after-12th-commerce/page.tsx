import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Briefcase, Calculator, TrendingUp, Award, Building } from "lucide-react"
import Image from "next/image"

export default function After12thCommercePage() {
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
            <h1 className="text-3xl font-bold text-gray-900">After 12th Commerce</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore education and career options after completing 12th in the Commerce stream
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
                The Commerce stream opens pathways into the dynamic world of business, finance, law, and management. It
                equips students with analytical thinking, financial literacy, and a strategic mindset—skills essential
                for today's corporate and economic sectors.
              </p>
              <p className="text-gray-700">
                Ideal for students who are interested in numbers, economics, business, law, and entrepreneurial
                ventures, Commerce offers both academic and professional growth.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Commerce Education"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Commerce Education Overview</h3>
            <h4 className="font-medium text-gray-800 mb-2">Core Subjects</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Accountancy</li>
              <li>Business Studies</li>
              <li>Economics</li>
              <li>Mathematics / Informatics Practices</li>
              <li>English</li>
              <li>Optional: Entrepreneurship, Legal Studies, Physical Education</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6">🎯 Popular Subject Combinations</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  For Chartered Accountancy / Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Accountancy</li>
                  <li>Economics</li>
                  <li>Mathematics</li>
                  <li>Business Studies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  For Management & Business
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Business Studies</li>
                  <li>Entrepreneurship</li>
                  <li>Economics</li>
                  <li>English</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  For Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Legal Studies</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Political Science</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  For Economics / Statistics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Mathematics</li>
                  <li>Economics</li>
                  <li>Accountancy</li>
                  <li>English</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">🎓 Higher Education Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Undergraduate Degrees
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">B.Com (Bachelor of Commerce)</p>
                      <p className="text-sm text-gray-600">
                        General or honors in subjects like Accountancy, Economics, Taxation, etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BBA / BMS</p>
                      <p className="text-sm text-gray-600">
                        Professional degrees focused on management, entrepreneurship, and marketing.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BA Economics / Statistics / Business Economics</p>
                      <p className="text-sm text-gray-600">For students inclined toward analytics and policy-making.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">B.Com LLB / Integrated Law Courses</p>
                      <p className="text-sm text-gray-600">
                        Five-year programs combining commerce and legal education.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BCA (Bachelor of Computer Applications)</p>
                      <p className="text-sm text-gray-600">If taken with Mathematics, opens paths in tech and IT.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Professional Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>CA (Chartered Accountancy)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>CS (Company Secretary)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>CMA (Cost and Management Accounting)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>CFA (Chartered Financial Analyst)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>CPA (Certified Public Accountant)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Digital Marketing / Financial Modeling Certifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Postgraduate & Specializations</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>M.Com (Master of Commerce)</li>
              <li>
                MBA (Master of Business Administration) with specializations like Finance, Marketing, HR, International
                Business
              </li>
              <li>MA Economics / MA Statistics</li>
              <li>LLM (if pursuing law)</li>
              <li>PhD / UGC NET for research and academic careers</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">💼 Career Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-green-600" />
                  Accounting & Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Chartered Accountant</li>
                  <li>Investment Banker</li>
                  <li>Financial Analyst</li>
                  <li>Auditor</li>
                  <li>Cost Accountant</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Business & Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Business Analyst</li>
                  <li>Marketing Manager</li>
                  <li>HR Manager</li>
                  <li>Operations Manager</li>
                  <li>Entrepreneur / Startup Founder</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Law & Legal Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Lawyer</li>
                  <li>Legal Advisor</li>
                  <li>Corporate Lawyer</li>
                  <li>Compliance Officer</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Government & Civil Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>UPSC (IAS, IFS, etc.)</li>
                  <li>SSC, Banking (PO, Clerk)</li>
                  <li>State Services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Economics & Data Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Economist</li>
                  <li>Statistician</li>
                  <li>Policy Analyst</li>
                  <li>Data Analyst</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Vocational & Certification Options</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Digital Marketing</li>
              <li>Tally / GST Certifications</li>
              <li>Stock Market / Investment Analysis</li>
              <li>Event Management</li>
              <li>E-Commerce & Dropshipping</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert advice on choosing the right career path after 12th Commerce based on your interests, aptitude,
            and goals.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
