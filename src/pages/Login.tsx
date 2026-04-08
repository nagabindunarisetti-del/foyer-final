import { useState } from 'react';

import { useForm } from 'react-hook-form';
import {
  Box,
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
  Link,
} from '@mui/material';

import {
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  ArrowForward,
  Storefront,
  LocalShipping,
} from '@mui/icons-material';
import { login } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTokens } from '../store/slices/authSlice';


import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema } from '../utils/validationSchemas';

const Login = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });



  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      const response = await login(data);
      if (response.accessToken && response.refreshToken) {
        dispatch(setTokens({ accessToken: response.accessToken, refreshToken: response.refreshToken }));
        navigate('/');
      } else {
        setError('Login failed: Invalid response from server.');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', width: '100%', flexDirection: { xs: 'column', md: 'row' }, bgcolor: 'white' }}>
      {/* Left Section - Branding */}
      <Box sx={{
        flex: { md: 0.45 },
        bgcolor: 'primary.main',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Box sx={{
          bgcolor: 'white',
          width: 70,
          height: 70,
          borderRadius: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
          boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
        }}>
          <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: 3 }}>F O Y E R</Typography>
        </Box>
        <Typography variant="h2" sx={{ fontWeight: 800, mb: 1, fontSize: { xs: '2.5rem', md: '3.5rem' }, letterSpacing: 4 }}>F O Y E R</Typography>
        <Typography variant="h4" sx={{ fontWeight: 500, mb: 4, opacity: 0.9 }}>Welcome Back!</Typography>
        <Typography variant="body1" sx={{ maxWidth: 400, fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.85, mb: 8 }}>
          Discover the future of logistics and professional services.
        </Typography>



      </Box>

      {/* Right Section - Form */}
      <Box sx={{
        flex: { md: 0.55 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 4, md: 8 },
        bgcolor: 'white',
      }}>
        <Box sx={{ width: '100%', maxWidth: 450 }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1b', mb: 1 }}>Sign In</Typography>
          <Typography variant="body2" sx={{ color: 'grey.600', fontWeight: 500, mb: 6 }}>Enter your credentials to continue</Typography>

          {error && <Alert severity="error" sx={{ mb: 3, borderRadius: 3 }}>{error}</Alert>}

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#344054', mb: 1 }}>Email Address</Typography>
            <TextField
              fullWidth
              placeholder="Enter your email"
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 5,
                  bgcolor: 'white',
                  transition: 'all 0.2s ease-in-out',
                  '& fieldset': { borderColor: '#eaecf0', transition: 'border-color 0.2s' },
                  '&:hover fieldset': { borderColor: '#d0d5dd' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: '2px' },
                  '&.Mui-focused': { bgcolor: 'white', boxShadow: '0 4px 12px rgba(16, 110, 190, 0.08)' },
                },
                '& .MuiInputBase-input': {
                  py: 2.2, 
                  fontSize: '0.95rem', 
                  fontWeight: 500, 
                  color: '#101828',
                  borderRadius: 'inherit',
                  '&:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important',
                    WebkitTextFillColor: '#101828 !important',
                  },
                },
                '& .MuiInputBase-input::placeholder': { color: '#9097a3', opacity: 1 },
              }}
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputProps={{
                startAdornment: <InputAdornment position="start" sx={{ ml: 1 }}><EmailOutlined sx={{ color: '#9097a3', fontSize: 22 }} /></InputAdornment>,
              }}
            />


            <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#344054', mb: 1 }}>Password</Typography>
            <TextField
              fullWidth
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              sx={{
                mb: 3.5,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 5,
                  bgcolor: 'white',
                  transition: 'all 0.2s ease-in-out',
                  '& fieldset': { borderColor: '#eaecf0', transition: 'border-color 0.2s' },
                  '&:hover fieldset': { borderColor: '#d0d5dd' },
                  '&.Mui-focused fieldset': { borderColor: 'primary.main', borderWidth: '2px' },
                  '&.Mui-focused': { bgcolor: 'white', boxShadow: '0 4px 12px rgba(16, 110, 190, 0.08)' },
                },
                '& .MuiInputBase-input': {
                  py: 2.2, 
                  fontSize: '0.95rem', 
                  fontWeight: 500, 
                  color: '#101828',
                  borderRadius: 'inherit',
                  '&:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 100px white inset !important',
                    WebkitTextFillColor: '#101828 !important',
                  },
                },
                '& .MuiInputBase-input::placeholder': { color: '#9097a3', opacity: 1 },
              }}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                startAdornment: <InputAdornment position="start" sx={{ ml: 1 }}><LockOutlined sx={{ color: '#9097a3', fontSize: 22 }} /></InputAdornment>,
                endAdornment: (
                  <InputAdornment position="end" sx={{ mr: 1 }}>
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: '#9097a3' }}>
                      {showPassword ? <VisibilityOffOutlined sx={{ fontSize: 22 }} /> : <VisibilityOutlined sx={{ fontSize: 22 }} />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />



            <Link href="#" sx={{ display: 'block', textAlign: 'right', color: 'primary.main', fontSize: '0.85rem', fontWeight: 700, mb: 4, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Forgot Password?</Link>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              endIcon={!loading && <ArrowForward />}
              sx={{
                borderRadius: 3.5,
                py: 2,
                fontWeight: 800,
                fontSize: '1.1rem',
                bgcolor: 'primary.main',
                boxShadow: '0 4px 12px rgba(16, 110, 190, 0.3)',
                '&:hover': { bgcolor: 'primary.600', boxShadow: '0 6px 15px rgba(16, 110, 190, 0.4)' }
              }}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
            </Button>

            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', my: 5 }}>
              <Box sx={{ flex: 1, height: '1px', bgcolor: 'grey.200' }} />
              <Typography variant="caption" sx={{ px: 2, color: 'grey.500', fontWeight: 600 }}>or continue with</Typography>
              <Box sx={{ flex: 1, height: '1px', bgcolor: 'grey.200' }} />
            </Box>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: 22, marginRight: 8 }} />}
              sx={{
                borderRadius: 3.5,
                borderColor: 'grey.200',
                color: 'grey.700',
                fontWeight: 700,
                py: 1.5,
                textTransform: 'none',
                fontSize: '0.95rem',
                '&:hover': { bgcolor: 'grey.50', borderColor: 'grey.300' }
              }}
            >Continue with Google</Button>

            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Typography variant="body2" sx={{ color: 'grey.600', mb: 2 }}>
                Don't have an account? <Link href="#" onClick={(e) => { e.preventDefault(); navigate('/signup'); }} sx={{ color: 'primary.main', fontWeight: 800, textDecoration: 'none' }}>Sign Up</Link>
              </Typography>
              <Link href="#" sx={{ display: 'block', color: 'grey.700', fontWeight: 700, textDecoration: 'none', mb: 6, '&:hover': { color: 'primary.main' } }}>Continue as Guest</Link>

              <Box sx={{ borderTop: '1px solid', borderColor: 'grey.100', pt: 4 }}>
                <Typography variant="caption" sx={{ display: 'block', textTransform: 'uppercase', color: 'grey.500', letterSpacing: 2, fontWeight: 800, mb: 2.5 }}>Business Login</Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2.5 }}>
                  <Button variant="contained" startIcon={<Storefront />} sx={{ bgcolor: 'primary.50', color: 'primary.main', borderRadius: 3, fontWeight: 700, fontSize: '0.9rem', boxShadow: 'none', py: 1.25, '&:hover': { bgcolor: 'primary.100' } }}>Restaurant</Button>
                  <Button variant="contained" startIcon={<LocalShipping />} sx={{ bgcolor: 'primary.50', color: 'primary.main', borderRadius: 3, fontWeight: 700, fontSize: '0.9rem', boxShadow: 'none', py: 1.25, '&:hover': { bgcolor: 'primary.100' } }}>Delivery</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
