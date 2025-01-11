import { ItemStatus, Master } from "./model";

const dataItem = [
  {
    id: "2409XC2K8",
    name: "Project name 00",
    percentage: 0,
    download: "https://www.google.com",
    moreInfo: "https://www.google.com",
    status: ItemStatus.NEW_PROJECT,
  },
  {
    id: "2409XC2K8",
    name: "Project name 0",
    percentage: 0,
    download: "https://www.google.com",
    moreInfo: "https://www.google.com",
    status: ItemStatus.IN_PROGRESS,
  },
  {
    id: "2409XC2K8",
    name: "Project name 1",
    percentage: 10,
    moreInfo: "https://www.google.com",
    status: ItemStatus.IN_PROGRESS,
  },
  {
    id: "2409XC2K8",
    name: "Project name x",
    percentage: 50,
    download: "https://www.google.com",
    moreInfo: "https://www.google.com",
    status: ItemStatus.IN_PROGRESS,
  },
  {
    id: "2409XC2K8",
    name: "Project name 2",
    percentage: 100,
    moreInfo: "https://www.google.com",
    status: ItemStatus.FINISHED,
  },
  {
    id: "2409XC2K8",
    name: "Project name 3",
    percentage: 100,
    download: "https://www.google.com",
    moreInfo: "https://www.google.com",
    status: ItemStatus.FINISHED,
  },
  {
    id: "2409XC2K8",
    name: "Project name 4",
    percentage: 100,
    moreInfo: "https://www.google.com",
    status: ItemStatus.FINISHED,
  },
];

export const data = Array(5).fill(dataItem).flat();

export const masters: Array<Master> = [
  {
    id: "433278",
    name: "John Doe",
    picture: "/profile/profile-1.webp",
  },
  {
    id: "2348712763",
    name: "Jane Doe",
    picture: "/profile/profile-2.webp",
  },
  {
    id: "8327643",
    name: "John Smith",
    picture: "/profile/profile-3.webp",
  },
];
