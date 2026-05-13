import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  InputAdornment,
  
} from '@mui/material';
import {
  Search,
  ExpandMore,
  Restaurant,
  DeliveryDining,
  Cancel,
  Security,
  Payment,
  SupportAgent,
  EmojiEvents,
  PersonAdd,
} from '@mui/icons-material';

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      title: 'Ordering & Basics',
      icon: <Restaurant sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'How do I order food from Foyer?',
          a: 'Ordering from Foyer is simple. Browse restaurants and home-chefs near you, select your favorite dishes, add them to your cart, choose your payment method, and confirm your delivery address. Once your order is placed, you will receive a confirmation via SMS and email. You can track your order in real-time from our app or website.',
        },
        {
          q: 'Can I order from multiple restaurants in one go?',
          a: 'Currently, each order can only be placed from one restaurant or home-chef at a time. This ensures your food arrives fresh and together. If you want items from different restaurants, you will need to place separate orders. We are working on a "Group Order" feature — stay tuned.',
        },
        {
          q: 'What are your operating hours?',
          a: 'Most restaurants and home-chefs on Foyer operate from 8:00 AM to 11:00 PM daily. However, hours vary by partner. Breakfast: 8:00 AM - 11:00 AM, Lunch: 11:30 AM - 3:00 PM, Snacks: 3:30 PM - 6:30 PM, Dinner: 7:00 PM - 11:00 PM. Some partners offer 24/7 delivery in select cities. Check individual restaurant pages for exact timings.',
        },
      ],
    },
    {
      title: 'Delivery & Timing',
      icon: <DeliveryDining sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'How long does delivery take?',
          a: 'Delivery times vary by location and restaurant partner. Typically, you can expect your order within 30 to 45 minutes from confirmation. During peak hours such as lunch and dinner, delivery may take slightly longer. You will see an estimated delivery time before placing your order, and you can track your delivery partner\'s live location once the order is picked up.',
        },
        {
          q: 'How do I track my delivery?',
          a: 'Once your order is confirmed and a delivery partner is assigned, you will receive an SMS and email with a tracking link. In the Foyer app, you can see the delivery partner\'s live location on a map. You will get real-time updates: Order confirmed → Being prepared → Picked up → Out for delivery → Delivered. You can also chat directly with your delivery partner through the app.',
        },
        {
          q: 'What are your delivery charges?',
          a: 'Delivery charges vary based on distance from the restaurant to your location, order value (orders above a certain threshold may qualify for free delivery), time of day (peak hours may have small surge fees), and city (different cities have different base rates). You will always see the exact delivery charge before confirming your order. There are no hidden fees.',
        },
        {
          q: 'Why is my delivery taking longer than estimated?',
          a: 'Delays can happen due to the restaurant experiencing high order volume, heavy traffic or weather conditions, the delivery partner handling multiple orders, or an incorrect or hard-to-find address. You can track your delivery partner\'s location live in the app. If the delay exceeds 30 minutes beyond the promised time, you are eligible for a compensation coupon. Contact support for assistance.',
        },
        {
          q: 'Can I change my delivery address after placing an order?',
          a: 'Within 2 minutes of placing the order, you can edit your delivery address from the order details page. After 2 minutes, if the restaurant has not started preparing your order, contact support immediately to request an address change (fees may apply). If the restaurant has started preparing your order, an address change is not possible. You can contact the delivery partner directly via app chat to guide them, but delivery is not guaranteed.',
        },
        {
          q: 'What if I am not home when my order arrives?',
          a: 'We offer several options: 1) Leave at door - Select this option during checkout. The delivery partner will take a photo of the order at your doorstep. 2) Leave with security or a neighbor - Add instructions in special notes. You are responsible for items left with others. 3) Reschedule delivery - Contact support before the delivery partner reaches your location. If delivery fails due to your unavailability after two attempts, the order will be canceled and no refund will be issued.',
        },
        {
          q: 'Do you offer contactless delivery?',
          a: 'Yes. Contactless delivery is available for all orders. During checkout, select "Leave at my door" as your delivery preference. Your delivery partner will leave the order at your doorstep, step back to a safe distance, ring the bell or call to notify you, and take a photo of the delivered order as proof. No physical contact is required.',
        },
      ],
    },
    {
      title: 'Cancellations & Refunds',
      icon: <Cancel sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'Can I cancel my order?',
          a: 'Within 2 minutes of placing the order, you can cancel free of charge through your order history. After 2 minutes, cancellation may not be possible because the restaurant may have already started preparing your food. Once the delivery partner is assigned, cancellation is not allowed. If you cancel after the 2-minute window, you may be charged the full order value because the restaurant and delivery partner have already committed resources to fulfill your order.',
        },
        {
          q: 'What if my order is wrong or missing items?',
          a: 'We sincerely apologize if this happens. Please do not accept the order if the packaging is tampered with or items are visibly wrong. Contact our customer support within 5 minutes of delivery via in-app chat, call, or email. Provide your order ID and photos of the incorrect or missing items. Our team will verify and process a partial or full refund within 24 to 48 hours.',
        },
        {
          q: 'Do you offer refunds?',
          a: 'Yes, refunds are processed under specific conditions. Full refund (100%) applies if your order was never delivered, the delivery partner marked it as delivered but you never received it, or the restaurant canceled your order after payment. Partial refund (50% to 100%) applies for missing items, wrong items delivered, food spilled or damaged during delivery (requires photo evidence), or order delivered late by 30 or more minutes beyond the promised time. Refunds are not eligible if you did not like the taste of the food, canceled after the 2-minute window, provided the wrong delivery address, or were not available to receive the delivery. Refund timeline is 5 to 7 business days for source account and 2 hours for Foyer Wallet.',
        },
      ],
    },
    {
      title: 'Food Quality & Safety',
      icon: <Security sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'What about hygiene and food safety?',
          a: 'This is our top priority at Foyer. For home-chefs, we require mandatory FSSAI license verification, virtual kitchen inspection before onboarding, random quality audits every 30 days, and a customer rating system for hygiene. For cloud kitchens and restaurants, we verify FSSAI licenses, require food safety training certification for staff, and conduct regular third-party hygiene audits. For delivery partners, we provide insulated hot and cold bags, offer contactless delivery, and enforce sanitization guidelines. We have a zero-tolerance policy for hygiene violations. Any partner found violating food safety standards is permanently banned.',
        },
        {
          q: 'How do you ensure food quality from home-chefs?',
          a: 'Every home-chef on Foyer undergoes a rigorous onboarding process that includes FSSAI license verification, a virtual kitchen inspection, and sample tasting. We conduct random quality audits every 30 days and maintain a strict rating system. Home-chefs with ratings below 4.0 are suspended pending re-inspection. Customer feedback directly impacts partner standing.',
        },
        {
          q: 'Can I add special instructions to my order?',
          a: 'Absolutely. During checkout, you will find a "Special Instructions" box where you can type your preferences. These instructions are sent directly to the kitchen. However, special requests are fulfilled on a best-effort basis and cannot be guaranteed. For allergy-related requests, we recommend calling the restaurant directly through our app before placing your order.',
        },
        {
          q: 'What if I have a food allergy?',
          a: 'Your safety is our priority. Each restaurant and home-chef page includes a detailed ingredient list for every dish. If you have a severe allergy, review the ingredient list carefully before ordering, call the restaurant directly to confirm preparation practices, add a "SEVERE ALLERGY ALERT" in the special instructions box, and for life-threatening allergies, we strongly recommend ordering only from FSSAI-certified commercial kitchens that have separate preparation areas. Foyer is not liable for allergic reactions. Please exercise caution.',
        },
      ],
    },
    {
      title: 'Payments & Promotions',
      icon: <Payment sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We offer multiple secure payment options including Credit and Debit Cards (Visa, Mastercard, RuPay), UPI (Google Pay, PhonePe, Paytm, Amazon Pay), Net Banking (all major banks), Cash on Delivery (COD) for orders under a certain limit, Foyer Wallet, and International Cards for foreign customers. All payments are processed through PCI-DSS compliant secure gateways. We never store your full card details.',
        },
        {
          q: 'Is Cash on Delivery (COD) safe?',
          a: 'Yes, COD is safe and verified. However, COD has a maximum limit per order (varies by city). You must have exact change because delivery partners may not carry change. Fake currency or refusal to pay will result in account suspension. COD orders require OTP verification upon delivery. For your safety, we recommend digital payments because they are faster and offer cashback rewards.',
        },
        {
          q: 'Can I use multiple promo codes on one order?',
          a: 'Only one promo code is allowed per order. However, promo codes can be combined with Foyer Wallet cashback (automatic) and credit card bank offers. Stacking multiple discount codes is not allowed.',
        },
      ],
    },
    {
      title: 'Customer Support & Issues',
      icon: <SupportAgent sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'How do I contact customer support?',
          a: 'We are here 24/7. Reach us through in-app chat (fastest response, typically under 1 minute), email at support@foyer.app (response within 2 hours), phone at +91 90870 86777 (9 AM to 9 PM, all days), or WhatsApp at +91 90870 86777 (text only, response within 30 minutes). For urgent delivery issues, always use in-app chat or phone call for the fastest resolution.',
        },
        {
          q: 'How do I report a problem with a restaurant or home-chef?',
          a: 'You can report issues through the Order page (select the order, click "Report a Problem"), Restaurant page (scroll to the bottom and click "Report this restaurant"), email at safety@foyer.app with your order ID, or by calling support. Issues we investigate include food quality or hygiene concerns, incorrect pricing on the menu, unprofessional behavior, and license or registration violations. We review every report and take action within 48 hours. Verified complaints result in partner suspension or a permanent ban.',
        },
      ],
    },
    {
      title: 'Tipping & Bulk Orders',
      icon: <EmojiEvents sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'Can I tip my delivery partner?',
          a: 'Absolutely. Tipping is a great way to appreciate your delivery partner\'s service. You can tip during checkout (add a tip amount), after delivery (rate your order and click "Add Tip"), or give cash directly to the delivery partner. 100% of the tip goes to your delivery partner. Foyer does not take any cut. Delivery partners rely on tips as a significant part of their earnings. We encourage tipping for good service.',
        },
        {
          q: 'Can I place bulk orders for my office or party?',
          a: 'Yes. We offer bulk ordering for office lunches (10 or more people), corporate events and meetings, birthday parties and family gatherings, and festival celebrations. To place a bulk order, contact our corporate team at bulk@foyer.app or call +91 90870 86777. Provide the date, time, number of people, and preferred cuisine. We will share curated menus from multiple restaurants. Place your order 24 to 48 hours in advance. Benefits include special bulk pricing, scheduled delivery at your exact time, dedicated support contact, and a single invoice for reimbursement. Minimum order value for bulk orders varies by city and partner. Available in all major cities.',
        },
        {
          q: 'Do you offer corporate accounts for businesses?',
          a: 'Yes. Corporate accounts are available for offices, coworking spaces, and businesses. Features include monthly billing (pay by invoice instead of per order), employee meal budgets and allowances, centralized ordering for teams, GST invoices for all orders, a dedicated account manager, and an analytics dashboard. To set up, email corporate@foyer.app with your business details. Our team will schedule a demo. You can choose your plan: Basic at no monthly fee or Pro at a nominal monthly fee. Onboard your employees within 24 hours.',
        },
      ],
    },
    {
      title: 'Partner Onboarding',
      icon: <PersonAdd sx={{ color: '#106ebe' }} />,
      questions: [
        {
          q: 'How do I become a home-chef partner?',
          a: 'We would love to have you on board. Requirements include a valid FSSAI license (mandatory for India operations), a clean and hygienic kitchen space (virtual inspection required), basic cooking equipment for your chosen cuisine, and the ability to package food safely for delivery. To apply, visit our Partner Portal, fill out the application form (takes 10 to 15 minutes), submit required documents (FSSAI license, ID proof, address proof), and our team will conduct a virtual kitchen inspection. Once approved, you will receive onboarding training and can start receiving orders within 7 days. Contact us at partners@foyer.app or call +91 90870 86777.',
        },
        {
          q: 'Is there a minimum order value?',
          a: 'Yes, minimum order values vary by partner and are set by each restaurant or home-chef independently. Home-chefs typically have a low minimum order value, cloud kitchens have a medium minimum, and restaurants and pure veg specialties have a low to medium minimum. The exact minimum order value is clearly displayed on each restaurant\'s page before you start adding items to your cart. Ranges are approximate and may vary by city, time of day, and partner policies. Always check the restaurant page for the most accurate information.',
        },
      ],
    },
  ];

 
  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.a.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh', py: 6 }}>
      <Container maxWidth="md">
        {/* Header */}
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
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Poppins',
            color: '#666',
            textAlign: 'center',
            mb: 4,
          }}
        >
          Find answers to common questions about ordering, delivery, payments, and more.
        </Typography>

        
        <TextField
          fullWidth
          placeholder="Search for your question..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            mb: 5,
            '& .MuiOutlinedInput-root': {
              borderRadius: 5,
              bgcolor: 'white',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search sx={{ color: '#999' }} />
              </InputAdornment>
            ),
          }}
        />

        
        <Box>
          {filteredCategories.map((category, idx) => (
            <Box key={idx} sx={{ mb: 4 }}>
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                {category.icon}
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    color: '#1a1a1a',
                  }}
                >
                  {category.title}
                </Typography>
                
        
              </Box>

              {category.questions.map((item, qIdx) => (
                <Accordion
                  key={qIdx}
                  sx={{
                    mb: 1.5,
                    borderRadius: '12px !important',
                    '&:before': { display: 'none' },
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    sx={{
                      borderRadius: '12px',
                      '& .MuiTypography-root': {
                        fontFamily: 'Poppins',
                        fontWeight: 500,
                        color: '#1a1a1a',
                      },
                    }}
                  >
                    <Typography variant="subtitle1">{item.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Poppins',
                        color: '#555',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ))}
        </Box>

        
        {filteredCategories.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: '#666', mb: 1 }}>
              No results found
            </Typography>
            <Typography variant="body2" sx={{ color: '#999' }}>
              Try searching with different keywords or contact our support team.
            </Typography>
          </Box>
        )}

       
        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: 'white',
            borderRadius: 3,
            textAlign: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
            Still have questions?
          </Typography>
          <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
            Can't find the answer you're looking for? Please contact our support team.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography
              component="a"
              href="mailto:support@foyer.app"
              sx={{ color: '#106ebe', textDecoration: 'none', fontWeight: 500 }}
            >
              support@foyer.app
            </Typography>
            <Typography sx={{ color: '#ccc' }}>|</Typography>
            <Typography
              component="a"
              href="tel:+919087086777"
              sx={{ color: '#106ebe', textDecoration: 'none', fontWeight: 500 }}
            >
              +91 90870 86777
            </Typography>
            <Typography sx={{ color: '#ccc' }}>|</Typography>
            <Typography
              component="a"
              href="/contactus"
              sx={{ color: '#106ebe', textDecoration: 'none', fontWeight: 500 }}
            >
              Contact Us
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQs;