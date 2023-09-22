import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
 

function Products() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filter, setFilter] = useState(data);
    const [category, setCategory] = useState([]);
    const [option, setOption] = useState();
    

    function handleChange(event) {
       filterProduct(event.target.value);
       setOption(event.target.value);
    }

    useEffect(() => {
        let componentMounted = true;
        const getProdcuts = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMounted) {
                const data = await response.json();
                setData(data);
                setFilter(data);
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProdcuts();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-9 py-md-3">
                    <div className="row">
                        <div className="col-6 col-md-6 col-lg-4 mb-3">
                            <Skeleton height={200} width={"100%"}/>
                        </div>                         
                    </div>
                </div>
           </>
        )
    }

    const filterProduct = (category) => {    
        const updateList = data.filter((x) => x.category === category);
        category==="All" ?  setFilter(data):  setFilter(updateList);
        console.log(category)
    }

    useEffect(() => {
        let componentMounted = true;
        const getCategory = async () => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products/categories');
            if (componentMounted) {
                const data = await response.json();
                    setCategory(data);
            }
            return () => {
                componentMounted = false;
            }
        }
        getCategory();
    }, []);

    const ShowProducts = () => {
        return (
            <>
                <div className= "container px-0" style={{ marginTop: "10px"}}>
                    <div className="row">
                        {filter.map((product) => {
                            console.log(product)
                            return (
                                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>
                                    
                                    <div className="card h-100">
                                        <img src={product.image} className="m-3" style={{ height: "300px", width: "auto", objectFit: "contain" }} alt={product.title} />
                                        <div className="m-3 mb-0">
                                            <small className="card-title">{product.title.substring(0, 50)}...</small>
                                        </div>
                                        <div style={{ marginTop: "auto" }}>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="m-3"><b>${product.price}</b></div>
                                                <NavLink className="stretched-link" to={`/product/${product.id}`}>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            
                        })}
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div><h1> <b>{option}</b> </h1></div>
                <div align="right">
                    <select id="category" value={option} onChange={handleChange} >
                        <option value="All">All</option>
                        {category.map((item) => (
                        <option key={item} value={item}>
                            <b>{item.charAt(0).toUpperCase() + item.slice(1)} </b>
                        </option>
                        ))}
                    </select>
                </div>
            <div className="row">
                {loading ? <Loading /> : <ShowProducts />}
            </div>
        </>
    )
}

export default Products