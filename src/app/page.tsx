
"use client";

import * as React from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-auth";

import { generateStudyGuide } from "@/app/actions";
import type { StudyGuide } from "@/lib/types";

import { Header } from "@/components/app/Header";
import { MaterialProcessor } from "@/components/app/MaterialProcessor";
import { ProgressDashboard } from "@/components/app/ProgressDashboard";
import { StudySession } from "@/components/app/StudySession";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookText, BrainCircuit, Sparkles, PencilRuler, Loader2 } from "lucide-react";
import { InteractiveLearning } from "@/components/app/InteractiveLearning";
import { AiTeacher } from "@/components/app/AiTeacher";

const initialState: {
  studyGuide: StudyGuide | null;
  error?: string | null;
} = {
  studyGuide: null,
  error: null,
};

function StudyGenieApp() {
  const [state, formAction] = useActionState(generateStudyGuide, initialState);
  const [material, setMaterial] = React.useState("");
  const { studyGuide } = state;
  const [quizScore, setQuizScore] = React.useState<number | null>(null);
  const [totalQuestions, setTotalQuestions] = React.useState<number>(0);
  const [studyStreak, setStudyStreak] = React.useState(0);

  React.useEffect(() => {
    const storedStreak = localStorage.getItem("studyStreak");
    const lastCompleted = localStorage.getItem("lastQuizCompletion");

    if (storedStreak) {
      setStudyStreak(Number(storedStreak));
    }
    
    if (lastCompleted) {
      const lastDate = new Date(lastCompleted);
      const now = new Date();
      // Reset streak if it's been more than 48 hours (to allow for a full 24h grace period)
      if (now.getTime() - lastDate.getTime() > 48 * 60 * 60 * 1000) {
        setStudyStreak(0);
        localStorage.setItem("studyStreak", "0");
      }
    }
  }, []);

  const handleMaterialChange = (newMaterial: string) => {
    setMaterial(newMaterial);
  };
  
  const handleQuizComplete = (score: number, total: number) => {
    setQuizScore(score);
    setTotalQuestions(total);
    
    const now = new Date();
    const lastCompletedStr = localStorage.getItem("lastQuizCompletion");
    
    if (lastCompletedStr) {
      const lastCompletedDate = new Date(lastCompletedStr);
      // Check if 24 hours have passed
      if (now.getTime() - lastCompletedDate.getTime() >= 24 * 60 * 60 * 1000) {
         setStudyStreak(prev => {
          const newStreak = prev + 1;
          localStorage.setItem("studyStreak", String(newStreak));
          localStorage.setItem("lastQuizCompletion", now.toISOString());
          return newStreak;
        });
      }
    } else {
      // First quiz ever
      setStudyStreak(1);
      localStorage.setItem("studyStreak", "1");
      localStorage.setItem("lastQuizCompletion", now.toISOString());
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid gap-8">
          <MaterialProcessor
            formAction={formAction}
            onMaterialChange={handleMaterialChange}
          />

          {material && <AiTeacher material={material} />}

          {studyGuide ? (
            <Tabs defaultValue="dashboard" className="w-full">
              <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                <TabsTrigger value="dashboard"><BrainCircuit className="mr-2" />Dashboard</TabsTrigger>
                <TabsTrigger value="study"><Sparkles className="mr-2" />Study Session</TabsTrigger>
                <TabsTrigger value="practice"><PencilRuler className="mr-2" />Interactive Learning</TabsTrigger>
              </TabsList>
              <TabsContent value="dashboard">
                <ProgressDashboard 
                  studyGuide={studyGuide}
                  quizScore={quizScore}
                  totalQuestions={totalQuestions}
                  studyStreak={studyStreak}
                />
              </TabsContent>
              <TabsContent value="study">
                <StudySession studyGuide={studyGuide} />
              </TabsContent>
              <TabsContent value="practice">
                <InteractiveLearning studyGuide={studyGuide} onQuizComplete={handleQuizComplete} />
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

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return <StudyGenieApp />;
}
