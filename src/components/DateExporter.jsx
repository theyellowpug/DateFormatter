import { CSVLink } from "react-csv";
import styled from 'styled-components';

export const DateExporter = ({fileName,data}) => {
    return(
        <CSVLink filename={fileName} data={data}>
            <ExportButton>Export to CSV</ExportButton>
        </CSVLink>)
}

const ExportButton = styled.button`
    background-color: #616b75;
    border-radius: 2vh;
    font-size: large;
`