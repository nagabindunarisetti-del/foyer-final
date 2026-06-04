import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Divider,
  Avatar,
  Chip,
  LinearProgress,
  IconButton,
  Stack,
  keyframes,
} from '@mui/material';
import {
  CheckCircle,
  CircleOutlined,
  LocalShipping,
  Phone,
  Chat,
  LocationOn,
  AccessTime,
  Restaurant,
  ArrowBack,
} from '@mui/icons-material';

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

const orderSteps = ['Confirmed', 'Preparing', 'Out for Delivery', 'Delivered'];

const deliveryPartner = {
  name: 'Manoj Kumar',
  phone: '+91 98765 43210',
  rating: 4.8,
  vehicleNumber: 'TS 09 AB 1234',
};

const TrackOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [orderData, setOrderData] = useState(() => {
    if (location.state?.order) return location.state.order;
    const savedOrder = sessionStorage.getItem('currentOrder');
    if (savedOrder) return JSON.parse(savedOrder);
    return null;
  });

  const [activeStep, setActiveStep] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(25);
  const [showDeliveryPartner, setShowDeliveryPartner] = useState(false);

  useEffect(() => {
    if (!orderData) {
      navigate('/');
    }
  }, [orderData, navigate]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeStep < 3 && timeRemaining > 0) {
        setTimeRemaining(prev => prev - 1);
        
        if (timeRemaining <= 20 && activeStep === 0) setActiveStep(1);
        if (timeRemaining <= 10 && activeStep === 1) {
          setActiveStep(2);
          setShowDeliveryPartner(true);
        }
        if (timeRemaining <= 2 && activeStep === 2) setActiveStep(3);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [activeStep, timeRemaining]);

  useEffect(() => {
    if (activeStep >= 2) setShowDeliveryPartner(true);
  }, [activeStep]);

  const getStatusColor = (step: number) => {
    if (step < activeStep) return '#10b981';
    if (step === activeStep) return '#ff5a00';
    return '#d1d5db';
  };

  const getStepIcon = (step: number) => {
    if (step < activeStep) return <CheckCircle sx={{ color: '#10b981', fontSize: 20 }} />;
    if (step === activeStep) return <LocalShipping sx={{ color: '#ff5a00', fontSize: 20, animation: `${blink} 1s infinite` }} />;
    return <CircleOutlined sx={{ color: '#d1d5db', fontSize: 20 }} />;
  };

  if (!orderData) return null;

 
  const restaurantAddress = orderData.restaurantAddress || 'Road no-1, jai bharat nagar, Kukatpally, Hyderabad - 500085';

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 3 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
        
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <ArrowBack onClick={() => navigate(-1)} sx={{ cursor: 'pointer', color: '#666', fontSize: 20 }} />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#1a1a1a' }}>Track Order</Typography>
          <Typography variant="caption" sx={{ color: '#999', ml: 'auto' }}>#{orderData.id.slice(-8)}</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
          
         
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            
           
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Stepper activeStep={activeStep} alternativeLabel sx={{ '& .MuiStepLabel-label': { fontSize: '10px', mt: 0.5 } }}>
                {orderSteps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={() => getStepIcon(index)} sx={{ '& .MuiStepLabel-label': { color: getStatusColor(index), fontWeight: index === activeStep ? 600 : 400 } }}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep < 3 && (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, textAlign: 'center', mb: 0.5 }}>⏱️ {timeRemaining} min remaining</Typography>
                  <LinearProgress variant="determinate" value={(25 - timeRemaining) / 25 * 100} sx={{ height: 4, borderRadius: 2, bgcolor: '#e5e7eb', '& .MuiLinearProgress-bar': { bgcolor: '#ff5a00' } }} />
                </Box>
              )}
              {activeStep === 3 && (
                <Box sx={{ textAlign: 'center', mt: 1 }}>
                  <CheckCircle sx={{ fontSize: 30, color: '#10b981', mb: 0.5 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#10b981' }}>Delivered! 🎉</Typography>
                </Box>
              )}
            </Paper>

            {/* MAP SECTION */}
            <Paper sx={{ 
              p: 2, 
              borderRadius: 2, 
              bgcolor: '#e5e7eb', 
              textAlign: 'center', 
              position: 'relative', 
              height: 280, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              flexDirection: 'column' 
            }}>
              <Typography variant="body2" sx={{ color: '#666', mb: 1 }}>🗺️ Live Map View</Typography>
              <Typography variant="caption" sx={{ color: '#999', fontSize: '11px', mb: 2 }}>
                {activeStep === 2 ? '📍 Delivery partner is 2.5 km away' : 
                 activeStep === 3 ? '✅ Order delivered successfully' : 
                 '🍳 Preparing your order'}
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Typography variant="caption">🏠 You</Typography>
                <Typography variant="caption">→</Typography>
                <Typography variant="caption">🍔 Restaurant</Typography>
                <Typography variant="caption">→</Typography>
                {activeStep >= 2 && <Typography variant="caption">🚚 Partner</Typography>}
                {activeStep >= 2 && <Typography variant="caption">→</Typography>}
                <Typography variant="caption">🏡 Delivery</Typography>
              </Box>
              <Box sx={{ position: 'absolute', bottom: 12, right: 12, bgcolor: 'white', px: 1.5, py: 0.5, borderRadius: 1.5, fontSize: '10px', fontWeight: 500 }}>📍 Live</Box>
            </Paper>

            {/* ORDER UPDATES */}
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>Order Updates</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  { label: 'Order Placed', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), completed: true },
                  { label: 'Restaurant Confirmed', time: new Date(Date.now() - 5*60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), completed: activeStep >= 1 },
                  { label: 'Preparing Your Food', time: activeStep >= 1 ? new Date(Date.now() - 10*60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Waiting...', completed: activeStep >= 1, active: activeStep === 1 },
                  { label: 'Out for Delivery', time: activeStep >= 2 ? new Date(Date.now() - 15*60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Waiting...', completed: activeStep >= 2, active: activeStep === 2 },
                  { label: 'Delivered', time: activeStep >= 3 ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Waiting...', completed: activeStep >= 3, active: activeStep === 3 },
                ].map((item, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    {item.completed ? <CheckCircle sx={{ color: '#10b981', fontSize: 16 }} /> : item.active ? <LocalShipping sx={{ color: '#ff5a00', fontSize: 16, animation: `${blink} 1s infinite` }} /> : <CircleOutlined sx={{ color: '#d1d5db', fontSize: 16 }} />}
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: item.active ? 600 : 400, color: item.completed ? '#1a1a1a' : '#999' }}>{item.label}</Typography>
                      <Typography variant="caption" sx={{ color: '#999', fontSize: '10px' }}>{item.time}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Paper>
          </Box>

     
          <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            
           
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <Typography variant="h6">🏠</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Pickup From</Typography>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>{orderData.restaurant}</Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>{restaurantAddress}</Typography>
            </Paper>

           
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                <Typography variant="h6">🏡</Typography>
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Deliver To</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: '#666' }}>{orderData.address}</Typography>
            </Paper>

            
            {showDeliveryPartner && (
              <Paper sx={{ p: 2, borderRadius: 2 }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>Delivery Partner</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Avatar sx={{ width: 48, height: 48, bgcolor: '#ff5a00' }}>MK</Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>{deliveryPartner.name}</Typography>
                    <Typography variant="caption" sx={{ color: '#666' }}>⭐ {deliveryPartner.rating} • {deliveryPartner.vehicleNumber}</Typography>
                  </Box>
                  <Stack direction="row" spacing={1}>
                    <IconButton 
                      size="small" 
                      sx={{ bgcolor: '#10b981', color: 'white', '&:hover': { bgcolor: '#059669' }, width: 36, height: 36 }}
                      onClick={() => window.location.href = `tel:${deliveryPartner.phone}`}
                    >
                      <Phone sx={{ fontSize: 18 }} />
                    </IconButton>
                    <IconButton 
                      size="small" 
                      sx={{ bgcolor: '#ff5a00', color: 'white', '&:hover': { bgcolor: '#e04e00' }, width: 36, height: 36 }}
                      onClick={() => alert('Chat feature coming soon!')}
                    >
                      <Chat sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Stack>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mt: 1.5 }}>
                  <Chip size="small" icon={<LocationOn sx={{ fontSize: 14 }} />} label="2.5 km away" sx={{ height: 24, fontSize: '11px' }} />
                  <Chip size="small" icon={<AccessTime sx={{ fontSize: 14 }} />} label={`ETA: ${timeRemaining} min`} sx={{ height: 24, fontSize: '11px' }} />
                </Box>
              </Paper>
            )}

            {/* 4. ORDER DETAILS */}
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Restaurant sx={{ fontSize: 16 }} /> Order Details
              </Typography>
              
              <Typography variant="body2" sx={{ fontWeight: 600, mb: 1 }}>{orderData.restaurant}</Typography>
              
              {orderData.items.map((item: any, idx: number) => (
                <Box key={idx} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">{item.name} x{item.quantity}</Typography>
                  <Typography variant="body2">₹{item.price * item.quantity}</Typography>
                </Box>
              ))}
              
              <Divider sx={{ my: 1.5 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption" sx={{ color: '#666' }}>Item Total</Typography>
                <Typography variant="caption">₹{orderData.total}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="caption" sx={{ color: '#666' }}>Delivery Fee</Typography>
                <Typography variant="caption">₹30</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="caption" sx={{ color: '#666' }}>Taxes</Typography>
                <Typography variant="caption">₹8</Typography>
              </Box>
              
              <Divider sx={{ my: 1 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>Total</Typography>
                <Typography variant="body2" sx={{ fontWeight: 700, color: '#ff5a00' }}>₹{orderData.total + 38}</Typography>
              </Box>
              
              <Button 
                fullWidth 
                size="small" 
                variant="outlined" 
                onClick={() => navigate('/orders')} 
                sx={{ textTransform: 'none', borderColor: '#ff5a00', color: '#ff5a00', '&:hover': { borderColor: '#e04e00', bgcolor: '#fff5f0' }, py: 0.8, fontSize: '12px' }}
              >
                View All Orders
              </Button>
            </Paper>
          </Box>
        </Box>

        {/* Help Section */}
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="caption" sx={{ color: '#666' }}>
            Need help?{' '}
            <Button 
              size="small" 
              onClick={() => navigate('/contactus')} 
              sx={{ color: '#ff5a00', textTransform: 'none', fontSize: '12px', p: 0, minWidth: 'auto' }}
            >
              Contact Support
            </Button>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TrackOrder;