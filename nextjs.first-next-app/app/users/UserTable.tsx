import React from 'react'
import Link from "next/link";
import { sort } from 'fast-sort';

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  sortOrder?: string
}

const UserTable = async ({ sortOrder }: Props) => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' });
  let users: User[] = await response.json();

  switch (sortOrder) {
    case "name":
      users = sort(users).asc(u => u.name);
      break;
    case "email":
      users = sort(users).asc(u => u.email);
      break;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th><Link href="/users?sortOrder=name">Name</Link></th>
          <th><Link href="/users?sortOrder=email">Email</Link></th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>)}
      </tbody>
    </table>
  )
}

export default UserTable