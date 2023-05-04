import { Form, Input } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export default function Filter() {
  const value = useSelector(selectFilter);

  const dispatch = useDispatch();
  const handleFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };
  return (
    <Form>
      <label htmlFor="filter">Find contacts by name</label>
      <Input
        type="text"
        name="filter"
        id="filter"
        onChange={handleFilter}
        value={value}
      />
    </Form>
  );
}
