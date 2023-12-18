"use client";
import dynamic from "next/dynamic";

const CreateWork = dynamic(() => import("./create/createWork"));
const DeleteWorkConfirm = dynamic(() => import("./delete/deleteWorkConfirm"));
const EditWork = dynamic(() => import("./edit/editWork"));

export default function WorkCrud() {
  return (
    <>
      <CreateWork />
      <DeleteWorkConfirm />
      <EditWork />
    </>
  );
}
