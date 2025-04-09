import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, BookOpen, GraduationCap, Search } from "lucide-react"
import Image from "next/image"
// Add these imports at the top of the file
import { Lightbulb, Database } from "lucide-react"

export default function EducationResearchJobsPage() {
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
            <h1 className="text-3xl font-bold text-gray-900">Education & Research Careers</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore careers in teaching, research, and academic fields
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview of Education & Research Careers</h2>
              <p className="text-gray-700 mb-4">
                Education and research careers focus on the creation, preservation, and transmission of knowledge. These
                professions play a crucial role in advancing society through teaching, scientific discovery, and
                intellectual exploration.
              </p>
              <p className="text-gray-700">
                From primary school teachers to university professors and research scientists, these careers offer the
                opportunity to make a lasting impact on individuals and society. While they may not always offer the
                highest financial compensation, they provide intellectual stimulation, job security, and the
                satisfaction of contributing to human knowledge and development.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Education and Research Careers"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Education & Research Careers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Professor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Professors teach at the university level, conduct research, publish scholarly work, and mentor
                  students in their field of expertise.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Teaching</Badge>
                      <Badge variant="outline">Research</Badge>
                      <Badge variant="outline">Publication</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹6-25 LPA depending on institution and seniority</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Universities, Research Institutions, Think Tanks</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-green-600" />
                  Research Scientist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Research scientists conduct experiments, analyze data, and develop new theories or technologies in
                  their specialized field.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Experimentation</Badge>
                      <Badge variant="outline">Data Analysis</Badge>
                      <Badge variant="outline">Publication</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹5-20 LPA depending on field and experience</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Research Institutes, R&D Departments, Government Labs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Education Consultant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Education consultants advise students, parents, schools, and educational institutions on academic
                  planning, curriculum development, and educational strategies.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Academic Advising</Badge>
                      <Badge variant="outline">Program Development</Badge>
                      <Badge variant="outline">Educational Assessment</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹4-15 LPA depending on clientele and experience</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Consulting Firms, Educational Institutions, Self-employed</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Curriculum Developer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Curriculum developers design educational content, learning materials, and instructional strategies for
                  schools, universities, and educational platforms.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Content Creation</Badge>
                      <Badge variant="outline">Instructional Design</Badge>
                      <Badge variant="outline">Educational Assessment</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹4-12 LPA depending on organization and experience</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Educational Publishers, EdTech Companies, School Systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Academic Counselor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Academic counselors guide students in making educational and career decisions, helping them navigate
                  academic challenges and plan for future success.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Student Advising</Badge>
                      <Badge variant="outline">Career Guidance</Badge>
                      <Badge variant="outline">Academic Support</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹3-10 LPA depending on institution and location</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Schools, Colleges, Universities, Career Centers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-green-600" />
                  Educational Administrator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Educational administrators manage schools, colleges, or specific departments within educational
                  institutions, overseeing operations, staff, and educational programs.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm text-gray-500">Key Responsibilities:</p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline">Leadership</Badge>
                      <Badge variant="outline">Program Management</Badge>
                      <Badge variant="outline">Staff Development</Badge>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Average Salary:</p>
                    <p>₹6-20 LPA depending on position and institution size</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-gray-500">Top Employers:</p>
                    <p>Schools, Colleges, Universities, Educational Departments</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Educational Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Teaching Careers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">School Teachers</p>
                      <p className="text-sm text-gray-600">
                        B.Ed. (Bachelor of Education) after a bachelor's degree, or integrated B.El.Ed. (Bachelor of
                        Elementary Education) programs.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">College/University Professors</p>
                      <p className="text-sm text-gray-600">
                        Ph.D. in the relevant discipline is typically required, with some positions accepting candidates
                        with a master's degree.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Educational Administrators</p>
                      <p className="text-sm text-gray-600">
                        Master's degree in Education Administration, Educational Leadership, or related field, often
                        with teaching experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-green-600" />
                  Research Careers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Research Scientists</p>
                      <p className="text-sm text-gray-600">
                        Ph.D. in the specific field of research, with some entry-level positions available for those
                        with a master's degree.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Research Assistants</p>
                      <p className="text-sm text-gray-600">
                        Bachelor's or master's degree in the relevant field, often as a stepping stone to more advanced
                        research positions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Specialized Certifications</p>
                      <p className="text-sm text-gray-600">
                        Additional certifications in research methodologies, data analysis, or specific technologies
                        relevant to the field.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8">Industry Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Current Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Digital Transformation</p>
                      <p className="text-sm text-gray-600">
                        Integration of technology in education, including online learning platforms, digital resources,
                        and virtual classrooms.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Interdisciplinary Research</p>
                      <p className="text-sm text-gray-600">
                        Growing emphasis on collaboration across different fields to address complex problems.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Focus on Skill Development</p>
                      <p className="text-sm text-gray-600">
                        Shift towards competency-based education and practical skill development alongside theoretical
                        knowledge.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Skills in Demand
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Technical Skills</p>
                      <p className="text-sm text-gray-600">
                        Digital literacy, data analysis, research methodologies, and subject-specific expertise.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Soft Skills</p>
                      <p className="text-sm text-gray-600">
                        Communication, critical thinking, adaptability, and cultural sensitivity.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <div>
                      <p className="font-medium">Emerging Areas</p>
                      <p className="text-sm text-gray-600">
                        Knowledge of AI in education, personalized learning approaches, and innovative teaching
                        methodologies.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Education & Research Careers</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-green-600" />
                Academic Researcher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Academic researchers conduct original studies and contribute to scholarly knowledge in their field.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Key Responsibilities:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline">Research Design</Badge>
                    <Badge variant="outline">Data Collection</Badge>
                    <Badge variant="outline">Academic Publishing</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Average Salary:</p>
                  <p>₹4–20 LPA depending on institution and experience</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Top Employers:</p>
                  <p>Universities, Government Research Bodies, Think Tanks, Private R&D Labs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                School Teacher
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                School teachers educate students at primary or secondary levels, developing foundational knowledge and
                skills.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Key Responsibilities:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline">Lesson Planning</Badge>
                    <Badge variant="outline">Student Assessment</Badge>
                    <Badge variant="outline">Classroom Management</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Average Salary:</p>
                  <p>₹2.5–8 LPA depending on board and school type</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Top Employers:</p>
                  <p>Public Schools, Private Schools, International Schools, NGOs</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-green-600" />
                Education Policy Analyst
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                These professionals evaluate and develop education policies to improve system efficiency and equity.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Key Responsibilities:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline">Policy Research</Badge>
                    <Badge variant="outline">Data Analysis</Badge>
                    <Badge variant="outline">Stakeholder Consultation</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Average Salary:</p>
                  <p>₹6–15 LPA based on experience and location</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Top Employers:</p>
                  <p>Government Bodies, UNESCO, World Bank, Research Foundations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                Professor / Lecturer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Professors teach undergraduate and postgraduate students while conducting research in their
                specialization.
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Key Responsibilities:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <Badge variant="outline">Teaching</Badge>
                    <Badge variant="outline">Curriculum Design</Badge>
                    <Badge variant="outline">Research Supervision</Badge>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Average Salary:</p>
                  <p>₹8–25 LPA depending on academic rank and institution</p>
                </div>
                <div>
                  <p className="font-medium text-sm text-gray-500 mb-2">Top Employers:</p>
                  <p>Universities, Colleges, Open Learning Platforms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Educational Requirements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-green-600" />
                Formal Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Bachelor's Degrees</p>
                    <p className="text-sm text-gray-600">
                      B.Ed (Bachelor of Education), B.Sc/B.A + B.Ed, B.A. in Education, etc.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Master's Programs</p>
                    <p className="text-sm text-gray-600">
                      M.Ed (Master of Education), MA in Education, M.Phil in Research Methodology
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Doctoral Degrees (Ph.D.)</p>
                    <p className="text-sm text-gray-600">For academic and research-intensive roles</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-green-600" />
                Alternative Pathways
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Certifications & Online Programs</p>
                    <p className="text-sm text-gray-600">
                      Teacher training on Coursera, edX, and NPTEL; Research methodology courses
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Fellowships & Internships</p>
                    <p className="text-sm text-gray-600">
                      Teaching or research fellowships in academic institutions or NGOs
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Independent Research</p>
                    <p className="text-sm text-gray-600">
                      Publishing papers, contributing to journals or educational blogs
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-8">Industry Insights</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-green-600" />
                Current Trends
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">EdTech Integration</p>
                    <p className="text-sm text-gray-600">
                      Technology-driven education (smart classrooms, LMS platforms)
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Data-Driven Decision Making</p>
                    <p className="text-sm text-gray-600">
                      Use of analytics in curriculum development and policy evaluation
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-600" />
                Skills in Demand
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Instructional Design</p>
                    <p className="text-sm text-gray-600">Creating effective and engaging learning content</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Research & Analysis</p>
                    <p className="text-sm text-gray-600">
                      Proficiency in tools like SPSS, R, NVivo for academic research
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                  <div>
                    <p className="font-medium">Communication & Pedagogy</p>
                    <p className="text-sm text-gray-600">
                      Strong teaching techniques and ability to convey complex ideas
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
