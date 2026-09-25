"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  className?: string;
}

export function TypingText({ text, className = "" }: TypingTextProps) {
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const isComplete = characterCount === text.length;
    const isEmpty = characterCount === 0;
    const delay = isComplete && !isDeleting ? 1600 : isEmpty ? 500 : isDeleting ? 72 : 88;

    const timeout = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
      } else if (isEmpty && isDeleting) {
        setIsDeleting(false);
      } else {
        setCharacterCount((count) => count + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [characterCount, isDeleting, text.length]);

  return (
    <h3 className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, characterCount)}</span>
      <span className="typing-caret" aria-hidden="true" />
    </h3>
  );
}
