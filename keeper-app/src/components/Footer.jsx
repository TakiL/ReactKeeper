import React from "react";

function Footer() {
  const date = new Date();
  const currYear = date.getFullYear();
  const company = "Laszlo";
  return (
    <footer className="footer">
      <p>
        Copyright {currYear} @ {company}
      </p>
    </footer>
  );
}

export default Footer;
