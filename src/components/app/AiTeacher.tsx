
"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";
import { askTeacher } from "@/app/actions";
import type { AiTeacherResponse } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, Bot, Loader2 } from "lucide-react";

interface AiTeacherProps {
  material: string;
  onNewAnswer: (response: AiTeacherResponse) => void;
}

const initialState: {
  response: AiTeacherResponse | null;
  error?: string | null;
} = {
  response: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Thinking...
        </>
      ) : (
        "Ask"
      )}
    </Button>
  );
}

export const AiTeacher = React.memo(function AiTeacher({ material, onNewAnswer }: AiTeacherProps) {
  const [state, setState] = React.useState(initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    const result = await askTeacher(initialState, formData);
    setState(result);
    if (result.response) {
      onNewAnswer(result.response);
      formRef.current?.reset();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">Ask the AI Teacher</CardTitle>
        <CardDescription>
          Have a question about the material? Ask the AI Teacher for help.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form
          ref={formRef}
          action={handleAction}
          className="flex items-center gap-2"
        >
          <Input
            name="question"
            placeholder="e.g., 'What is evaporation?'"
            className="flex-1"
            required
            disabled={!material}
          />
          <input type="hidden" name="material" value={material} />
          <SubmitButton />
        </form>

        {state.response && (
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-full">
                <User className="h-6 w-6" />
              </div>
              <p className="font-semibold bg-muted p-3 rounded-lg">{state.response.question}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary text-primary-foreground rounded-full">
                <Bot className="h-6 w-6" />
              </div>
              <p className="bg-primary/10 p-3 rounded-lg whitespace-pre-wrap">
                {state.response.answer}
              </p>
            </div>
          </div>
        )}
        {state.error && <p className="text-destructive text-sm">{state.error}</p>}
      </CardContent>
    </Card>
  );
});
