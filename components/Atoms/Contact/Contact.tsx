import React from "react";

export interface ContactProps {
  phone?: string;
}

export const Contact: React.FC<ContactProps> = ({ phone }) => {
  return (
    <div className="container flex justify-center items-center bg-gray-100 h-10">
      <p className="mx-1"> Contactanos via WhatsApp</p> <strong>{phone}</strong>
    </div>
  );
};

export default Contact;
