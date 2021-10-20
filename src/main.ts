import { defineCustomElement } from "vue";
import HelloVue from "./HelloVue.ce.vue";
import "./style.css";

customElements.define("hello-vue", defineCustomElement(HelloVue));
