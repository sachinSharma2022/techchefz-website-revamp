import React from "react";
import { Icons } from "@/components/icons";

import styles from "./index.module.scss";

const SearchInput = () => {
   return (
      <form className={styles.search}>
         <input type="text" placeholder="Search Keywords" name="search" />
         <button type="submit">
            <Icons.Search width={24} height={24} />
         </button>
      </form>
   );
};

export default SearchInput;
