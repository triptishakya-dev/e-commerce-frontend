"use client";

import React, { useState } from "react";

const Page = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    sku: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    taxRate: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/Product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    const data = await res.json();
    console.log("API Response:", data);
    alert("Product Added Successfully!");
  };

  return (
    <div className="min-h-screen w-full flex bg-pink-200 flex-col justify-center items-center">
      <h1 className="text-purple-600 text-5xl mb-6">ADD PRODUCT</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-6 bg-white rounded-xl shadow-lg">

        {/* Name */}
        <div>
          <label className="text-black text-lg font-bold">Name:</label>
          <input
            type="text"
            id="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            className="border p-2 rounded w-full text-black"
          />
        </div>

        {/* Brand */}
        <div>
          <label className="text-black text-lg font-bold">Brand:</label>
          <input
            type="text"
            id="brand"
            value={product.brand}
            onChange={handleChange}
            placeholder="Enter brand"
            className="border p-2 rounded w-full text-black"
          />
        </div>

        {/* Sku */}
        <div>
          <label className="text-black text-lg font-bold">SKU:</label>
          <input
            type="text"
            id="sku"
            value={product.sku}
            onChange={handleChange}
            placeholder="Enter SKU"
            className="border p-2 rounded w-full text-black"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-black text-lg font-bold">Description:</label>
          <input
            type="text"
            id="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="border p-2 rounded w-full text-black"
          />
        </div>

        {/* Price */}
        <div>
          <label className="text-black text-lg font-bold">Price:</label>
          <input
            type="number"
            id="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price"
            className="border p-2 rounded w-full text-black"
          />
        </div>

        {/* Stock */}
        <div>
          <label className="text-black text-lg font-bold">Stock:</label>
          <input
            type="number"
            id="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Enter stock"
            className="border p-2 rounded w-full text-black"
          />
        </div>

        {/* Category */}
        <div>
          <label className="text-black text-lg font-bold">Category:</label>
          <input
            type="text"
            id="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter category"
            className="border p-2 rounded w-full text-black"
          />
        </div>

        {/* Tax Rate */}
        <div>
          <label className="text-black text-lg font-bold">Tax Rate:</label>
          <input
            type="number"
            id="taxRate"
            value={product.taxRate}
            onChange={handleChange}
            placeholder="Enter tax rate"
            className="border p-2 rounded w-full text-black"
          />
        </div>


        {/* Submit Button */}
        <div className="col-span-2 flex justify-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default Page;
