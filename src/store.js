import { writable } from 'svelte/store';
let user = writable(null);
let is_loading = writable(true);
const is_loggedin = writable(false);

const checkLoginStatus = async () => {
    try {
        const response = await fetch('http://localhost:5000/account/protected', {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );
        if (response.status === 200) {
            response.json().then((data) => {
                user.set(data.user);
                console.log('User is logged in:', data.user);
                is_loggedin.set(true);
                is_loading.set(false);

            });
        } else {
            console.error('Failed to check login status:', response);
            is_loggedin.set(false);
            is_loading.set(false);
        }
    } catch (error) {
        console.error('Failed to check login status:', error);
        is_loggedin.set(false);
        is_loading.set(false);}
};



await checkLoginStatus();


// if( await checkLoginStatus()){
//     console.log("loading is set to", is_loading)
//     is_loggedin.set(true);
//     is_loading.set(false);
//     // check if user is allotted
//     // check if user is approved
// }

export { is_loggedin , user , is_loading};