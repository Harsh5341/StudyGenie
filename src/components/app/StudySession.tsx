
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

export const StudySession = React.memo(function StudySession({ studyGuide }: StudySessionProps) {
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
});
