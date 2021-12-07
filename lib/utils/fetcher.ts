import axios from "axios";

export default async function fetcher(url: any) {
  const { data } = await axios.get(url, {
    headers: { "app-id": "61948d0ce6d8b3a3164452e0" },
  });
  return data;
}
