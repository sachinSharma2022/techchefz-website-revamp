"use client";

import { MyContext } from "@/context/theme";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import { ImageCustom } from "../imageCustom";

import { cn } from "@/lib/utils";
import styles from "./style.module.scss";
import { Input } from "../inputCustom";

const people = [
  {
    name: "+91",
    flag: (
      <ImageCustom
        src="/images/flag.jpg"
        width={24}
        height={15}
        alt="flag-img"
      />
    ),
  },
  {
    name: "+93",
    flag: (
      <ImageCustom
        src="/images/flag.jpg"
        width={24}
        height={15}
        alt="flag-img"
      />
    ),
  },
  {
    name: "+355",
    flag: (
      <ImageCustom
        src="/images/flag.jpg"
        width={24}
        height={15}
        alt="flag-img"
      />
    ),
  },
  {
    name: "+376",
    flag: (
      <ImageCustom
        src="/images/flag.jpg"
        width={24}
        height={15}
        alt="flag-img"
      />
    ),
  },
  {
    name: "+244",
    flag: (
      <ImageCustom
        src="/images/flag.jpg"
        width={24}
        height={15}
        alt="flag-img"
      />
    ),
  },
  {
    name: "+672",
    flag: (
      <ImageCustom
        src="/images/flag.jpg"
        width={24}
        height={15}
        alt="flag-img"
      />
    ),
  },
];

const CountryDropdown = (props) => {
  const { theme, setTheme } = useContext(MyContext);
  const [selected, setSelected] = useState(people[0]);
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
        <Listbox value={selected} onChange={setSelected}>
          <div className={styles.floatDropdown}>
            <Listbox.Button>
              <div className={styles.countryValue}>
                {selected.flag} <span className={styles.arrow}></span>
              </div>
              {selected.name}
            </Listbox.Button>
            <Transition as={Fragment}>
              <Listbox.Options className={styles.countryList}>
                {people.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `${active ? styles.active : styles.inActive}`
                    }
                    value={person}
                  >
                    <div className={styles.inputValueStyle}>
                      <span>{person.flag}</span>
                      {person.name}
                    </div>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>

        {/* <input
          type="text"
          id="username"
          placeholder="Phone Number*"
          required=""
        /> */}

        <Input
          label="Phone Number*"
          placeholder="Phone Number*"
          type="name"
          id="companyName"
          name="companyName"
          inputContainerStyle={styles.inputContainerStyle}
          inputFloatingStyle={styles.inputFloatingStyle}
        />
      </div>
    </div>
  );
};

export default CountryDropdown;
