import { Box, Button, Card, CardActionArea, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { AnimatedCarousel } from '../../components/carousel/AnimatedCarousel';
import MainContainer from '../../components/layout/MainContainer';
import SkillChitGroup, { SkillOptions } from '../../components/skill_chit/SkillChit';

export default function ProjectList() {
    return <MainContainer
        title="Projects"
    >
        {projectData.map((project) => {
            return <ProjectSnippet {...project} />;
        })}
    </MainContainer>;
}

export function ProjectSnippet(project) {
    return <>
    <CardActionArea
        component={RouterLink}
        to={'/project/' + project.id}
        sx={{
            width: '100%',
            height: '100%',
        }}
    >
        <Card
            variant='outlined'
            sx={{
                display: 'flex',
                flexDirection: 'row',
                // minHeight: '400px',
                height: '100%',

                backgroundImage: `url(${project.headerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.75)',
                textShadow: '2px 2px 2px #000000',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 2,
                    width: '100%',
                    // fontSize: '1.5rem',
                }}
            >
                <Typography
                    variant='h2'
                >
                    {project.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: '1.5rem',
                    }}
                >
                    {project.snippet}
                </Typography>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        right: 10,
                    }}
                >
                    <SkillChitGroup skills={project.skills} />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 10,
                        left: 10,
                    }}
                >
                    {project.links.map((link, index) => (
                        <Button key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.text}
                        </Button>
                    ))}
                </Box>
                
            </Box>
        </Card>
    </CardActionArea>
            
    </>;
}
// TODO: Don't define this here.  Put it in the Home.js file.
//       Instead, define ProjectCarouselItem here, and pass it to the Carousel component.
// TODO: Better formatting.
export function ProjectCarousel() {
    let projectSnippets = projectData.slice(0, 3).map((project) => {
        return <ProjectSnippet {...project} key={project.id} />;
    });


    return <>
        <AnimatedCarousel
            title="Projects"
            linkText="View all"
            linkUrl="/projects"
            items={projectSnippets}
            height={"200px"}
            width={'100%'}
            className = 'fade'
            autoCycle
        />
    </>;
}

/*
TODO:
    - Have a preview image to use in carousel (as background)
        - Can also use as header image (like blog posts)
    - Have multiple images to show on project page (esp. for non-web stuff)
    - Add "Noah Wright dev site" as a project
    - Have a boolean "isFeatured" property that determines what's on the homepage
        - Maybe have a "featured" property that's an array of featured projects
        - Or have a projectType that is "featured", "personal", "professional", etc.
        - Basically just want a way to separate mini-projects (like my Azure Dad Jokes)
            from larger projects.
    - Need snippet and full description (for project page)
*/
export const projectData= [
    // TODO: Put correct info here
    {
        id: 'games-done-wright',
        title: "Games Done Wright",
        subtitle: "TODO: Subtitle. ".repeat(3),
        snippet: "My itch.io page where I've posted a few little games I made in Unity",
        headerImage: "/images/GamesDoneWrightLogo.png",
        images: [
            {
                src: "/images/placeholder.png",
                alt: "TODO: img alt",
                caption: "TODO: img caption",
            },
        ],
        links: [
            {
                text: "View on itch.io",
                url: "https://gamesdonewright.itch.io/",
                icon: null,
            }
        ],
        skills: [
            SkillOptions.Unity,
            SkillOptions.CSharp,
        ],
        contentTop: <div>TODO: Add content up top.  {"lorum ipsum delorum ".repeat(30)}</div>,
        contentBottom: <div>TODO: Add content down bottom  {"lorum ipsum delorum ".repeat(30)}</div>,
    },
    {
        id: 'lets-make-a-program',
        title: "Let's Make a Program",
        subtitle: "lorum ipsum delorum ".repeat(3),
        snippet: "My other blog site, where I post tutorials for new programmers and my learning journey in new technologies.",
        headerImage: null,
        images: [
            {
                src: "/images/placeholder.png",
                alt: "TODO: img alt",
                caption: "TODO: img caption",
            },
        ],
        links: [
            {
                text: "View site",
                url: "https://letsmakeaprogram.com/",
                icon: null,
            },
        ],
        skills: [
            SkillOptions.CSharp,
        ],
        contentTop: <div>TODO: Add content up top.  {"lorum ipsum delorum ".repeat(30)}</div>,
        contentBottom: <div>TODO: Add content down bottom  {"lorum ipsum delorum ".repeat(30)}</div>,
    },
    // TODO: Entry for this site
    // TODO: Add more projects later
];


const gameDownWrightContent = <>

</>;

const lmapContent = <>

</>;

const noahWrightDevSiteContent = <>

</>;