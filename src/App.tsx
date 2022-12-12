import { useEffect, useState } from "react";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { ListItem } from "./components/ListItem";
import { SearchInput } from "./components/Search";
import { apiFetch } from "./config/apiRequest";

import {
  AppContainer,
  ListContainer,
  Loading,
  Wrapper,
} from "./styles/App/styles";

export interface Item {
  id: string;
  content: string;
  done: boolean;
}

export const App = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/items`);
        if (!response.ok) {
          throw Error("Please, reload the application!");
        }
        const data = await response.json();
        setItems(data);
      } catch (err: any) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchData())();
    }, 2000);
  }, []);

  const itemsNumber = items.length;

  const filteredList: Item[] = items.filter((item) => {
    const itemLowerCase = item.content.toLowerCase();
    return itemLowerCase.includes(search.toLowerCase());
  });

  const addItem = async (data: Item) => {
    setItems((state) => {
      return [...state, data];
    });

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const result = await apiFetch(`${API_URL}/item`, postOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const checkItem = async (id: string) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setItems(newItems);

    const checkedItem = newItems.find((item) => item.id === id);

    const patchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: checkedItem?.done }),
    };

    const result = await apiFetch(`${API_URL}/items/${id}`, patchOptions);
    if (result) {
      setFetchError(result);
    }
  };

  const deleteItem = async (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);

    const deleteOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const result = await apiFetch(`${API_URL}/tems/${id}`, deleteOptions);
    if (result) {
      setFetchError(result);
    }
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
        {fetchError && <span>{fetchError}</span>}
        {!fetchError && isLoading ? (
          <Loading>
            <span>Loading...</span>
          </Loading>
        ) : (
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
        )}
      </Wrapper>
      <Footer itemsNumber={itemsNumber} />
    </AppContainer>
  );
};
