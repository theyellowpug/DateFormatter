import { slashDateFormat, stringDateFormat } from "./regex"

export const dateFormatter = (csvData) => {
    let result = csvData.map(row =>
        row.map(element => 
        slashDateFormat.test(element) ?  slashDateFormatter(element) : 
        stringDateFormat.test(element) ? stringDateFormatter(element) : element))
        return result
}

const slashDateFormatter = (date) => {
    let dateArray= date.split("/")
    let newDateFormat = dateArray[2]+"."+digitFormatter(dateArray[0])+"."+digitFormatter(dateArray[1])
    return newDateFormat
}

const stringDateFormatter = (date) => {
    let dateArray = date.split(".")
    let newDateFormat = "20"+dateArray[2]+"."+stringToDigit(dateArray[1])+"."+dateArray[0]
    return newDateFormat
}

const digitFormatter = (digit) => {
    let result = ""
    if(digit.length===1){
        result = "0"+digit
    }
    else{
        result = digit
    }
    return result
}

const stringToDigit = (str) =>{
    if(str==="jan"){
        return "01"
    }
    else if(str==="feb"){
        return "02"
    } 
    else if(str==="márc"){
        return "03"
    }    
    else if(str==="ápr"){
        return "04"
    }    
    else if(str==="máj"){
        return "05"
    }    
    else if(str==="jún"){
        return "06"
    }    
    else if(str==="júl"){
        return "07"
    }    
    else if(str==="aug"){
        return "08"
    }    
    else if(str==="szep"){
        return "09"
    }    
    else if(str==="okt"){
        return "10"
    }
    else if(str==="nov"){
        return "11"
    }    
    else if(str==="dec"){
        return "12"
    }    
    else {
        return "Not a valid month"
    }
}