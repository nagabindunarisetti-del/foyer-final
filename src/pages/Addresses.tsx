import { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
} from '@mui/material';
import { Add } from '@mui/icons-material';

interface Address {
  id: number;
  label: string;
  address: string;
  landmark?: string;
  phone?: string;
}

const Addresses = () => {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      label: 'Home',
      address: 'Harshita Reddy Boys Hostel, Gayatri Nagar Colony, Kalimandir, Bandlaguda Jagir, Telangana 500086, India',
      landmark: '',
      phone: '',
    },
    {
      id: 2,
      label: 'Work',
      address: 'Hno 13, Jai Bharat Nagar, Nizampet, Hyderabad, Telangana 500090, India',
      landmark: '',
      phone: '',
    },
    {
      id: 3,
      label: 'Akhil',
      address: 'Lodge, Jampet, Rajamahendravaram, Andhra Pradesh, India',
      landmark: '',
      phone: '',
    },
    {
      id: 4,
      label: 'Friends And Family',
      address: 'Hno 13, E Block, Nizampet, Hyderabad, Telangana 500090, India',
      landmark: '(Jai Bharat Nagar)',
      phone: '',
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    label: '',
    address: '',
    landmark: '',
    phone: '',
  });

  const handleOpenAddDialog = () => {
    setEditingAddress(null);
    setFormData({ label: '', address: '', landmark: '', phone: '' });
    setDialogOpen(true);
  };

  const handleOpenEditDialog = (addr: Address) => {
    setEditingAddress(addr);
    setFormData({
      label: addr.label,
      address: addr.address,
      landmark: addr.landmark || '',
      phone: addr.phone || '',
    });
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingAddress(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (!formData.label || !formData.address) return;

    if (editingAddress) {
      setAddresses(
        addresses.map((addr) =>
          addr.id === editingAddress.id ? { ...addr, ...formData } : addr
        )
      );
      setSuccess('Address updated successfully!');
    } else {
      const newAddress: Address = {
        id: Date.now(),
        label: formData.label,
        address: formData.address,
        landmark: formData.landmark,
        phone: formData.phone,
      };
      setAddresses([...addresses, newAddress]);
      setSuccess('Address added successfully!');
    }

    setTimeout(() => setSuccess(''), 3000);
    handleCloseDialog();
  };

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    setSuccess('Address deleted successfully!');
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          Manage Addresses
        </Typography>
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={handleOpenAddDialog}
          sx={{ borderColor: '#106ebe', color: '#106ebe', textTransform: 'none', borderRadius: 2 }}
        >
          ADD
        </Button>
      </Box>

      {/* Success Message */}
      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {/* Addresses - 2 Columns using Flexbox */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          margin: '-12px',
        }}
      >
        {addresses.map((addr) => (
          <Box
            key={addr.id}
            sx={{
              width: { xs: '100%', sm: 'calc(50% - 24px)' },
              margin: '12px',
              p: 2,
              border: '1px solid #e0e0e0',
              borderRadius: 2,
              bgcolor: '#ffffff',
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              {addr.label}
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', mb: 1, lineHeight: 1.5 }}>
              {addr.address}
            </Typography>
            {addr.landmark && (
              <Typography variant="caption" sx={{ color: '#999', display: 'block', mb: 0.5 }}>
                {addr.landmark}
              </Typography>
            )}
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Button
                size="small"
                onClick={() => handleOpenEditDialog(addr)}
                sx={{ textTransform: 'none', color: '#106ebe', minWidth: 'auto' }}
              >
                EDIT
              </Button>
              <Button
                size="small"
                onClick={() => handleDelete(addr.id)}
                sx={{ textTransform: 'none', color: '#d32f2f', minWidth: 'auto' }}
              >
                DELETE
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Add/Edit Dialog */}
      <Dialog open={dialogOpen} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>{editingAddress ? 'Edit Address' : 'Add New Address'}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              label="Label *"
              name="label"
              value={formData.label}
              onChange={handleChange}
              fullWidth
              size="small"
              placeholder="e.g., Home, Work, Friends and Family"
            />
            <TextField
              label="Address *"
              name="address"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={3}
              fullWidth
              size="small"
              required
              placeholder="Street, City, State, Pincode"
            />
            <TextField
              label="Landmark (Optional)"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              fullWidth
              size="small"
              placeholder="Near any famous place"
            />
            <TextField
              label="Phone Number (Optional)"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              size="small"
              placeholder="10-digit mobile number"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            disabled={!formData.label || !formData.address}
            sx={{ bgcolor: '#106ebe', textTransform: 'none' }}
          >
            {editingAddress ? 'Save Changes' : 'Add Address'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Addresses;