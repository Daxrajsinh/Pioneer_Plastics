import {useState, useEffect} from 'react'
import axios from 'axios'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function CategoriesAPI() {
    const [categories, setCategories] = useState([])
    const [callback, setCallback] = useState(false)
    
    useEffect(() =>{
        const getCategories = async () =>{
            const res = await axios.get(`${backendUrl}/api/category`)
            setCategories(res.data)
        }
        //comment
        getCategories()
    },[callback])
    return {
        categories: [categories, setCategories],
        callback: [callback, setCallback]
    }
}

export default CategoriesAPI
