import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryList } from "../../components";
import { UserContext } from "../../App";

export default function Categories() {
  const { user, setUser } = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  // const [stem, setStem] = useState(false);
  // const [noneStem, setNoneStem] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const options = {
        headers: {
          "user-id": user.id,
        },
      };
      const response = await fetch("http://localhost:3000/categories", options);
      const data = await response.json();
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <>
      <h1>Categories</h1>
      {/* <button>
        <Link to={"./NewFlashcard"}></Link> New
      </button> */}
      <CategoryList categories={categories} />
    </>
  );
}
