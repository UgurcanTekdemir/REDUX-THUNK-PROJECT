import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/actions/productAction";
import { getRestaurants } from "../redux/actions/restaurantAction";

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((store) => store.products);
  const restaurantState = useSelector((store) => store.restaurants);
  console.log(restaurantState);

  useEffect(() => {
    dispatch(getProducts(id));
    dispatch(getRestaurants(id));
  }, [dispatch, id]); // Bağımlılık dizisine dispatch ve id eklendi

  return <div>Restaurant</div>;
};

export default Restaurant;
