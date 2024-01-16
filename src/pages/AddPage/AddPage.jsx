import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Add from "../../components/Add/Add";
function AddPage() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Educature Add Page</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/educature/img/fav.png.webp"
          type="image/x-icon"
        />
      </Helmet>
      <Add />
    </HelmetProvider>
  );
}

export default AddPage;
