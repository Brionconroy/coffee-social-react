import React from "react";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Comment.module.css";

const Review = (props) => {

  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    rating,
  } = props;

  return (
    <>
      <hr/>
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>
            Rating:
            <StarRatings readonly rating={rating} numberOfStars={5} size={25} />
          </p>
          <p>
            Review:
            {content}
          </p>
        </Media.Body>
      </Media>
    </>
  );
};

export default Review;