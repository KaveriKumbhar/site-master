"use client";

import React from "react";

const Test = () => {
  const createUser = async () => {
    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }

      const data = await response.json();
      console.log("User created:", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={createUser}
      className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
    >
      Create User
    </button>
  );
};

export default Test;
