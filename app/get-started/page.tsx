"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [ageGroup, setAgeGroup] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [answers, setAnswers] = useState({})

  // Questions for different age groups
  const questions = {
    "below-14": [
      {
        question: "What class are you studying in?",
        options: ["6th", "7th", "8th"],
      },
      {
        question: "Which subject do you enjoy the most?",
        options: ["Science", "Maths", "English", "Social Studies", "Computer", "Art"],
      },
      {
        question: "What do you enjoy doing after school?",
        options: ["Drawing", "Reading", "Playing Games", "Coding", "Watching Science Videos", "Playing Sports"],
      },
      {
        question: "Who inspires you the most?",
        options: ["Doctor", "Engineer", "Teacher", "Scientist", "YouTuber", "Astronaut"],
      },
      {
        question: "What would you like to become when you grow up?",
        options: ["Scientist", "Software Developer", "Artist", "Sportsperson", "Doctor", "Don't know yet"],
      },
      {
        question: "Have you tried anything creative or technical recently?",
        options: ["Yes - School Project", "Yes - Coding", "No, but interested", "No, not yet"],
      },
      {
        question: "Do you like solving puzzles or logical games?",
        options: ["Yes", "Sometimes", "No"],
      },
      {
        question: "What excites you the most in school?",
        options: ["Experiments", "Computers", "Art", "Helping others", "Solving math problems"],
      },
    ],
    "14-17": [
      {
        question: "What class are you currently in?",
        options: ["9th", "10th", "11th", "12th"],
      },
      {
        question: "Which stream have you taken / are planning to take?",
        options: ["Science (PCM)", "Science (PCB)", "Commerce", "Arts", "Not sure"],
      },
      {
        question: "What is your favorite subject?",
        options: ["Physics", "Chemistry", "Biology", "Maths", "Business Studies", "Computer Science", "English"],
      },
      {
        question: "Which field excites you the most?",
        options: ["Engineering", "Medicine", "Business", "Creative Arts", "Government Jobs", "Science Research"],
      },
      {
        question: "What is your dream career?",
        options: ["Software Developer", "Doctor", "IAS Officer", "Artist/Designer", "Businessman", "Engineer"],
      },
      {
        question: "Have you started preparing for any competitive exams?",
        options: ["JEE", "NEET", "CUET", "NDA", "Not yet"],
      },
      {
        question: "Are you open to studying abroad?",
        options: ["Yes", "No", "Maybe"],
      },
      {
        question: "What skills do you currently have?",
        options: ["Basic Coding", "Public Speaking", "Writing", "Science Projects", "Graphic Design"],
      },
      {
        question: "How much time do you spend on self-study or learning new things?",
        options: ["<1 hour/day", "1–2 hours/day", "2–4 hours/day", "More than 4 hours/day"],
      },
    ],
    "18-21": [
      {
        question: "What degree are you pursuing?",
        options: ["B.Tech", "B.Sc", "B.Com", "BA", "Diploma", "Other"],
      },
      {
        question: "What is your branch/specialization?",
        options: ["CSE", "ECE", "Mechanical", "Civil", "Data Science", "Not sure"],
      },
      {
        question: "What is your dream job role?",
        options: ["Software Engineer", "Data Analyst", "AI Engineer", "UX Designer", "Startup Founder"],
      },
      {
        question: "Which domain are you most interested in?",
        options: ["Web Development", "AI/ML", "Cloud Computing", "Cybersecurity", "Business Analysis"],
      },
      {
        question: "What is your current skill level in coding?",
        options: ["Beginner", "Intermediate", "Advanced", "Not into coding"],
      },
      {
        question: "Have you done any internships or projects?",
        options: ["Yes - Technical", "Yes - Non-technical", "Not yet", "Planning to start"],
      },
      {
        question: "Are you preparing for any of these?",
        options: ["GATE", "CAT", "GRE", "UPSC", "None"],
      },
      {
        question: "Are you interested in higher studies?",
        options: ["Yes - MTech", "Yes - MBA", "Yes - MS Abroad", "No"],
      },
      {
        question: "Dream Company/Brand?",
        options: ["Google", "TCS", "Infosys", "ISRO", "Microsoft", "Startups", "Others"],
      },
      {
        question: "Expected starting package?",
        options: ["Below ₹5 LPA", "₹5–10 LPA", "₹10–20 LPA", "₹20+ LPA"],
      },
    ],
    "22-25": [
      {
        question: "What post-graduation course are you pursuing?",
        options: ["M.Tech", "MBA", "M.Sc", "PG Diploma", "Other"],
      },
      {
        question: "What UG degree did you complete?",
        options: ["B.Tech", "B.Sc", "BBA", "B.Com", "Other"],
      },
      {
        question: "What field are you targeting for your career?",
        options: ["Data Science", "AI/ML", "Robotics", "Embedded Systems", "Business Analyst"],
      },
      {
        question: "Preferred work domain?",
        options: ["Research & Development", "Corporate Jobs", "Startups", "Govt/PSUs"],
      },
      {
        question: "Do you have previous internship/work experience?",
        options: ["Yes - Relevant", "Yes - Unrelated", "No"],
      },
      {
        question: "Current skill proficiency?",
        options: ["Python", "Java", "SQL", "Power BI", "AutoCAD", "None yet"],
      },
      {
        question: "Do you plan to study abroad/work abroad?",
        options: ["Yes - Study Abroad", "Yes - Work Abroad", "No"],
      },
      {
        question: "Ideal company or sector?",
        options: ["FAANG (Google, Amazon)", "PSUs", "MNCs (TCS, Wipro)", "Startups"],
      },
      {
        question: "Preferred working style?",
        options: ["On-site", "Hybrid", "Remote"],
      },
      {
        question: "Expected salary?",
        options: ["₹5–10 LPA", "₹10–20 LPA", "₹20+ LPA", "Global Package (USD/EUR)"],
      },
    ],
    "25+": [
      {
        question: "How many years of work experience do you have?",
        options: ["<1 Year", "1–3 Years", "3–5 Years", "5+ Years"],
      },
      {
        question: "What is your current job role?",
        options: ["Software Engineer", "Analyst", "Mechanical Engineer", "Manager", "Other"],
      },
      {
        question: "What industry are you currently working in?",
        options: ["IT", "Manufacturing", "Education", "Finance", "Healthcare"],
      },
      {
        question: "Are you looking to switch your domain?",
        options: ["Yes - Technical to Management", "Yes - Mechanical to IT", "No"],
      },
      {
        question: "What is your primary reason for switching?",
        options: ["Better salary", "Job satisfaction", "Remote work", "Career growth"],
      },
      {
        question: "What upskilling are you currently doing?",
        options: ["Data Science", "Cloud", "MBA Prep", "Tech Courses", "None yet"],
      },
      {
        question: "Do you plan for higher education?",
        options: ["MBA", "MS Abroad", "Certification", "No"],
      },
      {
        question: "Target company/sector?",
        options: ["Product-based", "Govt Jobs", "Startups", "MNCs"],
      },
      {
        question: "Preferred job type?",
        options: ["Full-time", "Freelancing", "Remote", "Entrepreneurship"],
      },
      {
        question: "Target package or hike?",
        options: ["50% hike", "100% hike", "₹20+ LPA", "USD 100K+"],
      },
    ],
  }

  const handleAgeGroupSelect = (value) => {
    setAgeGroup(value)
    setCurrentStep(2)
  }

  const handleAnswerSelect = (questionIndex, answer) => {
    setAnswers({
      ...answers,
      [questionIndex]: answer,
    })
  }

  const handleNext = () => {
    if (ageGroup && currentStep > 1) {
      const currentQuestions = questions[ageGroup]
      const questionIndex = currentStep - 2

      if (questionIndex < currentQuestions.length - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        setFormSubmitted(true)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 2) {
      setCurrentStep(currentStep - 1)
    } else if (currentStep === 2) {
      setCurrentStep(1)
      setAgeGroup("")
    }
  }

  const getCurrentQuestion = () => {
    if (!ageGroup || currentStep === 1) return null

    const questionIndex = currentStep - 2
    return questions[ageGroup][questionIndex]
  }

  const currentQuestion = getCurrentQuestion()
  const questionIndex = currentStep - 2
  const totalQuestions = ageGroup ? questions[ageGroup].length : 0
  const progress = ageGroup && currentStep > 1 ? ((questionIndex + 1) / totalQuestions) * 100 : 0

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-bold gradient-text">Get Started</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Answer a few questions to get personalized career guidance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[radial-gradient(ellipse_at_bottom,rgba(49,87,181,0.1),transparent_70%)]">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="gradient-text text-2xl">
                {formSubmitted
                  ? "Thank You!"
                  : currentStep === 1
                    ? "Select Your Age Group"
                    : `Question ${questionIndex + 1} of ${totalQuestions}`}
              </CardTitle>
              {currentStep > 1 && !formSubmitted && (
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                  <div className="bg-gold-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {formSubmitted ? (
                <motion.div
                  className="text-center py-12 space-y-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex justify-center">
                    <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-navy-800">Thank you for completing the questionnaire!</h3>
                  <p className="text-muted-foreground">
                    Based on your responses, we'll provide you with personalized career guidance. Our team will analyze
                    your answers and send you tailored recommendations soon.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950">
                      <Link href="/education">Explore Education Paths</Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-gold-500 text-gold-600 hover:bg-gold-50 hover:text-gold-700"
                    >
                      <Link href="/jobs">Browse Career Options</Link>
                    </Button>
                  </div>
                </motion.div>
              ) : currentStep === 1 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Button
                    onClick={() => handleAgeGroupSelect("below-14")}
                    variant="outline"
                    className="p-6 h-auto flex flex-col items-center text-center hover:bg-gold-50 hover:border-gold-500"
                  >
                    <span className="text-lg font-bold mb-2">Below 14</span>
                    <span className="text-sm text-muted-foreground">Classes 6-8</span>
                  </Button>
                  <Button
                    onClick={() => handleAgeGroupSelect("14-17")}
                    variant="outline"
                    className="p-6 h-auto flex flex-col items-center text-center hover:bg-gold-50 hover:border-gold-500"
                  >
                    <span className="text-lg font-bold mb-2">14-17 Years</span>
                    <span className="text-sm text-muted-foreground">Classes 9-12</span>
                  </Button>
                  <Button
                    onClick={() => handleAgeGroupSelect("18-21")}
                    variant="outline"
                    className="p-6 h-auto flex flex-col items-center text-center hover:bg-gold-50 hover:border-gold-500"
                  >
                    <span className="text-lg font-bold mb-2">18-21 Years</span>
                    <span className="text-sm text-muted-foreground">UG Students</span>
                  </Button>
                  <Button
                    onClick={() => handleAgeGroupSelect("22-25")}
                    variant="outline"
                    className="p-6 h-auto flex flex-col items-center text-center hover:bg-gold-50 hover:border-gold-500"
                  >
                    <span className="text-lg font-bold mb-2">22-25 Years</span>
                    <span className="text-sm text-muted-foreground">PG Students / Freshers</span>
                  </Button>
                  <Button
                    onClick={() => handleAgeGroupSelect("25+")}
                    variant="outline"
                    className="p-6 h-auto flex flex-col items-center text-center hover:bg-gold-50 hover:border-gold-500 sm:col-span-2"
                  >
                    <span className="text-lg font-bold mb-2">25+ Years</span>
                    <span className="text-sm text-muted-foreground">Working Professionals / Switchers</span>
                  </Button>
                </div>
              ) : currentQuestion ? (
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-navy-800">{currentQuestion.question}</h3>
                  <RadioGroup
                    value={answers[questionIndex]}
                    onValueChange={(value) => handleAnswerSelect(questionIndex, value)}
                    className="space-y-3"
                  >
                    {currentQuestion.options.map((option, index) => (
                      <div key={index} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  <div className="flex justify-between mt-8">
                    <Button onClick={handleBack} variant="outline" className="border-gold-500 text-gold-600">
                      Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950"
                      disabled={!answers[questionIndex]}
                    >
                      {questionIndex === totalQuestions - 1 ? "Submit" : "Next"}
                    </Button>
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}
