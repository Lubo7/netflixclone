import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const Orders = (props) => {

    useEffect(()=>{

        setTimeout(()=>{        
            ShowOrders();
        },100);
},[]);

    // console.log(props.credentials.token)
    // console.log(props.credentials)

    const [orders, setOrders] = useState([]);
    
    
    const key = {
        headers: { Authorization: `Bearer ${props.credentials.token}` }
    };
    
    const userId = props.credentials.user._id;
    console.log(userId)
    
    // console.log(userId)

    const ShowOrders = async () => {
        let res = await axios.get(`https://reto-api.herokuapp.com/pedido/user/${userId}`, key);
        setOrders(res.data);
        console.log(res.data)
    };
    
    return(
        <div className="orders">
            <div className="b_row"><h3>My Orders</h3></div>
            <div className="b_row">{orders.map((order) => (
                <div className="order b_col" key={order._id}>
                    <div><b>Cliente Id:{order.clienteId}</b></div>
                    <div><b>Pelicula Id:{order.peliculaId}</b></div>
                    <div><b>Odrer date: </b>{order.fechaAlquiler}</div>
                    <div><b>Expiry date: </b>{order.fechaDevolucion}</div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default connect((state)=>({
    credentials: state.credentials
}))(Orders);