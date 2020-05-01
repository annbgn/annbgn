function createText(option) {
    var elem = document.createElement('div');
    switch (option) {
        case "initial_info":
            var p = document.createElement('p');
            elem.appendChild(p);
            p.innerHTML = "here is initial info about this project\ntype \"help\" for more options";
            return elem;
        case "help":
            var p = document.createElement('p');
            elem.appendChild(p);
            p.innerHTML = "the following commands are availiable:\nhelp\tshow this message and exit";
            return elem;
        default:
            var p = document.createElement('p');
            elem.appendChild(p);
            p.innerHTML = "the command you entered not supported\ntype \"help\" for list of availiable commands";
            return elem;
    };
}

function prosessInput() {
    //this.value= '';
    // this.form.submit();
    
    var user_input = document.getElementById("line").value;

}

function overlay_on() {
    document.getElementById("overlay").style.display = "block";
}

function overlay_off() {
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("console").insertBefore(createText("initial_info"),document.getElementById("console").lastChild);
