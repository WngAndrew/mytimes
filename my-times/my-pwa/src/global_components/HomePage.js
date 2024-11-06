// /src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';

export default function HomePage() {
  const [allGamesCompleted, setAllGamesCompleted] = useState(false);

  useEffect(() => {
    // Check local storage for game completion status
    const crosswordComplete = localStorage.getItem('crosswordComplete') === 'true';
    const sudokuComplete = localStorage.getItem('sudokuComplete') === 'true';
    const connectionsComplete = localStorage.getItem('connectionsComplete') === 'true';
    const wordleComplete = localStorage.getItem('wordleComplete') === 'true';

    // Set the state based on whether all games are complete
    setAllGamesCompleted(crosswordComplete && sudokuComplete && connectionsComplete && wordleComplete);
  }, []);

  return (
    <Box style={{ backgroundColor: "#f8f8f8" }}>
      <Box style={{ padding: '20px' }}>
        <Typography variant="h6" textAlign="center" sx={{ fontSize: '20px', fontWeight: '700' }}>
          Welcome Megan!
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ fontSize: '14px' }}>
          Complete the puzzles for your present
        </Typography>

        <Box style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
          {/* Green card with conditional present link or message */}
          <Card style={{ backgroundColor: '#6aaa64', color: '#000', height: '160px', borderRadius: '10px' }}>
            <CardContent style={{ display: 'flex', padding: '0px', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontSize: '20px', fontWeight: '700' }}>Happy Birthday!!</Typography>
                {allGamesCompleted ? (
                  <Link to="/present" style={{ color: '#303b5b', textDecoration: 'none' }}>
                    Click to open
                  </Link>
                ) : (
                  <LockIcon sx={{ color: 'black', fontSize: '28px', marginTop: '5px' }} />
                )}
              </CardContent>
              <CardContent>
                <img
                  src="/images/gift.png"
                  alt="Gift img"
                  style={{ height: '50px' }}
                />
              </CardContent>
            </CardContent>

            <CardContent style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Typography variant="p1" textAlign="center" sx={{ fontSize: '18px', fontWeight: '700' }}>
                Thursday, Nov 7
              </Typography>
              <Typography
                variant="p1"
                textAlign="center"
                sx={{ color: '#303b5b', fontSize: '12px', fontWeight: '300', alignSelf: 'flex-end' }}
              >
                By ANDREW WANG
              </Typography>
            </CardContent>
          </Card>

          {/* Blue cards with half height */}
          <Box style={{ display: 'flex', gap: '10px' }}>
            <Card style={{ flex: 1, padding: '10px', textAlign: 'center', backgroundColor: '#b4a8ff', height: '150px', borderRadius: '10px' }}>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/images/connections.svg"
                    alt="Connections icon"
                    style={{ height: '50px', display: 'block' }}
                  />
                </div>
                <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: '700' }}>Connections</Typography>
                <Link to="/connections" style={{ textDecoration: 'none', color: '#303b5b', fontSize: '16px', fontWeight: '300' }}>Group words</Link>
              </CardContent>
            </Card>

            <Card style={{ flex: 1, padding: '10px', textAlign: 'center', backgroundColor: '#fb9b00', height: '150px', borderRadius: '10px' }}>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <img
                    src="/images/sudoku-card-icon.svg"
                    alt="Sudoku icon"
                    style={{ height: '50px', display: 'block' }}
                  />
                </div>
                <Typography variant="h6" sx={{ fontSize: '20px', fontWeight: '700' }}>Sudoku</Typography>
                <Link to="/sudoku" style={{ textDecoration: 'none', color: '#303b5b', fontSize: '16px', fontWeight: '300' }}>Go math girlie</Link>
              </CardContent>
            </Card>
          </Box>
        

          <Box style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Card style={{ backgroundColor: '#6493e5', color: '#000', borderRadius: '10px', height: '120px' }}>
              <CardContent style={{ padding: '0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontSize: '20px', fontWeight: '700' }}>The Crossword</Typography>
                  <Link to="/crossword" style={{ color: '#303b5b', textDecoration: 'none', fontSize: '16px', fontWeight: '300' }}>
                    tid bits await
                  </Link>
                </CardContent>
                <CardContent>
                  <img
                    src="/images/mini.svg"
                    alt="Crossword icon"
                    style={{ height: '50px', display: 'block' }}
                  />
                </CardContent>
              </CardContent>
            </Card>

            <Card style={{ backgroundColor: '#D3D3D3', color: '#000', borderRadius: '10px', height: '120px' }}>
              <CardContent style={{ display: 'flex', justifyContent: 'space-between', padding: '0px' }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontSize: '20px', fontWeight: '700' }}>Wordle</Typography>
                  <Link to="/wordle" style={{ color: '#303b5b', textDecoration: 'none', fontSize: '16px', fontWeight: '300' }}>
                    bet u can't get it in three
                  </Link>
                </CardContent>
                <CardContent>
                  <img
                    src="/images/wordle.svg"
                    alt="Wordle icon"
                    style={{ height: '60px', display: 'block' }}
                  />
                </CardContent>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
