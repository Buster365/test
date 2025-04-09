import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Briefcase, GraduationCap, Clock } from "lucide-react"

export default function MTechAIMLPage() {
  const careerPaths = [
    {
      title: "AI Research Scientist",
      description: "Conduct research to advance the field of artificial intelligence and machine learning",
      skills: ["Deep Learning", "Research Methodology", "Algorithm Design", "NLP/Computer Vision"],
      companies: ["Google AI", "Microsoft Research", "DeepMind", "OpenAI", "Meta AI Research"],
    },
    {
      title: "Machine Learning Engineer",
      description: "Design and implement machine learning systems and deploy them to production",
      skills: ["ML Frameworks", "Software Engineering", "MLOps", "Data Pipeline Design"],
      companies: ["Google", "Amazon", "Microsoft", "Uber", "Netflix"],
    },
    {
      title: "AI Product Manager",
      description: "Lead the development of AI-powered products and features",
      skills: ["Product Management", "AI Understanding", "User Experience", "Business Strategy"],
      companies: ["Google", "Amazon", "Microsoft", "Apple", "Samsung"],
    },
    {
      title: "Computer Vision Engineer",
      description: "Develop systems that can process, analyze, and understand visual data",
      skills: ["Computer Vision", "Image Processing", "Deep Learning", "OpenCV"],
      companies: ["NVIDIA", "Tesla", "Intel", "Samsung", "Sony"],
    },
    {
      title: "NLP Engineer",
      description: "Build systems that can understand, interpret, and generate human language",
      skills: ["Natural Language Processing", "Linguistics", "Deep Learning", "Text Analytics"],
      companies: ["Google", "Microsoft", "Amazon", "IBM", "Grammarly"],
    },
    {
      title: "AI Ethics Researcher",
      description: "Research and develop frameworks for ethical AI development and deployment",
      skills: ["AI Ethics", "Policy Analysis", "Fairness in ML", "Responsible AI"],
      companies: ["Microsoft", "Google", "IBM", "AI Ethics Lab", "Partnership on AI"],
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
            <h1 className="text-3xl font-bold text-gray-900">M.Tech in Artificial Intelligence & Machine Learning</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Comprehensive guide to pursuing a Master of Technology in AI & ML
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
                <p className="text-gray-700">2 years (4 semesters)</p>
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
                <p className="text-gray-700">B.Tech/B.E. in Computer Science, IT, Electronics, or related fields</p>
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
                  Excellent job opportunities in AI research, tech companies, startups, and academia
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
            <p className="text-gray-700 mb-4">
              M.Tech in Artificial Intelligence & Machine Learning is a specialized postgraduate program that focuses on
              advanced concepts in AI, ML algorithms, deep learning, computer vision, natural language processing, and
              related technologies. The program is designed for students who want to pursue careers in AI research,
              development, and implementation.
            </p>
            <p className="text-gray-700 mb-4">
              The curriculum combines theoretical foundations with practical applications, covering topics like neural
              networks, reinforcement learning, computer vision, NLP, robotics, and ethical considerations in AI.
              Students gain hands-on experience through laboratory sessions, research projects, and industry
              collaborations.
            </p>
            <p className="text-gray-700 mb-4">
              This program prepares students for high-demand roles in the AI industry, including AI research scientist,
              machine learning engineer, data scientist, AI product manager, and specialized roles in computer vision
              and natural language processing. Graduates can work in tech giants, research labs, startups, and academia.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Subjects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Machine Learning Algorithms",
                "Deep Learning",
                "Neural Networks",
                "Computer Vision",
                "Natural Language Processing",
                "Reinforcement Learning",
                "AI Ethics & Governance",
                "Big Data Analytics",
                "Robotics & Automation",
                "Speech Recognition",
                "Probabilistic Graphical Models",
                "Evolutionary Computation",
                "Knowledge Representation",
                "AI for IoT",
                "MLOps & AI Engineering",
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Career Paths after M.Tech in AI & ML</h2>

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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Top Institutes for M.Tech in AI & ML</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>IITs and Premier Institutes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Delhi - Department of Computer Science & Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Bombay - Centre for Machine Intelligence and Data Science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIT Madras - Robert Bosch Centre for Data Science and AI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IISc Bangalore - Department of Computational and Data Sciences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>IIIT Hyderabad - Machine Learning Lab</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Other Notable Institutions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>BITS Pilani - Department of Computer Science</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Delhi Technological University (DTU)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>PES University - Center for Applied AI & ML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>Manipal Institute of Technology</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0" />
                    <span>VIT Vellore - School of Computer Science and Engineering</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Pursue M.Tech in AI & ML?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized guidance on institute selection, entrance exam preparation, and career planning.
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
      <h1 className="text-3xl font-bold mb-4">M.Tech in AI & ML</h1>
      <p className="text-gray-700 mb-4">
        Advanced study in artificial intelligence and machine learning.
      </p>
      <h2 className="text-xl font-semibold mb-2">Career Opportunities:</h2>
      <div className="flex flex-wrap gap-2">
        <span className="badge">AI Engineer</span>
        <span className="badge">ML Researcher</span>
        <span className="badge">Data Scientist</span>
      </div>
    </div>
  );
}
