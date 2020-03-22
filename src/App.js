import React from 'react';
import EmployeeList from './EmployeeList';
import Title from './Title';

function App() {
  const data = [
    { id: 'INC001', name: 'John', role: 'CEO' },
    { id: 'INC002', name: 'Ragavi', role: 'Director' },
    { id: 'INC004', name: 'Peter', role: 'Junior Engineer' },
    { id: 'INC005', name: 'Virat', role: 'Senior Engineer' },
    { id: 'INC006', name: 'Rohit', role: 'Account Manager' },
    { id: 'INC007', name: 'Dhoni', role: 'Operations Head' },
    { id: 'INC008', name: 'Leo Peter', role: 'Project Manager' }
  ];

  const columns = [
    { Header: 'Employee ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Designation', accessor: 'role' }
  ];

  return (
    <div>
      <Title text="Employees List" />
      <EmployeeList data={data} columns={columns} />
    </div>
  );
}

export default App;
