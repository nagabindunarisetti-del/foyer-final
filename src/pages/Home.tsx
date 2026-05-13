import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box>
     
      <Box
        sx={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          bgcolor: '#f8f9fa',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: '700px', mx: 'auto', textAlign: 'center' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
                mb: 2,
              }}
            >
              Real food from real kitchens, <span style={{ color: '#106ebe' }}>made with love</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                lineHeight: 1.8,
                mb: 4,
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Foyer is the home of home-cooks — bringing wholesome, hygienic, mom-style meals to your door. 
              Discover authentic flavors prepared in clean home kitchens — perfect for daily meals, weekly tiffins, 
              or special occasions.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                onClick={() => navigate('/')}
                sx={{
                  bgcolor: '#106ebe',
                  borderRadius: 3,
                  textTransform: 'none',
                  px: 4,
                  py: 1,
                  '&:hover': { bgcolor: '#0a58a1' },
                }}
              >
                Order Now
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate('/send-items')}
                sx={{
                  borderColor: '#106ebe',
                  color: '#106ebe',
                  borderRadius: 3,
                  textTransform: 'none',
                  px: 4,
                  py: 1,
                }}
              >
                Send Items
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: '#106ebe',
                  color: '#106ebe',
                  borderRadius: 3,
                  textTransform: 'none',
                  px: 4,
                  py: 1,
                }}
              >
                Schedule Delivery
              </Button>
            </Box>

            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                letterSpacing: 1,
                color: '#106ebe',
              }}
            >
              HOME-FOOD DELIVERED FRESH.
            </Typography>
          </Box>
        </Container>
      </Box>

      

     
      <Box sx={{ py: 8, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '700px', mx: 'auto' }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              How It Works
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                mb: 6,
              }}
            >
              Three simple steps to wholesome, home-cooked meals — every single day.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
           
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  bgcolor: '#106ebe',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                1
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Choose Plan
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Select your monthly, weekly, or daily package directly on the website.
              </Typography>
            </Box>

            
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  bgcolor: '#106ebe',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                2
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Mom's Chefs Cook
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Our Mom's chefs prepare hygienic, home-style meals daily with fresh ingredients.
              </Typography>
            </Box>

          
            <Box sx={{ flex: 1, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  bgcolor: '#106ebe',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  mx: 'auto',
                  mb: 2,
                }}
              >
                3
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                On-time Delivery
              </Typography>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Fresh, healthy, homemade meals delivered daily — never miss a meal.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;