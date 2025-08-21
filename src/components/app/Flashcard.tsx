"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check, RotateCcw } from "lucide-react";

interface FlashcardProps {
  front: string;
  back: string;
}

export function Flashcard({ front, back }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);
  
  React.useEffect(() => {
    setIsFlipped(false);
  }, [front]);

  return (
    <div className="w-full h-64 [perspective:1000px]">
      <div
        className={cn(
          "relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d]",
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        )}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <div className="absolute flex items-center justify-center p-6 w-full h-full bg-card border rounded-lg shadow-md [backface-visibility:hidden] cursor-pointer">
          <p className="text-xl font-semibold">{front}</p>
        </div>

        {/* Back of card */}
        <div className="absolute flex items-center justify-center p-6 w-full h-full bg-card border rounded-lg shadow-md [backface-visibility:hidden] [transform:rotateY(180deg)] cursor-pointer">
          <p className="text-xl text-primary font-semibold">{back}</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <Button variant="outline" onClick={handleFlip}>
          <RotateCcw className="mr-2 h-4 w-4" /> Flip Card
        </Button>
        <Button variant="default" className="bg-green-600 hover:bg-green-700">
          <Check className="mr-2 h-4 w-4" /> I Knew This
        </Button>
      </div>
    </div>
  );
}
