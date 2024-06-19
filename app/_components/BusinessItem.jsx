import Image from "next/image";
import React from "react";

const BusinessItem = ({ business }) => {
  return (
    <div className="p-3 hover:border rounded-xl
    hover:border-primary transition-all  ease-in-out hover:bg-orange-50">
      <Image
        src={business.banner?.url}
        alt={business.name}
        width={500}
        height={130}
        className="h-[130px] rounded-xl object-cover"
      />
      <div className="mt-2">
        <h2 className="font-bold text-lg">{business.name}</h2>
      </div>
     <div className="flex justify-between items-center">
     <div className="flex items-center gap-2">
        <Image src="/star.png" height={14} width={14} />
      <label htmlFor="" className="text-gray-400">4.5</label>
      <h2 className="text-gray-400 text-sm">{business.restroType[0]}</h2>

      </div>
      <h2 className="text-sm text-primary">{business.categories[0].name}</h2>
     </div>
    </div>
  );
};

export default BusinessItem;
