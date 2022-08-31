// import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect } from "react";


// function Card (props: { title: unknown; body: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
//   let toggled = false;
  
//   const handleToggleBody = () => {
//     toggled = true;
//     console.log(toggled);
//   };

//   useEffect(() => {
//     console.log(“Component rendered, the value of toggled is:“, toggled);
//   }, [props.title]);

//   return (
//     <section className=“card”>
//       <h3 className=“card__title” onMouseMove={handleToggleBody}>
//         {props.title}
//       </h3>

//       {toggled && <article className=“card__body”>{props.body}</article>}
//     </section>
//   );
// }

// // Renders the application
// function App () {
  
//   const [cardDetails, setCardDetails] = useState({
//     title: “Something”,
//     body: “uniquely done”,
//   });

//   useEffect(() => {
//     setTimeout(() => {
//       setCardDetails({
//         title: “We”,
//         body: “have updated something nice”,
//       });
//     }, 5000); // Force an update after 5s
//   }, []);

//   return (
//     <div>
//       <Card title={cardDetails.title} body={cardDetails.body} />
//     </div>
//   );
// }
const hii = [];
//@ts-ignore
export default App1;