import React from 'react';

export default function BookList() {
   const pageTitle = "Pretty cool reads!";
   const books = [
      {
         id: 1,
         title: "Dune",
         imageUrl: "https://m.media-amazon.com/images/I/81TmnPZWb0L._SL1500_.jpg",
      },
      {
         id: 2,
         title: "The 48 Laws of Power!",
         imageUrl: "https://m.media-amazon.com/images/I/61TGMFe69UL._SL1500_.jpg",
      },
      {
         id: 3,
         title: "The Odyssey",
         imageUrl: "https://m.media-amazon.com/images/I/81sLEieHw5L._SL1500_.jpg",
      },
   ];

   return (
      <div style={{ display: "flex", justifyContent: "center" }}>
         <div style={{ border: "1px solid black", padding: "4px", width: "50%" }}>
            <h3 style={{ marginTop: 0 }}>{pageTitle}</h3>
            <div style={{ display: "flex", gap: "0" }}>
               {books.map(book => (
                  <div key={book.id} style={{ width: "33.333%", padding: "2px" }}>
                     <img src={book.imageUrl} alt={book.title} style={{ width: "100%", height: "auto", maxWidth: "100px" }} />
                     <p style={{ marginTop: "2px", fontSize: "10px", margin: 0 }}>{book.title}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}