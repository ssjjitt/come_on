import React from "react";
import "../../App.css";
import Banner from "../LandingSection";
import Cards from "../cards/Cards";
import { useSelector } from "react-redux";
import { selectCollection } from "../../features/collection/collectionSlice";
import { selectWishlist } from "../../features/wishlist/wishlistSlice";
import Poster from "../poster/Poster";
import PosterTwo from "../poster/PosterTwo";
import CollectionName from "../../features/collection/CollectionName";
import WishName from "../../features/wishlist/WishName";

function Home() {
  const collection = useSelector(selectCollection);
  const wishlist = useSelector(selectWishlist);

  return (
    <>
      <Banner />
      <Poster/>
      <PosterTwo/>
      <CollectionName/>
      <Cards items={collection} label="Collection" />
      <WishName/>
      <Cards items={wishlist} label="Wishlist" />
    </>
  );
}

export default Home;
