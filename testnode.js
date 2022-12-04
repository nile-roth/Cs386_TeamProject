import { JSDOM } from "jsdom";
import test      from "node:test";
import assert    from "node:assert";
import describe  from "node:test";

// test ability to set wage
test('setWage', async () => {
    let {document} = await loadHTML("index.html");
    let wageControl = document.getElementById("wage");
    wageControl.value = 36.00;

    assert.equal(wageControl.value, 36.00);
    document = null;
});

// test dollars and cents
test('initialWage', async () => {
    let {document} = await loadHTML("main.html");
    let dollarControl = document.getElementById("dollars");
    let centsControl = document.getElementById("cents");
    let pauseButton = document.getElementById("pause");

    assert.equal(dollarControl.textContent, "0");
    assert.equal(centsControl.textContent, "00");
    
    pauseButton.click();
    document = null;
});

// test timer
test('timerStart', {timeout: 10000, }, async (t) => {
    let {document} = await loadHTML("main.html");
    let secondControl = document.getElementById("second");
    let pauseButton = document.getElementById("pause");
    let resumeButton = document.getElementById("start");
    console.log("Running timer test...");
    
    let startSeconds = secondControl.textContent;
    assert.equal(startSeconds, "00");
    await sleep(2500);
    let twoSeconds = secondControl.textContent;
    assert.equal(twoSeconds, "02");

    pauseButton.click();
    document = null;
});

// test timer
test('timerPause', {timeout: 10000, }, async (t) => {
    let {document} = await loadHTML("main.html");
    let secondControl = document.getElementById("second");
    let pauseButton = document.getElementById("pause");
    let resumeButton = document.getElementById("start");
    console.log("Running pause test...");
    
    await sleep(2500);
    pauseButton.click();
    let pauseSeconds = secondControl.textContent;
    assert.equal(pauseSeconds, "02");
    pauseButton.click();
});    

test('timerResume', {timeout: 10000, }, async (t) => {
    let {document} = await loadHTML("main.html");
    let secondControl = document.getElementById("second");
    let pauseButton = document.getElementById("pause");
    let resumeButton = document.getElementById("start");
    console.log("Running resume test...");
    
    await sleep(2500);
    pauseButton.click();
    await sleep(1000);
    let pauseSeconds = secondControl.textContent;
    assert.equal(pauseSeconds, "02");
    resumeButton.click();
    await sleep(2500);
    let fourSeconds = secondControl.textContent;
    assert.equal(fourSeconds, "04");
        
    pauseButton.click();
});

// test end shift
test('endShift', {timeout: 10000, }, async (t) => {
    let {document} = await loadHTML("main.html");
    let secondControl = document.getElementById("second");
    let endButton = document.getElementById("end");
    console.log("Running end test...");

    await sleep(2500);
    endButton.click();
    
    assert.equal(secondControl.textContent, "02");
});

// test cancel shift
test('cancelShift', {timeout: 10000, }, async (t) => {
    let {document} = await loadHTML("main.html");
    let secondControl = document.getElementById("second");
    let cancelButton = document.getElementById("reset");
    console.log("Running cancel test...");

    await sleep(2500);
    cancelButton.click();
    
    assert.equal(secondControl.textContent, "0");
});

async function loadHTML(file, urlParams="") {
    //let dom = await JSDOM.fromFile(file, {runScripts: "dangerously", resources: "usable", url: "about:blank?" + urlParams});
    let dom = await JSDOM.fromFile(file, {runScripts: "dangerously", resources: "usable", });
    return new Promise((resolve) => {
        dom.window.addEventListener("load", () => {
            resolve({
                window: dom.window,
                document: dom.window.document,
            });
        });
    });
}

async function sleep(milliseconds) {
    return new Promise(r => setTimeout(r, milliseconds));
}