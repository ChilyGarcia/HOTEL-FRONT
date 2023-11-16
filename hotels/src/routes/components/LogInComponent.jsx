import { loginHook } from "../../hooks/loginHook";
import { useRef, useEffect } from "react";
import styles from "../../styles/loginStyles.module.css";
import { SignInComponent } from "./SignInComponent";
import { Link } from "react-router-dom";

export const LogInComponent = () => {
  const loginRest = {
    email: "restaurante@gmail.com",
    password: "restaurante123",
  };

  const formRef = useRef();

  useEffect(() => {
    formRef.current.focus();
  }, []);

  const dataLogIn = {
    email: "",
    password: "",
  };

  const { form, onInputChange } = loginHook(dataLogIn);

  const { email, password } = form;

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(form);

    if (email === loginRest.email) {
      localStorage.setItem("rol", "restaurante");
      window.location.href = "empleado-rest";
    } else {
      localStorage.setItem("rol", "administrador");
      window.location.href = "empleados";
    }
  };

  return (
    <>
      <div className={`${styles.section} ${styles["inicioBackground"]}`}>
        <div className={styles.container}>
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className={`mb-0 pb-3 ${styles["custom-span"]}`}>
                  <span>Iniciar sesión</span>
                  <span>Registrarse</span>
                </h6>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label htmlFor="reg-log"></label>
                <div className={styles["card-3d-wrap"] + " mx-auto"}>
                  <div className={styles["card-3d-wrapper"]}>
                    <div className={styles["card-front"]}>
                      <div className={styles["center-wrap"]}>
                        <div className={styles["section"] + " text-center"}>
                          <h4
                            className={`mb-4 pb-3 ${styles["custom-heading"]}`}
                          >
                            Iniciar sesión
                          </h4>

                          <form onSubmit={onSubmit}>
                            <div className={styles["form-group"]}>
                              <input
                                type="email"
                                name="email"
                                className={styles["form-style"]}
                                placeholder="Digite su email"
                                id="email"
                                autoComplete="off"
                                ref={formRef}
                                value={email}
                                onChange={(event) => onInputChange(event)}
                              ></input>
                              <i
                                className={styles["input-icon"] + " uil uil-at"}
                              ></i>
                            </div>
                            <div className={styles["form-group"] + " mt-2"}>
                              <input
                                type="password"
                                name="password"
                                className={styles["form-style"]}
                                placeholder="Digite su contraseña"
                                id="password"
                                autoComplete="off"
                                value={password}
                                onChange={(event) => onInputChange(event)}
                              ></input>
                              <i
                                className={
                                  styles["input-icon"] + " uil uil-lock-alt"
                                }
                              ></i>
                            </div>

                            <button
                              type="submit"
                              className={styles["btn"] + " mt-4"}
                            >
                              Iniciar sesion
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                    <SignInComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
