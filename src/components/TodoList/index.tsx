import React from 'react';
import { connect } from 'react-redux'
import { orderTodos } from '../../redux/actions';

import { Container, Button } from './styles';

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<any> = ({ todos, dispatch }) => {
  return (
    <Container>
      {
        todos.map((item: Todo) => (
          <div key={item.id}>{item.text}</div>
        ))
      }
      <Button onClick={() => dispatch(orderTodos())} disabled={ todos.length < 2 }>Ordenar lista</Button>
    </Container>
  );
};

const mapStateToProps = (state: TodoListProps) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(TodoList);