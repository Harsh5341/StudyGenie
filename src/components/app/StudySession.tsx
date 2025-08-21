
"use client";

import * as React from "react";
import type { StudyGuide, PracticeProblem } from "@/lib/types";
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

interface StudySessionProps {
  studyGuide: StudyGuide;
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


export function StudySession({ studyGuide }: StudySessionProps) {
  return (
    <div className="grid gap-6 mt-6">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline text-lg">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{studyGuide.summary}</p>
        </CardContent>
      </Card>
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline text-lg">
            Your Personalized Study Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{studyGuide.studyPlan}</p>
        </CardContent>
      </Card>
    </div>
  );
}
