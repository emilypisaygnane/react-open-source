import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import dataList from '../../College_Football.json';


export const DataTable = () => (
  <Table data={dataList}>
    <Column width={100}>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={300} >
      <HeaderCell>First Name</HeaderCell>
      <Cell dataKey="first_name" />
    </Column>

    <Column width={300} >
      <HeaderCell>Last Name</HeaderCell>
      <Cell dataKey="last_name" />
    </Column>

    <Column width={300} >
      <HeaderCell>University</HeaderCell>
      <Cell dataKey="university" />
    </Column>

    <Column width={100} >
      <HeaderCell>Coast</HeaderCell>
      <Cell dataKey="coast" />
    </Column>
  </Table>
);