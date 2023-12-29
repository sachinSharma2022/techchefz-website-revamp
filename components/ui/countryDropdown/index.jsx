"use client";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";

import styles from "./style.module.scss";
import InputCustom from "../inputCustom";
import { ImageCustom } from "../imageCustom";

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
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className={styles.dropdownContainerStyle}>
      {/* <div className="form-floating">
        <div class="input-group">
          <div class="input-group-prepend">
            <select
              className={`${styles.formSelect} form-select`}
              id="floatingSelectGrid"
              aria-label="Floating label select example"
            >
              <option selected>IN</option>
              <option value="1">EN</option>
              <option value="2">EU</option>
            </select>
          </div>

          <input
            type="text"
            className={`${styles.floatInput} form-control`}
            id="username"
            placeholder="Phone Number*"
            required=""
          />
        </div>
      </div> */}

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
                    <>
                      <span>{person.flag}</span>
                      {person.name}
                    </>
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
