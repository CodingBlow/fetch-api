import React, { useEffect, useState } from "react";
import List from "./List"; // Corrected the import
import axios from "axios";
import Loader from "./Loader";
function Home() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr"
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        // Changed "Error" to "error" for consistency
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      {loading ? (
        <Loader />
      ) : (
        coins.map(
          (
            coin // Changed the parameter name from "i" to "coin"
          ) => (
            <List
              name={coin.name}
              symbol={coin.symbol}
              key={coin.id}
              imgsrc={coin.image}
              price={coin.current_price}
            />
          )
        )
      )}
    </div>
  );
}

export default Home;
