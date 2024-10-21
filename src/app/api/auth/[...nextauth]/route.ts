// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import NextAuth from 'next-auth'
import type { AuthOptions } from 'next-auth'
import TwitchProvider from 'next-auth/providers/twitch'

export interface TwitchProfile extends Record<string, any> {
  sub: string
  preferred_username: string
  email: string
  picture: string
}

// export function TwitchProvider(options: any): any {
//   return {
//     wellKnown: 'https://id.twitch.tv/oauth2/.well-known/openid-configuration',
//     id: 'twitch',
//     name: 'Twitch',
//     type: 'oauth',
//     authorization: {
//       params: {
//         scope: 'openid user:read:email user:read:follows',
//         claims: {
//           id_token: {
//             email: null,
//             picture: null,
//             preferred_username: null
//           }
//         }
//       }
//     },
//     idToken: true,
//     profile(profile: any) {
//       return {
//         id: profile.sub,
//         name: profile.preferred_username,
//         email: profile.email,
//         image: profile.picture
//       }
//     },
//     style: {
//       logo: '/twitch.svg',
//       logoDark: '/twitch-dark.svg',
//       bg: '#fff',
//       text: '#65459B',
//       bgDark: '#65459B',
//       textDark: '#fff'
//     },
//     options
//   }
// }

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    TwitchProvider({
      clientId: process.env.TWITCH_CLIENT_ID,
      clientSecret: process.env.TWITCH_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session, token }) {
      return { ...session, token }
    },
    async jwt({ token, account }) {
      return { ...token, ...account }
    }
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
