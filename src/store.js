import { writable } from 'svelte/store';


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
           return true
        } else {
            console.error('Failed to check login status:', response);
            return false
        }
    } catch (error) {
        console.error('Failed to check login status:', error);
        return false
    }
};




const is_loggedin = writable(false);
if( await checkLoginStatus()){
    is_loggedin.set(true);
}


export { is_loggedin };