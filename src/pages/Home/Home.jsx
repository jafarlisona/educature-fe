import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Features from "../../components/Features/Features";

function Home() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Educature Education</title>
        <link
          rel="shortcut icon"
          href="https://preview.colorlib.com/theme/educature/img/fav.png.webp"
          type="image/x-icon"
        />
      </Helmet>
      <Features />
    </HelmetProvider>
  );
}

export default Home;
