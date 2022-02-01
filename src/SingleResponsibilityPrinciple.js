import React from "react";
import useUsers from "./hooks/useUsers";

function User({ user }) {

  const showDetails = () => {
    alert(user.contact);
  }

  return (
    <div onClick={() => showDetails()}>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );

}
export const SingleResponsibilityPrinciple = () => {

  const { users, isLoading } = useUsers();

  // COMPLEX UI RENDERING
  return (
    <>
      <div> Users List</div>
      <div> Loading state: {isLoading ? "Loading" : "Success"}</div>
      {users.map((user) => <User key={user.id} user={user} />)}
    </>
  );
};