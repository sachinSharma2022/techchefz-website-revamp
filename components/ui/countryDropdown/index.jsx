"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { MyContext } from "@/context/theme";
import { useContext } from "react";
import InputCustom from "../inputCustom";
import { ImageCustom } from "../imageCustom";

import styles from "./style.module.scss";

const people = [
  {
    name: "+91",
    flag: <ImageCustom src="/images/flag.jpg" width={24} height={15} alt="" />,
  },
  {
    name: "+93",
    flag: <ImageCustom src="/images/flag.jpg" width={24} height={15} alt="" />,
  },
  {
    name: "+355",
    flag: <ImageCustom src="/images/flag.jpg" width={24} height={15} alt="" />,
  },
  {
    name: "+376",
    flag: <ImageCustom src="/images/flag.jpg" width={24} height={15} alt="" />,
  },
  {
    name: "+244",
    flag: <ImageCustom src="/images/flag.jpg" width={24} height={15} alt="" />,
  },
  {
    name: "+672",
    flag: <ImageCustom src="/images/flag.jpg" width={24} height={15} alt="" />,
  },
];

const CountryDropdown = () => {
  const { theme, setTheme } = useContext(MyContext);
  const [selected, setSelected] = useState(people[0]);
  return (
    <div
      className={`${styles.dropdownContainerStyle} ${
        theme ? styles.dropdownContainerStyleDark : ""
      }`}
    >
      <div className={styles.countryDropdown}>
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

        <InputCustom
          type="text"
          className={`${styles.floatInput} form-control`}
          id="username"
          placeholder="Phone Number*"
          required=""
        />
      </div>
    </div>
  );
};

export default CountryDropdown;
