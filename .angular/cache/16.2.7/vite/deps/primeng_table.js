import {
  Calendar,
  CalendarModule
} from "./chunk-YYUX42KL.js";
import {
  InputNumber,
  InputNumberModule,
  Paginator,
  PaginatorModule
} from "./chunk-64QCLJWG.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-XD5LKKZO.js";
import {
  InputText,
  InputTextModule
} from "./chunk-JFU3Z4IM.js";
import {
  Dropdown,
  DropdownModule,
  Scroller,
  ScrollerModule
} from "./chunk-3I7EEYTK.js";
import {
  SpinnerIcon
} from "./chunk-Y6GHBLGK.js";
import {
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel
} from "./chunk-Y57JNKG3.js";
import {
  TimesIcon
} from "./chunk-4QTYKRYE.js";
import {
  Ripple,
  RippleModule
} from "./chunk-LLRXHOVQ.js";
import "./chunk-MTXVLY7I.js";
import "./chunk-W4GQVWQH.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-PCISQTO5.js";
import "./chunk-BZLC2QWV.js";
import "./chunk-OC22UFRG.js";
import {
  BaseIcon
} from "./chunk-2ALXQHTC.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-QTPZL35D.js";
import {
  FilterMatchMode,
  FilterOperator,
  FilterService,
  ObjectUtils,
  OverlayService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  UniqueComponentId,
  zindexutils
} from "./chunk-FSVIF75D.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgSwitch,
  NgSwitchCase,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-YSU6UL2H.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-X7KDTYUN.js";
import {
  Subject
} from "./chunk-CQXG3EQT.js";
import "./chunk-AOF462FV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-SU2WE4RP.js";

// node_modules/primeng/fesm2020/primeng-selectbutton.mjs
function SelectButton_div_1_ng_container_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const option_r1 = ɵɵnextContext(2).$implicit;
    ɵɵclassMap(option_r1.icon);
    ɵɵproperty("ngClass", "p-button-icon p-button-icon-left");
  }
}
function SelectButton_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SelectButton_div_1_ng_container_2_span_1_Template, 1, 3, "span", 6);
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const option_r1 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", option_r1.icon);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r4.getOptionLabel(option_r1));
  }
}
function SelectButton_div_1_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c0 = function(a0, a1) {
  return {
    $implicit: a0,
    index: a1
  };
};
function SelectButton_div_1_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SelectButton_div_1_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext();
    const option_r1 = ctx_r11.$implicit;
    const i_r2 = ctx_r11.index;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c0, option_r1, i_r2));
  }
}
var _c1 = function(a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-disabled": a1,
    "p-button-icon-only": a2
  };
};
function SelectButton_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2, 3);
    ɵɵlistener("click", function SelectButton_div_1_Template_div_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r13);
      const option_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.onItemClick($event, option_r1, i_r2));
    })("keydown.enter", function SelectButton_div_1_Template_div_keydown_enter_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r13);
      const option_r1 = restoredCtx.$implicit;
      const i_r2 = restoredCtx.index;
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.onItemClick($event, option_r1, i_r2));
    })("blur", function SelectButton_div_1_Template_div_blur_0_listener() {
      ɵɵrestoreView(_r13);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.onBlur());
    });
    ɵɵtemplate(2, SelectButton_div_1_ng_container_2_Template, 4, 2, "ng-container", 4);
    ɵɵtemplate(3, SelectButton_div_1_ng_template_3_Template, 1, 5, "ng-template", null, 5, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const _r5 = ɵɵreference(4);
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(option_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction3(10, _c1, ctx_r0.isSelected(option_r1), ctx_r0.disabled || ctx_r0.isOptionDisabled(option_r1), option_r1.icon && !ctx_r0.getOptionLabel(option_r1)));
    ɵɵattribute("aria-pressed", ctx_r0.isSelected(option_r1))("title", option_r1.title)("aria-label", option_r1.label)("tabindex", ctx_r0.disabled ? null : ctx_r0.tabindex)("aria-labelledby", ctx_r0.getOptionLabel(option_r1));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r0.itemTemplate)("ngIfElse", _r5);
  }
}
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class {
  constructor(cd) {
    this.cd = cd;
    this.tabindex = 0;
    this.onOptionClick = new EventEmitter();
    this.onChange = new EventEmitter();
    this.onModelChange = () => {
    };
    this.onModelTouched = () => {
    };
  }
  getOptionLabel(option) {
    return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  onItemClick(event, option, index) {
    if (this.disabled || this.isOptionDisabled(option)) {
      return;
    }
    if (this.multiple) {
      if (this.isSelected(option))
        this.removeOption(option);
      else
        this.value = [...this.value || [], this.getOptionValue(option)];
      this.onModelChange(this.value);
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
    } else {
      let value = this.getOptionValue(option);
      if (this.value !== value) {
        this.value = this.getOptionValue(option);
        this.onModelChange(this.value);
        this.onChange.emit({
          originalEvent: event,
          value: this.value
        });
      }
    }
    this.onOptionClick.emit({
      originalEvent: event,
      option,
      index
    });
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !ObjectUtils.equals(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    let optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (ObjectUtils.equals(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = ObjectUtils.equals(this.getOptionValue(option), this.value, this.dataKey);
    }
    return selected;
  }
};
SelectButton.ɵfac = function SelectButton_Factory(t) {
  return new (t || SelectButton)(ɵɵdirectiveInject(ChangeDetectorRef));
};
SelectButton.ɵcmp = ɵɵdefineComponent({
  type: SelectButton,
  selectors: [["p-selectButton"]],
  contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateRef, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    options: "options",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    optionDisabled: "optionDisabled",
    tabindex: "tabindex",
    multiple: "multiple",
    style: "style",
    styleClass: "styleClass",
    ariaLabelledBy: "ariaLabelledBy",
    disabled: "disabled",
    dataKey: "dataKey"
  },
  outputs: {
    onOptionClick: "onOptionClick",
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR])],
  decls: 2,
  vars: 5,
  consts: [["role", "group", 3, "ngClass", "ngStyle"], ["class", "p-button p-component", "role", "button", "pRipple", "", 3, "class", "ngClass", "click", "keydown.enter", "blur", 4, "ngFor", "ngForOf"], ["role", "button", "pRipple", "", 1, "p-button", "p-component", 3, "ngClass", "click", "keydown.enter", "blur"], ["btn", ""], [4, "ngIf", "ngIfElse"], ["customcontent", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "p-button-label"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function SelectButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, SelectButton_div_1_Template, 5, 14, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", "p-selectbutton p-buttonset p-component")("ngStyle", ctx.style);
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.options);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple],
  styles: ['.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0 none}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}\n'],
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton",
      template: `
        <div [ngClass]="'p-selectbutton p-buttonset p-component'" [ngStyle]="style" [class]="styleClass" role="group">
            <div
                *ngFor="let option of options; let i = index"
                #btn
                class="p-button p-component"
                [class]="option.styleClass"
                role="button"
                [attr.aria-pressed]="isSelected(option)"
                [ngClass]="{ 'p-highlight': isSelected(option), 'p-disabled': disabled || isOptionDisabled(option), 'p-button-icon-only': option.icon && !getOptionLabel(option) }"
                (click)="onItemClick($event, option, i)"
                (keydown.enter)="onItemClick($event, option, i)"
                [attr.title]="option.title"
                [attr.aria-label]="option.label"
                (blur)="onBlur()"
                [attr.tabindex]="disabled ? null : tabindex"
                [attr.aria-labelledby]="this.getOptionLabel(option)"
                pRipple
            >
                <ng-container *ngIf="!itemTemplate; else customcontent">
                    <span [ngClass]="'p-button-icon p-button-icon-left'" [class]="option.icon" *ngIf="option.icon"></span>
                    <span class="p-button-label">{{ getOptionLabel(option) }}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                </ng-template>
            </div>
        </div>
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ['.p-button{margin:0;display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;vertical-align:bottom;text-align:center;overflow:hidden;position:relative}.p-button-label{flex:1 1 auto}.p-button-icon-right{order:1}.p-button:disabled{cursor:default}.p-button-icon-only{justify-content:center}.p-button-icon-only:after{content:"p";visibility:hidden;clip:rect(0 0 0 0);width:0}.p-button-vertical{flex-direction:column}.p-button-icon-bottom{order:2}.p-buttonset .p-button{margin:0}.p-buttonset .p-button:not(:last-child){border-right:0 none}.p-buttonset .p-button:not(:first-of-type):not(:last-of-type){border-radius:0}.p-buttonset .p-button:first-of-type{border-top-right-radius:0;border-bottom-right-radius:0}.p-buttonset .p-button:last-of-type{border-top-left-radius:0;border-bottom-left-radius:0}.p-buttonset .p-button:focus{position:relative;z-index:1}\n']
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    options: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [TemplateRef]
    }]
  });
})();
var SelectButtonModule = class {
};
SelectButtonModule.ɵfac = function SelectButtonModule_Factory(t) {
  return new (t || SelectButtonModule)();
};
SelectButtonModule.ɵmod = ɵɵdefineNgModule({
  type: SelectButtonModule,
  declarations: [SelectButton],
  imports: [CommonModule, RippleModule],
  exports: [SelectButton]
});
SelectButtonModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, RippleModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule],
      exports: [SelectButton],
      declarations: [SelectButton]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-check.mjs
var CheckIcon = class extends BaseIcon {
};
CheckIcon.ɵfac = function() {
  let ɵCheckIcon_BaseFactory;
  return function CheckIcon_Factory(t) {
    return (ɵCheckIcon_BaseFactory || (ɵCheckIcon_BaseFactory = ɵɵgetInheritedFactory(CheckIcon)))(t || CheckIcon);
  };
}();
CheckIcon.ɵcmp = ɵɵdefineComponent({
  type: CheckIcon,
  selectors: [["CheckIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 2,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z", "fill", "currentColor"]],
  template: function CheckIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0);
      ɵɵelement(1, "path", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.getClassNames());
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckIcon, [{
    type: Component,
    args: [{
      selector: "CheckIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-tristatecheckbox.mjs
function TriStateCheckbox_ng_container_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r4.checkboxTrueIcon);
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_5_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.checkIconTemplate);
  }
}
function TriStateCheckbox_ng_container_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_5_ng_container_2_CheckIcon_1_Template, 1, 1, "CheckIcon", 9);
    ɵɵtemplate(2, TriStateCheckbox_ng_container_5_ng_container_2_span_2_Template, 2, 1, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.checkIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.checkIconTemplate);
  }
}
function TriStateCheckbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_5_span_1_Template, 1, 1, "span", 7);
    ɵɵtemplate(2, TriStateCheckbox_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.checkboxTrueIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.checkboxTrueIcon);
  }
}
function TriStateCheckbox_ng_container_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r10.checkboxFalseIcon);
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_6_ng_container_2_span_2_1_Template, 1, 0, null, 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r13.uncheckIconTemplate);
  }
}
function TriStateCheckbox_ng_container_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_6_ng_container_2_TimesIcon_1_Template, 1, 1, "TimesIcon", 9);
    ɵɵtemplate(2, TriStateCheckbox_ng_container_6_ng_container_2_span_2_Template, 2, 1, "span", 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r11.uncheckIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r11.uncheckIconTemplate);
  }
}
function TriStateCheckbox_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TriStateCheckbox_ng_container_6_span_1_Template, 1, 1, "span", 7);
    ɵɵtemplate(2, TriStateCheckbox_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 5);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.checkboxFalseIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.checkboxFalseIcon);
  }
}
var _c02 = function(a0, a1, a2) {
  return {
    "p-checkbox-label-active": a0,
    "p-disabled": a1,
    "p-checkbox-label-focus": a2
  };
};
function TriStateCheckbox_label_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "label", 14);
    ɵɵlistener("click", function TriStateCheckbox_label_7_Template_label_click_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext();
      const _r0 = ɵɵreference(3);
      return ɵɵresetView(ctx_r16.onClick($event, _r0));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction3(3, _c02, ctx_r3.value != null, ctx_r3.disabled, ctx_r3.focused));
    ɵɵattribute("for", ctx_r3.inputId);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.label);
  }
}
var _c12 = function(a1, a2) {
  return {
    "p-checkbox p-component": true,
    "p-checkbox-disabled": a1,
    "p-checkbox-focused": a2
  };
};
var _c2 = function(a0, a1, a2) {
  return {
    "p-highlight": a0,
    "p-disabled": a1,
    "p-focus": a2
  };
};
var TRISTATECHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TriStateCheckbox),
  multi: true
};
var TriStateCheckbox = class {
  constructor(cd) {
    this.cd = cd;
    this.onChange = new EventEmitter();
    this.onModelChange = () => {
    };
    this.onModelTouched = () => {
    };
  }
  onClick(event, input) {
    if (!this.disabled && !this.readonly) {
      this.toggle(event);
      this.focused = true;
      input.focus();
    }
  }
  onKeydown(event) {
    if (event.keyCode == 32) {
      event.preventDefault();
    }
  }
  onKeyup(event) {
    if (event.keyCode == 32 && !this.readonly) {
      this.toggle(event);
      event.preventDefault();
    }
  }
  toggle(event) {
    if (this.value == null || this.value == void 0)
      this.value = true;
    else if (this.value == true)
      this.value = false;
    else if (this.value == false)
      this.value = null;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "checkicon":
          this.checkIconTemplate = item.template;
          break;
        case "uncheckicon":
          this.uncheckIconTemplate = item.template;
          break;
      }
    });
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  writeValue(value) {
    this.value = value;
    this.cd.markForCheck();
  }
  setDisabledState(disabled) {
    this.disabled = disabled;
    this.cd.markForCheck();
  }
};
TriStateCheckbox.ɵfac = function TriStateCheckbox_Factory(t) {
  return new (t || TriStateCheckbox)(ɵɵdirectiveInject(ChangeDetectorRef));
};
TriStateCheckbox.ɵcmp = ɵɵdefineComponent({
  type: TriStateCheckbox,
  selectors: [["p-triStateCheckbox"]],
  contentQueries: function TriStateCheckbox_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    name: "name",
    ariaLabelledBy: "ariaLabelledBy",
    tabindex: "tabindex",
    inputId: "inputId",
    style: "style",
    styleClass: "styleClass",
    label: "label",
    readonly: "readonly",
    checkboxTrueIcon: "checkboxTrueIcon",
    checkboxFalseIcon: "checkboxFalseIcon"
  },
  outputs: {
    onChange: "onChange"
  },
  features: [ɵɵProvidersFeature([TRISTATECHECKBOX_VALUE_ACCESSOR])],
  decls: 8,
  vars: 22,
  consts: [[3, "ngStyle", "ngClass"], [1, "p-hidden-accessible"], ["type", "text", "inputmode", "none", 3, "name", "readonly", "disabled", "keyup", "keydown", "focus", "blur"], ["input", ""], ["role", "checkbox", 1, "p-checkbox-box", 3, "ngClass", "click"], [4, "ngIf"], ["class", "p-checkbox-label", 3, "ngClass", "click", 4, "ngIf"], ["class", "p-checkbox-icon", 3, "ngClass", 4, "ngIf"], [1, "p-checkbox-icon", 3, "ngClass"], [3, "styleClass", 4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet"], [1, "p-checkbox-label", 3, "ngClass", "click"]],
  template: function TriStateCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      const _r18 = ɵɵgetCurrentView();
      ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "input", 2, 3);
      ɵɵlistener("keyup", function TriStateCheckbox_Template_input_keyup_2_listener($event) {
        return ctx.onKeyup($event);
      })("keydown", function TriStateCheckbox_Template_input_keydown_2_listener($event) {
        return ctx.onKeydown($event);
      })("focus", function TriStateCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TriStateCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      ɵɵelementEnd()();
      ɵɵelementStart(4, "div", 4);
      ɵɵlistener("click", function TriStateCheckbox_Template_div_click_4_listener($event) {
        ɵɵrestoreView(_r18);
        const _r0 = ɵɵreference(3);
        return ɵɵresetView(ctx.onClick($event, _r0));
      });
      ɵɵtemplate(5, TriStateCheckbox_ng_container_5_Template, 3, 2, "ng-container", 5);
      ɵɵtemplate(6, TriStateCheckbox_ng_container_6_Template, 3, 2, "ng-container", 5);
      ɵɵelementEnd()();
      ɵɵtemplate(7, TriStateCheckbox_label_7_Template, 2, 7, "label", 6);
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction2(15, _c12, ctx.disabled, ctx.focused));
      ɵɵadvance(2);
      ɵɵproperty("name", ctx.name)("readonly", ctx.readonly)("disabled", ctx.disabled);
      ɵɵattribute("id", ctx.inputId)("tabindex", ctx.tabindex)("aria-labelledby", ctx.ariaLabelledBy);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ɵɵpureFunction3(18, _c2, ctx.value != null, ctx.disabled, ctx.focused));
      ɵɵattribute("aria-checked", ctx.value === true);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.value === true);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.value === false);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.label);
    }
  },
  dependencies: function() {
    return [NgClass, NgIf, NgTemplateOutlet, NgStyle, CheckIcon, TimesIcon];
  },
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriStateCheckbox, [{
    type: Component,
    args: [{
      selector: "p-triStateCheckbox",
      template: `
        <div [ngStyle]="style" [ngClass]="{ 'p-checkbox p-component': true, 'p-checkbox-disabled': disabled, 'p-checkbox-focused': focused }" [class]="styleClass">
            <div class="p-hidden-accessible">
                <input
                    #input
                    type="text"
                    [attr.id]="inputId"
                    [name]="name"
                    [attr.tabindex]="tabindex"
                    [readonly]="readonly"
                    [disabled]="disabled"
                    (keyup)="onKeyup($event)"
                    (keydown)="onKeydown($event)"
                    (focus)="onFocus()"
                    (blur)="onBlur()"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    inputmode="none"
                />
            </div>
            <div class="p-checkbox-box" (click)="onClick($event, input)" role="checkbox" [attr.aria-checked]="value === true" [ngClass]="{ 'p-highlight': value != null, 'p-disabled': disabled, 'p-focus': focused }">
                <ng-container *ngIf="value === true">
                    <span *ngIf="checkboxTrueIcon" [ngClass]="checkboxTrueIcon" class="p-checkbox-icon"></span>
                    <ng-container *ngIf="!checkboxTrueIcon">
                        <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="!checkIconTemplate"/>
                        <span *ngIf="checkIconTemplate" class="p-checkbox-icon">
                            <ng-template *ngTemplateOutlet="checkIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
                <ng-container *ngIf="value === false">
                    <span *ngIf="checkboxFalseIcon" [ngClass]="checkboxFalseIcon" class="p-checkbox-icon"></span>
                    <ng-container *ngIf="!checkboxFalseIcon">
                        <TimesIcon [styleClass]="'p-checkbox-icon'" *ngIf="!uncheckIconTemplate" />
                        <span class="p-checkbox-icon" *ngIf="uncheckIconTemplate">
                            <ng-template *ngTemplateOutlet="uncheckIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </ng-container>
        </div>
        </div>
        <label class="p-checkbox-label" (click)="onClick($event, input)" [ngClass]="{ 'p-checkbox-label-active': value != null, 'p-disabled': disabled, 'p-checkbox-label-focus': focused }" *ngIf="label" [attr.for]="inputId">{{ label }}</label>
    `,
      providers: [TRISTATECHECKBOX_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    checkboxTrueIcon: [{
      type: Input
    }],
    checkboxFalseIcon: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TriStateCheckboxModule = class {
};
TriStateCheckboxModule.ɵfac = function TriStateCheckboxModule_Factory(t) {
  return new (t || TriStateCheckboxModule)();
};
TriStateCheckboxModule.ɵmod = ɵɵdefineNgModule({
  type: TriStateCheckboxModule,
  declarations: [TriStateCheckbox],
  imports: [CommonModule, SharedModule, CheckIcon, TimesIcon],
  exports: [TriStateCheckbox, SharedModule]
});
TriStateCheckboxModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, CheckIcon, TimesIcon, SharedModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TriStateCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, CheckIcon, TimesIcon],
      exports: [TriStateCheckbox, SharedModule],
      declarations: [TriStateCheckbox]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-arrowdown.mjs
var ArrowDownIcon = class extends BaseIcon {
};
ArrowDownIcon.ɵfac = function() {
  let ɵArrowDownIcon_BaseFactory;
  return function ArrowDownIcon_Factory(t) {
    return (ɵArrowDownIcon_BaseFactory || (ɵArrowDownIcon_BaseFactory = ɵɵgetInheritedFactory(ArrowDownIcon)))(t || ArrowDownIcon);
  };
}();
ArrowDownIcon.ɵcmp = ɵɵdefineComponent({
  type: ArrowDownIcon,
  selectors: [["ArrowDownIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_326_12468)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z", "fill", "currentColor"], ["id", "clip0_326_12468"], ["width", "14", "height", "14", "fill", "white"]],
  template: function ArrowDownIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "path", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "defs")(4, "clipPath", 3);
      ɵɵelement(5, "rect", 4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.getClassNames());
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrowDownIcon, [{
    type: Component,
    args: [{
      selector: "ArrowDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g clip-path="url(#clip0_326_12468)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.99994 14C6.91097 14.0004 6.82281 13.983 6.74064 13.9489C6.65843 13.9148 6.58387 13.8646 6.52133 13.8013L1.10198 8.38193C0.982318 8.25351 0.917175 8.08367 0.920272 7.90817C0.923368 7.73267 0.994462 7.56523 1.11858 7.44111C1.24269 7.317 1.41014 7.2459 1.58563 7.2428C1.76113 7.23971 1.93098 7.30485 2.0594 7.42451L6.32263 11.6877V0.677419C6.32263 0.497756 6.394 0.325452 6.52104 0.198411C6.64808 0.0713706 6.82039 0 7.00005 0C7.17971 0 7.35202 0.0713706 7.47906 0.198411C7.6061 0.325452 7.67747 0.497756 7.67747 0.677419V11.6877L11.9407 7.42451C12.0691 7.30485 12.2389 7.23971 12.4144 7.2428C12.5899 7.2459 12.7574 7.317 12.8815 7.44111C13.0056 7.56523 13.0767 7.73267 13.0798 7.90817C13.0829 8.08367 13.0178 8.25351 12.8981 8.38193L7.47875 13.8013C7.41621 13.8646 7.34164 13.9148 7.25944 13.9489C7.17727 13.983 7.08912 14.0004 7.00015 14C7.00012 14 7.00009 14 7.00005 14C7.00001 14 6.99998 14 6.99994 14Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_326_12468">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-arrowup.mjs
var ArrowUpIcon = class extends BaseIcon {
};
ArrowUpIcon.ɵfac = function() {
  let ɵArrowUpIcon_BaseFactory;
  return function ArrowUpIcon_Factory(t) {
    return (ɵArrowUpIcon_BaseFactory || (ɵArrowUpIcon_BaseFactory = ɵɵgetInheritedFactory(ArrowUpIcon)))(t || ArrowUpIcon);
  };
}();
ArrowUpIcon.ɵcmp = ɵɵdefineComponent({
  type: ArrowUpIcon,
  selectors: [["ArrowUpIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_326_12509)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z", "fill", "currentColor"], ["id", "clip0_326_12509"], ["width", "14", "height", "14", "fill", "white"]],
  template: function ArrowUpIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "path", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "defs")(4, "clipPath", 3);
      ɵɵelement(5, "rect", 4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.getClassNames());
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArrowUpIcon, [{
    type: Component,
    args: [{
      selector: "ArrowUpIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g clip-path="url(#clip0_326_12509)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.51551 13.799C6.64205 13.9255 6.813 13.9977 6.99193 14C7.17087 13.9977 7.34182 13.9255 7.46835 13.799C7.59489 13.6725 7.66701 13.5015 7.66935 13.3226V2.31233L11.9326 6.57554C11.9951 6.63887 12.0697 6.68907 12.1519 6.72319C12.2341 6.75731 12.3223 6.77467 12.4113 6.77425C12.5003 6.77467 12.5885 6.75731 12.6707 6.72319C12.7529 6.68907 12.8274 6.63887 12.89 6.57554C13.0168 6.44853 13.0881 6.27635 13.0881 6.09683C13.0881 5.91732 13.0168 5.74514 12.89 5.61812L7.48846 0.216594C7.48274 0.210436 7.4769 0.204374 7.47094 0.198411C7.3439 0.0713707 7.1716 0 6.99193 0C6.81227 0 6.63997 0.0713707 6.51293 0.198411C6.50704 0.204296 6.50128 0.210278 6.49563 0.216354L1.09386 5.61812C0.974201 5.74654 0.909057 5.91639 0.912154 6.09189C0.91525 6.26738 0.986345 6.43483 1.11046 6.55894C1.23457 6.68306 1.40202 6.75415 1.57752 6.75725C1.75302 6.76035 1.92286 6.6952 2.05128 6.57554L6.31451 2.31231V13.3226C6.31685 13.5015 6.38898 13.6725 6.51551 13.799Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_326_12509">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-filter.mjs
var FilterIcon = class extends BaseIcon {
};
FilterIcon.ɵfac = function() {
  let ɵFilterIcon_BaseFactory;
  return function FilterIcon_Factory(t) {
    return (ɵFilterIcon_BaseFactory || (ɵFilterIcon_BaseFactory = ɵɵgetInheritedFactory(FilterIcon)))(t || FilterIcon);
  };
}();
FilterIcon.ɵcmp = ɵɵdefineComponent({
  type: FilterIcon,
  selectors: [["FilterIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_390_17708)"], ["d", "M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z", "fill", "currentColor"], ["id", "clip0_390_17708"], ["width", "14", "height", "14", "fill", "white"]],
  template: function FilterIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "path", 2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "defs")(4, "clipPath", 3);
      ɵɵelement(5, "rect", 4);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.getClassNames());
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterIcon, [{
    type: Component,
    args: [{
      selector: "FilterIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g clip-path="url(#clip0_390_17708)">
                <path
                    d="M8.64708 14H5.35296C5.18981 13.9979 5.03395 13.9321 4.91858 13.8167C4.8032 13.7014 4.73745 13.5455 4.73531 13.3824V7L0.329431 0.98C0.259794 0.889466 0.217389 0.780968 0.20718 0.667208C0.19697 0.553448 0.219379 0.439133 0.271783 0.337647C0.324282 0.236453 0.403423 0.151519 0.500663 0.0920138C0.597903 0.0325088 0.709548 0.000692754 0.823548 0H13.1765C13.2905 0.000692754 13.4021 0.0325088 13.4994 0.0920138C13.5966 0.151519 13.6758 0.236453 13.7283 0.337647C13.7807 0.439133 13.8031 0.553448 13.7929 0.667208C13.7826 0.780968 13.7402 0.889466 13.6706 0.98L9.26472 7V13.3824C9.26259 13.5455 9.19683 13.7014 9.08146 13.8167C8.96609 13.9321 8.81022 13.9979 8.64708 14ZM5.97061 12.7647H8.02943V6.79412C8.02878 6.66289 8.07229 6.53527 8.15296 6.43177L11.9412 1.23529H2.05884L5.86355 6.43177C5.94422 6.53527 5.98773 6.66289 5.98708 6.79412L5.97061 12.7647Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_390_17708">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-sortalt.mjs
var SortAltIcon = class extends BaseIcon {
};
SortAltIcon.ɵfac = function() {
  let ɵSortAltIcon_BaseFactory;
  return function SortAltIcon_Factory(t) {
    return (ɵSortAltIcon_BaseFactory || (ɵSortAltIcon_BaseFactory = ɵɵgetInheritedFactory(SortAltIcon)))(t || SortAltIcon);
  };
}();
SortAltIcon.ɵcmp = ɵɵdefineComponent({
  type: SortAltIcon,
  selectors: [["SortAltIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 9,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_378_15529)"], ["d", "M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z", "fill", "currentColor"], ["d", "M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z", "fill", "currentColor"], ["d", "M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z", "fill", "currentColor"], ["d", "M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z", "fill", "currentColor"], ["id", "clip0_378_15529"], ["width", "14", "height", "14", "fill", "white"]],
  template: function SortAltIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5);
      ɵɵelementEnd();
      ɵɵelementStart(6, "defs")(7, "clipPath", 6);
      ɵɵelement(8, "rect", 7);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.getClassNames());
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortAltIcon, [{
    type: Component,
    args: [{
      selector: "SortAltIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g clip-path="url(#clip0_378_15529)">
                <path
                    d="M5.64515 3.61291C5.47353 3.61291 5.30192 3.54968 5.16644 3.4142L3.38708 1.63484L1.60773 3.4142C1.34579 3.67613 0.912244 3.67613 0.650309 3.4142C0.388374 3.15226 0.388374 2.71871 0.650309 2.45678L2.90837 0.198712C3.17031 -0.0632236 3.60386 -0.0632236 3.86579 0.198712L6.12386 2.45678C6.38579 2.71871 6.38579 3.15226 6.12386 3.4142C5.98837 3.54968 5.81676 3.61291 5.64515 3.61291Z"
                    fill="currentColor"
                />
                <path d="M3.38714 14C3.01681 14 2.70972 13.6929 2.70972 13.3226V0.677419C2.70972 0.307097 3.01681 0 3.38714 0C3.75746 0 4.06456 0.307097 4.06456 0.677419V13.3226C4.06456 13.6929 3.75746 14 3.38714 14Z" fill="currentColor" />
                <path
                    d="M10.6129 14C10.4413 14 10.2697 13.9368 10.1342 13.8013L7.87611 11.5432C7.61418 11.2813 7.61418 10.8477 7.87611 10.5858C8.13805 10.3239 8.5716 10.3239 8.83353 10.5858L10.6129 12.3652L12.3922 10.5858C12.6542 10.3239 13.0877 10.3239 13.3497 10.5858C13.6116 10.8477 13.6116 11.2813 13.3497 11.5432L11.0916 13.8013C10.9561 13.9368 10.7845 14 10.6129 14Z"
                    fill="currentColor"
                />
                <path d="M10.6129 14C10.2426 14 9.93552 13.6929 9.93552 13.3226V0.677419C9.93552 0.307097 10.2426 0 10.6129 0C10.9833 0 11.2904 0.307097 11.2904 0.677419V13.3226C11.2904 13.6929 10.9832 14 10.6129 14Z" fill="currentColor" />
            </g>
            <defs>
                <clipPath id="clip0_378_15529">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-sortamountdown.mjs
var SortAmountDownIcon = class extends BaseIcon {
};
SortAmountDownIcon.ɵfac = function() {
  let ɵSortAmountDownIcon_BaseFactory;
  return function SortAmountDownIcon_Factory(t) {
    return (ɵSortAmountDownIcon_BaseFactory || (ɵSortAmountDownIcon_BaseFactory = ɵɵgetInheritedFactory(SortAmountDownIcon)))(t || SortAmountDownIcon);
  };
}();
SortAmountDownIcon.ɵcmp = ɵɵdefineComponent({
  type: SortAmountDownIcon,
  selectors: [["SortAmountDownIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 11,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_378_15544)"], ["d", "M2.59836 13.2009C2.44634 13.2009 2.29432 13.1449 2.1743 13.0248L0.174024 11.0246C-0.0580081 10.7925 -0.0580081 10.4085 0.174024 10.1764C0.406057 9.94441 0.79011 9.94441 1.02214 10.1764L2.59836 11.7527L4.17458 10.1764C4.40662 9.94441 4.79067 9.94441 5.0227 10.1764C5.25473 10.4085 5.25473 10.7925 5.0227 11.0246L3.02242 13.0248C2.90241 13.1449 2.75038 13.2009 2.59836 13.2009Z", "fill", "currentColor"], ["d", "M2.59836 13.2009C2.27032 13.2009 1.99833 12.9288 1.99833 12.6008V1.39922C1.99833 1.07117 2.27036 0.799133 2.59841 0.799133C2.92646 0.799133 3.19849 1.07117 3.19849 1.39922V12.6008C3.19849 12.9288 2.92641 13.2009 2.59836 13.2009Z", "fill", "currentColor"], ["d", "M13.3999 11.2006H6.99902C6.67098 11.2006 6.39894 10.9285 6.39894 10.6005C6.39894 10.2725 6.67098 10.0004 6.99902 10.0004H13.3999C13.728 10.0004 14 10.2725 14 10.6005C14 10.9285 13.728 11.2006 13.3999 11.2006Z", "fill", "currentColor"], ["d", "M10.1995 6.39991H6.99902C6.67098 6.39991 6.39894 6.12788 6.39894 5.79983C6.39894 5.47179 6.67098 5.19975 6.99902 5.19975H10.1995C10.5275 5.19975 10.7996 5.47179 10.7996 5.79983C10.7996 6.12788 10.5275 6.39991 10.1995 6.39991Z", "fill", "currentColor"], ["d", "M8.59925 3.99958H6.99902C6.67098 3.99958 6.39894 3.72754 6.39894 3.3995C6.39894 3.07145 6.67098 2.79941 6.99902 2.79941H8.59925C8.92729 2.79941 9.19933 3.07145 9.19933 3.3995C9.19933 3.72754 8.92729 3.99958 8.59925 3.99958Z", "fill", "currentColor"], ["d", "M11.7997 8.80025H6.99902C6.67098 8.80025 6.39894 8.52821 6.39894 8.20017C6.39894 7.87212 6.67098 7.60008 6.99902 7.60008H11.7997C12.1277 7.60008 12.3998 7.87212 12.3998 8.20017C12.3998 8.52821 12.1277 8.80025 11.7997 8.80025Z", "fill", "currentColor"], ["id", "clip0_378_15544"], ["width", "14", "height", "14", "fill", "white"]],
  template: function SortAmountDownIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "defs")(9, "clipPath", 8);
      ɵɵelement(10, "rect", 9);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.getClassNames());
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortAmountDownIcon, [{
    type: Component,
    args: [{
      selector: "SortAmountDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g clip-path="url(#clip0_378_15544)">
                <path
                    d="M2.59836 13.2009C2.44634 13.2009 2.29432 13.1449 2.1743 13.0248L0.174024 11.0246C-0.0580081 10.7925 -0.0580081 10.4085 0.174024 10.1764C0.406057 9.94441 0.79011 9.94441 1.02214 10.1764L2.59836 11.7527L4.17458 10.1764C4.40662 9.94441 4.79067 9.94441 5.0227 10.1764C5.25473 10.4085 5.25473 10.7925 5.0227 11.0246L3.02242 13.0248C2.90241 13.1449 2.75038 13.2009 2.59836 13.2009Z"
                    fill="currentColor"
                />
                <path
                    d="M2.59836 13.2009C2.27032 13.2009 1.99833 12.9288 1.99833 12.6008V1.39922C1.99833 1.07117 2.27036 0.799133 2.59841 0.799133C2.92646 0.799133 3.19849 1.07117 3.19849 1.39922V12.6008C3.19849 12.9288 2.92641 13.2009 2.59836 13.2009Z"
                    fill="currentColor"
                />
                <path
                    d="M13.3999 11.2006H6.99902C6.67098 11.2006 6.39894 10.9285 6.39894 10.6005C6.39894 10.2725 6.67098 10.0004 6.99902 10.0004H13.3999C13.728 10.0004 14 10.2725 14 10.6005C14 10.9285 13.728 11.2006 13.3999 11.2006Z"
                    fill="currentColor"
                />
                <path
                    d="M10.1995 6.39991H6.99902C6.67098 6.39991 6.39894 6.12788 6.39894 5.79983C6.39894 5.47179 6.67098 5.19975 6.99902 5.19975H10.1995C10.5275 5.19975 10.7996 5.47179 10.7996 5.79983C10.7996 6.12788 10.5275 6.39991 10.1995 6.39991Z"
                    fill="currentColor"
                />
                <path
                    d="M8.59925 3.99958H6.99902C6.67098 3.99958 6.39894 3.72754 6.39894 3.3995C6.39894 3.07145 6.67098 2.79941 6.99902 2.79941H8.59925C8.92729 2.79941 9.19933 3.07145 9.19933 3.3995C9.19933 3.72754 8.92729 3.99958 8.59925 3.99958Z"
                    fill="currentColor"
                />
                <path
                    d="M11.7997 8.80025H6.99902C6.67098 8.80025 6.39894 8.52821 6.39894 8.20017C6.39894 7.87212 6.67098 7.60008 6.99902 7.60008H11.7997C12.1277 7.60008 12.3998 7.87212 12.3998 8.20017C12.3998 8.52821 12.1277 8.80025 11.7997 8.80025Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_378_15544">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-sortamountupalt.mjs
var SortAmountUpAltIcon = class extends BaseIcon {
};
SortAmountUpAltIcon.ɵfac = function() {
  let ɵSortAmountUpAltIcon_BaseFactory;
  return function SortAmountUpAltIcon_Factory(t) {
    return (ɵSortAmountUpAltIcon_BaseFactory || (ɵSortAmountUpAltIcon_BaseFactory = ɵɵgetInheritedFactory(SortAmountUpAltIcon)))(t || SortAmountUpAltIcon);
  };
}();
SortAmountUpAltIcon.ɵcmp = ɵɵdefineComponent({
  type: SortAmountUpAltIcon,
  selectors: [["SortAmountUpAltIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 11,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_378_15578)"], ["d", "M4.59864 3.99958C4.44662 3.99958 4.2946 3.94357 4.17458 3.82356L2.59836 2.24734L1.02214 3.82356C0.79011 4.05559 0.406057 4.05559 0.174024 3.82356C-0.0580081 3.59152 -0.0580081 3.20747 0.174024 2.97544L2.1743 0.97516C2.40634 0.743127 2.79039 0.743127 3.02242 0.97516L5.0227 2.97544C5.25473 3.20747 5.25473 3.59152 5.0227 3.82356C4.90268 3.94357 4.75066 3.99958 4.59864 3.99958Z", "fill", "currentColor"], ["d", "M2.59841 13.2009C2.27036 13.2009 1.99833 12.9288 1.99833 12.6008V1.39922C1.99833 1.07117 2.27036 0.799133 2.59841 0.799133C2.92646 0.799133 3.19849 1.07117 3.19849 1.39922V12.6008C3.19849 12.9288 2.92646 13.2009 2.59841 13.2009Z", "fill", "currentColor"], ["d", "M13.3999 11.2006H6.99902C6.67098 11.2006 6.39894 10.9285 6.39894 10.6005C6.39894 10.2725 6.67098 10.0004 6.99902 10.0004H13.3999C13.728 10.0004 14 10.2725 14 10.6005C14 10.9285 13.728 11.2006 13.3999 11.2006Z", "fill", "currentColor"], ["d", "M10.1995 6.39991H6.99902C6.67098 6.39991 6.39894 6.12788 6.39894 5.79983C6.39894 5.47179 6.67098 5.19975 6.99902 5.19975H10.1995C10.5275 5.19975 10.7996 5.47179 10.7996 5.79983C10.7996 6.12788 10.5275 6.39991 10.1995 6.39991Z", "fill", "currentColor"], ["d", "M8.59925 3.99958H6.99902C6.67098 3.99958 6.39894 3.72754 6.39894 3.3995C6.39894 3.07145 6.67098 2.79941 6.99902 2.79941H8.59925C8.92729 2.79941 9.19933 3.07145 9.19933 3.3995C9.19933 3.72754 8.92729 3.99958 8.59925 3.99958Z", "fill", "currentColor"], ["d", "M11.7997 8.80025H6.99902C6.67098 8.80025 6.39894 8.52821 6.39894 8.20017C6.39894 7.87212 6.67098 7.60008 6.99902 7.60008H11.7997C12.1277 7.60008 12.3998 7.87212 12.3998 8.20017C12.3998 8.52821 12.1277 8.80025 11.7997 8.80025Z", "fill", "currentColor"], ["id", "clip0_378_15578"], ["width", "14", "height", "14", "fill", "white"]],
  template: function SortAmountUpAltIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵnamespaceSVG();
      ɵɵelementStart(0, "svg", 0)(1, "g", 1);
      ɵɵelement(2, "path", 2)(3, "path", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "defs")(9, "clipPath", 8);
      ɵɵelement(10, "rect", 9);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.getClassNames());
      ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
    }
  },
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortAmountUpAltIcon, [{
    type: Component,
    args: [{
      selector: "SortAmountUpAltIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g clip-path="url(#clip0_378_15578)">
                <path
                    d="M4.59864 3.99958C4.44662 3.99958 4.2946 3.94357 4.17458 3.82356L2.59836 2.24734L1.02214 3.82356C0.79011 4.05559 0.406057 4.05559 0.174024 3.82356C-0.0580081 3.59152 -0.0580081 3.20747 0.174024 2.97544L2.1743 0.97516C2.40634 0.743127 2.79039 0.743127 3.02242 0.97516L5.0227 2.97544C5.25473 3.20747 5.25473 3.59152 5.0227 3.82356C4.90268 3.94357 4.75066 3.99958 4.59864 3.99958Z"
                    fill="currentColor"
                />
                <path
                    d="M2.59841 13.2009C2.27036 13.2009 1.99833 12.9288 1.99833 12.6008V1.39922C1.99833 1.07117 2.27036 0.799133 2.59841 0.799133C2.92646 0.799133 3.19849 1.07117 3.19849 1.39922V12.6008C3.19849 12.9288 2.92646 13.2009 2.59841 13.2009Z"
                    fill="currentColor"
                />
                <path
                    d="M13.3999 11.2006H6.99902C6.67098 11.2006 6.39894 10.9285 6.39894 10.6005C6.39894 10.2725 6.67098 10.0004 6.99902 10.0004H13.3999C13.728 10.0004 14 10.2725 14 10.6005C14 10.9285 13.728 11.2006 13.3999 11.2006Z"
                    fill="currentColor"
                />
                <path
                    d="M10.1995 6.39991H6.99902C6.67098 6.39991 6.39894 6.12788 6.39894 5.79983C6.39894 5.47179 6.67098 5.19975 6.99902 5.19975H10.1995C10.5275 5.19975 10.7996 5.47179 10.7996 5.79983C10.7996 6.12788 10.5275 6.39991 10.1995 6.39991Z"
                    fill="currentColor"
                />
                <path
                    d="M8.59925 3.99958H6.99902C6.67098 3.99958 6.39894 3.72754 6.39894 3.3995C6.39894 3.07145 6.67098 2.79941 6.99902 2.79941H8.59925C8.92729 2.79941 9.19933 3.07145 9.19933 3.3995C9.19933 3.72754 8.92729 3.99958 8.59925 3.99958Z"
                    fill="currentColor"
                />
                <path
                    d="M11.7997 8.80025H6.99902C6.67098 8.80025 6.39894 8.52821 6.39894 8.20017C6.39894 7.87212 6.67098 7.60008 6.99902 7.60008H11.7997C12.1277 7.60008 12.3998 7.87212 12.3998 8.20017C12.3998 8.52821 12.1277 8.80025 11.7997 8.80025Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_378_15578">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-table.mjs
var _c03 = ["container"];
var _c13 = ["resizeHelper"];
var _c22 = ["reorderIndicatorUp"];
var _c3 = ["reorderIndicatorDown"];
var _c4 = ["wrapper"];
var _c5 = ["table"];
var _c6 = ["thead"];
var _c7 = ["tfoot"];
var _c8 = ["scroller"];
function Table_div_2_i_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "i");
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵclassMap("p-datatable-loading-icon " + ctx_r14.loadingIcon);
  }
}
function Table_div_2_ng_container_2_SpinnerIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 19);
  }
  if (rf & 2) {
    ɵɵproperty("spin", true)("styleClass", "p-datatable-loading-icon");
  }
}
function Table_div_2_ng_container_2_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Table_div_2_ng_container_2_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_div_2_ng_container_2_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_div_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, Table_div_2_ng_container_2_span_2_1_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r17.loadingIconTemplate);
  }
}
function Table_div_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Table_div_2_ng_container_2_SpinnerIcon_1_Template, 1, 2, "SpinnerIcon", 17);
    ɵɵtemplate(2, Table_div_2_ng_container_2_span_2_Template, 2, 1, "span", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r15.loadingIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r15.loadingIconTemplate);
  }
}
function Table_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtemplate(1, Table_div_2_i_1_Template, 1, 2, "i", 16);
    ɵɵtemplate(2, Table_div_2_ng_container_2_Template, 3, 2, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.loadingIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.loadingIcon);
  }
}
function Table_div_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 22);
    ɵɵtemplate(1, Table_div_3_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.captionTemplate);
  }
}
function Table_p_paginator_4_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r25.paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_1_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function Table_p_paginator_4_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r27.paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_2_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_4_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r29.paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_3_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_4_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_4_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r31 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r31.paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_4_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_4_4_ng_template_0_Template, 1, 1, "ng-template", 27);
  }
}
function Table_p_paginator_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 23);
    ɵɵlistener("onPageChange", function Table_p_paginator_4_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r34);
      const ctx_r33 = ɵɵnextContext();
      return ɵɵresetView(ctx_r33.onPageChange($event));
    });
    ɵɵtemplate(1, Table_p_paginator_4_1_Template, 1, 0, null, 8);
    ɵɵtemplate(2, Table_p_paginator_4_2_Template, 1, 0, null, 8);
    ɵɵtemplate(3, Table_p_paginator_4_3_Template, 1, 0, null, 8);
    ɵɵtemplate(4, Table_p_paginator_4_4_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r3.rows)("first", ctx_r3.first)("totalRecords", ctx_r3.totalRecords)("pageLinkSize", ctx_r3.pageLinks)("alwaysShow", ctx_r3.alwaysShowPaginator)("rowsPerPageOptions", ctx_r3.rowsPerPageOptions)("templateLeft", ctx_r3.paginatorLeftTemplate)("templateRight", ctx_r3.paginatorRightTemplate)("dropdownAppendTo", ctx_r3.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r3.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r3.currentPageReportTemplate)("showFirstLastIcon", ctx_r3.showFirstLastIcon)("dropdownItemTemplate", ctx_r3.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r3.showCurrentPageReport)("showJumpToPageDropdown", ctx_r3.showJumpToPageDropdown)("showJumpToPageInput", ctx_r3.showJumpToPageInput)("showPageLinks", ctx_r3.showPageLinks);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.paginatorFirstPageLinkIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.paginatorLastPageLinkIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_scroller_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c9 = function(a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Table_p_scroller_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_scroller_7_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 31);
  }
  if (rf & 2) {
    const items_r37 = ctx.$implicit;
    const scrollerOptions_r38 = ctx.options;
    ɵɵnextContext(2);
    const _r7 = ɵɵreference(10);
    ɵɵproperty("ngTemplateOutlet", _r7)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c9, items_r37, scrollerOptions_r38));
  }
}
var _c10 = function(a0) {
  return {
    height: a0
  };
};
function Table_p_scroller_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 28, 29);
    ɵɵlistener("onLazyLoad", function Table_p_scroller_7_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r41);
      const ctx_r40 = ɵɵnextContext();
      return ɵɵresetView(ctx_r40.onLazyItemLoad($event));
    });
    ɵɵtemplate(2, Table_p_scroller_7_ng_template_2_Template, 1, 5, "ng-template", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵstyleMap(ɵɵpureFunction1(15, _c10, ctx_r5.scrollHeight !== "flex" ? ctx_r5.scrollHeight : void 0));
    ɵɵproperty("items", ctx_r5.processedData)("columns", ctx_r5.columns)("scrollHeight", ctx_r5.scrollHeight !== "flex" ? void 0 : "100%")("itemSize", ctx_r5.virtualScrollItemSize || ctx_r5._virtualRowHeight)("step", ctx_r5.rows)("delay", ctx_r5.lazy ? ctx_r5.virtualScrollDelay : 0)("inline", true)("lazy", ctx_r5.lazy)("loaderDisabled", true)("showSpacer", false)("showLoader", ctx_r5.loadingBodyTemplate)("options", ctx_r5.virtualScrollOptions)("autoSize", true);
  }
}
function Table_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c11 = function(a0) {
  return {
    columns: a0
  };
};
function Table_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Table_ng_container_8_ng_container_1_Template, 1, 0, "ng-container", 31);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    const _r7 = ɵɵreference(10);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r7)("ngTemplateOutletContext", ɵɵpureFunction2(4, _c9, ctx_r6.processedData, ɵɵpureFunction1(2, _c11, ctx_r6.columns)));
  }
}
function Table_ng_template_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_9_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_ng_template_9_tbody_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tbody", 40);
  }
  if (rf & 2) {
    const scrollerOptions_r44 = ɵɵnextContext().options;
    const ctx_r49 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r49.frozenValue)("frozenRows", true)("pTableBody", scrollerOptions_r44.columns)("pTableBodyTemplate", ctx_r49.frozenBodyTemplate)("frozen", true);
  }
}
function Table_ng_template_9_tbody_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tbody", 41);
  }
  if (rf & 2) {
    const scrollerOptions_r44 = ɵɵnextContext().options;
    ɵɵstyleMap("height: calc(" + scrollerOptions_r44.spacerStyle.height + " - " + scrollerOptions_r44.rows.length * scrollerOptions_r44.itemSize + "px);");
  }
}
function Table_ng_template_9_tfoot_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c122 = function(a0) {
  return {
    $implicit: a0
  };
};
function Table_ng_template_9_tfoot_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tfoot", 42, 43);
    ɵɵtemplate(2, Table_ng_template_9_tfoot_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r44 = ɵɵnextContext().options;
    const ctx_r51 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r51.footerGroupedTemplate || ctx_r51.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, scrollerOptions_r44.columns));
  }
}
var _c132 = function(a1, a2, a3) {
  return {
    "p-datatable-table": true,
    "p-datatable-scrollable-table": a1,
    "p-datatable-resizable-table": a2,
    "p-datatable-resizable-table-fit": a3
  };
};
function Table_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table", 32, 33);
    ɵɵtemplate(2, Table_ng_template_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    ɵɵelementStart(3, "thead", 34, 35);
    ɵɵtemplate(5, Table_ng_template_9_ng_container_5_Template, 1, 0, "ng-container", 31);
    ɵɵelementEnd();
    ɵɵtemplate(6, Table_ng_template_9_tbody_6_Template, 1, 5, "tbody", 36);
    ɵɵelement(7, "tbody", 37);
    ɵɵtemplate(8, Table_ng_template_9_tbody_8_Template, 1, 2, "tbody", 38);
    ɵɵtemplate(9, Table_ng_template_9_tfoot_9_Template, 3, 4, "tfoot", 39);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r44 = ctx.options;
    const ctx_r8 = ɵɵnextContext();
    ɵɵstyleMap(ctx_r8.tableStyle);
    ɵɵclassMap(ctx_r8.tableStyleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction3(20, _c132, ctx_r8.scrollable, ctx_r8.resizableColumns, ctx_r8.resizableColumns && ctx_r8.columnResizeMode === "fit"));
    ɵɵattribute("id", ctx_r8.id + "-table");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.colGroupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(24, _c122, scrollerOptions_r44.columns));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.headerGroupedTemplate || ctx_r8.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(26, _c122, scrollerOptions_r44.columns));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.frozenValue || ctx_r8.frozenBodyTemplate);
    ɵɵadvance(1);
    ɵɵstyleMap(scrollerOptions_r44.contentStyle);
    ɵɵproperty("ngClass", scrollerOptions_r44.contentStyleClass)("value", ctx_r8.dataToRender(scrollerOptions_r44.rows))("pTableBody", scrollerOptions_r44.columns)("pTableBodyTemplate", ctx_r8.bodyTemplate)("scrollerOptions", scrollerOptions_r44);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", scrollerOptions_r44.spacerStyle);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.footerGroupedTemplate || ctx_r8.footerTemplate);
  }
}
function Table_p_paginator_11_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r61 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r61.paginatorFirstPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_1_ng_template_0_Template, 1, 1, "ng-template", 24);
  }
}
function Table_p_paginator_11_2_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_2_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_2_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r63 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r63.paginatorPreviousPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_2_ng_template_0_Template, 1, 1, "ng-template", 25);
  }
}
function Table_p_paginator_11_3_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_3_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_3_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r65 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r65.paginatorLastPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_3_ng_template_0_Template, 1, 1, "ng-template", 26);
  }
}
function Table_p_paginator_11_4_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_p_paginator_11_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_4_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 21);
  }
  if (rf & 2) {
    const ctx_r67 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r67.paginatorNextPageLinkIconTemplate);
  }
}
function Table_p_paginator_11_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_p_paginator_11_4_ng_template_0_Template, 1, 1, "ng-template", 27);
  }
}
function Table_p_paginator_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-paginator", 44);
    ɵɵlistener("onPageChange", function Table_p_paginator_11_Template_p_paginator_onPageChange_0_listener($event) {
      ɵɵrestoreView(_r70);
      const ctx_r69 = ɵɵnextContext();
      return ɵɵresetView(ctx_r69.onPageChange($event));
    });
    ɵɵtemplate(1, Table_p_paginator_11_1_Template, 1, 0, null, 8);
    ɵɵtemplate(2, Table_p_paginator_11_2_Template, 1, 0, null, 8);
    ɵɵtemplate(3, Table_p_paginator_11_3_Template, 1, 0, null, 8);
    ɵɵtemplate(4, Table_p_paginator_11_4_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("rows", ctx_r9.rows)("first", ctx_r9.first)("totalRecords", ctx_r9.totalRecords)("pageLinkSize", ctx_r9.pageLinks)("alwaysShow", ctx_r9.alwaysShowPaginator)("rowsPerPageOptions", ctx_r9.rowsPerPageOptions)("templateLeft", ctx_r9.paginatorLeftTemplate)("templateRight", ctx_r9.paginatorRightTemplate)("dropdownAppendTo", ctx_r9.paginatorDropdownAppendTo)("dropdownScrollHeight", ctx_r9.paginatorDropdownScrollHeight)("currentPageReportTemplate", ctx_r9.currentPageReportTemplate)("showFirstLastIcon", ctx_r9.showFirstLastIcon)("dropdownItemTemplate", ctx_r9.paginatorDropdownItemTemplate)("showCurrentPageReport", ctx_r9.showCurrentPageReport)("showJumpToPageDropdown", ctx_r9.showJumpToPageDropdown)("showJumpToPageInput", ctx_r9.showJumpToPageInput)("showPageLinks", ctx_r9.showPageLinks);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.paginatorFirstPageLinkIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.paginatorPreviousPageLinkIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.paginatorLastPageLinkIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.paginatorNextPageLinkIconTemplate);
  }
}
function Table_div_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Table_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 45);
    ɵɵtemplate(1, Table_div_12_ng_container_1_Template, 1, 0, "ng-container", 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r10.summaryTemplate);
  }
}
function Table_div_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 46, 47);
  }
}
function Table_span_14_ArrowDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ArrowDownIcon");
  }
}
function Table_span_14_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_14_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_span_14_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 48, 49);
    ɵɵtemplate(2, Table_span_14_ArrowDownIcon_2_Template, 1, 0, "ArrowDownIcon", 8);
    ɵɵtemplate(3, Table_span_14_3_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r12.reorderIndicatorUpIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r12.reorderIndicatorUpIconTemplate);
  }
}
function Table_span_15_ArrowUpIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ArrowUpIcon");
  }
}
function Table_span_15_3_ng_template_0_Template(rf, ctx) {
}
function Table_span_15_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Table_span_15_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Table_span_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 50, 51);
    ɵɵtemplate(2, Table_span_15_ArrowUpIcon_2_Template, 1, 0, "ArrowUpIcon", 8);
    ɵɵtemplate(3, Table_span_15_3_Template, 1, 0, null, 21);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r13.reorderIndicatorDownIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r13.reorderIndicatorDownIconTemplate);
  }
}
var _c14 = function(a1, a2, a3) {
  return {
    "p-datatable p-component": true,
    "p-datatable-hoverable-rows": a1,
    "p-datatable-scrollable": a2,
    "p-datatable-flex-scrollable": a3
  };
};
var _c15 = function(a0) {
  return {
    maxHeight: a0
  };
};
var _c16 = ["pTableBody", ""];
function TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c17 = function(a0, a1, a2, a3, a4) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    editing: a3,
    frozen: a4
  };
};
function TableBody_ng_container_0_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext();
    const rowData_r6 = ctx_r13.$implicit;
    const rowIndex_r7 = ctx_r13.index;
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.dt.groupHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c17, rowData_r6, ctx_r8.getRowIndex(rowIndex_r7), ctx_r8.columns, ctx_r8.dt.editMode === "row" && ctx_r8.dt.isRowEditing(rowData_r6), ctx_r8.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext();
    const rowData_r6 = ctx_r15.$implicit;
    const rowIndex_r7 = ctx_r15.index;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", rowData_r6 ? ctx_r9.template : ctx_r9.dt.loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c17, rowData_r6, ctx_r9.getRowIndex(rowIndex_r7), ctx_r9.columns, ctx_r9.dt.editMode === "row" && ctx_r9.dt.isRowEditing(rowData_r6), ctx_r9.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c18 = function(a0, a1, a2, a3, a4, a5, a6) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    editing: a3,
    frozen: a4,
    rowgroup: a5,
    rowspan: a6
  };
};
function TableBody_ng_container_0_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r17 = ɵɵnextContext();
    const rowData_r6 = ctx_r17.$implicit;
    const rowIndex_r7 = ctx_r17.index;
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", rowData_r6 ? ctx_r10.template : ctx_r10.dt.loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction7(2, _c18, rowData_r6, ctx_r10.getRowIndex(rowIndex_r7), ctx_r10.columns, ctx_r10.dt.editMode === "row" && ctx_r10.dt.isRowEditing(rowData_r6), ctx_r10.frozen, ctx_r10.shouldRenderRowspan(ctx_r10.value, rowData_r6, rowIndex_r7), ctx_r10.calculateRowGroupSize(ctx_r10.value, rowData_r6, rowIndex_r7)));
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_0_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext();
    const rowData_r6 = ctx_r19.$implicit;
    const rowIndex_r7 = ctx_r19.index;
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r11.dt.groupFooterTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(2, _c17, rowData_r6, ctx_r11.getRowIndex(rowIndex_r7), ctx_r11.columns, ctx_r11.dt.editMode === "row" && ctx_r11.dt.isRowEditing(rowData_r6), ctx_r11.frozen));
  }
}
function TableBody_ng_container_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_0_ng_template_1_ng_container_0_Template, 2, 8, "ng-container", 2);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 0);
    ɵɵtemplate(2, TableBody_ng_container_0_ng_template_1_ng_container_2_Template, 2, 10, "ng-container", 0);
    ɵɵtemplate(3, TableBody_ng_container_0_ng_template_1_ng_container_3_Template, 2, 8, "ng-container", 2);
  }
  if (rf & 2) {
    const rowData_r6 = ctx.$implicit;
    const rowIndex_r7 = ctx.index;
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r5.dt.groupHeaderTemplate && !ctx_r5.dt.virtualScroll && ctx_r5.dt.rowGroupMode === "subheader" && ctx_r5.shouldRenderRowGroupHeader(ctx_r5.value, rowData_r6, rowIndex_r7));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.dt.rowGroupMode !== "rowspan");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.dt.rowGroupMode === "rowspan");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.dt.groupFooterTemplate && !ctx_r5.dt.virtualScroll && ctx_r5.dt.rowGroupMode === "subheader" && ctx_r5.shouldRenderRowGroupFooter(ctx_r5.value, rowData_r6, rowIndex_r7));
  }
}
function TableBody_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_0_ng_template_1_Template, 4, 4, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r0.value)("ngForTrackBy", ctx_r0.dt.rowTrackBy);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c19 = function(a0, a1, a2, a3, a4, a5) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    expanded: a3,
    editing: a4,
    frozen: a5
  };
};
function TableBody_ng_container_1_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r27 = ɵɵnextContext();
    const rowData_r21 = ctx_r27.$implicit;
    const rowIndex_r22 = ctx_r27.index;
    const ctx_r23 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r23.template)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c19, rowData_r21, ctx_r23.getRowIndex(rowIndex_r22), ctx_r23.columns, ctx_r23.dt.isRowExpanded(rowData_r21), ctx_r23.dt.editMode === "row" && ctx_r23.dt.isRowEditing(rowData_r21), ctx_r23.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext();
    const rowData_r21 = ctx_r29.$implicit;
    const rowIndex_r22 = ctx_r29.index;
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r24.dt.groupHeaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c19, rowData_r21, ctx_r24.getRowIndex(rowIndex_r22), ctx_r24.columns, ctx_r24.dt.isRowExpanded(rowData_r21), ctx_r24.dt.editMode === "row" && ctx_r24.dt.isRowEditing(rowData_r21), ctx_r24.frozen));
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r33 = ɵɵnextContext(2);
    const rowData_r21 = ctx_r33.$implicit;
    const rowIndex_r22 = ctx_r33.index;
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r31.dt.groupFooterTemplate)("ngTemplateOutletContext", ɵɵpureFunction6(2, _c19, rowData_r21, ctx_r31.getRowIndex(rowIndex_r22), ctx_r31.columns, ctx_r31.dt.isRowExpanded(rowData_r21), ctx_r31.dt.editMode === "row" && ctx_r31.dt.isRowEditing(rowData_r21), ctx_r31.frozen));
  }
}
var _c20 = function(a0, a1, a2, a3) {
  return {
    $implicit: a0,
    rowIndex: a1,
    columns: a2,
    frozen: a3
  };
};
function TableBody_ng_container_1_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(2, TableBody_ng_container_1_ng_template_1_ng_container_2_ng_container_2_Template, 2, 9, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext();
    const rowData_r21 = ctx_r34.$implicit;
    const rowIndex_r22 = ctx_r34.index;
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r25.dt.expandedRowTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(3, _c20, rowData_r21, ctx_r25.getRowIndex(rowIndex_r22), ctx_r25.columns, ctx_r25.frozen));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r25.dt.groupFooterTemplate && ctx_r25.dt.rowGroupMode === "subheader" && ctx_r25.shouldRenderRowGroupFooter(ctx_r25.value, rowData_r21, ctx_r25.getRowIndex(rowIndex_r22)));
  }
}
function TableBody_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_1_ng_template_1_ng_container_0_Template, 2, 9, "ng-container", 0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_ng_container_1_Template, 2, 9, "ng-container", 2);
    ɵɵtemplate(2, TableBody_ng_container_1_ng_template_1_ng_container_2_Template, 3, 8, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r21 = ctx.$implicit;
    const rowIndex_r22 = ctx.index;
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r20.dt.groupHeaderTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r20.dt.groupHeaderTemplate && ctx_r20.dt.rowGroupMode === "subheader" && ctx_r20.shouldRenderRowGroupHeader(ctx_r20.value, rowData_r21, ctx_r20.getRowIndex(rowIndex_r22)));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r20.dt.isRowExpanded(rowData_r21));
  }
}
function TableBody_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_1_ng_template_1_Template, 3, 3, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r1.value)("ngForTrackBy", ctx_r1.dt.rowTrackBy);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_2_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r41 = ɵɵnextContext();
    const rowData_r36 = ctx_r41.$implicit;
    const rowIndex_r37 = ctx_r41.index;
    const ctx_r39 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r39.dt.frozenExpandedRowTemplate)("ngTemplateOutletContext", ɵɵpureFunction4(2, _c20, rowData_r36, ctx_r39.getRowIndex(rowIndex_r37), ctx_r39.columns, ctx_r39.frozen));
  }
}
function TableBody_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableBody_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_ng_container_1_Template, 2, 7, "ng-container", 0);
  }
  if (rf & 2) {
    const rowData_r36 = ctx.$implicit;
    const rowIndex_r37 = ctx.index;
    const ctx_r35 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r35.template)("ngTemplateOutletContext", ɵɵpureFunction6(3, _c19, rowData_r36, ctx_r35.getRowIndex(rowIndex_r37), ctx_r35.columns, ctx_r35.dt.isRowExpanded(rowData_r36), ctx_r35.dt.editMode === "row" && ctx_r35.dt.isRowEditing(rowData_r36), ctx_r35.frozen));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r35.dt.isRowExpanded(rowData_r36));
  }
}
function TableBody_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_2_ng_template_1_Template, 2, 10, "ng-template", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r2.value)("ngForTrackBy", ctx_r2.dt.rowTrackBy);
  }
}
function TableBody_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c21 = function(a0, a1) {
  return {
    $implicit: a0,
    frozen: a1
  };
};
function TableBody_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.loadingBodyTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c21, ctx_r3.columns, ctx_r3.frozen));
  }
}
function TableBody_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function TableBody_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableBody_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.dt.emptyMessageTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c21, ctx_r4.columns, ctx_r4.frozen));
  }
}
function SortIcon_ng_container_0_SortAltIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAltIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAmountUpAltIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_SortAmountDownIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SortAmountDownIcon", 4);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sortable-column-icon");
  }
}
function SortIcon_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, SortIcon_ng_container_0_SortAltIcon_1_Template, 1, 1, "SortAltIcon", 3);
    ɵɵtemplate(2, SortIcon_ng_container_0_SortAmountUpAltIcon_2_Template, 1, 1, "SortAmountUpAltIcon", 3);
    ɵɵtemplate(3, SortIcon_ng_container_0_SortAmountDownIcon_3_Template, 1, 1, "SortAmountDownIcon", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 0);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.sortOrder === 1);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.sortOrder === -1);
  }
}
function SortIcon_span_1_1_ng_template_0_Template(rf, ctx) {
}
function SortIcon_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SortIcon_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function SortIcon_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 5);
    ɵɵtemplate(1, SortIcon_span_1_1_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.dt.sortIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, ctx_r1.sortOrder));
  }
}
function SortIcon_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r2.getBadgeValue());
  }
}
function CellEditor_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CellEditor_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CellEditor_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.inputTemplate);
  }
}
function CellEditor_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function CellEditor_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CellEditor_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.outputTemplate);
  }
}
var _c222 = ["rb"];
var _c23 = function(a0, a1, a2) {
  return {
    "p-radiobutton-focused": a0,
    "p-radiobutton-checked": a1,
    "p-radiobutton-disabled": a2
  };
};
var _c24 = function(a1, a2, a3) {
  return {
    "p-radiobutton-box p-component": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
function TableCheckbox_ng_container_5_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 7);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function TableCheckbox_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableCheckbox_ng_container_5_CheckIcon_1_Template, 1, 1, "CheckIcon", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.checked);
  }
}
function TableCheckbox_span_6_1_ng_template_0_Template(rf, ctx) {
}
function TableCheckbox_span_6_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableCheckbox_span_6_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableCheckbox_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, TableCheckbox_span_6_1_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.dt.checkboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, ctx_r2.checked));
  }
}
var _c25 = function(a0, a1) {
  return {
    "p-checkbox-focused": a0,
    "p-checkbox-disabled": a1
  };
};
var _c26 = function(a1, a2, a3) {
  return {
    "p-checkbox-box p-component": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
function TableHeaderCheckbox_ng_container_6_CheckIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "CheckIcon", 9);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-checkbox-icon");
  }
}
function TableHeaderCheckbox_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TableHeaderCheckbox_ng_container_6_CheckIcon_1_Template, 1, 1, "CheckIcon", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.checked);
  }
}
function TableHeaderCheckbox_span_7_1_ng_template_0_Template(rf, ctx) {
}
function TableHeaderCheckbox_span_7_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TableHeaderCheckbox_span_7_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TableHeaderCheckbox_span_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 10);
    ɵɵtemplate(1, TableHeaderCheckbox_span_7_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.dt.headerCheckboxIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, ctx_r3.checked));
  }
}
var _c27 = function(a1, a2, a3) {
  return {
    "p-checkbox-box": true,
    "p-highlight": a1,
    "p-focus": a2,
    "p-disabled": a3
  };
};
var _c28 = ["icon"];
function ColumnFilter_p_columnFilterFormElement_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-columnFilterFormElement", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.type)("field", ctx_r0.field)("filterConstraint", ctx_r0.dt.filters[ctx_r0.field])("filterTemplate", ctx_r0.filterTemplate)("placeholder", ctx_r0.placeholder)("minFractionDigits", ctx_r0.minFractionDigits)("maxFractionDigits", ctx_r0.maxFractionDigits)("prefix", ctx_r0.prefix)("suffix", ctx_r0.suffix)("locale", ctx_r0.locale)("localeMatcher", ctx_r0.localeMatcher)("currency", ctx_r0.currency)("currencyDisplay", ctx_r0.currencyDisplay)("useGrouping", ctx_r0.useGrouping)("showButtons", ctx_r0.showButtons);
  }
}
function ColumnFilter_button_2_FilterIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "FilterIcon", 10);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "pi-filter-icon");
  }
}
function ColumnFilter_button_2_span_3_1_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_button_2_span_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_button_2_span_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_button_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtemplate(1, ColumnFilter_button_2_span_3_1_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r6.filterIconTemplate);
  }
}
var _c29 = function(a0, a1) {
  return {
    "p-column-filter-menu-button-open": a0,
    "p-column-filter-menu-button-active": a1
  };
};
function ColumnFilter_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6, 7);
    ɵɵlistener("click", function ColumnFilter_button_2_Template_button_click_0_listener() {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.toggleMenu());
    })("keydown", function ColumnFilter_button_2_Template_button_keydown_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.onToggleButtonKeyDown($event));
    });
    ɵɵtemplate(2, ColumnFilter_button_2_FilterIcon_2_Template, 1, 1, "FilterIcon", 8);
    ɵɵtemplate(3, ColumnFilter_button_2_span_3_Template, 2, 1, "span", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction2(4, _c29, ctx_r1.overlayVisible, ctx_r1.hasFilter()));
    ɵɵattribute("aria-expanded", ctx_r1.overlayVisible);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.filterIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.filterIconTemplate);
  }
}
function ColumnFilter_button_3_FilterSlashIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "FilterSlashIcon");
  }
}
function ColumnFilter_button_3_3_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_button_3_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_button_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c30 = function(a0) {
  return {
    "p-hidden-space": a0
  };
};
function ColumnFilter_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 13, 7);
    ɵɵlistener("click", function ColumnFilter_button_3_Template_button_click_0_listener() {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.clearFilter());
    });
    ɵɵtemplate(2, ColumnFilter_button_3_FilterSlashIcon_2_Template, 1, 0, "FilterSlashIcon", 14);
    ɵɵtemplate(3, ColumnFilter_button_3_3_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c30, !ctx_r2.hasRowFilter()));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r2.clearIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.clearFilterIcon);
  }
}
function ColumnFilter_div_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c31 = function(a0) {
  return {
    "p-highlight": a0
  };
};
function ColumnFilter_div_4_ul_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("click", function ColumnFilter_div_4_ul_2_li_1_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r27);
      const matchMode_r24 = restoredCtx.$implicit;
      const ctx_r26 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r26.onRowMatchModeChange(matchMode_r24.value));
    })("keydown", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_0_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r28 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r28.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_li_1_Template_li_keydown_enter_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r27);
      const matchMode_r24 = restoredCtx.$implicit;
      const ctx_r29 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r29.onRowMatchModeChange(matchMode_r24.value));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const matchMode_r24 = ctx.$implicit;
    const i_r25 = ctx.index;
    const ctx_r23 = ɵɵnextContext(3);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c31, ctx_r23.isRowMatchModeSelected(matchMode_r24.value)));
    ɵɵattribute("tabindex", i_r25 === 0 ? "0" : null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", matchMode_r24.label, " ");
  }
}
function ColumnFilter_div_4_ul_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 19);
    ɵɵtemplate(1, ColumnFilter_div_4_ul_2_li_1_Template, 2, 5, "li", 20);
    ɵɵelement(2, "li", 21);
    ɵɵelementStart(3, "li", 22);
    ɵɵlistener("click", function ColumnFilter_div_4_ul_2_Template_li_click_3_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r30 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r30.onRowClearItemClick());
    })("keydown", function ColumnFilter_div_4_ul_2_Template_li_keydown_3_listener($event) {
      ɵɵrestoreView(_r31);
      const ctx_r32 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r32.onRowMatchModeKeyDown($event));
    })("keydown.enter", function ColumnFilter_div_4_ul_2_Template_li_keydown_enter_3_listener() {
      ɵɵrestoreView(_r31);
      const ctx_r33 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r33.onRowClearItemClick());
    });
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r19.matchModes);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r19.noFilterLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31)(1, "p-dropdown", 32);
    ɵɵlistener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_0_Template_p_dropdown_ngModelChange_1_listener($event) {
      ɵɵrestoreView(_r40);
      const ctx_r39 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r39.onOperatorChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r34 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("options", ctx_r34.operatorOptions)("ngModel", ctx_r34.operator);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-dropdown", 37);
    ɵɵlistener("ngModelChange", function ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template_p_dropdown_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r47);
      const fieldConstraint_r41 = ɵɵnextContext().$implicit;
      const ctx_r45 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r45.onMenuMatchModeChange($event, fieldConstraint_r41));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const fieldConstraint_r41 = ɵɵnextContext().$implicit;
    const ctx_r43 = ɵɵnextContext(3);
    ɵɵproperty("options", ctx_r43.matchModes)("ngModel", fieldConstraint_r41.matchMode);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_TrashIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TrashIcon");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_2_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_4_ng_template_3_div_2_button_4_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_div_2_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r54);
      const fieldConstraint_r41 = ɵɵnextContext().$implicit;
      const ctx_r52 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r52.removeConstraint(fieldConstraint_r41));
    });
    ɵɵtemplate(1, ColumnFilter_div_4_ng_template_3_div_2_button_4_TrashIcon_1_Template, 1, 0, "TrashIcon", 14);
    ɵɵtemplate(2, ColumnFilter_div_4_ng_template_3_div_2_button_4_2_Template, 1, 0, null, 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r44 = ɵɵnextContext(4);
    ɵɵproperty("label", ctx_r44.removeRuleButtonLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r44.removeRuleIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r44.removeRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 33);
    ɵɵtemplate(1, ColumnFilter_div_4_ng_template_3_div_2_p_dropdown_1_Template, 1, 2, "p-dropdown", 34);
    ɵɵelement(2, "p-columnFilterFormElement", 35);
    ɵɵelementStart(3, "div");
    ɵɵtemplate(4, ColumnFilter_div_4_ng_template_3_div_2_button_4_Template, 3, 3, "button", 36);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const fieldConstraint_r41 = ctx.$implicit;
    const ctx_r35 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r35.showMatchModes && ctx_r35.matchModes);
    ɵɵadvance(1);
    ɵɵproperty("type", ctx_r35.type)("field", ctx_r35.field)("filterConstraint", fieldConstraint_r41)("filterTemplate", ctx_r35.filterTemplate)("placeholder", ctx_r35.placeholder)("minFractionDigits", ctx_r35.minFractionDigits)("maxFractionDigits", ctx_r35.maxFractionDigits)("prefix", ctx_r35.prefix)("suffix", ctx_r35.suffix)("locale", ctx_r35.locale)("localeMatcher", ctx_r35.localeMatcher)("currency", ctx_r35.currency)("currencyDisplay", ctx_r35.currencyDisplay)("useGrouping", ctx_r35.useGrouping);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r35.showRemoveIcon);
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "PlusIcon");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template(rf, ctx) {
}
function ColumnFilter_div_4_ng_template_3_div_3_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_4_ng_template_3_div_3_3_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function ColumnFilter_div_4_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 39)(1, "button", 40);
    ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_div_3_Template_button_click_1_listener() {
      ɵɵrestoreView(_r59);
      const ctx_r58 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r58.addConstraint());
    });
    ɵɵtemplate(2, ColumnFilter_div_4_ng_template_3_div_3_PlusIcon_2_Template, 1, 0, "PlusIcon", 14);
    ɵɵtemplate(3, ColumnFilter_div_4_ng_template_3_div_3_3_Template, 1, 0, null, 12);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r36.addRuleButtonLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r36.addRuleIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r36.addRuleIconTemplate);
  }
}
function ColumnFilter_div_4_ng_template_3_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 41);
    ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r61);
      const ctx_r60 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r60.clearFilter());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r37 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r37.clearButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 42);
    ɵɵlistener("click", function ColumnFilter_div_4_ng_template_3_button_6_Template_button_click_0_listener() {
      ɵɵrestoreView(_r63);
      const ctx_r62 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r62.applyFilter());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r38 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r38.applyButtonLabel);
  }
}
function ColumnFilter_div_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ColumnFilter_div_4_ng_template_3_div_0_Template, 2, 2, "div", 24);
    ɵɵelementStart(1, "div", 25);
    ɵɵtemplate(2, ColumnFilter_div_4_ng_template_3_div_2_Template, 5, 16, "div", 26);
    ɵɵelementEnd();
    ɵɵtemplate(3, ColumnFilter_div_4_ng_template_3_div_3_Template, 4, 3, "div", 27);
    ɵɵelementStart(4, "div", 28);
    ɵɵtemplate(5, ColumnFilter_div_4_ng_template_3_button_5_Template, 1, 1, "button", 29);
    ɵɵtemplate(6, ColumnFilter_div_4_ng_template_3_button_6_Template, 1, 1, "button", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r21.isShowOperator);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r21.fieldConstraints);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r21.isShowAddConstraint);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r21.showClearButton);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r21.showApplyButton);
  }
}
function ColumnFilter_div_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c32 = function(a1) {
  return {
    "p-column-filter-overlay p-component p-fluid": true,
    "p-column-filter-overlay-menu": a1
  };
};
function ColumnFilter_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 15);
    ɵɵlistener("click", function ColumnFilter_div_4_Template_div_click_0_listener() {
      ɵɵrestoreView(_r65);
      const ctx_r64 = ɵɵnextContext();
      return ɵɵresetView(ctx_r64.onContentClick());
    })("@overlayAnimation.start", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r65);
      const ctx_r66 = ɵɵnextContext();
      return ɵɵresetView(ctx_r66.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function ColumnFilter_div_4_Template_div_animation_overlayAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r65);
      const ctx_r67 = ɵɵnextContext();
      return ɵɵresetView(ctx_r67.onOverlayAnimationEnd($event));
    })("keydown.escape", function ColumnFilter_div_4_Template_div_keydown_escape_0_listener() {
      ɵɵrestoreView(_r65);
      const ctx_r68 = ɵɵnextContext();
      return ɵɵresetView(ctx_r68.onEscape());
    });
    ɵɵtemplate(1, ColumnFilter_div_4_ng_container_1_Template, 1, 0, "ng-container", 16);
    ɵɵtemplate(2, ColumnFilter_div_4_ul_2_Template, 5, 2, "ul", 17);
    ɵɵtemplate(3, ColumnFilter_div_4_ng_template_3_Template, 7, 5, "ng-template", null, 18, ɵɵtemplateRefExtractor);
    ɵɵtemplate(5, ColumnFilter_div_4_ng_container_5_Template, 1, 0, "ng-container", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r20 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c32, ctx_r3.display === "menu"))("@overlayAnimation", "visible");
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(10, _c122, ctx_r3.field));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.display === "row")("ngIfElse", _r20);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.footerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c122, ctx_r3.field));
  }
}
var _c33 = function(a0, a1) {
  return {
    "p-column-filter-row": a0,
    "p-column-filter-menu": a1
  };
};
function ColumnFilterFormElement_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c34 = function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15) {
  return {
    $implicit: a0,
    filterCallback: a1,
    type: a2,
    field: a3,
    filterConstraint: a4,
    placeholder: a5,
    minFractionDigits: a6,
    maxFractionDigits: a7,
    prefix: a8,
    suffix: a9,
    locale: a10,
    localeMatcher: a11,
    currency: a12,
    currencyDisplay: a13,
    useGrouping: a14,
    showButtons: a15
  };
};
function ColumnFilterFormElement_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, ColumnFilterFormElement_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunctionV(2, _c34, [ctx_r0.filterConstraint.value, ctx_r0.filterCallback, ctx_r0.type, ctx_r0.field, ctx_r0.filterConstraint, ctx_r0.placeholder, ctx_r0.minFractionDigits, ctx_r0.maxFractionDigits, ctx_r0.prefix, ctx_r0.suffix, ctx_r0.locale, ctx_r0.localeMatcher, ctx_r0.currency, ctx_r0.currencyDisplay, ctx_r0.useGrouping, ctx_r0.showButtons]));
  }
}
function ColumnFilterFormElement_ng_template_1_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 8);
    ɵɵlistener("input", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.onModelChange($event.target.value));
    })("keydown.enter", function ColumnFilterFormElement_ng_template_1_input_1_Template_input_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r10 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r10.onTextInputEnterKeyDown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵproperty("value", ctx_r4.filterConstraint == null ? null : ctx_r4.filterConstraint.value);
    ɵɵattribute("placeholder", ctx_r4.placeholder);
  }
}
function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-inputNumber", 9);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r11 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r11.onModelChange($event));
    })("onKeyDown", function ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template_p_inputNumber_onKeyDown_0_listener($event) {
      ɵɵrestoreView(_r12);
      const ctx_r13 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r13.onNumericInputKeyDown($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r5.filterConstraint == null ? null : ctx_r5.filterConstraint.value)("showButtons", ctx_r5.showButtons)("minFractionDigits", ctx_r5.minFractionDigits)("maxFractionDigits", ctx_r5.maxFractionDigits)("prefix", ctx_r5.prefix)("suffix", ctx_r5.suffix)("placeholder", ctx_r5.placeholder)("mode", ctx_r5.currency ? "currency" : "decimal")("locale", ctx_r5.locale)("localeMatcher", ctx_r5.localeMatcher)("currency", ctx_r5.currency)("currencyDisplay", ctx_r5.currencyDisplay)("useGrouping", ctx_r5.useGrouping);
  }
}
function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-triStateCheckbox", 10);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template_p_triStateCheckbox_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r15);
      const ctx_r14 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r14.onModelChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngModel", ctx_r6.filterConstraint == null ? null : ctx_r6.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-calendar", 11);
    ɵɵlistener("ngModelChange", function ColumnFilterFormElement_ng_template_1_p_calendar_4_Template_p_calendar_ngModelChange_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r16.onModelChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("placeholder", ctx_r7.placeholder)("ngModel", ctx_r7.filterConstraint == null ? null : ctx_r7.filterConstraint.value);
  }
}
function ColumnFilterFormElement_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0, 3);
    ɵɵtemplate(1, ColumnFilterFormElement_ng_template_1_input_1_Template, 1, 2, "input", 4);
    ɵɵtemplate(2, ColumnFilterFormElement_ng_template_1_p_inputNumber_2_Template, 1, 13, "p-inputNumber", 5);
    ɵɵtemplate(3, ColumnFilterFormElement_ng_template_1_p_triStateCheckbox_3_Template, 1, 1, "p-triStateCheckbox", 6);
    ɵɵtemplate(4, ColumnFilterFormElement_ng_template_1_p_calendar_4_Template, 1, 2, "p-calendar", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngSwitch", ctx_r2.type);
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "text");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "numeric");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "boolean");
    ɵɵadvance(1);
    ɵɵproperty("ngSwitchCase", "date");
  }
}
var TableService = class {
  constructor() {
    this.sortSource = new Subject();
    this.selectionSource = new Subject();
    this.contextMenuSource = new Subject();
    this.valueSource = new Subject();
    this.totalRecordsSource = new Subject();
    this.columnsSource = new Subject();
    this.resetSource = new Subject();
    this.sortSource$ = this.sortSource.asObservable();
    this.selectionSource$ = this.selectionSource.asObservable();
    this.contextMenuSource$ = this.contextMenuSource.asObservable();
    this.valueSource$ = this.valueSource.asObservable();
    this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
    this.columnsSource$ = this.columnsSource.asObservable();
    this.resetSource$ = this.resetSource.asObservable();
  }
  onSort(sortMeta) {
    this.sortSource.next(sortMeta);
  }
  onSelectionChange() {
    this.selectionSource.next(null);
  }
  onResetChange() {
    this.resetSource.next(null);
  }
  onContextMenu(data) {
    this.contextMenuSource.next(data);
  }
  onValueChange(value) {
    this.valueSource.next(value);
  }
  onTotalRecordsChange(value) {
    this.totalRecordsSource.next(value);
  }
  onColumnsChange(columns) {
    this.columnsSource.next(columns);
  }
};
TableService.ɵfac = function TableService_Factory(t) {
  return new (t || TableService)();
};
TableService.ɵprov = ɵɵdefineInjectable({
  token: TableService,
  factory: TableService.ɵfac
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableService, [{
    type: Injectable
  }], null, null);
})();
var Table = class {
  constructor(document, platformId, renderer, el, zone, tableService, cd, filterService, overlayService) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.zone = zone;
    this.tableService = tableService;
    this.cd = cd;
    this.filterService = filterService;
    this.overlayService = overlayService;
    this.pageLinks = 5;
    this.alwaysShowPaginator = true;
    this.paginatorPosition = "bottom";
    this.paginatorDropdownScrollHeight = "200px";
    this.currentPageReportTemplate = "{currentPage} of {totalPages}";
    this.showFirstLastIcon = true;
    this.showPageLinks = true;
    this.defaultSortOrder = 1;
    this.sortMode = "single";
    this.resetPageOnSort = true;
    this.selectAllChange = new EventEmitter();
    this.selectionChange = new EventEmitter();
    this.contextMenuSelectionChange = new EventEmitter();
    this.contextMenuSelectionMode = "separate";
    this.rowTrackBy = (index, item) => item;
    this.lazy = false;
    this.lazyLoadOnInit = true;
    this.compareSelectionBy = "deepEquals";
    this.csvSeparator = ",";
    this.exportFilename = "download";
    this.filters = {};
    this.filterDelay = 300;
    this.expandedRowKeys = {};
    this.editingRowKeys = {};
    this.rowExpandMode = "multiple";
    this.scrollDirection = "vertical";
    this.virtualScrollDelay = 250;
    this.columnResizeMode = "fit";
    this.showLoader = true;
    this.showInitialSortBadge = true;
    this.stateStorage = "session";
    this.editMode = "cell";
    this.groupRowsByOrder = 1;
    this.responsiveLayout = "scroll";
    this.breakpoint = "960px";
    this.onRowSelect = new EventEmitter();
    this.onRowUnselect = new EventEmitter();
    this.onPage = new EventEmitter();
    this.onSort = new EventEmitter();
    this.onFilter = new EventEmitter();
    this.onLazyLoad = new EventEmitter();
    this.onRowExpand = new EventEmitter();
    this.onRowCollapse = new EventEmitter();
    this.onContextMenuSelect = new EventEmitter();
    this.onColResize = new EventEmitter();
    this.onColReorder = new EventEmitter();
    this.onRowReorder = new EventEmitter();
    this.onEditInit = new EventEmitter();
    this.onEditComplete = new EventEmitter();
    this.onEditCancel = new EventEmitter();
    this.onHeaderCheckboxToggle = new EventEmitter();
    this.sortFunction = new EventEmitter();
    this.firstChange = new EventEmitter();
    this.rowsChange = new EventEmitter();
    this.onStateSave = new EventEmitter();
    this.onStateRestore = new EventEmitter();
    this._virtualRowHeight = 28;
    this._value = [];
    this._totalRecords = 0;
    this._first = 0;
    this.selectionKeys = {};
    this._sortOrder = 1;
    this._selectAll = null;
    this.columnResizing = false;
    this.rowGroupHeaderStyleObject = {};
    this.id = UniqueComponentId();
    this.window = this.document.defaultView;
  }
  get responsive() {
    return this._responsive;
  }
  set responsive(val) {
    this._responsive = val;
    console.warn("responsive propery is deprecated as table is always responsive with scrollable behavior.");
  }
  get virtualRowHeight() {
    return this._virtualRowHeight;
  }
  set virtualRowHeight(val) {
    this._virtualRowHeight = val;
    console.warn("The virtualRowHeight property is deprecated, use virtualScrollItemSize property instead.");
  }
  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      if (!this.virtualScroll) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      }
      if (this.restoringFilter) {
        this.restoringFilter = false;
      }
    }
    if (this.responsiveLayout === "stack" && !this.scrollable) {
      this.createResponsiveStyle();
    }
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "caption":
          this.captionTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "headergrouped":
          this.headerGroupedTemplate = item.template;
          break;
        case "body":
          this.bodyTemplate = item.template;
          break;
        case "loadingbody":
          this.loadingBodyTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "footergrouped":
          this.footerGroupedTemplate = item.template;
          break;
        case "summary":
          this.summaryTemplate = item.template;
          break;
        case "colgroup":
          this.colGroupTemplate = item.template;
          break;
        case "rowexpansion":
          this.expandedRowTemplate = item.template;
          break;
        case "groupheader":
          this.groupHeaderTemplate = item.template;
          break;
        case "rowspan":
          this.rowspanTemplate = item.template;
          break;
        case "groupfooter":
          this.groupFooterTemplate = item.template;
          break;
        case "frozenrows":
          this.frozenRowsTemplate = item.template;
          break;
        case "frozenheader":
          this.frozenHeaderTemplate = item.template;
          break;
        case "frozenbody":
          this.frozenBodyTemplate = item.template;
          break;
        case "frozenfooter":
          this.frozenFooterTemplate = item.template;
          break;
        case "frozencolgroup":
          this.frozenColGroupTemplate = item.template;
          break;
        case "frozenrowexpansion":
          this.frozenExpandedRowTemplate = item.template;
          break;
        case "emptymessage":
          this.emptyMessageTemplate = item.template;
          break;
        case "paginatorleft":
          this.paginatorLeftTemplate = item.template;
          break;
        case "paginatorright":
          this.paginatorRightTemplate = item.template;
          break;
        case "paginatordropdownitem":
          this.paginatorDropdownItemTemplate = item.template;
          break;
        case "paginatorfirstpagelinkicon":
          this.paginatorFirstPageLinkIconTemplate = item.template;
          break;
        case "paginatorlastpagelinkicon":
          this.paginatorLastPageLinkIconTemplate = item.template;
          break;
        case "paginatorpreviouspagelinkicon":
          this.paginatorPreviousPageLinkIconTemplate = item.template;
          break;
        case "paginatornextpagelinkicon":
          this.paginatorNextPageLinkIconTemplate = item.template;
          break;
        case "loadingicon":
          this.loadingIconTemplate = item.template;
          break;
        case "reorderindicatorupicon":
          this.reorderIndicatorUpIconTemplate = item.template;
          break;
        case "reorderindicatordownicon":
          this.reorderIndicatorDownIconTemplate = item.template;
          break;
        case "sorticon":
          this.sortIconTemplate = item.template;
          break;
        case "checkboxicon":
          this.checkboxIconTemplate = item.template;
          break;
        case "headercheckboxicon":
          this.headerCheckboxIconTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    if (this.isStateful() && this.resizableColumns) {
      this.restoreColumnWidths();
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.value) {
      if (this.isStateful() && !this.stateRestored) {
        this.restoreState();
      }
      this._value = simpleChange.value.currentValue;
      if (!this.lazy) {
        this.totalRecords = this._value ? this._value.length : 0;
        if (this.sortMode == "single" && (this.sortField || this.groupRowsBy))
          this.sortSingle();
        else if (this.sortMode == "multiple" && (this.multiSortMeta || this.groupRowsBy))
          this.sortMultiple();
        else if (this.hasFilter())
          this._filter();
      }
      this.tableService.onValueChange(simpleChange.value.currentValue);
    }
    if (simpleChange.columns) {
      this._columns = simpleChange.columns.currentValue;
      this.tableService.onColumnsChange(simpleChange.columns.currentValue);
      if (this._columns && this.isStateful() && this.reorderableColumns && !this.columnOrderStateRestored) {
        this.restoreColumnOrder();
      }
    }
    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsBy) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.groupRowsByOrder) {
      if (!this.lazy || this.initialized) {
        if (this.sortMode === "single") {
          this.sortSingle();
        }
      }
    }
    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === "multiple" && (this.initialized || !this.lazy && !this.virtualScroll)) {
        this.sortMultiple();
      }
    }
    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
    if (simpleChange.selectAll) {
      this._selectAll = simpleChange.selectAll.currentValue;
      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
        if (this.isStateful()) {
          this.saveState();
        }
      }
      this.preventSelectionSetterPropagation = false;
    }
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  get columns() {
    return this._columns;
  }
  set columns(cols) {
    this._columns = cols;
  }
  get first() {
    return this._first;
  }
  set first(val) {
    this._first = val;
  }
  get rows() {
    return this._rows;
  }
  set rows(val) {
    this._rows = val;
  }
  get totalRecords() {
    return this._totalRecords;
  }
  set totalRecords(val) {
    this._totalRecords = val;
    this.tableService.onTotalRecordsChange(this._totalRecords);
  }
  get sortField() {
    return this._sortField;
  }
  set sortField(val) {
    this._sortField = val;
  }
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(val) {
    this._sortOrder = val;
  }
  get multiSortMeta() {
    return this._multiSortMeta;
  }
  set multiSortMeta(val) {
    this._multiSortMeta = val;
  }
  get selection() {
    return this._selection;
  }
  set selection(val) {
    this._selection = val;
  }
  get selectAll() {
    return this._selection;
  }
  set selectAll(val) {
    this._selection = val;
  }
  get processedData() {
    return this.filteredValue || this.value || [];
  }
  dataToRender(data) {
    const _data = data || this.processedData;
    if (_data && this.paginator) {
      const first = this.lazy ? 0 : this.first;
      return _data.slice(first, first + this.rows);
    }
    return _data;
  }
  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};
      if (Array.isArray(this._selection)) {
        for (let data of this._selection) {
          this.selectionKeys[String(ObjectUtils.resolveFieldData(data, this.dataKey))] = 1;
        }
      } else {
        this.selectionKeys[String(ObjectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
      }
    }
  }
  onPageChange(event) {
    this.first = event.first;
    this.rows = event.rows;
    this.onPage.emit({
      first: this.first,
      rows: this.rows
    });
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
    this.firstChange.emit(this.first);
    this.rowsChange.emit(this.rows);
    this.tableService.onValueChange(this.value);
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  sort(event) {
    let originalEvent = event.originalEvent;
    if (this.sortMode === "single") {
      this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
      this._sortField = event.field;
      if (this.resetPageOnSort) {
        this._first = 0;
        this.firstChange.emit(this._first);
        if (this.scrollable) {
          this.resetScrollTop();
        }
      }
      this.sortSingle();
    }
    if (this.sortMode === "multiple") {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);
      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [{
            field: event.field,
            order: sortMeta.order * -1
          }];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
            if (this.scrollable) {
              this.resetScrollTop();
            }
          }
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);
          }
        }
        this._multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }
      this.sortMultiple();
    }
    if (this.isStateful()) {
      this.saveState();
    }
    this.anchorRowIndex = null;
  }
  sortSingle() {
    let field = this.sortField || this.groupRowsBy;
    let order = this.sortField ? this.sortOrder : this.groupRowsByOrder;
    if (this.groupRowsBy && this.sortField && this.groupRowsBy !== this.sortField) {
      this._multiSortMeta = [this.getGroupRowsMeta(), {
        field: this.sortField,
        order: this.sortOrder
      }];
      this.sortMultiple();
      return;
    }
    if (field && order) {
      if (this.restoringSort) {
        this.restoringSort = false;
      }
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            field,
            order
          });
        } else {
          this.value.sort((data1, data2) => {
            let value1 = ObjectUtils.resolveFieldData(data1, field);
            let value2 = ObjectUtils.resolveFieldData(data2, field);
            let result = null;
            if (value1 == null && value2 != null)
              result = -1;
            else if (value1 != null && value2 == null)
              result = 1;
            else if (value1 == null && value2 == null)
              result = 0;
            else if (typeof value1 === "string" && typeof value2 === "string")
              result = value1.localeCompare(value2);
            else
              result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
            return order * result;
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      let sortMeta = {
        field,
        order
      };
      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }
  sortMultiple() {
    if (this.groupRowsBy) {
      if (!this._multiSortMeta)
        this._multiSortMeta = [this.getGroupRowsMeta()];
      else if (this.multiSortMeta[0].field !== this.groupRowsBy)
        this._multiSortMeta = [this.getGroupRowsMeta(), ...this._multiSortMeta];
    }
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            multiSortMeta: this.multiSortMeta
          });
        } else {
          this.value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.multiSortMeta, 0);
          });
          this._value = [...this.value];
        }
        if (this.hasFilter()) {
          this._filter();
        }
      }
      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.tableService.onSort(this.multiSortMeta);
    }
  }
  multisortField(data1, data2, multiSortMeta, index) {
    const value1 = ObjectUtils.resolveFieldData(data1, multiSortMeta[index].field);
    const value2 = ObjectUtils.resolveFieldData(data2, multiSortMeta[index].field);
    if (ObjectUtils.compare(value1, value2, this.filterLocale) === 0) {
      return multiSortMeta.length - 1 > index ? this.multisortField(data1, data2, multiSortMeta, index + 1) : 0;
    }
    return this.compareValuesOnSort(value1, value2, multiSortMeta[index].order);
  }
  compareValuesOnSort(value1, value2, order) {
    return ObjectUtils.sort(value1, value2, order, this.filterLocale, this.sortOrder);
  }
  getSortMeta(field) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }
    return null;
  }
  isSorted(field) {
    if (this.sortMode === "single") {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === "multiple") {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }
  handleRowClick(event) {
    let target = event.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;
    if (targetNode == "INPUT" || targetNode == "BUTTON" || targetNode == "A" || parentNode == "INPUT" || parentNode == "BUTTON" || parentNode == "A" || DomHandler.hasClass(event.originalEvent.target, "p-clickable")) {
      return;
    }
    if (this.selectionMode) {
      let rowData = event.rowData;
      let rowIndex = event.rowIndex;
      this.preventSelectionSetterPropagation = true;
      if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
        DomHandler.clearSelection();
        if (this.rangeRowIndex != null) {
          this.clearSelectionRange(event.originalEvent);
        }
        this.rangeRowIndex = rowIndex;
        this.selectRange(event.originalEvent, rowIndex);
      } else {
        let selected = this.isSelected(rowData);
        if (!selected && !this.isRowSelectable(rowData, rowIndex)) {
          return;
        }
        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.anchorRowIndex = rowIndex;
        this.rangeRowIndex = rowIndex;
        if (metaSelection) {
          let metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }
            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row"
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowData;
              this.selectionChange.emit(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }
              this._selection = [...this.selection, rowData];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: "row",
              index: rowIndex
            });
          }
        } else {
          if (this.selectionMode === "single") {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
            } else {
              this._selection = rowData;
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === "multiple") {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter((val, i) => i != selectionIndex);
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection ? [...this.selection, rowData] : [rowData];
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: "row",
                index: rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
      }
      this.tableService.onSelectionChange();
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.rowTouched = false;
  }
  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }
  handleRowRightClick(event) {
    if (this.contextMenu) {
      const rowData = event.rowData;
      const rowIndex = event.rowIndex;
      if (this.contextMenuSelectionMode === "separate") {
        this.contextMenuSelection = rowData;
        this.contextMenuSelectionChange.emit(rowData);
        this.onContextMenuSelect.emit({
          originalEvent: event.originalEvent,
          data: rowData,
          index: event.rowIndex
        });
        this.contextMenu.show(event.originalEvent);
        this.tableService.onContextMenu(rowData);
      } else if (this.contextMenuSelectionMode === "joint") {
        this.preventSelectionSetterPropagation = true;
        let selected = this.isSelected(rowData);
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        if (!selected) {
          if (!this.isRowSelectable(rowData, rowIndex)) {
            return;
          }
          if (this.isSingleSelectionMode()) {
            this.selection = rowData;
            this.selectionChange.emit(rowData);
            if (dataKeyValue) {
              this.selectionKeys = {};
              this.selectionKeys[dataKeyValue] = 1;
            }
          } else if (this.isMultipleSelectionMode()) {
            this._selection = this.selection ? [...this.selection, rowData] : [rowData];
            this.selectionChange.emit(this.selection);
            if (dataKeyValue) {
              this.selectionKeys[dataKeyValue] = 1;
            }
          }
        }
        this.tableService.onSelectionChange();
        this.contextMenu.show(event.originalEvent);
        this.onContextMenuSelect.emit({
          originalEvent: event,
          data: rowData,
          index: event.rowIndex
        });
      }
    }
  }
  selectRange(event, rowIndex) {
    let rangeStart, rangeEnd;
    if (this.anchorRowIndex > rowIndex) {
      rangeStart = rowIndex;
      rangeEnd = this.anchorRowIndex;
    } else if (this.anchorRowIndex < rowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = rowIndex;
    } else {
      rangeStart = rowIndex;
      rangeEnd = rowIndex;
    }
    if (this.lazy && this.paginator) {
      rangeStart -= this.first;
      rangeEnd -= this.first;
    }
    let rangeRowsData = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.filteredValue ? this.filteredValue[i] : this.value[i];
      if (!this.isSelected(rangeRowData)) {
        if (!this.isRowSelectable(rangeRowData, rowIndex)) {
          continue;
        }
        rangeRowsData.push(rangeRowData);
        this._selection = [...this.selection, rangeRowData];
        let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
        if (dataKeyValue) {
          this.selectionKeys[dataKeyValue] = 1;
        }
      }
    }
    this.selectionChange.emit(this.selection);
    this.onRowSelect.emit({
      originalEvent: event,
      data: rangeRowsData,
      type: "row"
    });
  }
  clearSelectionRange(event) {
    let rangeStart, rangeEnd;
    if (this.rangeRowIndex > this.anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (this.rangeRowIndex < this.anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }
    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      this._selection = this.selection.filter((val, i2) => i2 != selectionIndex);
      let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
      this.onRowUnselect.emit({
        originalEvent: event,
        data: rangeRowData,
        type: "row"
      });
    }
  }
  isSelected(rowData) {
    if (rowData && this.selection) {
      if (this.dataKey) {
        return this.selectionKeys[ObjectUtils.resolveFieldData(rowData, this.dataKey)] !== void 0;
      } else {
        if (Array.isArray(this.selection))
          return this.findIndexInSelection(rowData) > -1;
        else
          return this.equals(rowData, this.selection);
      }
    }
    return false;
  }
  findIndexInSelection(rowData) {
    let index = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(rowData, this.selection[i])) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  isRowSelectable(data, index) {
    if (this.rowSelectable && !this.rowSelectable({
      data,
      index
    })) {
      return false;
    }
    return true;
  }
  toggleRowWithRadio(event, rowData) {
    this.preventSelectionSetterPropagation = true;
    if (this.selection != rowData) {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }
      this._selection = rowData;
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
      if (this.dataKey) {
        this.selectionKeys = {};
        this.selectionKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
      }
    } else {
      this._selection = null;
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "radiobutton"
      });
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowWithCheckbox(event, rowData) {
    this.selection = this.selection || [];
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey)) : null;
    this.preventSelectionSetterPropagation = true;
    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    } else {
      if (!this.isRowSelectable(rowData, event.rowIndex)) {
        return;
      }
      this._selection = this.selection ? [...this.selection, rowData] : [rowData];
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: "checkbox"
      });
      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    }
    this.tableService.onSelectionChange();
    if (this.isStateful()) {
      this.saveState();
    }
  }
  toggleRowsWithCheckbox(event, check) {
    if (this._selectAll !== null) {
      this.selectAllChange.emit({
        originalEvent: event,
        checked: check
      });
    } else {
      const data = this.selectionPageOnly ? this.dataToRender(this.processedData) : this.processedData;
      let selection = this.selectionPageOnly && this._selection ? this._selection.filter((s) => !data.some((d) => this.equals(s, d))) : [];
      if (check) {
        selection = this.frozenValue ? [...selection, ...this.frozenValue, ...data] : [...selection, ...data];
        selection = this.rowSelectable ? selection.filter((data2, index) => this.rowSelectable({
          data: data2,
          index
        })) : selection;
      }
      this._selection = selection;
      this.preventSelectionSetterPropagation = true;
      this.updateSelectionKeys();
      this.selectionChange.emit(this._selection);
      this.tableService.onSelectionChange();
      this.onHeaderCheckboxToggle.emit({
        originalEvent: event,
        checked: check
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
  }
  equals(data1, data2) {
    return this.compareSelectionBy === "equals" ? data1 === data2 : ObjectUtils.equals(data1, data2, this.dataKey);
  }
  /* Legacy Filtering for custom elements */
  filter(value, field, matchMode) {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    if (!this.isFilterBlank(value)) {
      this.filters[field] = {
        value,
        matchMode
      };
    } else if (this.filters[field]) {
      delete this.filters[field];
    }
    this.filterTimeout = setTimeout(() => {
      this._filter();
      this.filterTimeout = null;
    }, this.filterDelay);
    this.anchorRowIndex = null;
  }
  filterGlobal(value, matchMode) {
    this.filter(value, "global", matchMode);
  }
  isFilterBlank(filter) {
    if (filter !== null && filter !== void 0) {
      if (typeof filter === "string" && filter.trim().length == 0 || Array.isArray(filter) && filter.length == 0)
        return true;
      else
        return false;
    }
    return true;
  }
  _filter() {
    if (!this.restoringFilter) {
      this.first = 0;
      this.firstChange.emit(this.first);
    }
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      if (!this.value) {
        return;
      }
      if (!this.hasFilter()) {
        this.filteredValue = null;
        if (this.paginator) {
          this.totalRecords = this.value ? this.value.length : 0;
        }
      } else {
        let globalFilterFieldsArray;
        if (this.filters["global"]) {
          if (!this.columns && !this.globalFilterFields)
            throw new Error("Global filtering requires dynamic columns or globalFilterFields to be defined.");
          else
            globalFilterFieldsArray = this.globalFilterFields || this.columns;
        }
        this.filteredValue = [];
        for (let i = 0; i < this.value.length; i++) {
          let localMatch = true;
          let globalMatch = false;
          let localFiltered = false;
          for (let prop in this.filters) {
            if (this.filters.hasOwnProperty(prop) && prop !== "global") {
              localFiltered = true;
              let filterField = prop;
              let filterMeta = this.filters[filterField];
              if (Array.isArray(filterMeta)) {
                for (let meta of filterMeta) {
                  localMatch = this.executeLocalFilter(filterField, this.value[i], meta);
                  if (meta.operator === FilterOperator.OR && localMatch || meta.operator === FilterOperator.AND && !localMatch) {
                    break;
                  }
                }
              } else {
                localMatch = this.executeLocalFilter(filterField, this.value[i], filterMeta);
              }
              if (!localMatch) {
                break;
              }
            }
          }
          if (this.filters["global"] && !globalMatch && globalFilterFieldsArray) {
            for (let j = 0; j < globalFilterFieldsArray.length; j++) {
              let globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
              globalMatch = this.filterService.filters[this.filters["global"].matchMode](ObjectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters["global"].value, this.filterLocale);
              if (globalMatch) {
                break;
              }
            }
          }
          let matches;
          if (this.filters["global"]) {
            matches = localFiltered ? localFiltered && localMatch && globalMatch : globalMatch;
          } else {
            matches = localFiltered && localMatch;
          }
          if (matches) {
            this.filteredValue.push(this.value[i]);
          }
        }
        if (this.filteredValue.length === this.value.length) {
          this.filteredValue = null;
        }
        if (this.paginator) {
          this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
        }
      }
    }
    this.onFilter.emit({
      filters: this.filters,
      filteredValue: this.filteredValue || this.value
    });
    this.tableService.onValueChange(this.value);
    if (this.isStateful() && !this.restoringFilter) {
      this.saveState();
    }
    if (this.restoringFilter) {
      this.restoringFilter = false;
    }
    this.cd.markForCheck();
    if (this.scrollable) {
      this.resetScrollTop();
    }
  }
  executeLocalFilter(field, rowData, filterMeta) {
    let filterValue = filterMeta.value;
    let filterMatchMode = filterMeta.matchMode || FilterMatchMode.STARTS_WITH;
    let dataFieldValue = ObjectUtils.resolveFieldData(rowData, field);
    let filterConstraint = this.filterService.filters[filterMatchMode];
    return filterConstraint(dataFieldValue, filterValue, this.filterLocale);
  }
  hasFilter() {
    let empty = true;
    for (let prop in this.filters) {
      if (this.filters.hasOwnProperty(prop)) {
        empty = false;
        break;
      }
    }
    return !empty;
  }
  createLazyLoadMetadata() {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      filters: this.filters,
      globalFilter: this.filters && this.filters["global"] ? this.filters["global"].value : null,
      multiSortMeta: this.multiSortMeta,
      forceUpdate: () => this.cd.detectChanges()
    };
  }
  clear() {
    this._sortField = null;
    this._sortOrder = this.defaultSortOrder;
    this._multiSortMeta = null;
    this.tableService.onSort(null);
    if (this.filters["global"]) {
      this.filters["global"].value = null;
    }
    this.filteredValue = null;
    this.tableService.onResetChange();
    this.first = 0;
    this.firstChange.emit(this.first);
    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    } else {
      this.totalRecords = this._value ? this._value.length : 0;
    }
  }
  reset() {
    this.clear();
  }
  getExportHeader(column) {
    return column[this.exportHeader] || column.header || column.field;
  }
  exportCSV(options) {
    let data;
    let csv = "";
    let columns = this.columns;
    if (options && options.selectionOnly) {
      data = this.selection || [];
    } else if (options && options.allValues) {
      data = this.value || [];
    } else {
      data = this.filteredValue || this.value;
      if (this.frozenValue) {
        data = data ? [...this.frozenValue, ...data] : this.frozenValue;
      }
    }
    for (let i = 0; i < columns.length; i++) {
      let column = columns[i];
      if (column.exportable !== false && column.field) {
        csv += '"' + this.getExportHeader(column) + '"';
        if (i < columns.length - 1) {
          csv += this.csvSeparator;
        }
      }
    }
    data.forEach((record, i) => {
      csv += "\n";
      for (let i2 = 0; i2 < columns.length; i2++) {
        let column = columns[i2];
        if (column.exportable !== false && column.field) {
          let cellData = ObjectUtils.resolveFieldData(record, column.field);
          if (cellData != null) {
            if (this.exportFunction) {
              cellData = this.exportFunction({
                data: cellData,
                field: column.field
              });
            } else
              cellData = String(cellData).replace(/"/g, '""');
          } else
            cellData = "";
          csv += '"' + cellData + '"';
          if (i2 < columns.length - 1) {
            csv += this.csvSeparator;
          }
        }
      }
    });
    let blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;"
    });
    let link = this.renderer.createElement("a");
    link.style.display = "none";
    this.renderer.appendChild(this.document.body, link);
    if (link.download !== void 0) {
      link.setAttribute("href", URL.createObjectURL(blob));
      link.setAttribute("download", this.exportFilename + ".csv");
      link.click();
    } else {
      csv = "data:text/csv;charset=utf-8," + csv;
      this.window.open(encodeURI(csv));
    }
    this.renderer.removeChild(this.document.body, link);
  }
  onLazyItemLoad(event) {
    this.onLazyLoad.emit(__spreadProps(__spreadValues(__spreadValues({}, this.createLazyLoadMetadata()), event), {
      rows: event.last - event.first
    }));
  }
  resetScrollTop() {
    if (this.virtualScroll)
      this.scrollToVirtualIndex(0);
    else
      this.scrollTo({
        top: 0
      });
  }
  scrollToVirtualIndex(index) {
    this.virtualScroll && this.scroller.scrollToIndex(index);
  }
  scrollTo(options) {
    if (this.virtualScroll) {
      this.scroller.scrollTo(options);
    } else if (this.wrapperViewChild && this.wrapperViewChild.nativeElement) {
      if (this.wrapperViewChild.nativeElement.scrollTo) {
        this.wrapperViewChild.nativeElement.scrollTo(options);
      } else {
        this.wrapperViewChild.nativeElement.scrollLeft = options.left;
        this.wrapperViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }
  updateEditingCell(cell, data, field, index) {
    this.editingCell = cell;
    this.editingCellData = data;
    this.editingCellField = field;
    this.editingCellRowIndex = index;
    this.bindDocumentEditListener();
  }
  isEditingCellValid() {
    return this.editingCell && DomHandler.find(this.editingCell, ".ng-invalid.ng-dirty").length === 0;
  }
  bindDocumentEditListener() {
    if (!this.documentEditListener) {
      this.documentEditListener = this.renderer.listen(this.document, "click", (event) => {
        if (this.editingCell && !this.selfClick && this.isEditingCellValid()) {
          DomHandler.removeClass(this.editingCell, "p-cell-editing");
          this.editingCell = null;
          this.onEditComplete.emit({
            field: this.editingCellField,
            data: this.editingCellData,
            originalEvent: event,
            index: this.editingCellRowIndex
          });
          this.editingCellField = null;
          this.editingCellData = null;
          this.editingCellRowIndex = null;
          this.unbindDocumentEditListener();
          this.cd.markForCheck();
          if (this.overlaySubscription) {
            this.overlaySubscription.unsubscribe();
          }
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentEditListener() {
    if (this.documentEditListener) {
      this.documentEditListener();
      this.documentEditListener = null;
    }
  }
  initRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    this.editingRowKeys[dataKeyValue] = true;
  }
  saveRowEdit(rowData, rowElement) {
    if (DomHandler.find(rowElement, ".ng-invalid.ng-dirty").length === 0) {
      let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
      delete this.editingRowKeys[dataKeyValue];
    }
  }
  cancelRowEdit(rowData) {
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    delete this.editingRowKeys[dataKeyValue];
  }
  toggleRow(rowData, event) {
    if (!this.dataKey) {
      throw new Error("dataKey must be defined to use row expansion");
    }
    let dataKeyValue = String(ObjectUtils.resolveFieldData(rowData, this.dataKey));
    if (this.expandedRowKeys[dataKeyValue] != null) {
      delete this.expandedRowKeys[dataKeyValue];
      this.onRowCollapse.emit({
        originalEvent: event,
        data: rowData
      });
    } else {
      if (this.rowExpandMode === "single") {
        this.expandedRowKeys = {};
      }
      this.expandedRowKeys[dataKeyValue] = true;
      this.onRowExpand.emit({
        originalEvent: event,
        data: rowData
      });
    }
    if (event) {
      event.preventDefault();
    }
    if (this.isStateful()) {
      this.saveState();
    }
  }
  isRowExpanded(rowData) {
    return this.expandedRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isRowEditing(rowData) {
    return this.editingRowKeys[String(ObjectUtils.resolveFieldData(rowData, this.dataKey))] === true;
  }
  isSingleSelectionMode() {
    return this.selectionMode === "single";
  }
  isMultipleSelectionMode() {
    return this.selectionMode === "multiple";
  }
  onColumnResizeBegin(event) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild.nativeElement).left;
    this.resizeColumnElement = event.target.parentElement;
    this.columnResizing = true;
    this.lastResizerHelperX = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft;
    this.onColumnResize(event);
    event.preventDefault();
  }
  onColumnResize(event) {
    let containerLeft = DomHandler.getOffset(this.containerViewChild.nativeElement).left;
    DomHandler.addClass(this.containerViewChild.nativeElement, "p-unselectable-text");
    this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + "px";
    this.resizeHelperViewChild.nativeElement.style.top = "0px";
    this.resizeHelperViewChild.nativeElement.style.left = event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft + "px";
    this.resizeHelperViewChild.nativeElement.style.display = "block";
  }
  onColumnResizeEnd() {
    let delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
    let columnWidth = this.resizeColumnElement.offsetWidth;
    let newColumnWidth = columnWidth + delta;
    let minWidth = this.resizeColumnElement.style.minWidth.replace(/[^\d.]/g, "") || 15;
    if (newColumnWidth >= minWidth) {
      if (this.columnResizeMode === "fit") {
        let nextColumn = this.resizeColumnElement.nextElementSibling;
        let nextColumnWidth = nextColumn.offsetWidth - delta;
        if (newColumnWidth > 15 && nextColumnWidth > 15) {
          this.resizeTableCells(newColumnWidth, nextColumnWidth);
        }
      } else if (this.columnResizeMode === "expand") {
        let tableWidth = this.tableViewChild.nativeElement.offsetWidth + delta;
        this.setResizeTableWidth(tableWidth + "px");
        this.resizeTableCells(newColumnWidth, null);
      }
      this.onColResize.emit({
        element: this.resizeColumnElement,
        delta
      });
      if (this.isStateful()) {
        this.saveState();
      }
    }
    this.resizeHelperViewChild.nativeElement.style.display = "none";
    DomHandler.removeClass(this.containerViewChild.nativeElement, "p-unselectable-text");
  }
  resizeTableCells(newColumnWidth, nextColumnWidth) {
    let colIndex = DomHandler.index(this.resizeColumnElement);
    let widths = [];
    const tableHead = DomHandler.findSingle(this.containerViewChild.nativeElement, ".p-datatable-thead");
    let headers = DomHandler.find(tableHead, "tr > th");
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    this.destroyStyleElement();
    this.createStyleElement();
    let innerHTML = "";
    widths.forEach((width, index) => {
      let colWidth = index === colIndex ? newColumnWidth : nextColumnWidth && index === colIndex + 1 ? nextColumnWidth : width;
      let style2 = `width: ${colWidth}px !important; max-width: ${colWidth}px !important;`;
      innerHTML += `
                #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                    ${style2}
                }
            `;
    });
    this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
  }
  onColumnDragStart(event, columnElement) {
    this.reorderIconWidth = DomHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
    this.reorderIconHeight = DomHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
    this.draggedColumn = columnElement;
    event.dataTransfer.setData("text", "b");
  }
  onColumnDragEnter(event, dropHeader) {
    if (this.reorderableColumns && this.draggedColumn && dropHeader) {
      event.preventDefault();
      let containerOffset = DomHandler.getOffset(this.containerViewChild.nativeElement);
      let dropHeaderOffset = DomHandler.getOffset(dropHeader);
      if (this.draggedColumn != dropHeader) {
        let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
        let dropIndex = DomHandler.indexWithinGroup(dropHeader, "preorderablecolumn");
        let targetLeft = dropHeaderOffset.left - containerOffset.left;
        let targetTop = containerOffset.top - dropHeaderOffset.top;
        let columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
        this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + "px";
        this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + "px";
        if (event.pageX > columnCenter) {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = 1;
        } else {
          this.reorderIndicatorUpViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.reorderIndicatorDownViewChild.nativeElement.style.left = targetLeft - Math.ceil(this.reorderIconWidth / 2) + "px";
          this.dropPosition = -1;
        }
        this.reorderIndicatorUpViewChild.nativeElement.style.display = "block";
        this.reorderIndicatorDownViewChild.nativeElement.style.display = "block";
      } else {
        event.dataTransfer.dropEffect = "none";
      }
    }
  }
  onColumnDragLeave(event) {
    if (this.reorderableColumns && this.draggedColumn) {
      event.preventDefault();
    }
  }
  onColumnDrop(event, dropColumn) {
    event.preventDefault();
    if (this.draggedColumn) {
      let dragIndex = DomHandler.indexWithinGroup(this.draggedColumn, "preorderablecolumn");
      let dropIndex = DomHandler.indexWithinGroup(dropColumn, "preorderablecolumn");
      let allowDrop = dragIndex != dropIndex;
      if (allowDrop && (dropIndex - dragIndex == 1 && this.dropPosition === -1 || dragIndex - dropIndex == 1 && this.dropPosition === 1)) {
        allowDrop = false;
      }
      if (allowDrop && dropIndex < dragIndex && this.dropPosition === 1) {
        dropIndex = dropIndex + 1;
      }
      if (allowDrop && dropIndex > dragIndex && this.dropPosition === -1) {
        dropIndex = dropIndex - 1;
      }
      if (allowDrop) {
        ObjectUtils.reorderArray(this.columns, dragIndex, dropIndex);
        this.onColReorder.emit({
          dragIndex,
          dropIndex,
          columns: this.columns
        });
        if (this.isStateful()) {
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              this.saveState();
            });
          });
        }
      }
      this.reorderIndicatorUpViewChild.nativeElement.style.display = "none";
      this.reorderIndicatorDownViewChild.nativeElement.style.display = "none";
      this.draggedColumn.draggable = false;
      this.draggedColumn = null;
      this.dropPosition = null;
    }
  }
  onRowDragStart(event, index) {
    this.rowDragging = true;
    this.draggedRowIndex = index;
    event.dataTransfer.setData("text", "b");
  }
  onRowDragOver(event, index, rowElement) {
    if (this.rowDragging && this.draggedRowIndex !== index) {
      let rowY = DomHandler.getOffset(rowElement).top + DomHandler.getWindowScrollTop();
      let pageY = event.pageY;
      let rowMidY = rowY + DomHandler.getOuterHeight(rowElement) / 2;
      let prevRowElement = rowElement.previousElementSibling;
      if (pageY < rowMidY) {
        DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
        this.droppedRowIndex = index;
        if (prevRowElement)
          DomHandler.addClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else
          DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
      } else {
        if (prevRowElement)
          DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
        else
          DomHandler.addClass(rowElement, "p-datatable-dragpoint-top");
        this.droppedRowIndex = index + 1;
        DomHandler.addClass(rowElement, "p-datatable-dragpoint-bottom");
      }
    }
  }
  onRowDragLeave(event, rowElement) {
    let prevRowElement = rowElement.previousElementSibling;
    if (prevRowElement) {
      DomHandler.removeClass(prevRowElement, "p-datatable-dragpoint-bottom");
    }
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-bottom");
    DomHandler.removeClass(rowElement, "p-datatable-dragpoint-top");
  }
  onRowDragEnd(event) {
    this.rowDragging = false;
    this.draggedRowIndex = null;
    this.droppedRowIndex = null;
  }
  onRowDrop(event, rowElement) {
    if (this.droppedRowIndex != null) {
      let dropIndex = this.draggedRowIndex > this.droppedRowIndex ? this.droppedRowIndex : this.droppedRowIndex === 0 ? 0 : this.droppedRowIndex - 1;
      ObjectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
      if (this.virtualScroll) {
        this._value = [...this._value];
      }
      this.onRowReorder.emit({
        dragIndex: this.draggedRowIndex,
        dropIndex
      });
    }
    this.onRowDragLeave(event, rowElement);
    this.onRowDragEnd(event);
  }
  isEmpty() {
    let data = this.filteredValue || this.value;
    return data == null || data.length == 0;
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  getStorage() {
    if (isPlatformBrowser(this.platformId)) {
      switch (this.stateStorage) {
        case "local":
          return window.localStorage;
        case "session":
          return window.sessionStorage;
        default:
          throw new Error(this.stateStorage + ' is not a valid value for the state storage, supported values are "local" and "session".');
      }
    } else {
      throw new Error("Browser storage is not available in the server side.");
    }
  }
  isStateful() {
    return this.stateKey != null;
  }
  saveState() {
    const storage = this.getStorage();
    let state = {};
    if (this.paginator) {
      state.first = this.first;
      state.rows = this.rows;
    }
    if (this.sortField) {
      state.sortField = this.sortField;
      state.sortOrder = this.sortOrder;
    }
    if (this.multiSortMeta) {
      state.multiSortMeta = this.multiSortMeta;
    }
    if (this.hasFilter()) {
      state.filters = this.filters;
    }
    if (this.resizableColumns) {
      this.saveColumnWidths(state);
    }
    if (this.reorderableColumns) {
      this.saveColumnOrder(state);
    }
    if (this.selection) {
      state.selection = this.selection;
    }
    if (Object.keys(this.expandedRowKeys).length) {
      state.expandedRowKeys = this.expandedRowKeys;
    }
    storage.setItem(this.stateKey, JSON.stringify(state));
    this.onStateSave.emit(state);
  }
  clearState() {
    const storage = this.getStorage();
    if (this.stateKey) {
      storage.removeItem(this.stateKey);
    }
  }
  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = function(key, value) {
      if (typeof value === "string" && dateFormat.test(value)) {
        return new Date(value);
      }
      return value;
    };
    if (stateString) {
      let state = JSON.parse(stateString, reviver);
      if (this.paginator) {
        if (this.first !== void 0) {
          this.first = state.first;
          this.firstChange.emit(this.first);
        }
        if (this.rows !== void 0) {
          this.rows = state.rows;
          this.rowsChange.emit(this.rows);
        }
      }
      if (state.sortField) {
        this.restoringSort = true;
        this._sortField = state.sortField;
        this._sortOrder = state.sortOrder;
      }
      if (state.multiSortMeta) {
        this.restoringSort = true;
        this._multiSortMeta = state.multiSortMeta;
      }
      if (state.filters) {
        this.restoringFilter = true;
        this.filters = state.filters;
      }
      if (this.resizableColumns) {
        this.columnWidthsState = state.columnWidths;
        this.tableWidthState = state.tableWidth;
      }
      if (state.expandedRowKeys) {
        this.expandedRowKeys = state.expandedRowKeys;
      }
      if (state.selection) {
        Promise.resolve(null).then(() => this.selectionChange.emit(state.selection));
      }
      this.stateRestored = true;
      this.onStateRestore.emit(state);
    }
  }
  saveColumnWidths(state) {
    let widths = [];
    let headers = DomHandler.find(this.containerViewChild.nativeElement, ".p-datatable-thead > tr > th");
    headers.forEach((header) => widths.push(DomHandler.getOuterWidth(header)));
    state.columnWidths = widths.join(",");
    if (this.columnResizeMode === "expand") {
      state.tableWidth = DomHandler.getOuterWidth(this.tableViewChild.nativeElement);
    }
  }
  setResizeTableWidth(width) {
    this.tableViewChild.nativeElement.style.width = width;
    this.tableViewChild.nativeElement.style.minWidth = width;
  }
  restoreColumnWidths() {
    if (this.columnWidthsState) {
      let widths = this.columnWidthsState.split(",");
      if (this.columnResizeMode === "expand" && this.tableWidthState) {
        this.setResizeTableWidth(this.tableWidthState + "px");
      }
      if (ObjectUtils.isNotEmpty(widths)) {
        this.createStyleElement();
        let innerHTML = "";
        widths.forEach((width, index) => {
          let style2 = `width: ${width}px !important; max-width: ${width}px !important`;
          innerHTML += `
                        #${this.id}-table > .p-datatable-thead > tr > th:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tbody > tr > td:nth-child(${index + 1}),
                        #${this.id}-table > .p-datatable-tfoot > tr > td:nth-child(${index + 1}) {
                            ${style2}
                        }
                    `;
        });
        this.styleElement.innerHTML = innerHTML;
      }
    }
  }
  saveColumnOrder(state) {
    if (this.columns) {
      let columnOrder = [];
      this.columns.map((column) => {
        columnOrder.push(column.field || column.key);
      });
      state.columnOrder = columnOrder;
    }
  }
  restoreColumnOrder() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    if (stateString) {
      let state = JSON.parse(stateString);
      let columnOrder = state.columnOrder;
      if (columnOrder) {
        let reorderedColumns = [];
        columnOrder.map((key) => {
          let col = this.findColumnByKey(key);
          if (col) {
            reorderedColumns.push(col);
          }
        });
        this.columnOrderStateRestored = true;
        this.columns = reorderedColumns;
      }
    }
  }
  findColumnByKey(key) {
    if (this.columns) {
      for (let col of this.columns) {
        if (col.key === key || col.field === key)
          return col;
        else
          continue;
      }
    } else {
      return null;
    }
  }
  createStyleElement() {
    this.styleElement = this.renderer.createElement("style");
    this.styleElement.type = "text/css";
    this.renderer.appendChild(this.document.head, this.styleElement);
  }
  getGroupRowsMeta() {
    return {
      field: this.groupRowsBy,
      order: this.groupRowsByOrder
    };
  }
  createResponsiveStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.responsiveStyleElement) {
        this.responsiveStyleElement = this.renderer.createElement("style");
        this.responsiveStyleElement.type = "text/css";
        this.renderer.appendChild(this.document.head, this.responsiveStyleElement);
        let innerHTML = `
    @media screen and (max-width: ${this.breakpoint}) {
        #${this.id}-table > .p-datatable-thead > tr > th,
        #${this.id}-table > .p-datatable-tfoot > tr > td {
            display: none !important;
        }
    
        #${this.id}-table > .p-datatable-tbody > tr > td {
            display: flex;
            width: 100% !important;
            align-items: center;
            justify-content: space-between;
        }
    
        #${this.id}-table > .p-datatable-tbody > tr > td:not(:last-child) {
            border: 0 none;
        }
    
        #${this.id}.p-datatable-gridlines > .p-datatable-wrapper > .p-datatable-table > .p-datatable-tbody > tr > td:last-child {
            border-top: 0;
            border-right: 0;
            border-left: 0;
        }
    
        #${this.id}-table > .p-datatable-tbody > tr > td > .p-column-title {
            display: block;
        }
    }
    `;
        this.renderer.setProperty(this.responsiveStyleElement, "innerHTML", innerHTML);
      }
    }
  }
  destroyResponsiveStyle() {
    if (this.responsiveStyleElement) {
      this.renderer.removeChild(this.document.head, this.responsiveStyleElement);
      this.responsiveStyleElement = null;
    }
  }
  destroyStyleElement() {
    if (this.styleElement) {
      this.renderer.removeChild(this.document.head, this.styleElement);
      this.styleElement = null;
    }
  }
  ngOnDestroy() {
    this.unbindDocumentEditListener();
    this.editingCell = null;
    this.initialized = null;
    this.destroyStyleElement();
    this.destroyResponsiveStyle();
  }
};
Table.ɵfac = function Table_Factory(t) {
  return new (t || Table)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(OverlayService));
};
Table.ɵcmp = ɵɵdefineComponent({
  type: Table,
  selectors: [["p-table"]],
  contentQueries: function Table_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Table_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c03, 5);
      ɵɵviewQuery(_c13, 5);
      ɵɵviewQuery(_c22, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
      ɵɵviewQuery(_c5, 5);
      ɵɵviewQuery(_c6, 5);
      ɵɵviewQuery(_c7, 5);
      ɵɵviewQuery(_c8, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeHelperViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.reorderIndicatorUpViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.reorderIndicatorDownViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.wrapperViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableHeaderViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tableFooterViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    frozenColumns: "frozenColumns",
    frozenValue: "frozenValue",
    style: "style",
    styleClass: "styleClass",
    tableStyle: "tableStyle",
    tableStyleClass: "tableStyleClass",
    paginator: "paginator",
    pageLinks: "pageLinks",
    rowsPerPageOptions: "rowsPerPageOptions",
    alwaysShowPaginator: "alwaysShowPaginator",
    paginatorPosition: "paginatorPosition",
    paginatorDropdownAppendTo: "paginatorDropdownAppendTo",
    paginatorDropdownScrollHeight: "paginatorDropdownScrollHeight",
    currentPageReportTemplate: "currentPageReportTemplate",
    showCurrentPageReport: "showCurrentPageReport",
    showJumpToPageDropdown: "showJumpToPageDropdown",
    showJumpToPageInput: "showJumpToPageInput",
    showFirstLastIcon: "showFirstLastIcon",
    showPageLinks: "showPageLinks",
    defaultSortOrder: "defaultSortOrder",
    sortMode: "sortMode",
    resetPageOnSort: "resetPageOnSort",
    selectionMode: "selectionMode",
    selectionPageOnly: "selectionPageOnly",
    contextMenuSelection: "contextMenuSelection",
    contextMenuSelectionMode: "contextMenuSelectionMode",
    dataKey: "dataKey",
    metaKeySelection: "metaKeySelection",
    rowSelectable: "rowSelectable",
    rowTrackBy: "rowTrackBy",
    lazy: "lazy",
    lazyLoadOnInit: "lazyLoadOnInit",
    compareSelectionBy: "compareSelectionBy",
    csvSeparator: "csvSeparator",
    exportFilename: "exportFilename",
    filters: "filters",
    globalFilterFields: "globalFilterFields",
    filterDelay: "filterDelay",
    filterLocale: "filterLocale",
    expandedRowKeys: "expandedRowKeys",
    editingRowKeys: "editingRowKeys",
    rowExpandMode: "rowExpandMode",
    scrollable: "scrollable",
    scrollDirection: "scrollDirection",
    rowGroupMode: "rowGroupMode",
    scrollHeight: "scrollHeight",
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    virtualScrollDelay: "virtualScrollDelay",
    frozenWidth: "frozenWidth",
    responsive: "responsive",
    contextMenu: "contextMenu",
    resizableColumns: "resizableColumns",
    columnResizeMode: "columnResizeMode",
    reorderableColumns: "reorderableColumns",
    loading: "loading",
    loadingIcon: "loadingIcon",
    showLoader: "showLoader",
    rowHover: "rowHover",
    customSort: "customSort",
    showInitialSortBadge: "showInitialSortBadge",
    autoLayout: "autoLayout",
    exportFunction: "exportFunction",
    exportHeader: "exportHeader",
    stateKey: "stateKey",
    stateStorage: "stateStorage",
    editMode: "editMode",
    groupRowsBy: "groupRowsBy",
    groupRowsByOrder: "groupRowsByOrder",
    responsiveLayout: "responsiveLayout",
    breakpoint: "breakpoint",
    virtualRowHeight: "virtualRowHeight",
    value: "value",
    columns: "columns",
    first: "first",
    rows: "rows",
    totalRecords: "totalRecords",
    sortField: "sortField",
    sortOrder: "sortOrder",
    multiSortMeta: "multiSortMeta",
    selection: "selection",
    selectAll: "selectAll"
  },
  outputs: {
    selectAllChange: "selectAllChange",
    selectionChange: "selectionChange",
    contextMenuSelectionChange: "contextMenuSelectionChange",
    onRowSelect: "onRowSelect",
    onRowUnselect: "onRowUnselect",
    onPage: "onPage",
    onSort: "onSort",
    onFilter: "onFilter",
    onLazyLoad: "onLazyLoad",
    onRowExpand: "onRowExpand",
    onRowCollapse: "onRowCollapse",
    onContextMenuSelect: "onContextMenuSelect",
    onColResize: "onColResize",
    onColReorder: "onColReorder",
    onRowReorder: "onRowReorder",
    onEditInit: "onEditInit",
    onEditComplete: "onEditComplete",
    onEditCancel: "onEditCancel",
    onHeaderCheckboxToggle: "onHeaderCheckboxToggle",
    sortFunction: "sortFunction",
    firstChange: "firstChange",
    rowsChange: "rowsChange",
    onStateSave: "onStateSave",
    onStateRestore: "onStateRestore"
  },
  features: [ɵɵProvidersFeature([TableService]), ɵɵNgOnChangesFeature],
  decls: 16,
  vars: 22,
  consts: [[3, "ngStyle", "ngClass"], ["container", ""], ["class", "p-datatable-loading-overlay p-component-overlay", 4, "ngIf"], ["class", "p-datatable-header", 4, "ngIf"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange", 4, "ngIf"], [1, "p-datatable-wrapper", 3, "ngStyle"], ["wrapper", ""], [3, "items", "columns", "style", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize", "onLazyLoad", 4, "ngIf"], [4, "ngIf"], ["buildInTable", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange", 4, "ngIf"], ["class", "p-datatable-footer", 4, "ngIf"], ["class", "p-column-resizer-helper", "style", "display:none", 4, "ngIf"], ["class", "p-datatable-reorder-indicator-up", "style", "display: none;", 4, "ngIf"], ["class", "p-datatable-reorder-indicator-down", "style", "display: none;", 4, "ngIf"], [1, "p-datatable-loading-overlay", "p-component-overlay"], [3, "class", 4, "ngIf"], [3, "spin", "styleClass", 4, "ngIf"], ["class", "p-datatable-loading-icon", 4, "ngIf"], [3, "spin", "styleClass"], [1, "p-datatable-loading-icon"], [4, "ngTemplateOutlet"], [1, "p-datatable-header"], ["styleClass", "p-paginator-top", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange"], ["pTemplate", "firstpagelinkicon"], ["pTemplate", "previouspagelinkicon"], ["pTemplate", "lastpagelinkicon"], ["pTemplate", "nextpagelinkicon"], [3, "items", "columns", "scrollHeight", "itemSize", "step", "delay", "inline", "lazy", "loaderDisabled", "showSpacer", "showLoader", "options", "autoSize", "onLazyLoad"], ["scroller", ""], ["pTemplate", "content"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "table", 3, "ngClass"], ["table", ""], [1, "p-datatable-thead"], ["thead", ""], ["class", "p-datatable-tbody p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen", 4, "ngIf"], [1, "p-datatable-tbody", 3, "ngClass", "value", "pTableBody", "pTableBodyTemplate", "scrollerOptions"], ["class", "p-datatable-scroller-spacer", 3, "style", 4, "ngIf"], ["class", "p-datatable-tfoot", 4, "ngIf"], [1, "p-datatable-tbody", "p-datatable-frozen-tbody", 3, "value", "frozenRows", "pTableBody", "pTableBodyTemplate", "frozen"], [1, "p-datatable-scroller-spacer"], [1, "p-datatable-tfoot"], ["tfoot", ""], ["styleClass", "p-paginator-bottom", 3, "rows", "first", "totalRecords", "pageLinkSize", "alwaysShow", "rowsPerPageOptions", "templateLeft", "templateRight", "dropdownAppendTo", "dropdownScrollHeight", "currentPageReportTemplate", "showFirstLastIcon", "dropdownItemTemplate", "showCurrentPageReport", "showJumpToPageDropdown", "showJumpToPageInput", "showPageLinks", "onPageChange"], [1, "p-datatable-footer"], [1, "p-column-resizer-helper", 2, "display", "none"], ["resizeHelper", ""], [1, "p-datatable-reorder-indicator-up", 2, "display", "none"], ["reorderIndicatorUp", ""], [1, "p-datatable-reorder-indicator-down", 2, "display", "none"], ["reorderIndicatorDown", ""]],
  template: function Table_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵtemplate(2, Table_div_2_Template, 3, 2, "div", 2);
      ɵɵtemplate(3, Table_div_3_Template, 2, 1, "div", 3);
      ɵɵtemplate(4, Table_p_paginator_4_Template, 5, 21, "p-paginator", 4);
      ɵɵelementStart(5, "div", 5, 6);
      ɵɵtemplate(7, Table_p_scroller_7_Template, 3, 17, "p-scroller", 7);
      ɵɵtemplate(8, Table_ng_container_8_Template, 2, 7, "ng-container", 8);
      ɵɵtemplate(9, Table_ng_template_9_Template, 10, 28, "ng-template", null, 9, ɵɵtemplateRefExtractor);
      ɵɵelementEnd();
      ɵɵtemplate(11, Table_p_paginator_11_Template, 5, 21, "p-paginator", 10);
      ɵɵtemplate(12, Table_div_12_Template, 2, 1, "div", 11);
      ɵɵtemplate(13, Table_div_13_Template, 2, 0, "div", 12);
      ɵɵtemplate(14, Table_span_14_Template, 4, 2, "span", 13);
      ɵɵtemplate(15, Table_span_15_Template, 4, 2, "span", 14);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction3(16, _c14, ctx.rowHover || ctx.selectionMode, ctx.scrollable, ctx.scrollable && ctx.scrollHeight === "flex"));
      ɵɵattribute("id", ctx.id);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.loading && ctx.showLoader);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.captionTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "top" || ctx.paginatorPosition == "both"));
      ɵɵadvance(1);
      ɵɵproperty("ngStyle", ɵɵpureFunction1(20, _c15, ctx.virtualScroll ? "" : ctx.scrollHeight));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.virtualScroll);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.virtualScroll);
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.paginator && (ctx.paginatorPosition === "bottom" || ctx.paginatorPosition == "both"));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.summaryTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.resizableColumns);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.reorderableColumns);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.reorderableColumns);
    }
  },
  dependencies: function() {
    return [NgClass, NgIf, NgTemplateOutlet, NgStyle, Paginator, PrimeTemplate, Scroller, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, TableBody];
  },
  styles: [".p-datatable{position:relative}.p-datatable>.p-datatable-wrapper{overflow:auto}.p-datatable-table{border-spacing:0px;width:100%}.p-datatable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable>.p-datatable-wrapper{position:relative}.p-datatable-scrollable-table>.p-datatable-thead{position:sticky;top:0;z-index:1}.p-datatable-scrollable-table>.p-datatable-frozen-tbody{position:sticky;z-index:1}.p-datatable-scrollable-table>.p-datatable-tfoot{position:sticky;bottom:0;z-index:1}.p-datatable-scrollable .p-frozen-column{position:sticky;background:inherit}.p-datatable-scrollable th.p-frozen-column{z-index:1}.p-datatable-flex-scrollable{display:flex;flex-direction:column;height:100%}.p-datatable-flex-scrollable>.p-datatable-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header{position:sticky;z-index:1}.p-datatable-resizable-table>.p-datatable-thead>tr>th,.p-datatable-resizable-table>.p-datatable-tfoot>tr>td,.p-datatable-resizable-table>.p-datatable-tbody>tr>td{overflow:hidden;white-space:nowrap}.p-datatable-resizable-table>.p-datatable-thead>tr>th.p-resizable-column:not(.p-frozen-column){background-clip:padding-box;position:relative}.p-datatable-resizable-table-fit>.p-datatable-thead>tr>th.p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-datatable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-editor-cancel,.p-datatable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-up,.p-datatable-reorder-indicator-down{position:absolute}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-column-filter-row{display:flex;align-items:center;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-menu-button,.p-column-filter-clear-button{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-column-filter-overlay{position:absolute;top:0;left:0}.p-column-filter-row-items{margin:0;padding:0;list-style:none}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{display:flex;align-items:center;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable-tbody>tr>td>.p-column-title{display:none}.p-datatable-scroller-spacer{display:flex}.p-datatable .p-scroller .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Table, [{
    type: Component,
    args: [{
      selector: "p-table",
      template: `
        <div
            #container
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{ 'p-datatable p-component': true, 'p-datatable-hoverable-rows': rowHover || selectionMode, 'p-datatable-scrollable': scrollable, 'p-datatable-flex-scrollable': scrollable && scrollHeight === 'flex' }"
            [attr.id]="id"
        >
            <div class="p-datatable-loading-overlay p-component-overlay" *ngIf="loading && showLoader">
                <i *ngIf="loadingIcon" [class]="'p-datatable-loading-icon ' + loadingIcon"></i>
                <ng-container *ngIf="!loadingIcon">
                    <SpinnerIcon *ngIf="!loadingIconTemplate" [spin]="true" [styleClass]="'p-datatable-loading-icon'"/>
                    <span *ngIf="loadingIconTemplate" class="p-datatable-loading-icon">
                        <ng-template *ngTemplateOutlet="loadingIconTemplate"></ng-template>
                    </span>
                </ng-container>
            </div>
            <div *ngIf="captionTemplate" class="p-datatable-header">
                <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
            </div>
            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-top"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'top' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div #wrapper class="p-datatable-wrapper" [ngStyle]="{ maxHeight: virtualScroll ? '' : scrollHeight }">
                <p-scroller
                    #scroller
                    *ngIf="virtualScroll"
                    [items]="processedData"
                    [columns]="columns"
                    [style]="{ height: scrollHeight !== 'flex' ? scrollHeight : undefined }"
                    [scrollHeight]="scrollHeight !== 'flex' ? undefined : '100%'"
                    [itemSize]="virtualScrollItemSize || _virtualRowHeight"
                    [step]="rows"
                    [delay]="lazy ? virtualScrollDelay : 0"
                    [inline]="true"
                    [lazy]="lazy"
                    (onLazyLoad)="onLazyItemLoad($event)"
                    [loaderDisabled]="true"
                    [showSpacer]="false"
                    [showLoader]="loadingBodyTemplate"
                    [options]="virtualScrollOptions"
                    [autoSize]="true"
                >
                    <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                        <ng-container *ngTemplateOutlet="buildInTable; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                    </ng-template>
                </p-scroller>
                <ng-container *ngIf="!virtualScroll">
                    <ng-container *ngTemplateOutlet="buildInTable; context: { $implicit: processedData, options: { columns } }"></ng-container>
                </ng-container>

                <ng-template #buildInTable let-items let-scrollerOptions="options">
                    <table
                        #table
                        role="table"
                        [ngClass]="{ 'p-datatable-table': true, 'p-datatable-scrollable-table': scrollable, 'p-datatable-resizable-table': resizableColumns, 'p-datatable-resizable-table-fit': resizableColumns && columnResizeMode === 'fit' }"
                        [class]="tableStyleClass"
                        [style]="tableStyle"
                        [attr.id]="id + '-table'"
                    >
                        <ng-container *ngTemplateOutlet="colGroupTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        <thead #thead class="p-datatable-thead">
                            <ng-container *ngTemplateOutlet="headerGroupedTemplate || headerTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        </thead>
                        <tbody
                            class="p-datatable-tbody p-datatable-frozen-tbody"
                            *ngIf="frozenValue || frozenBodyTemplate"
                            [value]="frozenValue"
                            [frozenRows]="true"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="frozenBodyTemplate"
                            [frozen]="true"
                        ></tbody>
                        <tbody
                            class="p-datatable-tbody"
                            [ngClass]="scrollerOptions.contentStyleClass"
                            [style]="scrollerOptions.contentStyle"
                            [value]="dataToRender(scrollerOptions.rows)"
                            [pTableBody]="scrollerOptions.columns"
                            [pTableBodyTemplate]="bodyTemplate"
                            [scrollerOptions]="scrollerOptions"
                        ></tbody>
                        <tbody *ngIf="scrollerOptions.spacerStyle" [style]="'height: calc(' + scrollerOptions.spacerStyle.height + ' - ' + scrollerOptions.rows.length * scrollerOptions.itemSize + 'px);'" class="p-datatable-scroller-spacer"></tbody>
                        <tfoot *ngIf="footerGroupedTemplate || footerTemplate" #tfoot class="p-datatable-tfoot">
                            <ng-container *ngTemplateOutlet="footerGroupedTemplate || footerTemplate; context: { $implicit: scrollerOptions.columns }"></ng-container>
                        </tfoot>
                    </table>
                </ng-template>
            </div>

            <p-paginator
                [rows]="rows"
                [first]="first"
                [totalRecords]="totalRecords"
                [pageLinkSize]="pageLinks"
                styleClass="p-paginator-bottom"
                [alwaysShow]="alwaysShowPaginator"
                (onPageChange)="onPageChange($event)"
                [rowsPerPageOptions]="rowsPerPageOptions"
                *ngIf="paginator && (paginatorPosition === 'bottom' || paginatorPosition == 'both')"
                [templateLeft]="paginatorLeftTemplate"
                [templateRight]="paginatorRightTemplate"
                [dropdownAppendTo]="paginatorDropdownAppendTo"
                [dropdownScrollHeight]="paginatorDropdownScrollHeight"
                [currentPageReportTemplate]="currentPageReportTemplate"
                [showFirstLastIcon]="showFirstLastIcon"
                [dropdownItemTemplate]="paginatorDropdownItemTemplate"
                [showCurrentPageReport]="showCurrentPageReport"
                [showJumpToPageDropdown]="showJumpToPageDropdown"
                [showJumpToPageInput]="showJumpToPageInput"
                [showPageLinks]="showPageLinks"
            >
                <ng-template pTemplate="firstpagelinkicon" *ngIf="paginatorFirstPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorFirstPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="previouspagelinkicon" *ngIf="paginatorPreviousPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorPreviousPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="lastpagelinkicon" *ngIf="paginatorLastPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorLastPageLinkIconTemplate"></ng-container>
                </ng-template>

                <ng-template pTemplate="nextpagelinkicon" *ngIf="paginatorNextPageLinkIconTemplate">
                    <ng-container *ngTemplateOutlet="paginatorNextPageLinkIconTemplate"></ng-container>
                </ng-template>
            </p-paginator>

            <div *ngIf="summaryTemplate" class="p-datatable-footer">
                <ng-container *ngTemplateOutlet="summaryTemplate"></ng-container>
            </div>

            <div #resizeHelper class="p-column-resizer-helper" style="display:none" *ngIf="resizableColumns"></div>
            <span #reorderIndicatorUp class="p-datatable-reorder-indicator-up" style="display: none;" *ngIf="reorderableColumns">
                <ArrowDownIcon *ngIf="!reorderIndicatorUpIconTemplate"/>
                <ng-template *ngTemplateOutlet="reorderIndicatorUpIconTemplate"></ng-template>
            </span>
            <span #reorderIndicatorDown class="p-datatable-reorder-indicator-down" style="display: none;" *ngIf="reorderableColumns">
                <ArrowUpIcon *ngIf="!reorderIndicatorDownIconTemplate"/>
                <ng-template *ngTemplateOutlet="reorderIndicatorDownIconTemplate"></ng-template>
            </span>
        </div>
    `,
      providers: [TableService],
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: [".p-datatable{position:relative}.p-datatable>.p-datatable-wrapper{overflow:auto}.p-datatable-table{border-spacing:0px;width:100%}.p-datatable .p-sortable-column{cursor:pointer;-webkit-user-select:none;user-select:none}.p-datatable .p-sortable-column .p-column-title,.p-datatable .p-sortable-column .p-sortable-column-icon,.p-datatable .p-sortable-column .p-sortable-column-badge{vertical-align:middle}.p-datatable .p-sortable-column .p-sortable-column-badge{display:inline-flex;align-items:center;justify-content:center}.p-datatable-hoverable-rows .p-selectable-row{cursor:pointer}.p-datatable-scrollable>.p-datatable-wrapper{position:relative}.p-datatable-scrollable-table>.p-datatable-thead{position:sticky;top:0;z-index:1}.p-datatable-scrollable-table>.p-datatable-frozen-tbody{position:sticky;z-index:1}.p-datatable-scrollable-table>.p-datatable-tfoot{position:sticky;bottom:0;z-index:1}.p-datatable-scrollable .p-frozen-column{position:sticky;background:inherit}.p-datatable-scrollable th.p-frozen-column{z-index:1}.p-datatable-flex-scrollable{display:flex;flex-direction:column;height:100%}.p-datatable-flex-scrollable>.p-datatable-wrapper{display:flex;flex-direction:column;flex:1;height:100%}.p-datatable-scrollable-table>.p-datatable-tbody>.p-rowgroup-header{position:sticky;z-index:1}.p-datatable-resizable-table>.p-datatable-thead>tr>th,.p-datatable-resizable-table>.p-datatable-tfoot>tr>td,.p-datatable-resizable-table>.p-datatable-tbody>tr>td{overflow:hidden;white-space:nowrap}.p-datatable-resizable-table>.p-datatable-thead>tr>th.p-resizable-column:not(.p-frozen-column){background-clip:padding-box;position:relative}.p-datatable-resizable-table-fit>.p-datatable-thead>tr>th.p-resizable-column:last-child .p-column-resizer{display:none}.p-datatable .p-column-resizer{display:block;position:absolute!important;top:0;right:0;margin:0;width:.5rem;height:100%;padding:0;cursor:col-resize;border:1px solid transparent}.p-datatable .p-column-resizer-helper{width:1px;position:absolute;z-index:10;display:none}.p-datatable .p-row-editor-init,.p-datatable .p-row-editor-save,.p-datatable .p-row-editor-cancel,.p-datatable .p-row-toggler{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;position:relative}.p-datatable-reorder-indicator-up,.p-datatable-reorder-indicator-down{position:absolute}.p-datatable-reorderablerow-handle,[pReorderableColumn]{cursor:move}.p-datatable .p-datatable-loading-overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:2}.p-column-filter-row{display:flex;align-items:center;width:100%}.p-column-filter-menu{display:inline-flex}.p-column-filter-row p-columnfilterformelement{flex:1 1 auto;width:1%}.p-column-filter-menu-button,.p-column-filter-clear-button{display:inline-flex;justify-content:center;align-items:center;cursor:pointer;text-decoration:none;overflow:hidden;position:relative}.p-column-filter-overlay{position:absolute;top:0;left:0}.p-column-filter-row-items{margin:0;padding:0;list-style:none}.p-column-filter-row-item{cursor:pointer}.p-column-filter-add-button,.p-column-filter-remove-button{justify-content:center}.p-column-filter-add-button .p-button-label,.p-column-filter-remove-button .p-button-label{flex-grow:0}.p-column-filter-buttonbar{display:flex;align-items:center;justify-content:space-between}.p-column-filter-buttonbar .p-button{width:auto}.p-datatable-tbody>tr>td>.p-column-title{display:none}.p-datatable-scroller-spacer{display:flex}.p-datatable .p-scroller .p-scroller-loading{transform:none!important;min-height:0;position:sticky;top:0;left:0}\n"]
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: TableService
    }, {
      type: ChangeDetectorRef
    }, {
      type: FilterService
    }, {
      type: OverlayService
    }];
  }, {
    frozenColumns: [{
      type: Input
    }],
    frozenValue: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tableStyle: [{
      type: Input
    }],
    tableStyleClass: [{
      type: Input
    }],
    paginator: [{
      type: Input
    }],
    pageLinks: [{
      type: Input
    }],
    rowsPerPageOptions: [{
      type: Input
    }],
    alwaysShowPaginator: [{
      type: Input
    }],
    paginatorPosition: [{
      type: Input
    }],
    paginatorDropdownAppendTo: [{
      type: Input
    }],
    paginatorDropdownScrollHeight: [{
      type: Input
    }],
    currentPageReportTemplate: [{
      type: Input
    }],
    showCurrentPageReport: [{
      type: Input
    }],
    showJumpToPageDropdown: [{
      type: Input
    }],
    showJumpToPageInput: [{
      type: Input
    }],
    showFirstLastIcon: [{
      type: Input
    }],
    showPageLinks: [{
      type: Input
    }],
    defaultSortOrder: [{
      type: Input
    }],
    sortMode: [{
      type: Input
    }],
    resetPageOnSort: [{
      type: Input
    }],
    selectionMode: [{
      type: Input
    }],
    selectionPageOnly: [{
      type: Input
    }],
    selectAllChange: [{
      type: Output
    }],
    selectionChange: [{
      type: Output
    }],
    contextMenuSelection: [{
      type: Input
    }],
    contextMenuSelectionChange: [{
      type: Output
    }],
    contextMenuSelectionMode: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input
    }],
    rowSelectable: [{
      type: Input
    }],
    rowTrackBy: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    lazyLoadOnInit: [{
      type: Input
    }],
    compareSelectionBy: [{
      type: Input
    }],
    csvSeparator: [{
      type: Input
    }],
    exportFilename: [{
      type: Input
    }],
    filters: [{
      type: Input
    }],
    globalFilterFields: [{
      type: Input
    }],
    filterDelay: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    expandedRowKeys: [{
      type: Input
    }],
    editingRowKeys: [{
      type: Input
    }],
    rowExpandMode: [{
      type: Input
    }],
    scrollable: [{
      type: Input
    }],
    scrollDirection: [{
      type: Input
    }],
    rowGroupMode: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    virtualScroll: [{
      type: Input
    }],
    virtualScrollItemSize: [{
      type: Input
    }],
    virtualScrollOptions: [{
      type: Input
    }],
    virtualScrollDelay: [{
      type: Input
    }],
    frozenWidth: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    contextMenu: [{
      type: Input
    }],
    resizableColumns: [{
      type: Input
    }],
    columnResizeMode: [{
      type: Input
    }],
    reorderableColumns: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    loadingIcon: [{
      type: Input
    }],
    showLoader: [{
      type: Input
    }],
    rowHover: [{
      type: Input
    }],
    customSort: [{
      type: Input
    }],
    showInitialSortBadge: [{
      type: Input
    }],
    autoLayout: [{
      type: Input
    }],
    exportFunction: [{
      type: Input
    }],
    exportHeader: [{
      type: Input
    }],
    stateKey: [{
      type: Input
    }],
    stateStorage: [{
      type: Input
    }],
    editMode: [{
      type: Input
    }],
    groupRowsBy: [{
      type: Input
    }],
    groupRowsByOrder: [{
      type: Input
    }],
    responsiveLayout: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    onRowSelect: [{
      type: Output
    }],
    onRowUnselect: [{
      type: Output
    }],
    onPage: [{
      type: Output
    }],
    onSort: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    onRowExpand: [{
      type: Output
    }],
    onRowCollapse: [{
      type: Output
    }],
    onContextMenuSelect: [{
      type: Output
    }],
    onColResize: [{
      type: Output
    }],
    onColReorder: [{
      type: Output
    }],
    onRowReorder: [{
      type: Output
    }],
    onEditInit: [{
      type: Output
    }],
    onEditComplete: [{
      type: Output
    }],
    onEditCancel: [{
      type: Output
    }],
    onHeaderCheckboxToggle: [{
      type: Output
    }],
    sortFunction: [{
      type: Output
    }],
    firstChange: [{
      type: Output
    }],
    rowsChange: [{
      type: Output
    }],
    onStateSave: [{
      type: Output
    }],
    onStateRestore: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    resizeHelperViewChild: [{
      type: ViewChild,
      args: ["resizeHelper"]
    }],
    reorderIndicatorUpViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorUp"]
    }],
    reorderIndicatorDownViewChild: [{
      type: ViewChild,
      args: ["reorderIndicatorDown"]
    }],
    wrapperViewChild: [{
      type: ViewChild,
      args: ["wrapper"]
    }],
    tableViewChild: [{
      type: ViewChild,
      args: ["table"]
    }],
    tableHeaderViewChild: [{
      type: ViewChild,
      args: ["thead"]
    }],
    tableFooterViewChild: [{
      type: ViewChild,
      args: ["tfoot"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    virtualRowHeight: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    first: [{
      type: Input
    }],
    rows: [{
      type: Input
    }],
    totalRecords: [{
      type: Input
    }],
    sortField: [{
      type: Input
    }],
    sortOrder: [{
      type: Input
    }],
    multiSortMeta: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    selectAll: [{
      type: Input
    }]
  });
})();
var TableBody = class {
  constructor(dt, tableService, cd, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.el = el;
    this.subscription = this.dt.tableService.valueSource$.subscribe(() => {
      if (this.dt.virtualScroll) {
        this.cd.detectChanges();
      }
    });
  }
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  ngAfterViewInit() {
    if (this.frozenRows) {
      this.updateFrozenRowStickyPosition();
    }
    if (this.dt.scrollable && this.dt.rowGroupMode === "subheader") {
      this.updateFrozenRowGroupHeaderStickyPosition();
    }
  }
  shouldRenderRowGroupHeader(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowGroupFooter(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowData = value[i + 1];
    if (nextRowData) {
      let nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== nextRowFieldData;
    } else {
      return true;
    }
  }
  shouldRenderRowspan(value, rowData, i) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let prevRowData = value[i - 1];
    if (prevRowData) {
      let previousRowFieldData = ObjectUtils.resolveFieldData(prevRowData, this.dt.groupRowsBy);
      return currentRowFieldData !== previousRowFieldData;
    } else {
      return true;
    }
  }
  calculateRowGroupSize(value, rowData, index) {
    let currentRowFieldData = ObjectUtils.resolveFieldData(rowData, this.dt.groupRowsBy);
    let nextRowFieldData = currentRowFieldData;
    let groupRowSpan = 0;
    while (currentRowFieldData === nextRowFieldData) {
      groupRowSpan++;
      let nextRowData = value[++index];
      if (nextRowData) {
        nextRowFieldData = ObjectUtils.resolveFieldData(nextRowData, this.dt.groupRowsBy);
      } else {
        break;
      }
    }
    return groupRowSpan === 1 ? null : groupRowSpan;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  updateFrozenRowStickyPosition() {
    this.el.nativeElement.style.top = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling) + "px";
  }
  updateFrozenRowGroupHeaderStickyPosition() {
    if (this.el.nativeElement.previousElementSibling) {
      let tableHeaderHeight = DomHandler.getOuterHeight(this.el.nativeElement.previousElementSibling);
      this.dt.rowGroupHeaderStyleObject.top = tableHeaderHeight + "px";
    }
  }
  getScrollerOption(option, options) {
    if (this.dt.virtualScroll) {
      options = options || this.scrollerOptions;
      return options ? options[option] : null;
    }
    return null;
  }
  getRowIndex(rowIndex) {
    const index = this.dt.paginator ? this.dt.first + rowIndex : rowIndex;
    const getItemOptions = this.getScrollerOption("getItemOptions");
    return getItemOptions ? getItemOptions(index).index : index;
  }
};
TableBody.ɵfac = function TableBody_Factory(t) {
  return new (t || TableBody)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ElementRef));
};
TableBody.ɵcmp = ɵɵdefineComponent({
  type: TableBody,
  selectors: [["", "pTableBody", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    columns: ["pTableBody", "columns"],
    template: ["pTableBodyTemplate", "template"],
    value: "value",
    frozen: "frozen",
    frozenRows: "frozenRows",
    scrollerOptions: "scrollerOptions"
  },
  attrs: _c16,
  decls: 5,
  vars: 5,
  consts: [[4, "ngIf"], ["ngFor", "", 3, "ngForOf", "ngForTrackBy"], ["role", "row", 4, "ngIf"], ["role", "row"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TableBody_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TableBody_ng_container_0_Template, 2, 2, "ng-container", 0);
      ɵɵtemplate(1, TableBody_ng_container_1_Template, 2, 2, "ng-container", 0);
      ɵɵtemplate(2, TableBody_ng_container_2_Template, 2, 2, "ng-container", 0);
      ɵɵtemplate(3, TableBody_ng_container_3_Template, 2, 5, "ng-container", 0);
      ɵɵtemplate(4, TableBody_ng_container_4_Template, 2, 5, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.dt.expandedRowTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dt.expandedRowTemplate && !(ctx.frozen && ctx.dt.frozenExpandedRowTemplate));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dt.frozenExpandedRowTemplate && ctx.frozen);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dt.loading);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dt.isEmpty() && !ctx.dt.loading);
    }
  },
  dependencies: [NgForOf, NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableBody, [{
    type: Component,
    args: [{
      selector: "[pTableBody]",
      template: `
        <ng-container *ngIf="!dt.expandedRowTemplate">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="dt.groupHeaderTemplate && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="dt.groupHeaderTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode !== 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="rowData ? template : dt.loadingBodyTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.rowGroupMode === 'rowspan'">
                    <ng-container
                        *ngTemplateOutlet="
                            rowData ? template : dt.loadingBodyTemplate;
                            context: {
                                $implicit: rowData,
                                rowIndex: getRowIndex(rowIndex),
                                columns: columns,
                                editing: dt.editMode === 'row' && dt.isRowEditing(rowData),
                                frozen: frozen,
                                rowgroup: shouldRenderRowspan(value, rowData, rowIndex),
                                rowspan: calculateRowGroupSize(value, rowData, rowIndex)
                            }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.groupFooterTemplate && !dt.virtualScroll && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, rowIndex)" role="row">
                    <ng-container
                        *ngTemplateOutlet="dt.groupFooterTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.expandedRowTemplate && !(frozen && dt.frozenExpandedRowTemplate)">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container *ngIf="!dt.groupHeaderTemplate">
                    <ng-container
                        *ngTemplateOutlet="template; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.groupHeaderTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupHeader(value, rowData, getRowIndex(rowIndex))" role="row">
                    <ng-container
                        *ngTemplateOutlet="
                            dt.groupHeaderTemplate;
                            context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }
                        "
                    ></ng-container>
                </ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.expandedRowTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, frozen: frozen }"></ng-container>
                    <ng-container *ngIf="dt.groupFooterTemplate && dt.rowGroupMode === 'subheader' && shouldRenderRowGroupFooter(value, rowData, getRowIndex(rowIndex))" role="row">
                        <ng-container
                            *ngTemplateOutlet="
                                dt.groupFooterTemplate;
                                context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }
                            "
                        ></ng-container>
                    </ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.frozenExpandedRowTemplate && frozen">
            <ng-template ngFor let-rowData let-rowIndex="index" [ngForOf]="value" [ngForTrackBy]="dt.rowTrackBy">
                <ng-container
                    *ngTemplateOutlet="template; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, expanded: dt.isRowExpanded(rowData), editing: dt.editMode === 'row' && dt.isRowEditing(rowData), frozen: frozen }"
                ></ng-container>
                <ng-container *ngIf="dt.isRowExpanded(rowData)">
                    <ng-container *ngTemplateOutlet="dt.frozenExpandedRowTemplate; context: { $implicit: rowData, rowIndex: getRowIndex(rowIndex), columns: columns, frozen: frozen }"></ng-container>
                </ng-container>
            </ng-template>
        </ng-container>
        <ng-container *ngIf="dt.loading">
            <ng-container *ngTemplateOutlet="dt.loadingBodyTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
        <ng-container *ngIf="dt.isEmpty() && !dt.loading">
            <ng-container *ngTemplateOutlet="dt.emptyMessageTemplate; context: { $implicit: columns, frozen: frozen }"></ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }];
  }, {
    columns: [{
      type: Input,
      args: ["pTableBody"]
    }],
    template: [{
      type: Input,
      args: ["pTableBodyTemplate"]
    }],
    value: [{
      type: Input
    }],
    frozen: [{
      type: Input
    }],
    frozenRows: [{
      type: Input
    }],
    scrollerOptions: [{
      type: Input
    }]
  });
})();
var RowGroupHeader = class {
  constructor(dt) {
    this.dt = dt;
  }
  get getFrozenRowGroupHeaderStickyPosition() {
    return this.dt.rowGroupHeaderStyleObject ? this.dt.rowGroupHeaderStyleObject.top : "";
  }
};
RowGroupHeader.ɵfac = function RowGroupHeader_Factory(t) {
  return new (t || RowGroupHeader)(ɵɵdirectiveInject(Table));
};
RowGroupHeader.ɵdir = ɵɵdefineDirective({
  type: RowGroupHeader,
  selectors: [["", "pRowGroupHeader", ""]],
  hostAttrs: [1, "p-rowgroup-header", "p-element"],
  hostVars: 2,
  hostBindings: function RowGroupHeader_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("top", ctx.getFrozenRowGroupHeaderStickyPosition);
    }
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowGroupHeader, [{
    type: Directive,
    args: [{
      selector: "[pRowGroupHeader]",
      host: {
        class: "p-rowgroup-header p-element",
        "[style.top]": "getFrozenRowGroupHeaderStickyPosition"
      }
    }]
  }], function() {
    return [{
      type: Table
    }];
  }, null);
})();
var FrozenColumn = class {
  constructor(el) {
    this.el = el;
    this.alignFrozen = "left";
    this._frozen = true;
  }
  get frozen() {
    return this._frozen;
  }
  set frozen(val) {
    this._frozen = val;
    this.updateStickyPosition();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.updateStickyPosition();
    }, 1e3);
  }
  updateStickyPosition() {
    if (this._frozen) {
      if (this.alignFrozen === "right") {
        let right = 0;
        let next = this.el.nativeElement.nextElementSibling;
        if (next) {
          right = DomHandler.getOuterWidth(next) + (parseFloat(next.style.right) || 0);
        }
        this.el.nativeElement.style.right = right + "px";
      } else {
        let left = 0;
        let prev = this.el.nativeElement.previousElementSibling;
        if (prev) {
          left = DomHandler.getOuterWidth(prev) + (parseFloat(prev.style.left) || 0);
        }
        this.el.nativeElement.style.left = left + "px";
      }
      let filterRow = this.el.nativeElement.parentElement.nextElementSibling;
      if (filterRow) {
        let index = DomHandler.index(this.el.nativeElement);
        if (filterRow.children && filterRow.children[index]) {
          filterRow.children[index].style.left = this.el.nativeElement.style.left;
          filterRow.children[index].style.right = this.el.nativeElement.style.right;
        }
      }
    }
  }
};
FrozenColumn.ɵfac = function FrozenColumn_Factory(t) {
  return new (t || FrozenColumn)(ɵɵdirectiveInject(ElementRef));
};
FrozenColumn.ɵdir = ɵɵdefineDirective({
  type: FrozenColumn,
  selectors: [["", "pFrozenColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 2,
  hostBindings: function FrozenColumn_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("p-frozen-column", ctx.frozen);
    }
  },
  inputs: {
    frozen: "frozen",
    alignFrozen: "alignFrozen"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FrozenColumn, [{
    type: Directive,
    args: [{
      selector: "[pFrozenColumn]",
      host: {
        class: "p-element",
        "[class.p-frozen-column]": "frozen"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    frozen: [{
      type: Input
    }],
    alignFrozen: [{
      type: Input
    }]
  });
})();
var SortableColumn = class {
  constructor(dt) {
    this.dt = dt;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.sortSource$.subscribe((sortMeta) => {
        this.updateSortState();
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }
  updateSortState() {
    this.sorted = this.dt.isSorted(this.field);
    this.sortOrder = this.sorted ? this.dt.sortOrder === 1 ? "ascending" : "descending" : "none";
  }
  onClick(event) {
    if (this.isEnabled() && !this.isFilterElement(event.target)) {
      this.updateSortState();
      this.dt.sort({
        originalEvent: event,
        field: this.field
      });
      DomHandler.clearSelection();
    }
  }
  onEnterKey(event) {
    this.onClick(event);
  }
  isEnabled() {
    return this.pSortableColumnDisabled !== true;
  }
  isFilterElement(element) {
    return DomHandler.hasClass(element, "pi-filter-icon") || DomHandler.hasClass(element, "p-column-filter-menu-button");
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
SortableColumn.ɵfac = function SortableColumn_Factory(t) {
  return new (t || SortableColumn)(ɵɵdirectiveInject(Table));
};
SortableColumn.ɵdir = ɵɵdefineDirective({
  type: SortableColumn,
  selectors: [["", "pSortableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 7,
  hostBindings: function SortableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function SortableColumn_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown.enter", function SortableColumn_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKey($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.isEnabled() ? "0" : null)("role", "columnheader")("aria-sort", ctx.sortOrder);
      ɵɵclassProp("p-sortable-column", ctx.isEnabled())("p-highlight", ctx.sorted);
    }
  },
  inputs: {
    field: ["pSortableColumn", "field"],
    pSortableColumnDisabled: "pSortableColumnDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortableColumn, [{
    type: Directive,
    args: [{
      selector: "[pSortableColumn]",
      host: {
        class: "p-element",
        "[class.p-sortable-column]": "isEnabled()",
        "[class.p-highlight]": "sorted",
        "[attr.tabindex]": 'isEnabled() ? "0" : null',
        "[attr.role]": '"columnheader"',
        "[attr.aria-sort]": "sortOrder"
      }
    }]
  }], function() {
    return [{
      type: Table
    }];
  }, {
    field: [{
      type: Input,
      args: ["pSortableColumn"]
    }],
    pSortableColumnDisabled: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKey: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }]
  });
})();
var SortIcon = class {
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.sortSource$.subscribe((sortMeta) => {
      this.updateSortState();
    });
  }
  ngOnInit() {
    this.updateSortState();
  }
  onClick(event) {
    event.preventDefault();
  }
  updateSortState() {
    if (this.dt.sortMode === "single") {
      this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
    } else if (this.dt.sortMode === "multiple") {
      let sortMeta = this.dt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }
    this.cd.markForCheck();
  }
  getMultiSortMetaIndex() {
    let multiSortMeta = this.dt._multiSortMeta;
    let index = -1;
    if (multiSortMeta && this.dt.sortMode === "multiple" && (this.dt.showInitialSortBadge || multiSortMeta.length > 1)) {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  getBadgeValue() {
    let index = this.getMultiSortMetaIndex();
    return this.dt.groupRowsBy && index > -1 ? index : index + 1;
  }
  isMultiSorted() {
    return this.dt.sortMode === "multiple" && this.getMultiSortMetaIndex() > -1;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
SortIcon.ɵfac = function SortIcon_Factory(t) {
  return new (t || SortIcon)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ChangeDetectorRef));
};
SortIcon.ɵcmp = ɵɵdefineComponent({
  type: SortIcon,
  selectors: [["p-sortIcon"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field"
  },
  decls: 3,
  vars: 3,
  consts: [[4, "ngIf"], ["class", "p-sortable-column-icon", 4, "ngIf"], ["class", "p-sortable-column-badge", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-sortable-column-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-sortable-column-badge"]],
  template: function SortIcon_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, SortIcon_ng_container_0_Template, 4, 3, "ng-container", 0);
      ɵɵtemplate(1, SortIcon_span_1_Template, 2, 4, "span", 1);
      ɵɵtemplate(2, SortIcon_span_2_Template, 2, 1, "span", 2);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.dt.sortIconTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dt.sortIconTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isMultiSorted());
    }
  },
  dependencies: function() {
    return [NgIf, NgTemplateOutlet, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon];
  },
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SortIcon, [{
    type: Component,
    args: [{
      selector: "p-sortIcon",
      template: `
        <ng-container *ngIf="!dt.sortIconTemplate">
            <SortAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 0"/>
            <SortAmountUpAltIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === 1"/>
            <SortAmountDownIcon [styleClass]="'p-sortable-column-icon'" *ngIf="sortOrder === -1"/>
        </ng-container>
        <span *ngIf="dt.sortIconTemplate" class="p-sortable-column-icon">
            <ng-template *ngTemplateOutlet="dt.sortIconTemplate; context: { $implicit: sortOrder }"></ng-template>
        </span>
        <span *ngIf="isMultiSorted()" class="p-sortable-column-badge">{{ getBadgeValue() }}</span>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    field: [{
      type: Input
    }]
  });
})();
var SelectableRow = class {
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  onTouchEnd(event) {
    if (this.isEnabled()) {
      this.dt.handleRowTouchEnd(event);
    }
  }
  onArrowDownKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event.currentTarget;
    const nextRow = this.findNextSelectableRow(row);
    if (nextRow) {
      nextRow.focus();
    }
    event.preventDefault();
  }
  onArrowUpKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }
    const row = event.currentTarget;
    const prevRow = this.findPrevSelectableRow(row);
    if (prevRow) {
      prevRow.focus();
    }
    event.preventDefault();
  }
  onEnterKeyDown(event) {
    if (!this.isEnabled()) {
      return;
    }
    this.dt.handleRowClick({
      originalEvent: event,
      rowData: this.data,
      rowIndex: this.index
    });
  }
  onPageDownKeyDown() {
    if (this.dt.virtualScroll) {
      this.dt.scroller.elementViewChild.nativeElement.focus();
    }
  }
  onSpaceKeydown() {
    if (this.dt.virtualScroll && !this.dt.editingCell) {
      this.dt.scroller.elementViewChild.nativeElement.focus();
    }
  }
  findNextSelectableRow(row) {
    let nextRow = row.nextElementSibling;
    if (nextRow) {
      if (DomHandler.hasClass(nextRow, "p-selectable-row"))
        return nextRow;
      else
        return this.findNextSelectableRow(nextRow);
    } else {
      return null;
    }
  }
  findPrevSelectableRow(row) {
    let prevRow = row.previousElementSibling;
    if (prevRow) {
      if (DomHandler.hasClass(prevRow, "p-selectable-row"))
        return prevRow;
      else
        return this.findPrevSelectableRow(prevRow);
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
SelectableRow.ɵfac = function SelectableRow_Factory(t) {
  return new (t || SelectableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
};
SelectableRow.ɵdir = ɵɵdefineDirective({
  type: SelectableRow,
  selectors: [["", "pSelectableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 5,
  hostBindings: function SelectableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function SelectableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("touchend", function SelectableRow_touchend_HostBindingHandler($event) {
        return ctx.onTouchEnd($event);
      })("keydown.arrowdown", function SelectableRow_keydown_arrowdown_HostBindingHandler($event) {
        return ctx.onArrowDownKeyDown($event);
      })("keydown.arrowup", function SelectableRow_keydown_arrowup_HostBindingHandler($event) {
        return ctx.onArrowUpKeyDown($event);
      })("keydown.enter", function SelectableRow_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.shift.enter", function SelectableRow_keydown_shift_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.meta.enter", function SelectableRow_keydown_meta_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.pagedown", function SelectableRow_keydown_pagedown_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.pageup", function SelectableRow_keydown_pageup_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.home", function SelectableRow_keydown_home_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.end", function SelectableRow_keydown_end_HostBindingHandler() {
        return ctx.onPageDownKeyDown();
      })("keydown.space", function SelectableRow_keydown_space_HostBindingHandler() {
        return ctx.onSpaceKeydown();
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : void 0);
      ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    }
  },
  inputs: {
    data: ["pSelectableRow", "data"],
    index: ["pSelectableRowIndex", "index"],
    pSelectableRowDisabled: "pSelectableRowDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRow, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRow]",
      host: {
        class: "p-element",
        "[class.p-selectable-row]": "isEnabled()",
        "[class.p-highlight]": "selected",
        "[attr.tabindex]": "isEnabled() ? 0 : undefined"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: TableService
    }];
  }, {
    data: [{
      type: Input,
      args: ["pSelectableRow"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onTouchEnd: [{
      type: HostListener,
      args: ["touchend", ["$event"]]
    }],
    onArrowDownKeyDown: [{
      type: HostListener,
      args: ["keydown.arrowdown", ["$event"]]
    }],
    onArrowUpKeyDown: [{
      type: HostListener,
      args: ["keydown.arrowup", ["$event"]]
    }],
    onEnterKeyDown: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.shift.enter", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.meta.enter", ["$event"]]
    }],
    onPageDownKeyDown: [{
      type: HostListener,
      args: ["keydown.pagedown"]
    }, {
      type: HostListener,
      args: ["keydown.pageup"]
    }, {
      type: HostListener,
      args: ["keydown.home"]
    }, {
      type: HostListener,
      args: ["keydown.end"]
    }],
    onSpaceKeydown: [{
      type: HostListener,
      args: ["keydown.space"]
    }]
  });
})();
var SelectableRowDblClick = class {
  constructor(dt, tableService) {
    this.dt = dt;
    this.tableService = tableService;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
        this.selected = this.dt.isSelected(this.data);
      });
    }
  }
  ngOnInit() {
    if (this.isEnabled()) {
      this.selected = this.dt.isSelected(this.data);
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.handleRowClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
    }
  }
  isEnabled() {
    return this.pSelectableRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
SelectableRowDblClick.ɵfac = function SelectableRowDblClick_Factory(t) {
  return new (t || SelectableRowDblClick)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService));
};
SelectableRowDblClick.ɵdir = ɵɵdefineDirective({
  type: SelectableRowDblClick,
  selectors: [["", "pSelectableRowDblClick", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 4,
  hostBindings: function SelectableRowDblClick_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("dblclick", function SelectableRowDblClick_dblclick_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("p-selectable-row", ctx.isEnabled())("p-highlight", ctx.selected);
    }
  },
  inputs: {
    data: ["pSelectableRowDblClick", "data"],
    index: ["pSelectableRowIndex", "index"],
    pSelectableRowDisabled: "pSelectableRowDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectableRowDblClick, [{
    type: Directive,
    args: [{
      selector: "[pSelectableRowDblClick]",
      host: {
        class: "p-element",
        "[class.p-selectable-row]": "isEnabled()",
        "[class.p-highlight]": "selected"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: TableService
    }];
  }, {
    data: [{
      type: Input,
      args: ["pSelectableRowDblClick"]
    }],
    index: [{
      type: Input,
      args: ["pSelectableRowIndex"]
    }],
    pSelectableRowDisabled: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["dblclick", ["$event"]]
    }]
  });
})();
var ContextMenuRow = class {
  constructor(dt, tableService, el) {
    this.dt = dt;
    this.tableService = tableService;
    this.el = el;
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.contextMenuSource$.subscribe((data) => {
        this.selected = this.dt.equals(this.data, data);
      });
    }
  }
  onContextMenu(event) {
    if (this.isEnabled()) {
      this.dt.handleRowRightClick({
        originalEvent: event,
        rowData: this.data,
        rowIndex: this.index
      });
      this.el.nativeElement.focus();
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pContextMenuRowDisabled !== true;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
ContextMenuRow.ɵfac = function ContextMenuRow_Factory(t) {
  return new (t || ContextMenuRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ElementRef));
};
ContextMenuRow.ɵdir = ɵɵdefineDirective({
  type: ContextMenuRow,
  selectors: [["", "pContextMenuRow", ""]],
  hostAttrs: [1, "p-element"],
  hostVars: 3,
  hostBindings: function ContextMenuRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("contextmenu", function ContextMenuRow_contextmenu_HostBindingHandler($event) {
        return ctx.onContextMenu($event);
      });
    }
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.isEnabled() ? 0 : void 0);
      ɵɵclassProp("p-highlight-contextmenu", ctx.selected);
    }
  },
  inputs: {
    data: ["pContextMenuRow", "data"],
    index: ["pContextMenuRowIndex", "index"],
    pContextMenuRowDisabled: "pContextMenuRowDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuRow, [{
    type: Directive,
    args: [{
      selector: "[pContextMenuRow]",
      host: {
        class: "p-element",
        "[class.p-highlight-contextmenu]": "selected",
        "[attr.tabindex]": "isEnabled() ? 0 : undefined"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: ElementRef
    }];
  }, {
    data: [{
      type: Input,
      args: ["pContextMenuRow"]
    }],
    index: [{
      type: Input,
      args: ["pContextMenuRowIndex"]
    }],
    pContextMenuRowDisabled: [{
      type: Input
    }],
    onContextMenu: [{
      type: HostListener,
      args: ["contextmenu", ["$event"]]
    }]
  });
})();
var RowToggler = class {
  constructor(dt) {
    this.dt = dt;
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.toggleRow(this.data, event);
      event.preventDefault();
    }
  }
  isEnabled() {
    return this.pRowTogglerDisabled !== true;
  }
};
RowToggler.ɵfac = function RowToggler_Factory(t) {
  return new (t || RowToggler)(ɵɵdirectiveInject(Table));
};
RowToggler.ɵdir = ɵɵdefineDirective({
  type: RowToggler,
  selectors: [["", "pRowToggler", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function RowToggler_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function RowToggler_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  },
  inputs: {
    data: ["pRowToggler", "data"],
    pRowTogglerDisabled: "pRowTogglerDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RowToggler, [{
    type: Directive,
    args: [{
      selector: "[pRowToggler]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }];
  }, {
    data: [{
      type: Input,
      args: ["pRowToggler"]
    }],
    pRowTogglerDisabled: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ResizableColumn = class {
  constructor(document, platformId, renderer, dt, el, zone) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isEnabled()) {
        DomHandler.addClass(this.el.nativeElement, "p-resizable-column");
        this.resizer = this.renderer.createElement("span");
        this.renderer.addClass(this.resizer, "p-column-resizer");
        this.renderer.appendChild(this.el.nativeElement, this.resizer);
        this.zone.runOutsideAngular(() => {
          this.resizerMouseDownListener = this.renderer.listen(this.resizer, "mousedown", this.onMouseDown.bind(this));
        });
      }
    }
  }
  bindDocumentEvents() {
    this.zone.runOutsideAngular(() => {
      this.documentMouseMoveListener = this.renderer.listen(this.document, "mousemove", this.onDocumentMouseMove.bind(this));
      this.documentMouseUpListener = this.renderer.listen(this.document, "mouseup", this.onDocumentMouseUp.bind(this));
    });
  }
  unbindDocumentEvents() {
    if (this.documentMouseMoveListener) {
      this.documentMouseMoveListener();
      this.documentMouseMoveListener = null;
    }
    if (this.documentMouseUpListener) {
      this.documentMouseUpListener();
      this.documentMouseUpListener = null;
    }
  }
  onMouseDown(event) {
    if (event.which === 1) {
      this.dt.onColumnResizeBegin(event);
      this.bindDocumentEvents();
    }
  }
  onDocumentMouseMove(event) {
    this.dt.onColumnResize(event);
  }
  onDocumentMouseUp(event) {
    this.dt.onColumnResizeEnd();
    this.unbindDocumentEvents();
  }
  isEnabled() {
    return this.pResizableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.resizerMouseDownListener) {
      this.resizerMouseDownListener();
      this.resizerMouseDownListener = null;
    }
    this.unbindDocumentEvents();
  }
};
ResizableColumn.ɵfac = function ResizableColumn_Factory(t) {
  return new (t || ResizableColumn)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ResizableColumn.ɵdir = ɵɵdefineDirective({
  type: ResizableColumn,
  selectors: [["", "pResizableColumn", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    pResizableColumnDisabled: "pResizableColumnDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizableColumn, [{
    type: Directive,
    args: [{
      selector: "[pResizableColumn]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: Renderer2
    }, {
      type: Table
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    pResizableColumnDisabled: [{
      type: Input
    }]
  });
})();
var ReorderableColumn = class {
  constructor(platformId, renderer, dt, el, zone) {
    this.platformId = platformId;
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.bindEvents();
    }
  }
  bindEvents() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
        this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
        this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
        this.dragEnterListener = this.renderer.listen(this.el.nativeElement, "dragenter", this.onDragEnter.bind(this));
        this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
      });
    }
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragEnterListener) {
      this.dragEnterListener();
      this.dragEnterListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event) {
    if (event.target.nodeName === "INPUT" || event.target.nodeName === "TEXTAREA" || DomHandler.hasClass(event.target, "p-column-resizer"))
      this.el.nativeElement.draggable = false;
    else
      this.el.nativeElement.draggable = true;
  }
  onDragStart(event) {
    this.dt.onColumnDragStart(event, this.el.nativeElement);
  }
  onDragOver(event) {
    event.preventDefault();
  }
  onDragEnter(event) {
    this.dt.onColumnDragEnter(event, this.el.nativeElement);
  }
  onDragLeave(event) {
    this.dt.onColumnDragLeave(event);
  }
  onDrop(event) {
    if (this.isEnabled()) {
      this.dt.onColumnDrop(event, this.el.nativeElement);
    }
  }
  isEnabled() {
    return this.pReorderableColumnDisabled !== true;
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
};
ReorderableColumn.ɵfac = function ReorderableColumn_Factory(t) {
  return new (t || ReorderableColumn)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ReorderableColumn.ɵdir = ɵɵdefineDirective({
  type: ReorderableColumn,
  selectors: [["", "pReorderableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function ReorderableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("drop", function ReorderableColumn_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    pReorderableColumnDisabled: "pReorderableColumnDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableColumn, [{
    type: Directive,
    args: [{
      selector: "[pReorderableColumn]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PLATFORM_ID]
      }]
    }, {
      type: Renderer2
    }, {
      type: Table
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    pReorderableColumnDisabled: [{
      type: Input
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var EditableColumn = class {
  constructor(dt, el, zone) {
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      DomHandler.addClass(this.el.nativeElement, "p-editable-column");
    }
  }
  onClick(event) {
    if (this.isEnabled()) {
      this.dt.selfClick = true;
      if (this.dt.editingCell) {
        if (this.dt.editingCell !== this.el.nativeElement) {
          if (!this.dt.isEditingCellValid()) {
            return;
          }
          this.closeEditingCell(true, event);
          this.openCell();
        }
      } else {
        this.openCell();
      }
    }
  }
  openCell() {
    this.dt.updateEditingCell(this.el.nativeElement, this.data, this.field, this.rowIndex);
    DomHandler.addClass(this.el.nativeElement, "p-cell-editing");
    this.dt.onEditInit.emit({
      field: this.field,
      data: this.data,
      index: this.rowIndex
    });
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        let focusCellSelector = this.pFocusCellSelector || "input, textarea, select";
        let focusableElement = DomHandler.findSingle(this.el.nativeElement, focusCellSelector);
        if (focusableElement) {
          focusableElement.focus();
        }
      }, 50);
    });
    this.overlayEventListener = (e) => {
      if (this.el && this.el.nativeElement.contains(e.target)) {
        this.dt.selfClick = true;
      }
    };
    this.dt.overlaySubscription = this.dt.overlayService.clickObservable.subscribe(this.overlayEventListener);
  }
  closeEditingCell(completed, event) {
    const eventData = {
      field: this.dt.editingCellField,
      data: this.dt.editingCellData,
      originalEvent: event,
      index: this.dt.editingCellRowIndex
    };
    if (completed) {
      this.dt.onEditComplete.emit(eventData);
    } else {
      this.dt.onEditCancel.emit(eventData);
      this.dt.value.forEach((element) => {
        if (element[this.dt.editingCellField] === this.data) {
          element[this.dt.editingCellField] = this.dt.editingCellData;
        }
      });
    }
    DomHandler.removeClass(this.dt.editingCell, "p-cell-editing");
    this.dt.editingCell = null;
    this.dt.editingCellData = null;
    this.dt.editingCellField = null;
    this.dt.unbindDocumentEditListener();
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
  onEnterKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event);
      }
      event.preventDefault();
    }
  }
  onTabKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(true, event);
      }
      event.preventDefault();
    }
  }
  onEscapeKeyDown(event) {
    if (this.isEnabled()) {
      if (this.dt.isEditingCellValid()) {
        this.closeEditingCell(false, event);
      }
      event.preventDefault();
    }
  }
  onShiftKeyDown(event) {
    if (this.isEnabled()) {
      if (event.shiftKey)
        this.moveToPreviousCell(event);
      else {
        this.moveToNextCell(event);
      }
    }
  }
  onArrowDown(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findNextEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          DomHandler.invokeElementMethod(event.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event.preventDefault();
      }
    }
  }
  onArrowUp(event) {
    if (this.isEnabled()) {
      let currentCell = this.findCell(event.target);
      if (currentCell) {
        let cellIndex = DomHandler.index(currentCell);
        let targetCell = this.findPrevEditableColumnByIndex(currentCell, cellIndex);
        if (targetCell) {
          if (this.dt.isEditingCellValid()) {
            this.closeEditingCell(true, event);
          }
          DomHandler.invokeElementMethod(event.target, "blur");
          DomHandler.invokeElementMethod(targetCell, "click");
        }
        event.preventDefault();
      }
    }
  }
  onArrowLeft(event) {
    if (this.isEnabled()) {
      this.moveToPreviousCell(event);
    }
  }
  onArrowRight(event) {
    if (this.isEnabled()) {
      this.moveToNextCell(event);
    }
  }
  findCell(element) {
    if (element) {
      let cell = element;
      while (cell && !DomHandler.hasClass(cell, "p-cell-editing")) {
        cell = cell.parentElement;
      }
      return cell;
    } else {
      return null;
    }
  }
  moveToPreviousCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findPreviousEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        DomHandler.invokeElementMethod(event.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event.preventDefault();
      }
    }
  }
  moveToNextCell(event) {
    let currentCell = this.findCell(event.target);
    if (currentCell) {
      let targetCell = this.findNextEditableColumn(currentCell);
      if (targetCell) {
        if (this.dt.isEditingCellValid()) {
          this.closeEditingCell(true, event);
        }
        DomHandler.invokeElementMethod(event.target, "blur");
        DomHandler.invokeElementMethod(targetCell, "click");
        event.preventDefault();
      }
    }
  }
  findPreviousEditableColumn(cell) {
    let prevCell = cell.previousElementSibling;
    if (!prevCell) {
      let previousRow = cell.parentElement.previousElementSibling;
      if (previousRow) {
        prevCell = previousRow.lastElementChild;
      }
    }
    if (prevCell) {
      if (DomHandler.hasClass(prevCell, "p-editable-column"))
        return prevCell;
      else
        return this.findPreviousEditableColumn(prevCell);
    } else {
      return null;
    }
  }
  findNextEditableColumn(cell) {
    let nextCell = cell.nextElementSibling;
    if (!nextCell) {
      let nextRow = cell.parentElement.nextElementSibling;
      if (nextRow) {
        nextCell = nextRow.firstElementChild;
      }
    }
    if (nextCell) {
      if (DomHandler.hasClass(nextCell, "p-editable-column"))
        return nextCell;
      else
        return this.findNextEditableColumn(nextCell);
    } else {
      return null;
    }
  }
  findNextEditableColumnByIndex(cell, index) {
    let nextRow = cell.parentElement.nextElementSibling;
    if (nextRow) {
      let nextCell = nextRow.children[index];
      if (nextCell && DomHandler.hasClass(nextCell, "p-editable-column")) {
        return nextCell;
      }
      return null;
    } else {
      return null;
    }
  }
  findPrevEditableColumnByIndex(cell, index) {
    let prevRow = cell.parentElement.previousElementSibling;
    if (prevRow) {
      let prevCell = prevRow.children[index];
      if (prevCell && DomHandler.hasClass(prevCell, "p-editable-column")) {
        return prevCell;
      }
      return null;
    } else {
      return null;
    }
  }
  isEnabled() {
    return this.pEditableColumnDisabled !== true;
  }
  ngOnDestroy() {
    if (this.dt.overlaySubscription) {
      this.dt.overlaySubscription.unsubscribe();
    }
  }
};
EditableColumn.ɵfac = function EditableColumn_Factory(t) {
  return new (t || EditableColumn)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
EditableColumn.ɵdir = ɵɵdefineDirective({
  type: EditableColumn,
  selectors: [["", "pEditableColumn", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function EditableColumn_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function EditableColumn_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      })("keydown.enter", function EditableColumn_keydown_enter_HostBindingHandler($event) {
        return ctx.onEnterKeyDown($event);
      })("keydown.tab", function EditableColumn_keydown_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.escape", function EditableColumn_keydown_escape_HostBindingHandler($event) {
        return ctx.onEscapeKeyDown($event);
      })("keydown.shift.tab", function EditableColumn_keydown_shift_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.meta.tab", function EditableColumn_keydown_meta_tab_HostBindingHandler($event) {
        return ctx.onShiftKeyDown($event);
      })("keydown.arrowdown", function EditableColumn_keydown_arrowdown_HostBindingHandler($event) {
        return ctx.onArrowDown($event);
      })("keydown.arrowup", function EditableColumn_keydown_arrowup_HostBindingHandler($event) {
        return ctx.onArrowUp($event);
      })("keydown.arrowleft", function EditableColumn_keydown_arrowleft_HostBindingHandler($event) {
        return ctx.onArrowLeft($event);
      })("keydown.arrowright", function EditableColumn_keydown_arrowright_HostBindingHandler($event) {
        return ctx.onArrowRight($event);
      });
    }
  },
  inputs: {
    data: ["pEditableColumn", "data"],
    field: ["pEditableColumnField", "field"],
    rowIndex: ["pEditableColumnRowIndex", "rowIndex"],
    pEditableColumnDisabled: "pEditableColumnDisabled",
    pFocusCellSelector: "pFocusCellSelector"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableColumn, [{
    type: Directive,
    args: [{
      selector: "[pEditableColumn]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    data: [{
      type: Input,
      args: ["pEditableColumn"]
    }],
    field: [{
      type: Input,
      args: ["pEditableColumnField"]
    }],
    rowIndex: [{
      type: Input,
      args: ["pEditableColumnRowIndex"]
    }],
    pEditableColumnDisabled: [{
      type: Input
    }],
    pFocusCellSelector: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onEnterKeyDown: [{
      type: HostListener,
      args: ["keydown.enter", ["$event"]]
    }],
    onTabKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }],
    onEscapeKeyDown: [{
      type: HostListener,
      args: ["keydown.escape", ["$event"]]
    }],
    onShiftKeyDown: [{
      type: HostListener,
      args: ["keydown.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.shift.tab", ["$event"]]
    }, {
      type: HostListener,
      args: ["keydown.meta.tab", ["$event"]]
    }],
    onArrowDown: [{
      type: HostListener,
      args: ["keydown.arrowdown", ["$event"]]
    }],
    onArrowUp: [{
      type: HostListener,
      args: ["keydown.arrowup", ["$event"]]
    }],
    onArrowLeft: [{
      type: HostListener,
      args: ["keydown.arrowleft", ["$event"]]
    }],
    onArrowRight: [{
      type: HostListener,
      args: ["keydown.arrowright", ["$event"]]
    }]
  });
})();
var EditableRow = class {
  constructor(el) {
    this.el = el;
  }
  isEnabled() {
    return this.pEditableRowDisabled !== true;
  }
};
EditableRow.ɵfac = function EditableRow_Factory(t) {
  return new (t || EditableRow)(ɵɵdirectiveInject(ElementRef));
};
EditableRow.ɵdir = ɵɵdefineDirective({
  type: EditableRow,
  selectors: [["", "pEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    data: ["pEditableRow", "data"],
    pEditableRowDisabled: "pEditableRowDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditableRow, [{
    type: Directive,
    args: [{
      selector: "[pEditableRow]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    data: [{
      type: Input,
      args: ["pEditableRow"]
    }],
    pEditableRowDisabled: [{
      type: Input
    }]
  });
})();
var InitEditableRow = class {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.initRowEdit(this.editableRow.data);
    event.preventDefault();
  }
};
InitEditableRow.ɵfac = function InitEditableRow_Factory(t) {
  return new (t || InitEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
};
InitEditableRow.ɵdir = ɵɵdefineDirective({
  type: InitEditableRow,
  selectors: [["", "pInitEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function InitEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function InitEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pInitEditableRow]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var SaveEditableRow = class {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.saveRowEdit(this.editableRow.data, this.editableRow.el.nativeElement);
    event.preventDefault();
  }
};
SaveEditableRow.ɵfac = function SaveEditableRow_Factory(t) {
  return new (t || SaveEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
};
SaveEditableRow.ɵdir = ɵɵdefineDirective({
  type: SaveEditableRow,
  selectors: [["", "pSaveEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function SaveEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function SaveEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SaveEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pSaveEditableRow]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CancelEditableRow = class {
  constructor(dt, editableRow) {
    this.dt = dt;
    this.editableRow = editableRow;
  }
  onClick(event) {
    this.dt.cancelRowEdit(this.editableRow.data);
    event.preventDefault();
  }
};
CancelEditableRow.ɵfac = function CancelEditableRow_Factory(t) {
  return new (t || CancelEditableRow)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableRow));
};
CancelEditableRow.ɵdir = ɵɵdefineDirective({
  type: CancelEditableRow,
  selectors: [["", "pCancelEditableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function CancelEditableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function CancelEditableRow_click_HostBindingHandler($event) {
        return ctx.onClick($event);
      });
    }
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelEditableRow, [{
    type: Directive,
    args: [{
      selector: "[pCancelEditableRow]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: EditableRow
    }];
  }, {
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var CellEditor = class {
  constructor(dt, editableColumn, editableRow) {
    this.dt = dt;
    this.editableColumn = editableColumn;
    this.editableRow = editableRow;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "input":
          this.inputTemplate = item.template;
          break;
        case "output":
          this.outputTemplate = item.template;
          break;
      }
    });
  }
  get editing() {
    return this.dt.editingCell && this.editableColumn && this.dt.editingCell === this.editableColumn.el.nativeElement || this.editableRow && this.dt.editMode === "row" && this.dt.isRowEditing(this.editableRow.data);
  }
};
CellEditor.ɵfac = function CellEditor_Factory(t) {
  return new (t || CellEditor)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(EditableColumn, 8), ɵɵdirectiveInject(EditableRow, 8));
};
CellEditor.ɵcmp = ɵɵdefineComponent({
  type: CellEditor,
  selectors: [["p-cellEditor"]],
  contentQueries: function CellEditor_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  hostAttrs: [1, "p-element"],
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [4, "ngTemplateOutlet"]],
  template: function CellEditor_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, CellEditor_ng_container_0_Template, 2, 1, "ng-container", 0);
      ɵɵtemplate(1, CellEditor_ng_container_1_Template, 2, 1, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.editing);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.editing);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CellEditor, [{
    type: Component,
    args: [{
      selector: "p-cellEditor",
      template: `
        <ng-container *ngIf="editing">
            <ng-container *ngTemplateOutlet="inputTemplate"></ng-container>
        </ng-container>
        <ng-container *ngIf="!editing">
            <ng-container *ngTemplateOutlet="outputTemplate"></ng-container>
        </ng-container>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: EditableColumn,
      decorators: [{
        type: Optional
      }]
    }, {
      type: EditableRow,
      decorators: [{
        type: Optional
      }]
    }];
  }, {
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TableRadioButton = class {
  constructor(dt, cd) {
    this.dt = dt;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithRadio({
        originalEvent: event,
        rowIndex: this.index
      }, this.value);
      this.inputViewChild.nativeElement?.focus();
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
TableRadioButton.ɵfac = function TableRadioButton_Factory(t) {
  return new (t || TableRadioButton)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ChangeDetectorRef));
};
TableRadioButton.ɵcmp = ɵɵdefineComponent({
  type: TableRadioButton,
  selectors: [["p-tableRadioButton"]],
  viewQuery: function TableRadioButton_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c222, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    value: "value",
    index: "index",
    inputId: "inputId",
    name: "name",
    ariaLabel: "ariaLabel"
  },
  decls: 7,
  vars: 16,
  consts: [[1, "p-radiobutton", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "radio", 3, "checked", "disabled", "focus", "blur"], ["rb", ""], ["role", "radio", 3, "ngClass"], ["box", ""], [1, "p-radiobutton-icon"]],
  template: function TableRadioButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function TableRadioButton_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵelementStart(1, "div", 1)(2, "input", 2, 3);
      ɵɵlistener("focus", function TableRadioButton_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableRadioButton_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      ɵɵelementEnd()();
      ɵɵelementStart(4, "div", 4, 5);
      ɵɵelement(6, "div", 6);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction3(8, _c23, ctx.focused, ctx.checked, ctx.disabled));
      ɵɵadvance(2);
      ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
      ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ɵɵpureFunction3(12, _c24, ctx.checked, ctx.focused, ctx.disabled));
      ɵɵattribute("aria-checked", ctx.checked);
    }
  },
  dependencies: [NgClass],
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableRadioButton, [{
    type: Component,
    args: [{
      selector: "p-tableRadioButton",
      template: `
        <div class="p-radiobutton p-component" [ngClass]="{ 'p-radiobutton-focused': focused, 'p-radiobutton-checked': checked, 'p-radiobutton-disabled': disabled }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #rb type="radio" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled" [attr.aria-label]="ariaLabel" />
            </div>
            <div #box [ngClass]="{ 'p-radiobutton-box p-component': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': disabled }" role="radio" [attr.aria-checked]="checked">
                <div class="p-radiobutton-icon"></div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["rb"]
    }]
  });
})();
var TableCheckbox = class {
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.cd.markForCheck();
    });
  }
  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }
  onClick(event) {
    if (!this.disabled) {
      this.dt.toggleRowWithCheckbox({
        originalEvent: event,
        rowIndex: this.index
      }, this.value);
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
};
TableCheckbox.ɵfac = function TableCheckbox_Factory(t) {
  return new (t || TableCheckbox)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ChangeDetectorRef));
};
TableCheckbox.ɵcmp = ɵɵdefineComponent({
  type: TableCheckbox,
  selectors: [["p-tableCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    value: "value",
    index: "index",
    inputId: "inputId",
    name: "name",
    required: "required",
    ariaLabel: "ariaLabel"
  },
  decls: 7,
  vars: 18,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["role", "checkbox", 3, "ngClass"], ["box", ""], [4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TableCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function TableCheckbox_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵelementStart(1, "div", 1)(2, "input", 2);
      ɵɵlistener("focus", function TableCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      ɵɵelementEnd()();
      ɵɵelementStart(3, "div", 3, 4);
      ɵɵtemplate(5, TableCheckbox_ng_container_5_Template, 2, 1, "ng-container", 5);
      ɵɵtemplate(6, TableCheckbox_span_6_Template, 2, 4, "span", 5);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction2(11, _c25, ctx.focused, ctx.disabled));
      ɵɵadvance(2);
      ɵɵproperty("checked", ctx.checked)("disabled", ctx.disabled);
      ɵɵattribute("id", ctx.inputId)("name", ctx.name)("required", ctx.required)("aria-label", ctx.ariaLabel);
      ɵɵadvance(1);
      ɵɵproperty("ngClass", ɵɵpureFunction3(14, _c26, ctx.checked, ctx.focused, ctx.disabled));
      ɵɵattribute("aria-checked", ctx.checked);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.dt.checkboxIconTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dt.checkboxIconTemplate);
    }
  },
  dependencies: function() {
    return [NgClass, NgIf, NgTemplateOutlet, CheckIcon];
  },
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableCheckbox",
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused, 'p-checkbox-disabled': disabled }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled" [attr.required]="required" [attr.aria-label]="ariaLabel" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box p-component': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': disabled }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!dt.checkboxIconTemplate">
                    <CheckIcon [styleClass]="'p-checkbox-icon'" *ngIf="checked"/>
                </ng-container>
                <span *ngIf="dt.checkboxIconTemplate">
                    <ng-template *ngTemplateOutlet="dt.checkboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </span>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var TableHeaderCheckbox = class {
  constructor(dt, tableService, cd) {
    this.dt = dt;
    this.tableService = tableService;
    this.cd = cd;
    this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
    this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.updateCheckedState();
    });
  }
  ngOnInit() {
    this.checked = this.updateCheckedState();
  }
  onClick(event) {
    if (!this.disabled) {
      if (this.dt.value && this.dt.value.length > 0) {
        this.dt.toggleRowsWithCheckbox(event, !this.checked);
      }
    }
    DomHandler.clearSelection();
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
  }
  isDisabled() {
    return this.disabled || !this.dt.value || !this.dt.value.length;
  }
  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }
    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }
  updateCheckedState() {
    this.cd.markForCheck();
    if (this.dt._selectAll !== null) {
      return this.dt._selectAll;
    } else {
      const data = this.dt.selectionPageOnly ? this.dt.dataToRender(this.dt.processedData) : this.dt.processedData;
      const val = this.dt.frozenValue ? [...this.dt.frozenValue, ...data] : data;
      const selectableVal = this.dt.rowSelectable ? val.filter((data2, index) => this.dt.rowSelectable({
        data: data2,
        index
      })) : val;
      return ObjectUtils.isNotEmpty(selectableVal) && ObjectUtils.isNotEmpty(this.dt.selection) && selectableVal.every((v) => this.dt.selection.some((s) => this.dt.equals(v, s)));
    }
  }
};
TableHeaderCheckbox.ɵfac = function TableHeaderCheckbox_Factory(t) {
  return new (t || TableHeaderCheckbox)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(TableService), ɵɵdirectiveInject(ChangeDetectorRef));
};
TableHeaderCheckbox.ɵcmp = ɵɵdefineComponent({
  type: TableHeaderCheckbox,
  selectors: [["p-tableHeaderCheckbox"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    disabled: "disabled",
    inputId: "inputId",
    name: "name",
    ariaLabel: "ariaLabel"
  },
  decls: 8,
  vars: 17,
  consts: [[1, "p-checkbox", "p-component", 3, "ngClass", "click"], [1, "p-hidden-accessible"], ["type", "checkbox", 3, "checked", "disabled", "focus", "blur"], ["cb", ""], ["role", "checkbox", 3, "ngClass"], ["box", ""], [4, "ngIf"], ["class", "p-checkbox-icon", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-checkbox-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TableHeaderCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function TableHeaderCheckbox_Template_div_click_0_listener($event) {
        return ctx.onClick($event);
      });
      ɵɵelementStart(1, "div", 1)(2, "input", 2, 3);
      ɵɵlistener("focus", function TableHeaderCheckbox_Template_input_focus_2_listener() {
        return ctx.onFocus();
      })("blur", function TableHeaderCheckbox_Template_input_blur_2_listener() {
        return ctx.onBlur();
      });
      ɵɵelementEnd()();
      ɵɵelementStart(4, "div", 4, 5);
      ɵɵtemplate(6, TableHeaderCheckbox_ng_container_6_Template, 2, 1, "ng-container", 6);
      ɵɵtemplate(7, TableHeaderCheckbox_span_7_Template, 2, 4, "span", 7);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction2(10, _c25, ctx.focused, ctx.isDisabled()));
      ɵɵadvance(2);
      ɵɵproperty("checked", ctx.checked)("disabled", ctx.isDisabled());
      ɵɵattribute("id", ctx.inputId)("name", ctx.name)("aria-label", ctx.ariaLabel);
      ɵɵadvance(2);
      ɵɵproperty("ngClass", ɵɵpureFunction3(13, _c27, ctx.checked, ctx.focused, ctx.isDisabled()));
      ɵɵattribute("aria-checked", ctx.checked);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.dt.headerCheckboxIconTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dt.headerCheckboxIconTemplate);
    }
  },
  dependencies: function() {
    return [NgClass, NgIf, NgTemplateOutlet, CheckIcon];
  },
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableHeaderCheckbox, [{
    type: Component,
    args: [{
      selector: "p-tableHeaderCheckbox",
      template: `
        <div class="p-checkbox p-component" [ngClass]="{ 'p-checkbox-focused': focused, 'p-checkbox-disabled': isDisabled() }" (click)="onClick($event)">
            <div class="p-hidden-accessible">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="isDisabled()" [attr.aria-label]="ariaLabel" />
            </div>
            <div #box [ngClass]="{ 'p-checkbox-box': true, 'p-highlight': checked, 'p-focus': focused, 'p-disabled': isDisabled() }" role="checkbox" [attr.aria-checked]="checked">
                <ng-container *ngIf="!dt.headerCheckboxIconTemplate">
                    <CheckIcon *ngIf="checked" [styleClass]="'p-checkbox-icon'"/>
                </ng-container>
                <span class="p-checkbox-icon" *ngIf="dt.headerCheckboxIconTemplate">
                    <ng-template *ngTemplateOutlet="dt.headerCheckboxIconTemplate; context: { $implicit: checked }"></ng-template>
                </span>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: TableService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    disabled: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }]
  });
})();
var ReorderableRowHandle = class {
  constructor(el) {
    this.el = el;
  }
  ngAfterViewInit() {
    DomHandler.addClass(this.el.nativeElement, "p-datatable-reorderablerow-handle");
  }
};
ReorderableRowHandle.ɵfac = function ReorderableRowHandle_Factory(t) {
  return new (t || ReorderableRowHandle)(ɵɵdirectiveInject(ElementRef));
};
ReorderableRowHandle.ɵdir = ɵɵdefineDirective({
  type: ReorderableRowHandle,
  selectors: [["", "pReorderableRowHandle", ""]],
  hostAttrs: [1, "p-element"]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRowHandle, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRowHandle]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var ReorderableRow = class {
  constructor(renderer, dt, el, zone) {
    this.renderer = renderer;
    this.dt = dt;
    this.el = el;
    this.zone = zone;
  }
  ngAfterViewInit() {
    if (this.isEnabled()) {
      this.el.nativeElement.droppable = true;
      this.bindEvents();
    }
  }
  bindEvents() {
    this.zone.runOutsideAngular(() => {
      this.mouseDownListener = this.renderer.listen(this.el.nativeElement, "mousedown", this.onMouseDown.bind(this));
      this.dragStartListener = this.renderer.listen(this.el.nativeElement, "dragstart", this.onDragStart.bind(this));
      this.dragEndListener = this.renderer.listen(this.el.nativeElement, "dragend", this.onDragEnd.bind(this));
      this.dragOverListener = this.renderer.listen(this.el.nativeElement, "dragover", this.onDragOver.bind(this));
      this.dragLeaveListener = this.renderer.listen(this.el.nativeElement, "dragleave", this.onDragLeave.bind(this));
    });
  }
  unbindEvents() {
    if (this.mouseDownListener) {
      this.mouseDownListener();
      this.mouseDownListener = null;
    }
    if (this.dragStartListener) {
      this.dragStartListener();
      this.dragStartListener = null;
    }
    if (this.dragEndListener) {
      this.dragEndListener();
      this.dragEndListener = null;
    }
    if (this.dragOverListener) {
      this.dragOverListener();
      this.dragOverListener = null;
    }
    if (this.dragLeaveListener) {
      this.dragLeaveListener();
      this.dragLeaveListener = null;
    }
  }
  onMouseDown(event) {
    if (DomHandler.hasClass(event.target, "p-datatable-reorderablerow-handle"))
      this.el.nativeElement.draggable = true;
    else
      this.el.nativeElement.draggable = false;
  }
  onDragStart(event) {
    this.dt.onRowDragStart(event, this.index);
  }
  onDragEnd(event) {
    this.dt.onRowDragEnd(event);
    this.el.nativeElement.draggable = false;
  }
  onDragOver(event) {
    this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
    event.preventDefault();
  }
  onDragLeave(event) {
    this.dt.onRowDragLeave(event, this.el.nativeElement);
  }
  isEnabled() {
    return this.pReorderableRowDisabled !== true;
  }
  onDrop(event) {
    if (this.isEnabled() && this.dt.rowDragging) {
      this.dt.onRowDrop(event, this.el.nativeElement);
    }
    event.preventDefault();
  }
  ngOnDestroy() {
    this.unbindEvents();
  }
};
ReorderableRow.ɵfac = function ReorderableRow_Factory(t) {
  return new (t || ReorderableRow)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
ReorderableRow.ɵdir = ɵɵdefineDirective({
  type: ReorderableRow,
  selectors: [["", "pReorderableRow", ""]],
  hostAttrs: [1, "p-element"],
  hostBindings: function ReorderableRow_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("drop", function ReorderableRow_drop_HostBindingHandler($event) {
        return ctx.onDrop($event);
      });
    }
  },
  inputs: {
    index: ["pReorderableRow", "index"],
    pReorderableRowDisabled: "pReorderableRowDisabled"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReorderableRow, [{
    type: Directive,
    args: [{
      selector: "[pReorderableRow]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: Table
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    index: [{
      type: Input,
      args: ["pReorderableRow"]
    }],
    pReorderableRowDisabled: [{
      type: Input
    }],
    onDrop: [{
      type: HostListener,
      args: ["drop", ["$event"]]
    }]
  });
})();
var ColumnFilter = class {
  constructor(document, el, dt, renderer, config, overlayService) {
    this.document = document;
    this.el = el;
    this.dt = dt;
    this.renderer = renderer;
    this.config = config;
    this.overlayService = overlayService;
    this.type = "text";
    this.display = "row";
    this.showMenu = true;
    this.operator = FilterOperator.AND;
    this.showOperator = true;
    this.showClearButton = true;
    this.showApplyButton = true;
    this.showMatchModes = true;
    this.showAddButton = true;
    this.hideOnClear = false;
    this.maxConstraints = 2;
    this.useGrouping = true;
    this.showButtons = true;
    this.window = this.document.defaultView;
  }
  ngOnInit() {
    if (!this.dt.filters[this.field]) {
      this.initFieldFilterConstraint();
    }
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.generateMatchModeOptions();
      this.generateOperatorOptions();
    });
    this.resetSubscription = this.dt.tableService.resetSource$.subscribe(() => {
      this.initFieldFilterConstraint();
    });
    this.generateMatchModeOptions();
    this.generateOperatorOptions();
  }
  generateMatchModeOptions() {
    this.matchModes = this.matchModeOptions || this.config.filterMatchModeOptions[this.type]?.map((key) => {
      return {
        label: this.config.getTranslation(key),
        value: key
      };
    });
  }
  generateOperatorOptions() {
    this.operatorOptions = [{
      label: this.config.getTranslation(TranslationKeys.MATCH_ALL),
      value: FilterOperator.AND
    }, {
      label: this.config.getTranslation(TranslationKeys.MATCH_ANY),
      value: FilterOperator.OR
    }];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        case "removeruleicon":
          this.removeRuleIconTemplate = item.template;
          break;
        case "addruleicon":
          this.addRuleIconTemplate = item.template;
          break;
        default:
          this.filterTemplate = item.template;
          break;
      }
    });
  }
  initFieldFilterConstraint() {
    let defaultMatchMode = this.getDefaultMatchMode();
    this.dt.filters[this.field] = this.display == "row" ? {
      value: null,
      matchMode: defaultMatchMode
    } : [{
      value: null,
      matchMode: defaultMatchMode,
      operator: this.operator
    }];
  }
  onMenuMatchModeChange(value, filterMeta) {
    filterMeta.matchMode = value;
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  onRowMatchModeChange(matchMode) {
    this.dt.filters[this.field].matchMode = matchMode;
    this.dt._filter();
    this.hide();
  }
  onRowMatchModeKeyDown(event) {
    let item = event.target;
    switch (event.key) {
      case "ArrowDown":
        var nextItem = this.findNextItem(item);
        if (nextItem) {
          item.removeAttribute("tabindex");
          nextItem.tabIndex = "0";
          nextItem.focus();
        }
        event.preventDefault();
        break;
      case "ArrowUp":
        var prevItem = this.findPrevItem(item);
        if (prevItem) {
          item.removeAttribute("tabindex");
          prevItem.tabIndex = "0";
          prevItem.focus();
        }
        event.preventDefault();
        break;
    }
  }
  onRowClearItemClick() {
    this.clearFilter();
    this.hide();
  }
  isRowMatchModeSelected(matchMode) {
    return this.dt.filters[this.field].matchMode === matchMode;
  }
  addConstraint() {
    this.dt.filters[this.field].push({
      value: null,
      matchMode: this.getDefaultMatchMode(),
      operator: this.getDefaultOperator()
    });
  }
  removeConstraint(filterMeta) {
    this.dt.filters[this.field] = this.dt.filters[this.field].filter((meta) => meta !== filterMeta);
    this.dt._filter();
  }
  onOperatorChange(value) {
    this.dt.filters[this.field].forEach((filterMeta) => {
      filterMeta.operator = value;
      this.operator = value;
    });
    if (!this.showApplyButton) {
      this.dt._filter();
    }
  }
  toggleMenu() {
    this.overlayVisible = !this.overlayVisible;
  }
  onToggleButtonKeyDown(event) {
    switch (event.key) {
      case "Escape":
      case "Tab":
        this.overlayVisible = false;
        break;
      case "ArrowDown":
        if (this.overlayVisible) {
          let focusable = DomHandler.getFocusableElements(this.overlay);
          if (focusable) {
            focusable[0].focus();
          }
          event.preventDefault();
        } else if (event.altKey) {
          this.overlayVisible = true;
          event.preventDefault();
        }
        break;
    }
  }
  onEscape() {
    this.overlayVisible = false;
    this.icon.nativeElement.focus();
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem)
      return DomHandler.hasClass(nextItem, "p-column-filter-separator") ? this.findNextItem(nextItem) : nextItem;
    else
      return item.parentElement.firstElementChild;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem)
      return DomHandler.hasClass(prevItem, "p-column-filter-separator") ? this.findPrevItem(prevItem) : prevItem;
    else
      return item.parentElement.lastElementChild;
  }
  onContentClick() {
    this.selfClick = true;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.overlay = event.element;
        this.renderer.appendChild(this.document.body, this.overlay);
        zindexutils.set("overlay", this.overlay, this.config.zIndex.overlay);
        DomHandler.absolutePosition(this.overlay, this.icon.nativeElement);
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.bindScrollListener();
        this.overlayEventListener = (e) => {
          if (this.overlay && this.overlay.contains(e.target)) {
            this.selfClick = true;
          }
        };
        this.overlaySubscription = this.overlayService.clickObservable.subscribe(this.overlayEventListener);
        break;
      case "void":
        this.onOverlayHide();
        if (this.overlaySubscription) {
          this.overlaySubscription.unsubscribe();
        }
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        zindexutils.clear(event.element);
        break;
    }
  }
  getDefaultMatchMode() {
    if (this.matchMode) {
      return this.matchMode;
    } else {
      if (this.type === "text")
        return FilterMatchMode.STARTS_WITH;
      else if (this.type === "numeric")
        return FilterMatchMode.EQUALS;
      else if (this.type === "date")
        return FilterMatchMode.DATE_IS;
      else
        return FilterMatchMode.CONTAINS;
    }
  }
  getDefaultOperator() {
    return this.dt.filters ? this.dt.filters[this.field][0].operator : this.operator;
  }
  hasRowFilter() {
    return this.dt.filters[this.field] && !this.dt.isFilterBlank(this.dt.filters[this.field].value);
  }
  get fieldConstraints() {
    return this.dt.filters ? this.dt.filters[this.field] : null;
  }
  get showRemoveIcon() {
    return this.fieldConstraints ? this.fieldConstraints.length > 1 : false;
  }
  get showMenuButton() {
    return this.showMenu && (this.display === "row" ? this.type !== "boolean" : true);
  }
  get isShowOperator() {
    return this.showOperator && this.type !== "boolean";
  }
  get isShowAddConstraint() {
    return this.showAddButton && this.type !== "boolean" && this.fieldConstraints && this.fieldConstraints.length < this.maxConstraints;
  }
  get applyButtonLabel() {
    return this.config.getTranslation(TranslationKeys.APPLY);
  }
  get clearButtonLabel() {
    return this.config.getTranslation(TranslationKeys.CLEAR);
  }
  get addRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.ADD_RULE);
  }
  get removeRuleButtonLabel() {
    return this.config.getTranslation(TranslationKeys.REMOVE_RULE);
  }
  get noFilterLabel() {
    return this.config.getTranslation(TranslationKeys.NO_FILTER);
  }
  hasFilter() {
    let fieldFilter = this.dt.filters[this.field];
    if (fieldFilter) {
      if (Array.isArray(fieldFilter))
        return !this.dt.isFilterBlank(fieldFilter[0].value);
      else
        return !this.dt.isFilterBlank(fieldFilter.value);
    }
    return false;
  }
  isOutsideClicked(event) {
    return !(this.overlay.isSameNode(event.target) || this.overlay.contains(event.target) || this.icon.nativeElement.isSameNode(event.target) || this.icon.nativeElement.contains(event.target) || DomHandler.hasClass(event.target, "p-column-filter-add-button") || DomHandler.hasClass(event.target.parentElement, "p-column-filter-add-button") || DomHandler.hasClass(event.target, "p-column-filter-remove-button") || DomHandler.hasClass(event.target.parentElement, "p-column-filter-remove-button"));
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        if (this.overlayVisible && !this.selfClick && this.isOutsideClicked(event)) {
          this.hide();
        }
        this.selfClick = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
      this.selfClick = false;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
        if (this.overlayVisible && !DomHandler.isTouchDevice()) {
          this.hide();
        }
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.icon.nativeElement, () => {
        if (this.overlayVisible) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  hide() {
    this.overlayVisible = false;
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.overlay = null;
  }
  clearFilter() {
    this.initFieldFilterConstraint();
    this.dt._filter();
    if (this.hideOnClear)
      this.hide();
  }
  applyFilter() {
    this.dt._filter();
    this.hide();
  }
  ngOnDestroy() {
    if (this.overlay) {
      this.renderer.appendChild(this.el.nativeElement, this.overlay);
      zindexutils.clear(this.overlay);
      this.onOverlayHide();
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    if (this.resetSubscription) {
      this.resetSubscription.unsubscribe();
    }
    if (this.overlaySubscription) {
      this.overlaySubscription.unsubscribe();
    }
  }
};
ColumnFilter.ɵfac = function ColumnFilter_Factory(t) {
  return new (t || ColumnFilter)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Table), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService));
};
ColumnFilter.ɵcmp = ɵɵdefineComponent({
  type: ColumnFilter,
  selectors: [["p-columnFilter"]],
  contentQueries: function ColumnFilter_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function ColumnFilter_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c28, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.icon = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field",
    type: "type",
    display: "display",
    showMenu: "showMenu",
    matchMode: "matchMode",
    operator: "operator",
    showOperator: "showOperator",
    showClearButton: "showClearButton",
    showApplyButton: "showApplyButton",
    showMatchModes: "showMatchModes",
    showAddButton: "showAddButton",
    hideOnClear: "hideOnClear",
    placeholder: "placeholder",
    matchModeOptions: "matchModeOptions",
    maxConstraints: "maxConstraints",
    minFractionDigits: "minFractionDigits",
    maxFractionDigits: "maxFractionDigits",
    prefix: "prefix",
    suffix: "suffix",
    locale: "locale",
    localeMatcher: "localeMatcher",
    currency: "currency",
    currencyDisplay: "currencyDisplay",
    useGrouping: "useGrouping",
    showButtons: "showButtons"
  },
  decls: 5,
  vars: 8,
  consts: [[1, "p-column-filter", 3, "ngClass"], ["class", "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons", 4, "ngIf"], ["type", "button", "class", "p-column-filter-menu-button p-link", "aria-haspopup", "true", 3, "ngClass", "click", "keydown", 4, "ngIf"], ["type", "button", "class", "p-column-filter-clear-button p-link", 3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click", "keydown.escape", 4, "ngIf"], [1, "p-fluid", 3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "showButtons"], ["type", "button", "aria-haspopup", "true", 1, "p-column-filter-menu-button", "p-link", 3, "ngClass", "click", "keydown"], ["icon", ""], [3, "styleClass", 4, "ngIf"], ["class", "pi-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "pi-filter-icon"], [4, "ngTemplateOutlet"], ["type", "button", 1, "p-column-filter-clear-button", "p-link", 3, "ngClass", "click"], [4, "ngIf"], [3, "ngClass", "click", "keydown.escape"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-column-filter-row-items", 4, "ngIf", "ngIfElse"], ["menu", ""], [1, "p-column-filter-row-items"], ["class", "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter", 4, "ngFor", "ngForOf"], [1, "p-column-filter-separator"], [1, "p-column-filter-row-item", 3, "click", "keydown", "keydown.enter"], [1, "p-column-filter-row-item", 3, "ngClass", "click", "keydown", "keydown.enter"], ["class", "p-column-filter-operator", 4, "ngIf"], [1, "p-column-filter-constraints"], ["class", "p-column-filter-constraint", 4, "ngFor", "ngForOf"], ["class", "p-column-filter-add-rule", 4, "ngIf"], [1, "p-column-filter-buttonbar"], ["type", "button", "pButton", "", "class", "p-button-outlined p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["type", "button", "pButton", "", "class", "p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], [1, "p-column-filter-operator"], ["styleClass", "p-column-filter-operator-dropdown", 3, "options", "ngModel", "ngModelChange"], [1, "p-column-filter-constraint"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange", 4, "ngIf"], [3, "type", "field", "filterConstraint", "filterTemplate", "placeholder", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping"], ["type", "button", "pButton", "", "class", "p-column-filter-remove-button p-button-text p-button-danger p-button-sm", "pRipple", "", 3, "label", "click", 4, "ngIf"], ["styleClass", "p-column-filter-matchmode-dropdown", 3, "options", "ngModel", "ngModelChange"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-column-filter-remove-button", "p-button-text", "p-button-danger", "p-button-sm", 3, "label", "click"], [1, "p-column-filter-add-rule"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-column-filter-add-button", "p-button-text", "p-button-sm", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-outlined", "p-button-sm", 3, "label", "click"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-sm", 3, "label", "click"]],
  template: function ColumnFilter_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, ColumnFilter_p_columnFilterFormElement_1_Template, 1, 15, "p-columnFilterFormElement", 1);
      ɵɵtemplate(2, ColumnFilter_button_2_Template, 4, 7, "button", 2);
      ɵɵtemplate(3, ColumnFilter_button_3_Template, 4, 5, "button", 3);
      ɵɵtemplate(4, ColumnFilter_div_4_Template, 6, 14, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction2(5, _c33, ctx.display === "row", ctx.display === "menu"));
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.display === "row");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showMenuButton);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showClearButton && ctx.display === "row");
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.showMenu && ctx.overlayVisible);
    }
  },
  dependencies: function() {
    return [NgClass, NgForOf, NgIf, NgTemplateOutlet, Dropdown, NgControlStatus, NgModel, ButtonDirective, FilterIcon, ColumnFilterFormElement];
  },
  encapsulation: 2,
  data: {
    animation: [trigger("overlayAnimation", [transition(":enter", [style({
      opacity: 0,
      transform: "scaleY(0.8)"
    }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
      opacity: 0
    }))])])]
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilter, [{
    type: Component,
    args: [{
      selector: "p-columnFilter",
      template: `
        <div class="p-column-filter" [ngClass]="{ 'p-column-filter-row': display === 'row', 'p-column-filter-menu': display === 'menu' }">
            <p-columnFilterFormElement
                *ngIf="display === 'row'"
                class="p-fluid"
                [type]="type"
                [field]="field"
                [filterConstraint]="dt.filters[field]"
                [filterTemplate]="filterTemplate"
                [placeholder]="placeholder"
                [minFractionDigits]="minFractionDigits"
                [maxFractionDigits]="maxFractionDigits"
                [prefix]="prefix"
                [suffix]="suffix"
                [locale]="locale"
                [localeMatcher]="localeMatcher"
                [currency]="currency"
                [currencyDisplay]="currencyDisplay"
                [useGrouping]="useGrouping"
                [showButtons]="showButtons"
            ></p-columnFilterFormElement>
            <button
                #icon
                *ngIf="showMenuButton"
                type="button"
                class="p-column-filter-menu-button p-link"
                aria-haspopup="true"
                [attr.aria-expanded]="overlayVisible"
                [ngClass]="{ 'p-column-filter-menu-button-open': overlayVisible, 'p-column-filter-menu-button-active': hasFilter() }"
                (click)="toggleMenu()"
                (keydown)="onToggleButtonKeyDown($event)"
            >
                <FilterIcon [styleClass]="'pi-filter-icon'" *ngIf="!filterIconTemplate"/>
                <span class="pi-filter-icon" *ngIf="filterIconTemplate">
                    <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                </span>
            </button>
            <button #icon *ngIf="showClearButton && display === 'row'" [ngClass]="{ 'p-hidden-space': !hasRowFilter() }" type="button" class="p-column-filter-clear-button p-link" (click)="clearFilter()">
                <FilterSlashIcon *ngIf="!clearIconTemplate"/>
                <ng-template *ngTemplateOutlet="clearFilterIcon"></ng-template>
            </button>
            <div
                *ngIf="showMenu && overlayVisible"
                [ngClass]="{ 'p-column-filter-overlay p-component p-fluid': true, 'p-column-filter-overlay-menu': display === 'menu' }"
                (click)="onContentClick()"
                [@overlayAnimation]="'visible'"
                (@overlayAnimation.start)="onOverlayAnimationStart($event)"
                (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
                (keydown.escape)="onEscape()"
            >
                <ng-container *ngTemplateOutlet="headerTemplate; context: { $implicit: field }"></ng-container>
                <ul *ngIf="display === 'row'; else menu" class="p-column-filter-row-items">
                    <li
                        class="p-column-filter-row-item"
                        *ngFor="let matchMode of matchModes; let i = index"
                        (click)="onRowMatchModeChange(matchMode.value)"
                        (keydown)="onRowMatchModeKeyDown($event)"
                        (keydown.enter)="this.onRowMatchModeChange(matchMode.value)"
                        [ngClass]="{ 'p-highlight': isRowMatchModeSelected(matchMode.value) }"
                        [attr.tabindex]="i === 0 ? '0' : null"
                    >
                        {{ matchMode.label }}
                    </li>
                    <li class="p-column-filter-separator"></li>
                    <li class="p-column-filter-row-item" (click)="onRowClearItemClick()" (keydown)="onRowMatchModeKeyDown($event)" (keydown.enter)="onRowClearItemClick()">{{ noFilterLabel }}</li>
                </ul>
                <ng-template #menu>
                    <div class="p-column-filter-operator" *ngIf="isShowOperator">
                        <p-dropdown [options]="operatorOptions" [ngModel]="operator" (ngModelChange)="onOperatorChange($event)" styleClass="p-column-filter-operator-dropdown"></p-dropdown>
                    </div>
                    <div class="p-column-filter-constraints">
                        <div *ngFor="let fieldConstraint of fieldConstraints; let i = index" class="p-column-filter-constraint">
                            <p-dropdown
                                *ngIf="showMatchModes && matchModes"
                                [options]="matchModes"
                                [ngModel]="fieldConstraint.matchMode"
                                (ngModelChange)="onMenuMatchModeChange($event, fieldConstraint)"
                                styleClass="p-column-filter-matchmode-dropdown"
                            ></p-dropdown>
                            <p-columnFilterFormElement
                                [type]="type"
                                [field]="field"
                                [filterConstraint]="fieldConstraint"
                                [filterTemplate]="filterTemplate"
                                [placeholder]="placeholder"
                                [minFractionDigits]="minFractionDigits"
                                [maxFractionDigits]="maxFractionDigits"
                                [prefix]="prefix"
                                [suffix]="suffix"
                                [locale]="locale"
                                [localeMatcher]="localeMatcher"
                                [currency]="currency"
                                [currencyDisplay]="currencyDisplay"
                                [useGrouping]="useGrouping"
                            ></p-columnFilterFormElement>
                            <div>
                                <button
                                    *ngIf="showRemoveIcon"
                                    type="button"
                                    pButton
                                    class="p-column-filter-remove-button p-button-text p-button-danger p-button-sm"
                                    (click)="removeConstraint(fieldConstraint)"
                                    pRipple
                                    [label]="removeRuleButtonLabel"
                                >
                                    <TrashIcon *ngIf="!removeRuleIconTemplate"/>
                                    <ng-template *ngTemplateOutlet="removeRuleIconTemplate"></ng-template>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="p-column-filter-add-rule" *ngIf="isShowAddConstraint">
                        <button type="button" pButton [label]="addRuleButtonLabel" class="p-column-filter-add-button p-button-text p-button-sm" (click)="addConstraint()" pRipple>
                            <PlusIcon *ngIf="!addRuleIconTemplate"/>
                            <ng-template *ngTemplateOutlet="addRuleIconTemplate"></ng-template>
                        </button>
                    </div>
                    <div class="p-column-filter-buttonbar">
                        <button *ngIf="showClearButton" type="button" pButton class="p-button-outlined p-button-sm" (click)="clearFilter()" [label]="clearButtonLabel" pRipple></button>
                        <button *ngIf="showApplyButton" type="button" pButton (click)="applyFilter()" class="p-button-sm" [label]="applyButtonLabel" pRipple></button>
                    </div>
                </ng-template>
                <ng-container *ngTemplateOutlet="footerTemplate; context: { $implicit: field }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate(".12s cubic-bezier(0, 0, 0.2, 1)")]), transition(":leave", [animate(".1s linear", style({
        opacity: 0
      }))])])],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Document,
      decorators: [{
        type: Inject,
        args: [DOCUMENT]
      }]
    }, {
      type: ElementRef
    }, {
      type: Table
    }, {
      type: Renderer2
    }, {
      type: PrimeNGConfig
    }, {
      type: OverlayService
    }];
  }, {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    display: [{
      type: Input
    }],
    showMenu: [{
      type: Input
    }],
    matchMode: [{
      type: Input
    }],
    operator: [{
      type: Input
    }],
    showOperator: [{
      type: Input
    }],
    showClearButton: [{
      type: Input
    }],
    showApplyButton: [{
      type: Input
    }],
    showMatchModes: [{
      type: Input
    }],
    showAddButton: [{
      type: Input
    }],
    hideOnClear: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    matchModeOptions: [{
      type: Input
    }],
    maxConstraints: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input
    }],
    maxFractionDigits: [{
      type: Input
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input
    }],
    showButtons: [{
      type: Input
    }],
    icon: [{
      type: ViewChild,
      args: ["icon"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ColumnFilterFormElement = class {
  constructor(dt, colFilter) {
    this.dt = dt;
    this.colFilter = colFilter;
    this.useGrouping = true;
  }
  get showButtons() {
    return this.colFilter.showButtons;
  }
  ngOnInit() {
    this.filterCallback = (value) => {
      this.filterConstraint.value = value;
      this.dt._filter();
    };
  }
  onModelChange(value) {
    this.filterConstraint.value = value;
    if (this.type === "boolean" || value === "") {
      this.dt._filter();
    }
  }
  onTextInputEnterKeyDown(event) {
    this.dt._filter();
    event.preventDefault();
  }
  onNumericInputKeyDown(event) {
    if (event.key === "Enter") {
      this.dt._filter();
      event.preventDefault();
    }
  }
};
ColumnFilterFormElement.ɵfac = function ColumnFilterFormElement_Factory(t) {
  return new (t || ColumnFilterFormElement)(ɵɵdirectiveInject(Table), ɵɵdirectiveInject(ColumnFilter));
};
ColumnFilterFormElement.ɵcmp = ɵɵdefineComponent({
  type: ColumnFilterFormElement,
  selectors: [["p-columnFilterFormElement"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    field: "field",
    type: "type",
    filterConstraint: "filterConstraint",
    filterTemplate: "filterTemplate",
    placeholder: "placeholder",
    minFractionDigits: "minFractionDigits",
    maxFractionDigits: "maxFractionDigits",
    prefix: "prefix",
    suffix: "suffix",
    locale: "locale",
    localeMatcher: "localeMatcher",
    currency: "currency",
    currencyDisplay: "currencyDisplay",
    useGrouping: "useGrouping"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["builtInElement", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter", 4, "ngSwitchCase"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown", 4, "ngSwitchCase"], [3, "ngModel", "ngModelChange", 4, "ngSwitchCase"], [3, "placeholder", "ngModel", "ngModelChange", 4, "ngSwitchCase"], ["type", "text", "pInputText", "", 3, "value", "input", "keydown.enter"], [3, "ngModel", "showButtons", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "placeholder", "mode", "locale", "localeMatcher", "currency", "currencyDisplay", "useGrouping", "ngModelChange", "onKeyDown"], [3, "ngModel", "ngModelChange"], [3, "placeholder", "ngModel", "ngModelChange"]],
  template: function ColumnFilterFormElement_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, ColumnFilterFormElement_ng_container_0_Template, 2, 19, "ng-container", 0);
      ɵɵtemplate(1, ColumnFilterFormElement_ng_template_1_Template, 5, 5, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(2);
      ɵɵproperty("ngIf", ctx.filterTemplate)("ngIfElse", _r1);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, InputNumber, NgControlStatus, NgModel, InputText, Calendar, TriStateCheckbox],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColumnFilterFormElement, [{
    type: Component,
    args: [{
      selector: "p-columnFilterFormElement",
      template: `
        <ng-container *ngIf="filterTemplate; else builtInElement">
            <ng-container
                *ngTemplateOutlet="
                    filterTemplate;
                    context: {
                        $implicit: filterConstraint.value,
                        filterCallback: filterCallback,
                        type: type,
                        field: field,
                        filterConstraint: filterConstraint,
                        placeholder: placeholder,
                        minFractionDigits: minFractionDigits,
                        maxFractionDigits: maxFractionDigits,
                        prefix: prefix,
                        suffix: suffix,
                        locale: locale,
                        localeMatcher: localeMatcher,
                        currency: currency,
                        currencyDisplay: currencyDisplay,
                        useGrouping: useGrouping,
                        showButtons: showButtons
                    }
                "
            ></ng-container>
        </ng-container>
        <ng-template #builtInElement>
            <ng-container [ngSwitch]="type">
                <input *ngSwitchCase="'text'" type="text" pInputText [value]="filterConstraint?.value" (input)="onModelChange($event.target.value)" (keydown.enter)="onTextInputEnterKeyDown($event)" [attr.placeholder]="placeholder" />
                <p-inputNumber
                    *ngSwitchCase="'numeric'"
                    [ngModel]="filterConstraint?.value"
                    (ngModelChange)="onModelChange($event)"
                    (onKeyDown)="onNumericInputKeyDown($event)"
                    [showButtons]="showButtons"
                    [minFractionDigits]="minFractionDigits"
                    [maxFractionDigits]="maxFractionDigits"
                    [prefix]="prefix"
                    [suffix]="suffix"
                    [placeholder]="placeholder"
                    [mode]="currency ? 'currency' : 'decimal'"
                    [locale]="locale"
                    [localeMatcher]="localeMatcher"
                    [currency]="currency"
                    [currencyDisplay]="currencyDisplay"
                    [useGrouping]="useGrouping"
                ></p-inputNumber>
                <p-triStateCheckbox *ngSwitchCase="'boolean'" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)"></p-triStateCheckbox>
                <p-calendar *ngSwitchCase="'date'" [placeholder]="placeholder" [ngModel]="filterConstraint?.value" (ngModelChange)="onModelChange($event)"></p-calendar>
            </ng-container>
        </ng-template>
    `,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: Table
    }, {
      type: ColumnFilter
    }];
  }, {
    field: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    filterConstraint: [{
      type: Input
    }],
    filterTemplate: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    minFractionDigits: [{
      type: Input
    }],
    maxFractionDigits: [{
      type: Input
    }],
    prefix: [{
      type: Input
    }],
    suffix: [{
      type: Input
    }],
    locale: [{
      type: Input
    }],
    localeMatcher: [{
      type: Input
    }],
    currency: [{
      type: Input
    }],
    currencyDisplay: [{
      type: Input
    }],
    useGrouping: [{
      type: Input
    }]
  });
})();
var TableModule = class {
};
TableModule.ɵfac = function TableModule_Factory(t) {
  return new (t || TableModule)();
};
TableModule.ɵmod = ɵɵdefineNgModule({
  type: TableModule,
  declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement],
  imports: [CommonModule, PaginatorModule, InputTextModule, DropdownModule, FormsModule, ButtonModule, SelectButtonModule, CalendarModule, InputNumberModule, TriStateCheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, FilterIcon],
  exports: [Table, SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement, ScrollerModule]
});
TableModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, PaginatorModule, InputTextModule, DropdownModule, FormsModule, ButtonModule, SelectButtonModule, CalendarModule, InputNumberModule, TriStateCheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, FilterIcon, SharedModule, ScrollerModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TableModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, PaginatorModule, InputTextModule, DropdownModule, FormsModule, ButtonModule, SelectButtonModule, CalendarModule, InputNumberModule, TriStateCheckboxModule, ScrollerModule, ArrowDownIcon, ArrowUpIcon, SpinnerIcon, SortAltIcon, SortAmountUpAltIcon, SortAmountDownIcon, CheckIcon, FilterIcon],
      exports: [Table, SharedModule, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement, ScrollerModule],
      declarations: [Table, SortableColumn, FrozenColumn, RowGroupHeader, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick, EditableRow, InitEditableRow, SaveEditableRow, CancelEditableRow, ColumnFilter, ColumnFilterFormElement]
    }]
  }], null, null);
})();
export {
  CancelEditableRow,
  CellEditor,
  ColumnFilter,
  ColumnFilterFormElement,
  ContextMenuRow,
  EditableColumn,
  EditableRow,
  FrozenColumn,
  InitEditableRow,
  ReorderableColumn,
  ReorderableRow,
  ReorderableRowHandle,
  ResizableColumn,
  RowGroupHeader,
  RowToggler,
  SaveEditableRow,
  SelectableRow,
  SelectableRowDblClick,
  SortIcon,
  SortableColumn,
  Table,
  TableBody,
  TableCheckbox,
  TableHeaderCheckbox,
  TableModule,
  TableRadioButton,
  TableService
};
//# sourceMappingURL=primeng_table.js.map
