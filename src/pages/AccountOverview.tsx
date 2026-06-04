import { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

const AccountOverview = () => {
  const [profile, setProfile] = useState({
    fullName: 'Akhil Reddy',
    email: 'akhil.reddy@example.com',
    mobile: '9876543210',
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Profile saved:', profile);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <Box>
      {success && <Alert severity="success" sx={{ mb: 2 }}>Profile updated successfully!</Alert>}

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Personal Details</Typography>

      <TextField
        fullWidth
        label="Full Name"
        name="fullName"
        value={profile.fullName}
        onChange={handleChange}
        size="small"
        sx={{ mb: 1.5 }}
      />

      <TextField
        fullWidth
        label="Email"
        name="email"
        type="email"
        value={profile.email}
        onChange={handleChange}
        size="small"
        sx={{ mb: 1.5 }}
      />

      <TextField
        fullWidth
        label="Mobile Number"
        name="mobile"
        value={profile.mobile}
        onChange={handleChange}
        size="small"
        helperText="10-digit mobile number"
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleSave}
        size="small"
        sx={{ bgcolor: '#106ebe', textTransform: 'none', px: 3 }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default AccountOverview;