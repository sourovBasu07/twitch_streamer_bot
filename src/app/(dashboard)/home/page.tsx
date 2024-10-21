import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return <h1>Home Page</h1>
}
