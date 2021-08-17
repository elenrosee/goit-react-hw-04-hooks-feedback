import React, { Component } from "react";
import styles from "./Notification.module.scss";

class Notification extends Component {
  render() {
    return <h3 className={styles.title}>{this.props.message}</h3>;
  }
}

export default Notification;
