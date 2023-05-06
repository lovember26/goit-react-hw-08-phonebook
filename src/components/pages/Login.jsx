import { Wrapper } from 'components/App.styled';
import { Button, Form, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk, userThunk } from 'redux/auth/thunk';

export const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSumbit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    dispatch(loginThunk(user))
      .unwrap()
      .then(() => {
        dispatch(userThunk());
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
          <label htmlFor="exampleInputEnail1">Email</label>
          <Input name="email" type="text" id="exampleInputEmail1" />
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
          Login
        </Button>
      </Form>
    </Wrapper>
  );
};
