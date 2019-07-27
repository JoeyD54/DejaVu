/**************************************************
* This javascript file handles all event handlers *
* for the program                                 * 
**************************************************/

document.getElementById('insertButton').addEventListener('click', showModal, true);
document.addEventListener('backbutton', onBackKeyDown, false);
document.getElementById('closeScreen').addEventListener('click', closeModal);
document.getElementById('cancelButton').addEventListener('click', closeModal);
document.getElementById('submitButton').addEventListener('click', loadXMLTable);

function onLoad(){
    document.addEventListener('deviceready', showXMLTable, false);

}

function onDeviceReady(){
    //load up the XML table.
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
    document.getElementById('printHere').innerHTML = "Before XML call";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            displayXMLTable(this);
        }
    };
    xhttp.open("GET", "xml/toDoList.xml", true);
    xhttp.send();
}

function displayXMLTable(xml){
    var x, i, list, item, dest, xmlDoc;
    xmlDoc = xml.responseXML;
    item = "";
    dest = "";
    x = xmlDoc.getElementsByTagName('todo');
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
            */            
    }
   document.getElementById('test').innerHTML = 'success';

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