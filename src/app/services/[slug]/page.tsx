import React from 'react';
import { notFound } from 'next/navigation';
import { ServiceBanner } from '@/components/ServiceBanner';
import { ClientLogosSection } from '@/components/ClientLogosSection';
import { TrustStatsBanner } from '@/components/TrustStatsBanner';
import { serviceBannerData } from '@/data/serviceBannerData';
import HomapageSection from '@/components/Homepage/HomapageSection';

export function generateStaticParams() {
  return Object.keys(serviceBannerData).map((slug) => ({
    slug,
  }));
}

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const bannerProps = serviceBannerData[slug];

  if (!bannerProps) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <ServiceBanner {...bannerProps} />
      <ClientLogosSection />
      <TrustStatsBanner />
      <HomapageSection />
    </main>
  );
}
