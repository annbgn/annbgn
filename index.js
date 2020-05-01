function createText(option) {
    let elem = document.createElement('div');
    let p = document.createElement('p');
    switch (option) {
        case "initial_info":
            p.innerHTML = "here is initial info about this project\ntype \"help\" for more options";
            break;
        case "help":
            p.innerHTML = "the following commands are availiable:\nhelp\tshow this message and exit";
            break;
        case '':
            break;
        default:
            p.innerHTML = "the command you entered not supported\ntype \"help\" for list of availiable commands";
            break;
    };
    p.innerHTML += "\n";
    elem.appendChild(p);
    return elem;
}

function prosessInput() {
    let user_input = document.getElementById("line").value;
    let document_console = document.getElementById("console");
    let prompt_copy = document.getElementById("active_prompt");
    let line_copy = document.getElementById("line");
    line_copy.value = '';
    
    let history_prompt = document.createElement('p');
    history_prompt.classList = ['prompt'];
    history_prompt.innerHTML = "annbgn>>> ";
    document_console.replaceChild(history_prompt, document.getElementById("active_prompt"));
    let history_command = document.createElement('p');
    history_command.classList = [];
    history_command.innerHTML = user_input;
    document_console.replaceChild(history_command, document.getElementById("line"));

    user_input = user_input.toLocaleLowerCase();
    
    let new_node;
    switch (user_input) {
        case '':
            new_node = createText(user_input);
            document_console.appendChild(new_node);
            break;
        case "help":
            new_node = createText(user_input);
            document_console.appendChild(new_node);
            break;
        default:
            new_node = createText(user_input); // or may be better smth like "kdfksog"
            document_console.appendChild(new_node);
            break;
    }

    
    document_console.appendChild(prompt_copy);
    document_console.appendChild(line_copy);
    line_copy.focus();
}

function overlay_on() {
    document.getElementById("overlay").style.display = "block";
}

function overlay_off() {
    document.getElementById("overlay").style.display = "none";
}

document.getElementById("console").insertBefore(createText("initial_info"), document.getElementById("active_prompt"));
