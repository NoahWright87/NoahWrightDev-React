import { Avatar, Box, Container, Link, Paper, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import MainContainer from "../../components/layout/MainContainer";

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
                        Hi, I'm Noah!
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
            <Typography variant="body1">
            I'm a software engineer, Air Force veteran, and proud husband and father.  I got into programming due to a love for video games,
            but realized early in my career that software has the capability of making people's lives better.  One of my first programming
            jobs was at a small place where I could see the effect of every line of code I wrote.  Sometimes a bug would grind business to a
            halt, but other days I could see my software taking the weight of some task off of one of the employees.  People ask what our
            purpose is in this world, but I think it's really simple:
            </Typography>
            <Typography
                sx={{
                    textAlign: "center",
                    fontStyle: "italic",
                    fontSize: "1.2em",
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                }}
            >
                {/* TODO: Have this appear more like a banner */}
                <em>Leave the world better than you found it.</em>
            </Typography>

            <Typography>
            I know I can't change the world, but I can at least tidy things up as I go.  To me, that means writing the best code I can, trying
            my best to deliver value to my customers, teaching my kids to avoid the mistakes I ran into, and treating the people around me with
            respect.
            </Typography>

            <Typography>
            If I sound like the kind of person you want to hear more from, check out
            <Link component={RouterLink} to="blog">my blog posts</Link>.  
            There you will find stories
            of success and failure, life advice, software horror stories, and updates about what I'm up to.
            </Typography>

            <Typography>
            Got an opportunity you'd like to discuss?  Want to give some feedback about the site?  By all means,
            <Link component={RouterLink} to="contact">get in touch</Link>.
            </Typography>

            <Typography>
            Want to know even more of my background?  Check out 
            <Link component={RouterLink} to="resume">my resume</Link>.
            </Typography>
        </Paper>
    </MainContainer>;
}