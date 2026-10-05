import SectionTag from '../../components/SectionTag';

type BlogCardProps = {
  image: string;
  readTime: string;
  date: string;
  title: string;
  link: string;
};

type BlogItem = BlogCardProps & {
  id: string | number;
};

type BlogSectionProps = {
  heading: {
    tag: string;
    title: string;
    subtitle: string;
  };
  blogs: BlogItem[];
};

// Blog card (same file)
const BlogCard = ({ image, readTime, date, title, link }: BlogCardProps) => (
  <a href={link} className="blog-card">
    <div className="blog-img">
      <img src={image} alt={title} loading="lazy" />
    </div>
    <div className="blog-body">
      <div className="blog-meta">
        <span className="blog-dot" />
        <span>{readTime}</span>
        <span className="blog-sep">|</span>
        <span>{date}</span>
      </div>
      <h3 className="blog-title">{title}</h3>
    </div>
  </a>
);

const BlogSection = ({ heading, blogs }: BlogSectionProps) => (
  <section className="blog-section">
    <div className="container">
      <div className="blog-head">
        <SectionTag text={heading.tag} />
        <h2 className="blog-heading">{heading.title}</h2>
        <p className="blog-sub">{heading.subtitle}</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;