import data from "../data.json";

const Card2 = () => {
  return data.map((elem) => (
    <div className="container" key={elem.id}>
      <h1>{elem.title}</h1>
      <h5>{elem.body}</h5>
    </div>
  ));
};
export default Card2;
