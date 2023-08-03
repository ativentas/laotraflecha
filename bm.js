//poner delante javascript: 
document.open( "text/html", "replace");
document.write( " <p> This is the replaced content inside paragraph tag only. </p> ");
document.close();
const myhtml = document.querySelector("html");
fetch("https://laotraflecha.s3.eu-west-3.amazonaws.com/laotraflecha.html").then((response)=>response.text()).then((text)=>{myhtml.innerHTML = text;});