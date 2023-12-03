import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { Link as RouterLink } from "react-router-dom";

import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TocIcon from '@mui/icons-material/Toc';
import { Button, Card, CardActionArea, Chip, Link, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { getPostContent } from '../../api/Blog';
import MainContainer from '../../components/layout/MainContainer';
import allPosts from '../../data/posts.json';
import MarkdownLink from '../../components/markdown/MarkdownLink';
import MarkdownParagraph from '../../components/markdown/MarkdownParagraph';
import MarkdownCodeBlock from '../../components/markdown/MarkdownCodeBlock';
import MarkdownHeading, { titleToId } from '../../components/markdown/MarkdownHeading';
import MarkdownBreak from '../../components/markdown/MarkdownBreak';
import MarkdownImage from '../../components/markdown/MarkdownImage';

export default function Post() {
    const { id } = useParams();
    const [content, setContent] = useState(null);

    // Get metadata from allPosts by id
    let i = allPosts.findIndex(post => post.path === id);
    let post = allPosts[i];

    let prevPost = allPosts[i - 1];
    let nextPost = allPosts[i + 1];

    let opacity = post.image ? 0.5 : 1.0;

    useEffect(() => {
        getPostContent(id).then(post => {
            setContent(post);
        });
    }, [id]);

    let banner = <>
    <Box
        sx={{
            width: '100vw',
            left: '0vw',
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundColor: 'primary.dark',
            backgroundPosition: 'center',
            // opacity: 0.5,// {opacity}, //todo: make this conditional on whether there's an image
            boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.5)',
            textShadow: '2px 2px 2px #000000',
        }}
    >
        <Box
            sx={{
                color: 'primary.contrastText',
                padding: 2,
                minHeight: '35vh',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography
                variant="h1"
                >
                {post.title}
            </Typography>
            <Typography
                variant="h3"
                >
                <ReactMarkdown children={post.subtitle} remarkPlugins={[remarkGfm]} />
            </Typography>
            <Typography
                variant="body1"
            >
                <CalendarMonthIcon fontSize='small' /> {post.date} | <AccessTimeFilledIcon fontSize='small' />  {readingTimeFor(post.wordCount)}-minute read
                {/* TODO: Updated date if != date */}
            </Typography>
        </Box>
    </Box>
    {markdownToC(content)}
    </>;

    let footer = <Box
        sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridTemplateAreas: `"left left middle right right"
            "left left middle right right"`
        }}
    >
        <Box
            sx={{
                gridArea: 'left',
            }}
        >
            {prevPost && <RelatedPostSnippet post={prevPost} />}
        </Box>
        <Box
            sx={{
                gridArea: 'right',
            }}
        >
            {nextPost && <RelatedPostSnippet post={nextPost} />}
        </Box>
        <Box
            sx={{
                gridArea: 'middle',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                
            }}
        >
            <Button
                to="/blog"
                component={RouterLink}
                variant="contained"
                color='secondary'
                display='flex'
            >
                See all posts
            </Button>
        </Box>
    </Box>

    return <MainContainer
        title={post.title}
        banner={banner}
        footer={footer}
        disableTitle
    >
        
        {content ? ( <>
            <Box
                sx={{
                    width: '100%',
                }}
            >
                {/* TODO: Put this somewhere common, reference from several places
                    Perhaps in the component directory?
                */}
                <ReactMarkdown
                    children={content}
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h2: MarkdownHeading,
                        h3: MarkdownHeading,
                        h4: MarkdownHeading,
                        h5: MarkdownHeading,
                        h6: MarkdownHeading,
                        a: MarkdownLink,
                        p: MarkdownParagraph,
                        code: MarkdownCodeBlock,
                        br: MarkdownBreak,
                        img: MarkdownImage,
                        // TODO: Add custom components
                        // a: ({node, ...props}) => <Link to={props.href}   {...props} />,
                        // hr: ({node, ...props}) => <MyFancyRule {...props} />
                    }}
                />
                {post.tags && post.tags.length > 0 && <Paper
                    elevation={3}
                    sx={{
                        width: '100%',
                        my: 2,
                        p: 1,
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="subtitle2">
                        Tags:
                    </Typography>
                    {post.tags.map(tag => <Chip
                        clickable
                        key={tag}
                        label={tag}
                        component={RouterLink}
                        to={'/blog/tag/' + tag}
                    />)}
                </Paper>}
            </Box>
        </> ) : (
            <p>Loading...</p>
            // TODO: Show a loading spinner
        )}
    </MainContainer>;
}

export function PostSnippet(post) {
    return <>
        <CardActionArea
            component={RouterLink}
            to={'/blog/' + post.path}
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
                    height: '100%',

                    backgroundImage: `url(${post.image})`,
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
                        padding: '10px',
                        width: '100%',
                    }}
                >
                    <Typography
                        variant='h3'
                    >
                        <ReactMarkdown children={post.title} remarkPlugins={[remarkGfm]} />
                    </Typography>
                    <Typography
                        variant="subtitle1"
                    >
                        <CalendarMonthIcon /> {post.date} | <AccessTimeFilledIcon /> {readingTimeFor(post.wordCount)}-minute read
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: '1.25rem',
                        }}
                    >
                        <ReactMarkdown children={post.snippet} remarkPlugins={[remarkGfm]} />
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            alignSelf: 'flex-end',
                        }}
                    >
                        {post.tags && post.tags.length > 0 && post.tags.map(tag => <Chip
                            clickable
                            key={tag}
                            label={tag}
                            component={RouterLink}
                            to={'/blog/tag/' + tag}
                            // TODO: This breaks if we're already on /blog!!
                            //  Either: figure out how to listen for updates to page's params *after* load or...
                            //          optionally take a function to run on click instead of a link, have it call filterByTag() on PostList.js
                        />)}
                    </Box>
                </Box>
            </Card>
        </CardActionArea>
                
    </>;
}

function RelatedPostSnippet(args) {
    let post = args.post;
    return <>
        <Card
            sx={{
                display: 'flex',
                p: 1,
            }}
        >
            <CardActionArea
                component={RouterLink}
                to={'/blog/' + post.path}
                sx={{
                    backgroundColor: 'primary.main',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography
                    variant='h4'
                >
                    <ReactMarkdown children={post.title} remarkPlugins={[remarkGfm]} />
                </Typography>
            </CardActionArea>
        </Card>
    </>;
}

function markdownToC(content) {
    if (!content) return <></>;
    const titles = [];
    const headerRegex = /^#{1,6}.+/g
    content.split('\n').forEach(line => {
        let match = line.match(headerRegex);
        if (match) { titles.push(match[0]); }
    });

    if (!titles || titles.length < 2) return <></>;
    {/* TODO: Smooth scrolling */}
    return <>
        <Box
            sx={{
                float: 'right',
                color: 'secondary.contrastText',
                backgroundColor: 'secondary.main',
                padding: 0.5,
                width: '30vw',
                right: '0',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'sticky',
                top: '20vh',
                bottom: '20vh',

            }}
        >
            <Typography
                variant="h4"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <TocIcon />Contents
            </Typography>
            {titles.map(title => (
                tocEntry(title)
            ))}
        </Box>
    </>;
}
function tocEntry(markdown) {
    let title = markdown.replace(/^#+/, "").trim();
    let level = markdown.match(/^#+/)[0].length;
    let id = titleToId(markdown);
    
    return <>
            <Button
                key={id}
                component='a'
                href={'#' + id}
                variant='contained'
                sx={{
                    width: '100%',
                    textAlign: 'left',
                    flex: '1',
                }}
            >
                {title}
            </Button>
    </>;
}

function readingTimeFor(words) {
    // TODO: Have different reading speeds that user can set that affect this calculation.
    const wpm = 225;
    return Math.ceil(words / wpm);
}


// Markdown components
// TODO: Move them to their own files in components folder




/*
TODO (for ToC and other things)
- Create a custom renderer for heading tags
    - Set an anchor tag with the id (generated from text)
    - Save those tags for the ToC to use
- Create a custom renderer for links
    - Use <Link> instead of <a>
    - Use something to indicate affiliate links??
        - Maybe look at the URL and figure it out automatically?
    - Use something to indicate external links??
    - For links to other posts, show a preview on hover??


*/