import React, {useCallback, useState, useEffect} from 'react'
import {useDropzone} from 'react-dropzone'
import Papa from 'papaparse'
import { UploadBox } from '../components/UploadBox'
import { DisplayTable } from '../components/DisplayTable'
import { dateFormatter } from '../businessLogic/dateFormatter'
import { DateExporter } from '../components/DateExporter'
import styled from 'styled-components';
import { LoadingIcon } from '../components/LoadingIcon'

export const ConverterPage = () => { 

    const [csvData,setCsvData] = useState()
    const [isLoading,setIsLoading] = useState(false)

    function callFormatter() {
       setCsvData(dateFormatter(csvData))
    }

    const onDrop = useCallback(acceptedFiles => {
      setCsvData([]) 
        Papa.parse(acceptedFiles[0], {
          header: false,
          skipEmptyLines: true,
          complete: function (results) {
            setCsvData(results.data)        
          },
        });
        }, [])

    const {getRootProps} = useDropzone({onDrop})

    useEffect (()=>{
      if(csvData){
        csvData.length === 0 ? setIsLoading(true) : setIsLoading(false)
      } 
    },[csvData])

    return(
        <PageContainer>
          <TitleContainer>
            <Title>DateFormatter</Title>
          </TitleContainer>
          <DropZoneContainer>
            <UploadBox getRootProps={getRootProps}/>
          </DropZoneContainer>
          {csvData ? 
              <>
                <ButtonContainer>
                  <ConvertButton onClick={callFormatter}>Convert</ConvertButton>
                  <DateExporter fileName={"test1.csv"} data={csvData}/>
                </ButtonContainer>
                <TableContainer>
                  {isLoading ? <LoadingIcon/> : <DisplayTable csvData={csvData}/> }
                </TableContainer>
              </>
              :
              <></>
            }
        </PageContainer>
    )
}


const PageContainer = styled.div`
  background:beige; 
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TitleContainer = styled.div`
  text-align: center;
  background-color: #616b75;
  width: 100%;
  margin-bottom: 5vh;
`

const Title = styled.p`
  font-size: 4vh;
`

const DropZoneContainer = styled.div`
  position: relative;
  width: 50%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1vh;
`

const TableContainer = styled.div`
  position: relative;
  width: 85%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1vh;
`

const ButtonContainer = styled.div`
  position: relative;
  width: 50%;
  height: auto;
  display: inline-flex;
  gap:1vh;
  flex-direction: row;
`

const ConvertButton = styled.button`
  background-color:#616b75;
  border-radius: 2vh;
  font-size: large;
`