import { Box } from '@mui/system';
import React from 'react';

export default function MarkdownBreak({ children, ...props }) {
    // A box to use as a horizontal rule
    return <Box
        sx={{
            width: '100%',
            height: '2px',
            backgroundColor: 'primary.main',
            my: 1.5,
        }}
    >

    </Box>;
}
