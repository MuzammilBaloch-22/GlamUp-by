import AnimatedSection from "./AnimatedSection";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <AnimatedSection className="text-center mb-12">
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{title}</h2>
    <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-4" />
    {subtitle && <p className="font-body text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </AnimatedSection>
);

export default SectionHeading;
