export class InjectedComponent extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    static get componentName(): string {
        return '';
    }

    get css(): string {
        return '';
    }

    get html(): string {
        return '';
    }

    render() {
        this.shadow.innerHTML = `
            <style>
                ${this.css}
            </style>
            ${this.html}
        `;
    }
}