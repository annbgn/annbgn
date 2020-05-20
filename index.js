function createText(option) {
    let elem = document.createElement('div');
    let p = document.createElement('p');
    switch (option) {
        case "initial_info":
            p.innerHTML = "Welcome to AnnBgn CV!\n\nType \"help\" for more options";
            break;
        case "help":
            p.innerHTML = "The following commands are availiable:\n\nhelp\t\t\tshow this message and exit\nlinks\t\tview links to github, habr, etc\nclear\t\treload terminal\ncontacts\t\temail and phone\neducation\tschools and university\nskills\t\tlanguages\nbasic info\tinfo and photo"; //todo table
            break;
        case 'contacts':
            p.innerHTML = "fake@mail.com\n+7 111 22 33";
            break;
        case 'education':
            p.innerHTML = "Four different schools, with wide range of in-depth studies: medicine, science and literature\nRussian State University for Himanities, Intelligent Systems Department\nBut self-education is the thing that should be valued";
            break;
        case 'skills':
            p.innerHTML = "Russian native\nEnglish, techinal English mostly\nA little German and French with a great desire to improve\n\nPython native\nC/C++/Dlang\nhtml/css/js\nprolog/lisp\nbash\n\ncurrent interest is cv and image processing";
            break;
        case "basic info":
            p.innerHTML = "Anna\n19 y.o.\nMoscow, Russia";
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
    link_dummy.innerHTML = "dummy link";

    // todo add link to a normal cv, when it will exist

    let link_array = [link_github, link_habr, link_dummy];
    for (var i = 0; i < link_array.length; i++) {
        elem.appendChild(link_array[i]);
    }
    return elem;
}

function prosessInput() {
    let user_input = document.getElementById("line").value;
    last_input = user_input;
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
        case "clear":
            window.location.reload(false);
            return;
        case 'contacts':
            new_node = createText(user_input);
            document_console.appendChild(new_node);
            break;
        case 'education':
            new_node = createText(user_input);
            document_console.appendChild(new_node);
            break;
        case 'skills':
            new_node = createText(user_input);
            document_console.appendChild(new_node);
            break;
        case 'basic info': // photo, "moscow, russia", interests
            new_node = createText(user_input);
            let photo = document.createElement('img');
            photo.src = 'https://avatars3.githubusercontent.com/u/47499658';
            let nl = createText('');
            document_console.appendChild(new_node);
            document_console.appendChild(photo);
            document_console.appendChild(nl);
            break;
        case 'practice': // working experience
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

function memorized_input() {
    document.getElementById("line").value = last_input;
}

function overlay_on() {
    document.getElementById("overlay").style.display = "block";
}

function overlay_off() {
    document.getElementById("overlay").style.display = "none";
}

var last_input = ""; //todo list
document.getElementById("console").insertBefore(createText("initial_info"), document.getElementById("active_prompt"));
