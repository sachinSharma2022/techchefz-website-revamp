"use client";
import React from "react";
import { Icons } from "@/components/icons";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import styles from "./index.module.scss";

const SearchInput = () => {
  const { theme, setTheme } = useContext(MyContext);
  return (
    <div className={`${styles.search} ${theme ? styles.searchDark : ""}`}>
      <input type="text" placeholder="Search Keywords" name="search" />
      <button className={styles.searchIcon} type="submit">
        <Icons.Search width={24} height={24} />
      </button>
    </div>
  );
};

export default SearchInput;
