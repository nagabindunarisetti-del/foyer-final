import { Box, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import RestaurantIcon from '@mui/icons-material/Restaurant'; 

const Home = () => {
  const navigate = useNavigate();

  const handleSendGifts = () => {
    navigate('/send-items');
  };

  const handleDailyOffice = () => {
    navigate('/ordernow', { state: { activeTab: 'homeChef' } });
  };

  return (
    <Box>
      <Box sx={{ bgcolor: '#f8f9fa', pt: 1, mt: 7 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 1.5, sm: 2, md: 3 } }}>
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 1.5,
          }}>
            
            {/* Card 1 - Send Instant Items */}
            <Box
              onClick={handleSendGifts}
              sx={{
                flex: { xs: '1 1 100%', md: 1 },
                bgcolor: '#e91e63', 
                borderRadius: 5,
                p: { xs: 1.2, sm: 1.5, md: 1.5 },
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': { 
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <FavoriteIcon sx={{ fontSize: { xs: 20, sm: 24, md: 24 } }} />
                <Typography sx={{ 
                  fontWeight: 600, 
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
                  lineHeight: 1.3,
                }}>
                  Send Instant items to Loved ones anywhere in the city
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap',
              }}>
                <Typography sx={{ 
                  opacity: 0.9, 
                  fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, 
                  fontWeight: 400,
                  flex: { xs: '1', md: 'none' }
                }}>
                  Send instant items, food, groceries, medicine & many more to family & friends
                </Typography>
                <ArrowForwardIcon 
                  onClick={handleSendGifts}
                  sx={{ 
                    fontSize: { xs: 18, sm: 20, md: 20 }, 
                    color: '#ffffff', 
                    opacity: 0.9,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    ml: 1,
                    '&:hover': { 
                      opacity: 1, 
                      transform: 'translateX(3px)' 
                    },
                  }} 
                />
              </Box>
            </Box>

            {/* Card 2 - Order Real Food */}
            <Box
              onClick={handleDailyOffice}
              sx={{
                flex: { xs: '1 1 100%', md: 1 },
                bgcolor: '#106ebe', 
                borderRadius: 5,
                p: { xs: 1.2, sm: 1.5, md: 1.5 },
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': { 
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  transform: 'translateY(-2px)',
                },
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.8 }}>
                <RestaurantIcon sx={{ fontSize: { xs: 20, sm: 24, md: 24 } }} />
                <Typography sx={{ 
                  fontWeight: 600, 
                  fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
                  lineHeight: 1.3,
                }}>
                  Order Real food from real kitchens
                </Typography>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                flexWrap: 'wrap',
              }}>
                <Typography sx={{ 
                  opacity: 0.9, 
                  fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' }, 
                  fontWeight: 400,
                  flex: { xs: '1', md: 'none' }
                }}>
                  prepared in home kitchens - perfect for daily meals, weekly tiffins and more
                </Typography>
                <ArrowForwardIcon 
                  onClick={handleDailyOffice}
                  sx={{ 
                    fontSize: { xs: 18, sm: 20, md: 20 }, 
                    color: '#ffffff', 
                    opacity: 0.9,
                    cursor: 'pointer',
                    transition: 'transform 0.2s',
                    ml: 1,
                    '&:hover': { 
                      opacity: 1, 
                      transform: 'translateX(3px)' 
                    },
                  }} 
                />
              </Box>
            </Box>
            
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;