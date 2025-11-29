"use client";

import React, { useState } from "react";

const page = () => {
  const [product, setProduct] = useState({
    Name: "",
    Brand: "",
    Sku: "",
    Description: "",
    Price: "",
    Stock: "",
    Category: "",
    TaxRate: "",
    IsActive: "",
  });
  return (
    <div className="h-screen w-screen flex bg-pink-200 flex-col justify-center i">
      <h1 className="text-purple-600 text-5xl">ADD PRODUCT</h1>
      <div className="text-black">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="enter your name" />
        </form>

        




      </div>
    </div>
  );
};

export default page;
