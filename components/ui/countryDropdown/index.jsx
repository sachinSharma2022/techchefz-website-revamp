"use client";

import { MyContext } from "@/context/theme";
import { useContext, useState } from "react";
import Select from "react-select";
import { ImageCustom } from "../imageCustom";

import { cn } from "@/lib/utils";
import { Input } from "../inputCustom";
import styles from "./style.module.scss";
import { useMediaQuery } from "react-responsive";
import { useRef } from "react";
import { countryList } from "@/lib/country";

const CountryDropdown = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const isBigScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const ref = useRef();

  const countries = [
    { value: "+91", label: "+91", image: "/images/flag.jpg" },
    { value: "+93", label: "+93", image: "/images/flag.jpg" },
    { value: "+244", label: "+244", image: "/images/flag.jpg" },
    { value: "+672", label: "+672", image: "/images/flag.jpg" },
  ];

  const controlStyle = {
    control: (styles) => ({
      ...styles,
      height: 60,
      minWidth: 80,
      maxWidth: 80,
      borderRadius: 0,
      zIndex: 9,
      backgroundColor: "none",
      borderWidth: "0",
      borderColor: theme ? "rgba(256,256,256,0.12)" : "rgba(17, 17, 17, 0.12)",
      "&:hover": {
        borderColor: "#05bed7",
      },
      flexWrap: "nowrap",
      boxShadow: "none",
      fontFamily: "../public/fonts/Aeonik-Regular.otf",
    }),
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: "#8d8d8d",
        fontSize: "1rem",
      };
    },
    menu: (css) => ({
      ...css,
      width: "auto",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: theme ? "white" : "#111",
      fontSize: 8,
    }),
    indicatorSeparator: () => ({ display: "none" }),
    indicatorsContainer: (styles) => ({
      ...styles,
      paddingTop: 0,
      top: 23,
      height: 20,
      position: "relative",
    }),
    valueContainer: () => ({ top: 15, position: "relative", left: 0 }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#0066CC" : null,
        color: isFocused ? "white" : "#111",
        fontSize: "1rem",
        borderColor: isFocused ? "#05bed7" : "#05bed7",
        minWidth: isBigScreen ? "20vw" : "50vw",
        cursor: "pointer",
      };
    },
  };
  console.log(props, "Clearing");
  if (props.clear) {
    ref.current.clearValue();
  }

  return (
    <div
      className={cn(
        styles.dropdownContainerStyle,
        theme ? styles.dropdownContainerStyleDark : ""
      )}
    >
      <div
        className={cn(
          styles.countryDropdown,
          props.inputError && styles.inputErrorStyle
        )}
      >
        <Select
          onChange={(option) => {
            if (option) props.setFieldValue("countyCode", option.value);
          }}
          ref={ref}
          options={countryList.map(item => ({ label: item?.dial_code, value: item?.name ,image:item?.flag}))}
          styles={controlStyle || styles}
          isSearchable={false}
          formatOptionLabel={(country) => (
           
            <div className={styles.countryOption}>
              {country.image}
              <span>{country.label}</span>
            </div>
          )}
        />

        <Input
          label="Phone Number*"
          placeholder="Phone Number*"
          type="tel"
          pattern="[0-9]{}"
          maxLength="15"
          inputContainerStyle={styles.inputContainerStyle}
          inputFloatingStyle={styles.inputFloatingStyle}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          onBlur={props.onBlur}
          {...props}
        />
      </div>
    </div>
  );
};

export default CountryDropdown;
