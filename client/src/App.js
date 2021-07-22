import { Route, Switch, Link } from "react-router-dom";
import NewTodo from "./NewTodo";
import TodoList from "./TodoList";
import EditTodo from "./EditTodo";

export default function App() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/">Todos</Link>
          <Link to="/create">New Todo</Link>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={TodoList} />
        <Route exact path="/create" component={NewTodo} />
        <Route exact path="/edit/:id" component={EditTodo} />
      </Switch>
    </div>
  );
}
