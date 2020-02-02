import {InjectedComponent} from './injected_component';

export class MonitoredData extends InjectedComponent {
    constructor() {
        super();
    }

    static get componentName(): string {
        return 'monitored-data';
    }

    get css(): string {
        return `
            .happening {
                display: flex;
                flex-direction: row;
            }

            neumorph-card:first-child {
                margin-right: 24px;
            }
        `
    }

    get html(): string {
        return `
            <section class="happening">
                <neumorph-card>
                    <h2>WarpCore Output</h2>
                </neumorph-card>
                <neumorph-card>
                    <h2>Trend</h2>
                </neumorph-card>
            </section>
        `;
    }
}