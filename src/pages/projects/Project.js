import { Box, Button, Typography } from '@mui/material';
import { Link as RouterLink, useParams } from 'react-router-dom';
import MainContainer from '../../components/layout/MainContainer';
import SkillChitGroup from '../../components/skill_chit/SkillChit';
import { projectData } from './Projects';


export function Project() {
    const { id: id } = useParams();
    const project = projectData.find((project) => project.id === id);
    console.log("project", project);
    const ProjectHeader = <>
        <Box
            sx={{
                // TODO: Put this style in a separate file, use here and in Post.js
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
                width: '100%',
                backgroundColor: 'primary.dark',
                backgroundImage: `url(${project.headerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
                textShadow: '2px 2px 2px #000000',

            }}
        >
            <Typography
                variant="h1"
                sx={{
                    color: 'primary.contrastText',
                }}
            >
                {project.title}
            </Typography>
            <Typography
                variant="h2"
                sx={{
                    color: 'primary.contrastText',
                }}
            >
                {project.subtitle}
            </Typography>
        </Box>
    </>;

    const ProjectFooter = <>
        <Box
            sx={{
                backgroundColor: 'primary.light',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50px',
                width: '100%',
                p: 2,
            }}
        >
            <Button
                variant="contained"
                color="primary"
                to="/projects"
                component={RouterLink}
            >
                {/* TODO: Some sort of icon here */}
                Back to Projects
            </Button>
        </Box>
    </>;

    return <MainContainer
        title={project.title}
        banner={ProjectHeader}
        footer={ProjectFooter}
        disableTitle
    >
        <Box>
            {project.contentTop}
        </Box>
        <Box>
            {project.images.map((image) => {
                // TODO: Better formatting -- use carousel?
                return <>
                    <img src={image} alt={project.title} />
                    <div>{image.caption}</div>;
                </>
            })}
        </Box>
        <Box>
            {project.contentBottom}
        </Box>
        <Box>
            <SkillChitGroup skills={project.skills} />
        </Box>
        <Box>
            {project.links.map((link) => {
                return <>
                    <Button
                        variant="contained"
                        color="primary"
                        to={link.url}
                        component={RouterLink}
                    >
                        {link.icon} {link.title}        
                    </Button>        
                </>
            })}
        </Box>
    </MainContainer>;
}