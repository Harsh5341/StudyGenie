"use client"

import type { StudyGuide } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Target, BarChart3, Flame } from "lucide-react";

interface ProgressDashboardProps {
  studyGuide: StudyGuide;
}

const chartData = [
  { name: 'Quiz 1', score: 65 },
  { name: 'Quiz 2', score: 80 },
  { name: 'Quiz 3', score: 75 },
  { name: 'Quiz 4', score: 90 },
];

const knowledgeData = [
  { name: 'Topic A', proficiency: 80 },
  { name: 'Topic B', proficiency: 60 },
  { name: 'Topic C', proficiency: 95 },
  { name: 'Topic D', proficiency: 40 },
  { name: 'Topic E', proficiency: 75 },
  { name: 'Topic F', proficiency: 85 },
  { name: 'Topic G', proficiency: 55 },
  { name: 'Topic H', proficiency: 70 },
];

const getProficiencyColor = (proficiency: number) => {
  if (proficiency > 85) return "bg-primary/90";
  if (proficiency > 70) return "bg-primary/70";
  if (proficiency > 50) return "bg-primary/50";
  return "bg-primary/30";
};

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
          <Progress value={75} className="w-full" />
          <p className="text-center mt-2 text-muted-foreground">75% Complete</p>
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
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
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
          <div className="text-6xl font-bold font-headline">12</div>
          <div className="ml-2 text-muted-foreground">days</div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline text-lg">Knowledge Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
            {knowledgeData.map((item) => (
              <Tooltip key={item.name}>
                <Tooltip.Provider>
                  <Tooltip.Trigger asChild>
                    <div className={`w-full aspect-square rounded-md ${getProficiencyColor(item.proficiency)}`} />
                  </Tooltip.Trigger>
                  <Tooltip.Content>
                    <p>{item.name}: {item.proficiency}% proficiency</p>
                  </Tooltip.Content>
                </Tooltip.Provider>
              </Tooltip>
            ))}
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
