import { Box, Typography, Button, Divider } from '@mui/material';

const Orders = () => {
  const orders = [
    {
      id: 1,
      restaurant: 'Spicy Noodles Corner',
      location: 'Kukatpally',
      orderId: 'ORDER #2342750/2897157',
      date: 'Sat, Apr 4, 2026, 05:54 PM',
      items: [{ name: 'Chicken Double Egg Noodles', quantity: 1, price: 134 }],
      total: 134,
    },
    {
      id: 2,
      restaurant: 'Mehfil',
      location: 'Nizampet',
      orderId: 'ORDER #2312676/60135839',
      date: 'Sat, Feb 28, 2026, 10:30 PM',
      items: [
        { name: 'Chicken Biryani Full', quantity: 1, price: 0 },
        { name: 'Garlic Roti', quantity: 2, price: 0 },
      ],
      total: 238,
    },
    {
      id: 3,
      restaurant: 'Chaitanya Food Court',
      location: 'Kukatpally',
      orderId: 'ORDER #2304017389/902900',
      date: 'Wed, Feb 18, 2026, 09:58 PM',
      items: [{ name: 'Chicken Biryani Full', quantity: 1, price: 583 }],
      total: 583,
    },
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Past Orders</Typography>

      {orders.map((order, index) => (
        <Box key={order.id} sx={{ mb: 2.5 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {order.restaurant}
          </Typography>
          <Typography variant="caption" sx={{ color: '#666', display: 'block' }}>
            {order.location}
          </Typography>
          <Typography variant="caption" sx={{ color: '#999', display: 'block' }}>
            {order.orderId} | {order.date}
          </Typography>

          <Box sx={{ ml: 1, mt: 1, mb: 0.5 }}>
            {order.items.map((item, idx) => (
              <Typography key={idx} variant="body2" sx={{ color: '#555' }}>
                {item.name} x{item.quantity}
              </Typography>
            ))}
            <Typography variant="body2" sx={{ fontWeight: 600, mt: 0.5 }}>
              Total Paid: ₹{order.total}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
            <Button
              size="small"
              variant="outlined"
              sx={{
                textTransform: 'none',
                borderColor: '#106ebe',
                color: '#106ebe',
                fontSize: '0.7rem',
                minWidth: 'auto',
                px: 2,
              }}
            >
              REORDER
            </Button>
            <Button
              size="small"
              sx={{ textTransform: 'none', color: '#666', fontSize: '0.7rem', minWidth: 'auto' }}
            >
              HELP
            </Button>
          </Box>

          {index !== orders.length - 1 && <Divider sx={{ mt: 2 }} />}
        </Box>
      ))}
    </Box>
  );
};

export default Orders;