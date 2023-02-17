import { useDisclosure } from "@chakra-ui/react";

function Produits() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <button onClick={onOpen}>Open</button>
      <button onClick={onClose}>Close</button>
      {isOpen && <div>Content goes here</div>}
    </div>
  );
}

export default Produits;