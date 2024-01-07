import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
    <div className=" lg:flex px-16 py-10   text-center">
      <div className="flex lg:w-1/2 max-lg:justify-center ">
        <img className="w-full rounded-lg " src="images/ii.jpg" alt="Contact" />
      </div>
      <div className="lg:w-1/2 text-center">
        <div className="max-sm:mt-10">
          <h1 className="text-3xl text-center text-blue-950 max-lg:mt-5">Contact us</h1>
        </div>
        <div className="flex  max-sm:p-5  lg:pt-10 ">
          
          <div className='flex  w-full lg:justify-between lg:pl-10 max-lg:mt-6  max-lg:justify-center '>
          <div className=' max-lg:mr-56 max-md:mr-32 max-sm:mr-6 w-full'>
          <div className="text-xl mb-5 max-lg:mr-16  w-full ">
            <h1 className="text-blue-700 font-semibold">Facebook</h1>
            <a
              href="https://m.me/abdrahman.ennya.3"
              className="text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </div>
          <div className="text-xl mb-5 max-lg:mr-16 w-full">
            <h1 className="text-red-800 font-semibold">Gmail</h1>
            <a
              className="text-red-800"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </div>
          </div>
          <div className=' w-full '>
          <div className="text-xl mb-5 max-lg:mr-16 w-full">
            <h1 className="text-green-800 font-semibold">WhatsApp</h1>
            <a
              className="text-green-800"
              href="https://wa.me/qr/EB6K6DTLTZVOJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </div>
          <div className="text-xl  w-full">
            <h1 className="text-pink-800 font-semibold">Instagram</h1>
            <a
              className="text-pink-800"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Message
            </a>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Contact;
