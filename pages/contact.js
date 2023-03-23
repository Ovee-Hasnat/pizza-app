import Contact from "@/components/Contact";
import React from "react";

const contact = () => {
  return (
    <div style={{ paddingTop: "100px", width: "100vw", height: "auto" }}>
      <div
        style={{
          width: "100%",
          height: "60vh",
          backgroundImage: `url("/img/contact.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: "4rem",
              fontWeight: "200",
              letterSpacing: "2px",
            }}
          >
            Find Us
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default contact;
