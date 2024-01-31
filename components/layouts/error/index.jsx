import React from "react";
import styles from "./style.module.scss";
import { ImageCustom } from "@/components/ui/imageCustom";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import Link from "next/link";

const Error = () => {
   return (
      <section className={styles.error}>
         <div className={styles.errorLeft}>
            <ImageCustom src={"/images/notFound.png"} width={700} height={800} alt="error-img" />
         </div>
         <div className={styles.errorRight}>
            <h2>Oops!!</h2>
            <h4>The page you are looking for cannot be found.</h4>
            <p>Few possible reasons :</p>
            <ul>
               <li>The address may have been typed incorrectly.</li>
               <li>It may be a broken or outdated link.</li>
            </ul>

            <Link href="/">
               <Button variant="blueBtn" className={styles.errorBtn} size="lg">
                  <Icons.ArrowLeft size={20} /> Back to Homepage
               </Button>
            </Link>
         </div>
      </section>
   );
};

export default Error;
