import { Paper, Typography } from '@mui/material';
import React from 'react';

export default function MarkdownTldr({ children, ...props }) {
    return <>
        <Paper
            elevation={4}
            sx={{
                backgroundColor: 'info.light',
                p: 1,
                mx: 1,
            }}
        >
            <Typography
                variant='h4'
            >
                TL;DR:
            </Typography>
            <Typography
                variant='body1'
            >
                {children}
            </Typography>
        </Paper>
    </>;
}
