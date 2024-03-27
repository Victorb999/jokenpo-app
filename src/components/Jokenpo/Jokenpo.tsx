"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Jokenpo = () => {
  const [result, setResult] = useState("");
  const [score, setScore] = useState({ app: 0, player: 0 });
  const [machineChoice, setMachineChoice] = useState(null);
  const [load, setLoad] = useState(false);
  const jokenpoArray = [
    { element: "pedra", win: "tesoura", lose: "papel", icon: "🪨" },
    { element: "tesoura", win: "papel", lose: "pedra", icon: "✂️" },
    { element: "papel", win: "pedra", lose: "tesoura", icon: "📜" },
  ];

  const jokenpoResp = (resposta: string) => {
    setLoad(true);
    const randomIndex = Math.floor(Math.random() * 2);
    const machineElement = jokenpoArray[randomIndex];
    setTimeout(() => {
      setMachineChoice(machineElement);
      if (machineElement.element === resposta) {
        setResult("EMPATE");
      } else if (machineElement.win === resposta) {
        setResult("PERDEU");
        setScore({ ...score, app: score.app + 1 });
      } else {
        setResult("GANHOU");
        setScore({ ...score, player: score.player + 1 });
      }
      setLoad(false);
    }, 3000);
  };

  const reset = () => {
    setMachineChoice(null);
    setResult("");
    setScore({ app: 0, player: 0 });
  };

  return (
    <Card
      className="flex flex-col
     justify-center items-center p-4 gap-2"
    >
      {load ? (
        <div className="animate-bounce">JOKENPO</div>
      ) : (
        machineChoice && (
          <div
            className="flex flex-col
            justify-center items-center gap-2"
          >
            <h1>Escolha do App: {machineChoice.icon}</h1>
            <h1
              className="font-bold rounded p-2 text-black animate-pulse"
              style={
                result === "GANHOU"
                  ? { background: "green" }
                  : result === "PERDEU"
                    ? { background: "red" }
                    : { background: "yellow" }
              }
            >
              {" "}
              {result}
            </h1>
          </div>
        )
      )}

      <h1>Pontuação</h1>
      <div
        className="flex 
     justify-center items-center  gap-2"
      >
        <h2>App: {score.app} </h2>
        <h2> Você: {score.player}</h2>
      </div>
      <Button onClick={reset} variant="outline">
        {" "}
        Resetar{" "}
      </Button>

      <div
        className="flex 
     justify-center items-center p-4 gap-2"
      >
        <Button
          variant="secondary"
          onClick={() => jokenpoResp("pedra")}
          disabled={load}
        >
          🪨
        </Button>
        <Button
          variant="secondary"
          onClick={() => jokenpoResp("papel")}
          disabled={load}
        >
          📜
        </Button>
        <Button
          variant="secondary"
          onClick={() => jokenpoResp("tesoura")}
          disabled={load}
        >
          ✂️
        </Button>
      </div>
    </Card>
  );
};
