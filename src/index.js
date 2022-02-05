// document.onload = evalWidth('p1');

function evalWidth(panel){
    var firstPanel = document.querySelectorAll('div');
    console.log("selected panel => ", panel);
    firstPanel.forEach(p => {
        if (p.id === panel){
            p.style = "width: var(--panel-width-hover)";
        }
        else{
            p.style = "width: var(--panel-width-extra)";
        }
    });
}
