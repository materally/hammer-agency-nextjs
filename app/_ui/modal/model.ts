import { ReactNode } from "react";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  actionLabel: string;
  title: string;
  children: ReactNode;
  action?: () => void;
}
