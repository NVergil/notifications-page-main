import { motion } from "framer-motion";
import { handleCardClick } from "../utils";

const Cards = ({ setCard, card, markAll }) => {
  return (
    <>
      {card.map((item, i) => (
        <motion.article
          key={i}
          className={`card-container ${
            !markAll && item.active ? "active" : ""
          }`}
          onClick={() => handleCardClick(i, setCard)}
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.1,
            delay: i * 0.05,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 9,
              stiffness: 200,
              restDelta: 0.001,
            },
          }}
        >
          <picture className="avatar">
            <img src={item.img} width={45} height={45} alt="" />
          </picture>
          <div className="full">
            <div className="type-container">
              <p>
                <span className="hover-blue-states">{item.username} </span>
                <span className="type ml">{item.type} </span>
                {item.reacted && (
                  <span className="type_2 ml hover-blue-states">
                    {item.reacted}
                  </span>
                )}
                {item.joined && (
                  <span className="type_3 ml">{item.joined}</span>
                )}
                {item.lefted && (
                  <span className="type_3 ml">{item.lefted}</span>
                )}
              </p>
              {((!item.active && item.commentImgUrl) ||
                (item.commentImgUrl && markAll)) && (
                <picture className="comment-img">
                  <img src={item.commentImgUrl} alt="image-commented"></img>
                </picture>
              )}
              {item.active && !markAll && <span className="dot"></span>}
            </div>
            <p className="time-ago">{item.timeAgo}</p>
            {((!item.active && item.privateMessage) ||
              (item.privateMessage && markAll)) && (
              <div className="private-message">
                <p>{item.privateMessage}</p>
              </div>
            )}
          </div>
        </motion.article>
      ))}
    </>
  );
};

export default Cards;
