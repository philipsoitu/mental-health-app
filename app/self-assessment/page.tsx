'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

const questions = [
  {
    id: 1,
    text: "Little interest or pleasure in doing things?",
    scale: "PHQ-9"
  },
  {
    id: 2,
    text: "Feeling down, depressed, or hopeless?",
    scale: "PHQ-9"
  },
  {
    id: 3,
    text: "Feeling nervous, anxious, or on edge?",
    scale: "GAD-7"
  },
  {
    id: 4,
    text: "Not being able to stop or control worrying?",
    scale: "GAD-7"
  }
]

export default function SelfAssessment() {
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleSubmit = () => {
    setShowResults(true)
  }

  const getResult = () => {
    const total = Object.values(answers).reduce((sum, value) => sum + parseInt(value), 0)
    if (total <= 4) return "Your symptoms suggest mild distress. Consider practicing self-care techniques."
    if (total <= 9) return "Your symptoms suggest moderate distress. Consider reaching out to a counselor."
    return "Your symptoms suggest severe distress. Please contact the crisis hotline or seek immediate help."
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Self-Assessment Tool</h1>
      
      {!showResults ? (
        <Card>
          <CardHeader>
            <CardTitle>Mental Health Check-In</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Over the last 2 weeks, how often have you been bothered by the following problems?</p>
            {questions.map(question => (
              <div key={question.id} className="mb-4">
                <p className="mb-2">{question.text}</p>
                <RadioGroup onValueChange={(value) => handleAnswer(question.id, value)}>
                  {['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].map((option, index) => (
                    <div className="flex items-center space-x-2" key={index}>
                      <RadioGroupItem value={index.toString()} id={`q${question.id}-${index}`} />
                      <Label htmlFor={`q${question.id}-${index}`}>{option}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
            <Button onClick={handleSubmit} className="mt-4">Submit</Button>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Your Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{getResult()}</p>
            <Button onClick={() => setShowResults(false)} className="mt-4">Take Again</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

