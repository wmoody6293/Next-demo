"use client";
import { useState } from "react";
import { useAppContext } from "@/providers/context/ContextProvider";
import styles from "./styles/filterBar.module.css";
function FilterBar() {
  const { option, setOption } = useAppContext();
  return (
    <div className={styles.container}>
      <div className={styles["filter-container"]}>
        {option === "characters" ? (
          <div className={styles.selected}>Characters</div>
        ) : (
          <div
            className={styles["filter-option"]}
            onClick={() => setOption("characters")}
          >
            Characters
          </div>
        )}
      </div>
      <div className={styles["filter-container"]}>
        {option === "films" ? (
          <div className={styles.selected}>Films</div>
        ) : (
          <div
            className={styles["filter-option"]}
            onClick={() => setOption("films")}
          >
            Films
          </div>
        )}
      </div>
      <div className={styles["filter-container"]}>
        {option === "planets" ? (
          <div className={styles.selected}>Planets</div>
        ) : (
          <div
            className={styles["filter-option"]}
            onClick={() => setOption("planets")}
          >
            Planets
          </div>
        )}
      </div>
      <div className={styles["filter-container"]}>
        {option === "species" ? (
          <div className={styles.selected}>Species</div>
        ) : (
          <div
            className={styles["filter-option"]}
            onClick={() => setOption("species")}
          >
            Species
          </div>
        )}
      </div>
      <div className={styles["filter-container"]}>
        {option === "vehicles" ? (
          <div className={styles.selected}>Vehicles</div>
        ) : (
          <div
            className={styles["filter-option"]}
            onClick={() => setOption("vehicles")}
          >
            Vehicles
          </div>
        )}
      </div>
      <div className={styles["filter-container"]}>
        {option === "starships" ? (
          <div className={styles.selected}>Starships</div>
        ) : (
          <div
            className={styles["filter-option"]}
            onClick={() => setOption("starships")}
          >
            Starships
          </div>
        )}
      </div>
    </div>
  );
}

export default FilterBar;
