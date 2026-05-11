import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
  ListItemText,
  
} from '@mui/material';
import {
  DownloadOutlined,
  PersonOutline,
  ShoppingBagOutlined,
  LocationOnOutlined,
  LogoutOutlined,
  
} from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  


  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuClose();
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'white',
          borderBottom: '1px solid',
          borderColor: 'rgba(0, 0, 0, 0.05)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 3, md: 6 } }}>
          {/* Logo */}
          <Typography
            variant="h5"
            onClick={() => navigate('/')}
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 600,
              letterSpacing: 1,
              color: '#1a1a1a',
              cursor: 'pointer',
              fontSize: '1.75rem',
              '&:hover': { opacity: 0.8 },
            }}
          >
            Foyer
          </Typography>

          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            
            <Button
              component="a"
              href="https://play.google.com/store/apps/details?id=com.pubg.imobile&hl=en-US"
              target="_blank"
              variant="contained"
              startIcon={<DownloadOutlined sx={{ fontSize: 20 }} />}
              sx={{
                fontFamily: 'Poppins',
                color: '#cecece',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                bgcolor: '#106ebe',
                '&:hover': { bgcolor: '#0a58a1', color: '#ffffff', opacity: 0.9 },
              }}
            >
              Download Foyer
            </Button>

            
              

            {/* Profile Icon */}
            <IconButton
              onClick={handleMenuOpen}
              sx={{ p: 0, '&:hover': { opacity: 0.7 } }}
            >
              <PersonOutline sx={{ fontSize: 26, color: '#1a1a1a' }} />
            </IconButton>

            {/* Dropdown Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{
                elevation: 2,
                sx: {
                  mt: 2,
                  minWidth: 200,
                  borderRadius: 2,
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
                },
              }}
            >
              <MenuItem onClick={() => handleNavigate('/profile')} sx={{ py: 1.2 }}>
                <ListItemIcon><PersonOutline sx={{ fontSize: 20 }} /></ListItemIcon>
                <ListItemText primary="Profile" />
              </MenuItem>

              <MenuItem onClick={() => handleNavigate('/orders')} sx={{ py: 1.2 }}>
                <ListItemIcon><ShoppingBagOutlined sx={{ fontSize: 20 }} /></ListItemIcon>
                <ListItemText primary="Orders" />
              </MenuItem>

              <MenuItem onClick={() => handleNavigate('/addresses')} sx={{ py: 1.2 }}>
                <ListItemIcon><LocationOnOutlined sx={{ fontSize: 20 }} /></ListItemIcon>
                <ListItemText primary="Saved Addresses" />
              </MenuItem>

              <Divider sx={{ my: 0.5 }} />

              <MenuItem onClick={handleMenuClose} sx={{ py: 1.2, color: '#d32f2f' }}>
                <ListItemIcon><LogoutOutlined sx={{ fontSize: 20, color: '#d32f2f' }} /></ListItemIcon>
                <ListItemText primary="Logout" />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: 85 }} />
    </>
  );
};

export default Navbar;