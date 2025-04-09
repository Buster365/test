import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Briefcase, BookOpen, Pen, Award } from "lucide-react"
import Image from "next/image"

export default function After12thArtsPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">After 12th Arts/Humanities</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to career options after completing 12th with Arts/Humanities stream
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
                The Arts/Humanities stream focuses on the study of human society, culture, literature, and creative
                expression. It offers a diverse range of subjects that explore different aspects of human experience and
                social structures.
              </p>
              <p className="text-gray-700 mb-4">
                This stream is ideal for students with strong verbal and written communication skills, an interest in
                social issues, creative thinking abilities, and a passion for understanding human behavior and cultural
                expressions.
              </p>
              <p className="text-gray-700">
                Contrary to common misconceptions, the Arts/Humanities stream opens doors to numerous rewarding career
                paths including civil services, law, journalism, international relations, and various creative
                professions.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Arts Education"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Arts and Humanities Education</h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Core Subjects</h3>
            <h4 className="font-medium text-gray-800 mb-4">Subject Combinations</h4>
            <p className="text-gray-700 mb-4">
              The Arts/Humanities stream offers flexibility in subject selection. Students typically study 5-6 subjects,
              including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Compulsory Subjects</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>English, and sometimes a second language (Hindi, Sanskrit, or regional languages)</li>
                </ul>

                <h4 className="font-medium text-gray-800 mt-4 mb-2">Core Humanities Subjects</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>History, Political Science, Geography, Sociology, Psychology, Economics, Philosophy</li>
                </ul>

                <h4 className="font-medium text-gray-800 mt-4 mb-2">Optional Subjects</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    Fine Arts, Performing Arts, Home Science, Physical Education, Legal Studies, Mass Media Studies
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">Popular Subject Combinations</h4>

                <p className="font-medium text-gray-800 mt-3 mb-1">For Civil Services Preparation</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>History</li>
                  <li>Political Science</li>
                  <li>Geography</li>
                  <li>Economics</li>
                </ul>

                <p className="font-medium text-gray-800 mt-3 mb-1">For Law</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>Political Science</li>
                  <li>History</li>
                  <li>Sociology</li>
                  <li>Legal Studies</li>
                </ul>

                <p className="font-medium text-gray-800 mt-3 mb-1">For Media & Journalism</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>Mass Media Studies</li>
                  <li>Psychology</li>
                  <li>Political Science</li>
                  <li>Sociology</li>
                </ul>

                <p className="font-medium text-gray-800 mt-3 mb-1">For Psychology</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-2">
                  <li>Psychology</li>
                  <li>Sociology</li>
                  <li>Philosophy</li>
                  <li>Biology (if available)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Civil Services & Administration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>IAS (Indian Administrative Service)</li>
                  <li>IFS (Indian Foreign Service)</li>
                  <li>IPS (Indian Police Service)</li>
                  <li>State Civil Services</li>
                  <li>Public Administration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Law & Legal Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Lawyer/Advocate</li>
                  <li>Legal Consultant</li>
                  <li>Judge (after required experience)</li>
                  <li>Legal Researcher</li>
                  <li>Corporate Law</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Pen className="h-5 w-5 text-green-600" />
                  Media & Communication
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Journalist</li>
                  <li>Content Writer</li>
                  <li>Public Relations Specialist</li>
                  <li>Digital Media Manager</li>
                  <li>Film & Documentary Maker</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Education & Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Teacher/Professor</li>
                  <li>Educational Counselor</li>
                  <li>Researcher</li>
                  <li>Curriculum Developer</li>
                  <li>Educational Administrator</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Social Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Social Worker</li>
                  <li>NGO Management</li>
                  <li>Counselor/Therapist</li>
                  <li>Community Development Officer</li>
                  <li>Rehabilitation Specialist</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Fields</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Writer/Author</li>
              <li>Performing Artist</li>
              <li>Fine Artist</li>
              <li>Curator</li>
              <li>Art Director</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Higher Education Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Undergraduate Courses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BA (Bachelor of Arts)</p>
                      <p className="text-sm text-gray-600">
                        General or honors degree in subjects like History, Political Science, Economics, Sociology,
                        Psychology, etc.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BFA (Bachelor of Fine Arts)</p>
                      <p className="text-sm text-gray-600">Specialized degree in visual or performing arts.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BPA (Bachelor of Performing Arts)</p>
                      <p className="text-sm text-gray-600">Focused on dance, music, theater, etc.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BMM (Bachelor of Mass Media)</p>
                      <p className="text-sm text-gray-600">For careers in journalism, advertising, and media.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Professional Courses</p>
                      <p className="text-sm text-gray-600">LLB (Law), BEd (Education), BSW (Social Work), etc.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Postgraduate & Professional Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">MA (Master of Arts)</p>
                      <p className="text-sm text-gray-600">Advanced study in humanities subjects.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">MSW (Master of Social Work)</p>
                      <p className="text-sm text-gray-600">For advanced careers in social services.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">LLM (Master of Laws)</p>
                      <p className="text-sm text-gray-600">Specialized legal education after LLB.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">MBA (Master of Business Administration)</p>
                      <p className="text-sm text-gray-600">With specializations in HR, Marketing, etc.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">PhD Programs</p>
                      <p className="text-sm text-gray-600">For academic and research careers.</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Detailed Career Path Exploration</h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Civil Services Career Path</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Educational Journey</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Bachelor's degree in any discipline (preferably Arts subjects)</li>
                    <li>Optional: Master's degree in relevant subject</li>
                    <li>UPSC CSE preparation (1-3 years)</li>
                    <li>UPSC CSE: Prelims, Mains, Interview</li>
                    <li>Training at LBSNAA (for IAS) or service-specific academies</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Career Progression</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Probationary Officer/Assistant Secretary</li>
                    <li>Under Secretary/Deputy Collector (3-5 years)</li>
                    <li>Deputy Secretary/Additional Collector (5-9 years)</li>
                    <li>Joint Secretary/District Collector (9-16 years)</li>
                    <li>Additional Secretary/Divisional Commissioner (16-25 years)</li>
                    <li>Secretary/Chief Secretary (25+ years)</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2">Salary Structure</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Entry-level: ₹56,100 - ₹77,500 per month (Level 10-11)</li>
                  <li>Mid-level: ₹78,800 - ₹1,18,500 per month (Level 12-13)</li>
                  <li>Senior-level: ₹1,44,200 - ₹2,24,400 per month (Level 14-15)</li>
                  <li>Top-level: ₹2,25,000+ per month (Level 16-18)</li>
                  <li>Additional perks: Housing, vehicle, staff, medical benefits, etc.</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Media & Journalism Career Path</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Educational Journey</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Bachelor's in Journalism/Mass Communication (3 years)</li>
                    <li>Optional: Master's in specialized area (2 years)</li>
                    <li>Internships at media houses</li>
                    <li>Professional certifications in digital media, video production, etc.</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Career Progression</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Intern/Trainee (0-1 year)</li>
                    <li>Reporter/Content Creator (1-3 years)</li>
                    <li>Senior Reporter/Editor (3-6 years)</li>
                    <li>Assistant Editor/Producer (6-10 years)</li>
                    <li>Editor/Bureau Chief/Executive Producer (10+ years)</li>
                    <li>Editorial Director/Editor-in-Chief (15+ years)</li>
                  </ol>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2">Salary Progression</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Entry-level: ₹3-6 lakhs per annum</li>
                  <li>Mid-level: ₹6-15 lakhs per annum</li>
                  <li>Senior-level: ₹15-30 lakhs per annum</li>
                  <li>Top positions: ₹30-80+ lakhs per annum</li>
                  <li>Freelancers/Content Creators: Variable based on platform, audience, and monetization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert advice on choosing the right career path after 12th Arts based on your interests, aptitude, and
            goals.
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-green-700">
            <Link href="/contact">Contact Our Counselors</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
