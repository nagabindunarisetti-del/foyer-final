import { Container, Typography } from '@mui/material';

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" fontWeight={700}>
        Profile
      </Typography>
      <Typography variant="body1" color="grey.600">
        Your profile information will appear here.
      </Typography>
    </Container>
  );
};

export default Profile;