import React, {useState} from "react";
import { Card, Button, Divider, TextField, Select, MenuItem, FormControl, InputLabel, InputBase} from "@mui/material";
import "./items.css"

import { styled } from '@mui/material/styles';

const MenuItems = (props)=> {
    console.log(props.menu)
    const [session, setSession] = useState("");
    const [total, setTotal] = useState("");
    const [quantity, setQuantity] = useState("")
    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3),
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 16,
          width: "320px",
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));
    return (
        <div className="items-container">
            {props.menu.map((item, index)=> {
                if(item.category == "Pizza") {
                    return (
                        <Card key={index} sx={{width: "85%",margin: "10px"}}>
                           <div className="container pizza-details">
                               <div className="row">
                                   <div className="col-md-auto">
                                       <img className="item-image" src={item.imageurl}/>
                                   </div>
                                   <div className="col-6">
                                       <h5>
                                       {item.foodname}
                                       </h5>
                                        
                                        <div sx={{fontSize:"13px", fontWeight: "200"}}>{item.fooddescription}</div>
                                        <Button sx={{width: "100px", height:"35px", marginBottom:"10px", marginTop:"10px"}} variant="contained">Add-ons</Button>
                                   </div>
                                   <div className="col"></div>
                                   <div className="col price" >$ {`${item.price}`}</div>
                               </div>
                               <Divider sx={{marginBottom: "15px"}}/>
                               
                           </div>
                           <div className="row item-form">
                                   <div className="col">
                                   <TextField id="outlined-basic" label="Quantity" variant="outlined" onChange={(e)=> {setQuantity(e.target.value);setTotal(parseInt(e.target.value)*parseInt(item.price))}}/>
                                   </div>
                                   <div className="col">
                                   <FormControl fullWidth style={{margin: "0px"}}>
                                        <InputLabel id="demo-simple-select-label">Select Session</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={session}
                                            label="Select Session"
                                            onChange={(e)=> {setSession(e.target.value)}}
                                        >
                                            {item.sessionlist.map((session, key)=> <MenuItem key={key} value={session}>{session}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                   </div>
                                   <div className="col">
                                   <TextField id="outlined-basic" label="Sub Total" variant="outlined" value={total}/>
                                   </div>
                                   <div className="food-note">Note to the kitchen</div>
                                   <div className="row">
                                       <div className="col">
                                       <FormControl sx={{ m: 1 }} variant="standard">
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
                                       </div>
                                       <div className="col">
                                       <Button sx={{width: "131px", height:"40px", marginBottom:"10px", marginTop:"10px", borderRadius: "10px"}} variant="contained">Add to Cart</Button>
                                       </div>
                                   </div>
                               </div>
                        </Card>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}
export default MenuItems;