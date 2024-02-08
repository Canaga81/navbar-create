import React from "react";

const SectionHead = ({ title, className }) => {
  return (
    <div>
      <div className={`section__head  ${className}`}>
        <h2 className="text-[36px] sm:text-[50px] text-center tracking-[1.5px]">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHead;
