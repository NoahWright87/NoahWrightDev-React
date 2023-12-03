import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, Typography, createSvgIcon, useTheme } from "@mui/material";
import { Container, alpha } from "@mui/system";
import { useEffect } from "react";


const nwSlashes = "NW";

export default function MainContainer(props) {
    let theme = useTheme();
    
    useEffect(() => {
        document.title=props.title ? `${nwSlashes} - ${props.title}` : nwSlashes
    }, []);

    return (<Box
        sx={props.sx}
    >
        {props.banner}
        <Container
            sx={{
                paddingTop: '10px',
                backgroundColor: 'background.paper',
                backgroundColor: alpha(theme.palette.background.paper, 0.50),
            }}
        >
            {!props.disableTitle
            && props.title
            && <Typography variant="h1">{props.title}</Typography>}
            {props.children}
        </Container>
        {props.footer}
        {/* TODO: Only show if not at the top of the page!! */}
        <Fab
            color="secondary"
            aria-label="Scroll back to top"
            size="small"
            sx={{
                position: 'fixed',
                bottom: 30,
                right: 5,
            }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            <KeyboardArrowUp />            
        </Fab>
    </Box>);
}
