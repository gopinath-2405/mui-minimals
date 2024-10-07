export interface TableData{
  id: number;
  item: string;
  name: string;
  status: string;
  assignee: string;
}

const tabledata: TableData[] = [
  {
    id: 1,
    item: "Shirt",
    name: 'Gopinath',
    status: 'INITIAL',
    assignee: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp'
  },
  {
    id: 2,
    item: "T-Shirt",
    name: 'Vasanth',
    status: 'PENDING',
    assignee: 'https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp'
  },
  {
    id: 3,
    item: "Trouser",
    name: 'Tamil Selvan',
    status: 'COMPLETED',
    assignee: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-12.webp'
  },
  {
    id: 4,
    item: "Collar Shirt",
    name: 'Gopinath',
    status: 'PENDING',
    assignee: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp'
  },
  {
    id: 5,
    item: "Track Pant",
    name: 'Vasanth',
    status: 'COMPLETED',
    assignee: 'https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp'
  },
  {
    id: 6,
    item: "T-Shirt",
    name: 'Tamil Selvan',
    status: 'INITIAL',
    assignee: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-12.webp'
  },
  {
    id: 7,
    item: "Pants",
    name: 'Gopinath',
    status: 'COMPLETED',
    assignee: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp'
  },
  {
    id: 8,
    item: "Trouser",
    name: 'Vasanth',
    status: 'INITIAL',
    assignee: 'https://api-prod-minimal-v610.pages.dev/assets/images/avatar/avatar-9.webp'
  },
  {
    id: 9,
    item: "Shirt",
    name: 'Tamil Selvan',
    status: 'PENDING',
    assignee: 'https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-12.webp'
  },
  
];

export default tabledata;