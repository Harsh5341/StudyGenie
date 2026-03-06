"use client";

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

import * as React from "react";

export const MaterialProcessor = React.memo(function MaterialProcessor({ formAction, onMaterialChange }: MaterialProcessorProps) {
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
              onChange={(e) => onMaterialChange(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  );
});
