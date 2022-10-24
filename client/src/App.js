import {useSelector, useDispatch} from 'react-redux'
import {userAdded} from './features/users/userSlice.js'

function App() {
  const user = useSelector(store => store.users)
  const dispatch = useDispatch()
  console.log(user.users)
  const handleDispatch = () => {
    const form = {
      name: "bob",
      loggedIn: true,
      employee: false
    }
    dispatch(userAdded(form))
  }
  return (
    <div >
      {user.users.length > 0 && user.users.map(u => <p key={u.name}>{u.name}</p>)}
      <button onClick={handleDispatch}>hello</button>
    </div>
  );
}

export default App;

