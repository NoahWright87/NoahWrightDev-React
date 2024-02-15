import { Paper, Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import MarkdownLink from './MarkdownLink';
import MarkdownParagraph from './MarkdownParagraph';

export default function MarkdownTldr({ children, ...props }) {
    return <>
        <Paper
            elevation={4}
            sx={{
                backgroundColor: 'info.main',
                p: 0,
                mx: 1,
            }}
        >
                                                                    <Typography
                                                                        variant='h4'
                                                                        sx={{
                                                                            backgroundColor: 'info.dark',
                                                                            p: 1,
                                                                        }}
                                                                    >
                                                                        TL;DR:
                                                                    </Typography>
            <Typography
                variant='body1'
                sx={{
                    lineHeight: 0.75,
                    px: 1,
                }}
            >
                <ReactMarkdown
                    children={children.join("")}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // h2: MarkdownHeading,
                        // h3: MarkdownHeading,
                        // h4: MarkdownHeading,
                        // h5: MarkdownHeading,
                        // h6: MarkdownHeading,
                        a: MarkdownLink,
                        p: MarkdownParagraph,
                        // code: MarkdownCodeBlock,
                        // br: MarkdownBreak,
                        // img: MarkdownImage,
                        // // TODO: Add custom components
                        // // a: ({node, ...props}) => <Link to={props.href}   {...props} />,
                        // // hr: ({node, ...props}) => <MyFancyRule {...props} />
                    }}
                />
            </Typography>
        </Paper>
    </>;
}
