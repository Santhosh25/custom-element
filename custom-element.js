(function () {
    // Define the class for a new element called custom-element
    class CustomElement extends Polymer.Element {
        static get is() { return "custom-element"; }
        constructor() {
            super();
            this.textContent = "I'm a custom-element.";
        }
    }
    // Register the new element with the browser
    window.customElements.define(CustomElement.is, CustomElement);
})();