import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Tab,
  Tabs,
} from '@mui/material';
import {
  Restaurant,
  LocalGroceryStore,
  Home,
  Spa,
  Medication,
  CleaningServices,
  Checkroom,
  ElectricalServices,
} from '@mui/icons-material';

const CategoryNavbar = () => {
  const navigate = useNavigate();

  const [tabValue, setTabValue] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const categories = [
    { label: 'Home', icon: <Home />, path: '/' },
    { label: 'Food', icon: <Restaurant />, path: '/cloudkitchen' },

    { label: 'Grocery', icon: <LocalGroceryStore />, path: '/category/grocery' },
    { label: 'Beauty', icon: <Spa />, path: '/category/beauty' },
    { label: 'Pharmacy', icon: <Medication />, path: '/category/pharmacy' },
    { label: 'Electronics', icon: <ElectricalServices />, path: '/category/electronics' },
    { label: 'Home Care', icon: <CleaningServices />, path: '/category/home-care' },
    { label: 'Fashion', icon: <Checkroom />, path: '/category/fashion' },

  ];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
    navigate(categories[newValue].path);
  };

  return (
    <Box
      sx={{
        bgcolor: 'white',
        borderBottom: '1px solid',
        borderColor: 'rgba(0, 0, 0, 0.05)',
        position: 'fixed',
        top: { xs: 55, md: 65 },
        zIndex: 1090,
        width: '100%',
      }}
    >
      <Box
        sx={{
          px: { xs: 1.5, md: 2 },
          overflowX: 'auto',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': { display: 'none' },

        }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant={isMobile ? "scrollable" : "standard"}
          scrollButtons={isMobile ? "auto" : false}
          allowScrollButtonsMobile={isMobile}
          sx={{
            minHeight: { xs: 48, md: 56 },
            '& .MuiTabs-flexContainer': {
              gap: { xs: 1, sm: 2, md: 3 },
            },
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: 500,
              fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.85rem' },
              minHeight: { xs: 48, md: 56 },
              py: { xs: 1, md: 1.5 },
              px: { xs: 1.5, sm: 2, md: 2.5 },
              minWidth: 'auto',
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#106ebe',
              height: 3,

            },
          }}
        >
          {categories.map((category) => (
            <Tab
              key={category.label}
              icon={category.icon}
              label={category.label}
              sx={{
                '& .MuiSvgIcon-root': {
                  fontSize: { xs: 18, sm: 20, md: 22 },
                  mb: { xs: 0.5, sm: 0 }
                },
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 0.5, sm: 1 },
                outline: 'none',
                '&:focus': {
                  outline: 'none',
                },
                '&:focus-visible': {
                  outline: 'none',
                },
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default CategoryNavbar;