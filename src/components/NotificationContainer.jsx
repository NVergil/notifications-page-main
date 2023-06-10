import notifications from "../data";
import "./Cards.css";
import { useEffect, useState } from "react";
import { countActiveItems } from "../utils";
import Cards from "./Cards";

const NotificationContainer = () => {
  const [card, setCard] = useState([]);
  const [markAll, setMarkAll] = useState(false);

  useEffect(() => {
    setCard(notifications);
  }, []);

  let activeCount = countActiveItems(card);

  return (
    <>
      <header className="header-container">
        <div>
          <h1 className="noti">Notifications</h1>
          <span className="counter">{markAll ? '0' : activeCount}</span>
        </div>
        <button className="hover-blue-states" onClick={() => setMarkAll(true)}>Mark all as read</button>
      </header>
      <Cards setCard={setCard} card={card} markAll={markAll} />
    </>
  );
};

export default NotificationContainer;
