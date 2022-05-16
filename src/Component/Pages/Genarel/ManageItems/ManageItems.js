
import useItems from "../../../Hooks/useItems";
import "./ManageItems.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiUpgrade } from "react-icons/gi";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const url = "http://localhost:5000/inventory";
  const [items] = useItems(url);
  return (
    <div className="container">
        <h1 className="header1 text-center my-3">Manage Items</h1>
      <div className="table-container mb-5">
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Supplier</th>
              <th scope="col">Category</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                items.map(item => <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.suppName}</td>
                    <td>{item.category}</td>
                    <td><button title="Delete" className="tAbtn"><RiDeleteBin6Line/></button> <button title="Update" className="tAbtn"><Link to={`/update/${item._id}`}><GiUpgrade/></Link></button></td>
                  </tr>
                  )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
