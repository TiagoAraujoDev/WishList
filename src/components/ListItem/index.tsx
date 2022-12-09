import { FaTrashAlt } from "react-icons/fa";

import { Item } from "../../App";

import { ListItemContainer } from "./styles";

interface ItemInfoType {
  item: Item;
  checkItem: (id: string) => void;
  deleteItem: (id: string) => void;
}

export const ListItem = ({ item, checkItem, deleteItem }: ItemInfoType) => {
  const handleChecked = () => {
    checkItem(item.id);
  }

  const handleDelete = () => {
    deleteItem(item.id);
  }

  return (
    <ListItemContainer checked={item.done}>
      <input id={item.id} type="checkbox" checked={item.done} onChange={handleChecked} />
      <label htmlFor={item.id}>
        {item.content}
      </label>
      <FaTrashAlt onClick={handleDelete} />
    </ListItemContainer>
  );
};
