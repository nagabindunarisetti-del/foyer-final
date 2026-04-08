import { useState } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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
  MenuItem,
} from '@mui/material';
import {
  EmailOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  ArrowForward,
  PersonOutline,
} from '@mui/icons-material';
import { signup } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { signupSchema } from '../utils/validationSchemas';




const Signup = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
    defaultValues: { email: '', password: '', role: 'user' as 'user' | 'admin' },
  });


  const onSubmit = async (data: any) => {
    setLoading(true);
    setError(null);
    try {
      await signup(data);
      navigate('/login');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong during signup.');
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
        <Typography variant="h4" sx={{ fontWeight: 500, mb: 4, opacity: 0.9 }}>Get Started Today!</Typography>
        <Typography variant="body1" sx={{ maxWidth: 400, fontSize: '1.1rem', lineHeight: 1.6, opacity: 0.85, mb: 8 }}>
          Join the F O Y E R network today.
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
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1a1a1b', mb: 1 }}>Create Account</Typography>
          <Typography variant="body2" sx={{ color: 'grey.600', fontWeight: 500, mb: 6 }}>Enter your details to create your account</Typography>

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
              placeholder="Create a password"
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


            <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#344054', mb: 1 }}>Account Type</Typography>
            <TextField
              select
              fullWidth
              sx={{
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 5,
                  bgcolor: 'white',
                  transition: 'all 0.2s ease-in-out',
                  '& fieldset': { borderColor: '#eaecf0' },
                  '&:hover fieldset': { borderColor: '#d0d5dd' },
                },
                '& .MuiSelect-select': { py: 2.2, fontSize: '0.95rem', fontWeight: 500, color: '#101828', display: 'flex', alignItems: 'center' },
              }}
              {...register('role')}
              error={!!errors.role}
              helperText={errors.role?.message}
              InputProps={{
                startAdornment: <InputAdornment position="start" sx={{ ml: 1 }}><PersonOutline sx={{ color: '#9097a3', fontSize: 22 }} /></InputAdornment>,
              }}
            >
              <MenuItem value="user">User (Customer)</MenuItem>
              <MenuItem value="admin">Admin (Business)</MenuItem>
            </TextField>

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
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
            </Button>

            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <Typography variant="body2" sx={{ color: 'grey.600', mb: 2 }}>
                Already have an account? <Link href="#" onClick={(e) => { e.preventDefault(); navigate('/login'); }} sx={{ color: 'primary.main', fontWeight: 800, textDecoration: 'none' }}>Sign In</Link>
              </Typography>
              <Link href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }} sx={{ display: 'block', color: 'grey.700', fontWeight: 700, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>Back to Home</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
