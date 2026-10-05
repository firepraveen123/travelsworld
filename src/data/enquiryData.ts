export const enquiryContent = {
  tag: 'Get started',
  title: 'Ready to simplify your corporate transportation?',
  description:
    'Tell us about your workforce, locations and transportation requirements. Our team will design a transportation solution around your business.',
  formTitle: 'Enquire now',
  formSubtitle: 'We’ll contact you within 24 hours or less.',
  buttonText: 'Submit',
};

// type: text | email | tel | textarea
export const enquiryFields = [
  { name: 'name', type: 'text', placeholder: 'Name', required: true },
  { name: 'email', type: 'email', placeholder: 'Email', required: true },
  { name: 'phone', type: 'tel', placeholder: 'Phone number', required: true },
  { name: 'company', type: 'text', placeholder: 'Company name', required: false },
  { name: 'message', type: 'textarea', placeholder: 'Shorts Message', required: false },
];

export const countryCodes = [{ code: '+91', flag: '🇮🇳', label: 'IN' }];