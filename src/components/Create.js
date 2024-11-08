import { useState } from "react";

function Create() {
  // intialise state vars using useState
  const [title, setTitle] = useState('');
  const [year,setYear] = useState('');
  const [poster,setPoster] = useState('');
  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();//prevent default form behavoir
    console.log(title);
    console.log(year);
    console.log(poster);
  }

  return (
    <div>
      <h2>This is my Create Component.</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Add Movie Title: </label>
          <input type="text"
            className="form-control"
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}//update title state on change
          />
          <label>Add Movie release Year: </label>
          <input type="text"
            className="form-control"
            value={year}
            onChange={(e) => { setYear(e.target.value) }}//update year state on change
          />
           <label>Add Movie Poster Url: </label>
          <input type="text"
            className="form-control"
            value={poster}
            onChange={(e) => { setPoster(e.target.value) }}//update poster state on change
          />
        </div>
        <input type="submit" value="Add Movie" />{/* Button to submit the form */}
      </form>
    </div>
  );
}
export default Create;
