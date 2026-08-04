"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Step =
  | { kind: "type"; text: string; charDelay: number }
  | { kind: "wait"; ms: number }
  | { kind: "progress"; ms: number }
  | { kind: "blank" };

const STEPS: Step[] = [
  { kind: "type", text: "> whoami", charDelay: 22 },
  { kind: "wait", ms: 180 },
  { kind: "type", text: "olayinka akanji", charDelay: 18 },
  { kind: "blank" },
  { kind: "wait", ms: 140 },
  { kind: "type", text: "> initializing OlayinkaCodes...", charDelay: 14 },
  { kind: "progress", ms: 650 },
  { kind: "blank" },
  { kind: "wait", ms: 120 },
  { kind: "type", text: "> status: online", charDelay: 20 },
  { kind: "wait", ms: 400 },
];

const PROGRESS_FRAMES = [
  "[■□□□□□□□□□]",
  "[■■■□□□□□□□]",
  "[■■■■■□□□□□]",
  "[■■■■■■■□□□]",
  "[■■■■■■■■■□]",
  "[■■■■■■■■■■] loading systems",
];

interface BootSequenceProps {
  onComplete: () => void;
}

export default function BootSequence({ onComplete }: BootSequenceProps) {
  const [lines, setLines] = useState<string[]>([""]);
  const [progressFrame, setProgressFrame] = useState(0);
  const [showingProgress, setShowingProgress] = useState(false);
  const [dissolving, setDissolving] = useState(false);
  const skippedRef = useRef(false);
  const completedRef = useRef(false);

  const finish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setDissolving(true);
    window.setTimeout(onComplete, 550);
  };

  useEffect(() => {
    let cancelled = false;

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => {
        if (skippedRef.current) {
          resolve();
          return;
        }
        const id = window.setInterval(() => {
          if (skippedRef.current) {
            window.clearInterval(id);
            resolve();
          }
        }, 16);
        window.setTimeout(() => {
          window.clearInterval(id);
          resolve();
        }, ms);
      });

    async function run() {
      for (const step of STEPS) {
        if (cancelled || skippedRef.current) break;

        if (step.kind === "wait") {
          await sleep(skippedRef.current ? 0 : step.ms);
        } else if (step.kind === "blank") {
          setLines((prev) => [...prev, ""]);
        } else if (step.kind === "type") {
          setLines((prev) => [...prev, ""]);
          if (skippedRef.current) {
            setLines((prev) => {
              const next = [...prev];
              next[next.length - 1] = step.text;
              return next;
            });
            continue;
          }
          for (let i = 1; i <= step.text.length; i++) {
            if (skippedRef.current) {
              setLines((prev) => {
                const next = [...prev];
                next[next.length - 1] = step.text;
                return next;
              });
              break;
            }
            setLines((prev) => {
              const next = [...prev];
              next[next.length - 1] = step.text.slice(0, i);
              return next;
            });
            await sleep(step.charDelay);
          }
        } else if (step.kind === "progress") {
          setShowingProgress(true);
          if (skippedRef.current) {
            setProgressFrame(PROGRESS_FRAMES.length - 1);
          } else {
            const perFrame = step.ms / PROGRESS_FRAMES.length;
            for (let f = 0; f < PROGRESS_FRAMES.length; f++) {
              if (skippedRef.current) {
                setProgressFrame(PROGRESS_FRAMES.length - 1);
                break;
              }
              setProgressFrame(f);
              await sleep(perFrame);
            }
          }
        }
      }
      if (!cancelled) finish();
    }

    run();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const skip = () => {
      if (skippedRef.current) return;
      skippedRef.current = true;
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("click", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("click", skip);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-graphite px-6"
      animate={dissolving ? { opacity: 0, filter: "blur(6px)" } : { opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-hidden={dissolving}
      role="status"
      aria-live="polite"
    >
      <div className="w-full max-w-xl font-mono text-sm sm:text-base text-ink">
        {lines.map((line, i) => (
          <div key={i} className="min-h-[1.5em] whitespace-pre">
            {line}
            {i === lines.length - 1 && !showingProgress && (
              <span className="inline-block w-[0.55em] h-[1em] align-middle bg-amber ml-1 animate-blink" />
            )}
          </div>
        ))}
        {showingProgress && (
          <div className="min-h-[1.5em] whitespace-pre text-amber">
            {PROGRESS_FRAMES[progressFrame]}
          </div>
        )}
      </div>
      <span className="sr-only">Loading OlayinkaCodes portfolio</span>
    </motion.div>
  );
}
