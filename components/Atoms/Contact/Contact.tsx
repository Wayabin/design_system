import React from "react";

export interface ContactProps {
  phone?: string;
}

export const Contact = ({ phone }) => {
  return (
    <div className="container flex justify-center bg-gray-50">
      <p className="mx-1"> Venta teléfonica</p> <strong>{phone}</strong>
    </div>
  );
};

export default Contact;
