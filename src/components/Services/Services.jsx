import React from "react";
import { BrandableClothing } from "./BrandableClothing";
import { BrandingGuide } from "./BrandingGuide";
import { LogoDesign } from "./LogoDesign";
import { MarketingAndSeo } from "./MarketingAndSeo";
import { WebsitesAndApps } from "./Websites&Apps";

export const Services = () => {
  return (
    <>
      <LogoDesign />
      <BrandingGuide />
      <BrandableClothing />
      <WebsitesAndApps />
      <MarketingAndSeo />
    </>
  );
};
