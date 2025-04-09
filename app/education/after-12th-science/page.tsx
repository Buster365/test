import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { GraduationCap, Briefcase, BookOpen, Award, Search, Code, Building } from "lucide-react"
import Image from "next/image"

export default function After12thSciencePage() {
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
            <h1 className="text-3xl font-bold text-gray-900">After 12th Science (PCM/PCB)</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore academic and career options after choosing Science in Class 12
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
                The Science stream builds a strong foundation for careers in engineering, medicine, research, data
                science, environmental studies, and more.
              </p>
              <p className="text-gray-700">
                This stream is ideal for students with analytical thinking, curiosity, a strong grasp of math and
                science concepts, and a desire to explore innovations or contribute to scientific development.
              </p>
              <p className="text-gray-700 mt-4">
                Depending on your subject combination — PCM (Physics, Chemistry, Math) or PCB (Physics, Chemistry,
                Biology) — you can pursue various specialized fields in higher education and professional careers.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Science Education"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Science Education</h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Core Subjects</h3>
            <p className="text-gray-700 mb-4">Students generally study 5–6 subjects, including:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Compulsory Subjects</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>English</li>
                  <li>Physics</li>
                  <li>Chemistry</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-800 mb-2">PCM (Maths Group)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Mathematics</li>
                  <li>Computer Science / Physical Education / Engineering Graphics (optional)</li>
                </ul>

                <h4 className="font-medium text-gray-800 mt-4 mb-2">PCB (Biology Group)</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Biology</li>
                  <li>Psychology / Home Science / Biotechnology / Physical Education (optional)</li>
                </ul>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Subject Combinations</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  For Engineering & Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Mathematics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  For Medical & Life Sciences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  For Data Science & Research
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Physics</li>
                  <li>Mathematics</li>
                  <li>Computer Science</li>
                </ul>
              </CardContent>
            </Card>
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
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Engineering & Technology (PCM)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>B.Tech / B.E. (Mechanical, CSE, Civil, etc.)</li>
                      <li>B.Arch (Architecture)</li>
                      <li>B.Plan (Planning)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Medical & Life Sciences (PCB)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>MBBS, BDS (Dental), BAMS (Ayurveda), BHMS (Homeopathy)</li>
                      <li>B.Sc. (Biology, Biotechnology, Zoology, Botany, etc.)</li>
                      <li>B.Sc. Nursing, BPT (Physiotherapy), B.Pharm</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Other Courses (PCM / PCB)</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>B.Sc. in Physics / Chemistry / Maths</li>
                      <li>BCA (Bachelor of Computer Applications)</li>
                      <li>Integrated B.Sc.-M.Sc. programs</li>
                      <li>B.Sc. Agriculture, Forestry, Environmental Science</li>
                      <li>B.Stat / B.Math (ISI, CMI, etc.)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-600" />
                  Entrance Exams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">JEE Main / JEE Advanced</p>
                      <p className="text-sm text-gray-600">For Engineering programs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">NEET UG</p>
                      <p className="text-sm text-gray-600">For Medical, Dental, AYUSH courses</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">BITSAT, VITEEE, SRMJEEE</p>
                      <p className="text-sm text-gray-600">For Private Engineering Colleges</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">CUET (Science streams)</p>
                      <p className="text-sm text-gray-600">For Central Universities</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">ICAR AIEEA</p>
                      <p className="text-sm text-gray-600">For Agriculture & Allied Sciences</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Career Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Engineering & Technology
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Software Developer</li>
                  <li>Mechanical / Civil Engineer</li>
                  <li>Data Analyst</li>
                  <li>Robotics Engineer</li>
                  <li>AI/ML Engineer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Medicine & Healthcare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Doctor / Surgeon / Dentist</li>
                  <li>Physiotherapist</li>
                  <li>Pharmacist</li>
                  <li>Medical Lab Technician</li>
                  <li>Veterinary Doctor</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-green-600" />
                  Research & Pure Sciences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Research Scientist</li>
                  <li>Lab Technician</li>
                  <li>Environmental Scientist</li>
                  <li>Physicist / Chemist / Biologist</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-green-600" />
                  Computer & IT
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Web Developer</li>
                  <li>Cybersecurity Analyst</li>
                  <li>UI/UX Designer</li>
                  <li>Game Developer</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-green-600" />
                  Government & Public Sector
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>ISRO / DRDO Scientist</li>
                  <li>UPSC Civil Services (with graduation)</li>
                  <li>SSC / Defence (NDA, CDS)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Courses</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>MBBS, BDS, BAMS, BHMS</li>
                <li>B.Tech / B.E.</li>
                <li>B.Sc. Nursing, B.Pharm</li>
                <li>BCA</li>
                <li>B.Sc. (Hons.) in various disciplines</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Postgraduate & Beyond</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>M.Tech / M.E.</li>
                <li>M.Sc. / Integrated PhD</li>
                <li>MD / MS (Post MBBS)</li>
                <li>MBA (for management roles)</li>
                <li>PhD in Pure / Applied Sciences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get expert advice on choosing the right career path after 12th Science based on your interests, aptitude,
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
