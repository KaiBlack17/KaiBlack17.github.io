document.getElementById("mybtn").addEventListener("click", function()  {
    let chapter = document.getElementById("chapter").value;
    console.log(chapter);
    
    if (chapter !== "") {
        const xbtn = document.createElement("button");
        xbtn.innerHTML ="\u274C";

        const listitem = document.createElement("li");
        listitem.textContent =chapter;
        listitem.appendChild(xbtn);

        document.getElementById("favs").appendChild(listitem);

        document.getElementById("chapter").value = "";
    } //end of if

});