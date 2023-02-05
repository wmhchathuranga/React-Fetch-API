import Table from 'react-bootstrap/Table';
import Row from './Row';

function BasicExample(props) {

    const data = props.content;
    // console.log(data[0]);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {Object.entries(data[0]).map(([key,value]) => (
                        <td key={key}>{key}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
               {data.map((row)=> (
                <Row key={row.id} data={row}/>
               ))}
            </tbody>
        </Table>
    );
}

export default BasicExample;