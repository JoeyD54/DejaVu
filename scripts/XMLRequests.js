/********************************************************
* This javascript is used to process variousXML todo    *
* calls
********************************************************/


/********************************************************
* Function: loadTableXMLDoc                             *
*                                                       *
* Use: Grabs all data from the todo list and prints.    *
*                                                       *
* Calls: printTable                                     *
*                                                       *
* Returns: Nothing                                      *
********************************************************/

function loadTableXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            printTable(this);
        }
    };
    //xmlhttp.open("GET", "xml/toDoList.xml", true);
    xmlhttp.open("GET", "http://localhost:8080/DejaVu/xml/toDoList.xml", true);
    xmlhttp.send();
}
function printTable(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var table="<tr><th>Item</th><th>Destination</th></tr>";
    var x = xmlDoc.getElementsByTagName("todo");
    for (i = 0; i <x.length; i++) { 
        table += "<tr><td>" +
        x[i].getElementsByTagName("item")[0].childNodes[0].nodeValue +
        "</td><td>" +
        x[i].getElementsByTagName("dest")[0].childNodes[0].nodeValue +
        "</td><td>" +
        "<span id=i onclick='removeXMLDocItem()' class='close'>&times;</span>" +
        "</td></tr>";
      
    }
    document.getElementById("printTable").innerHTML = table;
}

/********************************************************
* Function: remvoeXMLItem                               *
*                                                       *
* Use: Removed item used specified by clicking the X    *
*                                                       *
* Returns: Nothing                                      *
********************************************************/
function removeXMLDocItem(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        removeXMLItem(this);
      }
    };
    xmlhttp.open("GET", "xml/toDoList.xml", true);
    xmlhttp.send();
}
function removeXMLItem(xml){
    //remove the desired item
    var x, xmlDoc, table, i;
    xmlDoc = xml.responseXML;
    x = xmlDoc.getElementsByTagName('todo');
    x.parentNode.RemoveChild(x);
    document.getElementById('testPrint').innerHTML = x;
}

/********************************************************
* Function: addToXMLDoc                                 *
*                                                       *
* Use: Append user specified item to todo list          *
*                                                       *
* Returns: Nothing                                      *
********************************************************/
/*
function addToXMLDoc(item, dest){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        addXML(this, item, dest);
      }
    };
    xmlhttp.open("GET", "xml/toDoList.xml", true);
    xmlhttp.send();
}
function addXML(item, dest){
    var x, xmlDoc, newItem, newDest;
    xmlDoc = xml.responseXML;
    newItem = xmlDoc.createElement("item");
//    newDest = xmlDoc.createElement("dest");
    x = xmlDoc.getElementsByTagName("todo")[0];
    x.appendChild(newItem);
//    x.appendChild(newDest);

    xlen = x.childNodes.length;
    y = x.firstChild;
    txt = "";
    for(i = 0; i < xlen; i++){
        if(y.noteType == 1){
        txt += y.nodeName + "<br>";
        }
        y = y.nextSibling;
    }
    document.getElementById("printText").innerHTML = txt;
    //printTable(xml);
}
*/