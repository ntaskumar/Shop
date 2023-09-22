import React from 'react'
import { NavLink } from 'react-router-dom';
import 'reactjs-popup/dist/index.css';

const Navbar = () => {
    return (
        <div className= "container px-10" style={{ marginTop: "0px"}}>
           <nav className="navbar">
                <div className="container-fluid container">               
                    <NavLink to="/">
                        <img src="/logo.png" alt="logo" style={{ height: "200px" }} />
                    </NavLink>
                    <div className="offcanvas-body">
                            <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Search for Product..." />
                    </div>      
               </div>
                
                <div class="ui card">
                <a class="image" href="https://www.ajio.com/">
                <img src="/banners/ajio.png" ></img>
                </a>
                </div>
              
                <div class="ui card">
                <a class="image" href="https://www.flipkart.com/">
                <img src="/banners/flipkart.png"></img>
                </a>
                </div>
                <div class="ui card">
                <a class="image" href="https://www.myntra.com/">
                <img src="/banners/myntra.png"></img>
                </a>
                </div>
                <div class="ui card">
                <a class="image" href="https://www.buywow.in/">
                <img src="/banners/wow.png"></img>
                </a>
                </div>
                <div class="ui card">
                <a class="image" href="https://www.boat-lifestyle.com/">
                <img src="/banners/boat.png"></img>
                </a>
                </div>       
                <div class="ui card">
                <a class="image" href="https://www.licious.in/">
                <img src="/banners/licious.png"></img>
                </a>
                </div>
                <div class="ui card">
                <a class="image" href="https://www.giva.co/">
                <img src="/banners/giva.png"></img>
                </a>
                </div>                    
                <div class="ui card">
                <a class="image" href="https://www.udemy.com/">
                <img src="/banners/udemy.png" ></img>
                </a>
                </div>
                <div class="ui card">
                <a class="image" href="https://www.pizzahut.co.in/">
                <img src="/banners/pizza-hut.png"></img>
                </a>
                </div>          
            </nav>
        </div>
    )
}

export default Navbar;