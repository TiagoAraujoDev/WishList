interface FooterProps {
  itemsNumber: number;
}
export const Footer = ({ itemsNumber }: FooterProps) => {
  return (
    <footer>
      <span>{itemsNumber === 1 ? `${itemsNumber} item` : `${itemsNumber} items`}</span>
    </footer>
  );
};
