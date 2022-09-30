import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import dataList from '../../East_College.json';


export const DataTable = () => (
  <Table data={dataList}>
    <Column width={100} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>First Name</HeaderCell>
      <Cell dataKey="first_name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Last Name</HeaderCell>
      <Cell dataKey="last_name" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>University</HeaderCell>
      <Cell dataKey="university" />
    </Column>

    <Column width={100} resizable>
      <HeaderCell>Coast</HeaderCell>
      <Cell dataKey="coast" />
    </Column>
  </Table>
);