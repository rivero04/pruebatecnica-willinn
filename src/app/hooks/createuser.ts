"use client";

// INTENTANDO SOLUCIONAR ERRORES TODAVIA NO FUNCIONA :(

const CreateUser = () => {

type UserData = {
        name: string;
        surname: string;
        email: string;
        password: string;
        isActive: boolean;
       
    }

    const addUser = async (newUserData: UserData) => {
        try {
            const response = await fetch('https://uat.zonamerica.com:5009/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                },
                body: JSON.stringify(newUserData),
            });

            if (!response.ok) {
                throw new Error('server error');
            }

            const newUser = await response.json(); 
            return newUser
        } catch (error) {
            throw new Error(`Error al agregar usuario: ${error}`);
        }
    };

    return addUser ;
}

export default CreateUser;  
