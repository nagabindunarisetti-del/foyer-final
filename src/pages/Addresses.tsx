import { Container, Typography, Box, Paper, Button } from '@mui/material';
import { LocationOnOutlined, AddOutlined } from '@mui/icons-material';

const Addresses = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <LocationOnOutlined sx={{ fontSize: 40, color: 'primary.main' }} />
          <Typography variant="h4" fontWeight={700}>
            Saved Addresses
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddOutlined />}
          sx={{ borderRadius: 8, textTransform: 'none' }}
        >
          Add New Address
        </Button>
      </Box>

      <Paper
        sx={{
          p: 6,
          textAlign: 'center',
          bgcolor: 'grey.50',
          borderRadius: 3,
        }}
      >
        <Typography variant="h6" color="grey.700" gutterBottom>
          No saved addresses
        </Typography>
        <Typography variant="body2" color="grey.500">
          Add your first address for faster checkout.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Addresses;