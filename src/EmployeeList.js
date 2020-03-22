import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class EmployeeList extends Component {
  render() {
    return (
      <div className="employeelist">
        <ReactTable
          showPagination={false}
          minRows={6}
          data={this.props.data}  
          columns={this.props.columns}  
        />
      </div>
    )
  }
}
