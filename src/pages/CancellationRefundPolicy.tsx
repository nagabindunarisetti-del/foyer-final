import { Box, Container, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CancellationRefundPolicy = () => {
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
          Cancellation and Refund Policy
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
          
         
          <Typography variant="body2" sx={{ color: '#444', mb: 3, lineHeight: 1.6 }}>
            Any capitalized terms used but not defined herein shall have the meaning assigned to them under the Terms of Use which govern your use of our website www.foyer.app (the "Website") and our 'Foyer' application for mobile and handheld devices (the "App"). The Website and the App are jointly referred to as the "Platform".
          </Typography>

          <Divider sx={{ my: 3 }} />

         
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            A. Customer Cancellation
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            As a general rule, Buyer shall not be entitled to cancel Order once placed.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            If Buyer cancels his/her Order after placing it, Foyer shall have a right to charge 100% of the Order amount for breach of contract terms as a compensation for the damages suffered by Foyer, with a right to either not to refund the Order value in case Buyer's Order is prepaid or recover from the Buyer's subsequent Order in case his/her Order is postpaid, to compensate the Merchants and Delivery Partners.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            B. Non-Customer Cancellation
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Foyer reserves the right to collect a penalty for the Orders constrained to be cancelled by Foyer for reasons not attributable to Foyer, including but not limited to:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ color: '#444', mb: 2, lineHeight: 1.6, pl: 2 }}>
            <li>In the event if the address provided by Buyer is either wrong or falls outside the delivery zone;</li>
            <li>Failure to contact Buyer by phone or email at the time of delivering the Order booking;</li>
            <li>Failure to deliver Buyer Order due to lack of information, direction or authorization from Buyer at the time of delivery; or</li>
            <li>Unavailability of all items ordered by the Buyer at the time of booking the order.</li>
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            However, in the unlikely event of an item in an Order being unavailable, Foyer will contact the Buyer on the phone number provided to us at the time of placing the Order and inform Buyer of such unavailability. In such an event, Buyer will be entitled to cancel the entire Order and shall be entitled to a refund up to 100% of the Order value.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            In case of cancellations for the reasons attributable to Foyer or the Merchant or Delivery Partner, Foyer shall not collect any penalty from the Buyer.
          </Typography>

          <Divider sx={{ my: 3 }} />

          
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            C. Cancellation Policy for Pickup & Drop Services
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Cancellation of a Pick-up and Drop order after the delivery partner has reached the location but has not picked up the items may invite a cancellation fee in the range of ₹40 to ₹75 (based on the base delivery fee in the city).
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Cancellation of a Pick-up and Drop order after the delivery executive has picked up the delivery items will result in a cancellation fee being charged equivalent to the entire service fee.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            D. Refunds
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            1. Buyer may be entitled to a refund for prepaid Orders. Foyer retains the right to retain the penalty payable by the Buyer from the amount refundable to him/her. The Buyer shall also be entitled to a refund of proportionate value in the event packaging of an item in an Order or the complete Order is either tampered or damaged and the Buyer refuses to accept at the time of delivery for the said reason.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            2. Buyer may be entitled to a refund up to 100% of the Order value if the delivery partner fails to deliver the Order due to a cause attributable to either the delivery partner or Foyer, however such refunds will be assessed on a case-to-case basis by Foyer.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            3. Our decision on refunds shall be final and binding.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 1, lineHeight: 1.6 }}>
            4. No replacement / refund / or any other resolution will be provided without Merchant's permission.
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            5. All refund amounts shall be credited to Buyer's account as may be stipulated as per the payment mechanism of Buyer's choice. In case Buyer doesn't choose to credit it to Buyer's wallet with his/her Foyer Account, the estimated timelines are detailed below:
          </Typography>

       
          <TableContainer component={Paper} sx={{ mb: 3, boxShadow: 'none', border: '1px solid #e0e0e0' }}>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow sx={{ bgcolor: '#f5f5f5' }}>
                  <TableCell sx={{ fontWeight: 700 }}>Process</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Payment Method</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>Refund Source</TableCell>
                  <TableCell sx={{ fontWeight: 700 }}>TAT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>Net Banking</TableCell><TableCell>Source</TableCell><TableCell>5-7 Business Days</TableCell></TableRow>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>Debit/Credit Cards</TableCell><TableCell>Source</TableCell><TableCell>5-7 Business Days</TableCell></TableRow>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>UPI</TableCell><TableCell>Source</TableCell><TableCell>5-7 Business Days</TableCell></TableRow>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>Amazon Pay (Wallet)</TableCell><TableCell>Source</TableCell><TableCell>5-7 Business Days</TableCell></TableRow>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>Amazon Pay (CC/DC/NB)</TableCell><TableCell>Source</TableCell><TableCell>5-7 Business Days</TableCell></TableRow>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>PhonePe (Wallet)</TableCell><TableCell>Source</TableCell><TableCell>5-7 Business Days</TableCell></TableRow>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>PhonePe (CC/DC/NB)</TableCell><TableCell>Source</TableCell><TableCell>5-7 Business Days</TableCell></TableRow>
                <TableRow><TableCell>Order Edit / Cancellation/ Compensation/ Payment Failure</TableCell><TableCell>Wallet – Paytm/ PhonePe/ GooglePay</TableCell><TableCell>Source</TableCell><TableCell>2 hours</TableCell></TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            E. Payment at Delivery
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            In case of payment at the time of delivery, Buyer will not be required to pay for:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ color: '#444', mb: 2, lineHeight: 1.6, pl: 2 }}>
            <li>Orders where packaging is either tampered or damaged at the time of delivery;</li>
            <li>Wrong Order being delivered; or</li>
            <li>Items missing from Buyer's Order at the time of delivery.</li>
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Provided the same is communicated to Customer Care through the Platform before the Order is marked delivered.
          </Typography>

          <Divider sx={{ my: 3 }} />

        
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, mt: 2 }}>
            F. Specific Terms with respect to Use of Platform for purchase of alcoholic beverages
          </Typography>
          
          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, mt: 1 }}>
            Cancellation:
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            As a general rule the Buyer shall not be entitled to cancel his/her Order once placed. If the Buyer cancels his/her Order, Foyer shall have a right to collect the Buyer 100% of the Order amount as the cancellation fee, with a right to either not to refund the Order value in case the Buyer's Order is prepaid or recover from the Buyer's subsequent Order(s) in case Buyer's Order is postpaid, to compensate the Merchants and delivery partners.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, mt: 1 }}>
            Non-Customer Cancellation:
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            Foyer reserves the right to collect the Buyer cancellation fee for the Orders constrained to be cancelled by Foyer for reasons not attributable to Foyer or Merchant, including but not limited to:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ color: '#444', mb: 2, lineHeight: 1.6, pl: 2 }}>
            <li>In the event if the address provided by the Buyer is either wrong or falls outside the Foyer's delivery zone;</li>
            <li>Failure to contact the Buyer by phone or email at the time of delivering the Order;</li>
            <li>Failure to deliver the Buyer's Order due to lack of information, direction or authorization from the Buyer at the time of delivery; or</li>
            <li>The Buyer's failure to provide a valid OTP to the delivery partner for receiving delivery.</li>
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, mt: 1 }}>
            Refunds:
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            The Buyer may be entitled to a refund for prepaid Orders, post deduction of cancellation fee, if any for reasons mentioned above or in a manner as deemed fit by Foyer in its sole discretion, if refund has been requested due to the following reasons:
          </Typography>
          <Typography variant="body2" component="ul" sx={{ color: '#444', mb: 2, lineHeight: 1.6, pl: 2 }}>
            <li>If the Order could not be delivered within 2 hours;</li>
            <li>If the Merchant cancels the Order due to reasons not attributable to the Buyer, including but not limited to store being closed, non-availability of items, store not servicing online Orders, overcrowding at store, etc.</li>
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            The Buyer may be entitled to refund due to aforesaid reasons up to 100% of the Order value depending upon the nature of issue. Foyer reserves the right to consider the cancellation and refund request and determine if such cancellation and refund request satisfy any of the aforesaid conditions, in which case Foyer shall process the cancellation request and refund to Buyer.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, mt: 1 }}>
            Important Note 1:
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            The Buyer shall verify his/her Order and the products before providing OTP to the delivery partner and any issue with respect to the product or Buyer's Order shall be notified immediately, and cancellation request shall be placed before providing OTP to the delivery partner. Once OTP is provided to the delivery partner, it shall be deemed that the Buyer has accepted delivery of his/her Order and once he/she has accepted delivery, the Buyer cannot cancel the Order and/or claim refund.
          </Typography>

          <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, mt: 1 }}>
            Important Note 2:
          </Typography>
          <Typography variant="body2" sx={{ color: '#444', mb: 2, lineHeight: 1.6 }}>
            In case of the complaint of any spurious product, the liability shall solely lie with the Merchant selling the product. Foyer is merely facilitating the transactions between the Merchant and the Buyer and therefore, Foyer shall assume no liability with respect to the products sold by the Merchant. Foyer strictly discourages dealing of any spurious product on its Platform and shall reserve the right to report such incidents to the concerned authorities for appropriate legal actions.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" sx={{ color: '#666', textAlign: 'center', fontSize: '0.75rem' }}>
            For any questions or concerns regarding cancellations or refunds, please contact us at support@foyer.app
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default CancellationRefundPolicy;