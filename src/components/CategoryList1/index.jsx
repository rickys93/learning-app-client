import React from "react";

export default function CategoryList1(props) {
  const { categories } = props;
  return (
    <>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
}
