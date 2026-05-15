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

import Ordernow from '../pages/Ordernow';
import Cart from '../pages/Cart';
import Vieworder from '../pages/Vieworders';
import MenuPage from '../pages/Menupage';

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return isAuthenticated ? (
    <Navigate to="/" replace />
  ) : (
    <>{children}</>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* All routes inside Layout */}
      <Route element={<Layout />}>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route
          path="/refund-policy"
          element={<CancellationRefundPolicy />}
        />
        <Route
          path="/partner-with-us"
          element={<PartnerWithUs />}
        />
        <Route path="/send-items" element={<SendItems />} />
        <Route
          path="/join-as-delivery-partner"
          element={<JoinAsDeliveryPartner />}
        />

        <Route path="/cart" element={<Cart />} />
        <Route path="/vieworders" element={<Vieworder />} />
        <Route path="/vieworders/:section" element={<Vieworder />}/>
        <Route path="/menu/:id" element={<MenuPage />} />
        <Route path="/ordernow" element={<Ordernow />} />

        <Route path="/login" element={ <PublicRoute><Login /></PublicRoute>  } />
        <Route path="/signup" element={ <PublicRoute><Signup/></PublicRoute> } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;