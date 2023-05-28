import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";


const messages = [
    "Uh-oh!",
    "Whoops!",
    "Yikes!",
    "Oh no!",
    "Ay caramba!",
];

export default function NotFound() {
    return <MainContainer
        title="Page not found!"
        disableTitle
    >
        <Paper
            elevation={8}
            // Center the paper vertically and horizontally
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
                variant="h1"
            >
                {messages[Math.floor(Math.random() * messages.length)]}
            </Typography>
            <Typography
                variant="body"
            >
                The page you tried to reach doesn't exist.
            </Typography>
            <Button
                variant="contained"
                sx={{
                    my: 1,
                    py: 2,
                    width: '75%',
                }}
                component={Link}
                to="/"
            >
                
                Go home
            </Button>
            {/* TODO: Add image / emoji */}
        </Paper>
    </MainContainer>;
}
