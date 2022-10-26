import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchUser, addUser, deleteUser, logInUser} from './features/users/userSlice.js'

function App() {
  const user = useSelector(store => store.users)
  const dispatch = useDispatch()
  console.log(!!user.users.errors)
  console.log(user.users)
  useEffect(() => {
    console.log("hello")
    dispatch(fetchUser())
  },[dispatch])
  const handleDispatch = () => {
    const form = {
      name: "Bob",
      email: "bobby@gmail.com",
      password: "Hello",
      password_confirmation: "Hello",
      phone_number: parseInt("1234567890"),
    }
    dispatch(addUser(form))
  }

  const handleLogin = () => {
    const form = {
      email: "bobby@gmail.com",
      password: "Hello"
    }
    dispatch(logInUser(form))
  }

  const handleDeleteDispatch = () =>{
    dispatch(deleteUser())
  }
  return (
    <div >
      {user.users.length > 0 && user.users.map(u => <p key={u.name}>{u.name}</p>)}
      <button onClick={handleDispatch}>hello</button>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleDeleteDispatch}>bye</button>
    </div>
  );
}

export default App;

