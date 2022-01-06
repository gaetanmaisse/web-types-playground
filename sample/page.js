import { html } from "lit";

const title = "This is a title";

const element = html`<div>
    <button @click="${(e) => console.log('Button clicked', e)}"></button>
    <simple-greeting
            @click="${(e) => console.log('simple-greeting clicked', e)}"
            @mouseup="${(event) => console.log('simple-greeting mouseup', event)}"
            ?required="${true}"
            .title="${title}">
    </simple-greeting>
</div>
`
