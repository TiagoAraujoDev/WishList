import { useEffect, useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";
import { SearchInput } from "./components/Search";

import { AppContainer, ListContainer, Wrapper } from "./styles/App/styles";

export interface Item {
  id: string;
  content: string;
  done: boolean;
}

export const App = () => {
  const [items, setItems] = useState<Item[]>(() => {
    const storageItems = localStorage.getItem("@wish-list:List");
    if (storageItems) {
      const storageItemsParsed = JSON.parse(storageItems);
      return storageItemsParsed;
    }
    return [];
  });
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    saveInLocalStorage();
  }, [items])

  const itemsNumber = items.length;

  const filteredList: Item[] = items.filter((item) => {
    const itemLowerCase = item.content.toLowerCase();
    return itemLowerCase.includes(search.toLowerCase());
  });

  const saveInLocalStorage = () => {
    const itemsToString = JSON.stringify(items);
    localStorage.setItem("@wish-list:List", itemsToString);
  };

  const addItem = (data: Item) => {
    setItems((state) => {
      return [...state, data];
    });
  };

  const checkItem = (id: string) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setItems(newItems);
  };

  const deleteItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const filterList = (data: string) => {
    setSearch(data);
  };

  return (
    <AppContainer>
      <Header />
      <Wrapper>
        <Input addItem={addItem} />
        <SearchInput filterList={filterList} />
        <ListContainer>
          {filteredList.map((item) => {
            return (
              <ListItem
                key={item.id}
                item={item}
                checkItem={checkItem}
                deleteItem={deleteItem}
              />
            );
          })}
        </ListContainer>
      </Wrapper>
      <Footer itemsNumber={itemsNumber} />
    </AppContainer>
  );
};
