import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryList } from "../../components";
import { UserContext } from "../../App";

// import "/style.css" from "./CategoryList"

export default function Categories() {
  const { user, setUser } = useContext(UserContext);
  console.log("user", user);
  const [defaultCategories, setDefaultCategories] = useState([]);
  const [myCategories, setMyCategories] = useState([]);
  // const [stem, setStem] = useState(false);
  // const [noneStem, setNoneStem] = useState(false);

  useEffect(() => {
    if (user) {
      async function loadCategories() {
        const id = user.id ? user.id : "";
        const response = await fetch(
          `http://localhost:3000/categories?user_id=${id}`
        );
        const data = await response.json();
        const defaultCats = data.filter((category) => category.user_id !== id);
        setDefaultCategories(defaultCats);
        const myCats = data.filter((category) => category.user_id === id);
        setMyCategories(myCats);
      }
      loadCategories();
    }
  }, [user]);

  return (
    <>
      <h2 className="cat-title">Categories</h2>
      {/* <button>
        <Link to={"./NewFlashcard"}></Link> New
      </button> */}
      <CategoryList categories={defaultCategories} defaultCategories={true} />
      {Object.keys(user).length ? (
        <>
          <h2>My Categories</h2>
          <CategoryList
            categories={myCategories}
            setMyCategories={setMyCategories}
            defaultCategories={false}
          />
        </>
      ) : null}
    </>
  );
}
