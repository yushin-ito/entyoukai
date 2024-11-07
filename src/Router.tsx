import { Box } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Activity from "./pages/Activity";
import Article from "./pages/Article";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Memory from "./pages/Memory";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SitePolicy from "./pages/SitePolicy";
import Top from "./pages/Top";

const Router = () => {
  return (
    <BrowserRouter>
      <Box flex="1" p="0">
        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/company" element={<Company />} />
          <Route path="/memory" element={<Memory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/sitepolicy" element={<SitePolicy />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default Router;
