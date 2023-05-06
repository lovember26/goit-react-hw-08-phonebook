import { Wrapper } from 'components/App.styled';
import { Button, Form, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'services/auth';

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSumbit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(signUp(newUser))
      .unwrap()
      .then(() => {
        navigate('/contacts');
      })
      .catch(error => {
        alert('Enter correct data!');
      });
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSumbit}>
        <div>
          <label htmlFor="exampleInputName1">Name</label>
          <Input name="name" type="text" id="exampleInputName1" />
        </div>
        <div>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Input name="email" type="email" id="exampleInputEmail1" />
        </div>
        <div>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <Input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    </Wrapper>
  );
};
