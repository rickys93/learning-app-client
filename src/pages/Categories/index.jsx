import React, { useState, useEffect } from "react";
import CategoryList from "../../components/CategoryList";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [stem, setStem] = useState(false);
  const [noneStem, setNoneStem] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <>
      <h1>Categories</h1>
      <CategoryList categories={categories} />
    </>
  );
}
