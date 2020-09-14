import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

import { Container, FormGroup, FormSubmit } from './styles';

const TodoSchema = Yup.object().shape({
  todo: Yup.string()
    .min(5, 'Informe no mínimo 5 caracteres.')
    .required('Required')
});

const TodoList: React.FC<any> = ({ dispatch }) => {

  return (
    <Container>
      <h1>TodoLuby</h1>
      <Formik
        initialValues={{ todo: '' }}
        validationSchema={TodoSchema}
        onSubmit={(values, {resetForm}) => {
        dispatch(addTodo(values.todo))
        resetForm();
        }}
      >
        {() => (
          <Form>
            <FormGroup>
              <Field type="text" name="todo" />
              <ErrorMessage component="span" name="todo" />
            </FormGroup>
            <FormSubmit type="submit">+</FormSubmit>
          </Form>
        )}
     </Formik>
    </Container>
  );
};

export default connect()(TodoList);