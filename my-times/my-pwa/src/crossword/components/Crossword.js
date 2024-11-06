import React, { useState } from 'react';
import { data } from './data';
import Crossword from '@jaredreisinger/react-crossword';
import { CardContent, Typography } from '@mui/material';
import '../styles/Crossword.css';

const CrosswordGame = () => {
  const [isComplete, setIsComplete] = useState(false);

  // Callback function to handle crossword correctness
  const handleCrosswordCorrect = (isCorrect) => {
    setIsComplete(isCorrect);
    localStorage.setItem('crosswordComplete', 'true');
  };

  return (
    <div>
      {isComplete && (
        <CardContent style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <Typography variant="h5" style={{ fontWeight: 'bold', textAlign: 'center' }}>
            Hey nice job megs!
          </Typography>
        </CardContent>
      )}
      <Crossword
        data={data}
        onCrosswordCorrect={handleCrosswordCorrect} // Monitor crossword correctness
      />
    </div>
  );
};

export default CrosswordGame;
