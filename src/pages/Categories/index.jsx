import React, { useState, useEffect, useContext } from "react";

import CategoryList from "../../components/CategoryList";
import { UserContext } from "../../App";

export default function Categories() {
  const {user, setUser} = useContext(UserContext)
  const [categories, setCategories] = useState([]);
  const [stem, setStem] = useState(false);
  const [noneStem, setNoneStem] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      const options = {
        headers:{
          "user-id":user.id
        }
      }
      const response = await fetch("http://localhost:3000/categories", options);
      console.log('response', response)
      const data = await response.json();
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <>
      <h1>Subjects</h1>
      <CategoryList categories={categories} />
    </>
  );
}
