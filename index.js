function createText(option) {
    let elem = document.createElement('div');
    let p = document.createElement('p');
    switch (option) {
        case "initial_info":
            p.innerHTML = "Welcome to AnnBgn CV!\n\nType \"help\" for more options";
            break;
        case "help":
            p.innerHTML = "The following commands are availiable:\n\nhelp\tshow this message and exit\nlinks\tview links to github, habr, etc";
            break;
        case '':
        default: //user shouldn't ever get to this default. if it happens, it would be my fault
            break;
    };
    p.innerHTML += "\n";
    elem.appendChild(p);
    return elem;
}

function createLinks() {
    let elem = document.createElement('div');

    let link_github = document.createElement('a');
    link_github.href = "https://github.com/annbgn";
    link_github.innerHTML = "Github";

    let link_habr = document.createElement('a');
    link_habr.href = "https://habr.com/ru/users/annbgn/";
    link_habr.innerHTML = "Habr";

    // todo: remove thus dummy link
    let link_dummy = document.createElement('a');
    link_dummy.href = "https://vjsdvjsj.com/";
    link_dummy.innerHTML = "link_dummy never visited";

    // todo add link to a normal resume, when it will exist

    let link_array = [link_github, link_habr, link_dummy];
    for (var i = 0; i < link_array.length; i++) {
        elem.appendChild(link_array[i]);
    }
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
        case "help":
            new_node = createText(user_input);
            document_console.appendChild(new_node);
            break;
        case "links":
            new_node = createLinks();
            document_console.appendChild(new_node);
            break;
        case 'contacts':
        case 'education':
        case 'skills':
        case 'practice': // working experience
        case 'basic info': // photo, "moscow, russia", interests
        case 'download cv':
            break;
        default:
            new_node = document.createElement('div');
            let p = document.createElement('p');
            p.innerHTML = "The command you entered not supported\nType \"help\" for list of availiable commands\n";
            new_node.appendChild(p);
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
