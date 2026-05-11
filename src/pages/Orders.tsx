import { Container, Typography, Box, Paper } from '@mui/material';
import { AssignmentOutlined } from '@mui/icons-material';

const Orders = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <AssignmentOutlined sx={{ fontSize: 40, color: 'primary.main' }} />
        <Typography variant="h4" fontWeight={700}>
          My Orders
        </Typography>
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
          No orders yet
        </Typography>
        <Typography variant="body2" color="grey.500">
          When you place an order, it will appear here.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Orders;