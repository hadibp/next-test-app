"use client";

import { useSelector } from "react-redux";
import Link from "next/link";
// import styles from "../confirmationPage/confirmation.css"; // Adjust the path based on your file structure

const ConfirmationPage = () => {
  const formData = useSelector((state) => state.formData);

  const styles = {
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    container: {
      // backgroundColor: "#fff",
      border: "1px solid #ddd",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    },
    header: {
      backgroundColor: "#3498db",
      // color: "#fff",
      padding: "10px",
      textAlign: "center",
    },
    confirmationInfo: {
      marginTop: "20px",
      textAlign: "center",
    },
    editButton: {
      marginTop: "20px",
      innerWidth:"100px",
      
    },
    button: {
      backgroundColor: "#3498db",
      color: "#fff",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      textDecoration: "none",
      
    },
    buttonHover: {
      backgroundColor: "#267bb8",
    },
  };

  return (

    <div style={styles.body}>
       <div>
        <button type="button">
          <Link href={"/form"}>Home</Link>{" "}
        </button>
      </div>
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>Confirmation Page</h1>
      </div>

      <div style={styles.confirmationInfo}>
        {/* <h1>Confirmation Information</h1> */}
        <p>Name: {formData.name}</p>
        <p>Address: {formData.address}</p>
        <p>Email: {formData.email}</p>
      </div>
      <div style={styles.editButton}>
        <div 
        style={{ ...styles.button, ...(styles.buttonHover && { ":hover": styles.buttonHover }) }}>
        <Link href="/form/">
        
            Edit
        
        </Link>
        </div>
        
      </div>
    </div>
    <div>
        <button type="button">
          {" "}
          <Link href={"/form/list"}>List</Link>{" "}
        </button>
      </div>
  </div>
  );
};

export default ConfirmationPage;
