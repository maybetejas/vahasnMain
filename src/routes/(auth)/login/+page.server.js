import { redirect } from '@sveltejs/kit';
import bcrypt from 'bcrypt'
import PocketBase from 'pocketbase';

export const load = async ({ cookies }) => {

}

export const actions = {
    login: async ({request, cookies }) => {
        const formData = await request.formData();
        const password = formData.get('password')
        const contact = formData.get('contact')

        const pb = new PocketBase('http://127.0.0.1:8090')
        let record;
        try {
            record = await pb.collection('users').getFirstListItem(`contact="${contact}"`);
        } catch (error) {
            return {
                x: true
            }
        }
        if (record) {
            
            const userPassword = await bcrypt.compare(password, record.passwordHash)
            if (!userPassword) {
                return {
                    y: true
                }
            }
            const newToken = crypto.randomUUID();
            const data = {
                userAuthToken: newToken,
            };
            
            const updateRec = await pb.collection('users').update(record.id, data);
            cookies.set('session', newToken, {
                // send cookie for every page
                path: '/',
                // server side only cookie so you can't use `document.cookie`
                httpOnly: true,
                // only requests from same site can send cookies
                // https://developer.mozilla.org/en-US/docs/Glossary/CSRF
                sameSite: 'strict',
                // only sent over HTTPS in production
                secure: process.env.NODE_ENV === 'production',
                // set cookie to expire after a month
                maxAge: 60 * 60 * 24 * 30,
            })
            throw redirect(302, '/');
        }
           
    }
}