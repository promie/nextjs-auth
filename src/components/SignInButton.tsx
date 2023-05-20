import { FC } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const SignInButton: FC = () => {
  const { data: session } = useSession()

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-600">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-red-600">
          Sign Out
        </button>
      </div>
    )
  }

  return (
    <button onClick={() => signIn()} className="text-sky-600 ml-auto">
      Sign In
    </button>
  )
}

export default SignInButton
