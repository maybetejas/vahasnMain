import PocketBase from 'pocketbase';
import { PUBLIC_DB_URL } from '$env/static/public';


export async function handle({ event, resolve }) {

    const session = event.cookies.get('session');

    if (!session) {
        // if there is no session load page as normal
        return await resolve(event)
    }
    
    
    const pb = new PocketBase(PUBLIC_DB_URL);
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

