import React, { useState, useRef, useEffect } from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const imageRef = useRef(null);
  
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleOutsideClick = (event) => {
    if (imageRef.current && !imageRef.current.contains(event.target)) {
      setIsZoomed(false);
    }
  };

  useEffect(() => {
    if (isZoomed) {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [isZoomed]);

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      <div className="certificate-image-div"
        ref={imageRef}
        onClick={handleImageClick}>
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          );
        })}
      </div>
      {isZoomed && (
        <div className="overlay" onClick={() => setIsZoomed(false)}>
          <img
            src={cardInfo.image}
            alt={cardInfo.imageAlt || "Zoomed Image"}
            className="zoomed-image"
          />
        </div>
      )}
    </div>
  );
}
