import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState ([]);

    useEffect(() => {
    fetch("https://backendbook-sable.vercel.app/all-books").then(res => res.json()).then(data => 
    setBooks(data.slice(0.8)))
    }, [])
  return (
    <div>
      <BookCards books={books} headline="Best Seller Book"/>
    </div>
  )
}

export default BestSellerBooks