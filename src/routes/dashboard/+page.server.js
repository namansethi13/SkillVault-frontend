// src/routes/your-route/+page.server.js
import { redirect } from '@sveltejs/kit';


/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, cookies, url }) {
  
    const apiResponse = await fetch('http://localhost:5000/account/profile'
        , {
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }
        )
    console.log('ressss',apiResponse.status)


    if (apiResponse.status === 403) {
      // Redirect to the login page, preserving the original URL
      throw redirect(302, `/pre-dashboard`);
    }

    if (!apiResponse.ok) {
      // Handle other non-200 responses (e.g., 500, 404)
      console.error('API error:', apiResponse.status, apiResponse.statusText);
      return {
        status: apiResponse.status,
        error: new Error(`API error: ${apiResponse.statusText}`)
      };
    }

    const apiData = await apiResponse.json();

    return {
      apiData: apiData
    };

  
}
