import React from "react";
import Header from "../Header";
import Game from "../Game";


import { Toaster } from "../ui/toaster";
import PuzzleDataProvider from "../../providers/PuzzleDataProvider";
import GameStatusProvider from "../../providers/GameStatusProvider";

function Connections() {
  return (
    <div>
      <PuzzleDataProvider>
        <GameStatusProvider>
          <div className="wrapper">
            <Toaster />
            <Game />
          </div>
        </GameStatusProvider>
      </PuzzleDataProvider>
    </div>

  );
}

export default Connections;
