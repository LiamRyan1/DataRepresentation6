import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

//react componentMovieItem takes props as an argument.
const MovieItem = (props)=>{
    useEffect(
        ()=>{

        },[]
    );
    return(
        <div>
            <Card>
                <Card.Header>{props.myMovie.Title}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">{/*Styling container for text formating movie year and poster*/}
                        <img src ={props.myMovie.Poster} alt={props.myMovie.Title}/>
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}
//component exported for use in seperate parts of the program
export default MovieItem
