"use client";

import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../_utils/GlobalApi";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonCard } from "./CategoryListSkeleton";

const CategoryList = () => {
  const listRef = useRef(null);
  const params = useSearchParams();
  const [categoryList, setCategoryList] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  /**
   * useEffect to get category lis
   */

// use UseEffect hook to call the getCategoryList function everytime the page loads to display the list of categories
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    setIsLoading(true);
    await GlobalApi.GetCategory().then((res) => {
      setCategoryList(res);
      setIsLoading(false);
    });
  };
  const ScrollRightHandler = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className=" relative mt-10">
      <div
        className=" flex  gap-4 overflow-auto scrollbar-hide  "
        ref={listRef}
      >
        {!isLoading ? (
          categoryList &&
          categoryList.map((category, index) => (
            <Link
              href={"?category=" + category.slug}
              key={index}
              className={`flex flex-col items-center gap-2 border p-3 rounded-xl min-w-28 hover:border-primary hover:bg-orange-50 cursor-pointer group ${
                selectedCategory === category.slug &&
                "text-primary border-primary bg-orange-50"
              }`}
            >
              <Image
                src={category.icon?.url}
                alt={category.name}
                width={40}
                height={40}
                className="group-hover:scale-125 transition-all duration-200"
              />
              <div className="text-sm font-medium group-hover:text-primary">
                {category.name}
              </div>
            </Link>
          ))
        ) : (
          <div className="flex justify-center gap-3">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
        <div>
          <ArrowRightCircle
            className="absolute  -right-10 top-9 bg-gray-500 rounded-full text-white h-8 w-8 cursor-pointer"
            onClick={() => {
              ScrollRightHandler();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
