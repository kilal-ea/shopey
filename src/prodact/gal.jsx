import { Component } from "react";
import { Link } from "react-router-dom";
import { getSeaState } from "../seaState";
import data from "../api.json"

export default class Pg extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {

    const seaState = getSeaState();

    return (
      <div className="grid grid-cols-4 grid-flow-row gap-5 py-14 px-16 max-sm:grid-cols-1 max-lg:grid-cols-2 mb-32">
        {data
          .filter(
            (product) =>
              (product.price >= seaState.min &&
              product.price <= seaState.max) ||
              product.title === seaState.title
          )
          .map((product) => (
            <div key={product.id} className="rounded-xl pb-5">
              <Link to={"/product/" + product.id}>
                <div>
                  <img src={product.images} alt="Product" className="rounded-xl shadow-lg" />
                </div>
                <div className="px-2 pb-2 pt-2">
                  <h1 className="text-xl mb-2">{product.title}</h1>
                  <h1 className="text-xl mb-2">{product.price} DH</h1>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}
