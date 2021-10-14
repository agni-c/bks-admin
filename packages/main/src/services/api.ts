import axios from "axios";

type Metals = [
  {
    _id: string;
    name: string;
    icon: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }
];
const fetchMetals = async (): Promise<Metals> => {
  const { data } = await axios.get("/api/metals");
  return data;
};
export { fetchMetals };
