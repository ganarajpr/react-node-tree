import React from 'react';
import TreeNode from './TreeNode';


export default class NodeTree extends React.Component {

    static propTypes = {
        root : React.PropTypes.object.isRequired,
        node : React.PropTypes.node
    }
    constructor(props) {
        super(props);
    }

    render() {
        return ( < div className = "node-root" >
            <TreeNode node = {
                this.props.root
            }
            depth = "1" />
            < /div>
        );
    }
}
