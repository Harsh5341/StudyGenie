
"use client"

import type { StudyGuide } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label, Cell } from 'recharts';
import { Target, BarChart3, Flame, Map, PieChart } from "lucide-react";

interface ProgressDashboardProps {
  studyGuide: StudyGuide;
  quizScore: number | null;
  totalQuestions: number;
  studyStreak: number;
  topicPerformance: Record<string, { correct: number; total: number }>;
}

const getProficiencyColor = (percentage: number) => {
  if (percentage < 33) return 'hsl(var(--destructive))';
  if (percentage < 66) return 'hsl(var(--chart-4))';
  return 'hsl(var(--chart-2))';
};

const quizChartMargin = { top: 20, right: 30, left: 20, bottom: 5 };
const heatmapMargin = { top: 5, right: 20, left: 0, bottom: 60 };

export function ProgressDashboard({ studyGuide, quizScore, totalQuestions, studyStreak, topicPerformance }: ProgressDashboardProps) {
  const quizData = useMemo(() => quizScore !== null ? [
    { name: 'Score', value: quizScore, total: totalQuestions },
  ] : [], [quizScore, totalQuestions]);

  const percentage = totalQuestions > 0 ? (quizScore ?? 0) / totalQuestions * 100 : 0;

  const heatmapData = useMemo(() => Object.entries(topicPerformance).map(([topic, { correct, total }]) => ({
    name: topic,
    proficiency: total > 0 ? (correct / total) * 100 : 0,
  })), [topicPerformance]);

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
           <CardTitle className="font-headline text-lg flex items-center">
            <PieChart className="mr-2" />
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={percentage} className="w-full" />
          <p className="text-center mt-2 text-muted-foreground">{Math.round(percentage)}% Complete</p>
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
          <div className="h-[200px]">
            {quizScore !== null ? (
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={quizData} layout="vertical" margin={quizChartMargin}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, totalQuestions]} ticks={[0, totalQuestions/2, totalQuestions]} />
                  <YAxis type="category" dataKey="name" hide />
                  <Tooltip 
                    formatter={(value, name, props) => [`${value}/${props.payload.total}`, "Score"]}
                  />
                  <Bar dataKey="value" fill="var(--color-chart-1)" barSize={30}>
                     <Label 
                        content={({ value, x, y, width, height }) => 
                          <text
                            x={Number(x || 0) + Number(width || 0) / 2}
                            y={Number(y || 0) + Number(height || 0) / 2}
                            fill="#fff"
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            {`${Math.round(percentage)}%`}
                          </text>
                        }
                      />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center">
                <p className="text-muted-foreground">Take a quiz to see your performance.</p>
              </div>
            )}
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
          <div className="text-6xl font-bold font-headline">{studyStreak}</div>
          <div className="ml-2 text-muted-foreground">days</div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-3">
        <CardHeader>
          <CardTitle className="font-headline text-lg flex items-center">
             <Map className="mr-2" />
            Knowledge Heatmap
            </CardTitle>
        </CardHeader>
        <CardContent>
           <div className="h-[250px] flex items-center justify-center">
            {heatmapData.length > 0 ? (
               <ResponsiveContainer width="100%" height="100%">
                <BarChart data={heatmapData} layout="horizontal" margin={heatmapMargin}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={1} />
                  <YAxis domain={[0, 100]} unit="%" />
                  <Tooltip 
                    formatter={(value) => [`${Math.round(value as number)}%`, "Proficiency"]}
                  />
                  <Bar dataKey="proficiency">
                    {heatmapData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getProficiencyColor(entry.proficiency)} />
                    ))}
                  </Bar>
                </BarChart>
               </ResponsiveContainer>
            ) : (
              <p className="text-muted-foreground">Your topic proficiency will appear here after a quiz.</p>
            )}
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
