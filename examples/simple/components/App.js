import React, { Component } from 'react';
import NodeTree from 'react-node-tree';

export default class App extends Component {
  render() {
      var root = {
          type : "Region",
          children : [
              {
                  type : "Input",
                  children : []
              },
              {
                  type : "Span",
                  children : []
              },
              {
                  type : "Region",
                  children : [
                      {
                          type : "DatePicker",
                          children : []
                      },
                      {
                          type : "Region",
                          children : []
                      }
                  ]
              }

          ]
      }
    return (
      <p>
          <NodeTree root={root}/>
      </p>
    );
  }
}
