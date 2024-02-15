import { FormatQuote } from '@mui/icons-material';
import { Paper, Typography } from '@mui/material';
import React from 'react';

export default function MarkdownQuote({ children, ...props }) {
    let lastDash = children && children[0].lastIndexOf("-");
    let name, quote;
    if (lastDash > -1) {
        name = children[0].slice(lastDash + 1);
        quote = children[0].slice(0, lastDash);
    }

    return <>
        <Paper
            elevation={4}
            sx={{
                backgroundColor: 'info.light',
                p: 1,
                mx: 1,
                position: 'relative',
            }}
        >
            <FormatQuote
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    transform: 'scaleX(-1)',
                }}
            />
            <FormatQuote
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
            />
            <Typography
                variant='body1'
            >
                {quote}
            </Typography>
            {name && <Typography
                variant='body1'
                sx={{
                    textAlign: 'right',
                    fontStyle: 'italic',
                }}
            >
                {name}
            </Typography>}
        </Paper>
    </>;
}
