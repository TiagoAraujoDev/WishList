import { useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";

import { AppContainer, ListContainer, Wrapper } from "./styles/App/styles";

export interface Item {
  id: string;
  content: string;
  done: boolean;
}

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);

  const itemsNumber = items.length;

  const addItem = (data: Item) => {
    setItems((state) => {
      return [...state, data];
    });
  };

  const checkItem = (id: string) => {
    const newItems = items.map((item) => item.id === id ? {...item, done: !item.done} : item)
    setItems(newItems);
  }

  const deleteItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  return (
    <AppContainer>
      <Header />
      <Wrapper>
        <Input addItem={addItem} />
        <ListContainer>
          {items.map((item) => {
            return <ListItem key={item.id} item={item} checkItem={checkItem} deleteItem={deleteItem} />;
          })}
        </ListContainer>
      </Wrapper>
      <Footer itemsNumber={itemsNumber} />
    </AppContainer>
  );
};
