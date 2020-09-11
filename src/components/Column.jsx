import React, { Component } from "react";
import "@atlaskit/css-reset";
import styled from "styled-components";
import Project from "../components/Project";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 8px;
  border: solid;
  width: 250px;
  border-color: blue;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: white;
`;

const Title = styled.h3`
  color: red;
  padding: 8px;
`;

const ProjectList = styled.div`
  padding: 8px;
`;

class Column extends Component {
  render() {
    return (
      <Container className="container">
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <ProjectList ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.projects.map((project, index) => (
                <Project key={project.id} project={project} index={index} />
              ))}
              {provided.placeholder}
            </ProjectList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Column;
