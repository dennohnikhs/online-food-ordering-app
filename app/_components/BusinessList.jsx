"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const BusinessList = () => {
  const params = useSearchParams();
  const [category, setCategory] = useState("chipoo");

  useEffect(() => {
    params && setCategory(params.get("category"));
  }, [params]);
  return <div>BusinessList</div>;
};

export default BusinessList;
