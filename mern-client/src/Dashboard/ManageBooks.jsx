import React, { useEffect, useState } from 'react'
import { Table } from "flowbite-react";
import BookCards from '../components/BookCards';
import { Link } from 'react-router-dom';

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState ([])

  useEffect (() => {
fetch("https://backendbook-sable.vercel.app/all-books").then(res => res.json()).then(data => setAllBooks(data))

  }, [])
const handleDelete = (id) =>{
console.log(id);
fetch(`https://backendbook-sable.vercel.app/book/${id}`,{
  method: 'DELETE',
}).then(res => res.json()).then(data =>{ 
alert("Book is Delete successfully!")
// setAllBooks(data);
}) 
}

  return (
    <div className='px-4 my-1'>
      <h1 className='mb-8 text-3xl font-bold'>Manage Your Books</h1>
  
      <Table className='lg:w-[950px]'>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Prices</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
  
        <Table.Body className="divide-y">
          {allBooks.slice(0, 10).map((BookCards, index) => (
            <Table.Row key={BookCards._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index +1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {BookCards.bookTitle}
              </Table.Cell>
              <Table.Cell>
                {BookCards.authorName}
              </Table.Cell>
              <Table.Cell>
                {BookCards.category}
              </Table.Cell>
              <Table.Cell>$10.00</Table.Cell>
              <Table.Cell>
                <Link to={`/admin/Dashboard/edit-books/${BookCards._id}`} 
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                  Edit
                </Link>
                <button onClick={() => handleDelete(BookCards._id)}
                className='bg-red-500 px-4 py-1 font-semibold 
                text-white rounded-sm hover:bg-blue-600'>
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
  
}

export default ManageBooks