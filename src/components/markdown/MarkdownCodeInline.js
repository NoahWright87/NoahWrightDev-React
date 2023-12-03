import { Typography } from '@mui/material';
import React from 'react';

export default function MarkdownCodeInline({ children, ...props }) {
    return <>
        <Typography
            sx={{
                backgroundColor: 'info.light',
                display: 'inline',
                px: 0.25,
                mx: 0.25,
            }}
        >
            <code>{children}</code>
        </Typography>
    </>;
}
