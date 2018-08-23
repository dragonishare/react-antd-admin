import React from 'react';
import { Card, Table, Modal, Button, message } from 'antd';
import Request from '../../services/request';
import Utils from '../../services/utils';
import './Table.less';

export default class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const dataSource = [
      {
        key: '1',
        name: 'Jack Ma',
        age: 48,
        gender: 1,
        address: '杭州市西湖区'
      },
      {
        key: '2',
        name: 'Pony Ma',
        age: 48,
        gender: 1,
        address: '深圳市南山区'
      }
    ];
    dataSource.map((item, index) => (item.key = index));

    this.setState({
      dataSource
    });

    this.request();
  }
  params = {
    page: 1
  };

  request = () => {
    Request.ajax({
      url: '/table/list',
      data: {
        page: this.params.page
      }
    }).then(res => {
      if (res.code === 0) {
        res.result.list.map((item, index) => (item.key = index));
        this.setState({
          dataSource2: res.result.list,
          selectedRowKeys: [],
          selectedRows: null,
          pagination: Utils.pagination(res, current => {
            console.log(this.params.page);
            this.params.page = current;
            console.log(this.params.page);
            this.request();
          })
        });
      }
    });
  };

  onRowClick(record, index) {
    let selectKey = [index];
    Modal.info({
      title: '当前选中',
      content: `name: ${record.name}, age: ${record.age}`
    });
    console.log('onRow属性回调，点击行', record);
    this.setState({
      selectedRowKeys: selectKey,
      selectedItem: record
    });
  }

  //复选删除
  handleDelete = () => {
    let selectedRows = this.state.selectedRows;
    let ids = [];

    selectedRows.map(item => ids.push(item.id));

    Modal.confirm({
      title: '删除提示',
      content: `您确定要删除这些数据吗？${ids.join(',')}`,
      onOk: () => {
        message.success('删除成功');
        // this.request();
      }
    });
  };

  render() {
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age'
      },
      {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(text) {
          return text === 1 ? '男' : '女';
        }
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
      }
    ];

    const selectedRowKeys = this.state.selectedRowKeys;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys
    };

    const rowCheckSelection = {
      type: 'checkbox',
      selectedRowKeys,
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(
          '选中项发生变化时的回调onChange',
          selectedRowKeys,
          selectedRows
        );
        this.setState({
          selectedRowKeys,
          selectedRows
        });
      }
    };

    return (
      <div className="table-basictable">
        <Card title="基本用法" className="card-wrap">
          <Table
            dataSource={this.state.dataSource}
            columns={columns}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="动态数据-easy-mock" className="card-wrap">
          <Table
            dataSource={this.state.dataSource2}
            columns={columns}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="动态数据嵌套单选按钮-easy-mock" className="card-wrap">
          <Table
            rowSelection={rowSelection}
            onRow={(record, index) => {
              return {
                onClick: () => {
                  this.onRowClick(record, index);
                }, // 点击行
                onMouseEnter: () => {} // 鼠标移入行
              };
            }}
            dataSource={this.state.dataSource2}
            columns={columns}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="动态数据嵌套复选按钮-easy-mock" className="card-wrap">
          <Button
            type="danger"
            icon="delete"
            style={{ marginBottom: '10px' }}
            onClick={this.handleDelete}
          >
            删除
          </Button>
          <Table
            rowSelection={rowCheckSelection}
            dataSource={this.state.dataSource2}
            columns={columns}
            bordered
            pagination={false}
          />
        </Card>
        <Card title="动态数据分页-easy-mock" className="card-wrap">
          <Table
            dataSource={this.state.dataSource2}
            columns={columns}
            bordered
            pagination={this.state.pagination}
          />
        </Card>
      </div>
    );
  }
}
