let startmenu = document.getElementsByClassName('startmenu')[0];
let windows = document.getElementById('windows');

windows.addEventListener('click', () => {
    console.log('Hey');
    if (startmenu.style.bottom == '-450px') {
        startmenu.style.bottom = '60px';
    }
    else {
        startmenu.style.bottom = '-450px';
    }
});

let search =  document.getElementById('search');

search.addEventListener('click', () => {
    console.log('Hey');
    if (startmenu.style.bottom == '-450px') {
        startmenu.style.bottom = '60px';
    }
    else {
        startmenu.style.bottom = '-450px';
    }
});
let edge =  document.getElementById('edge');
let edgeui = document.getElementsByClassName('edgeui')[0];

edge.addEventListener('click', () => {
    console.log('Hey');
    if (edgeui.style.display == 'none'){
        edgeui.style.display = 'block';
    }
    else {
        edgeui.style.display = 'none';
    }
});
let vscode = document.getElementById('vscode');
let vscodeui = document.getElementsByClassName('vscodeui')[0];

vscode.addEventListener('click' , () => {
    console.log('vscode clicked');
    if (vscodeui.style.display == 'none'){
        vscodeui.style.display = 'block';
    }
    else {
        vscodeui.style.display = 'none';
    }
})
let github = document.getElementById('github');
let githubui = document.getElementsByClassName('githubui')[0];

github.addEventListener('click' , () => {
    console.log('github clicked');
    if (githubui.style.display == 'none'){
        githubui.style.display = 'block';
    }
    else {
        githubui.style.display = 'none';
    }
})
let trash = document.getElementById('trash');
let trashui = document.getElementsByClassName('trashui')[0];

trash.addEventListener('click' , () => {
    console.log('trash clicked');
    if (trashui.style.display == 'none'){
        trashui.style.display = 'block';
    }
    else {
        trashui.style.display = 'none';
    }
})


