import React from 'react';
import Radium from 'radium';

@Radium
export default class TreeNode extends React.Component {

  constructor (props) {
      super(props);
  }

  renderChildren(){
      return this.props.node.children.map(item =>{
          return (<TreeNode node={item} depth={this.props.depth+1}/>)
      });
  }

  renderBefore(){
      if(this.props.depth > 1){
          return (
            <span style={[
                    styles.nodeBefore
                ]}>&nbsp;</span>
          );
      }
      return null;

  }

  render(){
      return (
          <div style={[this.props.depth > 1 ? styles.offset : {}]}>
              {this.renderBefore()}
              <div style={[
                    styles.nodeMeta
                ]}>
                  <div style={[
                      styles.nodeBase
                    ]}>
                      <span style={[styles.tagName]}>{this.props.node.type}</span>
                  </div>
                  {this.renderChildren()}
              </div>
          </div>
      );
  }
}


var styles = {
  nodeBase: {
        color: '#fff',
        background: '#333',
        display: 'inline-block',
        padding: '8px 16px',
        borderRadius: '2px',
        marginTop: '8px',
        cursor: 'pointer',
        position : "relative",
        border : "1px solid #333",
        ':hover': {
          background: '#880E4F'
        }
    },
    nodeBefore :{
        position: "absolute",
        borderBottom: "1px solid #888",
        left: "0",
        top: "0",
        width: "16px",
        height: "32px",
        zIndex: "-1"
    },
    nodeMeta : {
        position : "relative"
    },
    offset : {
        marginLeft : "16px",
        paddingLeft : "16px",
        borderLeft: "1px dotted #ccc",
        position : "relative"
    },
    tagName: {
        fontSize: '14px',
        fontWeight: '700'
    }

};
