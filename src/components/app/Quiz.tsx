
"use client";

import * as React from "react";
import type { QuizQuestion } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizProps {
  questions: QuizQuestion[];
  onQuizComplete: (score: number, totalQuestions: number) => void;
}

export function Quiz({ questions, onQuizComplete }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<string[]>([]);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(null);
  const [showResults, setShowResults] = React.useState(false);

  const score = userAnswers.reduce((acc, answer, index) => {
    return answer === questions[index].correctAnswer ? acc + 1 : acc;
  }, 0);

  const handleNext = () => {
    if (selectedOption) {
      const newUserAnswers = [...userAnswers, selectedOption];
      setUserAnswers(newUserAnswers);
      setSelectedOption(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        const finalScore = newUserAnswers.reduce((acc, answer, index) => {
          return answer === questions[index].correctAnswer ? acc + 1 : acc;
        }, 0);
        onQuizComplete(finalScore, questions.length);
        setShowResults(true);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedOption(null);
    setShowResults(false);
    onQuizComplete(0, questions.length);
  };
  
  if (!questions || questions.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Quiz</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No quiz questions available.</p>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Quiz Results</CardTitle>
          <CardDescription>
            You scored {score} out of {questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <p className="font-semibold">{q.question}</p>
                <div className={cn(
                  "flex items-center mt-2 text-sm",
                  userAnswers[index] === q.correctAnswer ? "text-green-600" : "text-destructive"
                )}>
                  {userAnswers[index] === q.correctAnswer ? (
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                  ) : (
                    <XCircle className="mr-2 h-4 w-4" />
                  )}
                  Your answer: {userAnswers[index]}
                </div>
                {userAnswers[index] !== q.correctAnswer && (
                  <div className="flex items-center mt-1 text-sm text-green-600">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Correct answer: {q.correctAnswer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button onClick={handleRestart} className="mt-6">
            <RotateCcw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Quiz Time!</CardTitle>
        <CardDescription>
          Question {currentQuestionIndex + 1} of {questions.length}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-lg mb-4">{currentQuestion.question}</p>
        <RadioGroup onValueChange={setSelectedOption} value={selectedOption || ""}>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted">
              <RadioGroupItem value={option} id={`q${currentQuestionIndex}-o${index}`} />
              <Label htmlFor={`q${currentQuestionIndex}-o${index}`} className="flex-1 cursor-pointer">{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <div className="flex justify-end mt-6">
          <Button onClick={handleNext} disabled={!selectedOption}>
            {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
