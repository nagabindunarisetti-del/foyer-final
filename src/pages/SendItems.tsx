import { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  Divider,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import {
  CameraAlt,
  CloudUpload,
  LocalShipping,
  LocationOn,
  Person,
  Phone,
  Description,
  CheckCircle,
  ArrowBack,
  Close,
  
} from '@mui/icons-material';

const SendItems = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [category, setCategory] = useState('food');
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [replaceConfirmOpen, setReplaceConfirmOpen] = useState(false);
  const [pendingPhoto, setPendingPhoto] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [formData, setFormData] = useState({
    itemDescription: '',
    senderName: '',
    senderMobile: '',
    pickupAddress: '',
    receiverName: '',
    receiverMobile: '',
    dropAddress: '',
  });

  // Cleanup camera when component unmounts
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addPhoto = (photoData: string) => {
    setPhotoPreviews([...photoPreviews, photoData]);
  };

  const removePhoto = (index: number) => {
    setPhotoPreviews(photoPreviews.filter((_, i) => i !== index));
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    setCameraOpen(true);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = mediaStream;
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Camera error:", err);
      alert("Unable to access camera. Please check permissions.");
      setCameraOpen(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        const photoData = canvasRef.current.toDataURL('image/jpeg');
        
        // Add photo directly without confirmation
        addPhoto(photoData);
        
        stopCamera();
        setCameraOpen(false);
      }
    }
  };

  const closeCamera = () => {
    stopCamera();
    setCameraOpen(false);
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log('Send items request:', { ...formData, category, photos: photoPreviews });
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="sm">
          <Paper sx={{ p: 4, textAlign: 'center', borderRadius: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
            <Box sx={{ width: 60, height: 60, borderRadius: '50%', bgcolor: '#4caf50', display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 }}>
              <CheckCircle sx={{ fontSize: 32, color: 'white' }} />
            </Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: '#1a1a1a' }}>
              Request Submitted!
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
              A delivery partner will be assigned shortly.
            </Typography>
            <Button variant="contained" href="/" size="small" sx={{ bgcolor: '#106ebe', textTransform: 'none', px: 3 }}>
              Back to Home
            </Button>
          </Paper>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 3 }}>
      <Container maxWidth="md">
        {/* Back Button at Top */}
        <Button
          onClick={handleBack}
          startIcon={<ArrowBack />}
          size="small"
          sx={{ textTransform: 'none', color: '#666', mb: 1.5, '&:hover': { bgcolor: 'transparent', color: '#106ebe' } }}
        >
          Back
        </Button>

        {/* Header with Icon */}
        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <LocalShipping sx={{ fontSize: 38, color: '#106ebe', mb: 0.5 }} />
          <Typography
            variant="h5"
            sx={{
              fontFamily: 'Poppins',
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 0.5,
            }}
          >
            Send anything, anywhere in the city
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Poppins',
              color: '#666',
              maxWidth: '500px',
              mx: 'auto',
            }}
          >
            Documents, food, gifts, forgotten keys — our partners pick up and deliver across town.
          </Typography>
        </Box>

        <Paper sx={{ p: 3, borderRadius: 3, boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          <form onSubmit={handleSubmit}>
            {/* Item Details Section */}
            <Box sx={{ mb: 2.5 }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Description sx={{ color: '#106ebe', fontSize: 18 }} />
                Item Details
              </Typography>
              <Divider sx={{ mb: 1.5 }} />

              <FormControl component="fieldset" sx={{ mb: 1.5, width: '100%' }}>
                <FormLabel component="legend" sx={{ fontSize: '0.75rem', mb: 0.5, fontWeight: 500 }}>Category</FormLabel>
                <RadioGroup
                  row
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  sx={{ gap: 1.5, flexWrap: 'wrap' }}
                >
                  <FormControlLabel value="food" control={<Radio size="small" />} label="🍔 Food" sx={{ '& .MuiTypography-root': { fontSize: '0.8rem' } }} />
                  <FormControlLabel value="grocery" control={<Radio size="small" />} label="🛒 Grocery" sx={{ '& .MuiTypography-root': { fontSize: '0.8rem' } }} />
                  <FormControlLabel value="medicines" control={<Radio size="small" />} label="💊 Medicines" sx={{ '& .MuiTypography-root': { fontSize: '0.8rem' } }} />
                  <FormControlLabel value="parcel" control={<Radio size="small" />} label="📦 Parcel" sx={{ '& .MuiTypography-root': { fontSize: '0.8rem' } }} />
                  <FormControlLabel value="other" control={<Radio size="small" />} label="📄 Other" sx={{ '& .MuiTypography-root': { fontSize: '0.8rem' } }} />
                </RadioGroup>
              </FormControl>

              <TextField
                fullWidth
                label="What are you sending?"
                name="itemDescription"
                value={formData.itemDescription}
                onChange={handleChange}
                placeholder="e.g., Documents folder, lunch box, birthday gift..."
                variant="outlined"
                size="small"
                sx={{ mb: 1.5 }}
                InputProps={{
                  startAdornment: <Description sx={{ color: '#999', mr: 0.5, fontSize: 16 }} />,
                }}
              />

              <Box sx={{ mb: 1.5 }}>
                <Typography variant="caption" sx={{ fontWeight: 500, mb: 0.5, color: '#333', display: 'block' }}>
                  Photos of the item (optional)
                </Typography>
                <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<CameraAlt sx={{ fontSize: 16 }} />}
                    sx={{ textTransform: 'none', fontSize: '0.7rem', borderRadius: 1.5, py: 0.5 }}
                    onClick={startCamera}
                  >
                    Open Camera
                  </Button>
                  <Button
                    variant="outlined"
                    component="label"
                    size="small"
                    startIcon={<CloudUpload sx={{ fontSize: 16 }} />}
                    sx={{ textTransform: 'none', fontSize: '0.7rem', borderRadius: 1.5, py: 0.5 }}
                  >
                    Upload Photo
                    <input type="file" hidden accept="image/*" onChange={handlePhotoUpload} />
                  </Button>
                </Box>
                
                {/* Multiple Photo Previews */}
                {photoPreviews.length > 0 && (
                  <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 1.5 }}>
                    {photoPreviews.map((preview, index) => (
                      <Box key={index} sx={{ position: 'relative', display: 'inline-block' }}>
                        <img 
                          src={preview} 
                          alt={`Preview ${index + 1}`} 
                          style={{ 
                            width: '60px', 
                            height: '60px', 
                            objectFit: 'cover', 
                            borderRadius: 6, 
                            border: '1px solid #e0e0e0' 
                          }} 
                        />
                        <IconButton
                          size="small"
                          onClick={() => removePhoto(index)}
                          sx={{
                            position: 'absolute',
                            top: -8,
                            right: -8,
                            bgcolor: '#fff',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            '&:hover': { bgcolor: '#f5f5f5' },
                            width: 18,
                            height: 18,
                          }}
                        >
                          <Close sx={{ fontSize: 12 }} />
                        </IconButton>
                      </Box>
                    ))}
                  </Box>
                )}
              </Box>
            </Box>

            {/* Pickup From & Deliver To - Side by Side */}
            <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' }, mb: 2.5 }}>
              
              {/* Pickup From - Left */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOn sx={{ color: '#106ebe', fontSize: 18 }} />
                  Pickup From
                </Typography>
                <Divider sx={{ mb: 1.5 }} />
                
                <TextField
                  fullWidth
                  label="Sender Name *"
                  name="senderName"
                  value={formData.senderName}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  required
                  sx={{ mb: 1.5 }}
                  InputProps={{
                    startAdornment: <Person sx={{ color: '#999', mr: 0.5, fontSize: 16 }} />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Sender Mobile *"
                  name="senderMobile"
                  value={formData.senderMobile}
                  onChange={handleChange}
                  type="tel"
                  variant="outlined"
                  size="small"
                  required
                  sx={{ mb: 1.5 }}
                  InputProps={{
                    startAdornment: <Phone sx={{ color: '#999', mr: 0.5, fontSize: 16 }} />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Pickup Address *"
                  name="pickupAddress"
                  value={formData.pickupAddress}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  variant="outlined"
                  size="small"
                  required
                  InputProps={{
                    startAdornment: <LocationOn sx={{ color: '#999', mr: 0.5, fontSize: 16 }} />,
                  }}
                />
              </Box>

              {/* Deliver To - Right */}
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1.5, color: '#1a1a1a', display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <LocationOn sx={{ color: '#e67e22', fontSize: 18 }} />
                  Deliver To
                </Typography>
                <Divider sx={{ mb: 1.5 }} />
                
                <TextField
                  fullWidth
                  label="Receiver Name *"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleChange}
                  variant="outlined"
                  size="small"
                  required
                  sx={{ mb: 1.5 }}
                  InputProps={{
                    startAdornment: <Person sx={{ color: '#999', mr: 0.5, fontSize: 16 }} />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Receiver Mobile *"
                  name="receiverMobile"
                  value={formData.receiverMobile}
                  onChange={handleChange}
                  type="tel"
                  variant="outlined"
                  size="small"
                  required
                  sx={{ mb: 1.5 }}
                  InputProps={{
                    startAdornment: <Phone sx={{ color: '#999', mr: 0.5, fontSize: 16 }} />,
                  }}
                />
                <TextField
                  fullWidth
                  label="Drop Address *"
                  name="dropAddress"
                  value={formData.dropAddress}
                  onChange={handleChange}
                  multiline
                  rows={2}
                  variant="outlined"
                  size="small"
                  required
                  InputProps={{
                    startAdornment: <LocationOn sx={{ color: '#999', mr: 0.5, fontSize: 16 }} />,
                  }}
                />
              </Box>
            </Box>

            {/* Info Chip */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <Chip
                label="Delivery charges apply based on distance"
                size="small"
                sx={{ bgcolor: '#f0f0f0', color: '#666', fontSize: '0.65rem', height: 22 }}
              />
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              size="small"
              sx={{ bgcolor: '#106ebe', textTransform: 'none', borderRadius: 2, py: 1, fontSize: '0.8rem', '&:hover': { bgcolor: '#0a58a1' } }}
            >
              {loading ? 'Submitting...' : 'Request Pickup'}
            </Button>

            <Typography variant="caption" sx={{ display: 'block', textAlign: 'center', color: '#999', mt: 1.5, fontSize: '0.65rem' }}>
              By requesting pickup, you agree to our terms of service.
            </Typography>
          </form>
        </Paper>
      </Container>

      {/* Camera Dialog */}
      <Dialog 
        open={cameraOpen} 
        onClose={closeCamera}
        maxWidth="xs" 
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          py: 1.5,
          px: 2,
        }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Take a Photo</Typography>
          <IconButton onClick={closeCamera} size="small">
            <Close fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 2, overflow: 'hidden' }}>
          <video 
            ref={videoRef} 
            style={{ 
              width: '100%', 
              height: 'auto', 
              borderRadius: '8px', 
              marginBottom: '12px',
              maxHeight: '300px',
              objectFit: 'cover',
            }} 
            autoPlay 
            playsInline 
          />
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <Button
            variant="contained"
            fullWidth
            onClick={capturePhoto}
            size="small"
            sx={{ 
              bgcolor: '#106ebe', 
              textTransform: 'none',
              py: 0.8,
              fontSize: '0.8rem',
            }}
          >
            Capture Photo
          </Button>
        </DialogContent>
      </Dialog>

      {/* Replace Confirmation Dialog (Option C - Not active yet, ready to enable) */}
      <Dialog
        open={replaceConfirmOpen}
        onClose={() => setReplaceConfirmOpen(false)}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Replace Photo?</DialogTitle>
        <DialogContent>
          <Typography variant="body2">
            You already have a photo. Do you want to replace it with the new one?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setReplaceConfirmOpen(false)} size="small">
            Cancel
          </Button>
          <Button 
            onClick={() => {
              if (pendingPhoto) {
                setPhotoPreviews([pendingPhoto]);
                setPendingPhoto(null);
              }
              setReplaceConfirmOpen(false);
            }} 
            variant="contained"
            size="small"
            sx={{ bgcolor: '#106ebe' }}
          >
            Replace
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SendItems;