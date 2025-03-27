import Age from "./Age";
import Message from "./Message";
const Welcome = ({ name, age }) => {
  return (
    <>
      <p>Welcome, {name}!</p>
      <p>{age > 18 && <Age age={age} />}</p>
      <p>{age != undefined && <Age age={age} />}</p>
      <p>{age > 18 && age < 65 && <Age age={age} />}</p>
      <p>{age > 18 && name === "Jhon" && <Age age={age} />}</p>
      <Message age={age} />
    </>
  );
};

export default Welcome;
