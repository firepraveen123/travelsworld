// import './styles/global.css';
import FaqSection from '../../components/Homepage/FaqSection';
import BlogSection from '../../components/Homepage/BlogSection';
import EnquirySection from '../../components/Homepage/EnquirySection';
import { faqHeading, faqList } from '../../data/Faqdata';
import { blogHeading, blogList } from '../../data/blogData';
import { enquiryContent, enquiryFields, countryCodes } from '../../data/enquiryData';

const HomapageSection = () => (
  <>
    <FaqSection heading={faqHeading} items={faqList} />
    <BlogSection heading={blogHeading} blogs={blogList} />
    <EnquirySection
      content={enquiryContent}
      fields={enquiryFields}
      countryCodes={countryCodes}
      onSubmit={(data: any) => console.log('Enquiry:', data)}
    />
  </>
);

export default HomapageSection;