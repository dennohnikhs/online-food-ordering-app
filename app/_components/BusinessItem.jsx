import Image from "next/image";
import React from "react";

const BusinessItem = ({ business }) => {
  return (
    <div>
      <h1>{business.name}</h1>
      <Image
        src={business.banner?.url}
        alt={business.name}
        width={500}
        height={130}
      />
    </div>
  );
};

export default BusinessItem;
