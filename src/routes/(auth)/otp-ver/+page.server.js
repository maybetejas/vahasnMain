import { redirect } from '@sveltejs/kit';
import PocketBase from 'pocketbase';

export const load = async ({ cookies }) => {
    const coi = cookies.get('verification');

    return {
        coi
    }
}

export const actions = {
    otpVerification: async ({request, cookies }) => {
        const formData = await request.formData();
        const otpString = formData.get('otpString')
        const contact = cookies.get('verification');
        let otp = '0000';
        console.log(contact);
        const pb = new PocketBase('http://127.0.0.1:8090')
            const record = await pb.collection('users').getFirstListItem(`contact="${contact}"`);
            if (record) {
                otp = record.otp;
                if (otpString === otp) {
                    cookies.set('verification', '', {
                        path: '/',
                        expires: new Date(0),
                      })
                    throw redirect(302, '/login')
                } else {
                    return {
                        x: true
                    }
                }
         }
    }
}