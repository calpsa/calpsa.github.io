import styles from "../styles/Card.module.css"

function Card({firstName, lastName, role, email, avi}) {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <img src={avi || "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"} alt="profile" />
            </div>
            <div className={styles.cardBody}>
                <p style={{fontSize: "20px"}}>{firstName} {lastName}</p>
                <p>{role}</p>
                <p style={{fontSize: "12px", marginTop: "4px"}}>{email}</p>
            </div>
        </div>
    );
}

export default Card;