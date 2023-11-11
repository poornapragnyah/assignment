import React from "react";

// Styling object
const styles = {
  nav: {
    backgroundColor: "#64748b",
    borderRadius: "20px",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    height: "80px",
    padding: "20px",
    margin: "0 20px",
  },
  whiteBackground: {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "15px",
    position: "relative",
    width: "48px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
  },
  svg: {
    width: "32px",
    height: "32px",
    position: "absolute",
    top: "23px",
    left: "23px",
  },
  input: {
    border: "none",
    outline: "none",
    width: "400px",
    padding: "15px",
    marginLeft: "20px",
    borderRadius: "20px",
    fontSize: "16px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    display: "absolute",
    top: "20px",
    right: "20px",
  },
  inputBoxHover: {
    transform: "scale(1.05)",
    transition: "transform 0.3s ease-in-out",
  },
};

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.flexContainer}>
        <div style={styles.whiteBackground}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            style={styles.svg}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="  Search"
          style={{ ...styles.input, ...styles.inputBoxHover }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
