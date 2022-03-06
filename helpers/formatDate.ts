const formatDate = (date : string) => {
    let reg = /T.*Z/ig
    let formattedDate = date.replace(reg, "")


    return formattedDate
}
    
    export default formatDate