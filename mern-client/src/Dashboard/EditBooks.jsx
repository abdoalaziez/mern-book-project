import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams()
  const {bookTitle,authorName,imageUrl ,category,bookDescription,bookPdfUrl} = useLoaderData()
    
    const booCategories =[
     "Fiction",
     "Non-Fiction",
     "Mistery",
     "Programming",
     "Science Fiction",
     "Fantasy",
     "Horror",
     "Bibliography",
     "Autobiography",
     "History",
     "Self-help",
     "Memoir",
     "Business",
    "Children Book",
    "Travel",
    "Religion",
    "Art and Dosing"
    ]
    
    const [selectedBookCategory, setSelectedBookCategory] = useState(booCategories[0]);
    
    const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
    }
    const  handleUpdate  = (event)=>{
      event.preventDefault();
    const from = event.target;
    
    
    const bookTitle = from.bookTitle.value;
    const authorName = from.authorName.value;
    const imageUrl = from.imageUrl.value;
    const category = from.CategoryName.value;
    const bookDescription = from.bookDescription.value; 
    const bookPdfUrl = from.bookPdfUrl.value;
    
    
    const updateBookObj = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl
    }
    // console.log(bookObj);
    fetch(`https://mern-book-hi8w.onrender.com/update-book/${id}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateBookObj)
    })
    .then(res => res.json()).then(data =>{
      // console.log(data);?
      alert("Book is Update  successfully!!!");
      })
    }
      return (
        <div className='px-4 my-12'>
      <h1 className='mb-8 text-3xl font-bold'>Update  the  Book Data</h1>
    
      <form onSubmit={handleUpdate} className="flex flex-col gap-6 lg:w-[800px]">
        <div className='flex gap-8'>
    
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput 
              id="bookTitle" 
              name="bookTitle"
              type="text" 
              placeholder="Enter book title" 
              required 
              defaultValue={bookTitle}
            />
          </div>
    
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput 
              id="authorName" 
              name="authorName"
              type="text" 
              placeholder="Enter author name" 
              required 
              defaultValue={authorName}
            />
          </div>
        </div>
    
        <div className='flex gap-8'>
    
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book  imageUrl" />
            </div>
            <TextInput 
              id="imageUrl" 
              name="imageUrl"
              type="text" 
              placeholder="Book image URL" 
              required 
              defaultValue={imageUrl}
            />
          </div>
          <div className='lg:w-1/2'>
          <div className="mb-2 block">
              <Label htmlFor="input State" value="Book  Category" />
            </div>
            <Select id='inputState' name='CategoryName' className='w-full rounded ' 
            value={selectedBookCategory}
            onChange={handleChangeSelectedValue}>
            {
             booCategories.map((option)=> <option key={option} value={option}>{option}</option>)
            }
            </Select>
          </div>
        </div>
        <div>
            <div className="mb-2 block">
              <Label htmlFor="bookDescription" 
              value="Book Description" />
            </div>
            <Textarea 
           id="bookDescription" 
            name='bookDescription'
            placeholder="Wirte Your Book Description..." 
            required rows={5} 
             defaultValue={bookDescription}
            className='w-full'
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label 
              htmlFor="bookPdfUrl" 
              value="Book Pdf Url" />
            </div>
            <TextInput 
            id="bookPdfUrl" 
            name='bookPdfUrl'
            type="text" 
            defaultValue={bookPdfUrl}
            placeholder="book Pdf Url" 
            required shadow />
          </div>
          <Button type="submit" className='mt-5'>
            Update Book
            </Button>
      </form>
    </div>
    
      )
}

export default EditBooks