import React from "react";
import classNames from "classnames";
function CardAnimation({
  nameText,
  numberText,
  month,
  year,
  security,
  flipped,
  onsetFlip
}) {
  /* numberText !== undefined && numberText.length === 16
      ? numberText.match(/.{1,4}/g).join(" ")
      : numberText;
      */
  const splits = numberText.match(/.{1,4}/g);
  let spacedNumber = "";
  if (splits) {
    spacedNumber = splits.join(" "); // Join all the splits with an empty space
  }

  const cardBack = classNames("card-picture", {
    "card__inner-is-flipped": flipped === false
  });
  const mask_number = spacedNumber;

  return (
    <div className="right-block">
      <div onClick={() => onsetFlip(!flipped)} className={cardBack}>
        <div className="card__face card__face--front">
          <p className="animationNumber">{mask_number}</p>
          <p className="animationName">{nameText}</p>
          <p className="expire">
            {month} {"/"} {year}
          </p>
        </div>

        <div className="card__face card__face--back">
          <div className="barkod">
            <p className="security">{security}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardAnimation;
