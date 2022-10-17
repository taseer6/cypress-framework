import { proceed_to_checkout } from "./commands";

declare global {
    namespace Cypress {
      interface Chainable {
     
         proceed_to_checkout:typeof proceed_to_checkout
      }
    }
  }

  export {};
