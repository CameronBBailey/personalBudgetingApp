


/* Maaybe change to just put the / route in when calling the function so i dont need 4 different sets of the function */

/* let token = `YOUR-API-TOKEN-HERE` */

/* Investment Calls */
export const investment_server_calls = {
    get: async () => {
        const response = await fetch(`http://localhost:3300/investments`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            }
        });
        console.log(response)
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://localhost:3300/investments`,{
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://localhost:3300/investments/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`http://localhost:3300/investments/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            }
        })
    }
}
/* Expenses Calls */
export const expenses_server_calls = {
    get: async (token:any) => {
        console.log(token)
        const response = await fetch(`http://localhost:3300/expenses/${token}`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            }
        });
        console.log(response)
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://localhost:3300/expenses`,{
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://localhost:3300/expenses/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`http://localhost:3300/expenses/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            }
        })
    }
}

/* Balance Calls */
export const balance_server_calls = {
    get: async () => {
        const response = await fetch(`http://localhost:3300/balance`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            }
        });
        console.log(response)
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://localhost:3300/balance`,{
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://localhost:3300/balance/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`http://localhost:3300/balance/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            }
        })
    }
}
/* alerts Calls */
export const alerts_server_calls = {
    get: async () => {
        const response = await fetch(`http://localhost:3300/alerts`,{
            method: 'GET',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            }
        });
        console.log(response)
        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://localhost:3300/alerts`,{
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}` */
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://localhost:3300/alerts/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`http://localhost:3300/alerts/${id}`,{
            method: 'DELETE',
            mode: 'cors',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'/*,
                'x-access-token': `Bearer ${token}`*/
            }
        })
    }
}