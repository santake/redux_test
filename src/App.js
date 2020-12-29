import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {Field, Formik, Form} from "formik";
import {login, logout} from "./store/user";

import UsersList from "./comp/usersList";

function App() {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);

  if (user) {
    return (
      <div className="App">
        <h1>hello {user.username}!!</h1>
        <div>
          <button onClick={() => {
            dispatch(logout());
          }}>LOG OUT</button>
        </div>
        <h2>Users:</h2>
        <UsersList/>
      </div>
    );
  }

  // Not logged in yet:
  return (
    <div className="App">
      <h1>Please log in first:</h1>
      <div>
        <Formik
          initialValues={{username: 'ab', password: ''}}
          onSubmit={(values) => {
            dispatch(login(values));
          }}  >
          {({isSubmitting}) => (
            <Form>
              <Field type="text" name="username"/>
              <br/>
              <Field type="password" name="password"/>
              <br/>
              <button type="submit" disabled={isSubmitting}>LOG IN!</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>

  );
}

export default App;
