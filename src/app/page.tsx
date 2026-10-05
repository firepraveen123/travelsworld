'use client';

import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ServicesGrid } from '../components/ServicesGrid';
import { IndustriesSection } from '../components/IndustriesSection';
import { LocationsSection } from '../components/LocationsSection';
import { QuoteFormSection } from '../components/QuoteFormSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <IndustriesSection />
      <LocationsSection />
      <QuoteFormSection />
    </>
  );
}
