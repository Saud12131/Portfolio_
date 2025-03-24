function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="text-white p-4 text-center">
      © {year} Alkama | All rights reserved.
    </div>
  );
}

export default Footer;
