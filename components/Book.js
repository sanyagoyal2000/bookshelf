import  { useState } from "react";  
import axios from 'axios';  
import Button from "@material-tailwind/react/Button";

function Book() {
    const [book, setBook] = useState("");  
    const [result, setResult] = useState([]);  
    const [apiKey, setApiKey] = useState("AIzaSyCqi37mzRrzkBrDZDb0BX9_IarX5iMOT88");
  
    function handleChange(event) {  
        const book = event.target.value;  
        setBook(book);  
    }  
    function handleSubmit(event) {  
        event.preventDefault();  
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=20")  
            .then(data => {  
                console.log(data.data.items);  
                setResult(data.data.items);  
            })  
    }  
    return (  
        <div className="pt-6  max-w-7xl px-8 mx-auto sm:px-16">
        <h2 
    className=" text-3xl font-semibold pb-5 font-pt pt-4 dark:text-white text-blueGray-700 text-center">Search the Book you want to read</h2>
        <form onSubmit={handleSubmit} >  
            <div className="card-header main-search">  
                <div className="row items-center">  
                    <div className="col-12 col-md-3 col-xl-3 text-center">  
                        <input onChange={handleChange} className="AutoFocus form-control" placeholder="Type something..." type="text" />  
                    </div>  
                    <div className="ml-auto mt-4">  
                        <input type="submit" value="Search" className="btn btn-primary search-btn" />  
                    </div>  
                </div>  
            </div>  
            <div className="container">  
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">  
                    {result.map(book => (  
                        <div className="rounded overflow-hidden bg-gray-50 shadow-lg hover:bg-gray-200 group transition-tansform-ease-out">
                        <img className="w-full" src={book.volumeInfo.imageLinks !== undefined ? book.volumeInfo.imageLinks.thumbnail : ''} alt={book.title}/>
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">{book.volumeInfo.title}</div>
                          <p className="text-gray-700 text-base">
                      {book.volumeInfo.description}
                          </p>

                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><i>Author(s): {book.volumeInfo.authors && book.volumeInfo.authors.length > 1 ? book.volumeInfo.authors.join(", ") : book.volumeInfo.authors}</i></p>
                          
                        </div>
                        <Button
            color="lime"
            buttonType="filled"
            size="regular"
            rounded={false}
            block={false}
            iconOnly={false}
            ripple="light"
            className="bg-lime-500 m-auto rounded-md"
            >READ
                </Button>
                        </div> 
                             
                    ))}  
                </div>  
            </div>  
        </form>  </div>
    )}

export default Book
