import { Box, Container, Typography, Divider } from '@mui/material';

const TermsConditions = () => {
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
          Terms of Service
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: 'Poppins',
            color: '#666',
            textAlign: 'center',
            mb: 5,
          }}
        >
          Last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </Typography>

       
        <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
          
        
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            I. Acceptance of terms
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Thank you for using Foyer. These Terms of Service (the "Terms") are intended to make you aware of your legal rights and responsibilities with respect to your access to and use of the Foyer website at www.foyer.app (the "Site") and any related mobile or software applications ("Foyer Platform") including but not limited to delivery of information via the website whether existing now or in the future that link to the Terms (collectively, the "Services").
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            These Terms are effective for all existing and future Foyer customers. Please read these Terms carefully. By accessing or using the Foyer Platform, you are agreeing to these Terms and concluding a legally binding contract with Foyer ("Foyer", "we", "us", "our"). You may not use the Services if you do not accept the Terms or are unable to be bound by the Terms.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            II. Definitions
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>"Customer"</strong> or <strong>"You"</strong> or <strong>"Your"</strong> refers to you, as a customer of the Services.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>"Content"</strong> will include (but is not limited to) reviews, images, photos, audio, video, location data, and all other forms of information or data.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>"Restaurant"/"Restaurant Partner"</strong> means the home-chefs, cloud-kitchens, and restaurants listed on Foyer Platform.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>"Delivery Partner"</strong> means the third-party individuals or entities that facilitate delivery of orders placed on the Foyer Platform.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            <strong>"Platform Services"</strong> means the services provided by Foyer including order placement, payment processing, and delivery coordination.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            III. Eligibility to use the services
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            You hereby represent and warrant that you are at least eighteen (18) years of age or above and are fully able and competent to understand and agree the terms set forth in these Terms. You agree to use the Services only in compliance with these Terms and applicable law.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            IV. Account Registration and Security
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            To access certain features of the Platform, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are solely responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            V. Orders and Payments
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            When you place an order through the Platform, you agree to pay the total amount specified, including all applicable taxes, delivery fees, and any other charges. All payments are processed through secure payment gateways.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            Foyer reserves the right to cancel any order at any time for reasons including but not limited to: unavailability of items, pricing errors, suspected fraud, or violation of these Terms.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Refunds, if applicable, will be processed in accordance with our Refund Policy and may take 5-7 business days to reflect in your account.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            VI. Delivery and Cancellation
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            Delivery times provided are estimates only and may vary due to factors beyond our control. Foyer is not liable for any delays in delivery.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            You may cancel an order within 2 minutes of placing it. After this period, cancellation may not be possible and you may be charged the full order amount.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            In case of failed delivery due to your unavailability or incorrect address provided, no refund will be issued.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            VII. User Conduct and Prohibited Activities
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            You agree not to:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ color: '#444', mb: 2, lineHeight: 1.6, pl: 2 }}>
            <li>Use the Platform for any illegal purpose or in violation of any laws</li>
            <li>Post false, inaccurate, misleading, or defamatory reviews</li>
            <li>Interfere with or disrupt the Platform or servers</li>
            <li>Attempt to gain unauthorized access to any accounts or systems</li>
            <li>Use any automated means to access or scrape the Platform</li>
            <li>Harass, abuse, or harm any other user, delivery partner, or restaurant partner</li>
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            VIII. Intellectual Property Rights
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            All content on the Platform, including text, graphics, logos, images, and software, is the property of Foyer or its licensors and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            IX. Reviews and Ratings
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Customers may submit reviews and ratings for restaurants. You agree that your reviews will be honest, accurate, and based on actual experiences. Foyer reserves the right to remove any review that violates these Terms or is otherwise inappropriate. Foyer does not endorse any reviews and is not responsible for their accuracy.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            X. Disclaimer of Warranties
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE". FOYER MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, REGARDING THE OPERATION OR AVAILABILITY OF THE SERVICES, OR THE ACCURACY, RELIABILITY, OR QUALITY OF ANY CONTENT OR PRODUCTS AVAILABLE THROUGH THE SERVICES.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            XI. Limitation of Liability
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            TO THE FULLEST EXTENT PERMITTED BY LAW, FOYER SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
          </Typography>

          <Divider sx={{ my: 3 }} />

        
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            XII. Indemnification
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            You agree to indemnify and hold harmless Foyer and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses (including reasonable attorneys' fees) arising out of or relating to your use of the Services, your violation of these Terms, or your infringement of any third-party rights.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            XIII. Termination
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            We may terminate or suspend your account and access to the Services immediately, without prior notice or liability, for any reason, including without limitation if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            XIV. Governing Law
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            XV. Changes to Terms
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Foyer reserves the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            XVI. Contact Information
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Legal Entity Name:</strong> Foyer
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Registered Address:</strong> Vasavi Sky City, 8th Floor, Quick Start-CoWorking, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Website:</strong> www.foyer.app
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            <strong>Contact Email:</strong> legal@foyer.app
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" sx={{ color: '#666', textAlign: 'center', fontSize: '0.75rem' }}>
            By using Foyer, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TermsConditions;