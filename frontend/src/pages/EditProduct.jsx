import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components";
import http from "axios";

const EditProduct = () => {
  let params = useParams();
  const navigate = useNavigate();

  const [productsLength, setProductsLength] = useState(null);
  const [isNew, setIsNew] = useState(false);

  const [newItem, setNewItem] = useState({
    id: productsLength + 1,
    name: "",
    category: "",
    image: "",
    price: 0,
    countInstock: 0,
    rating: 5,
    numReviews: 10,
    description: "",
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setNewItem({ ...newItem, image: base64 });
  };

  const changeHandler = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };
  //új feltöltés
  const url = "http://localhost:1000/api/products/new";
  const postProduct = (product) => http.post(url, product);

  const createPost = async (product) => {
    try {
      await postProduct(product);
      setNewItem({
        id: 0,
        name: "",
        category: "",
        image: "",
        price: 0,
        countInstock: 0,
        rating: 5,
        numReviews: 10,
        description: "",
      });
      alert("Sikeres feltöltés");
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    isNew ? createPost(newItem) : createEditedPost(newItem)
  };

  //meglévő módosítás
  
  const postEditedProduct = (product) => http.post(`http://localhost:1000/api/products/${params.id}`, product);

  const createEditedPost = async (product) => {
    try {
      await postEditedProduct(product);
      setNewItem({
        id: 0,
        name: "",
        category: "",
        image: "",
        price: 0,
        countInstock: 0,
        rating: 5,
        numReviews: 10,
        description: "",
      });
      alert("Sikeres módosítás");
      navigate("/products");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (params.id === "new") {
      setIsNew(true);   
    } 

    const getProducts = async () => {
      const response = await http.get("http://localhost:1000/api/products");
      if (response) {
        setProductsLength(response.data.length);
        setNewItem({ ...newItem, id: productsLength + 1 });
      }
    };

 

    const getProduct = async () => {
      const response = await http.get(
        `http://localhost:1000/api/products/id/${params.id}`
      );
      if (response) {
        setNewItem({
          id: response.data[0].id,
          name: response.data[0].name,
          category: response.data[0].category,
          image: response.data[0].image,
          price: response.data[0].price,
          countInstock: response.data[0].countInstock,
          rating: response.data[0].rating,
          numReviews: response.data[0].numReviews,
          description: response.data[0].description,
        });
      }
    };
    !isNew ? getProduct() : getProducts()

  }, [params, productsLength, isNew]);

 

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header
        category="App"
        title={isNew ? "Add new product" : "Edit product"}
      />
      {newItem && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="product-id"
                >
                  Termék ID
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="product-id"
                  disabled
                  type="text"
                  value={isNew ? productsLength + 1 : newItem.id}
                  placeholder="item name"
                  name="id"
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="name"
                >
                  Termék neve
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="name"
                  type="text"
                  placeholder="Termék rövid megnevezése"
                  onChange={changeHandler}
                  name="name"
                  value={isNew ? "" : newItem.name}
                  required
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="category"
                >
                  Kategória
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="category"
                  type="text"
                  placeholder="Termék kategóriája"
                  value={isNew ? "" : newItem.category}
                  name="category"
                  required
                  onChange={changeHandler}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="price"
                >
                  Ár
                </label>
              </div>
              <div className="md:w-2/3 relative">
                <div className="absolute inset-y-0 right-10 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">Forint</span>
                </div>
                <input
                  type="number"
                  name="price"
                  value={isNew ? "" : newItem.price}
                  required
                  placeholder="0.00"
                  id="price"
                  onChange={changeHandler}
                  className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor="countInstock"
                >
                  Készlet
                </label>
              </div>
              <div className="md:w-2/3 relative">
                <div className="absolute inset-y-0 right-10 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">Darab</span>
                </div>
                <input
                  type="number"
                  name="countInstock"
                  value={isNew ? "" : newItem.countInstock}
                  required
                  placeholder="0"
                  id="countInstock"
                  onChange={changeHandler}
                  className="bg-gray-50 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                />
              </div>
            </div>

            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Termék leírása
            </label>
            <textarea
              id="description"
              name="description"
              value={isNew ? "" : newItem.description}
              required
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Termék leírása..."
              onChange={changeHandler}
            ></textarea>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="file_input"
            >
              Kép feltöltés
            </label>
            <input
              className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              // value={isNew ? "" : newItem.image}
              onChange={(e) => handleFileUpload(e)}
              required={isNew ? "true" : "false"}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help"
            >
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
            <button
              className="text-l p-3 hover:drop-shadow-xl hover:bg-light-gray text-white hover:drop-shadow-xl mb-5"
              style={{ backgroundColor: "blue", borderRadius: "10px" }}
              type="submit"
            >
              Mentés
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditProduct;
