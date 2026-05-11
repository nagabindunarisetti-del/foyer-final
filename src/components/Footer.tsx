import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import { Phone, Email, LocationOn } from "@mui/icons-material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1a1a",
        color: "#fff",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: { xs: 4, md: 3 },
          }}
        >
          {/* logo and description */}
          <Box sx={{ flex: 1, minWidth: "220px" }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, color: "#fff", mb: 2 }}
            >
              Foyer
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#b0b0b0",
                lineHeight: 1.5,
                fontSize: "0.75rem",
                mb: 2,
              }}
            >
              Real food from real kitchens, made with love. Foyer is the largest
              home-food platform crafted by homechefs, cloud-kitchens, etc for
              everyone craving hygienic, wholesome and home-cooked meals.
            </Typography>
          </Box>

          {/* Quick Links */}
          <Box sx={{ flex: 1, minWidth: "140px" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#fff", mb: 2 }}
            >
              Quick Links
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Home
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Home-Chefs Special
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Order Now
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/send-items")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Send Items
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Schedule Delivery
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Partner with us */}
          <Box sx={{ flex: 1, minWidth: "170px" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#fff", mb: 2 }}
            >
              Partner with us
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate('/partner-with-us', { state: { partnerType: 'home-chef' } })}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Register as Home-Chef
                </Link>
              </Box>
              
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate('/partner-with-us', { state: { partnerType: 'cloud-kitchen' } })}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Register as Cloud-Kitchen
                </Link>
              </Box>
              
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate('/partner-with-us', { state: { partnerType: 'restaurant' } })}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Register as Restaurant Provider
                </Link>
              </Box>
              
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate('/join-as-delivery-partner')}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Join as Delivery Partner
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Legal */}
          <Box sx={{ flex: 1, minWidth: "140px" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#fff", mb: 2 }}
            >
              Legal
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/contactus")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Contact Us
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/terms")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Terms & Conditions
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/faqs")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  FAQs
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/privacy")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Privacy Policy
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link
                  onClick={() => navigate("/refund-policy")}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    cursor: "pointer",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  Refund Policy
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Get in Touch with us */}
          <Box sx={{ flex: 1, minWidth: "220px" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#fff", mb: 2 }}
            >
              Get in Touch
            </Typography>

            <Box
              sx={{ mb: 1.5, display: "flex", alignItems: "center", gap: 1 }}
            >
              <Email sx={{ fontSize: 14, color: "#b0b0b0" }} />
              <Link
                href="mailto:akhil.reddy@onasglobal.com"
                sx={{
                  color: "#b0b0b0",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  "&:hover": { color: "#fff" },
                }}
              >
                akhil.reddy@onasglobal.com
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ fontSize: 14, color: "#b0b0b0" }} />
              <Link
                href="tel:+919087086777"
                sx={{
                  color: "#b0b0b0",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                  "&:hover": { color: "#fff" },
                }}
              >
                +91 90870 86777
              </Link>
            </Box>
            <Box
              sx={{ mt: 1.5, display: "flex", alignItems: "center", gap: 1 }}
            >
              <LocationOn sx={{ fontSize: 14, color: "#b0b0b0" }} />
              <Typography sx={{ color: "#b0b0b0", fontSize: "0.8rem" }}>
                Hyderabad, Telangana, India
              </Typography>
            </Box>

            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, color: "#fff", mt: 2 }}
            >
              Social-Media
            </Typography>
            <Box sx={{ display: "flex" }}>
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "#b0b0b0", cursor: "pointer", "&:hover": { color: "#fff" } }}
              >
                <Facebook sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "#b0b0b0", cursor: "pointer", "&:hover": { color: "#fff" } }}
              >
                <Instagram sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: "#b0b0b0", cursor: "pointer", "&:hover": { color: "#fff" } }}
              >
                <LinkedIn sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                sx={{ color: "#b0b0b0", cursor: "pointer", "&:hover": { color: "#fff" } }}
              >
                <Twitter sx={{ fontSize: 20 }} />
              </IconButton>
              <IconButton
                href="https://youtube.com"
                target="_blank"
                sx={{ color: "#b0b0b0", cursor: "pointer", "&:hover": { color: "#fff" } }}
              >
                <YouTube sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: "#333", my: 4 }} />

        <Typography
          variant="body2"
          sx={{ color: "#b0b0b0", textAlign: "center", fontSize: "0.7rem" }}
        >
          © {new Date().getFullYear()} Foyer. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;