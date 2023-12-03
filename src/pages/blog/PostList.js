import { Autocomplete, Box, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllTags, getPosts } from "../../api/Blog";
import { AnimatedCarousel } from "../../components/carousel/AnimatedCarousel";
import MainContainer from "../../components/layout/MainContainer";
import { PostSnippet } from "./Post";

const allTags = getAllTags();


export default function PostList() {
    const { tag } = useParams();
    const [query, setQuery] = useState({
        searchText: '',
        tagsFilter: tag ? [tag] : [],
    });
    const queryHandler = e => {
        setQuery({...query, [e.target.name]: e.target.value});
     }

    let posts = getPosts(query.searchText, query.tagsFilter)?.map(post =>
        <Paper
            sx={{
                my: 2,
                height: '300px',
            }}
        >
            <PostSnippet {...post} key={post.path}  />
        </Paper>
    )

    return <MainContainer
        title="Blog posts"
    >
        <Box
            sx={{
                padding: '0px',
                display: 'flex',
                flexDirection: 'row',
                
            }}
            component="form"
            noValidate
            autoComplete="off"
        >
            <TextField
                name="searchText"
                value={query.searchText}
                label="Search"
                variant="standard"
                sx={{
                    display: 'flex',
                    flex: '1 0 auto',
                    width: '45%',
                    margin: '10px',
                }}
                onChange={(event) => {setQuery({...query, searchText: event.target.value})}}
            />

            <Autocomplete 
                value={query.tagsFilter}
                options={allTags}
                multiple
                disableCloseOnSelect
                sx={{
                    display: 'flex',
                    flex: '1 0 auto',
                    width: '45%',
                    margin: '10px',
                }}
                onChange={(event, newValue) => {
                    setQuery({...query, tagsFilter: newValue});
                }}
                renderInput={(params) =>
                    <TextField {...params}
                        label="Tags"
                        variant="standard"
                />}
            />
        </Box>
        {posts}
    </MainContainer>;
}

export function RecentPosts() {
    let posts = getPosts().slice(0, 3)
    .map(post =>
        <PostSnippet {...post} key={post.path}  />
    );

    return <>
        <AnimatedCarousel
            title="Recent Posts"
            linkText="View all"
            linkUrl="/blog"
            items={posts}
            height={"300px"}
            width={'100%'}
            className = 'fade'
            autoCycle
        />
    </>;
}


let searchInput = null;
let tagInput = null;
function search(input) {
    searchInput = input;
}
function filterByTag(tags) {
    tagInput = tags;
    getPosts(searchInput, tagInput)
}
