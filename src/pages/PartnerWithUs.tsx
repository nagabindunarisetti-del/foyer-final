import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
  Alert,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  InputAdornment,
} from "@mui/material";
import {
  CheckCircle,
  ExpandMore,
  Person,
  Email,
  Phone,
} from "@mui/icons-material";

const PartnerWithUs = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [partnerType, setPartnerType] = useState("home-chef");

 
  useEffect(() => {
    if (location.state?.partnerType) {
      setPartnerType(location.state.partnerType);
    }
  }, [location.state]);

  const handlePartnerTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPartnerType(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    data.partnerType = partnerType;

    setTimeout(() => {
      console.log("Form submitted:", data);
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  if (success) {
    return (
      <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh", py: 6 }}>
        <Container maxWidth="sm">
          <Box
            sx={{
              textAlign: "center",
              bgcolor: "white",
              p: 5,
              borderRadius: 4,
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
            }}
          >
            <CheckCircle sx={{ fontSize: 80, color: "#4caf50", mb: 2 }} />
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, mb: 2, color: "#1a1a1a" }}
            >
              Application Submitted!
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
              Thank you for applying. Our team will review and get back to you
              within 48 hours.
            </Typography>
            <Button
              variant="contained"
              href="/"
              sx={{ bgcolor: "#106ebe", px: 4, py: 1, borderRadius: 2 }}
            >
              Back to Home
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  const getBackgroundImage = () => {
    switch (partnerType) {
      case "home-chef":
        return 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg")';
      case "cloud-kitchen":
        return 'url("https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg")';
      case "restaurant":
        return 'url("https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg")';
      default:
        return 'url("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg")';
    }
  };

  const getHeading = () => {
    switch (partnerType) {
      case "home-chef":
        return "Why become a Home-Chef with Foyer?";
      case "cloud-kitchen":
        return "Why partner as a Cloud Kitchen with Foyer?";
      case "restaurant":
        return "Why partner your Restaurant with Foyer?";
      default:
        return "";
    }
  };

  const getDescriptionParagraph = () => {
    switch (partnerType) {
      case "home-chef":
        return "Join Foyer as a Home-Chef and turn your passion for cooking into a rewarding income stream. Work from the comfort of your own kitchen with complete flexibility to set your own hours and choose which dishes to offer. Foyer handles all delivery logistics, customer support, and marketing — you just focus on creating delicious, hygienic food. Earn between ₹15,000 to ₹50,000 per month based on your order volume and customer ratings. We provide a dedicated partner dashboard to track your earnings, manage orders, and communicate.";
      case "cloud-kitchen":
        return "Partner with Foyer as a Cloud Kitchen and scale your food business with lower setup costs. Operate multiple brands from a single kitchen without the overhead of a traditional restaurant. Our delivery-only model eliminates prime real estate and front-of-house staff. Earn profit margins between 15-35% while reaching thousands of customers. We provide real-time analytics, marketing tools, and trained delivery partners to help you grow.";
      case "restaurant":
        return "Partner your restaurant with Foyer and access millions of hungry customers actively looking to order from restaurants like yours. Our powerful merchant dashboard gives you complete control over your menu, pricing, and real-time order tracking. You'll receive detailed analytics about customer preferences and peak ordering times. Foyer's trained delivery partners ensure your food reaches customers hot and fresh. Our 24/7 merchant support team is always ready to assist you.";
      default:
        return "";
    }
  };

  const getBenefits = () => {
    switch (partnerType) {
      case "home-chef":
        return [
          "🏠 Work from your own kitchen",
          "💰 Earn extra income (₹15,000 - ₹50,000/month)",
          "🛵 We handle delivery",
          "📞 24/7 support",
          "✅ No rent or commercial space needed",
        ];
      case "cloud-kitchen":
        return [
          "🏭 40-60% lower setup cost",
          "🍔 Run multiple brands from one kitchen",
          "📈 15-35% profit margins",
          "🛵 Doorstep delivery convenience",
          "📞 Dedicated support team",
        ];
      case "restaurant":
        return [
          "👥 Reach millions of customers",
          "📊 Powerful analytics dashboard",
          "🎯 Marketing tools & promotions",
          "🛵 Trained delivery partners",
          "📞 24/7 merchant support",
        ];
      default:
        return [];
    }
  };

  const getDocuments = () => {
    switch (partnerType) {
      case "home-chef":
        return [
          "FSSAI Basic License",
          "PAN Card",
          "Bank Account Details",
          "Kitchen Photos",
        ];
      case "cloud-kitchen":
        return [
          "FSSAI State License",
          "GST Certificate",
          "Trade License",
          "PAN Card",
          "Bank Account Details",
          "Kitchen Address Proof",
        ];
      case "restaurant":
        return [
          "FSSAI License",
          "GST Certificate",
          "Shop & Establishment License",
          "PAN Card",
          "Bank Account Details",
          "Restaurant Photos",
        ];
      default:
        return [];
    }
  };

  const getSteps = () => {
    return [
      "Install Foyer App",
      "Register with your details",
      "Start getting orders",
    ];
  };

  const getFaqs = () => {
    switch (partnerType) {
      case "home-chef":
        return [
          {
            question: "Do I need a commercial kitchen to become a home-chef?",
            answer:
              "No, you can cook from your own home kitchen as long as it meets basic hygiene standards. We will conduct a virtual kitchen inspection before onboarding.",
          },
          {
            question: "How much can I earn as a home-chef?",
            answer:
              "Home-chefs on Foyer typically earn between ₹15,000 to ₹50,000 per month, depending on order volume, cuisine type, and customer ratings.",
          },
          {
            question: "Do I need an FSSAI license?",
            answer:
              "Yes, a basic FSSAI license is mandatory for all home-chefs. If you don't have one, we can help guide you through the application process.",
          },
          {
            question: "How do I get paid?",
            answer:
              "Payments are settled weekly directly to your registered bank account. You can track your earnings in real-time through the partner dashboard.",
          },
          {
            question: "Who handles delivery?",
            answer:
              "Foyer handles all delivery logistics. You just focus on cooking delicious food. Our delivery partners will pick up orders from your kitchen.",
          },
          {
            question: "Can I set my own working hours?",
            answer:
              "Yes, you have complete flexibility to set your own availability and working hours. You can pause orders anytime.",
          },
        ];
      case "cloud-kitchen":
        return [
          {
            question: "What is a cloud kitchen?",
            answer:
              "A cloud kitchen is a delivery-only commercial kitchen with no dine-in space. It allows you to operate multiple food brands from a single location with lower overhead costs.",
          },
          {
            question: "What are the costs involved?",
            answer:
              "Setup cost is lower than traditional restaurants. You need kitchen equipment, FSSAI license, GST registration, and basic infrastructure.",
          },
          {
            question: "How long does onboarding take?",
            answer:
              "The complete onboarding process typically takes 5-7 days, including document verification, kitchen inspection, and menu setup.",
          },
          {
            question: "Can I run multiple brands from one kitchen?",
            answer:
              "Yes, cloud kitchens are perfect for running multiple virtual brands. You can cater to different cuisines from the same kitchen.",
          },
          {
            question: "What support does Foyer provide?",
            answer:
              "We provide marketing support, customer analytics, delivery logistics, and 24/7 partner support to help your business grow.",
          },
          {
            question: "What are the profit margins?",
            answer:
              "Cloud kitchens typically see profit margins higher than traditional restaurants due to lower operational costs.",
          },
        ];
      case "restaurant":
        return [
          {
            question: "How does Foyer help my restaurant grow?",
            answer:
              "We provide access to millions of customers, powerful analytics dashboard, marketing tools, and trained delivery partners to increase your reach.",
          },
          {
            question: "What is the commission structure?",
            answer:
              "Commission rates vary based on order volume and partnership tier. Contact our sales team for a custom quote tailored to your business.",
          },
          {
            question: "How long does onboarding take?",
            answer:
              "Most restaurants go live within 24-48 hours after document verification and menu setup.",
          },
          {
            question: "Can I update my menu anytime?",
            answer:
              "Yes, you can update your menu, prices, and availability anytime through the partner dashboard. Changes reflect instantly.",
          },
          {
            question: "Do I need to hire delivery staff?",
            answer:
              "No, Foyer provides trained delivery partners. You only need to prepare the food. We handle the rest.",
          },
          {
            question: "How do I get paid?",
            answer:
              "Settlements are processed weekly directly to your registered bank account with detailed transaction reports.",
          },
        ];
      default:
        return [];
    }
  };

  return (
    <Box sx={{ bgcolor: "#f8f9fa", minHeight: "100vh" }}>
     
      <Box
        sx={{
          backgroundImage: getBackgroundImage(),
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "relative",
          width: "100%",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: 4 }}>
         
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Poppins",
              fontWeight: 700,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Partner with Foyer
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Poppins",
              color: "#e0e0e0",
              textAlign: "center",
              mb: 3,
            }}
          >
            Grow your food business with us
          </Typography>

         
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            {[
              { type: "home-chef", label: "Home-Chef" },
              { type: "cloud-kitchen", label: "Cloud Kitchen" },
              { type: "restaurant",  label: "Restaurant" },
            ].map((partner) => (
              <Box
                key={partner.type}
                onClick={() => setPartnerType(partner.type)}
                sx={{
                  textAlign: "center",
                  cursor: "pointer",
                  p: 1,
                  borderRadius: 3,
                  bgcolor:
                    partnerType === partner.type
                      ? "#106ebe"
                      : "rgba(255,255,255,0.15)",
                  transition: "all 0.3s ease",
                  transform:
                    partnerType === partner.type ? "scale(1.02)" : "scale(1)",
                  "&:hover": {
                    bgcolor: "#106ebe",
                    transform: "scale(1.02)",
                  },
                  minWidth: "140px",
                }}
              >
                
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, color: "#ffffff" }}
                >
                  {partner.label}
                </Typography>
              </Box>
            ))}
          </Box>

      
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "stretch",
            }}
          >
           
            <Box sx={{ flex: 1, display: "flex" }}>
              <Box
                sx={{
                  bgcolor: "rgba(255,255,255,0.95)",
                  p: 3,
                  borderRadius: 3,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, mb: 2, color: "#1a1a1a" }}
                >
                  {getHeading()}
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: "#333", 
                    lineHeight: 1.7,
                  }}
                >
                  {getDescriptionParagraph()}
                </Typography>
                <Box sx={{ flex: 1, minHeight: 0 }} />
              </Box>
            </Box>

           
            <Box sx={{ flex: 1, display: "flex" }}>
              <Box
                sx={{
                  bgcolor: "#ffffff",
                  p: 3,
                  borderRadius: 3,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    textAlign: "center",
                    color: "#1a1a1a",
                  }}
                >
                  Registration Form
                </Typography>

                {error && (
                  <Alert severity="error" sx={{ mb: 2, fontSize: "0.8rem" }}>
                    {error}
                  </Alert>
                )}

                <form onSubmit={handleSubmit} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                  <TextField
                    select
                    fullWidth
                    label="Partner Type"
                    value={partnerType}
                    onChange={handlePartnerTypeChange}
                    size="small"
                    sx={{ mb: 1.5 }}
                  >
                    <MenuItem value="home-chef">🏠 Home-Chef</MenuItem>
                    <MenuItem value="cloud-kitchen">🏭 Cloud Kitchen</MenuItem>
                    <MenuItem value="restaurant">🍽️ Restaurant</MenuItem>
                  </TextField>

                  <TextField
                    fullWidth
                    label="Full Name *"
                    name="fullName"
                    size="small"
                    required
                    sx={{ mb: 1.5 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person sx={{ color: "#999", fontSize: 18 }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email *"
                    type="email"
                    name="email"
                    size="small"
                    required
                    sx={{ mb: 1.5 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email sx={{ color: "#999", fontSize: 18 }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Mobile Number *"
                    name="mobile"
                    size="small"
                    required
                    sx={{ mb: 1.5 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone sx={{ color: "#999", fontSize: 18 }} />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{
                      bgcolor: "#106ebe",
                      py: 1,
                      textTransform: "none",
                      fontWeight: 600,
                      mt: 2,
                      borderRadius: 2,
                      "&:hover": { bgcolor: "#0a58a1" },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={22} sx={{ color: "white" }} />
                    ) : (
                      "Submit Application"
                    )}
                  </Button>
                </form>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      
      <Container maxWidth="lg" sx={{ py: 4 }}>
      
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 3,
            mb: 5,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: "white",
                p: 3,
                borderRadius: 3,
                height: "100%",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#1a1a1a" }}>
                ✨ Benefits for{" "}
                {partnerType === "home-chef"
                  ? "Home-Chef"
                  : partnerType === "cloud-kitchen"
                  ? "Cloud Kitchen"
                  : "Restaurant"}
              </Typography>
              {getBenefits().map((benefit, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#4caf50" }} />
                  <Typography variant="body2" sx={{ color: "#333" }}>{benefit}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: "white",
                p: 3,
                borderRadius: 3,
                height: "100%",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#1a1a1a" }}>
                📋 Documents Needed
              </Typography>
              {getDocuments().map((doc, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
                  <CheckCircle sx={{ color: "#4caf50", fontSize: 18 }} />
                  <Typography variant="body2" sx={{ color: "#333" }}>{doc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                bgcolor: "white",
                p: 3,
                borderRadius: 3,
                height: "100%",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: "#1a1a1a" }}>
                🚀 How it works
              </Typography>
              {getSteps().map((step, index) => (
                <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      bgcolor: "#106ebe",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                    }}
                  >
                    {index + 1}
                  </Box>
                  <Typography variant="body2" sx={{ color: "#333" }}>{step}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              textAlign: "center",
              mb: 3,
            }}
          >
            Frequently Asked Questions
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ flex: 1 }}>
              {getFaqs()
                .slice(0, 3)
                .map((faq, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      mb: 1.5,
                      borderRadius: 2,
                      "&:before": { display: "none" },
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: "0.85rem", color: "#1a1a1a" }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
            </Box>
            <Box sx={{ flex: 1 }}>
              {getFaqs()
                .slice(3, 6)
                .map((faq, index) => (
                  <Accordion
                    key={index}
                    sx={{
                      mb: 1.5,
                      borderRadius: 2,
                      "&:before": { display: "none" },
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: "0.85rem", color: "#1a1a1a" }}>
                        {faq.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography variant="body2" sx={{ color: "#555" }}>
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
            </Box>
          </Box>
        </Box>

        <Typography
          variant="body2"
          sx={{
            textAlign: "center",
            color: "#666",
            display: "block",
            mt: 4,
            pb: 2,
          }}
        >
          For support, email us at{" "}
          <Typography
            component="a"
            href="mailto:partners@foyer.app"
            sx={{
              color: "#106ebe",
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": { textDecoration: "underline" },
            }}
          >
            partners@foyer.app
          </Typography>
        </Typography>
      </Container>
    </Box>
  );
};

export default PartnerWithUs;