import guess = require('../lib');

(function() {
	"use strict";

	let css = `position: fixed;
	display: inline-block;
	left: 10%;
	top: 10%;
	width: auto;
	height: auto;
	padding: 2em;
	margin-left: auto;
	margin-right: auto;
	border: solid black 2px;
	z-index: 100000;
	background-color: #294E80;
    color: white;
	text-align: center;`;

	let displayWindow = document.createElement('div');
	displayWindow.setAttribute('id', 'tsguess-window');
	displayWindow.setAttribute('style', css);
	displayWindow.innerHTML = `
		<div>tsguess Browser Type Guesser</div>
		  <div style="font-family: monospace; text-align: left">
            <form onsubmit="return false;">
              <input type="text" length="40" id="tsguess-input" placeholder="Enter any JavaScript identifier or expression" />
              <input type="submit" value="Generate" default id="tsguess-generate"  />
            </form>
		  </div>
		  <textarea id="tsguess-output" style="font-family: monospace; align: center; border: solid black 2px;" rows="40" cols="120" placeholder="Generated .d.ts content will appear here"></textarea>
        </div>
	`;
	window.setTimeout(() => {
		const button = document.getElementById('tsguess-generate') as HTMLInputElement;
		const input = document.getElementById('tsguess-input') as HTMLInputElement;
		const output = document.getElementById('tsguess-output') as HTMLTextAreaElement;
		button.addEventListener("click", () => {
			output.value = guess.generateIdentifierDeclarationFile(input.value, eval(input.value));
		});

        (<any>window)['infer'] = function(name: string) {
            input.value = name;
            button.click();
        };

	}, 10);
	
	document.body.appendChild(displayWindow);
})();
