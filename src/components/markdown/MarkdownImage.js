import { Box } from '@mui/system';
import React from 'react';

export default function MarkdownImage({ children, ...props }) {
    return <Box>
        <img {...props}
            style={{
                display: 'block',
                margin: 'auto',
                alignContent: 'center',
            }} />
    </Box>;
}
