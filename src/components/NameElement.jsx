import React from 'react'

export default function nameElement({users}) {
  return (
    <ul className='list-unstyled'>
    {users.map((user) => (
      <li key={user.id}>{`${user.firstname} - ${user.lastname}`}</li>
    ))}
  </ul>
  )
}
