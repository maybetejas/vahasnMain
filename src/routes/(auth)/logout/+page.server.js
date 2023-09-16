import { redirect } from '@sveltejs/kit'


export const load = async () => {
    throw redirect(302, '/');
}

export const actions = {
    default({ cookies }) {
      // eat the cookie
      cookies.set('session', '', {
        path: '/',
        expires: new Date(0),
      })
  
      // redirect the user
      throw redirect(302, '/login')
    },
  }