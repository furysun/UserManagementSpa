import $ from 'jquery';

export function main() {
    $(() => {
        const content = `
        <button onclick="goToPageOne()">1</button>
        <button onclick="goToPageTwo()">2</button>
        <button onclick="goToPageThree()">3</button>
        <div id="router-outlet"></div> 
        `;
        $('#main').html(content);
    });

    window.goToPageOne = goToPageOne;
    window.goToPageTwo = goToPageTwo;
    window.goToPageThree = goToPageThree;
    window.onpopstate = onBrowserBack;
}

function onBrowserBack(event) {
    const state = event.state;
    console.log(event.state);
    if (state === 'page1') {
        displayPageOne();
    } else if (state === 'page2') {
        displayPageTwo();
    } else if (state === 'page3') {
        displayPageThree();
    }
}

function goToPageOne() {
    history.pushState('page1', 'page1');
    displayPageOne();
}

function goToPageTwo() {
    history.pushState('page2', 'page2');
    displayPageTwo();
}

function goToPageThree() {
    history.pushState('page3', 'page3');
    displayPageThree();
}

function displayPageOne() {
    const content = `<div id="page-one">1</div>`;
    $('#router-outlet').html(content);
}

function displayPageTwo() {
    const content = `<div id="page-two">2</div>`;
    $('#router-outlet').html(content);
}


function displayPageThree() {
    const content = `<div id="page-three">
<div class="header">
    <img src="./img/diamond.svg">
</div>

<div class="forms">

    <div class="form-log-passw">
         <p>login</p>
        <div><input class="login" type="text"></div>
        <p>password</p>
        <div><input class="password" type="password"></div>
        
        <div><button>ok</button></div>
        
        <div><button>registration</button></div>
        
    </div>
    
</div>

    </div>`;
    $('#router-outlet').html(content);
}