const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  return <p className={className}>{boxText}</p>;
};

const element = (
  //  Write your code here.
  <div className="background-container">
    <h1>Boxes</h1>
    <div className="boxes-list-container">

   
    <Box className="box1" boxText="Small" />
    <Box className="box2" boxText="Medium" />
    <Box className="box3" boxText="Large" />
  </div>
   </div>
);

ReactDOM.render(element, document.getElementById("root"));
