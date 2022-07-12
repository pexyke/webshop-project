import { React, useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Edit,
  Inject,
  Search,
  Toolbar,
} from "@syncfusion/ej2-react-grids";

import { contextMenuItems, productsGrid } from "../data/dummy";
import { Header } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import http from "axios";

const Products = () => {
  const [products, setProducts] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const response = await http.get("http://localhost:1000/api/products");
      if (response) {
        setProducts(response.data);
      }
    };

    getProducts();
  }, []);

  const template = (props) => {
    return (
      <Link
        to={`/edit-product/${props.id}`}
        className="flex justify-center"
        title="Edit"
      >
        {" "}
        <MdOutlineEdit />{" "}
      </Link>
    );
  };


  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Products" />

      <button
        className="text-l p-3 hover:drop-shadow-xl hover:bg-light-gray text-white hover:drop-shadow-xl mb-5"
        onClick={() => navigate("/edit-product/new")}
        style={{ backgroundColor: "blue", borderRadius: "10px" }}
      >
        New Item
      </button>
      <GridComponent
        id="gridcomp"
        dataSource={products}
        allowPaging
        allowSorting
        contextMenuItems={contextMenuItems}
        toolbar={["Search"]}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {productsGrid.map((item, index) => {
            if (item.field === "action") {
              return (
                <ColumnDirective key={index} {...item} template={template} />
              );
            } else {
              return <ColumnDirective key={index} {...item} />;
            }
          })}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Filter, Page, Search, Toolbar]}
        />
      </GridComponent>
    </div>
  );
};
export default Products;
