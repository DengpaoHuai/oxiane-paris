const toto = "toto";

interface User {
  name: string;
  age: number;
}

const user: Required<User> = {
  name: "John",
  age: 20,
};
