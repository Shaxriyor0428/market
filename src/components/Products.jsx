import React, { useEffect, useState } from "react";
import axios from "axios";
import Stars from "./Stars";
import Modal from "./Modal";
import ImageView from "./ImageView";

const API_URL = "https://dummyjson.com";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);
      axios
        .get(`${API_URL}/products`)
        .then((res) => {
          setData(res.data.products);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

  const productItems = data?.map((pro) => (
    <div
      className="dark:bg-slate-500 p-3 shadow-lg flex gap-2 flex-col justify-center items-center text-center"
      key={pro.id}
    >
      <img
        onClick={() => setModalData(pro)}
        className="w-full h-60 object-contain"
        src={pro.thumbnail}
        alt=""
      />
      <h3>{pro.title}</h3>
      <div key={pro.rating} className="flex gap-1">
        {<Stars rating={pro.rating} />}
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-full h-full dark:bg-slate-800">
        <div className="container grid grid-cols-4 gap-4 max-lg:grid-cols-3 max-custom-md:grid-cols-2 max-sm:grid-cols-1">
          {productItems}
        </div>
        {modalData && (
          <Modal close={() => setModalData(null)}>
            <ImageView data={modalData} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default Products;
