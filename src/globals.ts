import {CSSObject} from "@techstack/styled-system";

declare module "react" {
  interface Attributes {
    css?: CSSObject;
  }
}