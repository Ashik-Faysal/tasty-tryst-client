const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto  text-center my-4 md:my-8 w-4/12">
      <h5 className="text-xl font-semibold text-yellow-600 mb-2 ">
       --- {subHeading}---
       
      </h5>
      <h2 className="text-4xl uppercase text-black font-bold border-y-4 py-4">
        {heading}
        
      </h2>
    </div>
  );
};

export default SectionTitle;
