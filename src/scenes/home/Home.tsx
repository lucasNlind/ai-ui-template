import GithubIcon from '@mui/icons-material/GitHub';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Testimonials } from './data/testimonials';
import { PopularRepos } from './data/popular-repos';
import { CompanyLogos } from './data/company-logos';
import { Box, Button, Typography } from '@mui/material';
import { ColorMode } from '../../enums/color-mode.enum';
import { Fade, Grid, Menu, MenuItem, useTheme } from '@mui/material';

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleSelectRepo = () => {
    setAnchorEl(null);
    navigate('/ai-ui-template/chat');
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTestimonialIdx((previousTestimonialIdx) => {
        return (previousTestimonialIdx + 1) % Testimonials.length
      });
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        padding: '3rem 0',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          boxShadow: 1,
          width: '25rem',
          display: 'flex',
          borderRadius: 2,
          padding: '2vh 1vw',
          textAlign: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: theme.palette.background.paper
        }}
      >
        <Typography variant='h2'>🚢 Onboard AI</Typography>
        <Typography variant='caption' sx={{ m: '0.5rem 0' }}>Navigate unfamiliar codebases using AI.</Typography>
        <Box sx={{ display: 'inline-flex', justifyContent: 'center', mb: '0.5rem' }}>
          <Typography variant='body1' color={theme.palette.primary.main}><strong>Step 1:&nbsp;</strong></Typography>
          <Typography variant='body1'>Clone a GitHub repository</Typography>
        </Box>
        <Box sx={{ display: 'inline-flex', justifyContent: 'center' }}>
          <Typography variant='body1' color={theme.palette.primary.main}><strong>Step 2:&nbsp;</strong></Typography>
          <Typography variant='body1'>Ask questions to find your way around</Typography>
        </Box>
        <Box
          sx={{
            m: '1.5rem auto',
            width: '95%',
            display: 'flex',
            borderRadius: 2,
            flexDirection: 'column',
            backgroundColor: theme.palette.background.default,
          }}
          p={1}
        >
          <Typography sx={{ mb: '1rem' }} variant='caption'><em>Where do we put items in the user database?</em></Typography>
          <Typography sx={{ mb: '1rem' }} variant='caption'><em>How does authentication work?</em></Typography>
          <Typography variant='caption'><em>What does the processor module do?</em></Typography>
        </Box>
        <Box
          sx={{
            m: '0 auto',
            width: '95%',
            display: 'flex',
            borderRadius: 2,
            flexDirection: 'column',
            backgroundColor: theme.palette.background.default,
          }}
          p={2}
        >
          <Button variant='contained' onClick={handleClick}>Try a Popular Repo 👇</Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleSelectRepo}
            TransitionComponent={Fade}
            PaperProps={{
              style: {
                width: '20rem'
              }
            }}
          >
            {PopularRepos.map((popularRepo) => {
              return (
                <MenuItem onClick={() => handleSelectRepo()}>{popularRepo.name}</MenuItem>
              )
            })}
          </Menu>
          <Typography variant='caption' sx={{ m: '0.5rem 0' }}>or</Typography>
          <Button variant='contained' endIcon={<GithubIcon />}>Sign in with GitHub</Button>
          <Typography variant='subtitle2' sx={{ m: '0.5rem 0 0 0' }}>to use onboard with any repo</Typography>
          
        </Box>
      </Box>
      <Box sx={{ width: '18rem', display: 'inline-flex', justifyContent: 'space-between', mt: '2.5rem' }}>
          <Button variant='outlined'>Outlined Button</Button>
          <Button variant='outlined'>Outlined Button</Button>
      </Box>
      <Box
        sx={{
          mt: '2rem',
          width: '25rem',
          height: '10rem',
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        
        <Typography variant='body1' sx={{ mb: '0.5rem' }}><em>"{Testimonials[testimonialIdx].message}"</em></Typography>
        <Typography variant='body1' sx={{ mt: '0.5rem' }}><strong>{Testimonials[testimonialIdx].author}</strong></Typography>
        <Typography variant='subtitle2'>
          {Testimonials[testimonialIdx].position}
          ,&nbsp;
          {Testimonials[testimonialIdx].company}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant='h3' sx={{ mt: '2rem', mb: '2rem' }}>Loved by devs at</Typography>
        <Grid container sx={{ justifyContent: 'center' }}>
          {CompanyLogos.map((companyLogo) => {
            return (
              <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', p: '4rem 2rem' }}>
                <img
                  src={
                    theme.palette.mode === ColorMode.DARK && companyLogo.srcDarkMode !== undefined 
                      ? companyLogo.srcDarkMode 
                      : companyLogo.src
                  } 
                  style={{ height: companyLogo.height }}
                  alt={companyLogo.alt}
                />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
