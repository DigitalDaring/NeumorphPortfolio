import { InjectedComponent } from './injected_component';

export class NeumorphCard extends InjectedComponent {

    constructor(){
        super();
    }

    static get componentName(): string {
        return 'neumorph-card';
    }

    get css(): string {
        return `
            :host {
                display:flex;
            }

            .card {
                padding: 24px;
                display: flex;
                flex-direction: column;
                min-width: 100px;
                min-height: 300px;
                background-color: var(--background-color, #fbede9);
                border-radius: 32px;
                border: 1px solid #FFF;
                box-shadow: 12px 12px 40px #e9dcd9,
                           -12px -12px 40px #fffef9;
            }
        `
    }

    get html(): string {
        return `
            <section class="card">
                <slot></slot>
            </section>
        `;
    }
}