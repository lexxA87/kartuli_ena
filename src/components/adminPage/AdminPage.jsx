import React from "react";
import HeaderBreadcrunb from "../breadcrumbs/HeaderBreadcrunb";
import AdminPageContent from "./AdminPageContent";

function AdminPage() {
  return (
    <>
      <HeaderBreadcrunb title="Admin Dashboard" />
      <AdminPageContent />
    </>
  );
}

export default AdminPage;
