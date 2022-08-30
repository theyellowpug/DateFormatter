import { slashSeparatedNumberDateFormat, dotSeparatedStringDateFormat, slashSeparatedStringDateFormat } from "./regex"

export const dateFormatter = (csvData) => {
    let result = csvData.map(row =>
        row.map(element => 
        slashSeparatedNumberDateFormat.test(element) ?  slashSeparatedNumberDateFormatter(element) : 
        dotSeparatedStringDateFormat.test(element) ? dotSeparatedStringDateFormatter(element) : 
        slashSeparatedStringDateFormat.test(element) ? slashSeparatedStringDateFormatter(element) : element))
        return result
}

const slashSeparatedNumberDateFormatter = (date) => {
    let dateArray= date.split("/")
    let newDateFormat = dateArray[2]+"."+digitFormatter(dateArray[0])+"."+digitFormatter(dateArray[1])
    return newDateFormat
}

const dotSeparatedStringDateFormatter = (date) => {
    let dateArray = date.split(".")
    let newDateFormat = "20"+dateArray[2]+"."+stringToDigit(dateArray[1])+"."+dateArray[0]
    return newDateFormat
}

const slashSeparatedStringDateFormatter = (date) => {
    let dateArray = date.split("/")
    let newDateFormat = dateArray[2]+"."+stringToDigit(dateArray[1])+"."+dateArray[0]
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
    str=str.toLowerCase()
    if(str==="jan"){
        return "01"
    }
    else if(str==="febr" || str==="feb"){
        return "02"
    } 
    else if(str==="márc" || str==="már" || str==="mar"){
        return "03"
    }    
    else if(str==="ápr" || str==="apr"){
        return "04"
    }    
    else if(str==="máj" || str==="may"){
        return "05"
    }    
    else if(str==="jún" || str ==="jun"){
        return "06"
    }    
    else if(str==="júl"||str==="jul"){
        return "07"
    }    
    else if(str==="aug"){
        return "08"
    }    
    else if(str==="szep" || str ==="sep"){
        return "09"
    }    
    else if(str==="okt"|| str === "oct"){
        return "10"
    }
    else if(str==="nov"){
        return "11"
    }    
    else if(str==="dec"){
        return "12"
    }    
    else {
        return str
    }
}