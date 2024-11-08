const Content = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      {/*Locale Date*/}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
//When imported to app.js and called via <Content /> function is run and prints hello world and locale time to screen
export default Content;