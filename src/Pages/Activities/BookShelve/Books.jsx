import "./Book.css"
import { useState } from "react";

const Books = ({ data }) => {

    const [error, setError] = useState(true)

    //const filter = data.filter((book) => book.id === 1 && book.genres.includes("adventure"))

    const filter = data

   
    
    if (filter.length === 0) {
        setError(false)
    }

    return (
        <div className="book-card">
            {error ? filter.map(bookArray => (
                <div key={bookArray.id} className="book-data">
                    <div className="info-card">
                        <span className="span-data">{bookArray.title}</span>
                        <span className="span-data">{bookArray.author}</span>
                        <span className="span-data">{bookArray.publicationDate}</span>
                        <span className="span-data">{bookArray.pages}</span>
                        <span className="span-data">{bookArray.hasMovieAdaptation}</span>
                        <br></br>
                    </div>
                </div>
            )) :
                <div className="btn">
                    <span>Não foi possivel carregar a biblioteca...</span>
                    <button>Voltar ao Menu</button>
                </div>}
        </div>
    );
};

export default Books;
