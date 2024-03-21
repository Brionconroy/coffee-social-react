import React from "react";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";

import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Avatar from "../../components/Avatar";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/Post.module.css";

// component renders Barista information and stats


const Barista = (props) => {
  const {
    owner,
    id,
    profile_id,
    profile_image,
    speciality_types,
    rates_per_hour,
    location,
    email,
    isProfilePage,
    showAll,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  return (
    <Card className={styles.Post}>
      <Card.Body>
        {!isProfilePage && (
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={100} />
              {owner}
            </Link>
          </Media>
        )}
        <p className="text-center">
           Speciality:
          {speciality_types}
        </p>
        <p className="text-center">
           Location:
          {location}
        </p>
        <p className="text-center">
           Rate: €
          {rates_per_hour}
          {" "}
           per hour
        </p>
        <p className="text-center">
           Email:
          {email}
        </p>
        {!is_owner && (
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}/create`)}
            aria-label="create-review"
          >
            Leave a review
          </Button>
        )}
        {showAll && (
          <Button
            className={btnStyles.Button}
            onClick={() => history.push(`/reviews/${id}`)}
            aria-label="view-reviews"
          >
            Barista Review
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Barista;