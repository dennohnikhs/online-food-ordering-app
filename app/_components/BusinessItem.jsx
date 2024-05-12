import React from "react";

const BusinessItem = ({ business }) => {
  return (
    <div>
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
