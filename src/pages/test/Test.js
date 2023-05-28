import { Box, Button, Card, createTheme, Grid, Paper, ThemeProvider, Typography } from "@mui/material";
import { blue, deepOrange, green, orange, red } from "@mui/material/colors";
import { useState } from "react";
import MainContainer from "../../components/layout/MainContainer";

// const typography = {
//     h1: {
//       fontSize: '2.5rem',
//     },
//     h2: {
//       fontSize: '2rem',
//     },
//     h3: {
//       fontSize: '1.5rem',
//     },
//     h4: {
//       fontSize: '1.25rem',
//     },
//     h5: {
//       fontSize: '1rem',
//     },
//     h6: {
//       fontSize: '0.75rem',
//     },
//     body1: {
//       borderSpacing: 3,
//       textIndent: '2em',
//       marginBottom: '1em',
//     }
// };
const themes = [
    // // AI suggested palettes
    // createTheme({
    //     palette: {
    //         primary: { main: '#FFA500', },
    //         secondary: { main: '#FFC107', },
    //         info: { main: '#2196F3', },
    //         success: { main: '#4CAF50', },
    //         warning: { main: '#FFC107', },
    //         error: { main: '#D32F2F', },
    //         background: { default: '#F5F5F5', },
    //     },
    // }),
    // createTheme({
    //     palette: {
    //         primary: { main: '#FF8C00', },
    //         secondary: { main: '#FFD700', },
    //         info: { main: '#00BFFF', },
    //         success: { main: '#008000', },
    //         warning: { main: '#FFD700', },
    //         error: { main: '#8B0000', },
    //         background: { default: '#EFEFEF', },
    //     },
    // }),
    // createTheme({
    //     palette: {
    //         primary: { main: '#FF6347', },
    //         secondary: { main: '#FFA07A', },
    //         info: { main: '#87CEEB', },
    //         success: { main: '#2E8B57', },
    //         warning: { main: '#FFA07A', },
    //         error: { main: '#FF1493', },
    //         background: { default: '#F8F8FF', },
    //     },
    // }),
    createTheme({
        palette: {
            primary: { main: red[800], },
            secondary: { main: red[200], },
        },
    }),
    createTheme({
        palette: {
            mode: 'dark',
            primary: { main: red[800], },
            secondary: { main: red[200], },
        },
    }),
    createTheme({
        palette: {
            primary: { main: green[800], },
            secondary: { main: green[200], },
        },
    }),
    createTheme({
        palette: {
            mode: 'dark',
            primary: { main: green[800], },
            secondary: { main: green[200], },
        },
    }),
    createTheme({
        palette: {
            primary: { main: blue[800], },
            secondary: { main: blue[200], },
        },
    }),
    createTheme({
        palette: {
            mode: 'dark',
            primary: { main: blue[800], },
            secondary: { main: blue[200], },
        },
    }),
    createTheme({
        palette: {
            primary: { main: red[800], },
            secondary: { main: orange[400], },
        },
    }),
    createTheme({
        palette: {
            mode: 'dark',
            primary: { main: red[800], },
            secondary: { main: orange[400], },
        },
    }),
    createTheme({
        palette: {
            primary: { main: orange[800], },
            secondary: { main: red[600], },
            background: { 
                default: orange[100],
                paper: orange[200],
            },
        },
    }),
    createTheme({
        palette: {
            mode: 'dark',
            primary: { main: orange[800], },
            secondary: { main: red[600], },
            background: { 
                default: "#873701",
                paper: "#4f2001",
            },
        },
    }),
];

export default function Test({setTheme}) {
    const categories = ["primary", "secondary", "info", "success", "warning", "error"];
    const shades = ["light", "main", "dark"];
    const exampleText = "Lorum ipsum dolor sit amet and all than other stuff";

    return <>
        <MainContainer
            title="Test"
        >
            <Box
                sx={{
                    backgroundColor: 'grey',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}
            >
                {themes.map((t) => {return <>
                    <Button
                        variant="contained"
                        // color={t.palette.primary.main}
                        onClick={() => {
                            // setTheme(t);
                            if (setTheme) { setTheme(t); }
                            // else { setTheme(t); }
                        }}
                    >
                        {t.palette.primary.main}
                        {/* Change to {theme.name} */}
                    </Button>
                    </>
                })}
            </Box>

            {/* <ThemeProvider
                theme={theme}
            > */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    width: '100%',
                    height: '50vh',
                    overflow: 'wrap',
                }}
            >
                {categories.map((category) => {
                    return <>
                        
                        <Paper
                            elevation={8}
                            sx={{
                                backgroundColor: 'pink',
                                minHeight: '40',
                                width: '400px',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flex: '1 1 0',
                            }}
                        >
                            <Card
                                sx={{
                                    // backgroundColor: `${category}.main`,
                                    width: '100%',
                                    // height: '200px',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >

                            <Typography variant="h1"
                                sx={{
                                    // color: 'primary.contrastText',
                                }}
                            >
                                {category}
                            </Typography>
                            <Typography variant="h3"
                                sx={{
                                    color: 'primary.contrastText',
                                }}
                            >
                                {exampleText}
                            </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                {shades.map((shade) => {
                                    return <Box
                                        sx={{
                                            backgroundColor: `${category}.${shade}`,
                                            width: '100%',
                                            minHeight: '10vh',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="h1">{category}.{shade}</Typography>
                                    </Box>;
                                })}
                                </Box>
                            </Card>

                        </Paper>
                    </>;
                })}
            </Box>

            {/* </ThemeProvider> */}
        </MainContainer>
    </>;
}
