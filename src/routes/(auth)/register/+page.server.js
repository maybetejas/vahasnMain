import PocketBase from 'pocketbase';
import bcrypt from 'bcrypt'
import axios from 'axios';
import { generateOtp } from '$lib/utils.js'
import { DB_ROUTE } from '$env/dynamic/public'
import { redirect } from '@sveltejs/kit';

export const actions = {

    getOtp: async ({ request, cookies }) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const contact = formData.get('contact');
        const password = formData.get('confirmPassword');
       
        const pb = new PocketBase('http://127.0.0.1:8090')

        try {
            const record = await pb.collection('users').getFirstListItem(`contact="${contact}"`);
            if (record) {
                return {
                    exists: true,
             }
         }
        } catch (error) {
            
        }


        const otp = Math.floor(1000 + Math.random() * 9000).toString();
        const data = {
            name,
            userAuthToken: crypto.randomUUID(),
            passwordHash: await bcrypt.hash(password, 10),
            contact,
            otp,
            role: "test"
        };
     
    
 
  
        const userAdded = await pb.collection('users').create(data);
        if (userAdded) {

            cookies.set('verification', contact, {
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
            

            const apiKey = 'x70aiGvnAg8okcQciXhfFV5gdAi626gVoo0iL9Hv4pkrrDX1uo8nNOYJNyss';
              const numbers = contact

            // send otp
              const settings = {
              method: 'POST',
              url: 'https://www.fast2sms.com/dev/bulkV2',
              headers: {
              'authorization': apiKey,
                  },
                data: {
              variables_values: otp,
              route: 'otp',
              numbers: numbers,
            },
            };

                axios(settings)
              .then(response => {
              console.log(response.data.message);
              })
              .catch(error => {
              console.error(error);
              });
            
            throw redirect(303, '/otp-ver')              
           }        

    }
}