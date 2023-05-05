import { NuxtAuthHandler } from '#auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { EXTERNAL_RESOURCE_BASE_URL } from '~/constants'
import { User } from '~/interfaces/user.interface'

export default NuxtAuthHandler({
  providers: [
    // @ts-ignore
    CredentialsProvider.default({
      name: 'credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      // @ts-ignore
      async authorize(credentials) {
        const response = await fetch(`${EXTERNAL_RESOURCE_BASE_URL}auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials),
        })

        const responseBody: User = await response.json();
        if (response.ok && responseBody) {
          return responseBody;
        } else {
          console.warn('Something went wrong with the login request', { response, responseBody });
          return null;
        }
      }
    })
  ],
  callbacks: {
    jwt({ token, user }) {
      if (!token.accessToken) token.accessToken = (user as unknown as User)?.token;
      return token;
    },
    session({ session, token, user }) {
      if (!session?.user) session.user = user;
      // @ts-ignore
      if (!session?.token) session.token = token?.accessToken;
      return session;
    }
  }
})