import React, { useState } from "react";

export default function Categories() {
  const [category, setCategory] = useState([]);
  const [stem, setStem] = useState([]);
  const [noneStem, setNoneStem] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      setCategory(data);
    }
    loadCategories();
  }, []);
  return (
    <>
      <h1>Categories</h1>
    </>
  );
}
