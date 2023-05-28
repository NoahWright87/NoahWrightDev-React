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

// TODO: Make links a better color (or find out why they aren't a good color already)
//    FYI: It looks bad with <a> and <Link> tags, in or out of <Typography>  :(
export const lightTheme = deriveTheme(createTheme({
  palette: {
    mode: 'light',
    // primary: {
    //   main: red[200],
    // },
    contrastThreshold: 2,
  },
}));
export const darkTheme = deriveTheme(createTheme({
  palette: {
    mode: 'dark',
    // primary: {
    //   main: red[900], //light
    //   // main: "#a30202",
    // },
    // secondary: {
    //   main: red[800],
    //   // main: "#00c9c3",
    // },
    // info: {
    //   main: yellow[800],
    // },
    // success: {
    // },
    // warning: {
    // },
    // error: {
    // },
    // background: {
    //   default: '#1f1f1f',
    //   paper: '#2b2b2b',
    //   // default: '#fcf8a2',
    //   // paper: '#ffe7a3',

    // },
    contrastThreshold: 2,
  },
}));
export const lightThemeHighContrast = createTheme({
  // ...lightTheme,
  // palette: {
  //   ...lightTheme.palette,
  //   contrastThreshold: 4.5,
  // }
  palette: {
    mode: 'light',
    // primary: { main: red[200] },
    contrastThreshold: 4.5,
  }
});
export const darkThemeHighContrast = createTheme({
  // ...darkTheme,
  // palette: {
  //   ...darkTheme.palette,
  //   contrastThreshold: 4.5,
  // }
  palette: {
    mode: 'dark',
    // primary: { main: red[900] },
    contrastThreshold: 4.5,
  }
});
    
// const baseTheme = createTheme({
  // palette: {
  //   mode: 'dark',
  //   primary: {
  //     main: orange[800], //light
  //     // main: "#a30202",
  //   },
  //   secondary: {
  //     main: red[800],
  //     // main: "#00c9c3",
  //   },
  //   info: {
  //     main: yellow[800],
  //   },
  //   // success: {
  //   // },
  //   // warning: {
  //   // },
  //   // error: {
  //   // },
  //   background: {
  //     default: '#1f1f1f',
  //     paper: '#2b2b2b',
  //     // default: '#fcf8a2',
  //     // paper: '#ffe7a3',

  //   },
  // },
//   typography: {
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
//   },
// });
// baseTheme.components = {
//   MuiCssBaseline: {
//     styleOverrides: `
//       /* width */
//       ::-webkit-scrollbar {
//         width: 10px;
//       }

//       /* Track */
//       ::-webkit-scrollbar-track {
//         background: ${baseTheme.palette.background.default};
//       }

//       /* Handle */
//       ::-webkit-scrollbar-thumb {
//         background: ${baseTheme.palette.primary.main};
//       }

//       /* Handle on hover */
//       ::-webkit-scrollbar-thumb:hover {
//         background: ${baseTheme.palette.primary.light};
//       }
//     `,
//   },
//   MuiMenu: {
//     styleOverrides: {
//       list: {
//         color: baseTheme.palette.primary.contrastText,
//         backgroundColor: baseTheme.palette.secondary.main,
//       },
//     },
//   },
// }
// const themeTypography = {
//   h1: {
//     fontSize: '2.5rem',
//   },
//   h2: {
//     fontSize: '2rem',
//   },
//   h3: {
//     fontSize: '1.5rem',
//   },
//   h4: {
//     fontSize: '1.25rem',
//   },
//   h5: {
//     fontSize: '1rem',
//   },
//   h6: {
//     fontSize: '0.75rem',
//   },
//   body1: {
//     borderSpacing: 3,
//     textIndent: '2em',
//     marginBottom: '1em',
//   }
// };
// const themeComponents = {
//   MuiCssBaseline: {
//     styleOverrides: `
//       /* width */
//       ::-webkit-scrollbar {
//         width: 10px;
//       }

//       /* Track */
//       ::-webkit-scrollbar-track {
//         background: ${theme.palette.background.default};
//       }

//       /* Handle */
//       ::-webkit-scrollbar-thumb {
//         background: ${theme.palette.primary.main};
//       }

//       /* Handle on hover */
//       ::-webkit-scrollbar-thumb:hover {
//         background: ${theme.palette.primary.light};
//       }
//     `,
//   },
//   MuiMenu: {
//     styleOverrides: {
//       list: {
//         color: theme.palette.primary.contrastText,
//         backgroundColor: theme.palette.secondary.main,
//       },
//     },
//   },
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RootNode />

  </React.StrictMode>
);

function RootNode() {
  // TODO: Implement Google Analytics somewhere in here


  const [theme, setTheme] = React.useState(darkTheme);
  // setTheme(theme);
  const themeSetter = (newTheme) => {
    if (newTheme) {
      setTheme(deriveTheme(newTheme));
    }
  }

  return <>
    <ThemeProvider theme={theme}>
      {/* Wrap the app so it can call useLocation() */}
        <BrowserRouter>
          <AnimationTest setTheme={themeSetter} />
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
          // background: "linear-gradient(theme.palette.background.default, yellow)",
          // backgroundColor: "linear-gradient(theme.palette.primary.main, red)",
          // backgroundColor: 'primary.light',
          backgroundColor: 'background.default',
          // Background gradient that fades from palette's background to palette's primary
          // background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.primary.light})`,
          // background: `linear-gradient(to bottom, background.default, background.default, background.default, primary.light)`,
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
function AnimationTest({setTheme}) {
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
      <Header setTheme={setTheme} />
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

function deriveTheme(theme) {
  return createTheme({
    ...theme,
    typography: {
      h1: {
        fontSize: '2.5rem',
      },
      h2: {
        fontSize: '2rem',
      },
      h3: {
        fontSize: '1.5rem',
      },
      h4: {
        fontSize: '1.25rem',
      },
      h5: {
        fontSize: '1rem',
      },
      h6: {
        fontSize: '0.75rem',
      },
      body1: {
        borderSpacing: 3,
        marginBottom: '1em',
      }
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          /* width */
          ::-webkit-scrollbar {
            width: 10px;
          }
    
          /* Track */
          ::-webkit-scrollbar-track {
            background: ${theme.palette.background.default};
          }
    
          /* Handle */
          ::-webkit-scrollbar-thumb {
            background: ${theme.palette.primary.main};
          }
    
          /* Handle on hover */
          ::-webkit-scrollbar-thumb:hover {
            background: ${theme.palette.primary.light};
          }
        `,
      },
      MuiMenu: {
        styleOverrides: {
          list: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },
    },
  });

  // theme.typography = {
  //   h1: {
  //     fontSize: '2.5rem',
  //   },
  //   h2: {
  //     fontSize: '2rem',
  //   },
  //   h3: {
  //     fontSize: '1.5rem',
  //   },
  //   h4: {
  //     fontSize: '1.25rem',
  //   },
  //   h5: {
  //     fontSize: '1rem',
  //   },
  //   h6: {
  //     fontSize: '0.75rem',
  //   },
  //   body1: {
  //     borderSpacing: 3,
  //     textIndent: '2em',
  //     marginBottom: '1em',
  //   }
  // };
  // theme.components = {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //       /* width */
  //       ::-webkit-scrollbar {
  //         width: 10px;
  //       }
  
  //       /* Track */
  //       ::-webkit-scrollbar-track {
  //         background: ${theme.palette.background.default};
  //       }
  
  //       /* Handle */
  //       ::-webkit-scrollbar-thumb {
  //         background: ${theme.palette.primary.main};
  //       }
  
  //       /* Handle on hover */
  //       ::-webkit-scrollbar-thumb:hover {
  //         background: ${theme.palette.primary.light};
  //       }
  //     `,
  //   },
  //   MuiMenu: {
  //     styleOverrides: {
  //       list: {
  //         color: theme.palette.primary.contrastText,
  //         backgroundColor: theme.palette.secondary.main,
  //       },
  //     },
  //   },
  // };
}

// TODO: Check for "cheat codes"
function handleKeyDown(e) {
  // console.log(`Key pressed: ${e.keyCode}`);

  // if (e.keyCode === 37) {

  // } else if (e.keyCode === 39) {

  // }
}
