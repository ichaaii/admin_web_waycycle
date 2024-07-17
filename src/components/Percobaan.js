import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from './Firebase'

function Percobaan () {
    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db,  "users")

    useEffect(() => {
      const getUsers = async () => {
        try {
          const data = await getDocs(usersCollectionRef);
          const usersData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setUsers(usersData);
          console.log("Fetched users data: ", usersData);
        } catch (error) {
          console.error("Error fetching users: ", error);
        }
      };
    
        getUsers();
      }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>Name: {user.Name}</h1>
            {/* <h1>Username: {user.username}</h1> */}
            <h1>Transaction Date: {user.transactionDate}</h1>
          </div>
        );
      })}
    </div>
  )
}

export default Percobaan