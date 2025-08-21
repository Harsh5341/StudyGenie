
"use client";

import * as React from "react";
import { useActionState } from "react";

import { generateStudyGuide } from "@/app/actions";
import type { StudyGuide } from "@/lib/types";

import { Header } from "@/components/app/Header";
import { MaterialProcessor } from "@/components/app/MaterialProcessor";
import { ProgressDashboard } from "@/components/app/ProgressDashboard";
import { StudySession } from "@/components/app/StudySession";
import { AiTutor } from "@/components/app/AiTutor";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, Bot, BrainCircuit, Sparkles, PencilRuler } from "lucide-react";

const initialState: {
  studyGuide: StudyGuide | null;
  error?: string | null;
} = {
  studyGuide: null,
  error: null,
};

export default function Home() {
  const [state, formAction] = useActionState(generateStudyGuide, initialState);
  const [material, setMaterial] = React.useState("");
  const { studyGuide } = state;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid gap-8">
          <MaterialProcessor
            formAction={formAction}
            onMaterialChange={setMaterial}
          />

          {studyGuide ? (
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-4">
                <TabsTrigger value="dashboard"><BrainCircuit className="mr-2" />Dashboard</TabsTrigger>
                <TabsTrigger value="study"><Sparkles className="mr-2" />Study Session</TabsTrigger>
                <TabsTrigger value="tutor"><Bot className="mr-2" />AI Tutor</TabsTrigger>
                <TabsTrigger value="practice"><PencilRuler className="mr-2" />Interactive Learning</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard">
                <ProgressDashboard studyGuide={studyGuide} />
              </TabsContent>
              <TabsContent value="study">
                <StudySession studyGuide={studyGuide} />
              </TabsContent>
              <TabsContent value="tutor">
                <AiTutor material={material} />
              </TabsContent>
              <TabsContent value="practice">
                <StudySession studyGuide={studyGuide} />
              </TabsContent>
            </Tabs>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookText className="mr-2" />
                  Your Study Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Your personalized study guide will appear here once you process your materials.
                </p>
                <div className="space-y-4">
                  <Skeleton className="h-24 w-full" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}
