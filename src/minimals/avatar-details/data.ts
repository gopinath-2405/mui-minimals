export interface DataType {
  image: string;
  name: string;
  email: string;
  district: string;
}

const data: DataType[] = [
  {
    image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
    name: "Tamil Selvan",
    email: "tamilselvan962913@gmail.com",
    district: "Krishnakiri",
  },
  {
    image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",
    name: "Vasanth",
    email: "vasanthvinv@gmail.com",
    district: "Tiruppur",
  },
  {
    image: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-12.webp",
    name: "Gopi",
    email: "gopi63669@gmail.com",
    district: "Coimbatore",
  },
];

export default data;