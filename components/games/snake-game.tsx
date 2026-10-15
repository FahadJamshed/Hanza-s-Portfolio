"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };
type Direction = "up" | "down" | "left" | "right";
type Game = { snake: Point[]; food: Point; score: number };
type Speed = "slow" | "medium" | "fast";

const BOARD_SIZE = 20;
const STARTING_SNAKE: Point[] = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
  { x: 6, y: 10 },
];
const OPPOSITE: Record<Direction, Direction> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};
const MOVES: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};
const SPEEDS: { id: Speed; label: string; interval: number }[] = [
  { id: "slow", label: "Slow", interval: 220 },
  { id: "medium", label: "Medium", interval: 135 },
  { id: "fast", label: "Fast", interval: 75 },
];

function randomFood(snake: Point[]): Point {
  let point: Point;
  do {
    point = {
      x: Math.floor(Math.random() * BOARD_SIZE),
      y: Math.floor(Math.random() * BOARD_SIZE),
    };
  } while (snake.some((part) => part.x === point.x && part.y === point.y));
  return point;
}

function newGame(): Game {
  return { snake: STARTING_SNAKE, food: randomFood(STARTING_SNAKE), score: 0 };
}

export default function SnakeGame() {
  const [game, setGame] = useState<Game>(newGame);
  const [status, setStatus] = useState<"ready" | "running" | "paused" | "over">("ready");
  const [best, setBest] = useState(0);
  const [speed, setSpeed] = useState<Speed>("slow");
  const direction = useRef<Direction>("right");
  const queuedDirection = useRef<Direction>("right");

  useEffect(() => {
    setBest(Number(window.localStorage.getItem("snake-best") || 0));
  }, []);

  const start = useCallback(() => {
    direction.current = "right";
    queuedDirection.current = "right";
    setGame(newGame());
    setStatus("running");
  }, []);

  const turn = useCallback((next: Direction) => {
    if (next !== OPPOSITE[direction.current]) queuedDirection.current = next;
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const keyDirections: Record<string, Direction> = {
        ArrowUp: "up", w: "up", W: "up",
        ArrowDown: "down", s: "down", S: "down",
        ArrowLeft: "left", a: "left", A: "left",
        ArrowRight: "right", d: "right", D: "right",
      };
      const next = keyDirections[event.key];
      if (next && status === "running") {
        event.preventDefault();
        turn(next);
      } else if (event.code === "Space" && status === "running") {
        event.preventDefault();
        setStatus("paused");
      } else if ((event.code === "Space" || event.key === "Enter") && status !== "running") {
        event.preventDefault();
        start();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [start, status, turn]);

  useEffect(() => {
    if (status !== "running") return;
    const timer = window.setInterval(() => {
      direction.current = queuedDirection.current;
      setGame((current) => {
        const move = MOVES[direction.current];
        const head = {
          x: current.snake[0].x + move.x,
          y: current.snake[0].y + move.y,
        };
        const eating = head.x === current.food.x && head.y === current.food.y;
        const body = eating ? current.snake : current.snake.slice(0, -1);
        const collision =
          head.x < 0 || head.y < 0 || head.x >= BOARD_SIZE || head.y >= BOARD_SIZE ||
          body.some((part) => part.x === head.x && part.y === head.y);

        if (collision) {
          setStatus("over");
          return current;
        }

        const bodyAfterMove = eating ? current.snake : current.snake.slice(0, -1);
        const snake = [head, ...bodyAfterMove];
        if (eating) {
          const score = current.score + 1;
          setBest((previous) => {
            const next = Math.max(previous, score);
            window.localStorage.setItem("snake-best", String(next));
            return next;
          });
          return { snake, food: randomFood(snake), score };
        }
        return { ...current, snake };
      });
    }, SPEEDS.find((option) => option.id === speed)!.interval);
    return () => window.clearInterval(timer);
  }, [speed, status]);

  const snakeCells = new Set(game.snake.map(({ x, y }) => `${x},${y}`));

  return (
    <section className="relative mx-auto mb-12 w-full max-w-5xl overflow-hidden rounded-3xl border border-border/70 bg-card/70 p-3 shadow-xl backdrop-blur sm:p-6 lg:p-8" aria-label="Snake game">
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-2 gap-y-1 px-1 sm:mb-5 sm:flex sm:flex-wrap sm:justify-between sm:gap-3">
        <div className="col-start-1 row-start-1 sm:col-auto sm:row-auto">
          <div className="flex items-center gap-2">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-primary min-[380px]:text-base sm:text-lg sm:tracking-[0.16em]">Snake arcade</p>
          </div>
        </div>
        <div className="col-start-2 row-start-1 flex gap-2 text-right sm:col-auto sm:row-auto">
          <div className="min-w-[4.25rem] rounded-xl border border-border/70 bg-background/70 px-2.5 py-1.5 shadow-sm sm:min-w-[4.5rem] sm:rounded-2xl sm:px-3 sm:py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px]">Score</p>
            <strong className="font-mono text-lg leading-none sm:text-xl">{game.score}</strong>
          </div>
          <div className="min-w-[4.25rem] rounded-xl border border-primary/20 bg-primary/5 px-2.5 py-1.5 shadow-sm sm:min-w-[4.5rem] sm:rounded-2xl sm:px-3 sm:py-2">
            <p className="text-[9px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-[10px]">Best</p>
            <strong className="font-mono text-lg leading-none text-primary sm:text-xl">{best}</strong>
          </div>
        </div>
      </div>

      <div className="relative mb-4 flex flex-col items-stretch gap-2 rounded-2xl border border-border/70 bg-background/60 p-2.5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between sm:mb-5 sm:p-3">
        <div className="pl-1">
          <p className="text-xs font-semibold">Game speed</p>
          <p className="text-[11px] text-muted-foreground">Choose your challenge</p>
        </div>
        <div className="grid grid-cols-3 rounded-xl bg-muted/70 p-1" role="group" aria-label="Game speed">
          {SPEEDS.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={speed === option.id}
              onClick={() => {
                if (speed === option.id) return;
                setSpeed(option.id);
                start();
              }}
              className={`min-h-11 rounded-lg px-3 py-2 text-xs font-semibold transition-colors ${speed === option.id ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="relative mx-auto aspect-square w-full max-w-[min(78vw,680px)] touch-none overflow-hidden rounded-2xl border border-border bg-background p-1.5 shadow-inner sm:p-3 lg:mx-0 lg:max-w-[min(62vw,680px)]"
        role="img"
        aria-label={`Game board. Score ${game.score}${status === "over" ? ". Game over." : ""}`}
      >
        <div
          className="grid h-full w-full gap-[3px]"
          style={{
            gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
            const x = index % BOARD_SIZE;
            const y = Math.floor(index / BOARD_SIZE);
            const isSnake = snakeCells.has(`${x},${y}`);
            const isHead = game.snake[0].x === x && game.snake[0].y === y;
            const isFood = game.food.x === x && game.food.y === y;
            return (
              <span
                key={index}
                className={`rounded-[3px] transition-colors duration-75 ${isHead ? "scale-110 rounded-[5px] bg-primary shadow-sm" : isSnake ? "bg-primary/65" : isFood ? "scale-75 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.55)]" : "bg-muted/45"}`}
                aria-hidden="true"
              />
            );
          })}
        </div>
        {status !== "running" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 px-5 text-center backdrop-blur-sm sm:px-8">
            <p className="font-heading text-2xl sm:text-3xl">{status === "over" ? "Game over" : "Ready when you are"}</p>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {status === "over" ? `You scored ${game.score}. Fancy another round?` : status === "paused" ? "Take a breather. Resume when you are ready." : "Tap start, then use the direction pad below to play."}
            </p>
            <button type="button" onClick={start} className="mt-5 min-h-12 min-w-40 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground shadow-md transition duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
              {status === "over" ? "Play again" : status === "paused" ? "Resume game" : "Start game"}
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-col items-center gap-3 sm:mt-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <p className="hidden text-xs font-medium leading-relaxed text-muted-foreground lg:block">Arrow keys / WASD<br /><span className="opacity-70">Space to start</span></p>
        <div className="grid grid-cols-3 gap-2.5 sm:mx-0 lg:mr-2" aria-label="Touch controls">
          <span />
          <DirectionButton label="Up" direction="up" onTurn={turn}>↑</DirectionButton>
          <span />
          <DirectionButton label="Left" direction="left" onTurn={turn}>←</DirectionButton>
          <button
            type="button"
            aria-label={status === "running" ? "Pause game" : status === "paused" ? "Resume game" : "Pause control unavailable"}
            title={status === "running" ? "Pause game" : status === "paused" ? "Resume game" : "Start the game first"}
            disabled={status !== "running" && status !== "paused"}
            onClick={() => setStatus(status === "running" ? "paused" : "running")}
            className="grid h-14 w-16 touch-manipulation place-items-center rounded-2xl border border-border/80 bg-background/80 text-lg font-bold shadow-sm transition duration-150 hover:border-primary/40 hover:bg-primary/5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-12 sm:w-14 sm:rounded-xl"
          >
            {status === "paused" ? "▶" : "Ⅱ"}
          </button>
          <DirectionButton label="Right" direction="right" onTurn={turn}>→</DirectionButton>
          <span />
          <DirectionButton label="Down" direction="down" onTurn={turn}>↓</DirectionButton>
          <span />
        </div>
      </div>
    </section>
  );
}

function DirectionButton({
  label,
  direction,
  onTurn,
  children,
}: {
  label: string;
  direction: Direction;
  onTurn: (direction: Direction) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={`Move ${label.toLowerCase()}`}
      onClick={() => onTurn(direction)}
      className="h-14 w-16 touch-manipulation rounded-2xl border border-border/80 bg-background/80 text-2xl font-bold shadow-sm transition duration-150 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 active:translate-y-0 active:scale-95 active:bg-primary active:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:h-12 sm:w-14 sm:rounded-xl sm:text-xl"
    >
      {children}
    </button>
  );
}
