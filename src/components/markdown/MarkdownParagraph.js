import { Typography } from '@mui/material';
import React from 'react';

export default function MarkdownParagraph({ children, ...props }) {
    return <Typography
        variant='body1'
        sx={{
            textIndent: '1em',
            textAlign: 'justify',
            marginBottom: '1em',
            fontSize: '110%',
        }}
    >
        {children}
    </Typography>;
}
