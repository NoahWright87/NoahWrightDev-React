import { Typography } from '@mui/material';
import React from 'react';

export default function MarkdownHeading({ children, ...props }) {
    // Modified from: https://gist.github.com/sobelk/16fe68ff5520b2d5e2b6d406e329e0de
    const level = Number(props.node.tagName.match(/h(\d)/)?.slice(1));
    if (level && children && typeof children[0] === "string") {
        const id = titleToId(children[0]);
        return <Typography
            variant={'h' + level}
            id={id}
        >
            {children}
        </Typography>;
    } else {
        console.log("TODO: Am I hitting this?  Why am I hitting this?");
        return React.createElement(props.node.tagName, props, children);
    }
}

export function titleToId(title) {
    return title.trim().replace(/[^a-zA-Z0-9]/g, "-").toLowerCase().replace(/^-+/, "");
}