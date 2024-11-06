import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import BackButton from '../global_components/BackButton'; // Adjust the path as needed

export default function Present() {
    return (
        <div>


            <CardContent style={{ textAlign: 'center' }}>
                <h1>Hey!</h1>
                <h1>Congrats on beating the game, I hope you had fun with it. Here's your present.</h1>
                <a
                    href="https://wngandrew.github.io/birthday-letter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}
                >
                    Thing #1
                </a>
            </CardContent>

            <CardContent style={{ textAlign: 'center' }}>
                <a
                    href="https://www.youtube.com/watch?v=JY4q5rIRQUM&t=41s&ab_channel=pandapenta"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0066cc', textDecoration: 'none', fontWeight: 'bold' }}
                >
                    Thing #2
                </a>
            </CardContent>
        </div>
    );
}
