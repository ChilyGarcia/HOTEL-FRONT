import React from 'react'
import styles from "../../styles/trasladoStyle.module.css";

export const ModificarEmpleadorRestaurante = () => {
    return (
        <>
          <form className={styles.formNew}>
            <div className={styles.group}>
              <input type="text" />
              <span className={styles.highlight}></span>
    
              <span class={styles.bar}></span>
              <label className={styles.labelForm}>Desayuno</label>
            </div>
            <div className={styles.group}>
              <input type="text" />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.labelForm}>Almuerzo</label>
            </div>
            <div className={styles.group}>
              <input type="text" />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.labelForm}>Comida</label>
            </div>
            <div className={styles.group}>
              <input type="text" />
              <span className={styles.highlight}></span>
              <span className={styles.bar}></span>
              <label className={styles.labelForm}>Snacks</label>
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
}
