import React from "react";
import styles from "../../styles/trasladoStyle.module.css";

export const TrasladosComponent = () => {
  return (
    <>
      <form className={styles.formNew}>
        <div className={styles.group}>
          <input type="text" />
          <span className={styles.highlight}></span>

          <span class={styles.bar}></span>
          <label className={styles.labelForm}>Programa</label>
        </div>
        <div className={styles.group}>
          <input type="text" />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelForm}>Año</label>
        </div>
        <div className={styles.group}>
          <input type="text" />
          <span className={styles.highlight}></span>
          <span className={styles.bar}></span>
          <label className={styles.labelForm}>Matriculados</label>
        </div>

        <button
          type="button"
          className={`${styles["button"]} ${styles["buttonBlue"]}`}
        >
          Enviar
          <div className={`${styles["ripples"]} ${styles["buttonRipples"]}`}>
            <span className="ripplesCircle"></span>
          </div>
        </button>
      </form>
    </>
  );
};
