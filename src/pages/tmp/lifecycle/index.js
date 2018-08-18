import React from 'react';
import Child from './Child';

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentWillMount() {
    console.log('父组件will mount');
  }

  componentDidMount() {
    console.log('父组件 Did Mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log(`父组件 will Receive Props${nextProps}`);
  }

  shouldComponentUpdate() {
    console.log('父组件 shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('父组件 will update');
  }

  componentDidUpdate() {
    console.log('父组件 did update');
  }

  componentWillUnmount() {
    console.log('父组件 卸载');
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    console.log('父组件渲染' + this.state.count);
    return (
      <div>
        <p>父组件生命周期</p>
        <button type="button" onClick={this.handleClick}>
          点我试试
        </button>
        <p>
          父组件的变量：
          {this.state.count}
        </p>
        <Child name={this.state.count} />
      </div>
    );
  }
}
