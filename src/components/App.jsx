import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Wrapper, Title } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { SignUp } from './pages/SignUp';
import { Login } from './pages/Login';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { Home } from './Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Wrapper>
                <Title>Phonebook</Title>
                <ContactForm />
                <Title>Contacts</Title>
                <Filter />
                <ContactList />
              </Wrapper>
            </PrivateRoute>
          }
        ></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
};
