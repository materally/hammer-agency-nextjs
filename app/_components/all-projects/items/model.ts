export enum ItemStatus {
  NEW_PROJECT = "New project",
  IN_PROGRESS = "In progress",
  FINISHED = "Finished",
}

export interface ItemProps {
  id: string;
  name: string;
  percentage: number;
  download?: string;
  moreInfo: string; // TODO ???
  status: ItemStatus;
}

export interface Master {
  id: string;
  name: string;
  picture: string;
}
