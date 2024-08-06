// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt="No image found" />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }
// we can addd new way
export function CoreConcept({ title, description, image }) {
  return (
    <li>
      <img src={image} alt="No image found" />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
