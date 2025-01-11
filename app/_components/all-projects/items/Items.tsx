"use client";

import { useState } from "react";

import { ListItemSkeleton, Modal } from "@/app/_ui";
import { Item, Wrapper, ModalContent } from "./components";
import { useData } from "./hooks/useData";
import { ItemProps } from "./model";

export const Items = () => {
  const { loading, result } = useData();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemProps | undefined>();

  const handleModal = () => setModalOpen((prevState) => !prevState);

  const onItem = (item: ItemProps) => {
    setModalOpen(true);
    setSelectedItem(item);
  };

  if (loading) {
    return (
      <Wrapper>
        <ListItemSkeleton length={7} />
      </Wrapper>
    );
  }

  if (!result) {
    return (
      <Wrapper>
        <div className="flex items-center justify-center text-lg font-semibold">
          No results!
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {result.map((item, idx) => (
        <Item key={idx} item={item} onClick={onItem} />
      ))}

      {modalOpen && (
        <Modal
          open={modalOpen}
          onClose={handleModal}
          actionLabel="Confirm"
          title={selectedItem?.name || ""}
        >
          <ModalContent />
        </Modal>
      )}
    </Wrapper>
  );
};
