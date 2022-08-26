import React from 'react'
import styled from 'styled-components';

export const UploadBox = ({getRootProps}) => {
    return (
        <Container {...getRootProps()}>
            <DescriptionContainer>
                <Description>Drag 'n' drop some files here, or click to select files</Description>
            </DescriptionContainer>
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 2.5vh;
  background-color: #ada497;
`

const DescriptionContainer = styled.div`
    text-align: center;
    position: relative;
    width: 100%;
`

const Description = styled.p`
    font-size: 2.5vh;
`