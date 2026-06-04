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
// import MenuPage from '../pages/Menupage';
import RestaurantMenuPage from '../pages/RestaurantMenuPage';
import CloudKitchenMenuPage from '../pages/CloudKitchenMenuPage';
import FavoritesPage from '../pages/FavoritesPage';
// import HomeChefMenuNew from '../pages/HomeChefMenuNew';
import HomeChefMenuPage from '../pages/HomeChefMenuPage';

import TrackOrder from '../pages/TrackOrder';



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
        <Route path="/refund-policy" element={<CancellationRefundPolicy />} />
        <Route path="/partner-with-us" element={<PartnerWithUs />} />
        <Route path="/send-items" element={<SendItems />} />
        <Route path="/join-as-delivery-partner" element={<JoinAsDeliveryPartner />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/vieworder/:section?" element={<Vieworder />} />
        
        {/* Menu Routes */}
        
        <Route path="/restaurant-menu/:id" element={<RestaurantMenuPage />} />
        <Route path="/cloud-menu/:id" element={<CloudKitchenMenuPage />} />
       
        
        {/* Redirects for old paths */}
        <Route path="/cloudkitchen" element={<Navigate to="/cloud-kitchens" replace />} />
       {/* <Route path="/test-chef/:id" element={<HomeChefMenuNew />} /> */}
       <Route path="/home-chef/:id" element={<HomeChefMenuPage />} />
        <Route path="/restaurant" element={<Navigate to="/restaurants" replace />} />
        
        {/* Ordernow Routes with nested paths */}
        <Route path="/home-chefs" element={<Ordernow />} />
        <Route path="/cloud-kitchens/*" element={<Ordernow />} />
        <Route path="/restaurants/*" element={<Ordernow />} />
        <Route path="/ordernow/*" element={<Ordernow />} />
        
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/track-order" element={<TrackOrder />} />
        

        {/* Auth Routes */}
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;