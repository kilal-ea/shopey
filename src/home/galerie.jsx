import { Component } from "react";
import { Link } from "react-router-dom";
import data from "../api.json"

export default class Galerie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 1, 
      t: [],
    };
  }
  handleOptionChange = (event) => {
    this.setState({
      selectedOption: event.target.value,
    });
  }
  render() {
    const sell = this.state.selectedOption
    return (
      <div>
        <div className="max-sm:px-5">
        <div className="flex justify-center mt-5">
          <label className="mr-5 max-sm:mr-2">
            <div className="h-6">
              <input
                type="radio"
                className="hidden"
                name="i"
                value="1"
                onChange={this.handleOptionChange}
              />
              <i class="fa-solid fa-shoe-prints text-blue-900"></i>
            </div>
            <p className="-ml-2 text-sm  text-blue-900">shoes</p>
          </label>

          <label className="mr-5 max-sm:mr-2">
            <div className="h-6">
              <input
                type="radio"
                className="hidden"
                name="i"
                value="2"
                onChange={this.handleOptionChange}
              />
              <i class="fa-solid fa-hat-cowboy text-blue-900"></i>
            </div>
            <p className="text-sm  text-blue-900">hat</p>
          </label>

          <label className="mr-5 max-sm:mr-2">
            <div className="h-6">
              <input
                type="radio"
                className="hidden"
                name="i"
                value="3"
                onChange={this.handleOptionChange}
              />
              <i class="fa-solid fa-shirt text-blue-900"></i>
            </div>
            <p className="text-sm  text-blue-900 ">shirt</p>
          </label>

          <label className="mr-5 max-sm:mr-2">
            <div className="h-6">
              <input
                type="radio"
                className="hidden"
                name="i"
                value="4"
                onChange={this.handleOptionChange}
              />
              <i class="fa-solid fa-person-dress text-blue-900"></i>
            </div>
            <p className="text-sm  text-blue-900 -ml-2">dress</p>
          </label>

          <label className="mr-5 max-sm:mr-2">
            <div className="h-6">
              <input
                type="radio"
                className="hidden"
                name="i"
                value="5"
                onChange={this.handleOptionChange}
              />
              <i class="fa-solid fa-glasses text-blue-900"></i>
            </div>
            <p className="text-sm text-blue-900 -ml-2">glasses</p>
          </label>
        </div>
      </div>
        <div className="grid grid-cols-4 grid-flow-row gap-5 py-14 px-16 max-sm:grid-cols-1 max-lg:grid-cols-2 mb-32">
        {data.filter(function(k){return( k.category.id==sell)}).map((product) => (
          <div key={product.id} className="rounded-xl pb-5">
            <Link to={'/product/'+product.id}>
              <div>
                <img src={product.images} aclassName="rounded-xl shadow-lg" />
              </div>
              <div className="px-2 pb-2 pt-2">
                <h1 className="text-xl mb-2">{product.title}</h1>
                <h1 className="text-xl mb-2">{product.price}DH</h1>
              </div>
            </Link>
          </div>
        ))}
      </div>

      </div>
      
    );
  }
}
