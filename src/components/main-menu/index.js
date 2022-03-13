import React, {useEffect,useState} from "react";
import axios from 'axios';
import './main-menu.css';
import MenuItems from "./menu-items/index.js";
import { Card } from "@mui/material";
import Cart from "./cart";
const MainMenu = ()=> {
    const [menuData, setMenuData] = useState([]);
    useEffect(()=> {
        axios.get('https://smartqdemo.firebaseio.com/events-data.json').then((data)=> {
          setMenuData(data.data);
        })
    }, [])
    const bannerImage = menuData?.extras?.categories?.Pizza?.bannerImage;
    const menu = menuData?.menu || [];
    return (
            <div className="row">
                <div className="col-7">
                    <div className="banner">
                        <Card variant="outlined" sx={{width: "85%", margin:"10px"}} ><img className="banner-img" src={bannerImage}/></Card>
                        <MenuItems menu={menu}></MenuItems>
                    </div>
                </div>
                <div className="col-5"> 
                    <Cart/>
                </div>
  
            </div>
       
    )
        
}
export default MainMenu;