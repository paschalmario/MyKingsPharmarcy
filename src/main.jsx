import {createRoot} from 'react-dom/client'

const users = [
  {id:1, name:"joana", age: 23},
  {id:2, name:"Benjamin", age:32},
  {id:3, name:"Franklin", age:21}
]

function Userlist(){
  return(
    <ul>
      {users.map(user => 
        <li key={user.id}>
          {user.name} is {user.age} years old.
        </li>
      )}
    </ul>
  )
}

createRoot(document.getElementById('root')).render(
  <Userlist />
)