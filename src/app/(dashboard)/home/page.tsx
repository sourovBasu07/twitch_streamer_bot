import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import Grid from '@mui/material/Grid'

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return <Grid container spacing={6}></Grid>
}
