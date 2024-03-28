import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { useHistory, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { axiosReq } from "../../api/axiosDefaults";
import useRedirect from "../../hooks/useRedirect";

const ReviewCreateForm = () => {

  useRedirect("loggedOut");

  const [errors, setErrors] = useState({});

  const {id} = useParams();

  const [reviewData, setReviewData] = useState({
    content: "",
    rate: 1
  });

  const history = useHistory();

  // Catch Rating value
  const handleRating = (rate) => {
    setReviewData({
      ...reviewData,
      rate
    });
  };

  const handleChange = (event) => {
    setReviewData({
      ...reviewData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("barista", id);
    formData.append("rating", reviewData.rate);
    formData.append("content", reviewData.content);

    try {
      await axiosReq.post("/reviews/", formData);
      history.goBack();
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <StarRatings 
          rating={reviewData.rate}
          numberOfStars={5} 
          changeRating={handleRating}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Review</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={reviewData.content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        Cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Save
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={appStyles.Content}>{textFields}</Container>
    </Form>
  );
};

export default ReviewCreateForm;