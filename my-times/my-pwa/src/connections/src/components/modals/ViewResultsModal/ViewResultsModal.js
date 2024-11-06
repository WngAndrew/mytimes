import React from "react";

import { generateEmojiGrid } from "../../../lib/game-helpers";
import BaseModal from "../BaseModal";
import { GameStatusContext } from "../../../providers/GameStatusProvider";
import { PuzzleDataContext } from "../../../providers/PuzzleDataProvider";
import { Button } from "../../ui/button";

function ViewResultsModal() {
  const { submittedGuesses } = React.useContext(GameStatusContext);
  const { gameData } = React.useContext(PuzzleDataContext);

  return (
    <BaseModal
      title=""
      trigger={
        <Button variant="submit" className="w-full" children={"View Results"} />
      }
      initiallyOpen={false}
      showActionButton={false}
    >
      <div className="flex flex-col place-content-center">
        <p className="text-center font-[600]">
          Yayyy good job megan you win!
        </p>
        <span className="text-center whitespace-pre mb-2">
          {"\n"}
          {generateEmojiGrid(gameData, submittedGuesses)}
        </span>
      </div>
    </BaseModal>
  );
}

export default ViewResultsModal;
