import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

// TODOs:
//  - Image options: side vs background
//  - Built-in "See all" button

export function AnimatedCarousel(props) {
  let title = props.title;
  let linkText = props.linkText;
  let linkUrl = props.linkUrl;
  let bottomLink;
  if (linkText && linkUrl) {
    bottomLink = <Button
      variant="contained"
      component={Link}
      to={linkUrl}
    >
      {linkText}
    </Button>;
  }
  let items = props.items;
  let width = props.width;
  let height = props.height;
  let looped = props.looped ?? true;
  let autoCycle = props.autoCycle ?? false;
  let autoCycleTime = props.autoCycleTime ?? 5000;

  const [isInteracting, setIsInteracting] = React.useState(false);

  React.useEffect(() => {
    if (autoCycle && !isInteracting) {
      const interval = setInterval(() => {
        handleNext();
      }, autoCycleTime);
      return () => clearInterval(interval);
    }
  }, [isInteracting]);

  const handleMouseEnter = () => {
    setIsInteracting(true);
  };

  const handleMouseLeave = () => {
    setIsInteracting(false);
  };

  const theme = useTheme();
  const [activeItem, setActiveItem] = React.useState(0);
  const maxItems = items.length;

  const handleNext = () => {
    setActiveItem((prevActiveStep) => (prevActiveStep + 1) % maxItems);
  };

  const handleBack = () => {
    setActiveItem((prevActiveStep) => (prevActiveStep - 1 + maxItems) % maxItems);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        // p: 1,
        my: 2,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Typography
        variant='h1'
        sx={{
          p: 1,
          justifyContent: 'space-between',
          display: 'flex',
        }}
      >
        {title}
        {linkText && linkUrl && <Button
          variant="contained"
          component={Link}
          to={linkUrl}
        >
          {linkText}
        </Button>}
      </Typography>

      <Box
        sx={{
          maxWidth: {width},
          flexGrow: 1,
          height: "100%",
        }}
      >
        <SwitchTransition>
          <CSSTransition
            key={activeItem}
            classNames={props.className || "fall"}
            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          >
            <Box
              sx={{
                  height: {height},
              }}
            >
              {items[activeItem]}
            </Box>
          </CSSTransition>
        </SwitchTransition>

        <MobileStepper
          variant="dots"
          steps={maxItems}
          position="static"
          activeStep={activeItem}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={!looped && activeItem === maxItems - 1}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={!looped && activeItem === 0}>
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Previous
            </Button>
          }
        />
      </Box>
    </Paper>
  );
}
