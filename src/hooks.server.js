import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
    const accessingDashboard = event.url.pathname.startsWith('/dashboard') || event.url.pathname.startsWith('/pre-dashboard');
    console.log('event.url.pathname:', event.url.pathname);
    console.log('accessingDashboard:', accessingDashboard);   
    if (accessingDashboard) {
        try {
            console.log('Checking if user is logged in...');
            const response = await event.fetch('http://localhost:5000/account/protected'
            , {
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            )

            if (response.status !== 200) {
                throw redirect(303, '/');
            }
            if(response.status === 200){
                response.json().then((data) => {
                    console.log('User is logged in:', data.user);
                    event.locals.user = data.user;
                    // if(!user.has_chosen){
                    //     throw redirect(303, '/pre-dashboard');
                    // }
                } );
            }
        } catch (error) {
            if (error instanceof Response) throw error;
            throw redirect(303, '/');
        }
    }
    
    return resolve(event);
};