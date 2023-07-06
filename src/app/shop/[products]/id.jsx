import { useRouter } from "next/router";
import { url } from "@/app/myApi";
import { useEffect, useState } from "react";

export const DynamicProducts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;


  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};
