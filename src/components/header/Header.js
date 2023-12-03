
import ArticleIcon from '@mui/icons-material/Article';
import BuildIcon from '@mui/icons-material/Build';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';


import { FormControlLabel, Icon, SvgIcon, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import { darkTheme, darkThemeHighContrast, lightTheme, lightThemeHighContrast } from '../../Themes';
import { LogoButton } from '../logo/Logo';

const menuData = [
  {
    label: "Contact",
    link: "/contact",
    icon: <ContactPageIcon />,
  },
  {
    label: "Blog",
    link: "/blog",
    icon: <ArticleIcon />,
  },
  {
    label: "Projects",
    link: "/projects",
    icon: <BuildIcon />,
  },
  {
    label: "About",
    link: "/about",
    icon: <PersonIcon />,
  },
  {
    label: "Resume",
    link: "/resume",
    icon: <WorkIcon />,
  },
];

export default function Header({setTheme, theme}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [displayState, setDisplayState] = React.useState({
    isDark: false,
    isHighContrast: false,
    isXRay: false,
  });
  const handleDisplayState = (event) => {
    displayState[event.target.name] = event.target.checked;
    setDisplayState({
      ...displayState,
    });

    if (displayState.isDark) {
      if (displayState.isHighContrast) {
        setTheme(darkThemeHighContrast);
      } else {
        setTheme(darkTheme);
      }
    } else if (displayState.isHighContrast) {
      setTheme(lightThemeHighContrast);
    } else {
      setTheme(lightTheme);
    }
  };

  const navButtons = <>
    {menuData.map((menuItem) => (
      <Button
        variant="contained"
        color="secondary"
        to={menuItem.link}
        component={Link}
        sx={{
          display: 'flex',
          mx: 0.25,
        }}
      >
        {menuItem.icon}
        &nbsp;
        {menuItem.label}
      </Button>
    ))}
  </>;

  const navButtonsMenu = <>
    <IconButton
      size="large"
      aria-label="Menu with display options"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleOpenNavMenu}
      color="inherit"
      sx={{
        display: { xs: 'flex', md: 'none' },
      }}
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElNav}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElNav)}
      onClose={handleCloseNavMenu}
      autoFocus
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '300px',
        p: 1,
      }}
    >
      {/* {navButtons} */}
      {menuData.map((menuItem) => (
        <MenuItem
          key={menuItem.label}
          to={menuItem.link}
          component={Link}
          sx={{
            py: 1,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          {menuItem.icon}
          {/* &nbsp; */}
          {menuItem.label}
        </MenuItem>
      ))}
      {/* TODO: Implement light/dark color and high/low contrast */}
      {/* <FormControlLabel
        control={
          <Switch
            checked={displayState.isDark}
            onChange={handleDisplayState}
            name="isDark"
            color="primary"
          />
        }
        label={displayState.isDark ? "Dark" : "Light"}
      />
      <FormControlLabel
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        control={
          <Switch
            checked={displayState.isHighContrast}
            onChange={handleDisplayState}
            name="isHighContrast"
            color="primary"
          />
        }
        label={displayState.isHighContrast ? "High contrast" : "Low contrast"}
      /> */}
    </Menu>
  </>;

  

  return (
    <AppBar position="static">
      <Box
        sx={{
          backgroundColor: 'primary.main',
        }}
      >
        <Container>
          <Toolbar disableGutters>
            <LogoButton theme={theme} />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'flex-end',
              }}
            >
              {navButtons}
            </Box>

            <Box sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
            }}>
              {navButtonsMenu}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}

