import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { CheckCircle, ExpandMore } from '@mui/icons-material';

const JoinAsDeliveryPartner = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    
    setTimeout(() => {
      console.log('Form submitted:', Object.fromEntries(formData));
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 6 }}>
        <Container maxWidth="sm">
          <Box sx={{ textAlign: 'center', bgcolor: 'white', p: 5, borderRadius: 3 }}>
            <CheckCircle sx={{ fontSize: 80, color: '#4caf50', mb: 2 }} />
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              Application Submitted!
            </Typography>
            <Typography variant="body1" sx={{ color: '#666', mb: 3 }}>
              Thank you for applying. Our team will review and get back to you within 48 hours.
            </Typography>
            <Button variant="contained" href="/" sx={{ bgcolor: '#106ebe' }}>
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const faqItems = [
    {
      question: 'How much can I earn as a delivery partner?',
      answer: 'You can earn up to ₹25,000 per month working flexible hours, including bonuses and incentives based on delivery volume and ratings.',
    },
    {
      question: 'Do I need my own vehicle?',
      answer: 'Yes, you need your own two-wheeler (bike/scooter) with valid registration and insurance documents.',
    },
    {
      question: 'How do I get paid?',
      answer: 'You will receive daily payouts directly to your bank account. No waiting for payday.',
    },
    {
      question: 'Is there any training provided?',
      answer: 'Yes, Foyer provides comprehensive training on app usage, delivery best practices, and safety guidelines.',
    },
    {
      question: 'What insurance coverage do you provide?',
      answer: 'We provide insurance coverage during delivery hours to ensure you are protected on the job.',
    },
    {
      question: 'What are the working hours?',
      answer: 'You can choose your own working hours. There are no fixed timings — work when you want.',
    },
    {
      question: 'Is the safety kit free?',
      answer: 'Yes, we provide a free safety kit including helmet, mask, sanitizer, and reflective vest.',
    },
    {
      question: 'How do I contact support?',
      answer: 'Our support team is available 24/7 via in-app chat, phone, or email at partners@foyer.app.',
    },
    {
      question: 'What documents are required?',
      answer: 'You need Aadhar Card, PAN Card, Driving License, and vehicle registration documents.',
    },
    {
      question: 'Can I work part-time?',
      answer: 'Absolutely! You can work as little as 2 hours a day. The choice is yours.',
    },
    {
      question: 'How long does approval take?',
      answer: 'Once you submit your application, our team reviews and approves within 24-48 hours.',
    },
    {
      question: 'Is there a joining fee?',
      answer: 'No, joining as a delivery partner is completely free. There are no hidden charges.',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
      
      {/* TOP SECTION WITH BACKGROUND IMAGE - NO DARK OVERLAY */}
      <Box sx={{ 
        backgroundImage: 'url("https://media.istockphoto.com/id/1763486134/photo/swiggy-food-delivery-startup-technology-startup-rider-courier-riding-at-sunrise-sunset.jpg?s=612x612&w=0&k=20&c=TeKoGz0JiL-qNaK7-EF3wm5wU-6_O_4jW0x29bBd3fs=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '600px',
      }}>
        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: 'Poppins',
                fontWeight: 700,
                color: '#ffffff',
                mb: 1,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              }}
            >
              Join as Delivery Partner
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Poppins',
                color: '#ffffff',
                maxWidth: '600px',
                mx: 'auto',
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
              }}
            >
              Deliver food with Foyer. Flexible working hours, daily pay and insurance coverage.
            </Typography>
          </Box>

          {/* Two Column Layout - Benefits & Form */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 6, flexDirection: { xs: 'column', md: 'row' } }}>
            
            {/* Left Column - Benefits */}
            <Box sx={{ flex: '0 0 45%', maxWidth: '450px', bgcolor: 'rgba(255,255,255,0.9)', p: 3, borderRadius: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#1a1a1a' }}>
                Why partner with Foyer?
              </Typography>

              <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }} />
                <Typography variant="body1" sx={{ color: '#333' }}>Flexible working hours</Typography>
              </Box>
              <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }} />
                <Typography variant="body1" sx={{ color: '#333' }}>Daily payouts directly to bank</Typography>
              </Box>
              <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }} />
                <Typography variant="body1" sx={{ color: '#333' }}>Insurance coverage</Typography>
              </Box>
              <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }} />
                <Typography variant="body1" sx={{ color: '#333' }}>Free safety kit provided</Typography>
              </Box>
              <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50' }} />
                <Typography variant="body1" sx={{ color: '#333' }}>24/7 partner support</Typography>
              </Box>
            </Box>

            {/* Right Column - Form */}
            <Box sx={{ flex: '0 0 45%', maxWidth: '450px', bgcolor: 'white', p: 4, borderRadius: 3, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: '#1a1a1a' }}>
                Registration Form
              </Typography>

              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Full Name *"
                  name="fullName"
                  size="medium"
                  required
                  sx={{ mb: 2 }}
                />
                
                <TextField
                  fullWidth
                  label="Mobile Number *"
                  name="mobile"
                  type="tel"
                  size="medium"
                  required
                  sx={{ mb: 2 }}
                />
                
                <TextField
                  fullWidth
                  label="City *"
                  name="city"
                  size="medium"
                  placeholder="e.g., Hyderabad, Bangalore, Mumbai"
                  required
                  sx={{ mb: 3 }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ bgcolor: '#106ebe', py: 1.5, textTransform: 'none', fontWeight: 600, fontSize: '1rem' }}
                >
                  {loading ? <CircularProgress size={24} /> : 'Submit Application'}
                </Button>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* BOTTOM SECTION - Normal Background */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Why Join Section - 4 cards */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              textAlign: 'center',
              mb: 2,
            }}
          >
            Why join Foyer?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              textAlign: 'center',
              maxWidth: '700px',
              mx: 'auto',
              mb: 4,
            }}
          >
            At Foyer, we respect your time and efforts. We know you deserve the best, so we strive to give you the best.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <Typography variant="h3" sx={{ fontSize: '2rem', mb: 0.5 }}>💰</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}>Get Paid Daily</Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>Direct to your bank</Typography>
            </Box>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <Typography variant="h3" sx={{ fontSize: '2rem', mb: 0.5 }}>🕐</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}>Flexible Hours</Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>Choose your schedule</Typography>
            </Box>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <Typography variant="h3" sx={{ fontSize: '2rem', mb: 0.5 }}>🛡️</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}>Insurance Coverage</Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>You're covered</Typography>
            </Box>
            <Box sx={{ flex: '1 1 200px', textAlign: 'center', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <Typography variant="h3" sx={{ fontSize: '2rem', mb: 0.5 }}>🎒</Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1a1a1a', mb: 0.5 }}>Safety Kit</Typography>
              <Typography variant="caption" sx={{ color: '#666' }}>Stay safe</Typography>
            </Box>
          </Box>
        </Box>

        {/* 3 Easy Steps */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              textAlign: 'center',
              mb: 4,
            }}
          >
            Join Foyer in 3 easy steps
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Box sx={{ textAlign: 'center', flex: 1, minWidth: '160px' }}>
              <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#106ebe', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, mx: 'auto', mb: 1 }}>1</Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a' }}>Download App</Typography>
            </Box>
            <Typography variant="h5" sx={{ color: '#666' }}>→</Typography>
            <Box sx={{ textAlign: 'center', flex: 1, minWidth: '160px' }}>
              <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#106ebe', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, mx: 'auto', mb: 1 }}>2</Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a' }}>Register</Typography>
            </Box>
            <Typography variant="h5" sx={{ color: '#666' }}>→</Typography>
            <Box sx={{ textAlign: 'center', flex: 1, minWidth: '160px' }}>
              <Box sx={{ width: 50, height: 50, borderRadius: '50%', bgcolor: '#106ebe', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 700, mx: 'auto', mb: 1 }}>3</Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: '#1a1a1a' }}>Start Delivering</Typography>
            </Box>
          </Box>
        </Box>

        {/* FAQ Section - 2 Columns */}
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              textAlign: 'center',
              mb: 4,
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: 1 }}>
              {faqItems.slice(0, 6).map((item, index) => (
                <Accordion key={index} sx={{ mb: 1.5, borderRadius: '8px !important', '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
            <Box sx={{ flex: 1 }}>
              {faqItems.slice(6, 12).map((item, index) => (
                <Accordion key={index} sx={{ mb: 1.5, borderRadius: '8px !important', '&:before': { display: 'none' } }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.9rem' }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Support Footer */}
        <Typography variant="body2" sx={{ textAlign: 'center', color: '#666', display: 'block', mt: 4, pb: 4 }}>
          For support, email us at{' '}
          <Typography component="a" href="mailto:partners@foyer.app" sx={{ color: '#106ebe', textDecoration: 'none', fontWeight: 500 }}>
            partners@foyer.app
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default JoinAsDeliveryPartner;