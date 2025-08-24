"use client";

import React, { use } from "react";
import { api } from "@/convex/_generated/api";
import { useConvexQuery } from "@/hooks/use-convex-query"; // your custom hook
import { BarLoader } from "react-spinners";

const ContactsPage = () => {
  // Fetch contacts from Convex
  const { data, isLoading } = useConvexQuery(api.contact.getAllContacts);

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <BarLoader width="100%" color="#36d7b7" />
      </div>
    );
  }

  const { users, groups } = data || {users: [], groups: []};

  return (
    <div className="container mx-auto py-12">
      contact
    </div>
  );
};

export default ContactsPage;
