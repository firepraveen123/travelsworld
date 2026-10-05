import React from 'react';
import Link from 'next/link';
import { ServiceBanner } from '@/components/ServiceBanner';
import { ClientLogosSection } from '@/components/ClientLogosSection';
import { serviceBannerData } from '@/data/serviceBannerData';
import { ServicesGrid } from '@/components/ServicesGrid';
import HomapageSection from '@/components/Homepage/HomapageSection';

export default function ServicesOverviewPage() {
  const featuredBanner = serviceBannerData['corporate-employee-transportation'];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Reusable Service Banner for main services page */}
      <ServiceBanner
        title={featuredBanner.title}
        breadcrumbTitle="All Enterprise Services"
        description={featuredBanner.description}
        secondaryDescription={featuredBanner.secondaryDescription}
        ctaText="Request a quote."
        ctaHref="#quote-form"
        bgImage={featuredBanner.bgImage}
        badgeText="Enterprise Services"
      />

      {/* Reusable Client / Partner Logos Marquee Section */}
      <ClientLogosSection />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Quick Links to Individual Service Pages */}
      <section className="py-16 bg-slate-50 text-slate-900 px-4 sm:px-8 lg:px-16 border-t border-slate-200">
        <div className="max-w-[1536px] mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Explore Individual Service Pages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Select any service to view its dedicated banner header & quote request form.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(serviceBannerData).map(([slug, data]) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#D34F0D] hover:bg-[#FFF5EF] transition-all text-sm font-bold text-slate-800 hover:text-[#D34F0D] flex items-center justify-between group"
              >
                <span>{data.breadcrumbTitle}</span>
                <span className="text-[#D34F0D] group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common FAQ, Blog & Enquiry Sections */}
      <HomapageSection />
    </main>
  );
}
