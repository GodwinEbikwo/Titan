import React, { useEffect } from "react";

export default function Users({ users }) {
  useEffect(() => {
    console.log(users);
  });

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <ul>
          <l1>{user.name}</l1>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
