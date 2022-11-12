import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Components/Loading/Loading";
import styles from "./Profile.module.css";

function Profile() {
  const { user, isLoading } = useAuth0();

  return (
    <div className={styles.main__container}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1>Mi Perfil</h1>
          <img src={user.picture} alt={user.name} />
          <p className={styles.prof__text__bold}>
            Nombre: <span>{user.name}</span>
          </p>
          <p className={styles.prof__text__bold}>
            Nick: <span>{user.nickname}</span>
          </p>
          <p className={styles.prof__text__bold}>
            Email: <span>{user.email}</span>
          </p>
          <p className={styles.prof__text__bold}>
            {" "}
            Esta verificado:
            {user.email_verified ? (
              <span> Verificado</span>
            ) : (
              <span> No Verificado</span>
            )}
          </p>
          <p className={styles.prof__text__bold}>
            Creo que esto es un toekn o un id: <span>{user.sub}</span>
          </p>
        </>
      )}
    </div>
  );
}

export default Profile;
