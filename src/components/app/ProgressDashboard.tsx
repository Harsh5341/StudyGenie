
"use client"

import type { StudyGuide } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, BarChart3, Flame } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

interface ProgressDashboardProps {
  studyGuide: StudyGuide;
}

export function ProgressDashboard({ studyGuide }: ProgressDashboardProps) {
  return (
    <div className="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline text-lg flex items-center">
            <Target className="mr-2" />
            Your Personalized Study Plan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{studyGuide.studyPlan}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={0} className="w-full" />
          <p className="text-center mt-2 text-muted-foreground">0% Complete</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg flex items-center">
            <BarChart3 className="mr-2" />
            Quiz Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px] flex items-center justify-center">
            <p className="text-muted-foreground">Take a quiz to see your performance.</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-lg flex items-center">
            <Flame className="mr-2 text-orange-500" />
            Study Streak
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <div className="text-6xl font-bold font-headline">0</div>
          <div className="ml-2 text-muted-foreground">days</div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline text-lg">Knowledge Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
           <div className="h-[120px] flex items-center justify-center">
             <p className="text-muted-foreground">Your topic proficiency will appear here.</p>
           </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline text-lg">Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="whitespace-pre-wrap">{studyGuide.summary}</p>
        </CardContent>
      </Card>

    </div>
  );
}
