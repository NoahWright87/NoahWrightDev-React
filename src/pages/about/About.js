import React from 'react';
import { Avatar, Box, Container, Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";
import ChangingText from '../../components/changing-text/ChangingText';

export default function About() {
    let banner = <Container
        maxWidth={false}
        disableGutters
        sx={{
            backgroundColor: 'primary.light',
        }}
    >
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                flex: '1 0 auto',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    minHeight: 100,
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Box
                    sx={{
                        flex: '3 0 auto',
                        color: 'primary.contrastText',
                        p: '10px'
                    }}
                >
                    <Typography
                        variant="h1"
                        gutterBottom
                    >
                        Hi, I'm Noah! 👋
                    </Typography>
                    <Typography
                        variant="h3"
                    >
                    <ChangingText
                        texts={[
                            "Software Engineer",
                            "Air Force Veteran",
                            "Proud Husband and Father",
                            "Former Googler",
                        ]}
                        />
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    flex: '1 0 auto',
                    display: 'flex',
                    p: '10px',
                    alignItems: 'center',
                }}
            >
                <Avatar 
                    variant="circle"
                    src="images/noahwright.jpg"
                    alt="Photo of Noah Wright"
                    sx={{
                        height: '200px',
                        width: '200px',
                        marginLeft: 'auto',
                    }}
                />
            </Box>
        </Container>
    </Container>


    return <MainContainer
        title="About Noah Wright"
        disableTitle
        banner={banner}
    >
        <Paper
            elevation={8}
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
            <Typography variant="body1">
            I'm a software engineer with humble beginnings.  I got my first programming job by automating my way out of tedious computer work.
            I went from a temp employee to the start-up's first full-time software engineer, and it was there that I learned that code wasn't
            just what made my favorite video games work -- it was a tool for improving people's lives.
            </Typography>

            <Typography variant="body1">
            From there, my software career took a winding path through the Air Force, Google, and a variety of different industries.  Throughtout
            my journey, I've learned that the most important part of software isn't the code itself, but the people who use it.  My job exists to
            make <em>other</em> jobs easier, and I take great pride in that.  Every stop along my way, I try to adhere to the general rule:
            </Typography>
            <Paper
                elevation={4}
                sx={{
                    p: 2,
                    my: 1,
                    backgroundColor: "primary.dark",
                    color: "primary.contrastText",
                    width: "100%",
                    textAlign: "center",
                    verticalAlign: "middle",
                }}
            >
            <Typography
                variant="body1"
                sx={{
                    fontStyle: "italic",
                    fontSize: "1.5em",
                    m: "0",
                }}
                >
                <em>Leave the world better than you found it.</em>
            </Typography>
            </Paper>

            <Typography
                variant="body1"
            >
            I know I can't change the world, but I can at least tidy things up as I go.  To me, that means writing the best code I can, trying
            my best to deliver value to my customers, teaching my kids to avoid the mistakes I ran into, and treating the people around me with
            respect.
            </Typography>

            <Typography
                variant="body1"
            >
            If I sound like the kind of person you want to hear more from, check out
            some of <Link component={RouterLink} to="/blog">my blog posts</Link>.  
            There you will find stories
            of success and failure, life advice, software horror stories, and updates about what I'm up to.
            </Typography>

            <Typography
                variant="body1"
            >
            Got an opportunity you'd like to discuss?  Want to give some feedback about the site?  By all
            means, <Link component={RouterLink} to="/contact">get in touch</Link>.
            </Typography>

            <Typography
                variant="body1"
            >
            Want to know even more of my background?  Check out <Link component={RouterLink} to="/resume">my resume</Link>.
            </Typography>
        </Paper>
    </MainContainer>;
}