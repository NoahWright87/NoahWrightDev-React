import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MarkdownQuote from './MarkdownQuote';
import MarkdownTldr from './MarkdownTldr';
import MarkdownCodeInline from './MarkdownCodeInline';

export default function MarkdownCodeBlock({ children, ...props }) {
    // Extract language from className
    let language = props?.className?.slice(9) ?? "";
    let inline = props.inline ?? false;

    console.log("props", props);
    console.log("children", children);

    switch (language) {
        case 'quote': return <MarkdownQuote {...props}>{children}</MarkdownQuote>;
        case 'tldr': return <MarkdownTldr {...props}>{children}</MarkdownTldr>;
        // TODO: Make the default have a colored box around it -- maybe put it on Paper?
        default:
            if (inline) {
                console.log("Inline code block");
                return <MarkdownCodeInline {...props}>{children}</MarkdownCodeInline>;
            } else {
                return <>
                    <Box
                        sx={{
                            backgroundColor: 'info.light',
                            p: 1,
                            mx: 1,
                        }}
                    >
                        <Typography
                            variant='h4'
                        >
                            {language}
                        </Typography>
                        {children}
                    </Box>
                </>;
            }
    }

}
