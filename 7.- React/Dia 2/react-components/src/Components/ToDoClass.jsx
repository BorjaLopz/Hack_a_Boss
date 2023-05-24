import { Component } from "react";

class ToDoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
      todoList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const list = [...this.state.todoList, this.state.item]
    this.setState({ todoList: list })
    this.setState({ item: "" })
    // console.log(this.state.todoList);
  }

  handleChange(e) {
    // this.state.item = e.target.value;
    this.setState({ item: e.target.value });
    // console.log(this.state.item)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="todoitem"
            value={this.state.item}
            onChange={this.handleChange}
            placeholder="¿Qué tarea vas a realizar?"
          />

          <button type="submit">Agregar tarea</button>
        </form>

        <ul>
          {this.state.todoList.map((todo, index) => <li key={`${index} ${todo}`}>{todo}</li>)}
        </ul>
      </div>
    );
  }
}

export default ToDoClass;
