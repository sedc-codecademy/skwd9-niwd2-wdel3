import React, { useState, useEffect } from "react";

export const Playground = () => {
  const [message, updateMessage] = useState("Hello amigos");
  const [firstName, setFirstName] = useState("");

  const handleUpdateMessage = (e) => {
    const value = e.target.value;
    updateMessage(value);
  };

  useEffect(() => {
    // COMPONENT DID MOUNT
    console.log("COMPONENT DID MOUNT IN EFFECT");
    return () => {
      console.log("COMPONENT WILL UMOUNT");
    };
  });

  useEffect(() => {
    // COMPONENT WILL UNMOUNT
    return () => {
      console.log("COMPONENT WILL UMOUNT");
    };
  });

  useEffect(() => {
    // COMPONENT DID UPDATE
    console.log("Updated");
  }, [message]);

  return (
    <>
      <h1>{message}</h1>
      {/* FIRST APPROACH AND BETTER PRACTICE */}
      <input type="text" onChange={handleUpdateMessage} value={message || ""} />

      {/* SECOND APPROACH */}
      {/* <input
        type="text"
        onChange={(e) => updateMessage(e.target.value)}
        value={message || ""}
      /> */}
    </>
  );
};
