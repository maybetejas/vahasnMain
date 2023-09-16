import PocketBase from 'pocketbase';
/** @type {import('@sveltejs/kit').Handle} */


export async function handle({ event, resolve }) {

    const session = event.cookies.get('session');

    if (!session) {
        // if there is no session load page as normal
        return await resolve(event)
    }
    
    const pb = new PocketBase('http://127.0.0.1:8090');

 
        const user = await pb.collection('users').getFirstListItem(`userAuthToken="${session}"`);


    if (user) {
        event.locals.user = {
            name: user.name,
            contact: user.contact,
            role: user.role
        }
    }


    return await resolve(event)
}

