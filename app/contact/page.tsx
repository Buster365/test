"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Check, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    education: "",
    interest: "",
    message: "",
  })

  const [showQuiz, setShowQuiz] = useState(false)
  const [quizStep, setQuizStep] = useState(1)
  const [quizAnswers, setQuizAnswers] = useState({
    educationLevel: "",
    subjectInterest: "",
    careerGoal: "",
    workStyle: "",
    skillStrength: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log("Form submitted:", formData)
    setFormSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleQuizChange = (field: string, value: string) => {
    setQuizAnswers((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (quizStep < 5) {
      setQuizStep(quizStep + 1)
    } else {
      // Process quiz results
      console.log("Quiz completed:", quizAnswers)
      setShowQuiz(false)
      setFormSubmitted(true)
    }
  }

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
            <h1 className="text-4xl font-bold gradient-text">Contact Us</h1>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
              Get in touch with our career counselors for personalized guidance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[radial-gradient(ellipse_at_bottom,rgba(49,87,181,0.1),transparent_70%)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="space-y-8">
                <Card className="gradient-card border-gold-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-navy-800">
                      <Mail className="h-5 w-5 text-gold-600" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-navy-800">info@gyanhub.com</p>
                    <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                  </CardContent>
                </Card>

                <Card className="gradient-card border-gold-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-navy-800">
                      <MapPin className="h-5 w-5 text-gold-600" />
                      Visit Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-navy-800">CUTM, Bhubaneswar, Odisha, 752050</p>
                    <p className="text-sm text-muted-foreground">Centurion University of Technology and Management</p>

                    <div className="mt-4 rounded-lg overflow-hidden border border-gold-500/20 h-60">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.4775777779733!2d85.70380097499425!3d20.176150002453443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDEwJzM0LjEiTiA4NcKwNDInMjMuMCJF!5e0!3m2!1sen!2sin!4v1712502347927!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card className="gradient-card border-gold-500/20">
                <CardHeader>
                  <CardTitle className="gradient-text text-2xl">Get Personalized Guidance</CardTitle>
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
                      <h3 className="text-2xl font-medium text-navy-800">Thank you for choosing Gyan Hub!</h3>
                      <p className="text-muted-foreground">
                        Your request has been successfully received. Our team will get back to you shortly with expert
                        guidance tailored just for you.
                      </p>
                      <Button
                        className="mt-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950"
                        onClick={() => {
                          setFormSubmitted(false)
                          setShowQuiz(false)
                          setQuizStep(1)
                          setQuizAnswers({
                            educationLevel: "",
                            subjectInterest: "",
                            careerGoal: "",
                            workStyle: "",
                            skillStrength: "",
                          })
                        }}
                      >
                        Submit Another Request
                      </Button>
                    </motion.div>
                  ) : showQuiz ? (
                    <motion.div
                      className="py-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-navy-800">Question {quizStep} of 5</span>
                          <span className="text-sm text-navy-800">{quizStep * 20}% Complete</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-gold-500 h-2.5 rounded-full" style={{ width: `${quizStep * 20}%` }}></div>
                        </div>
                      </div>

                      {quizStep === 1 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium text-navy-800">What is your current education level?</h3>
                          <RadioGroup
                            value={quizAnswers.educationLevel}
                            onValueChange={(value) => handleQuizChange("educationLevel", value)}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="10th" id="r1" />
                              <Label htmlFor="r1">10th Standard</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="12th" id="r2" />
                              <Label htmlFor="r2">12th Standard</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="undergraduate" id="r3" />
                              <Label htmlFor="r3">Undergraduate</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="graduate" id="r4" />
                              <Label htmlFor="r4">Graduate</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="working" id="r5" />
                              <Label htmlFor="r5">Working Professional</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}

                      {quizStep === 2 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium text-navy-800">
                            Which subject areas interest you the most?
                          </h3>
                          <RadioGroup
                            value={quizAnswers.subjectInterest}
                            onValueChange={(value) => handleQuizChange("subjectInterest", value)}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="technical" id="s1" />
                              <Label htmlFor="s1">Technical (Mathematics, Computer Science, Engineering)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="science" id="s2" />
                              <Label htmlFor="s2">Science (Physics, Chemistry, Biology)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="business" id="s3" />
                              <Label htmlFor="s3">Business (Economics, Finance, Management)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="arts" id="s4" />
                              <Label htmlFor="s4">Arts & Humanities (Literature, History, Psychology)</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="creative" id="s5" />
                              <Label htmlFor="s5">Creative (Design, Media, Fine Arts)</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}

                      {quizStep === 3 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium text-navy-800">What are your primary career goals?</h3>
                          <RadioGroup
                            value={quizAnswers.careerGoal}
                            onValueChange={(value) => handleQuizChange("careerGoal", value)}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="high-income" id="g1" />
                              <Label htmlFor="g1">High income potential</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="work-life-balance" id="g2" />
                              <Label htmlFor="g2">Work-life balance</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="job-security" id="g3" />
                              <Label htmlFor="g3">Job security and stability</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="social-impact" id="g4" />
                              <Label htmlFor="g4">Social impact and helping others</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="entrepreneurship" id="g5" />
                              <Label htmlFor="g5">Entrepreneurship and innovation</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}

                      {quizStep === 4 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium text-navy-800">What work environment do you prefer?</h3>
                          <RadioGroup
                            value={quizAnswers.workStyle}
                            onValueChange={(value) => handleQuizChange("workStyle", value)}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="structured" id="w1" />
                              <Label htmlFor="w1">Structured environment with clear guidelines</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="flexible" id="w2" />
                              <Label htmlFor="w2">Flexible environment with creative freedom</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="collaborative" id="w3" />
                              <Label htmlFor="w3">Collaborative team-based environment</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="independent" id="w4" />
                              <Label htmlFor="w4">Independent work with minimal supervision</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="leadership" id="w5" />
                              <Label htmlFor="w5">Leadership roles with decision-making authority</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}

                      {quizStep === 5 && (
                        <div className="space-y-4">
                          <h3 className="text-xl font-medium text-navy-800">What are your strongest skills?</h3>
                          <RadioGroup
                            value={quizAnswers.skillStrength}
                            onValueChange={(value) => handleQuizChange("skillStrength", value)}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="analytical" id="sk1" />
                              <Label htmlFor="sk1">Analytical thinking and problem-solving</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="communication" id="sk2" />
                              <Label htmlFor="sk2">Communication and interpersonal skills</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="creative" id="sk3" />
                              <Label htmlFor="sk3">Creativity and innovation</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="technical" id="sk4" />
                              <Label htmlFor="sk4">Technical and digital skills</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="leadership" id="sk5" />
                              <Label htmlFor="sk5">Leadership and management</Label>
                            </div>
                          </RadioGroup>
                        </div>
                      )}

                      <div className="mt-8 flex justify-end">
                        <Button
                          onClick={handleNextStep}
                          className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950"
                          disabled={
                            (quizStep === 1 && !quizAnswers.educationLevel) ||
                            (quizStep === 2 && !quizAnswers.subjectInterest) ||
                            (quizStep === 3 && !quizAnswers.careerGoal) ||
                            (quizStep === 4 && !quizAnswers.workStyle) ||
                            (quizStep === 5 && !quizAnswers.skillStrength)
                          }
                        >
                          {quizStep === 5 ? "Submit" : "Next"} <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-navy-800">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white/80 border-gray-300 text-navy-800 placeholder:text-gray-500 focus:border-gold-500/50"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-navy-800">
                            Email
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white/80 border-gray-300 text-navy-800 placeholder:text-gray-500 focus:border-gold-500/50"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-navy-800">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            placeholder="Enter your phone number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="bg-white/80 border-gray-300 text-navy-800 placeholder:text-gray-500 focus:border-gold-500/50"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="education" className="text-navy-800">
                            Current Education Level
                          </Label>
                          <Select onValueChange={(value) => handleSelectChange("education", value)}>
                            <SelectTrigger
                              id="education"
                              className="bg-white/80 border-gray-300 text-navy-800 focus:ring-gold-500/30"
                            >
                              <SelectValue placeholder="Select your education level" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-300">
                              <SelectItem value="10th">10th Standard</SelectItem>
                              <SelectItem value="12th">12th Standard</SelectItem>
                              <SelectItem value="undergraduate">Undergraduate</SelectItem>
                              <SelectItem value="graduate">Graduate</SelectItem>
                              <SelectItem value="postgraduate">Postgraduate</SelectItem>
                              <SelectItem value="working">Working Professional</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="interest" className="text-navy-800">
                          Area of Interest
                        </Label>
                        <Select onValueChange={(value) => handleSelectChange("interest", value)}>
                          <SelectTrigger
                            id="interest"
                            className="bg-white/80 border-gray-300 text-navy-800 focus:ring-gold-500/30"
                          >
                            <SelectValue placeholder="Select your area of interest" />
                          </SelectTrigger>
                          <SelectContent className="bg-white border-gray-300">
                            <SelectItem value="technology">Technology & IT</SelectItem>
                            <SelectItem value="engineering">Engineering</SelectItem>
                            <SelectItem value="medical">Medical & Healthcare</SelectItem>
                            <SelectItem value="business">Business & Management</SelectItem>
                            <SelectItem value="science">Science & Research</SelectItem>
                            <SelectItem value="arts">Arts & Humanities</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-navy-800">
                          Your Message
                        </Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your career goals and questions"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="bg-white/80 border-gray-300 text-navy-800 placeholder:text-gray-500 focus:border-gold-500/50"
                          required
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          type="submit"
                          className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 shadow-lg hover:shadow-gold-500/20 transition-all duration-300"
                        >
                          Submit Request
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 border-gold-500 text-gold-600 hover:bg-gold-50 hover:text-gold-700"
                          onClick={() => setShowQuiz(true)}
                        >
                          Get Started with Quiz
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[radial-gradient(ellipse_at_top,rgba(255,191,0,0.1),transparent_70%)]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto mt-8 space-y-6 text-left">
              {[
                {
                  question: "How can GyanHub help me with my career decisions?",
                  answer:
                    "GyanHub provides comprehensive information about various career paths, education requirements, and job opportunities. Our expert counselors can offer personalized guidance based on your interests, skills, and educational background.",
                },
                {
                  question: "Is career counseling free?",
                  answer:
                    "We offer basic career information for free on our website. For personalized counseling sessions with our experts, we have affordable packages designed to meet different needs and budgets.",
                },
                {
                  question: "How do I schedule a counseling session?",
                  answer:
                    "You can schedule a counseling session by filling out the contact form on this page, calling our office, or sending us an email. Our team will get back to you within 24 hours to arrange a convenient time.",
                },
                {
                  question: "Can GyanHub help with college admissions?",
                  answer:
                    "Yes, our counselors can provide guidance on college selection, application processes, entrance exam preparation, and scholarship opportunities based on your career goals and academic profile.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="space-y-2 p-6 gradient-card rounded-lg border-gold-500/20 hover:border-gold-500/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-bold text-navy-800">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
