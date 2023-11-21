import CSS from './index.module.css';

const Section = ({ title, children }) => (
  <section className={CSS.section}>
    <h2 className={CSS.sectionTitle}>{title}</h2>
    {children}
  </section>
);
export default Section;
