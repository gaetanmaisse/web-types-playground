import { html } from "lit";

const title = "This is a title";

// required isn't a valid attribute in a button
const element = html`<div>
    <button @click="${(e) => console.log('Button clicked', e)}"
            @mouseup="${(event) => console.log('simple-greeting mouseup', event)}"
            ?required="${true}"
            .title="${title}">
    </button>
</div>
`
