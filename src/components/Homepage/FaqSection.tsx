import React, { useState } from 'react';
import SectionTag from '../../components/SectionTag';

// FAQ card (same file)
const FaqItem = ({ question, answer, isOpen, onToggle }: { question: string; answer: string; isOpen: boolean; onToggle: () => void }) => (
  <div className={`faq-item ${isOpen ? 'open' : ''}`}>
    <button className="faq-question" onClick={onToggle} aria-expanded={isOpen}>
      <span>{question}</span>
      <span className="faq-icon">
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path d="M1 5h8" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />
          {!isOpen && <path d="M5 1v8" stroke="#222" strokeWidth="1.6" strokeLinecap="round" />}
        </svg>
      </span>
    </button>
    <div className="faq-answer-wrap">
      <p className="faq-answer">{answer}</p>
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
          <h2 className="Common_title">{heading.title}</h2>
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