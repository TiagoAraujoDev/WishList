import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Wrapper } from "./styles/App/styles";

export const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <form action="">
          <Input />
        </form>
      </Wrapper>
    </>
  );
};
