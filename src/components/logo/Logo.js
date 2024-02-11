import { Avatar, Button, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const siteName = "NWDev";

export default function Logo({theme}) {

    return <Avatar
        alt={siteName}
        variant="square"
        src="/images/branding/nw-slashes.svg"

        sx={{
            mr: 1,
            width: "100px",
        }}
    />
}


export function LogoButton({theme}) {
    return <Button
        to="/"
        component={RouterLink}
    >
        <Logo theme={theme} />
    </Button>;
}