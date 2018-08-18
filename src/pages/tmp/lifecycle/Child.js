import React from 'react';

export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  componentWillMount() {
    console.log('子组件will mount');
  }

  componentDidMount() {
    console.log('子组件 Did Mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log(`子组件 will Receive Props${nextProps}`);
    this.setState({
      num: nextProps.name
    });
  }

  shouldComponentUpdate() {
    console.log('子组件 shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('子组件 will update');
  }

  componentDidUpdate() {
    console.log('子组件 did update');
  }

  componentWillUnmount() {
    console.log('子组件 卸载');
  }

  render() {
    console.log('子组件渲染' + this.props.name);
    return (
      <div>
        <p>子组件生命周期</p>
        <p>
          子组件的变量：
          {this.props.name}
        </p>
        <p>
          子组件自定义的变量：
          {this.state.num}
        </p>
      </div>
    );
  }
}
