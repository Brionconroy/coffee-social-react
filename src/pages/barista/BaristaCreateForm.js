import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { useHistory } from "react-router-dom";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import useRedirect from "../../hooks/useRedirect";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

// Form to gather and post data to database for a new Barista registration
const BaristaCreateForm = () => {

  // redirect to home page if user is not logged in
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});
  const currentUser = useCurrentUser();
  const id = currentUser?.profile_id;

  const [baristaData, setBaristaData] = useState({
        speciality_types: "",
        rates_per_hour: "",
        location: "",
        email: "",
    });

  const {
    speciality_types, rates_per_hour, location, email,
    } = baristaData;

  const history = useHistory();

  const handleChange = (event) => {
    setBaristaData({
      ...baristaData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("speciality_types", speciality_types);
    formData.append("rates_per_hour", rates_per_hour);
    formData.append("location", location);
    formData.append("email", email);

    try {
      // make request to database to create a new barista
      const { data } = await axiosReq.post("/barista/", formData);
      // add barista id to the users profile
      await axiosRes.put(`/profiles/${id}/`, { baristaId: data.id });
      // goes back to the page the user was on
      history.goBack();
    } catch (err) {
      // display any error for form validation
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Speciality</Form.Label>
        <Form.Control
          type="text"
          name="speciality_types"
          value={speciality_types}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Rate Per Hour</Form.Label>
        <Form.Control
          type="number"
          name="rates_per_hour"
          value={rates_per_hour}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          rows={6}
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={btnStyles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        Create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Container className={appStyles.Content}>{textFields}</Container>
    </Form>
  );
};

export default BaristaCreateForm;