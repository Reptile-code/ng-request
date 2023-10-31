import {
  TimesIcon
} from "./chunk-NTW4LXS3.js";
import {
  Ripple,
  RippleModule
} from "./chunk-HJHFAMDY.js";
import {
  DomHandler
} from "./chunk-FOOLY6Q7.js";
import {
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  zindexutils
} from "./chunk-FSVIF75D.js";
import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation
} from "./chunk-PCISQTO5.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-YSU6UL2H.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  Renderer2,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-X7KDTYUN.js";
import "./chunk-CQXG3EQT.js";
import "./chunk-AOF462FV.js";
import "./chunk-SU2WE4RP.js";

// node_modules/primeng/fesm2020/primeng-sidebar.mjs
function Sidebar_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_button_4_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "TimesIcon", 11);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-sidebar-close-icon");
  }
}
function Sidebar_div_0_button_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Sidebar_div_0_button_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Sidebar_div_0_button_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Sidebar_div_0_button_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtemplate(1, Sidebar_div_0_button_4_span_2_1_Template, 1, 0, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.closeIconTemplate);
  }
}
function Sidebar_div_0_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function Sidebar_div_0_button_4_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r10.close($event));
    })("keydown.enter", function Sidebar_div_0_button_4_Template_button_keydown_enter_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r12 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r12.close($event));
    });
    ɵɵtemplate(1, Sidebar_div_0_button_4_TimesIcon_1_Template, 1, 1, "TimesIcon", 9);
    ɵɵtemplate(2, Sidebar_div_0_button_4_span_2_Template, 2, 1, "span", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-label", ctx_r3.ariaCloseLabel);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r3.closeIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r3.closeIconTemplate);
  }
}
function Sidebar_div_0_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Sidebar_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c0 = function(a1, a2, a3, a4, a5, a6) {
  return {
    "p-sidebar": true,
    "p-sidebar-active": a1,
    "p-sidebar-left": a2,
    "p-sidebar-right": a3,
    "p-sidebar-top": a4,
    "p-sidebar-bottom": a5,
    "p-sidebar-full": a6
  };
};
var _c1 = function(a0, a1) {
  return {
    transform: a0,
    transition: a1
  };
};
var _c2 = function(a1) {
  return {
    value: "visible",
    params: a1
  };
};
function Sidebar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵlistener("@panelState.start", function Sidebar_div_0_Template_div_animation_panelState_start_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.onAnimationStart($event));
    })("@panelState.done", function Sidebar_div_0_Template_div_animation_panelState_done_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.onAnimationEnd($event));
    });
    ɵɵelementStart(2, "div", 3);
    ɵɵtemplate(3, Sidebar_div_0_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵtemplate(4, Sidebar_div_0_button_4_Template, 3, 3, "button", 5);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 6);
    ɵɵprojection(6);
    ɵɵtemplate(7, Sidebar_div_0_ng_container_7_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 7);
    ɵɵtemplate(9, Sidebar_div_0_ng_container_9_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction6(10, _c0, ctx_r0.visible, ctx_r0.position === "left" && !ctx_r0.fullScreen, ctx_r0.position === "right" && !ctx_r0.fullScreen, ctx_r0.position === "top" && !ctx_r0.fullScreen, ctx_r0.position === "bottom" && !ctx_r0.fullScreen, ctx_r0.fullScreen))("@panelState", ɵɵpureFunction1(20, _c2, ɵɵpureFunction2(17, _c1, ctx_r0.transformOptions, ctx_r0.transitionOptions)))("ngStyle", ctx_r0.style);
    ɵɵattribute("aria-modal", ctx_r0.modal);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.showCloseIcon);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.footerTemplate);
  }
}
var _c3 = ["*"];
var showAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{transition}}")]);
var hideAnimation = animation([animate("{{transition}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Sidebar = class {
  constructor(document2, el, renderer, cd, config) {
    this.document = document2;
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.config = config;
    this.blockScroll = false;
    this.autoZIndex = true;
    this.baseZIndex = 0;
    this.modal = true;
    this.dismissible = true;
    this.showCloseIcon = true;
    this.closeOnEscape = true;
    this.transitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
    this.onShow = new EventEmitter();
    this.onHide = new EventEmitter();
    this.visibleChange = new EventEmitter();
    this._position = "left";
    this._fullScreen = false;
    this.transformOptions = "translate3d(-100%, 0px, 0px)";
  }
  ngAfterViewInit() {
    this.initialized = true;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  get visible() {
    return this._visible;
  }
  set visible(val) {
    this._visible = val;
  }
  get position() {
    return this._position;
  }
  set position(value) {
    this._position = value;
    switch (value) {
      case "left":
        this.transformOptions = "translate3d(-100%, 0px, 0px)";
        break;
      case "right":
        this.transformOptions = "translate3d(100%, 0px, 0px)";
        break;
      case "bottom":
        this.transformOptions = "translate3d(0px, 100%, 0px)";
        break;
      case "top":
        this.transformOptions = "translate3d(0px, -100%, 0px)";
        break;
    }
  }
  get fullScreen() {
    return this._fullScreen;
  }
  set fullScreen(value) {
    this._fullScreen = value;
    if (value)
      this.transformOptions = "none";
  }
  show() {
    if (this.autoZIndex) {
      zindexutils.set("modal", this.container, this.baseZIndex || this.config.zIndex.modal);
    }
    if (this.modal) {
      this.enableModality();
    }
    this.onShow.emit({});
    this.visibleChange.emit(true);
  }
  hide(emit = true) {
    if (emit) {
      this.onHide.emit({});
    }
    if (this.modal) {
      this.disableModality();
    }
  }
  close(event) {
    this.hide();
    this.visibleChange.emit(false);
    event.preventDefault();
  }
  enableModality() {
    if (!this.mask) {
      this.mask = this.renderer.createElement("div");
      this.renderer.setStyle(this.mask, "zIndex", String(parseInt(this.container.style.zIndex) - 1));
      DomHandler.addMultipleClasses(this.mask, "p-component-overlay p-sidebar-mask p-component-overlay p-component-overlay-enter");
      if (this.dismissible) {
        this.maskClickListener = this.renderer.listen(this.mask, "click", (event) => {
          if (this.dismissible) {
            this.close(event);
          }
        });
      }
      this.renderer.appendChild(this.document.body, this.mask);
      if (this.blockScroll) {
        DomHandler.addClass(document.body, "p-overflow-hidden");
      }
    }
  }
  disableModality() {
    if (this.mask) {
      DomHandler.addClass(this.mask, "p-component-overlay-leave");
      this.animationEndListener = this.renderer.listen(this.mask, "animationend", this.destroyModal.bind(this));
    }
  }
  destroyModal() {
    this.unbindMaskClickListener();
    if (this.mask) {
      this.renderer.removeChild(this.document.body, this.mask);
    }
    if (this.blockScroll) {
      DomHandler.removeClass(document.body, "p-overflow-hidden");
    }
    this.unbindAnimationEndListener();
    this.mask = null;
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.container = event.element;
        this.appendContainer();
        this.show();
        if (this.closeOnEscape) {
          this.bindDocumentEscapeListener();
        }
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.hide(false);
        zindexutils.clear(this.container);
        this.unbindGlobalListeners();
        break;
    }
  }
  appendContainer() {
    if (this.appendTo) {
      if (this.appendTo === "body")
        this.renderer.appendChild(this.document.body, this.container);
      else
        DomHandler.appendChild(this.container, this.appendTo);
    }
  }
  bindDocumentEscapeListener() {
    const documentTarget = this.el ? this.el.nativeElement.ownerDocument : this.document;
    this.documentEscapeListener = this.renderer.listen(documentTarget, "keydown", (event) => {
      if (event.which == 27) {
        if (parseInt(this.container.style.zIndex) === zindexutils.get(this.container)) {
          this.close(event);
        }
      }
    });
  }
  unbindDocumentEscapeListener() {
    if (this.documentEscapeListener) {
      this.documentEscapeListener();
      this.documentEscapeListener = null;
    }
  }
  unbindMaskClickListener() {
    if (this.maskClickListener) {
      this.maskClickListener();
      this.maskClickListener = null;
    }
  }
  unbindGlobalListeners() {
    this.unbindMaskClickListener();
    this.unbindDocumentEscapeListener();
  }
  unbindAnimationEndListener() {
    if (this.animationEndListener && this.mask) {
      this.animationEndListener();
      this.animationEndListener = null;
    }
  }
  ngOnDestroy() {
    this.initialized = false;
    if (this.visible && this.modal) {
      this.destroyModal();
    }
    if (this.appendTo && this.container) {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
    if (this.container && this.autoZIndex) {
      zindexutils.clear(this.container);
    }
    this.container = null;
    this.unbindGlobalListeners();
    this.unbindAnimationEndListener();
  }
};
Sidebar.ɵfac = function Sidebar_Factory(t) {
  return new (t || Sidebar)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PrimeNGConfig));
};
Sidebar.ɵcmp = ɵɵdefineComponent({
  type: Sidebar,
  selectors: [["p-sidebar"]],
  contentQueries: function Sidebar_ContentQueries(rf, ctx, dirIndex) {
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
    appendTo: "appendTo",
    blockScroll: "blockScroll",
    style: "style",
    styleClass: "styleClass",
    ariaCloseLabel: "ariaCloseLabel",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    modal: "modal",
    dismissible: "dismissible",
    showCloseIcon: "showCloseIcon",
    closeOnEscape: "closeOnEscape",
    transitionOptions: "transitionOptions",
    visible: "visible",
    position: "position",
    fullScreen: "fullScreen"
  },
  outputs: {
    onShow: "onShow",
    onHide: "onHide",
    visibleChange: "visibleChange"
  },
  ngContentSelectors: _c3,
  decls: 1,
  vars: 1,
  consts: [["role", "complementary", 3, "ngClass", "ngStyle", "class", 4, "ngIf"], ["role", "complementary", 3, "ngClass", "ngStyle"], ["container", ""], [1, "p-sidebar-header"], [4, "ngTemplateOutlet"], ["type", "button", "class", "p-sidebar-close p-sidebar-icon p-link", "pRipple", "", 3, "click", "keydown.enter", 4, "ngIf"], [1, "p-sidebar-content"], [1, "p-sidebar-footer"], ["type", "button", "pRipple", "", 1, "p-sidebar-close", "p-sidebar-icon", "p-link", 3, "click", "keydown.enter"], [3, "styleClass", 4, "ngIf"], ["class", "p-sidebar-close-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-sidebar-close-icon"]],
  template: function Sidebar_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, Sidebar_div_0_Template, 10, 22, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.visible);
    }
  },
  dependencies: function() {
    return [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple, TimesIcon];
  },
  styles: [".p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])]
  },
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Sidebar, [{
    type: Component,
    args: [{
      selector: "p-sidebar",
      template: `
        <div
            #container
            [ngClass]="{
                'p-sidebar': true,
                'p-sidebar-active': visible,
                'p-sidebar-left': position === 'left' && !fullScreen,
                'p-sidebar-right': position === 'right' && !fullScreen,
                'p-sidebar-top': position === 'top' && !fullScreen,
                'p-sidebar-bottom': position === 'bottom' && !fullScreen,
                'p-sidebar-full': fullScreen
            }"
            *ngIf="visible"
            [@panelState]="{ value: 'visible', params: { transform: transformOptions, transition: transitionOptions } }"
            (@panelState.start)="onAnimationStart($event)"
            (@panelState.done)="onAnimationEnd($event)"
            [ngStyle]="style"
            [class]="styleClass"
            role="complementary"
            [attr.aria-modal]="modal"
        >
            <div class="p-sidebar-header">
                <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                <button type="button" class="p-sidebar-close p-sidebar-icon p-link" (click)="close($event)" (keydown.enter)="close($event)" [attr.aria-label]="ariaCloseLabel" *ngIf="showCloseIcon" pRipple>
                    <TimesIcon *ngIf="!closeIconTemplate" [styleClass]="'p-sidebar-close-icon'"/>
                    <span *ngIf="closeIconTemplate" class="p-sidebar-close-icon">
                        <ng-template *ngTemplateOutlet="closeIconTemplate"></ng-template>
                    </span>
                </button>
            </div>
            <div class="p-sidebar-content">
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate"></ng-container>
            </div>
            <div class="p-sidebar-footer">
                <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("panelState", [transition("void => visible", [useAnimation(showAnimation)]), transition("visible => void", [useAnimation(hideAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: [".p-sidebar{position:fixed;transition:transform .3s;display:flex;flex-direction:column}.p-sidebar-content{position:relative;overflow-y:auto;flex-grow:1}.p-sidebar-header{display:flex;align-items:center}.p-sidebar-footer{margin-top:auto}.p-sidebar-icon{display:flex;align-items:center;justify-content:center;margin-left:auto}.p-sidebar-left{top:0;left:0;width:20rem;height:100%}.p-sidebar-right{top:0;right:0;width:20rem;height:100%}.p-sidebar-top{top:0;left:0;width:100%;height:10rem}.p-sidebar-bottom{bottom:0;left:0;width:100%;height:10rem}.p-sidebar-full{width:100%;height:100%;top:0;left:0;transition:none}.p-sidebar-left.p-sidebar-sm,.p-sidebar-right.p-sidebar-sm{width:20rem}.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-md{width:40rem}.p-sidebar-left.p-sidebar-lg,.p-sidebar-right.p-sidebar-lg{width:60rem}.p-sidebar-top.p-sidebar-sm,.p-sidebar-bottom.p-sidebar-sm{height:10rem}.p-sidebar-top.p-sidebar-md,.p-sidebar-bottom.p-sidebar-md{height:20rem}.p-sidebar-top.p-sidebar-lg,.p-sidebar-bottom.p-sidebar-lg{height:30rem}@media screen and (max-width: 64em){.p-sidebar-left.p-sidebar-lg,.p-sidebar-left.p-sidebar-md,.p-sidebar-right.p-sidebar-lg,.p-sidebar-right.p-sidebar-md{width:20rem}}\n"]
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
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: PrimeNGConfig
    }];
  }, {
    appendTo: [{
      type: Input
    }],
    blockScroll: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaCloseLabel: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    modal: [{
      type: Input
    }],
    dismissible: [{
      type: Input
    }],
    showCloseIcon: [{
      type: Input
    }],
    closeOnEscape: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    visible: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    fullScreen: [{
      type: Input
    }]
  });
})();
var SidebarModule = class {
};
SidebarModule.ɵfac = function SidebarModule_Factory(t) {
  return new (t || SidebarModule)();
};
SidebarModule.ɵmod = ɵɵdefineNgModule({
  type: SidebarModule,
  declarations: [Sidebar],
  imports: [CommonModule, RippleModule, SharedModule, TimesIcon],
  exports: [Sidebar, SharedModule]
});
SidebarModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, RippleModule, SharedModule, TimesIcon, SharedModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SidebarModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RippleModule, SharedModule, TimesIcon],
      exports: [Sidebar, SharedModule],
      declarations: [Sidebar]
    }]
  }], null, null);
})();
export {
  Sidebar,
  SidebarModule
};
//# sourceMappingURL=primeng_sidebar.js.map
