import React from 'react';

const TableHeader = () => {
  return (
    <thead>
    <tr>
      <th>Title</th>
      <th>Author</th>
      <th>Link</th>
      <th>Description</th>
    </tr>
    </thead>
  );
}

const TableBody = props => {
  console.log(props.data);
  const rows = props.data.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.author}</td>
        <td><a href={row.link}>{row.link}</a></td>
        <td>{row.description}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

const Table = (props) => {
  const {data} = props;
  return (
    <table>
      <TableHeader/>
      <TableBody data={data}/>
    </table>
  );
}

export default Table;