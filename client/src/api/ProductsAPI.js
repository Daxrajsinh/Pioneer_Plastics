import {useState, useEffect} from 'react'
import axios from 'axios'

const backendUrl = process.env.REACT_APP_BACKEND_URL;

function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(`${backendUrl}/api/products?limit=${page * 9}&${category}&${sort}&title[regex]=${search}`);
                console.log(res.data); // Log the data from the response
                setProducts(res.data.products);
                setResult(res.data.result);
            } catch (error) {
                console.error(error); // Log any error that occurs
            }
        };
        getProducts();
    }, [callback, category, sort, search, page]);
    
    
    return {
        products: [products, setProducts],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default ProductsAPI
