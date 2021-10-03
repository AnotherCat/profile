type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = (props: SectionProps) => (
  <section className="bg-gray-50 dark:bg-gray-700 py-8">
    <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 dark:text-gray-100">
      {props.title}
    </h1>
    <div className="w-full mb-4">
      <div className="h-1 mx-auto gradient w-64 opacity-25 dark:opacity-80 my-0 py-0 rounded-t"></div>
    </div>
    {props.children}
  </section>
);
export default Section;
