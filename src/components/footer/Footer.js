import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box, Button, Link, Typography } from '@mui/material';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { contactOptions } from '../../data/contact';

export default function Footer() {
    return <footer>
        <Box
            sx={{
                // marginTop: 'auto',
                my: 0,
                width: '100%',
                minHeight: '50px',
                backgroundColor: 'primary.light',
                color: 'primary.contrastText',
                flexShrink: 0,
                flexDirection: 'column',
                display: 'flex',
                p: 0.5,
                bottom: 0,
                position: 'sticky',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flex: '1 0 auto',
                    justifyContent: 'center',
                }}
            >
                {contactOptions.map((linkInfo) => {
                    return <Button
                        key={linkInfo.label}
                        variant="contained"
                        href={linkInfo.url}
                        startIcon={linkInfo.icon}
                        color="info"
                        sx={{
                            mx: 1,
                        }}
                    >
                        {linkInfo.label}
                    </Button>;
                })}
            </Box>
            <Box
                sx={{
                    textAlign: 'center',
                    display: 'flex',
                    flex: '1 0 auto',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant='body2'
                    component={'p'}
                    color={'primary.contrastText'}
                >
                    Copyright {new Date().getFullYear()} Noah Wright.
                    I make money on affiliate links.&nbsp;
                    <Link
                        to="terms"
                        underline="hover"
                        color='inherit'
                        component={RouterLink}
                    >See terms for details.</Link>
                </Typography>
            </Box>
        </Box>
    </footer>;
}

// const footerLinkInfo = [
//     {
//         label: "Email",
//         url: "mailto:noah@noahwright.dev",
//         icon: <EmailIcon color='secondary.light' />,
//     },
//     {
//         label: "Twitter",
//         url: "https://twitter.com/noah_wright",
//         icon: <TwitterIcon color='secondary.light' />,
//     },
//     {
//         label: "GitHub",
//         url: "https://github.com/noahwright87",
//         icon: <GitHubIcon color='secondary.light' />,
//     },
//     {
//         label: "LinkedIn",
//         url: "https://www.linkedin.com/in/noah-wright-dev/",
//         icon: <LinkedInIcon color='secondary.light' />,
//     },
// ];