window.onload=function(){
document.getElementById("download").addEventListener("click",()=>{
    const page=document.getElementById("page");
    console.log(page);
    console.log(window)
    var opt = {
        margin:       1,
       
        filename:     'CV.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    html2pdf().from(page).set(opt).save();

})
}