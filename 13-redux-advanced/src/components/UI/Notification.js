import styles from "./Notification.module.css";

const Notification = (props) => {
  return (
    <section
      className={`${styles.notification} ${
        props.status === "error" ? "error" : "success"
      }`}
    >
      <p>{props.message}</p>
    </section>
  );
};

export default Notification;
