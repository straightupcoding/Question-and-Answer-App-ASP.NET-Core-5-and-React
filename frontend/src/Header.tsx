import React from "react";
import styles from "./Header.module.css";

export const Header = () => {
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  return (
    <div className={styles.container}>
      <a href="./">Q & A</a>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearchInputChange}
      />
      <a href="./signin">
        <span>Sign In</span>
      </a>
    </div>
  );
};
