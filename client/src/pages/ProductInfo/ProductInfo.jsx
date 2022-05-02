import { findItemInDbById } from "../../scripts/api";
import { renderItemDetailsPage } from "../../scripts/tools";
import { useState, useEffect } from "react";

const ProductInfo = ({cartItems, setCartItems, selectedItem, setSelectedItem}) => {
  const id = window.location.pathname.replace("/product/", "");

  //Add id dependency into useEffect to prevent infinite looping
  useEffect(() => {
    findItemInDbById(id, setSelectedItem);
  }, [id]);

  let rows = renderItemDetailsPage(selectedItem, cartItems, setCartItems);

  return <main>{rows}</main>;
};

export default ProductInfo;
