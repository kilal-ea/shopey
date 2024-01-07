
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { setSeaState, getSeaState } from "../seaState";

class Sea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      min: "",
      max: "",
    };
  }

  handleInputChange = (event, fieldName) => {
    this.setState({ [fieldName]: event.target.value });
  };

  handleSearch = () => {
    const { title, min, max } = this.state;
    setSeaState({ title, min, max });
    // Perform any other actions with the input values, such as searching
    console.log("Title:", title);
    console.log("Min:", min);
    console.log("Max:", max);
  };

  render() {
    return (
      <div className="max-md:ml-0 flex justify-center lg:mt-24 max-sm:mt-20 ">
        <div className="text-blue-500 bg-blue-950 py-8 px-5 rounded-3xl shadow-xl w-3/4 md:flex">
          <div className="w-full max-md:w-full max-lg:w-1/3 mr-3 max-md:mb-3">
            <input
              className="p-2 rounded-lg bg-white w-full"
              type="text"
              placeholder="title"
              value={this.state.title}
              onChange={(e) => this.handleInputChange(e, "title")}
            />
            
          </div>

          <div className="w-1/4 mr-3 max-md:mb-3 max-md:w-full max-lg:w-1/3">
            <input
              className="p-2 rounded-lg bg-white w-full"
              type="text"
              placeholder="min"
              value={this.state.min}
              onChange={(e) => this.handleInputChange(e, "min")}
            />
            <i
              style={{ marginLeft: "-35px" }}
              className="fa-solid fa-circle-dollar-to-slot pt-3 text-blue-500"
            ></i>
          </div>

          <div className="w-1/4 mr-3 max-md:mb-3 max-md:w-full max-lg:w-1/3">
            <input
              className="p-2 rounded-lg bg-white w-full"
              type="text"
              placeholder="max"
              value={this.state.max}
              onChange={(e) => this.handleInputChange(e, "max")}
            />
            <i
              style={{ marginLeft: "-35px" }}
              className="fa-solid fa-circle-dollar-to-slot pt-3 text-blue-500"
            ></i>
          </div>

          <Link
            to="/product"
            className="bg-white text-center max-md:w-full w-1/4 max-lg:w-1/4 max-lg:px-1 max-lg:text-sm py-2 hover:bg-blue-100 hover:text-blue-500 rounded-lg text-blue-500"
          >
            <button onClick={this.handleSearch}>
              Search &nbsp;&nbsp;&nbsp;
              <i className="fa-solid text-blue-500 fa-magnifying-glass fa-flip-horizontal"></i>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Sea;
