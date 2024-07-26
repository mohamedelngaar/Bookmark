var siteName = document.getElementById("siteName")
var UrlName = document.getElementById("siteUrl")
var UrlList = [];

if (localStorage.getItem("list") != null) {
    UrlList = JSON.parse(localStorage.getItem("list"))
    console.log(UrlList);
    displayBookmark(UrlList);

} else {

    UrlList = [];
}

function addUrl() {
    if(siteName.value=="" || UrlName.value ==""){
     alert("fill requirement")

    }   
    else{
    var Link = {
        sitename: siteName.value,
        urlname: UrlName.value


    }
    
    UrlList.push(Link);
    localStorage.setItem("list", JSON.stringify(UrlList));
    displayBookmark();
    console.log(UrlList);
    //  clearform()
 }


}
function displayBookmark() {
    var cartoona = ``;
    for (i = 0; i < UrlList.length; i++) {
        console.log(UrlList[i]);
        cartoona += `    <table>
    <td>` + UrlList[i].sitename + `</td>
      <td>
        <button class="btn btn-primary"onclick="visitLink()">Visit</button> 
        <button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button>
      </td>


    </table> `
    }
    document.getElementById("bookmarkList").innerHTML = cartoona;


}
function visitLink() {
    localStorage.setItem("list", JSON.stringify(UrlList));
    var value = UrlName.value;
    window.location = value;




}
function clearform() {
    siteName.value = "";
    UrlName.value = "";


}


function deleteProduct(i) {
    UrlList.splice(i, 1)

    localStorage.setItem("list", JSON.stringify(UrlList))
    displayBookmark();
}