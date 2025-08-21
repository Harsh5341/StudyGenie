
"use client";

import * as React from "react";
import { generateMindMap } from "@/app/actions";
import type { AiTeacherResponse } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Share2, Bot, User } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

interface HistoryAndMindmapProps {
  history: AiTeacherResponse[];
}

export function HistoryAndMindmap({ history }: HistoryAndMindmapProps) {
  const [mindMap, setMindMap] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleGenerateMindMap = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await generateMindMap(history);
      setMindMap(result.mindMap);
    } catch (err) {
      setError("Failed to generate mind map. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid gap-6 mt-6 md:grid-cols-1 lg:grid-cols-2">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Conversation History</CardTitle>
          <CardDescription>Review your past questions and answers.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {history.length > 0 ? (
              <div className="space-y-6">
                {history.map((item, index) => (
                  <div key={index} className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-muted rounded-full">
                        <User className="h-6 w-6" />
                      </div>
                      <p className="font-semibold bg-muted p-3 rounded-lg">{item.question}</p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary text-primary-foreground rounded-full">
                        <Bot className="h-6 w-6" />
                      </div>
                      <p className="bg-primary/10 p-3 rounded-lg whitespace-pre-wrap">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-16">
                Your conversation history with the AI Teacher will appear here.
              </p>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Concept Mind Map</CardTitle>
          <CardDescription>Visualize the key concepts from your conversation.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGenerateMindMap} disabled={isLoading || history.length === 0}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Share2 className="mr-2 h-4 w-4" />
                Generate Mind Map
              </>
            )}
          </Button>
          {error && <p className="text-destructive text-sm mt-4">{error}</p>}
          <ScrollArea className="h-[400px] mt-4">
            {mindMap ? (
              <pre className="p-4 bg-muted rounded-md whitespace-pre-wrap font-code text-sm">
                <code>{mindMap}</code>
              </pre>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground">
                <p>Your mind map will appear here after generation.</p>
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
