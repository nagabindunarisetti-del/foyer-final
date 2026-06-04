import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  PersonOutline,
  ShoppingBagOutlined,
  LocationOnOutlined,
  FavoriteBorderOutlined,
} from '@mui/icons-material';

const MyAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'My Account', path: '/my-account', icon: <PersonOutline /> },
    { label: 'Orders', path: '/my-account/orders', icon: <ShoppingBagOutlined /> },
    { label: 'Addresses', path: '/my-account/addresses', icon: <LocationOnOutlined /> },
    { label: 'Favourites', path: '/my-account/favourites', icon: <FavoriteBorderOutlined /> },
  ];

  const activeItem = location.pathname;

  return (
    <Box sx={{ bgcolor: '#ddedfe', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#1a1a1a', textAlign: 'center' }}>
          My Account
        </Typography>

        
        <Box sx={{ bgcolor: '#ffffff', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
         
          <Box sx={{ width: { xs: '100%', md: '250px' }, borderRight: { md: '1px solid #e0e0e0' } }}>
            <List component="nav" sx={{ p: 0 }}>
              {menuItems.map((item) => (
                <ListItem
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: activeItem === item.path ? '#106ebe' : 'transparent',
                    color: activeItem === item.path ? '#ffffff' : '#1a1a1a',
                    '&:hover': {
                      bgcolor: activeItem === item.path ? '#106ebe' : '#f5f5f5',
                    },
                    py: 1.2,
                    px: 2,
                  }}
                >
                  <ListItemIcon sx={{ color: 'inherit', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.9rem',
                      fontWeight: activeItem === item.path ? 600 : 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

         
          <Box sx={{ flex: 1, p: 3 }}>
            <Outlet />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MyAccount;