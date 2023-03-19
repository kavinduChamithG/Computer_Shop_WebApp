import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";


function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 40px, 60px)"
      >
        

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            COMPANY INFO
          </Typography>
          <Typography mb="30px">About Us</Typography>
          <Typography mb="30px">Contact Us</Typography>
          <Typography mb="30px">Shop</Typography>
          <Typography mb="30px">Careers</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            HELP LINKS
          </Typography>
          <Typography mb="30px">Track Your Order</Typography>
          <Typography mb="30px">Terms and Conditions</Typography>
          <Typography mb="30px">Privacy Policy</Typography>
        </Box>

        <Box width="clamp(10%, 10%, 60%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Useful Links
          </Typography>
          <Typography mb="30px">
            Special Offers
          </Typography>
          <Typography mb="30px">
            Gift Cards
          </Typography>
          <Typography mb="30px">FAQ</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;