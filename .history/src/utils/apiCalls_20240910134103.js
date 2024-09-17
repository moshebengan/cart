import { json } from "react-router-dom";

const apiUrl = "https://fakestoreapi.com";

const fetchCall = async (url) => {
    
    const response = await fetch(`${apiUrl}${url}`, {
        mode:"cors",
    })
        .then((data) => {
            return data.json();
        })
        .catch((err) => {
            throw new Error(err)
        })
        return response
}

export {
    fetchCall
}