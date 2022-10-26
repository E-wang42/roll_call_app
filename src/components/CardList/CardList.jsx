import Card from "../Card/Card";
import "./CardList.css";

// function CardList(props) {
//   return (
//     <div className="cardlist__section">
//       {props.content.map((cat) => {
//         return <Card key={cat.id} cat={cat} />;
//       })}
//     </div>
//   );
// }
const CardList = ({ catsInfo }) => (
  <div className="cardList__section">
    {catsInfo.map((cat) => {
      return <Card key={cat.id} content={cat} />;
    })}
  </div>
);

export default CardList;
