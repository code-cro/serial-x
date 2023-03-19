export class PortView extends HTMLElement {
	constructor() {
		super();
	}

	get portInfo() {
		return JSON.parse(this.getAttribute('port-info'));
	}

	connectedCallback() {
		this.render();
	}
	
	render() {
		let portOptions = document.createElement('port-options');
		portOptions.setAttribute('port', this.portInfo.name);

		let baudSelect = document.createElement('baud-rate');
		let dataBitsSelect = document.createElement('data-bits');
		let paritySelect = document.createElement('parity-type');
		let stopBitsSelect = document.createElement('stop-bits');
		let flowCTRL = document.createElement('flow-ctrl');
		let softwareFlow = document.createElement('software-supported-flow-control');
		let initialLineState = document.createElement('initial-line-state');
		let txPortProperty = document.createElement('port-property');
		txPortProperty.setAttribute('text', 'TX');
		txPortProperty.setAttribute('color', 'green');
		let rxPortProperty = document.createElement('port-property');
		rxPortProperty.setAttribute('text', 'RX');
		rxPortProperty.setAttribute('color', 'red');

		portOptions.appendChild(baudSelect);
		portOptions.appendChild(dataBitsSelect);
		portOptions.appendChild(paritySelect);
		portOptions.appendChild(stopBitsSelect);
		portOptions.appendChild(flowCTRL);
		portOptions.appendChild(softwareFlow);
		portOptions.appendChild(initialLineState);
		portOptions.appendChild(txPortProperty);
		portOptions.appendChild(rxPortProperty);
		
		this.appendChild(portOptions);
	}
}


window.customElements.define('port-view', PortView);