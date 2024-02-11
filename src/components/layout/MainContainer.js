import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, Typography, createSvgIcon, useTheme } from "@mui/material";
import { Container, alpha } from "@mui/system";
import { useEffect, useState } from "react";


const nwSlashes = "NW";

export default function MainContainer(props) {
    let theme = useTheme();
    const [showScrollButton, setShowScrollButton] = useState(false);
    
    useEffect(() => {
        document.title=props.title ? `${nwSlashes} - ${props.title}` : nwSlashes;
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

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
        {showScrollButton && (
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
        )}
    </Box>);
}
