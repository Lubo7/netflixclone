import { connect } from 'react-redux';

const [orders, setOrders] = useState([]);
​
const key = {
    headers: { Authorization: `Bearer ${props.credentials.token}` }
};
​
const userId = props.credentials.user._id;
​
const ShowOrders = async () => {
    let res = await axios.get(`https://reto-api.herokuapp.com/pedido/user/${clienteId}`, key);
    setOrders(res.data);
};
​
return(
    <div className="orders">
        <div className="b_row"><h3>My Orders</h3></div>
        <div className="b_row">{orders.map((order) => (
            <div className="order b_col" key={order._id}>
                <div className="b_row poster"><img alt={order.movie_id} className="orderImg" src={`${order. poster_path}`} />
                </div>
                <div><b>{order.title}</b></div>
                <div><b>Odrer date: </b>{moment(order.order_date).format('MMMM DD YYYY')}</div>
                <div><b>Expiry date: </b>{moment(order.expiry_date).format('MMMM DD YYYY')}</div>
            </div>
        ))}
    </div>
</div>
)