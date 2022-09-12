import { useEffect,useState } from "react";
import { ReplaceSpaces } from "../../scripts";
import { Shapes, Sizes } from "../../static";
import "./Rating.css";

export interface RatingProps {
  half?: boolean;
  size?: Sizes;
  color?: string;
  shape?: Shapes;
  value?: number;
  count?: number;
  onChange?: (a: number) => void;
}

const Rating = (props: RatingProps) => {
  const [rate, setRate] = useState(0);
  const classes = ReplaceSpaces(
    `rating gap-1 ${props.size ? `rating-${props.size}` : ``} ${
      props.half ? `rating-half` : ""
    }`
  );
  const rating = ReplaceSpaces(
    `mask ${props.shape ? `mask-${props.shape}` : "mask-star"} bg-orange-400`
  );

  const SetRating = (value: number) => {
    setRate(value);
    props.onChange?props.onChange(value):<></>
  }

  useEffect(() => {
    setRate(props.value);
  }, [props.value])

  return (
    <div className={classes}>
      <input
        type="radio"
        className="rating-hidden"
        onClick={() => SetRating(0)}
      />
      {props.half ? (
        [...Array(props.count*2)].map((item, index) => {
          const givenRating = index + 1;
          const halfClass =
            givenRating % 2 === 0 ? " mask-half-2" : " mask-half-1";
          return (
            <input
              type="radio"
              className={rating + halfClass}
              style={{
                backgroundColor: props.color,
                opacity: "var(--tw-bg-opacity)",
              }}
              checked={givenRating === rate}
              value={givenRating}
              onClick={() => SetRating(givenRating)}
            />
          );
        })
      ) : (
        [...Array(props.count)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <input
              type="radio"
              className={rating}
              style={{
                backgroundColor: props.color,
                opacity: "var(--tw-bg-opacity)",
              }}
              checked={givenRating === rate}
              value={givenRating}
              onClick={() => SetRating(givenRating)}
            />
          );
        })
      )}
    </div>
  );
};

export default Rating;
