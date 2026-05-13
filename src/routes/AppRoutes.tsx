import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import React from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Layout from '../components/Layout';
import SendItems from '../pages/SendItems';
import Profile from '../pages/Profile';
import Orders from '../pages/Orders';
import Addresses from '../pages/Addresses';
import PartnerWithUs from '../pages/PartnerWithUs';
import ContactUs from '../pages/ContactUs';
import TermsConditions from '../pages/TermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import CancellationRefundPolicy from '../pages/CancellationRefundPolicy';
import FAQs from '../pages/FAQs';
import JoinAsDeliveryPartner from '../pages/JoinAsDeliveryPartner';

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuthenticated ? <Navigate to="/" replace /> : <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes inside Layout (Navbar and Footer) */}
      <Route element={<Layout />}>
        {/* Public routes - no authentication needed */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<CancellationRefundPolicy />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/send-items" element={<SendItems />} />
        <Route path="/join-as-delivery-partner" element={<JoinAsDeliveryPartner />} />
      </Route>

 
      <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
    </Routes>
  );
};

export default AppRoutes;