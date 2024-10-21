import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from './api/auth/[...nextauth]/route'

const HomePage = async () => {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  if (session) {
    redirect(`/home`)
  }

  return <div className=''>Home Page</div>
}

export default HomePage
