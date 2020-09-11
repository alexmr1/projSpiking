import React, { Component } from "react";
import "@atlaskit/css-reset";
import initialData from "./initialData";
import Column from "./components/Column";
import { DragDropContext } from "react-beautiful-dnd";

class App extends Component {
  state = initialData;

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const column = this.state.columns[source.droppableId];
    const newProjectIds = Array.from(column.projectIds);
    newProjectIds.splice(source.index, 1);
    newProjectIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      projectIds: newProjectIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newColumn.id]: newColumn,
      },
    };
    this.setState(newState);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.columnOrder.map((columnId) => {
          const column = this.state.columns[columnId];

          const projects = column.projectIds.map(
            (projId) => this.state.projects[projId]
          );

          return <Column key={column.id} column={column} projects={projects} />;
        })}
      </DragDropContext>
    );
  }
}

export default App;
