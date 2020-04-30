function createText(option) {
    var elem = document.createElement('div');
    switch(option){
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
document.getElementById("console").appendChild(createText("initial_info"));