import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import productData from "../api.json"; 

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Find the product in the local data based on the productId
    const selectedProduct = productData.find((item) => item.id === parseInt(productId));
    setProduct(selectedProduct || {});
  }, [productId]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Enlarged Image"
        className="modal-content flex items-center justify-center h-screen"
      >
        <div className="">
          <div className="flex justify-end">
            <button onClick={closeModal}>
              <i className="fa-solid fa-xmark text-blue-700 text-xl mr-5 mt-10"></i>
            </button>
          </div>
          <div className="flex justify-center ">
            {selectedImage && (
              <img
                className="w-1/2"
                src={selectedImage}
                alt="Enlarged Image"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            )}
          </div>
        </div>
      </Modal>
      <div className="py-16 sm:flex px-10 ">
        <div className="sm:w-1/2 p-5">
          <div className="mb-3">
            <img
              src={product.images && product.images[0]}
              className="rounded-xl shadow-lg cursor-pointer"
              onClick={() => openModal(product.images && product.images[0])}
              alt="Main Product Image"
            />
          </div>
          <div className="flex">
            {product.images &&
              product.images.slice(1).map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  className="rounded-md shadow-lg w-1/3 mr-2 cursor-pointer"
                  alt={`Product Image ${index + 1}`}
                  onClick={() => openModal(imgUrl)}
                />
              ))}
          </div>
        </div>
        <div className="sm:w-1/2 max-sm:px-6 sm:p-10 ml-15">
          <h1 className="text-4xl font-semibold text-blue-950">{product.name}</h1>
          <h1 className="text-2xl mt-5 font-semibold text-blue-950">{product.price} DH</h1>
          <h1 className="text-lg mt-5 mb-10">{product.description}</h1>
          <button className="text-white bg-blue-950 w-1/3 h-12 rounded-xl">Buy</button>
        </div>
      </div>
      <div className="p-5 text-center">
        <h1 className="text-4xl text-blue-900 mb-5">More offers</h1>
      </div>
    </div>
  );
};

export default ProductDetail;
