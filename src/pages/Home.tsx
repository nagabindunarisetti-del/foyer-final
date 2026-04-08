import { Box, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/authSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#fcfcfd',
      textAlign: 'center',
      p: 3
    }}>
      <Typography variant="h2" sx={{ fontWeight: 800, color: '#101828', mb: 2, letterSpacing: 2 }}>
        Welcome to <span style={{ color: '#106ebe' }}>F O Y E R</span>
      </Typography>
      <Typography variant="h5" sx={{ color: 'grey.600', mb: 6, fontWeight: 400 }}>
        You have successfully logged into your accountttt.
      </Typography>
      <Button
        variant="contained"
        onClick={handleLogout}
        sx={{
          borderRadius: 3,
          px: 4,
          py: 1.5,
          fontWeight: 700,
          textTransform: 'none',
          boxShadow: '0 4px 12px rgba(16, 110, 190, 0.2)'
        }}
      >
        Sign Out
      </Button>
    </Box>
  );
};

export default Home;
