import React, { useState, useEffect } from "react";
import TrackList from "./TrackList";
import { Button } from "../Button";
import "./Album.css";
import { discogs } from "../../api/discogs";
import swal from "sweetalert2"; // для красивых окошек
import { useDispatch, useSelector } from "react-redux";
import {
  addToCollection,
  deleteFromCollection,
  selectCollectionItemFromID,
} from "../../features/collection/collectionSlice";
import {
  addToWishlist,
  deleteFromWishlist,
  selectWishlistItemFromID,
} from "../../features/wishlist/wishlistSlice";

function Album(props) {
  const [title, setTitle] = useState();
  const [artists, setArtists] = useState();
  const [year, setYear] = useState();
  const [tracks, setTracks] = useState([]);
  const [artwork, setArtwork] = useState();

  // диспетчер
  const dispatch = useDispatch(); // редакс-стор взаімодействіе
  const collectionItem = useSelector((state) =>
    selectCollectionItemFromID(state, props.id) // есть лі в коллекціі
  );
  const wishlistItem = useSelector((state) =>
    selectWishlistItemFromID(state, props.id)
  );
  const [resultIsInCollection, setResultIsInCollection] = useState(
    collectionItem !== undefined ? true : false
  );
  const [resultIsInWishlist, setResultIsInWishlist] = useState(
    wishlistItem !== undefined ? true : false
  );

  // получение данных из апишки
  useEffect(() => {
    if (props.id) {
      discogs.fetchRelease(props.id).then((jsonResponse) => {
        setTitle(jsonResponse.title);
        setArtists(
          jsonResponse.artists.map((artist) => artist.name).join(", ")
        );
        setYear(jsonResponse.year);
        setTracks(jsonResponse.tracklist);
        setArtwork(jsonResponse.images[0].resource_url);
      });
    }
  }, [props.id]);

  // обновление состояния
  useEffect(() => {
    setResultIsInCollection(collectionItem !== undefined ? true : false);
  }, [collectionItem]);

  useEffect(() => {
    setResultIsInWishlist(wishlistItem !== undefined ? true : false);
  }, [wishlistItem]);

// добавление/удаление
  const toggleCatalogue = (e) => {
    const type = e.target.id;
    if (type === "collection") {
      if (!resultIsInCollection) {
        dispatch(addToCollection(props.id)).then(
          new swal("Added to Collection!", "", "success")
        );
      } else {
        dispatch(deleteFromCollection(collectionItem)).then(
          new swal("Deleted from Collection!", "", "success")
        );
      }
      setResultIsInCollection(!resultIsInCollection);
    } else if (type === "wishlist") {
      if (!resultIsInWishlist) {
        dispatch(addToWishlist(props.id)).then(
          new swal("Added to Wishlist!", "", "success")
        );
      } else {
        dispatch(deleteFromWishlist(props.id)).then(
          new swal("Deleted from Wishlist!", "", "success")
        );
      }
      setResultIsInWishlist(!resultIsInWishlist);
    }
  };

  return (
    <div className="album">
      <div className="block">
        <img src={artwork} className="album-cover" alt="album cover" />
        <div className="btn--container">
          <Button
            id="collection"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={toggleCatalogue}
          >
            {resultIsInCollection
              ? "Remove from Collection"
              : "Add to Collection"}
          </Button>
          <Button
            id="wishlist"
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={toggleCatalogue}
          >
            {resultIsInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
          </Button>
        </div>
      </div>
      <div className="album-details">
        <h1 className="album-artist">{artists}</h1>
        <h1 className="album-title">{title}</h1>
        <h3 className="album-year">{year}</h3>
        <br />
        <TrackList tracks={tracks} />
      </div>
    </div>
  );
}

export default Album;
