import styled from 'styled-components';

export const DisplayTable = ({csvData}) =>{
    return(
    <Container>
        <TitleContainer>
            <Title>Preview:</Title>
        </TitleContainer>
        <TableContainer>
            <Table>
                <TableBody>
                    {csvData?.map((row, index) => {
                        return (
                        <TableRow key={index}>
                            {row.map((element, i) => {
                            return <TableData key={i}>{element}</TableData>;
                            })}
                        </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </Container>)
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContainer = styled.div`
`

const Title = styled.p`
  font-size: 3vh;
`

const TableContainer = styled.div`
`
const Table = styled.table`
    border: 1px solid black;
    border-collapse: collapse;
    background-color: #ada497;
`
const TableBody = styled.tbody`
    
`

const TableRow = styled.tr`
    border: 1px solid black;
` 
const TableData = styled.td`
    border: 1px solid black;
` 
