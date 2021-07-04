import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const name = "Ozan Yıldız";
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>{name}</p>
    </footer>
  );
}

export default Footer;
