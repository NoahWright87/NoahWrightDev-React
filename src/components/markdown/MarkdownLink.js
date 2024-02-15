import { Link as RouterLink } from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link } from '@mui/material';
import React from 'react';
import InfoPopup from "../InfoPopup";


const affiliates = [
    'amazon.com',
    'amzn.to',
    'amzn.com',
];

export default function MarkdownLink({ children, ...props }) {
    // If HREF contains an affiliate link, add an indicator
    let affiliate = props.href && affiliates.some(affiliate => props.href.includes(affiliate));
    let external = props.href[0] !== "/";

    let linkDecorator = affiliate ? <InfoPopup info={<AdInfo />} children={<sup>Ad</sup>} />
    : external ? <sup><ExitToAppIcon fontSize='small' /></sup>
            : <></>;

    return <>
        <Link component={RouterLink} to={props.href} {...props}>
            {children}
        </Link>
        {linkDecorator}
    </>;
}

function AdInfo() {
    return <>
        Your purchases help support this site.  See <Link component={RouterLink} to="/terms">terms</Link> for details.
    </>;
}