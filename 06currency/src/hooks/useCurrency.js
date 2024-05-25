import { useEffect, useState } from "react";

function useCurrency(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json()) //(yaha res string me hai) mostly api call se string value aati to usko json me convert karna hota h
      .then((res) => {
        setData(res[currency]);
      }); // yaha res json me hai
  }, [currency]);

  // console.log(data);
  return data;
  // it means we are returning data i.e, we cannot setData so,we will perform set of things as using it as custom hook
}
export default useCurrency;