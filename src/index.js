import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './animations.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Pages
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import NotFound from "./pages/404/NotFound";
import About from './pages/about/About';
import Post from "./pages/blog/Post";
import PostList from "./pages/blog/PostList";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Communicator from './pages/projects/Communicator';
import { Project } from './pages/projects/Project';
import ProjectList from './pages/projects/Projects';
import Resume from './pages/resume/Resume';
import Terms from './pages/terms/Terms';
import Test from './pages/test/Test';
import { darkTheme } from './Themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RootNode />

  </React.StrictMode>
);

function RootNode() {
  // TODO: Implement Google Analytics somewhere in here


  const [theme, setTheme] = React.useState(darkTheme);
  const themeSetter = (newTheme) => {
    if (newTheme) {
      setTheme(newTheme);
      // setTheme(deriveTheme(newTheme));

    }
  }

  return <>
    <ThemeProvider theme={theme}>
      {/* Wrap the app so it can call useLocation() */}
        <BrowserRouter>
          <AnimationTest setTheme={themeSetter} theme={theme} />
        </BrowserRouter>
      <Box
        sx={{
          position: 'fixed',
          // top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundColor: 'background.default',
        }}
      />
    </ThemeProvider>
  </>;
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function AppRoutes({setTheme}) {
  return <Routes>
    <Route path="/" 
    >
      <Route index element={<Home />} />
      <Route path="blog" element={<PostList />} />
      <Route path="blog/tag/:tag" element={<PostList />} />
      <Route path="blog/:id" element={<Post />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="projects" element={<ProjectList />} />
      <Route path="project/:id" element={<Project />} />
      <Route path="resume" element={<Resume />} />
      <Route path="terms" element={<Terms />} />
      <Route path="test" element={<Test setTheme={setTheme} />} />
      <Route path="comms" element={<Communicator />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>;
}

// TODO: Change this name -- but to what??
function AnimationTest({setTheme, theme}) {
  const location = useLocation();
  // const [mode, setMode] = React.useState<PaletteMode>('light');

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <>
    <CssBaseline />

    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      {/* <TopBar /> */}
      <Header setTheme={setTheme} theme={theme} />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          // backgroundColor: '#ddd',
        }}
        >
        {/* <TransitionGroup> */}
        {/* <SwitchTransition> */}
          {/* <CSSTransition
            key={location.key}
            classNames="fade"
            // timeout={500}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
            
          > */}
            <AppRoutes setTheme={setTheme} />
          {/* </CSSTransition> */}
        {/* </SwitchTransition> */}
        {/* </TransitionGroup> */}

      </Container>
      <Footer />
    </Box>

  </>;
}



// TODO: Check for "cheat codes"
function handleKeyDown(e) {
  // console.log(`Key pressed: ${e.keyCode}`);

  // if (e.keyCode === 37) {

  // } else if (e.keyCode === 39) {

  // }
}
