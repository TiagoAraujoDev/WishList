import { FooterContainer } from "./styles";

interface FooterProps {
  itemsNumber: number;
}
export const Footer = ({ itemsNumber }: FooterProps) => {
  return (
    <FooterContainer>
      <span>{itemsNumber === 1 ? `${itemsNumber} item` : `${itemsNumber} items`}</span>
    </FooterContainer>
  );
};
