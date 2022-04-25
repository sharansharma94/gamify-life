import styles from "./index.module.css";
import { useState, useEffect } from "react";

export default function Roadmap() {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("http://localhost:3000/api/roadmap").then((data) => {
      data.json().then((data) => {
        setData(data);
      });
    });
  }, []);
  return (
    <div className={styles.container}>
      <h1>Roadmap</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}
