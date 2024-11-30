import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Stars from "./Stars";
import Modal from "./Modal";
import ImageView from "./ImageView";

const API_URL = "https://dummyjson.com";

const Products = () => {
  const [data, setData] = useState([]); // Mahsulotlar ro'yxati
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null); // Modal ma'lumotlari
  const [categoryList, setCategoryList] = useState([]); // Kategoriyalar ro'yxati
  const searchValue = useRef(null); // Qidiruv input
  const categoryValue = useRef(""); // Kategoriya select

  // Mahsulotlar va kategoriya ro'yxatini olish
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/products`)
      .then((res) => {
        setData(res.data.products); // Mahsulotlar ro'yxatini o'rnatish
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });

    // Kategoriya ro'yxatini olish
    axios
      .get(`${API_URL}/products/category-list`)
      .then((res) => {
        setCategoryList(res.data); // Kategoriyalar ro'yxatini o'rnatish
      })
      .catch((err) => console.log(err));
  }, []);

  // Qidiruv uchun API so'rovini yuborish
  const searchData = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/search?q=${
          searchValue.current.value || ""
        }`
      );
      setData(res.data.products); // Qidiruvdan olingan mahsulotlarni ko'rsatish
    } catch (error) {
      console.error(error);
    }
  };

  // Kategoriya bo'yicha filtrlash
  const getByCategory = async () => {
    try {
      if (categoryValue.current.value === "All") {
        const res = await axios.get(`https://dummyjson.com/products`);
        setData(res.data.products); // Barcha mahsulotlar
      } else {
        const res = await axios.get(
          `https://dummyjson.com/products/category/${categoryValue.current.value}`
        );
        setData(res.data.products); // Tanlangan kategoriya bo'yicha mahsulotlar
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Mahsulotlarni render qilish
  const productItems = data?.map((pro) => (
    <div
      className="dark:bg-slate-500 p-3 shadow-lg flex gap-2 flex-col justify-center items-center text-center"
      key={pro.id}
    >
      <img
        onClick={() => setModalData(pro)} // Modalni ochish
        className="w-full h-60 object-contain"
        src={pro.thumbnail}
        alt={pro.title}
      />
      <h3>{pro.title}</h3>
      <div key={pro.rating} className="flex gap-1">
        <Stars rating={pro.rating} /> {/* Yulduzlar reytingi */}
      </div>
    </div>
  ));

  return (
    <>
      <section className="bg-gray-200 top-0 left-0 w-full dark:bg-slate-800">
        <div className="py-8 container flex items-center justify-between">
          <input
            ref={searchValue}
            onChange={searchData}
            type="text"
            placeholder="Search"
            className="w-[450px] py-3 px-6 rounded-lg border border-gray-400 outline-none max-md:w-[250px] max-custom-search:w-[200px] max-custome-search-sm:w-[150px]"
          />
          <select
            ref={categoryValue}
            onChange={getByCategory}
            className="w-[300px] py-3 px-6 rounded-lg border border-gray-400 outline-none max-md:w-[250px] max-custom-search:w-[200px] max-custome-search-sm:w-[150px]"
          >
            <option hidden>Select category</option>
            <option value="All">All Products</option>
            {categoryList?.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </section>

      <div className="w-full h-full dark:bg-slate-800">
        <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
