import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import User from './user';

import {fetchUsers} from "../store/users";

const UsersList = () => {

  const dispatch = useDispatch();
  const {users, isLoading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <table>
      <thead>
      <tr>
        <th>ID</th><th>Name</th><th>Phone</th>
      </tr>
      </thead>
      {!isLoading ? (
        <tbody>
        {users.map( user => (
          <User user={user}/>
        ))}
        </tbody>
      ) : (
        <div> loading the data... </div>
      )}
    </table>
  );
};

export default UsersList;