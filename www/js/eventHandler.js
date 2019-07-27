/**************************************************
* This javascript file handles all event handlers *
* for the program                                 * 
**************************************************/

//document.getElementById('doXMLWork').addEventListener('click', loadXMLTable);
//document.addEventListener('deviceready', loadXMLTable());

document.getElementById('insertButton').addEventListener('click', showModal, true);
document.addEventListener('backbutton', onBackKeyDown, false);
document.getElementById('closeScreen').addEventListener('click', closeModal);
document.getElementById('cancelButton').addEventListener('click', closeModal);
document.getElementById('submitButton').addEventListener('click', addToXML);
document.addEventListener('deviceready', loadXMLTable());

function onLoad(){
    document.addEventListener('deviceready', loadXMLTable, false);

}

function onDeviceReady(){
    //load up the XML table.
    //loadXMLTable();
}

function showModal(){
    document.getElementById('toDoModal').style.display='block';
}

function closeModal(){
    document.getElementById('toDoModal').style.display='none';
}

function onBackKeyDown(event){
    if(document.getElementById('toDoModal').style.display="block"){
            document.getElementById('toDoModal').style.display="none";          
    }
}

function loadXMLTable(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            displayXMLTable(this);
        }
    };
    //xmlhttp.open("GET", "xml/toDoList.xml", true);
    xmlhttp.open("GET", "xml/toDoList.xml", true);
    xmlhttp.send();
    /*
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "toDoList.xml", true);
    xhttp.send();
    displayXMLTable(xhttp);
    */
    /*
    var xhttp = new XMLHttpRequest();
    document.getElementById('printHere').innerHTML = xhttp;
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            displayXMLTable(this);
        }
    };
    xhttp.open("GET", "xml/toDoList.xml", true);
    xhttp.send();
    */
}

function displayXMLTable(xml){
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
    /*
    document.getElementById('printHere').innerHTML = xml;
    var x, i, list, item, dest, xmlDoc;
    xmlDoc = xml.responseXML;
    item = "";
    dest = "";
    x = xmlDoc.getElementsByTagName('todo');
    var y = x[0].getElementsByTagName('item')[0].childNodes[0].nodeValue;
    document.getElementById('printHere').innerHTML = y;
    for(i = 0; i < x.length; i++){

        item = x[i].getElementsByTagName('item')[0].childNodes[0].nodeValue;
        dest = x[i].getElementsByTagName('dest')[0].childNodes[0].nodeValue;

        /*
        list += "<li class = 'w3-bar'> <span id = 'removeItem'" +
            "class = 'w3-bar-item w3-button w3-white w3-large w3-right>X</span>" +
            "<div class='w3-bar-item'> " + 
                "<span class='w3-large'>" x[i].getElementsByTagName('item')[0].childNodes[0].nodeValue; "</span>" +
                "<"
            "</div";            
    }
   document.getElementById('printHere').innerHTML = item;
*/
}

/*
//Do I even have JQUERY?
function showXMLTable(){
    $(document).ready(function(){
        $.ajax({
            type:"GET",
            url:"xml/toDoList.xml",
            dataType:"xml",
            success:function(){
                $(xml).find('todo').each(function(){
                    var item = $(this).attr('item').text();
                    var dest = $(this).attr('dest').text();

                    document.getElementById('printHere').innerHTML = "Success";
                })
            }
        })
    });
}
*/