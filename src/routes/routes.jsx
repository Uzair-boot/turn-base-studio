import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home/Home";
import { Contact } from "../components/Contact/Contact";
import { Services } from "../components/Services/Services";
import { Portfolio } from "../components/PortFolio/Portfolio";
import { About } from "../components/About/About";
import { PortfolioItem } from "../components/PortFolio/PortfolioItem";
import { LogoDesign } from "../components/Services/LogoDesign";
import { BrandingGuide } from "../components/Services/BrandingGuide";
import { WebsitesAndApps } from "../components/Services/Websites&Apps";
import { BrandableClothing } from "../components/Services/BrandableClothing";
import { MarketingAndSeo } from "../components/Services/MarketingAndSeo";
import { HowWeWork } from "../components/How-We-Work/How-we-Work";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="portfolioItem" element={<PortfolioItem />} />
      <Route path="logoDesign" element={<LogoDesign />} />
      <Route path="brandingGuide" element={<BrandingGuide />} />
      <Route path="brandableClothing" element={<BrandableClothing />} />
      <Route path="websitesAndApps" element={<WebsitesAndApps />} />
      <Route path="marketingAndSeo" element={<MarketingAndSeo />} />
      <Route path="work" element={<HowWeWork />} />
    </Routes>
  );
};
