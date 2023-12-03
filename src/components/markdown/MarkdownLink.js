import { Link as RouterLink } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from '@mui/material';
import React from 'react';


const affiliates = [
    'amazon.com',
    'amzn.to',
    'amzn.com',
];

export default function MarkdownLink({ children, ...props }) {
    // If HREF contains an affiliate link, add an indicator
    let affiliate = props.href && affiliates.some(affiliate => props.href.includes(affiliate));
    let external = props.href[0] !== "/";

    // TODO: Create real affiliate warning -- maybe a pop-up description with link for more info?
    let linkDecorator = affiliate ? <sup>Ad</sup>
        : external ? <sup><ExitToAppIcon fontSize='small' /></sup>
            : <></>;

    return <>
        <Link component={RouterLink} to={props.href} {...props}>
            {children}
        </Link>
        {linkDecorator}
        {/* &nbsp; */}
    </>;
}
