import { Paper, Typography } from '@mui/material';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownTldr({ children, ...props }) {
    return <>
        <Paper
            elevation={4}
            sx={{
                backgroundColor: 'info.main',
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
                {/* {children} */}
                <ReactMarkdown
                    children={children.join("")}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        // h2: MarkdownHeading,
                        // h3: MarkdownHeading,
                        // h4: MarkdownHeading,
                        // h5: MarkdownHeading,
                        // h6: MarkdownHeading,
                        // a: MarkdownLink,
                        // p: MarkdownParagraph,
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
