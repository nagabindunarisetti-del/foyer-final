import { useState, useRef, useEffect } from 'react';
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
  TextField,
  InputAdornment,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Search,
  LocationOn,
  Language,
  FavoriteBorder,
  
  ShoppingCartOutlined,
  PersonOutline,
  ShoppingBagOutlined,
  LocationOnOutlined,
  LogoutOutlined,
  FavoriteBorderOutlined,
  Close,
} from '@mui/icons-material';

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    timeoutRef.current = setTimeout(() => setAnchorEl(null), 200);
  };

  const handleMenuCloseImmediate = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    handleMenuCloseImmediate();
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    handleMenuCloseImmediate();
    navigate('/login');
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const menuItems = [
    { label: 'My Account', path: '/my-account', icon: <PersonOutline /> },
    { label: 'Orders', path: '/my-account/orders', icon: <ShoppingBagOutlined /> },
    { label: 'Saved Addresses', path: '/my-account/addresses', icon: <LocationOnOutlined /> },
    { label: 'Favourites', path: '/favorites', icon: <FavoriteBorderOutlined /> },
  ];

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
        <Toolbar sx={{ px: { xs: 1.5, md: 4 }, py: 1 }}>
          {/* Logo */}
          <Box
            component="img"
            src="https://cdn.freebiesupply.com/logos/thumbs/2x/foyer-1-logo.png"
            alt="Foyer Logo"
            onClick={() => navigate('/')}
            sx={{
              height: { xs: '40px', sm: '50px' },
              cursor: 'pointer',
              mr: { xs: 1, sm: 2 },
            }}
          />

          {/* Location Button */}
          <Button
            startIcon={<LocationOn sx={{ color: '#106ebe', fontSize: { xs: 18, sm: 20 } }} />}
            size="small"
            sx={{
              textTransform: 'none',
              color: '#1a1a1a',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              whiteSpace: 'nowrap',
              minWidth: 'auto',
              mr: { xs: 0.5, sm: 1 },
            }}
          >
            {isMobile ? 'Gachibowli' : 'Gachibowli, Hyderabad'}
          </Button>

          {/* Search Bar */}
          <TextField
            placeholder={isMobile ? "Search..." : "Search for restaurants or dishes..."}
            size="small"
            sx={{
              flex: 1,
              mx: { xs: 0.5, sm: 1 },
              '& .MuiOutlinedInput-root': {
                borderRadius: 3,
                bgcolor: '#f8f9fa',
                height: { xs: 36, sm: 40 },
              },
              '& .MuiInputBase-input': {
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                py: { xs: 0.5, sm: 1 },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start" sx={{ mr: { xs: 0.5, sm: 1 } }}>
                  <Search sx={{ color: '#999', fontSize: { xs: 18, sm: 20 } }} />
                </InputAdornment>
              ),
            }}
          />

          {/* Right Icons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1 } }}>
            
            {!isMobile && (
              <IconButton onClick={() => navigate('/favorites')}>
                <FavoriteBorder sx={{ fontSize: { xs: 20, sm: 22 }, color: '#1a1a1a' }} />
              </IconButton>
            )}

            

            {/* Cart Icon */}
            <IconButton onClick={() => navigate('/cart')}>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartOutlined sx={{ fontSize: { xs: 20, sm: 22 }, color: '#1a1a1a' }} />
              </Badge>
            </IconButton>

            {/* Profile Icon */}
            {!isMobile ? (
              <IconButton onMouseEnter={handleMenuOpen} onMouseLeave={handleMenuClose}>
                <PersonOutline sx={{ fontSize: { xs: 20, sm: 22 }, color: '#1a1a1a' }} />
              </IconButton>
            ) : (
              <IconButton onClick={() => setMobileMenuOpen(true)}>
                <PersonOutline sx={{ fontSize: { xs: 20, sm: 22 }, color: '#1a1a1a' }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>

        {!isMobile && (
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuCloseImmediate}
            onMouseEnter={() => {
              if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }}
            onMouseLeave={handleMenuClose}
            PaperProps={{
              sx: { mt: 1, minWidth: 180, borderRadius: 1.5, boxShadow: '0 4px 12px rgba(0,0,0,0.08)' },
            }}
          >
            {menuItems.map((item) => (
              <MenuItem key={item.label} onClick={() => handleNavigate(item.path)} sx={{ py: 0.8, px: 1.5 }}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </MenuItem>
            ))}
            <Divider />
            <MenuItem onClick={handleLogout} sx={{ py: 0.8, px: 1.5, color: '#d32f2f' }}>
              <ListItemIcon><LogoutOutlined sx={{ fontSize: 18, color: '#d32f2f' }} /></ListItemIcon>
              <ListItemText primary="Logout" />
            </MenuItem>
          </Menu>
        )}
      </AppBar>

      {/* Mobile Drawer Menu */}
      <Drawer anchor="left" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={() => setMobileMenuOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <LocationOn sx={{ mr: 2, color: '#106ebe' }} />
                <Typography>Gachibowli, Hyderabad</Typography>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <Language sx={{ mr: 2 }} />
                <Typography>English</Typography>
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => handleNavigate(item.path)}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ my: 1 }} />

            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon><LogoutOutlined sx={{ color: '#d32f2f' }} /></ListItemIcon>
                <ListItemText primary="Logout" primaryTypographyProps={{ color: '#d32f2f' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box sx={{ height: { xs: 65, sm: 70, md: 70 } }} />
    </>
  );
};

export default Navbar;