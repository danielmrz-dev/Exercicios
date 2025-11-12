import {
  CommonModule
} from "./chunk-XYFI74FN.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-GSEU53OH.js";

// node_modules/@danielmrz-dev/button/fesm2022/danielmrz-dev-button.mjs
var ButtonComponent = class _ButtonComponent {
  constructor() {
    this.text = "";
    this.variant = "primary";
    this.disabled = false;
    this.theme = "blue";
  }
  getClasses() {
    return `${this.variant} ${this.theme}`;
  }
  static {
    this.ɵfac = function ButtonComponent_Factory(t) {
      return new (t || _ButtonComponent)();
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _ButtonComponent,
      selectors: [["ab-button"]],
      inputs: {
        text: "text",
        variant: "variant",
        disabled: "disabled",
        theme: "theme"
      },
      standalone: true,
      features: [ɵɵStandaloneFeature],
      decls: 2,
      vars: 4,
      consts: [[3, "disabled"]],
      template: function ButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵelementStart(0, "button", 0);
          ɵɵtext(1);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵclassMap(ctx.getClasses());
          ɵɵproperty("disabled", ctx.disabled);
          ɵɵadvance();
          ɵɵtextInterpolate1(" ", ctx.text, "\n");
        }
      },
      dependencies: [CommonModule],
      styles: ["button[_ngcontent-%COMP%]{--ab-primary-text-color: #181818;--ab-secondary-text-color: #5c5c5c;--ab-tertiary-text-color: #747474;--ab-icons: #7c7b7b;--ab-outline: #d7d7d7;--ab-dividers: #ededed;--ab-disabled-text: #8a8a8a;--ab-disabled-bg: #efefef;--ab-boxes: #f8f8f8;--ab-inputs: var(--ab-boxes);--ab-white: #fff;--ab-primary-color: #2d5bff;--ab-secondary-color: #6284fd;--ab-tertiary-color: #96adff;--ab-quaternary-color: #ecf0ff;--ab-hover-color: #1b4af0;--ab-click-color: #002ed0;--ab-error-bg-color: #fff2f2;--ab-error-border-color: #ff3030;--ab-success-bg-color: #e6ffe2;background:var(--ab-primary-color);color:var(--ab-white);padding:.75rem 2rem;border-radius:.5rem;border:none;font-family:sans-serif;font-size:1.125rem;font-weight:400;line-height:1.5rem;letter-spacing:.02em;text-align:center;transition:color .3s,background-color .3s}button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}button[_ngcontent-%COMP%]:focus{outline-color:var(--ab-color-focus, #af4bfe)}button.primary[_ngcontent-%COMP%]:hover{background:var(--ab-hover-color);color:var(--ab-white)}button.primary[_ngcontent-%COMP%]:active{background:var(--ab-click-color);color:var(--ab-white)}button.primary[_ngcontent-%COMP%]:disabled{background:var(--ab-disabled-bg);color:var(--ab-disabled-text)}button.secondary[_ngcontent-%COMP%]{background:var(--ab-quaternary-color);color:var(--ab-primary-color)}button.secondary[_ngcontent-%COMP%]:hover{background:var(--ab-hover-color);color:var(--ab-white)}button.secondary[_ngcontent-%COMP%]:active{background:var(--ab-click-color);color:var(--ab-white)}button.secondary[_ngcontent-%COMP%]:disabled{background:var(--ab-disabled-bg);color:var(--ab-disabled-text)}button.tertiary[_ngcontent-%COMP%]{background:var(--ab-white);color:var(--ab-primary-color)}button.tertiary[_ngcontent-%COMP%]:hover{background:var(--ab-white);color:var(--ab-hover-color)}button.tertiary[_ngcontent-%COMP%]:active{background:var(--ab-white);color:var(--ab-click-color)}button.tertiary[_ngcontent-%COMP%]:disabled{background:var(--ab-white);color:var(--ab-disabled-text)}.violet[_ngcontent-%COMP%]{--ab-primary-color: #af4bfe;--ab-secondary-color: #be74f9;--ab-tertiary-color: #e2bdff;--ab-quaternary-color: #f5e8ff;--ab-hover-color: #a530ff;--ab-click-color: #8e25df;--ab-focus-color: #2d5bff}"]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      selector: "ab-button",
      standalone: true,
      imports: [CommonModule],
      template: '<button [class]="getClasses()" [disabled]="disabled">\n    {{ text }}\n</button>\n',
      styles: ["button{--ab-primary-text-color: #181818;--ab-secondary-text-color: #5c5c5c;--ab-tertiary-text-color: #747474;--ab-icons: #7c7b7b;--ab-outline: #d7d7d7;--ab-dividers: #ededed;--ab-disabled-text: #8a8a8a;--ab-disabled-bg: #efefef;--ab-boxes: #f8f8f8;--ab-inputs: var(--ab-boxes);--ab-white: #fff;--ab-primary-color: #2d5bff;--ab-secondary-color: #6284fd;--ab-tertiary-color: #96adff;--ab-quaternary-color: #ecf0ff;--ab-hover-color: #1b4af0;--ab-click-color: #002ed0;--ab-error-bg-color: #fff2f2;--ab-error-border-color: #ff3030;--ab-success-bg-color: #e6ffe2;background:var(--ab-primary-color);color:var(--ab-white);padding:.75rem 2rem;border-radius:.5rem;border:none;font-family:sans-serif;font-size:1.125rem;font-weight:400;line-height:1.5rem;letter-spacing:.02em;text-align:center;transition:color .3s,background-color .3s}button:disabled{cursor:not-allowed}button:focus{outline-color:var(--ab-color-focus, #af4bfe)}button.primary:hover{background:var(--ab-hover-color);color:var(--ab-white)}button.primary:active{background:var(--ab-click-color);color:var(--ab-white)}button.primary:disabled{background:var(--ab-disabled-bg);color:var(--ab-disabled-text)}button.secondary{background:var(--ab-quaternary-color);color:var(--ab-primary-color)}button.secondary:hover{background:var(--ab-hover-color);color:var(--ab-white)}button.secondary:active{background:var(--ab-click-color);color:var(--ab-white)}button.secondary:disabled{background:var(--ab-disabled-bg);color:var(--ab-disabled-text)}button.tertiary{background:var(--ab-white);color:var(--ab-primary-color)}button.tertiary:hover{background:var(--ab-white);color:var(--ab-hover-color)}button.tertiary:active{background:var(--ab-white);color:var(--ab-click-color)}button.tertiary:disabled{background:var(--ab-white);color:var(--ab-disabled-text)}.violet{--ab-primary-color: #af4bfe;--ab-secondary-color: #be74f9;--ab-tertiary-color: #e2bdff;--ab-quaternary-color: #f5e8ff;--ab-hover-color: #a530ff;--ab-click-color: #8e25df;--ab-focus-color: #2d5bff}\n"]
    }]
  }], null, {
    text: [{
      type: Input
    }],
    variant: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    theme: [{
      type: Input
    }]
  });
})();
export {
  ButtonComponent
};
//# sourceMappingURL=@danielmrz-dev_button.js.map
