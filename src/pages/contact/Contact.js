
import { Button, Paper, Typography } from "@mui/material";
import MainContainer from "../../components/layout/MainContainer";
import { contactOptions } from '../../data/contact';


export default function Contact() {
    return <MainContainer
        title="Contact me"
        disableTitle
        sx={{
            minHeight: '75vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 5,
        }}
    >
        <Paper
            elevation={8}
            color="primary"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                top: '25%',
                bottom: '25%',
                left: '25%',
                right: '25%',
                my: 4,
                p: 4,
            }}
            >
                <Typography
                    variant='h1'
                >
                    Contact me
                </Typography>
                {/* Loop through contact info, display as buttons */}
                {contactOptions.map((contactOption) => {
                    return <Button
                        key={contactOption.label}
                        variant="contained"
                        sx={{
                            my: 1,
                            py: 2,
                            width: '75%',
                        }}
                        component="a"
                        href={contactOption.url}
                    >
                            {contactOption.icon}
                            &nbsp;
                            {contactOption.label}
                        </Button>;
                })}
        </Paper>
    </MainContainer>;
}

// export const contactOptions = [
//     {
//         label: 'Email',
//         url: 'mailto:noah@noahwright.dev',
//         icon: <EmailIcon />,
//     },
//     {
//         label: 'LinkedIn',
//         url: 'https://www.linkedin.com/in/noah-wright-dev/',
//         icon: <LinkedInIcon />,
//     },
//     {
//         label: 'Twitter',
//         url: 'https://twitter.com/NoahWrightDev',
//         icon: <TwitterIcon />,
//     },
//     {
//         label: 'GitHub',
//         url: 'https://github.com/NoahWright87/',
//         icon: <GitHubIcon />,
//     },
// ];