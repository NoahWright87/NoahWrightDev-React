import TocIcon from '@mui/icons-material/Toc';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

export function TocFromMarkdown({ content }) {
    if (!content) return <></>;
    const titles = [];
    const headerRegex = /^#{1,6}.+/g
    content.split('\n').forEach(line => {
        let match = line.match(headerRegex);
        if (match) { titles.push(match[0]); }
    });

    return <FloatingToc titles={titles} />;
}




export function FloatingToc({titles}) {
    const [showToc, setShowToc] = useState(false);

    if (!titles || titles.length < 2) return <></>;
    return <>
        <Box
            sx={{
                float: 'right',
                padding: 0.25,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'end',
                justifyContent: 'center',
                position: 'sticky',
                top: '20vh',
                bottom: '20vh',
                overflowX: 'hidden',
            }}
        >
            <Button
                onClick={() => setShowToc(!showToc)}
                variant="contained"
                sx={{
                    position: 'relative',
                    top: '0',
                    right: '0%',
                }}
            >
                <TocIcon />
            </Button>
            <Box
                sx={{
                    float: 'right',
                    color: 'secondary.contrastText',
                    backgroundColor: 'secondary.main',
                    padding: 0.5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'sticky',
                    top: '20vh',
                    bottom: '20vh',
                    transition: 'transform 0.3s ease',
                    transform: showToc ? 'translateX(0)' : 'translateX(200%)',
                }}
            >
                {titles.map(title => (
                    FloatingTocEntry(title)
                ))}
            </Box>
        </Box>
    </>;
}
function FloatingTocEntry(markdown) {
    console.log(markdown);
    let title = markdown.replace(/^#+/, "").trim();
    let level = markdown.match(/^#+/) ? markdown.match(/^#+/)[0].length : 1;
    let id = titleToId(markdown);

    const handleClick = () => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <Button
            key={id}
            component='a'
            href={'#' + id}
            variant='contained'
            sx={{
                width: '100%',
                textAlign: 'left',
                flex: '1',
            }}
            onClick={handleClick}
        >
            {title}
        </Button>
    );
}

function titleToId(title) {
    return title.trim().replace(/[^a-zA-Z0-9]/g, "-").toLowerCase().replace(/^-+/, "");
}