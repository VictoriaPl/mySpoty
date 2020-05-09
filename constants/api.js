export const fetchUsers = async () => 
   await fetch('http://localhost:3000/api/users')
      .then(res => res.json())
