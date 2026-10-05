'use client';

import React, { useState } from 'react';
import SectionTag from '../../components/SectionTag';

// FAQ card (same file)
const FaqItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button className="faq-question" onClick={onToggle} aria-expanded={isOpen} type="button">
      <span className="font-sans font-semibold text-[18px] sm:text-[22px] leading-[32px] text-white tracking-normal">{question}</span>
      <span className="faq-icon" aria-hidden="true">
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path d="M1 5h8" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
          {!isOpen && <path d="M5 1v8" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />}
        </svg>
      </span>
    </button>
    <div className="faq-answer-wrap">
      <div className="faq-answer-inner">
        <p className="faq-answer font-sans font-normal text-[15px] sm:text-[17px] leading-[28px] text-[#F5F5F5] tracking-normal">{answer}</p>
      </div>
    </div>
  </div>
);

type FaqItemType = { id: string | number; question: string; answer: string };
type FaqHeading = { tag: string; title: string };

const FaqSection: React.FC<{ heading: FaqHeading; items: FaqItemType[] }> = ({ heading, items }) => {
  const [openId, setOpenId] = useState<string | number | null>(items[0]?.id ?? null);

  return (
    <section className="faq-section">
      <div className="container faq-grid">
        <div className="faq-left">
          <SectionTag text={heading.tag} />
          <h2 className="Common_title font-sans font-normal uppercase text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.25] lg:leading-[62.6px] text-[#5B2C06] max-w-[582px] mt-4">{heading.title}</h2>
        </div>

        <div className="faq-right">
          {items.map((item) => (
            <FaqItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;