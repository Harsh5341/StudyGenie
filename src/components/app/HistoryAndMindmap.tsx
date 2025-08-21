
"use client";

import * as React from "react";
import { generateMindMap } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, Share2, FileText } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface HistoryAndMindmapProps {
  materialHistory: string[];
}

export function HistoryAndMindmap({ materialHistory }: HistoryAndMindmapProps) {
  const [mindMap, setMindMap] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [selectedIndices, setSelectedIndices] = React.useState<Set<number>>(new Set());

  const handleGenerateMindMap = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const selectedMaterials = materialHistory.filter((_, index) => selectedIndices.has(index));
      if (selectedMaterials.length === 0) {
        setError("Please select at least one material to generate a mind map.");
        setIsLoading(false);
        return;
      }
      const result = await generateMindMap(selectedMaterials);
      setMindMap(result.mindMap);
    } catch (err) {
      setError("Failed to generate mind map. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCheckboxChange = (index: number) => {
    setSelectedIndices(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(index)) {
        newSelection.delete(index);
      } else {
        newSelection.add(index);
      }
      return newSelection;
    });
  };
  
  const reversedHistory = React.useMemo(() => [...materialHistory].reverse(), [materialHistory]);
  
  // A map to get original index from reversed index
  const getOriginalIndex = (reversedIndex: number) => materialHistory.length - 1 - reversedIndex;

  return (
    <div className="grid gap-6 mt-6 md:grid-cols-1 lg:grid-cols-2">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Study Material History</CardTitle>
          <CardDescription>Select materials to generate a mind map from.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {reversedHistory.length > 0 ? (
              <Accordion type="multiple" className="w-full">
                {reversedHistory.map((material, index) => {
                  const originalIndex = getOriginalIndex(index);
                  return (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id={`checkbox-${index}`}
                          checked={selectedIndices.has(originalIndex)}
                          onCheckedChange={() => handleCheckboxChange(originalIndex)}
                          className="mt-4"
                        />
                        <AccordionTrigger className="flex-1">
                           <Label htmlFor={`checkbox-${index}`} className="flex items-center gap-2 cursor-pointer">
                            <FileText className="h-4 w-4" />
                            Submission #{materialHistory.length - index}
                           </Label>
                        </AccordionTrigger>
                      </div>
                      <AccordionContent>
                        <p className="whitespace-pre-wrap text-sm text-muted-foreground p-2 bg-muted/50 rounded-md">
                          {material.substring(0, 300)}...
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  )
                })}
              </Accordion>
            ) : (
              <p className="text-muted-foreground text-center py-16">
                Your submitted study materials will appear here.
              </p>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Concept Mind Map</CardTitle>
          <CardDescription>Visualize the key concepts from your study materials.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={handleGenerateMindMap} disabled={isLoading || materialHistory.length === 0 || selectedIndices.size === 0}>
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
