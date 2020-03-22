import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import EmployeeList from '../EmployeeList';

describe("EmployeeList Component", () => {
	const data = [
  	{ id: 'INC001', name: 'John', role: 'CEO' }
	];
	const columns = [
    { Header: 'Employee ID', accessor: 'id' },
    { Header: 'Name', accessor: 'name' },
    { Header: 'Designation', accessor: 'role' }
  ];
  
	it('should shallow render component without crashing', () => {
    shallow(<EmployeeList />);
	});

	it('should full render component without crashing', () => {
    mount(<EmployeeList data={data} columns={columns} />);
	});

	it('should static render component without crashing', () => {
    render(<EmployeeList data={data} columns={columns} />);
	});

	it('should render the component initial layout', () => {	
		const tree = renderer.create(<EmployeeList data={data} columns={columns} />);
  	expect(tree.toJSON()).toMatchSnapshot();
	});
});
