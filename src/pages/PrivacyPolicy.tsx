import { Box, Container, Typography, Divider } from '@mui/material';

const PrivacyPolicy = () => {
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
          Privacy Policy
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
            Applicability and Scope
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Foyer and/or its affiliates ("Foyer," the "Company," "we," "us," and "our,") respect your privacy and are committed to protecting it. This policy describes the types of information that Foyer may collect from you when you access or use its websites, applications and other online services (collectively, referred as "Services"); and its practices for collecting, using, maintaining, protecting and disclosing that information.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            This policy applies only to the information Foyer collects through its Services, in email, text and other electronic communications sent through or in connection with its Services.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Please read this policy carefully to understand Foyer's policies and practices regarding processing of your information. By accessing or using Foyer's Services and/or registering for an account with Foyer or any of its affiliates, you agree to this privacy policy and you provide your informed consent to the collection, use, disclosure, retention, and protection of your personal information as described here.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Permissible Age
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            By using the Services, you represent and warrant that you are either at least 18 years of age or have the express permission of a parent or legal guardian to use the Services. If you are a parent or legal guardian of a minor who uses the Services, you are fully responsible for their use of the Services, including any legal liability they may incur.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Information We Collect and How We Use It
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Foyer and its platforms and affiliate companies collect information from and about users of our Services, including:
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Personal Information:</strong> Information that relates to an identified or identifiable individual. This may include data you provide directly, data generated through your use of the Services, or data obtained from third parties.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            <strong>Other Information:</strong> Data related to your use of the Services that may not directly identify you by itself but is collected in connection with your account or activities.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Information You Provide to Us
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Personal information:</strong> Name, address, email address, postal code, password, gender, mobile phone number, date of birth, and other information you may provide with your account.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Your content:</strong> Information you provide through our Services, including your reviews, photographs, comments, lists, followers, favorite restaurants, and other information in your account profile.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Your bookings and preferences:</strong> Details related to events you book, attend, or express interest in via our Services.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Your activities:</strong> The search terms you have looked up, results you selected, how long you used our Services, and which features you used.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Your communications:</strong> Communications between you and other users, delivery partners or merchants through our Services.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            <strong>Your transactional information:</strong> If you make reservations or purchases through our Services, we may collect and store information about you to process your requests, including your phone number, address, email, billing information and payment card information.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Information We Collect Through Automatic Data Collection Technologies
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Service Usage & Activity Data:</strong> Details about your interactions with our Services, such as search queries, pages viewed, features used, and transaction history.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Device & Connection Information:</strong> IP address, device type, operating system, browser type and version, unique device identifiers, and mobile network information.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Precise and real-time location information:</strong> When you use location-enabled services, we may collect and process information about your mobile device's GPS location.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            <strong>Cookies and Other Electronic Tools:</strong> We may use cookies, pixel tags, web beacons, and other similar technologies to collect and store information about your use of the Services.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            How We Use the Information We Collect
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Core Service Delivery:</strong> Administer our Services, process transactions, provide customer support, and notify you about changes to our platform.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Platform Security:</strong> Diagnose technical problems, detect and prevent fraud, and enforce our rights arising from contracts.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Service Improvement:</strong> Understand user behavior to improve content and features, personalize your experience, and conduct data analysis.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Marketing & Advertising:</strong> Send you communications about promotions and services, and show you relevant advertisements.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            <strong>Recording and Retention:</strong> We may monitor and record communications for quality assurance, training, and fraud prevention purposes.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            How We Share the Information We Collect
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            We may disclose personal information to our subsidiaries and affiliates, contractors and service providers, and third-party business partners.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            We may share your information with law enforcement, government agencies, or courts to comply with legal processes or investigate illegal activities.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            When you make reservations or place orders with merchants through our Services, we share necessary information with them to fulfill your request.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Payment card information is shared with third-party payment processors and fraud detection services in accordance with PCI compliance standards.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Data Storage
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Foyer may process and retain your personal information on its servers in India where its data centers are located, and/or on the servers of its third parties (in or outside India), having contractual relationships with Foyer.
          </Typography>

          <Divider sx={{ my: 3 }} />

  
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Your Information Rights
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            <strong>Account Deletion:</strong> If you would like to permanently delete your account, please contact us. Once deleted, we will not be able to restore your account or its associated data.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            <strong>Limitations:</strong> Your rights may be limited if requests are abusive, unreasonably excessive, or where the information relates to existing legal proceedings.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Security: How We Protect Your Information
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            We have implemented appropriate physical, electronic, and managerial procedures to safeguard and help prevent unauthorized access to your information. Third-party payment gateway and payment processing services are validated as PCI compliant service providers.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Third Party Links and Services
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            The Services may contain links to third-party websites. We are not responsible for the content or privacy practices of other websites or services which may be linked to our services. We strongly encourage you to read such third parties' privacy policies prior to sharing any personal information with them.
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Policy Amendments
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            We reserve the right to amend this Privacy Policy from time to time. Please check this page periodically for any changes. Your continued use of the Services following the posting of changes will constitute your consent and acceptance of those changes.
          </Typography>

          <Divider sx={{ my: 3 }} />

        
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Data of Minors
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Our Services are generally not directed to individuals under the age of 18. We do not knowingly collect personal information from minors for the purpose of creating an account. If we become aware that personal information of a minor has been provided without valid parental consent, we reserve the right to delete such information immediately.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            Contact Us
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
            <strong>Contact Email:</strong> privacy@foyer.app
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" sx={{ color: '#666', textAlign: 'center', fontSize: '0.75rem' }}>
            By using Foyer, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;