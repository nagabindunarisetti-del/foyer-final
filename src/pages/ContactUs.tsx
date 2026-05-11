import { Box, Container, Typography, TextField, Button, Paper, Divider, Link } from '@mui/material';
import { Send } from '@mui/icons-material';

const ContactUs = () => {
  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="lg">
     
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 700,
            color: '#1a1a1a',
            textAlign: 'center',
            mb: 1,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Poppins',
            color: '#666',
            textAlign: 'center',
            mb: 5,
          }}
        >
          Email, call, or complete the form to learn how Foyer can solve your food delivery needs.
        </Typography>

        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
         
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box sx={{ p: 3, flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
                  You can reach us anytime
                </Typography>

                <Divider sx={{ my: 2 }} />

                
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  Customer Support
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', fontSize: '0.8rem', mb: 2 }}>
                  Our support team is available around the <br/>clock to address any concerns or queries you may have.
                </Typography>

                <Divider sx={{ my: 2 }} />

                
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  Feedback and Suggestions
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', fontSize: '0.8rem', mb: 2 }}>
                  We value your feedback and are continuously <br/>working to improve Foyer. Your input is crucial in shaping the future of Foyer.
                </Typography>

                <Divider sx={{ my: 2 }} />

                
                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                  Media Inquiries
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', fontSize: '0.8rem', mb: 3 }}>
                  For media-related questions or press <br/> inquiries, please contact us at{' '}
                  <Link href="mailto:media@foyer.app" sx={{ color: '#106ebe', textDecoration: 'none' }}>
                    media@foyer.app
                  </Link>
                </Typography>

                
                <Box
                  component="iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4372116288323!2d78.36212117331918!3d17.43877580132631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ee44e40b52cf5e7%3A0xcb5f6c9932fd733e!2sONAS!5e0!3m2!1sen!2sin!4v1777901859308!5m2!1sen!2sin"
                  sx={{
                    width: '100%',
                    height: '200px',
                    border: 0,
                    borderRadius: 2,
                    mt: 2,
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </Box>
            </Paper>
          </Box>

       
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Send us a Message
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 1.5, mb: 1.5 }}>
                <TextField fullWidth label="First Name" size="small" />
                <TextField fullWidth label="Last Name" size="small" />
              </Box>

              <TextField
                fullWidth
                label="Your Email"
                type="email"
                size="small"
                sx={{ mb: 1.5 }}
              />

              <TextField
                fullWidth
                label="Phone Number"
                size="small"
                sx={{ mb: 1.5 }}
              />

              <TextField
                fullWidth
                label="How can we help?"
                multiline
                rows={3}
                size="small"
                sx={{ mb: 1 }}
              />

              <Typography variant="caption" sx={{ color: '#666', display: 'block', mb: 1.5 }}>
                0/120
              </Typography>

              <Button
                variant="contained"
                endIcon={<Send />}
                sx={{
                  bgcolor: '#106ebe',
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  py: 0.8,
                  alignSelf: 'flex-start',
                  '&:hover': { bgcolor: '#0a58a1' },
                }}
              >
                Submit
              </Button>

              <Typography variant="caption" sx={{ color: '#999', display: 'block', mt: 2 }}>
                By contacting us, you agree to our Terms of service and Privacy Policy
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;