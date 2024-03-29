import { useContext, useEffect, useState } from "react";
import Button from "../../components/button/button.component";
import FormInput from "../../components/form-input/form-input.component";
import Form from "../../components/form/form.component";
import H4 from "../../components/h4/h4.component";
import axios from "axios";
import { UserContext } from "../../contexts/user.context";
import Alert from "../../components/alert/alert.component";
import { Link, useNavigate } from "react-router-dom";
import { ButtonsContainer } from "./sign-up.styles";
import { FiLogIn } from "react-icons/fi";
import { GoAlert } from "react-icons/go";
import UnAuthenticated from "../../components/unauthenticated/unauthenticated.component";

const defaultFormFields = {
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const navigate = useNavigate();
  const [formFields, setFormfields] = useState(defaultFormFields);
  const [errors, setErrors] = useState(null);
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    if (formFields.password !== formFields.confirm_password) {
      return setErrors("The password and Confirm password dont match!");
    }

    try {
      const { data } = await axios.post("/api/users/signup", formFields);
      setCurrentUser(data);
      setErrors("");
      setFormfields(defaultFormFields);
      navigate("/todos");
    } catch (error) {
      if (error.response.data.message) {
        setErrors(error.response.data.message);
      }
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/todos");
    }
  }, [currentUser, navigate]);

  return (
    <UnAuthenticated>
      <h1>Sign up</h1>
      <H4>Create your account</H4>
      <Form onSubmit={handleSubmit}>
        <FormInput
          required
          type="email"
          name="email"
          label={"Email"}
          onChange={handleChange}
          value={formFields.email}
        />
        <FormInput
          required
          type="password"
          name="password"
          label={"Password"}
          onChange={handleChange}
          value={formFields.password}
        />
        <FormInput
          required
          type="password"
          name="confirm_password"
          label={"Confirm password"}
          onChange={handleChange}
          value={formFields.confirm_password}
        />
        {errors && (
          <Alert type="danger">
            <GoAlert /> {errors}
          </Alert>
        )}
        <ButtonsContainer>
          <Link to={"/"}>Back to login</Link>
          <Button buttonType={"primary"} type="submit">
            <FiLogIn /> Sign up
          </Button>
        </ButtonsContainer>
      </Form>
    </UnAuthenticated>
  );
};

export default SignUp;
