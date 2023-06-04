"use client";

import { gql } from "@apollo/client";
import React from "react";

const query = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

interface Response {
  users: { id: number; name: string; email: string }[];
}

export default function ListUsers() {
  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      <p>Reyad Hasan from List users</p>
    </main>
  );
}
