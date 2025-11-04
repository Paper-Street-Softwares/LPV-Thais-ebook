import React from "react";

function CardEntrega({ icon, title, children }) {
  return (
    <div className="bg-white max-w-[290px] rounded-md p-4 relative mb-4">
      <div className="absolute top-[-2px] border-2 border-red-900 w-[30%]"></div>
      <div className="mb-2">{icon}</div>
      <h3 className="mb-3 text-primary font-mainFont">{title}</h3>
      <p className="text-paragraph2 text-primary font-secondFont w-full">
        {children}
      </p>
    </div>
  );
}

export default CardEntrega;
