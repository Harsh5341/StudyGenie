"use client";

import { useRef } from "react";
import { useFormStatus } from "react-dom";
import { Upload, Sparkles, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Generate Study Guide
        </>
      )}
    </Button>
  );
}

interface MaterialProcessorProps {
  formAction: (payload: FormData) => void;
  onMaterialChange: (newMaterial: string) => void;
}

export function MaterialProcessor({ formAction, onMaterialChange }: MaterialProcessorProps) {
  // Use a ref to store the timeout ID for debouncing
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMaterialChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    // Clear the previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to delay the onMaterialChange call
    timeoutRef.current = setTimeout(() => {
      onMaterialChange(value);
    }, 500); // 500ms debounce
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center text-xl font-headline">
          <Upload className="mr-2" />
          1. Process Your Material
        </CardTitle>
        <CardDescription>
          Paste your notes, book chapter, or any text-based learning material below.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="material">Learning Material</Label>
            <Textarea
              id="material"
              name="material"
              placeholder="Paste your content here..."
              className="min-h-[150px] text-base"
              required
              onChange={handleMaterialChange}
            />
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
