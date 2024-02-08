import { Icons } from "@/components/icons";
import { useRef } from "react";
import styles from "./style.module.scss";

export const FileUploader = ({ handleFile, className, props }) => {
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);
  };
  return (
    <>
      <div role="button" className={styles.buttonUpload} onClick={handleClick}>
        <Icons.AttachFile />
      </div>
      <input
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
        className={className}
        {...props}
      />
    </>
  );
};
