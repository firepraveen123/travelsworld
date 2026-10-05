interface SectionTagProps {
	text: string;
}

const SectionTag = ({ text }: SectionTagProps) => (
	<span className="section-tag">{text}</span>
);

export default SectionTag;