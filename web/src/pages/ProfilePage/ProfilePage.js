import { Link, routes, navigate } from '@redwoodjs/router'
import { useEffect } from 'react'
import ProfileCell from 'src/components/ProfileCell/ProfileCell'
import SecondaryLayout from 'src/layouts/SecondaryLayout/SecondaryLayout'
import { useParams } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { current } from 'immer'

const ProfilePage = () => {
  const { id } = useParams()
  const { currentUser } = useAuth()

  // This probably isn't the safest solution
  // but we need to catch it on the load and redirect after the render cycle
  useEffect(() => {
    if (currentUser.id !== id) navigate(routes.profile({id: currentUser.id}))
  })
  if (currentUser.id !== id) return null;

  return (
    <SecondaryLayout title="Settings">
      <ProfileCell />
    </SecondaryLayout>
  )
}

export default ProfilePage
