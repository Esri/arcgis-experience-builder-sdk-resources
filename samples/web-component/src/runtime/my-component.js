class MyComponent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = 'My first component';
  }
}

window.customElements.define('my-component', MyComponent);