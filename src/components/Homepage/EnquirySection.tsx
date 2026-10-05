import { useState } from 'react';
import SectionTag from '../../components/SectionTag';

type EnquiryField = {
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
};

type CountryCode = {
  label: string;
  code: string;
  flag: string;
};

type EnquiryContent = {
  tag: string;
  title: string;
  description: string;
  formTitle: string;
  formSubtitle: string;
  buttonText: string;
};

type FormValues = Record<string, string>;

type EnquiryFormProps = {
  title: string;
  subtitle: string;
  fields: EnquiryField[];
  countryCodes: CountryCode[];
  buttonText: string;
  onSubmit?: (values: FormValues) => void;
};

type EnquirySectionProps = {
  content: EnquiryContent;
  fields: EnquiryField[];
  countryCodes: CountryCode[];
  onSubmit?: (values: FormValues) => void;
};

// Enquiry form (same file)
const EnquiryForm = ({ title, subtitle, fields, countryCodes, buttonText, onSubmit }: EnquiryFormProps) => {
  const [values, setValues] = useState<FormValues>({});
  const [robot, setRobot] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!robot) return alert('Please verify that you are not a robot');
    onSubmit?.(values);
  };

  const renderField = (f: EnquiryField) => {
    const common = {
      name: f.name,
      placeholder: f.placeholder + (f.required ? ' *' : ''),
      required: f.required,
      value: values[f.name] || '',
      onChange: handleChange,
    };

    if (f.type === 'textarea')
      return <textarea key={f.name} className="enq-input enq-textarea" {...common} />;

    if (f.type === 'tel')
      return (
        <div key={f.name} className="enq-phone">
          <select className="enq-country" aria-label="Country code">
            {countryCodes.map((c) => (
              <option key={c.label} value={c.code}>{c.flag}</option>
            ))}
          </select>
          <input type="tel" className="enq-phone-input" {...common} />
        </div>
      );

    return <input key={f.name} type={f.type} className="enq-input" {...common} />;
  };

  return (
    <form className="enq-card" onSubmit={handleSubmit}>
      <h3 className="enq-form-title">{title}</h3>
      <p className="enq-form-sub">{subtitle}</p>

      {fields.map(renderField)}

      <div className="enq-bottom">
        {/* Replace this mock with <ReCAPTCHA /> from react-google-recaptcha */}
        <label className="enq-captcha">
          <input type="checkbox" checked={robot} onChange={(e) => setRobot(e.target.checked)} />
          <span>I'm not a robot</span>
          <small>reCAPTCHA<br />Privacy - Terms</small>
        </label>
        <button type="submit" className="enq-submit">{buttonText}</button>
      </div>
    </form>
  );
};

const EnquirySection = ({ content, fields, countryCodes, onSubmit }: EnquirySectionProps) => (
  <section className="enq-section">
    <div className="container enq-grid">
      <div className="enq-left">
        <SectionTag text={content.tag} />
        <h2 className="Common_title">{content.title}</h2>
        <p className="Common_description">{content.description}</p>
      </div>

      <EnquiryForm
        title={content.formTitle}
        subtitle={content.formSubtitle}
        buttonText={content.buttonText}
        fields={fields}
        countryCodes={countryCodes}
        onSubmit={onSubmit}
      />
    </div>
  </section>
);

export default EnquirySection;