import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: solid;
  width: 200px;
  border-color: lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

class Project extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.project.id} index={this.props.index}>
        {(provided) => (
          <Container
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.project.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Project;
