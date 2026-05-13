import { Box, Container, Typography, TextField, Button, Paper, Link, MenuItem } from '@mui/material';

import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();

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

       
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 5 }}>
          
        
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                bgcolor: 'white',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                height: '100%',
                p: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                Get in Touch
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 3 }}>
                You can reach us anytime
              </Typography>

              
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4372116288323!2d78.36212117331918!3d17.43877580132631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ee44e40b52cf5e7%3A0xcb5f6c9932fd733e!2sONAS!5e0!3m2!1sen!2sin!4v1777901859308!5m2!1sen!2sin"
                sx={{
                  width: '100%',
                  height: '200px',
                  border: 0,
                  borderRadius: 2,
                  mb: 2,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

             
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                ONAS Consulting Services Pvt Ltd
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', mb: 2, fontSize: '0.8rem' }}>
                Vasavi Sky City, 8th Floor, Quick Start-CoWorking, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032
              </Typography>

              <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
                <strong>Email:</strong>{' '}
                <Link href="mailto:sales@onasglobal.com" sx={{ color: '#106ebe', textDecoration: 'none' }}>
                  sales@onasglobal.com
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: '#333', mb: 1 }}>
                <strong>Phone:</strong> +91-928 150 6441, +91-928 150 6440, +1 607-326-2406
              </Typography>
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
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Send us a Message
              </Typography>

              
              <TextField
                select
                fullWidth
                label="I am a"
                defaultValue="user"
                size="small"
                sx={{ mb: 1.5 }}
              >
                <MenuItem value="user">👤 User</MenuItem>
                <MenuItem value="provider">🍽️  (Provider) - Home-Chef / Cloud Kitchen /  Restaurant </MenuItem>
                <MenuItem value="delivery-partner">🛵 Delivery Partner</MenuItem>
              </TextField>

           
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

             
             

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
               
                  fullWidth
                  
                 
                  sx={{
                    bgcolor: '#106ebe',
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 600,
                    
                    px: 4,
                    py: 0.8,
                    '&:hover': { bgcolor: '#0a58a1' },
                  }}
                >
                  Submit
                </Button>
              </Box>

              
              <Typography variant="caption" sx={{ color: '#999', display: 'block', textAlign: 'center', mt: 2 }}>
                By contacting us, you agree to our{' '}
                <Link 
                  onClick={() => navigate('/terms')}
                  sx={{ color: '#106ebe', textDecoration: 'none', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                >
                  Terms of service
                </Link>{' '}
                and{' '}
                <Link 
                  onClick={() => navigate('/privacy')}
                  sx={{ color: '#106ebe', textDecoration: 'none', cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                >
                  Privacy Policy
                </Link>
              </Typography>
            </Paper>
          </Box>
        </Box>

       
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            gap: 0,
            borderTop: '1px solid #e0e0e0',
            pt: 5,
            mt: 2,
          }}
        >
          
          <Box sx={{ 
            flex: 1, 
            p: 3,
            borderRight: { md: '1px solid #e0e0e0' },
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Customer Support
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7 }}>
              Our dedicated customer support team is available 24/7 to assist you with any questions, concerns, or issues you may have. Whether you need help with an order, have a complaint, or just want to share your experience, we're here to listen and resolve your queries promptly. You can reach us via phone, email, or live chat, and we guarantee a response within 24 hours.
            </Typography>
          </Box>

          <Box sx={{ 
            flex: 1, 
            p: 3,
            borderRight: { md: '1px solid #e0e0e0' },
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Feedback and Suggestions
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7 }}>
              Your feedback is invaluable to us. We are constantly working to improve Foyer and provide the best possible experience for our customers, restaurant partners, and delivery partners. If you have suggestions for new features, improvements to existing services, or ideas to make our platform better, please share them with us. Every piece of feedback is reviewed by our product team and helps shape the future of Foyer.
            </Typography>
          </Box>

          
          <Box sx={{ 
            flex: 1, 
            p: 3,
          }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Media Inquiries
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7 }}>
              For media-related questions, press inquiries, interview requests, or collaboration opportunities, please reach out to our media relations team. We are happy to provide information about Foyer's growth, partnerships, community initiatives, and latest updates. Whether you're a journalist, blogger, or content creator, we'd love to hear from you. Send us an email and our team will get back to you within 48 hours.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              <strong>Email:</strong>{' '}
              <Link href="mailto:media@foyer.app" sx={{ color: '#106ebe', textDecoration: 'none', fontWeight: 500 }}>
                media@foyer.app
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;