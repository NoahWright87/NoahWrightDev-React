import { Avatar, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MainContainer from "../../components/layout/MainContainer";
import { RecentPosts } from "../blog/PostList";
import { ProjectCarousel } from "../projects/Projects";
import InfoPopupNew from "../../components/InfoPopup";

const textToRepeat = "This is a sentence that will get repeated to make lots of text. ";

export default function Home() {
    // TODO: Consider turning this banner into a component within MainContainer??
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
                        Welcome!
                    </Typography>
                    <Typography
                        variant="h3"
                    >
                        I'm Noah Wright, and I'm a software engineer.
                        This is my little slice of the internet where
                        I share the things I know while trying to
                        learn in public.
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    flex: '1 0 auto',
                    display: 'flex',
                    p: '10px',
                    alignItems: 'center',
                    justifyContent: 'flex-end', // Add this line to right-align the content
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
        title="Home"
        banner={banner}
        disableTitle
    >
        <Box
            sx={{
                py: 1,
            }}
        >
            <RecentPosts />

        </Box>
        <Box
            sx={{
                py: 1,
            }}
        >
            <ProjectCarousel />
        </Box>
    </MainContainer>;
}
