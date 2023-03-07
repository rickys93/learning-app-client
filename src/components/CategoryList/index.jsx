import React from "react";

export default function CategoryList(props) {
  const { categories } = props;
  return (
    <div>
      {categories.map((category) => (
        // <li key={category.id}>{category.name}</li>
        <div
          key={category.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
}
