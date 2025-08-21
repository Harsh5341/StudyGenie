
"use client";

import * as React from "react";
import type { PracticeProblem, StudyGuide, QuizCompletionData } from "@/lib/types";
import { Quiz } from "@/components/app/Quiz";
import { Flashcard } from "@/components/app/Flashcard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Lightbulb } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface InteractiveLearningProps {
  studyGuide: StudyGuide;
  onQuizComplete: (data: QuizCompletionData) => void;
}

function PracticeProblems({ problems }: { problems: PracticeProblem[] }) {
  if (!problems || problems.length === 0) {
    return <p className="text-muted-foreground">No practice problems available.</p>;
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Practice Problems</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {problems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>Problem #{index + 1}</AccordionTrigger>
              <AccordionContent>
                <p className="font-semibold mb-4">{item.problem}</p>
                <Accordion type="single" collapsible>
                  <AccordionItem value="solution">
                    <AccordionTrigger className="text-sm">
                      <span className="flex items-center"><Lightbulb className="mr-2 h-4 w-4" /> View Solution</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.solution}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}


export function InteractiveLearning({ studyGuide, onQuizComplete }: InteractiveLearningProps) {
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % studyGuide.flashcards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + studyGuide.flashcards.length) % studyGuide.flashcards.length);
  };

  return (
    <div className="grid gap-6 mt-6 md:grid-cols-1 lg:grid-cols-2">
       <div className="lg:col-span-2">
        <PracticeProblems problems={studyGuide.practiceProblems} />
      </div>
      <div className="lg:col-span-2">
        <Quiz questions={studyGuide.quizzes} onQuizComplete={onQuizComplete} />
      </div>
      <div className="lg:col-span-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 font-headline">Flashcards</h2>
            {studyGuide.flashcards.length > 0 ? (
              <div>
                <Flashcard
                  front={studyGuide.flashcards[currentCardIndex].front}
                  back={studyGuide.flashcards[currentCardIndex].back}
                />
                <div className="flex items-center justify-between mt-4">
                  <Button variant="outline" onClick={prevCard}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    Card {currentCardIndex + 1} of {studyGuide.flashcards.length}
                  </div>
                  <Button variant="outline" onClick={nextCard}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground">No flashcards available.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
