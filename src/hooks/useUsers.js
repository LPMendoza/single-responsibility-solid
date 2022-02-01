import { useEffect, useState } from "react";
import useFetch from './useFetch';

export default function useUsers() {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { data: users, isLoading } = useFetch("https://jsonplaceholder.typicode.com/users");

  // PROCESSING DATA
  useEffect(() => {
    if(!isLoading) {
      const filteredUsers = users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          contact: `${user.phone} , ${user.email}`,
        };
      });
      setFilteredUsers(filteredUsers);
    }
  }, [users, isLoading]);

  return {
    users: filteredUsers,
    isLoading: isLoading,
  }

}