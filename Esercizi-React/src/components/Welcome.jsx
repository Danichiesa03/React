import Age from "./Age";

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age} />
    </div>
  );
};

export default Welcome;
