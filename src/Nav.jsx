import React, { Component } from "react";
import { Link } from "react-router-dom";

var ul = [];

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      s: "",
      d: "",
      ss1: "",
      ss2: "",
      b: "",
      c: "",
      logo: <i className="fa-solid fa-bars bg-blue-800 hover:bg-blue-900 "></i>,
      ves: "",
      vps: "",
      vpi: null,
      ve: "",
      vp: "",
      nom:"",
      n0:"",
      img: null, 
      msg: '',
      bu: (
        <div>
          <button
            onClick={this.singup}
            className=" max-md:hidden w-24 h-9 ml-3 mt-3 text-white border-r-2 border-sky-600 mr-1  "
          >
            Sign up
          </button>
          <button
            onClick={this.singin}
            className=" max-md:hidden w-20 h-9  mt-3 text-white "
          >
            Sign in
          </button>
        </div>
      ),
    };
  }

  l = () => {
    ul.push([this.state.vus, this.state.ves, this.state.vps]);

    this.setState({
      vsu: "",
      ves: "",
      vps: "",
      s:"",
      ss1:"",
    });
  };

  dropmune = () => {
    if (this.state.c === "") {
      this.setState({
        b: (
          <nav className=" h-auto absolute -z-20 bg-blue-950 w-full pb-5 rounded-b-2xl">
            <ul className="mt-5">
              <Link to="/">
                <li className="text-white hover:bg-blue-800 hover:text-white h-14 pt-3 text-bold text-xl mb-3 pl-5">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="text-white hover:bg-blue-800 hover:text-white h-14 pt-3 text-bold text-xl mb-3 pl-5">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="text-white hover:bg-blue-800 hover:text-white h-14 pt-3 text-bold text-xl mb-3 pl-5">
                  Contact
                </li>
              </Link>
            </ul>
            <div className=" px-4">
              <button
                onClick={this.singup}
                className="  bg-blue-950  border-white border-2 rounded-xl w-full h-9 ml-auto mt-3 text-white hover:bg-blue-800 hover:text-white  "
              >
                Sign up
              </button>
              <button
                onClick={this.singin}
                className="  bg-blue-950  border-white border-2 rounded-xl w-full h-9 ml-auto mt-3 text-white hover:bg-blue-800 hover:text-white "
              >
                Sign in
              </button>
            </div>
          </nav>
        ),
        c: 1,
        logo: <i className="fa-solid fa-xmark text-blue-700 text-lg"></i>,
      });
    } else {
      this.setState({
        b: "",
        c: "",
        logo: <i className="fa-solid fa-bars text-blue-700"></i>,
      });
    }
  };

  singup = () => {
    if (this.state.ss1 === "") {
      this.setState({
        s: (
          <div className=" flex justify-center z-10   bg-slate-900/20 h-screen w-full ">
            <div className=" bg-slate-50 max-md:w-96 h-2/3 w-1/2 rounded-xl mt-24 ">
              <div className=" flex justify-end">
                <button
                  onClick={this.vsu}
                  className=" px-4 py-2 absolute rounded-full m-3 "
                >
                  <i className="fa-solid fa-xmark  text-blue-950 text-xl "></i>
                </button>
              </div>
              <div className="">
                <div className=" text-center text-3xl text-blue-950 mt-5 ">
                  <h1>Sign up</h1>
                </div>
                <div className="max-md:py-5 max-md:px-10  py-10 px-16">
                  <div>
                  <div className="mb-4">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="email"
                      >
                        User name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="p-2 rounded-lg bg-white w-full shadow-2xl"
                        placeholder="Enter your email"
                        onChange={(e) =>
                          this.setState({ nom: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="p-2 rounded-lg bg-white w-full shadow-2xl"
                        placeholder="Enter your email"
                        onChange={(e) =>
                          this.setState({ ves: e.target.value })
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="p-2 rounded-lg bg-white w-full shadow-2xl"
                        placeholder="Enter your password"
                        onChange={(e) =>
                          this.setState({ vps: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="password"
                      >
                        Add Image
                      </label>
                      <input
                        type="file"
                        id="image"
                        className="p-2 rounded-lg bg-white w-full shadow-2xl"
                        placeholder="Choose Image"
                        onChange={(e) =>
                          this.setState({ vpi: e.target.files[0] })
                        }
                      />
                    </div>
                    <button
                      onClick={this.l}
                      className="bg-blue-900 border  border-blue-950 text-center w-full py-2 hover:bg-blue-800 hover:text-blue-100 rounded-lg text-blue-50"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        ss1: 1,
      });
    }
  };

  vsu = () => {
    if (this.state.ss1 === 1) {
      this.setState({
        s: "",
        ss1: "",
      });
    }
  };

  e = () => {
    const foundUser = ul.find(
      (user) => user[1] === this.state.ve && user[2] === this.state.vp
    );
    if (foundUser) {
      
      this.setState({
        bu: "",
        d: "",
        n0: this.state.nom,
      });
    } else {
        console.log(this.state.msg);
      this.setState({
        d: (
          <div className="flex justify-center  bg-slate-900/20 h-screen w-full">
            <div className="bg-slate-100 max-md:w-96  h-2/3 w-1/2 rounded-xl mt-24">
              <div className=" flex justify-end">
                <button
                  onClick={this.vsi}
                  className="px-4 py-2 absolute rounded-full m-3"
                >
                  <i className="fa-solid fa-xmark  text-blue-950 text-xl "></i>
                </button>
              </div>
              <div className="py-10">
                <div className="text-center text-3xl text-blue-950 mt-5">
                  <h1>Sign In</h1>
                </div>
                <div className="py-32  px-16">
                  <div>
                    <div className="mb-4  ">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="p-2 rounded-lg bg-white w-full shadow-2xl "
                        placeholder="Enter your email"
                        onChange={(e) => {
                          this.setState({ ve: e.target.value });
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="p-2 rounded-lg bg-white w-full  shadow-2xl"
                        placeholder="Enter your password"
                        onChange={(e) => {
                          this.setState({ vp: e.target.value });
                        }}
                      />
                    </div>

                    <button
                      onClick={this.e}
                      className="bg-blue-900 border  border-blue-950 text-center w-full py-2 hover:bg-blue-800 hover:text-blue-100 rounded-lg text-blue-50"
                    >
                      Sign In
                    </button>
                    <div className="">
                      <h1 className="text-red-800">Email or password is incorrect</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      });
    }
  };

  singin = () => {
    if (this.state.ss2 === "") {
      this.setState({
        d: (
          <div className="flex justify-center  bg-slate-900/20 h-screen w-full">
            <div className="bg-slate-100 max-md:w-96  h-2/3 w-1/2 rounded-xl mt-24">
              <div className=" flex justify-end">
                <button
                  onClick={this.vsi}
                  className="px-4 py-2 absolute rounded-full m-3"
                >
                  <i className="fa-solid fa-xmark  text-blue-950 text-xl "></i>
                </button>
              </div>
              <div className="py-10">
                <div className="text-center text-3xl text-blue-950 mt-5">
                  <h1>Sign In</h1>
                </div>
                <div className="py-32  px-16">
                  <div>
                    <div className="mb-4  ">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="p-2 rounded-lg bg-white w-full shadow-2xl "
                        placeholder="Enter your email"
                        onChange={(e) => {
                          this.setState({ ve: e.target.value });
                        }}
                      />
                    </div>

                    <div className="mb-4">
                      <label
                        className="block text-blue-950 text-sm font-semibold mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className="p-2 rounded-lg bg-white w-full  shadow-2xl"
                        placeholder="Enter your password"
                        onChange={(e) => {
                          this.setState({ vp: e.target.value });
                        }}
                      />
                    </div>

                    <button
                      onClick={this.e}
                      className="bg-blue-900 border  border-blue-950 text-center w-full py-2 hover:bg-blue-800 hover:text-blue-100 rounded-lg text-blue-50"
                    >
                      Sign In
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
        ss2: 1,
      });
    }
  };

  vsi = () => {
    if (this.state.ss2 === 1) {
      this.setState({
        d: "",
        ss2: "",
      });
    }
  };

  render() {
    return (
      <div className=" w-full">
        <div className="mb-16 "></div>
        <div className=" fixed w-screen  top-0 z-20 ">
          <nav className="flex justify-between  px-5 h-16 bg-blue-950 max-md:p-4 ">
          <div className="flex w-1/2">
          <Link to="/">
            <div className="text-white">
                <h1 className="text-bold text-2xl  md:mt-4">shopey</h1>
            </div>
          </Link>
              
              <div className="max-md:hidden text-white">
                <ul className="flex">
                  <li className="my-5 ml-10   border-r-2 border-white w-24 p-1">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="my-5 ml-10 border-r-2 border-white w-24 p-1 ">
                    <Link to="/procucts">Procucts</Link>
                  </li>
                  <li className="my-5 ml-10   w-24 p-1">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2 ">
              <div className="flex justify-end ">
                <div className="text-white mt-5 font-semibold text-lg mr-5">
                  {this.state.n0}
                </div>
                <Link
                  className="max-md:mr-4 w-10 h-10 text-center bg-sky-600 rounded-full md:mt-3"
                >
                  {this.state.img ? (
                    this.state.img
                  ) : (
                    <i className="fa-solid fa-user pt-1 text-2xl text-blue-900"></i>
                  )}
                </Link>
                {this.state.bu}
              </div>
            </div>
            <div>
              <button
                className="md:hidden  border w-10 h-10 rounded-xl shadow-md bg-blue-950 hover:bg-blue-800  "
                onClick={this.dropmune}
              >
                {this.state.logo}
              </button>
            </div>
          </nav>
          <div className="md:hidden z-20 ">{this.state.b}</div>
          <div>{this.state.s}{this.state.d}</div>
        </div>
      </div>
    );
  }
}