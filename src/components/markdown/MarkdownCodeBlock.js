import { Paper, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import MarkdownQuote from './MarkdownQuote';
import MarkdownTldr from './MarkdownTldr';
import MarkdownCodeInline from './MarkdownCodeInline';
import { CopyAll } from '@mui/icons-material';

export default function MarkdownCodeBlock({ children, ...props }) {
    // Extract language from className
    let language = props?.className?.slice(9) ?? "";
    let inline = props.inline ?? false;
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setIsCopied(true);
    };

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
                    <Paper
                        elevation={4}
                        sx={{
                            backgroundColor: 'info.light',
                            p: 0,
                            mx: 1,
                            position: 'relative',
                        }}
                    >
                        {/* <Typography
                            variant='h4'
                            sx={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                p: 0.5,
                                textAlign: 'left',
                                fontStyle: 'italic',
                            }}
                        >
                            {language}
                        </Typography> */}
                        {language && (
                            <Typography
                                variant='h4'
                                sx={{
                                    backgroundColor: 'info.dark',
                                    p: 1,
                                }}
                            >
                                {language}
                            </Typography>
                        )}
                        <Box
                            sx={{ 
                                position: 'relative', 
                                px: 1,
                            }}
                        >
                            {children}
                        </Box>
                        <Button
                            variant="contained"
                            onClick={handleCopy}
                            sx={{ 
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                my: 0.25,
                                mx: 0.5,
                            }}
                        >
                            {/* {isCopied ? 'Copied!' : 'Copy'} */}
                            <CopyAll />
                        </Button>
                    </Paper>
                </>;
            }
    }
}
