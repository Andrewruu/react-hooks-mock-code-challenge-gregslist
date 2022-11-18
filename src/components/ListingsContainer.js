import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onRemoveListing}) {

  const distplayListing = listings.map((listing) =>( <ListingCard key={listing.id} listing={listing} onRemoveListing={onRemoveListing}/>))



  return (
    <main>
      <ul className="cards">
        {distplayListing}
      </ul>
    </main>
  );
}

export default ListingsContainer;
