import {
  Tooltip,
  TooltipModule
} from "./chunk-K4PCLLZO.js";
import {
  ChevronDownIcon
} from "./chunk-D7ZDM4UO.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-Y57JNKG3.js";
import {
  SpinnerIcon
} from "./chunk-6KAAALNF.js";
import {
  TimesIcon
} from "./chunk-NTW4LXS3.js";
import {
  Ripple,
  RippleModule
} from "./chunk-HJHFAMDY.js";
import {
  BaseIcon,
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-FOOLY6Q7.js";
import {
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
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-YSU6UL2H.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
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
  __spreadValues
} from "./chunk-SU2WE4RP.js";

// node_modules/primeng/fesm2020/primeng-autofocus.mjs
var AutoFocus = class {
  constructor(host) {
    this.host = host;
    this.focused = false;
  }
  ngAfterViewChecked() {
    if (!this.focused) {
      if (this.autofocus) {
        const focusableElements = DomHandler.getFocusableElements(this.host.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      }
    }
  }
};
AutoFocus.ɵfac = function AutoFocus_Factory(t) {
  return new (t || AutoFocus)(ɵɵdirectiveInject(ElementRef));
};
AutoFocus.ɵdir = ɵɵdefineDirective({
  type: AutoFocus,
  selectors: [["", "pAutoFocus", ""]],
  hostAttrs: [1, "p-element"],
  inputs: {
    autofocus: "autofocus"
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    autofocus: [{
      type: Input
    }]
  });
})();
var AutoFocusModule = class {
};
AutoFocusModule.ɵfac = function AutoFocusModule_Factory(t) {
  return new (t || AutoFocusModule)();
};
AutoFocusModule.ɵmod = ɵɵdefineNgModule({
  type: AutoFocusModule,
  declarations: [AutoFocus],
  imports: [CommonModule],
  exports: [AutoFocus]
});
AutoFocusModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [AutoFocus],
      declarations: [AutoFocus]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-overlay.mjs
var _c0 = ["overlay"];
var _c1 = ["content"];
function Overlay_div_0_div_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c2 = function(a0, a1, a2) {
  return {
    showTransitionParams: a0,
    hideTransitionParams: a1,
    transform: a2
  };
};
var _c3 = function(a1) {
  return {
    value: "visible",
    params: a1
  };
};
var _c4 = function(a0) {
  return {
    mode: a0
  };
};
var _c5 = function(a0) {
  return {
    $implicit: a0
  };
};
function Overlay_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1, 3);
    ɵɵlistener("click", function Overlay_div_0_div_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.onOverlayContentClick($event));
    })("@overlayContentAnimation.start", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_start_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r7 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r7.onOverlayContentAnimationStart($event));
    })("@overlayContentAnimation.done", function Overlay_div_0_div_2_Template_div_animation_overlayContentAnimation_done_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r8 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r8.onOverlayContentAnimationDone($event));
    });
    ɵɵprojection(2);
    ɵɵtemplate(3, Overlay_div_0_div_2_ng_container_3_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.contentStyleClass);
    ɵɵproperty("ngStyle", ctx_r2.contentStyle)("ngClass", "p-overlay-content")("@overlayContentAnimation", ɵɵpureFunction1(11, _c3, ɵɵpureFunction3(7, _c2, ctx_r2.showTransitionOptions, ctx_r2.hideTransitionOptions, ctx_r2.transformOptions[ctx_r2.modal ? ctx_r2.overlayResponsiveDirection : "default"])));
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(15, _c5, ɵɵpureFunction1(13, _c4, ctx_r2.overlayMode)));
  }
}
var _c6 = function(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14) {
  return {
    "p-overlay p-component": true,
    "p-overlay-modal p-component-overlay p-component-overlay-enter": a1,
    "p-overlay-center": a2,
    "p-overlay-top": a3,
    "p-overlay-top-start": a4,
    "p-overlay-top-end": a5,
    "p-overlay-bottom": a6,
    "p-overlay-bottom-start": a7,
    "p-overlay-bottom-end": a8,
    "p-overlay-left": a9,
    "p-overlay-left-start": a10,
    "p-overlay-left-end": a11,
    "p-overlay-right": a12,
    "p-overlay-right-start": a13,
    "p-overlay-right-end": a14
  };
};
function Overlay_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵlistener("click", function Overlay_div_0_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.onOverlayClick($event));
    });
    ɵɵtemplate(2, Overlay_div_0_div_2_Template, 4, 17, "div", 0);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.styleClass);
    ɵɵproperty("ngStyle", ctx_r0.style)("ngClass", ɵɵpureFunctionV(5, _c6, [ctx_r0.modal, ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "center", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "top", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "top-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "top-end", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "bottom", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "bottom-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "bottom-end", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "left", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "left-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "left-end", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "right", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "right-start", ctx_r0.modal && ctx_r0.overlayResponsiveDirection === "right-end"]));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.visible);
  }
}
var _c7 = ["*"];
var OVERLAY_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Overlay),
  multi: true
};
var showOverlayContentAnimation = animation([style({
  transform: "{{transform}}",
  opacity: 0
}), animate("{{showTransitionParams}}")]);
var hideOverlayContentAnimation = animation([animate("{{hideTransitionParams}}", style({
  transform: "{{transform}}",
  opacity: 0
}))]);
var Overlay = class {
  constructor(document, platformId, el, renderer, config, overlayService, zone) {
    this.document = document;
    this.platformId = platformId;
    this.el = el;
    this.renderer = renderer;
    this.config = config;
    this.overlayService = overlayService;
    this.zone = zone;
    this.visibleChange = new EventEmitter();
    this.onBeforeShow = new EventEmitter();
    this.onShow = new EventEmitter();
    this.onBeforeHide = new EventEmitter();
    this.onHide = new EventEmitter();
    this.onAnimationStart = new EventEmitter();
    this.onAnimationDone = new EventEmitter();
    this._visible = false;
    this.modalVisible = false;
    this.isOverlayClicked = false;
    this.isOverlayContentClicked = false;
    this.transformOptions = {
      default: "scaleY(0.8)",
      center: "scale(0.7)",
      top: "translate3d(0px, -100%, 0px)",
      "top-start": "translate3d(0px, -100%, 0px)",
      "top-end": "translate3d(0px, -100%, 0px)",
      bottom: "translate3d(0px, 100%, 0px)",
      "bottom-start": "translate3d(0px, 100%, 0px)",
      "bottom-end": "translate3d(0px, 100%, 0px)",
      left: "translate3d(-100%, 0px, 0px)",
      "left-start": "translate3d(-100%, 0px, 0px)",
      "left-end": "translate3d(-100%, 0px, 0px)",
      right: "translate3d(100%, 0px, 0px)",
      "right-start": "translate3d(100%, 0px, 0px)",
      "right-end": "translate3d(100%, 0px, 0px)"
    };
    this.window = this.document.defaultView;
  }
  get visible() {
    return this._visible;
  }
  set visible(value) {
    this._visible = value;
    if (this._visible && !this.modalVisible) {
      this.modalVisible = true;
    }
  }
  get mode() {
    return this._mode || this.overlayOptions?.mode;
  }
  set mode(value) {
    this._mode = value;
  }
  get style() {
    return ObjectUtils.merge(this._style, this.modal ? this.overlayResponsiveOptions?.style : this.overlayOptions?.style);
  }
  set style(value) {
    this._style = value;
  }
  get styleClass() {
    return ObjectUtils.merge(this._styleClass, this.modal ? this.overlayResponsiveOptions?.styleClass : this.overlayOptions?.styleClass);
  }
  set styleClass(value) {
    this._styleClass = value;
  }
  get contentStyle() {
    return ObjectUtils.merge(this._contentStyle, this.modal ? this.overlayResponsiveOptions?.contentStyle : this.overlayOptions?.contentStyle);
  }
  set contentStyle(value) {
    this._contentStyle = value;
  }
  get contentStyleClass() {
    return ObjectUtils.merge(this._contentStyleClass, this.modal ? this.overlayResponsiveOptions?.contentStyleClass : this.overlayOptions?.contentStyleClass);
  }
  set contentStyleClass(value) {
    this._contentStyleClass = value;
  }
  get target() {
    const value = this._target || this.overlayOptions?.target;
    return value === void 0 ? "@prev" : value;
  }
  set target(value) {
    this._target = value;
  }
  get appendTo() {
    return this._appendTo || this.overlayOptions?.appendTo;
  }
  set appendTo(value) {
    this._appendTo = value;
  }
  get autoZIndex() {
    const value = this._autoZIndex || this.overlayOptions?.autoZIndex;
    return value === void 0 ? true : value;
  }
  set autoZIndex(value) {
    this._autoZIndex = value;
  }
  get baseZIndex() {
    const value = this._baseZIndex || this.overlayOptions?.baseZIndex;
    return value === void 0 ? 0 : value;
  }
  set baseZIndex(value) {
    this._baseZIndex = value;
  }
  get showTransitionOptions() {
    const value = this._showTransitionOptions || this.overlayOptions?.showTransitionOptions;
    return value === void 0 ? ".12s cubic-bezier(0, 0, 0.2, 1)" : value;
  }
  set showTransitionOptions(value) {
    this._showTransitionOptions = value;
  }
  get hideTransitionOptions() {
    const value = this._hideTransitionOptions || this.overlayOptions?.hideTransitionOptions;
    return value === void 0 ? ".1s linear" : value;
  }
  set hideTransitionOptions(value) {
    this._hideTransitionOptions = value;
  }
  get listener() {
    return this._listener || this.overlayOptions?.listener;
  }
  set listener(value) {
    this._listener = value;
  }
  get responsive() {
    return this._responsive || this.overlayOptions?.responsive;
  }
  set responsive(val) {
    this._responsive = val;
  }
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
  }
  get modal() {
    if (isPlatformBrowser(this.platformId)) {
      return this.mode === "modal" || this.overlayResponsiveOptions && this.window?.matchMedia(this.overlayResponsiveOptions.media?.replace("@media", "") || `(max-width: ${this.overlayResponsiveOptions.breakpoint})`).matches;
    }
  }
  get overlayMode() {
    return this.mode || (this.modal ? "modal" : "overlay");
  }
  get overlayOptions() {
    return __spreadValues(__spreadValues({}, this.config?.overlayOptions), this.options);
  }
  get overlayResponsiveOptions() {
    return __spreadValues(__spreadValues({}, this.overlayOptions?.responsive), this.responsive);
  }
  get overlayResponsiveDirection() {
    return this.overlayResponsiveOptions?.direction || "center";
  }
  get overlayEl() {
    return this.overlayViewChild?.nativeElement;
  }
  get contentEl() {
    return this.contentViewChild?.nativeElement;
  }
  get targetEl() {
    return DomHandler.getTargetElement(this.target, this.el?.nativeElement);
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        default:
          this.contentTemplate = item.template;
          break;
      }
    });
  }
  show(overlay, isFocus = false) {
    this.onVisibleChange(true);
    this.handleEvents("onShow", {
      overlay: overlay || this.overlayEl,
      target: this.targetEl,
      mode: this.overlayMode
    });
    isFocus && DomHandler.focus(this.targetEl);
    this.modal && DomHandler.addClass(this.document?.body, "p-overflow-hidden");
  }
  hide(overlay, isFocus = false) {
    if (!this.visible) {
      return;
    } else {
      this.onVisibleChange(false);
      this.handleEvents("onHide", {
        overlay: overlay || this.overlayEl,
        target: this.targetEl,
        mode: this.overlayMode
      });
      isFocus && DomHandler.focus(this.targetEl);
      this.modal && DomHandler.removeClass(this.document?.body, "p-overflow-hidden");
    }
  }
  alignOverlay() {
    !this.modal && DomHandler.alignOverlay(this.overlayEl, this.targetEl, this.appendTo);
  }
  onVisibleChange(visible) {
    this._visible = visible;
    this.visibleChange.emit(visible);
  }
  onOverlayClick(event) {
    this.isOverlayClicked = true;
  }
  onOverlayContentClick(event) {
    this.overlayService.add({
      originalEvent: event,
      target: this.targetEl
    });
    this.isOverlayContentClicked = true;
  }
  onOverlayContentAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.handleEvents("onBeforeShow", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        if (this.autoZIndex) {
          zindexutils.set(this.overlayMode, this.overlayEl, this.baseZIndex + this.config?.zIndex[this.overlayMode]);
        }
        DomHandler.appendOverlay(this.overlayEl, this.appendTo === "body" ? this.document.body : this.appendTo, this.appendTo);
        this.alignOverlay();
        break;
      case "void":
        this.handleEvents("onBeforeHide", {
          overlay: this.overlayEl,
          target: this.targetEl,
          mode: this.overlayMode
        });
        this.modal && DomHandler.addClass(this.overlayEl, "p-component-overlay-leave");
        break;
    }
    this.handleEvents("onAnimationStart", event);
  }
  onOverlayContentAnimationDone(event) {
    const container = this.overlayEl || event.element.parentElement;
    switch (event.toState) {
      case "visible":
        this.show(container, true);
        this.bindListeners();
        break;
      case "void":
        this.hide(container, true);
        this.unbindListeners();
        DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
        zindexutils.clear(container);
        this.modalVisible = false;
        break;
    }
    this.handleEvents("onAnimationDone", event);
  }
  handleEvents(name, params) {
    this[name].emit(params);
    this.options && this.options[name] && this.options[name](params);
    this.config?.overlayOptions && (this.config?.overlayOptions)[name] && (this.config?.overlayOptions)[name](params);
  }
  bindListeners() {
    this.bindScrollListener();
    this.bindDocumentClickListener();
    this.bindDocumentResizeListener();
    this.bindDocumentKeyboardListener();
  }
  unbindListeners() {
    this.unbindScrollListener();
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindDocumentKeyboardListener();
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.targetEl, (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "scroll",
          mode: this.overlayMode,
          valid: true
        }) : true;
        valid && this.hide(event, true);
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      this.documentClickListener = this.renderer.listen(this.document, "click", (event) => {
        const isTargetClicked = this.targetEl && (this.targetEl.isSameNode(event.target) || !this.isOverlayClicked && this.targetEl.contains(event.target));
        const isOutsideClicked = !isTargetClicked && !this.isOverlayContentClicked;
        const valid = this.listener ? this.listener(event, {
          type: "outside",
          mode: this.overlayMode,
          valid: event.which !== 3 && isOutsideClicked
        }) : isOutsideClicked;
        valid && this.hide(event);
        this.isOverlayClicked = this.isOverlayContentClicked = false;
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener) {
      this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
        const valid = this.listener ? this.listener(event, {
          type: "resize",
          mode: this.overlayMode,
          valid: !DomHandler.isTouchDevice()
        }) : !DomHandler.isTouchDevice();
        valid && this.hide(event, true);
      });
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      return;
    }
    this.zone.runOutsideAngular(() => {
      this.documentKeyboardListener = this.renderer.listen(this.window, "keydown", (event) => {
        if (!this.overlayOptions.hideOnEscape || event.keyCode !== 27) {
          return;
        }
        const valid = this.listener ? this.listener(event, {
          type: "keydown",
          mode: this.overlayMode,
          valid: !DomHandler.isTouchDevice()
        }) : !DomHandler.isTouchDevice();
        if (valid) {
          this.zone.run(() => {
            this.hide(event, true);
          });
        }
      });
    });
  }
  unbindDocumentKeyboardListener() {
    if (this.documentKeyboardListener) {
      this.documentKeyboardListener();
      this.documentKeyboardListener = null;
    }
  }
  ngOnDestroy() {
    this.hide(this.overlayEl, true);
    if (this.overlayEl) {
      DomHandler.appendOverlay(this.overlayEl, this.targetEl, this.appendTo);
      zindexutils.clear(this.overlayEl);
    }
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
    this.unbindListeners();
  }
};
Overlay.ɵfac = function Overlay_Factory(t) {
  return new (t || Overlay)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(OverlayService), ɵɵdirectiveInject(NgZone));
};
Overlay.ɵcmp = ɵɵdefineComponent({
  type: Overlay,
  selectors: [["p-overlay"]],
  contentQueries: function Overlay_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Overlay_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element"],
  inputs: {
    visible: "visible",
    mode: "mode",
    style: "style",
    styleClass: "styleClass",
    contentStyle: "contentStyle",
    contentStyleClass: "contentStyleClass",
    target: "target",
    appendTo: "appendTo",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    listener: "listener",
    responsive: "responsive",
    options: "options"
  },
  outputs: {
    visibleChange: "visibleChange",
    onBeforeShow: "onBeforeShow",
    onShow: "onShow",
    onBeforeHide: "onBeforeHide",
    onHide: "onHide",
    onAnimationStart: "onAnimationStart",
    onAnimationDone: "onAnimationDone"
  },
  features: [ɵɵProvidersFeature([OVERLAY_VALUE_ACCESSOR])],
  ngContentSelectors: _c7,
  decls: 1,
  vars: 1,
  consts: [[3, "ngStyle", "class", "ngClass", "click", 4, "ngIf"], [3, "ngStyle", "ngClass", "click"], ["overlay", ""], ["content", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function Overlay_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, Overlay_div_0_Template, 3, 20, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.modalVisible);
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle],
  styles: [".p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])]
  },
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Overlay, [{
    type: Component,
    args: [{
      selector: "p-overlay",
      template: `
        <div
            *ngIf="modalVisible"
            #overlay
            [ngStyle]="style"
            [class]="styleClass"
            [ngClass]="{
                'p-overlay p-component': true,
                'p-overlay-modal p-component-overlay p-component-overlay-enter': modal,
                'p-overlay-center': modal && overlayResponsiveDirection === 'center',
                'p-overlay-top': modal && overlayResponsiveDirection === 'top',
                'p-overlay-top-start': modal && overlayResponsiveDirection === 'top-start',
                'p-overlay-top-end': modal && overlayResponsiveDirection === 'top-end',
                'p-overlay-bottom': modal && overlayResponsiveDirection === 'bottom',
                'p-overlay-bottom-start': modal && overlayResponsiveDirection === 'bottom-start',
                'p-overlay-bottom-end': modal && overlayResponsiveDirection === 'bottom-end',
                'p-overlay-left': modal && overlayResponsiveDirection === 'left',
                'p-overlay-left-start': modal && overlayResponsiveDirection === 'left-start',
                'p-overlay-left-end': modal && overlayResponsiveDirection === 'left-end',
                'p-overlay-right': modal && overlayResponsiveDirection === 'right',
                'p-overlay-right-start': modal && overlayResponsiveDirection === 'right-start',
                'p-overlay-right-end': modal && overlayResponsiveDirection === 'right-end'
            }"
            (click)="onOverlayClick($event)"
        >
            <div
                *ngIf="visible"
                #content
                [ngStyle]="contentStyle"
                [class]="contentStyleClass"
                [ngClass]="'p-overlay-content'"
                (click)="onOverlayContentClick($event)"
                [@overlayContentAnimation]="{ value: 'visible', params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions, transform: transformOptions[modal ? overlayResponsiveDirection : 'default'] } }"
                (@overlayContentAnimation.start)="onOverlayContentAnimationStart($event)"
                (@overlayContentAnimation.done)="onOverlayContentAnimationDone($event)"
            >
                <ng-content></ng-content>
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: { mode: overlayMode } }"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayContentAnimation", [transition(":enter", [useAnimation(showOverlayContentAnimation)]), transition(":leave", [useAnimation(hideOverlayContentAnimation)])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      providers: [OVERLAY_VALUE_ACCESSOR],
      host: {
        class: "p-element"
      },
      styles: [".p-overlay{position:absolute;top:0;left:0}.p-overlay-modal{display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;width:100%;height:100%}.p-overlay-content{transform-origin:inherit}.p-overlay-modal>.p-overlay-content{z-index:1;width:90%}.p-overlay-top{align-items:flex-start}.p-overlay-top-start{align-items:flex-start;justify-content:flex-start}.p-overlay-top-end{align-items:flex-start;justify-content:flex-end}.p-overlay-bottom{align-items:flex-end}.p-overlay-bottom-start{align-items:flex-end;justify-content:flex-start}.p-overlay-bottom-end{align-items:flex-end;justify-content:flex-end}.p-overlay-left{justify-content:flex-start}.p-overlay-left-start{justify-content:flex-start;align-items:flex-start}.p-overlay-left-end{justify-content:flex-start;align-items:flex-end}.p-overlay-right{justify-content:flex-end}.p-overlay-right-start{justify-content:flex-end;align-items:flex-start}.p-overlay-right-end{justify-content:flex-end;align-items:flex-end}\n"]
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
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: PrimeNGConfig
    }, {
      type: OverlayService
    }, {
      type: NgZone
    }];
  }, {
    visible: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    contentStyle: [{
      type: Input
    }],
    contentStyleClass: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    listener: [{
      type: Input
    }],
    responsive: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    visibleChange: [{
      type: Output
    }],
    onBeforeShow: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onBeforeHide: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onAnimationStart: [{
      type: Output
    }],
    onAnimationDone: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }]
  });
})();
var OverlayModule = class {
};
OverlayModule.ɵfac = function OverlayModule_Factory(t) {
  return new (t || OverlayModule)();
};
OverlayModule.ɵmod = ɵɵdefineNgModule({
  type: OverlayModule,
  declarations: [Overlay],
  imports: [CommonModule, SharedModule],
  exports: [Overlay, SharedModule]
});
OverlayModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, SharedModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule],
      exports: [Overlay, SharedModule],
      declarations: [Overlay]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-scroller.mjs
var _c02 = ["element"];
var _c12 = ["content"];
function Scroller_ng_container_0_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c22 = function(a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Scroller_ng_container_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c22, ctx_r4.loadedItems, ctx_r4.getContentOptions()));
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Scroller_ng_container_0_ng_template_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_ng_template_4_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const index_r13 = ctx.index;
    const ctx_r11 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r11.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c22, item_r12, ctx_r11.getOptions(index_r13)));
  }
}
var _c32 = function(a0) {
  return {
    "p-scroller-loading": a0
  };
};
function Scroller_ng_container_0_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8, 9);
    ɵɵtemplate(2, Scroller_ng_container_0_ng_template_4_ng_container_2_Template, 2, 5, "ng-container", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(4, _c32, ctx_r6.d_loading))("ngStyle", ctx_r6.contentStyle);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r6.loadedItems)("ngForTrackBy", ctx_r6._trackBy || ctx_r6.index);
  }
}
function Scroller_ng_container_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r7.spacerStyle);
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c42 = function(a0) {
  return {
    numCols: a0
  };
};
var _c52 = function(a0) {
  return {
    options: a0
  };
};
function Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const index_r20 = ctx.index;
    const ctx_r18 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r18.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c52, ctx_r18.getLoaderOptions(index_r20, ctx_r18.both && ɵɵpureFunction1(2, _c42, ctx_r18._numItemsInViewport.cols))));
  }
}
function Scroller_ng_container_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_container_1_ng_container_1_Template, 2, 6, "ng-container", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r15.loaderArr);
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c62 = function() {
  return {
    styleClass: "p-scroller-loading-icon"
  };
};
function Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r22 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r22.loaderIconTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(3, _c52, ɵɵpureFunction0(2, _c62)));
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SpinnerIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-scroller-loading-icon");
  }
}
function Scroller_ng_container_0_div_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Scroller_ng_container_0_div_7_ng_template_2_ng_container_0_Template, 2, 5, "ng-container", 0);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 15, ɵɵtemplateRefExtractor);
  }
  if (rf & 2) {
    const _r23 = ɵɵreference(2);
    const ctx_r17 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r17.loaderIconTemplate)("ngIfElse", _r23);
  }
}
var _c72 = function(a0) {
  return {
    "p-component-overlay": a0
  };
};
function Scroller_ng_container_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 12);
    ɵɵtemplate(1, Scroller_ng_container_0_div_7_ng_container_1_Template, 2, 1, "ng-container", 0);
    ɵɵtemplate(2, Scroller_ng_container_0_div_7_ng_template_2_Template, 3, 2, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r16 = ɵɵreference(3);
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ɵɵpureFunction1(3, _c72, !ctx_r8.loaderTemplate));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.loaderTemplate)("ngIfElse", _r16);
  }
}
var _c8 = function(a1, a2, a3) {
  return {
    "p-scroller": true,
    "p-scroller-inline": a1,
    "p-both-scroll": a2,
    "p-horizontal-scroll": a3
  };
};
function Scroller_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2, 3);
    ɵɵlistener("scroll", function Scroller_ng_container_0_Template_div_scroll_1_listener($event) {
      ɵɵrestoreView(_r27);
      const ctx_r26 = ɵɵnextContext();
      return ɵɵresetView(ctx_r26.onContainerScroll($event));
    });
    ɵɵtemplate(3, Scroller_ng_container_0_ng_container_3_Template, 2, 5, "ng-container", 0);
    ɵɵtemplate(4, Scroller_ng_container_0_ng_template_4_Template, 3, 6, "ng-template", null, 4, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, Scroller_ng_container_0_div_6_Template, 1, 1, "div", 5);
    ɵɵtemplate(7, Scroller_ng_container_0_div_7_Template, 4, 5, "div", 6);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const _r5 = ɵɵreference(5);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵclassMap(ctx_r0._styleClass);
    ɵɵproperty("ngStyle", ctx_r0._style)("ngClass", ɵɵpureFunction3(10, _c8, ctx_r0.inline, ctx_r0.both, ctx_r0.horizontal));
    ɵɵattribute("id", ctx_r0._id)("tabindex", ctx_r0.tabindex);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.contentTemplate)("ngIfElse", _r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r0._showSpacer);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r0.loaderDisabled && ctx_r0._showLoader && ctx_r0.d_loading);
  }
}
function Scroller_ng_template_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c9 = function(a0, a1) {
  return {
    rows: a0,
    columns: a1
  };
};
function Scroller_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Scroller_ng_template_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r28.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(5, _c22, ctx_r28.items, ɵɵpureFunction2(2, _c9, ctx_r28._items, ctx_r28.loadedColumns)));
  }
}
function Scroller_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0);
    ɵɵtemplate(1, Scroller_ng_template_1_ng_container_1_Template, 2, 8, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r2.contentTemplate);
  }
}
var _c10 = ["*"];
var Scroller = class {
  constructor(document, platformId, renderer, cd, zone) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.onLazyLoad = new EventEmitter();
    this.onScroll = new EventEmitter();
    this.onScrollIndexChange = new EventEmitter();
    this._tabindex = 0;
    this._itemSize = 0;
    this._orientation = "vertical";
    this._step = 0;
    this._delay = 0;
    this._resizeDelay = 10;
    this._appendOnly = false;
    this._inline = false;
    this._lazy = false;
    this._disabled = false;
    this._loaderDisabled = false;
    this._showSpacer = true;
    this._showLoader = false;
    this._autoSize = false;
    this.d_loading = false;
    this.first = 0;
    this.last = 0;
    this.page = 0;
    this.isRangeChanged = false;
    this.numItemsInViewport = 0;
    this.lastScrollPos = 0;
    this.lazyLoadState = {};
    this.loaderArr = [];
    this.spacerStyle = {};
    this.contentStyle = {};
    this.initialized = false;
  }
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
  }
  get style() {
    return this._style;
  }
  set style(val) {
    this._style = val;
  }
  get styleClass() {
    return this._styleClass;
  }
  set styleClass(val) {
    this._styleClass = val;
  }
  get tabindex() {
    return this._tabindex;
  }
  set tabindex(val) {
    this._tabindex = val;
  }
  get items() {
    return this._items;
  }
  set items(val) {
    this._items = val;
  }
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
  }
  get scrollHeight() {
    return this._scrollHeight;
  }
  set scrollHeight(val) {
    this._scrollHeight = val;
  }
  get scrollWidth() {
    return this._scrollWidth;
  }
  set scrollWidth(val) {
    this._scrollWidth = val;
  }
  get orientation() {
    return this._orientation;
  }
  set orientation(val) {
    this._orientation = val;
  }
  get step() {
    return this._step;
  }
  set step(val) {
    this._step = val;
  }
  get delay() {
    return this._delay;
  }
  set delay(val) {
    this._delay = val;
  }
  get resizeDelay() {
    return this._resizeDelay;
  }
  set resizeDelay(val) {
    this._resizeDelay = val;
  }
  get appendOnly() {
    return this._appendOnly;
  }
  set appendOnly(val) {
    this._appendOnly = val;
  }
  get inline() {
    return this._inline;
  }
  set inline(val) {
    this._inline = val;
  }
  get lazy() {
    return this._lazy;
  }
  set lazy(val) {
    this._lazy = val;
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
  }
  get loaderDisabled() {
    return this._loaderDisabled;
  }
  set loaderDisabled(val) {
    this._loaderDisabled = val;
  }
  get columns() {
    return this._columns;
  }
  set columns(val) {
    this._columns = val;
  }
  get showSpacer() {
    return this._showSpacer;
  }
  set showSpacer(val) {
    this._showSpacer = val;
  }
  get showLoader() {
    return this._showLoader;
  }
  set showLoader(val) {
    this._showLoader = val;
  }
  get numToleratedItems() {
    return this._numToleratedItems;
  }
  set numToleratedItems(val) {
    this._numToleratedItems = val;
  }
  get loading() {
    return this._loading;
  }
  set loading(val) {
    this._loading = val;
  }
  get autoSize() {
    return this._autoSize;
  }
  set autoSize(val) {
    this._autoSize = val;
  }
  get trackBy() {
    return this._trackBy;
  }
  set trackBy(val) {
    this._trackBy = val;
  }
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    if (val && typeof val === "object") {
      Object.entries(val).forEach(([k, v]) => this[`_${k}`] !== v && (this[`_${k}`] = v));
    }
  }
  get vertical() {
    return this._orientation === "vertical";
  }
  get horizontal() {
    return this._orientation === "horizontal";
  }
  get both() {
    return this._orientation === "both";
  }
  get loadedItems() {
    if (this._items && !this.d_loading) {
      if (this.both)
        return this._items.slice(this._appendOnly ? 0 : this.first.rows, this.last.rows).map((item) => this._columns ? item : item.slice(this._appendOnly ? 0 : this.first.cols, this.last.cols));
      else if (this.horizontal && this._columns)
        return this._items;
      else
        return this._items.slice(this._appendOnly ? 0 : this.first, this.last);
    }
    return [];
  }
  get loadedRows() {
    return this.d_loading ? this._loaderDisabled ? this.loaderArr : [] : this.loadedItems;
  }
  get loadedColumns() {
    if (this._columns && (this.both || this.horizontal)) {
      return this.d_loading && this._loaderDisabled ? this.both ? this.loaderArr[0] : this.loaderArr : this._columns.slice(this.both ? this.first.cols : this.first, this.both ? this.last.cols : this.last);
    }
    return this._columns;
  }
  get isPageChanged() {
    return this._step ? this.page !== this.getPageByFirst() : true;
  }
  ngOnInit() {
    this.setInitialState();
  }
  ngOnChanges(simpleChanges) {
    let isLoadingChanged = false;
    if (simpleChanges.loading) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.loading;
      if (this.lazy && previousValue !== currentValue && currentValue !== this.d_loading) {
        this.d_loading = currentValue;
        isLoadingChanged = true;
      }
    }
    if (simpleChanges.orientation) {
      this.lastScrollPos = this.both ? {
        top: 0,
        left: 0
      } : 0;
    }
    if (simpleChanges.numToleratedItems) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.numToleratedItems;
      if (previousValue !== currentValue && currentValue !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue;
      }
    }
    if (simpleChanges.options) {
      const {
        previousValue,
        currentValue
      } = simpleChanges.options;
      if (this.lazy && previousValue?.loading !== currentValue?.loading && currentValue?.loading !== this.d_loading) {
        this.d_loading = currentValue.loading;
        isLoadingChanged = true;
      }
      if (previousValue?.numToleratedItems !== currentValue?.numToleratedItems && currentValue?.numToleratedItems !== this.d_numToleratedItems) {
        this.d_numToleratedItems = currentValue.numToleratedItems;
      }
    }
    if (this.initialized) {
      const isChanged = !isLoadingChanged && (simpleChanges.items?.previousValue?.length !== simpleChanges.items?.currentValue?.length || simpleChanges.itemSize || simpleChanges.scrollHeight || simpleChanges.scrollWidth);
      if (isChanged) {
        this.init();
        this.calculateAutoSize();
      }
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "loadericon":
          this.loaderIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this.viewInit();
    });
  }
  ngAfterViewChecked() {
    if (!this.initialized) {
      this.viewInit();
    }
  }
  ngOnDestroy() {
    this.unbindResizeListener();
    this.contentEl = null;
    this.initialized = false;
  }
  viewInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        this.setInitialState();
        this.setContentEl(this.contentEl);
        this.init();
        this.defaultWidth = DomHandler.getWidth(this.elementViewChild.nativeElement);
        this.defaultHeight = DomHandler.getHeight(this.elementViewChild.nativeElement);
        this.defaultContentWidth = DomHandler.getWidth(this.contentEl);
        this.defaultContentHeight = DomHandler.getHeight(this.contentEl);
        this.initialized = true;
      }
    }
  }
  init() {
    if (!this._disabled) {
      this.setSize();
      this.calculateOptions();
      this.setSpacerSize();
      this.bindResizeListener();
      this.cd.detectChanges();
    }
  }
  setContentEl(el) {
    this.contentEl = el || this.contentViewChild?.nativeElement || DomHandler.findSingle(this.elementViewChild?.nativeElement, ".p-scroller-content");
  }
  setInitialState() {
    this.first = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.last = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.numItemsInViewport = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.d_loading = this._loading || false;
    this.d_numToleratedItems = this._numToleratedItems;
    this.loaderArr = [];
    this.spacerStyle = {};
    this.contentStyle = {};
  }
  getElementRef() {
    return this.elementViewChild;
  }
  getPageByFirst() {
    return Math.floor((this.first + this.d_numToleratedItems * 4) / (this._step || 1));
  }
  scrollTo(options) {
    this.lastScrollPos = this.both ? {
      top: 0,
      left: 0
    } : 0;
    this.elementViewChild?.nativeElement?.scrollTo(options);
  }
  scrollToIndex(index, behavior = "auto") {
    const {
      numToleratedItems
    } = this.calculateNumItems();
    const contentPos = this.getContentPosition();
    const calculateFirst = (_index = 0, _numT) => _index <= _numT ? 0 : _index;
    const calculateCoord = (_first, _size, _cpos) => _first * _size + _cpos;
    const scrollTo = (left = 0, top = 0) => this.scrollTo({
      left,
      top,
      behavior
    });
    let newFirst = 0;
    if (this.both) {
      newFirst = {
        rows: calculateFirst(index[0], numToleratedItems[0]),
        cols: calculateFirst(index[1], numToleratedItems[1])
      };
      scrollTo(calculateCoord(newFirst.cols, this._itemSize[1], contentPos.left), calculateCoord(newFirst.rows, this._itemSize[0], contentPos.top));
    } else {
      newFirst = calculateFirst(index, numToleratedItems);
      this.horizontal ? scrollTo(calculateCoord(newFirst, this._itemSize, contentPos.left), 0) : scrollTo(0, calculateCoord(newFirst, this._itemSize, contentPos.top));
    }
    this.isRangeChanged = this.first !== newFirst;
    this.first = newFirst;
  }
  scrollInView(index, to, behavior = "auto") {
    if (to) {
      const {
        first,
        viewport
      } = this.getRenderedRange();
      const scrollTo = (left = 0, top = 0) => this.scrollTo({
        left,
        top,
        behavior
      });
      const isToStart = to === "to-start";
      const isToEnd = to === "to-end";
      if (isToStart) {
        if (this.both) {
          if (viewport.first.rows - first.rows > index[0]) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows - 1) * this._itemSize[0]);
          } else if (viewport.first.cols - first.cols > index[1]) {
            scrollTo((viewport.first.cols - 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.first - first > index) {
            const pos = (viewport.first - 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      } else if (isToEnd) {
        if (this.both) {
          if (viewport.last.rows - first.rows <= index[0] + 1) {
            scrollTo(viewport.first.cols * this._itemSize[1], (viewport.first.rows + 1) * this._itemSize[0]);
          } else if (viewport.last.cols - first.cols <= index[1] + 1) {
            scrollTo((viewport.first.cols + 1) * this._itemSize[1], viewport.first.rows * this._itemSize[0]);
          }
        } else {
          if (viewport.last - first <= index + 1) {
            const pos = (viewport.first + 1) * this._itemSize;
            this.horizontal ? scrollTo(pos, 0) : scrollTo(0, pos);
          }
        }
      }
    } else {
      this.scrollToIndex(index, behavior);
    }
  }
  getRenderedRange() {
    const calculateFirstInViewport = (_pos, _size) => Math.floor(_pos / (_size || _pos));
    let firstInViewport = this.first;
    let lastInViewport = 0;
    if (this.elementViewChild?.nativeElement) {
      const {
        scrollTop,
        scrollLeft
      } = this.elementViewChild.nativeElement;
      if (this.both) {
        firstInViewport = {
          rows: calculateFirstInViewport(scrollTop, this._itemSize[0]),
          cols: calculateFirstInViewport(scrollLeft, this._itemSize[1])
        };
        lastInViewport = {
          rows: firstInViewport.rows + this.numItemsInViewport.rows,
          cols: firstInViewport.cols + this.numItemsInViewport.cols
        };
      } else {
        const scrollPos = this.horizontal ? scrollLeft : scrollTop;
        firstInViewport = calculateFirstInViewport(scrollPos, this._itemSize);
        lastInViewport = firstInViewport + this.numItemsInViewport;
      }
    }
    return {
      first: this.first,
      last: this.last,
      viewport: {
        first: firstInViewport,
        last: lastInViewport
      }
    };
  }
  calculateNumItems() {
    const contentPos = this.getContentPosition();
    const contentWidth = this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetWidth - contentPos.left : 0;
    const contentHeight = this.elementViewChild?.nativeElement ? this.elementViewChild.nativeElement.offsetHeight - contentPos.top : 0;
    const calculateNumItemsInViewport = (_contentSize, _itemSize) => Math.ceil(_contentSize / (_itemSize || _contentSize));
    const calculateNumToleratedItems = (_numItems) => Math.ceil(_numItems / 2);
    const numItemsInViewport = this.both ? {
      rows: calculateNumItemsInViewport(contentHeight, this._itemSize[0]),
      cols: calculateNumItemsInViewport(contentWidth, this._itemSize[1])
    } : calculateNumItemsInViewport(this.horizontal ? contentWidth : contentHeight, this._itemSize);
    const numToleratedItems = this.d_numToleratedItems || (this.both ? [calculateNumToleratedItems(numItemsInViewport.rows), calculateNumToleratedItems(numItemsInViewport.cols)] : calculateNumToleratedItems(numItemsInViewport));
    return {
      numItemsInViewport,
      numToleratedItems
    };
  }
  calculateOptions() {
    const {
      numItemsInViewport,
      numToleratedItems
    } = this.calculateNumItems();
    const calculateLast = (_first, _num, _numT, _isCols = false) => this.getLast(_first + _num + (_first < _numT ? 2 : 3) * _numT, _isCols);
    const first = this.first;
    const last = this.both ? {
      rows: calculateLast(this.first.rows, numItemsInViewport.rows, numToleratedItems[0]),
      cols: calculateLast(this.first.cols, numItemsInViewport.cols, numToleratedItems[1], true)
    } : calculateLast(this.first, numItemsInViewport, numToleratedItems);
    this.last = last;
    this.numItemsInViewport = numItemsInViewport;
    this.d_numToleratedItems = numToleratedItems;
    if (this.showLoader) {
      this.loaderArr = this.both ? Array.from({
        length: numItemsInViewport.rows
      }).map(() => Array.from({
        length: numItemsInViewport.cols
      })) : Array.from({
        length: numItemsInViewport
      });
    }
    if (this._lazy) {
      Promise.resolve().then(() => {
        this.lazyLoadState = {
          first: this._step ? this.both ? {
            rows: 0,
            cols: first.cols
          } : 0 : first,
          last: Math.min(this._step ? this._step : this.last, this.items.length)
        };
        this.handleEvents("onLazyLoad", this.lazyLoadState);
      });
    }
  }
  calculateAutoSize() {
    if (this._autoSize && !this.d_loading) {
      Promise.resolve().then(() => {
        if (this.contentEl) {
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "auto";
          this.contentEl.style.position = "relative";
          this.elementViewChild.nativeElement.style.contain = "none";
          const [contentWidth, contentHeight] = [DomHandler.getWidth(this.contentEl), DomHandler.getHeight(this.contentEl)];
          contentWidth !== this.defaultContentWidth && (this.elementViewChild.nativeElement.style.width = "");
          contentHeight !== this.defaultContentHeight && (this.elementViewChild.nativeElement.style.height = "");
          const [width, height] = [DomHandler.getWidth(this.elementViewChild.nativeElement), DomHandler.getHeight(this.elementViewChild.nativeElement)];
          (this.both || this.horizontal) && (this.elementViewChild.nativeElement.style.width = width < this.defaultWidth ? width + "px" : this._scrollWidth || this.defaultWidth + "px");
          (this.both || this.vertical) && (this.elementViewChild.nativeElement.style.height = height < this.defaultHeight ? height + "px" : this._scrollHeight || this.defaultHeight + "px");
          this.contentEl.style.minHeight = this.contentEl.style.minWidth = "";
          this.contentEl.style.position = "";
          this.elementViewChild.nativeElement.style.contain = "";
        }
      });
    }
  }
  getLast(last = 0, isCols = false) {
    return this._items ? Math.min(isCols ? (this._columns || this._items[0]).length : this._items.length, last) : 0;
  }
  getContentPosition() {
    if (this.contentEl) {
      const style2 = getComputedStyle(this.contentEl);
      const left = parseFloat(style2.paddingLeft) + Math.max(parseFloat(style2.left) || 0, 0);
      const right = parseFloat(style2.paddingRight) + Math.max(parseFloat(style2.right) || 0, 0);
      const top = parseFloat(style2.paddingTop) + Math.max(parseFloat(style2.top) || 0, 0);
      const bottom = parseFloat(style2.paddingBottom) + Math.max(parseFloat(style2.bottom) || 0, 0);
      return {
        left,
        right,
        top,
        bottom,
        x: left + right,
        y: top + bottom
      };
    }
    return {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
  }
  setSize() {
    if (this.elementViewChild?.nativeElement) {
      const parentElement = this.elementViewChild.nativeElement.parentElement.parentElement;
      const width = this._scrollWidth || `${this.elementViewChild.nativeElement.offsetWidth || parentElement.offsetWidth}px`;
      const height = this._scrollHeight || `${this.elementViewChild.nativeElement.offsetHeight || parentElement.offsetHeight}px`;
      const setProp = (_name, _value) => this.elementViewChild.nativeElement.style[_name] = _value;
      if (this.both || this.horizontal) {
        setProp("height", height);
        setProp("width", width);
      } else {
        setProp("height", height);
      }
    }
  }
  setSpacerSize() {
    if (this._items) {
      const contentPos = this.getContentPosition();
      const setProp = (_name, _value, _size, _cpos = 0) => this.spacerStyle = __spreadValues(__spreadValues({}, this.spacerStyle), {
        [`${_name}`]: (_value || []).length * _size + _cpos + "px"
      });
      if (this.both) {
        setProp("height", this._items, this._itemSize[0], contentPos.y);
        setProp("width", this._columns || this._items[1], this._itemSize[1], contentPos.x);
      } else {
        this.horizontal ? setProp("width", this._columns || this._items, this._itemSize, contentPos.x) : setProp("height", this._items, this._itemSize, contentPos.y);
      }
    }
  }
  setContentPosition(pos) {
    if (this.contentEl && !this._appendOnly) {
      const first = pos ? pos.first : this.first;
      const calculateTranslateVal = (_first, _size) => _first * _size;
      const setTransform = (_x = 0, _y = 0) => this.contentStyle = __spreadValues(__spreadValues({}, this.contentStyle), {
        transform: `translate3d(${_x}px, ${_y}px, 0)`
      });
      if (this.both) {
        setTransform(calculateTranslateVal(first.cols, this._itemSize[1]), calculateTranslateVal(first.rows, this._itemSize[0]));
      } else {
        const translateVal = calculateTranslateVal(first, this._itemSize);
        this.horizontal ? setTransform(translateVal, 0) : setTransform(0, translateVal);
      }
    }
  }
  onScrollPositionChange(event) {
    const target = event.target;
    const contentPos = this.getContentPosition();
    const calculateScrollPos = (_pos, _cpos) => _pos ? _pos > _cpos ? _pos - _cpos : _pos : 0;
    const calculateCurrentIndex = (_pos, _size) => Math.floor(_pos / (_size || _pos));
    const calculateTriggerIndex = (_currentIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      return _currentIndex <= _numT ? _numT : _isScrollDownOrRight ? _last - _num - _numT : _first + _numT - 1;
    };
    const calculateFirst = (_currentIndex, _triggerIndex, _first, _last, _num, _numT, _isScrollDownOrRight) => {
      if (_currentIndex <= _numT)
        return 0;
      else
        return Math.max(0, _isScrollDownOrRight ? _currentIndex < _triggerIndex ? _first : _currentIndex - _numT : _currentIndex > _triggerIndex ? _first : _currentIndex - 2 * _numT);
    };
    const calculateLast = (_currentIndex, _first, _last, _num, _numT, _isCols = false) => {
      let lastValue = _first + _num + 2 * _numT;
      if (_currentIndex >= _numT) {
        lastValue += _numT + 1;
      }
      return this.getLast(lastValue, _isCols);
    };
    const scrollTop = calculateScrollPos(target.scrollTop, contentPos.top);
    const scrollLeft = calculateScrollPos(target.scrollLeft, contentPos.left);
    let newFirst = this.both ? {
      rows: 0,
      cols: 0
    } : 0;
    let newLast = this.last;
    let isRangeChanged = false;
    let newScrollPos = this.lastScrollPos;
    if (this.both) {
      const isScrollDown = this.lastScrollPos.top <= scrollTop;
      const isScrollRight = this.lastScrollPos.left <= scrollLeft;
      if (!this._appendOnly || this._appendOnly && (isScrollDown || isScrollRight)) {
        const currentIndex = {
          rows: calculateCurrentIndex(scrollTop, this._itemSize[0]),
          cols: calculateCurrentIndex(scrollLeft, this._itemSize[1])
        };
        const triggerIndex = {
          rows: calculateTriggerIndex(currentIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateTriggerIndex(currentIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newFirst = {
          rows: calculateFirst(currentIndex.rows, triggerIndex.rows, this.first.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0], isScrollDown),
          cols: calculateFirst(currentIndex.cols, triggerIndex.cols, this.first.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], isScrollRight)
        };
        newLast = {
          rows: calculateLast(currentIndex.rows, newFirst.rows, this.last.rows, this.numItemsInViewport.rows, this.d_numToleratedItems[0]),
          cols: calculateLast(currentIndex.cols, newFirst.cols, this.last.cols, this.numItemsInViewport.cols, this.d_numToleratedItems[1], true)
        };
        isRangeChanged = newFirst.rows !== this.first.rows || newLast.rows !== this.last.rows || newFirst.cols !== this.first.cols || newLast.cols !== this.last.cols || this.isRangeChanged;
        newScrollPos = {
          top: scrollTop,
          left: scrollLeft
        };
      }
    } else {
      const scrollPos = this.horizontal ? scrollLeft : scrollTop;
      const isScrollDownOrRight = this.lastScrollPos <= scrollPos;
      if (!this._appendOnly || this._appendOnly && isScrollDownOrRight) {
        const currentIndex = calculateCurrentIndex(scrollPos, this._itemSize);
        const triggerIndex = calculateTriggerIndex(currentIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newFirst = calculateFirst(currentIndex, triggerIndex, this.first, this.last, this.numItemsInViewport, this.d_numToleratedItems, isScrollDownOrRight);
        newLast = calculateLast(currentIndex, newFirst, this.last, this.numItemsInViewport, this.d_numToleratedItems);
        isRangeChanged = newFirst !== this.first || newLast !== this.last || this.isRangeChanged;
        newScrollPos = scrollPos;
      }
    }
    return {
      first: newFirst,
      last: newLast,
      isRangeChanged,
      scrollPos: newScrollPos
    };
  }
  onScrollChange(event) {
    const {
      first,
      last,
      isRangeChanged,
      scrollPos
    } = this.onScrollPositionChange(event);
    if (isRangeChanged) {
      const newState = {
        first,
        last
      };
      this.setContentPosition(newState);
      this.first = first;
      this.last = last;
      this.lastScrollPos = scrollPos;
      this.handleEvents("onScrollIndexChange", newState);
      if (this._lazy && this.isPageChanged) {
        const lazyLoadState = {
          first: this._step ? Math.min(this.getPageByFirst() * this._step, this.items.length - this._step) : first,
          last: Math.min(this._step ? (this.getPageByFirst() + 1) * this._step : last, this.items.length)
        };
        const isLazyStateChanged = this.lazyLoadState.first !== lazyLoadState.first || this.lazyLoadState.last !== lazyLoadState.last;
        isLazyStateChanged && this.handleEvents("onLazyLoad", lazyLoadState);
        this.lazyLoadState = lazyLoadState;
      }
    }
  }
  onContainerScroll(event) {
    this.handleEvents("onScroll", {
      originalEvent: event
    });
    if (this._delay && this.isPageChanged) {
      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
      }
      if (!this.d_loading && this.showLoader) {
        const {
          isRangeChanged
        } = this.onScrollPositionChange(event);
        const changed = isRangeChanged || (this._step ? this.isPageChanged : false);
        if (changed) {
          this.d_loading = true;
          this.cd.detectChanges();
        }
      }
      this.scrollTimeout = setTimeout(() => {
        this.onScrollChange(event);
        if (this.d_loading && this.showLoader && (!this._lazy || this._loading === void 0)) {
          this.d_loading = false;
          this.page = this.getPageByFirst();
          this.cd.detectChanges();
        }
      }, this._delay);
    } else {
      !this.d_loading && this.onScrollChange(event);
    }
  }
  bindResizeListener() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.windowResizeListener) {
        this.zone.runOutsideAngular(() => {
          const window = this.document.defaultView;
          const event = DomHandler.isTouchDevice() ? "orientationchange" : "resize";
          this.windowResizeListener = this.renderer.listen(window, event, this.onWindowResize.bind(this));
        });
      }
    }
  }
  unbindResizeListener() {
    if (this.windowResizeListener) {
      this.windowResizeListener();
      this.windowResizeListener = null;
    }
  }
  onWindowResize() {
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
    this.resizeTimeout = setTimeout(() => {
      if (DomHandler.isVisible(this.elementViewChild?.nativeElement)) {
        const [width, height] = [DomHandler.getWidth(this.elementViewChild.nativeElement), DomHandler.getHeight(this.elementViewChild.nativeElement)];
        const [isDiffWidth, isDiffHeight] = [width !== this.defaultWidth, height !== this.defaultHeight];
        const reinit = this.both ? isDiffWidth || isDiffHeight : this.horizontal ? isDiffWidth : this.vertical ? isDiffHeight : false;
        reinit && this.zone.run(() => {
          this.d_numToleratedItems = this._numToleratedItems;
          this.defaultWidth = width;
          this.defaultHeight = height;
          this.defaultContentWidth = DomHandler.getWidth(this.contentEl);
          this.defaultContentHeight = DomHandler.getHeight(this.contentEl);
          this.init();
        });
      }
    }, this._resizeDelay);
  }
  handleEvents(name, params) {
    return this.options && this.options[name] ? this.options[name](params) : this[name].emit(params);
  }
  getContentOptions() {
    return {
      contentStyleClass: `p-scroller-content ${this.d_loading ? "p-scroller-loading" : ""}`,
      items: this.loadedItems,
      getItemOptions: (index) => this.getOptions(index),
      loading: this.d_loading,
      getLoaderOptions: (index, options) => this.getLoaderOptions(index, options),
      itemSize: this._itemSize,
      rows: this.loadedRows,
      columns: this.loadedColumns,
      spacerStyle: this.spacerStyle,
      contentStyle: this.contentStyle,
      vertical: this.vertical,
      horizontal: this.horizontal,
      both: this.both
    };
  }
  getOptions(renderedIndex) {
    const count = (this._items || []).length;
    const index = this.both ? this.first.rows + renderedIndex : this.first + renderedIndex;
    return {
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    };
  }
  getLoaderOptions(index, extOptions) {
    const count = this.loaderArr.length;
    return __spreadValues({
      index,
      count,
      first: index === 0,
      last: index === count - 1,
      even: index % 2 === 0,
      odd: index % 2 !== 0
    }, extOptions);
  }
};
Scroller.ɵfac = function Scroller_Factory(t) {
  return new (t || Scroller)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone));
};
Scroller.ɵcmp = ɵɵdefineComponent({
  type: Scroller,
  selectors: [["p-scroller"]],
  contentQueries: function Scroller_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Scroller_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 5);
      ɵɵviewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.elementViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-scroller-viewport", "p-element"],
  inputs: {
    id: "id",
    style: "style",
    styleClass: "styleClass",
    tabindex: "tabindex",
    items: "items",
    itemSize: "itemSize",
    scrollHeight: "scrollHeight",
    scrollWidth: "scrollWidth",
    orientation: "orientation",
    step: "step",
    delay: "delay",
    resizeDelay: "resizeDelay",
    appendOnly: "appendOnly",
    inline: "inline",
    lazy: "lazy",
    disabled: "disabled",
    loaderDisabled: "loaderDisabled",
    columns: "columns",
    showSpacer: "showSpacer",
    showLoader: "showLoader",
    numToleratedItems: "numToleratedItems",
    loading: "loading",
    autoSize: "autoSize",
    trackBy: "trackBy",
    options: "options"
  },
  outputs: {
    onLazyLoad: "onLazyLoad",
    onScroll: "onScroll",
    onScrollIndexChange: "onScrollIndexChange"
  },
  features: [ɵɵNgOnChangesFeature],
  ngContentSelectors: _c10,
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["disabledContainer", ""], [3, "ngStyle", "ngClass", "scroll"], ["element", ""], ["buildInContent", ""], ["class", "p-scroller-spacer", 3, "ngStyle", 4, "ngIf"], ["class", "p-scroller-loader", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-scroller-content", 3, "ngClass", "ngStyle"], ["content", ""], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "p-scroller-spacer", 3, "ngStyle"], [1, "p-scroller-loader", 3, "ngClass"], ["buildInLoader", ""], [4, "ngFor", "ngForOf"], ["buildInLoaderIcon", ""], [3, "styleClass"], [4, "ngIf"]],
  template: function Scroller_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, Scroller_ng_container_0_Template, 8, 14, "ng-container", 0);
      ɵɵtemplate(1, Scroller_ng_template_1_Template, 2, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r1 = ɵɵreference(2);
      ɵɵproperty("ngIf", !ctx._disabled)("ngIfElse", _r1);
    }
  },
  dependencies: function() {
    return [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, SpinnerIcon];
  },
  styles: ["p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}\n"],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Scroller, [{
    type: Component,
    args: [{
      selector: "p-scroller",
      template: `
        <ng-container *ngIf="!_disabled; else disabledContainer">
            <div
                #element
                [attr.id]="_id"
                [attr.tabindex]="tabindex"
                [ngStyle]="_style"
                [class]="_styleClass"
                [ngClass]="{ 'p-scroller': true, 'p-scroller-inline': inline, 'p-both-scroll': both, 'p-horizontal-scroll': horizontal }"
                (scroll)="onContainerScroll($event)"
            >
                <ng-container *ngIf="contentTemplate; else buildInContent">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: loadedItems, options: getContentOptions() }"></ng-container>
                </ng-container>
                <ng-template #buildInContent>
                    <div #content class="p-scroller-content" [ngClass]="{ 'p-scroller-loading': d_loading }" [ngStyle]="contentStyle">
                        <ng-container *ngFor="let item of loadedItems; let index = index; trackBy: _trackBy || index">
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, options: getOptions(index) }"></ng-container>
                        </ng-container>
                    </div>
                </ng-template>
                <div *ngIf="_showSpacer" class="p-scroller-spacer" [ngStyle]="spacerStyle"></div>
                <div *ngIf="!loaderDisabled && _showLoader && d_loading" class="p-scroller-loader" [ngClass]="{ 'p-component-overlay': !loaderTemplate }">
                    <ng-container *ngIf="loaderTemplate; else buildInLoader">
                        <ng-container *ngFor="let item of loaderArr; let index = index">
                            <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: getLoaderOptions(index, both && { numCols: _numItemsInViewport.cols }) }"></ng-container>
                        </ng-container>
                    </ng-container>
                    <ng-template #buildInLoader>
                        <ng-container *ngIf="loaderIconTemplate; else buildInLoaderIcon">
                            <ng-container *ngTemplateOutlet="loaderIconTemplate; context: { options: { styleClass: 'p-scroller-loading-icon' } }"></ng-container>
                        </ng-container>
                        <ng-template #buildInLoaderIcon>
                            <SpinnerIcon [styleClass]="'p-scroller-loading-icon'"/>
                        </ng-template>
                    </ng-template>
                </div>
            </div>
        </ng-container>
        <ng-template #disabledContainer>
            <ng-content></ng-content>
            <ng-container *ngIf="contentTemplate">
                <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: items, options: { rows: _items, columns: loadedColumns } }"></ng-container>
            </ng-container>
        </ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-scroller-viewport p-element"
      },
      styles: ["p-scroller{flex:1;outline:0 none}.p-scroller{position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;outline:0 none}.p-scroller-content{position:absolute;top:0;left:0;min-height:100%;min-width:100%;will-change:transform}.p-scroller-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0;pointer-events:none}.p-scroller-loader{position:sticky;top:0;left:0;width:100%;height:100%}.p-scroller-loader.p-component-overlay{display:flex;align-items:center;justify-content:center}.p-scroller-loading-icon{scale:2}.p-scroller-inline .p-scroller-content{position:static}\n"]
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
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }];
  }, {
    id: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    scrollHeight: [{
      type: Input
    }],
    scrollWidth: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    resizeDelay: [{
      type: Input
    }],
    appendOnly: [{
      type: Input
    }],
    inline: [{
      type: Input
    }],
    lazy: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    loaderDisabled: [{
      type: Input
    }],
    columns: [{
      type: Input
    }],
    showSpacer: [{
      type: Input
    }],
    showLoader: [{
      type: Input
    }],
    numToleratedItems: [{
      type: Input
    }],
    loading: [{
      type: Input
    }],
    autoSize: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    elementViewChild: [{
      type: ViewChild,
      args: ["element"]
    }],
    contentViewChild: [{
      type: ViewChild,
      args: ["content"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onLazyLoad: [{
      type: Output
    }],
    onScroll: [{
      type: Output
    }],
    onScrollIndexChange: [{
      type: Output
    }]
  });
})();
var ScrollerModule = class {
};
ScrollerModule.ɵfac = function ScrollerModule_Factory(t) {
  return new (t || ScrollerModule)();
};
ScrollerModule.ɵmod = ɵɵdefineNgModule({
  type: ScrollerModule,
  declarations: [Scroller],
  imports: [CommonModule, SharedModule, SpinnerIcon],
  exports: [Scroller, SharedModule]
});
ScrollerModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, SharedModule, SpinnerIcon, SharedModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, SpinnerIcon],
      exports: [Scroller, SharedModule],
      declarations: [Scroller]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-icons-search.mjs
var SearchIcon = class extends BaseIcon {
};
SearchIcon.ɵfac = function() {
  let ɵSearchIcon_BaseFactory;
  return function SearchIcon_Factory(t) {
    return (ɵSearchIcon_BaseFactory || (ɵSearchIcon_BaseFactory = ɵɵgetInheritedFactory(SearchIcon)))(t || SearchIcon);
  };
}();
SearchIcon.ɵcmp = ɵɵdefineComponent({
  type: SearchIcon,
  selectors: [["SearchIcon"]],
  standalone: true,
  features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
  decls: 6,
  vars: 5,
  consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["clip-path", "url(#clip0_238_9909)"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z", "fill", "currentColor"], ["id", "clip0_238_9909"], ["width", "14", "height", "14", "fill", "white"]],
  template: function SearchIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchIcon, [{
    type: Component,
    args: [{
      selector: "SearchIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <g clip-path="url(#clip0_238_9909)">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z"
                    fill="currentColor"
                />
            </g>
            <defs>
                <clipPath id="clip0_238_9909">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2020/primeng-dropdown.mjs
function DropdownItem_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    let tmp_0_0;
    ɵɵadvance(1);
    ɵɵtextInterpolate((tmp_0_0 = ctx_r0.label) !== null && tmp_0_0 !== void 0 ? tmp_0_0 : "empty");
  }
}
function DropdownItem_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c03 = function(a0) {
  return {
    height: a0
  };
};
var _c13 = function(a1, a2) {
  return {
    "p-dropdown-item": true,
    "p-highlight": a1,
    "p-disabled": a2
  };
};
var _c23 = function(a0) {
  return {
    $implicit: a0
  };
};
var _c33 = ["container"];
var _c43 = ["filter"];
var _c53 = ["in"];
var _c63 = ["editableInput"];
var _c73 = ["items"];
var _c82 = ["scroller"];
var _c92 = ["overlay"];
function Dropdown_span_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r10.label || "empty");
  }
}
function Dropdown_span_5_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c102 = function(a1) {
  return {
    "p-dropdown-label p-inputtext": true,
    "p-dropdown-label-empty": a1
  };
};
function Dropdown_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, Dropdown_span_5_ng_container_1_Template, 2, 1, "ng-container", 8);
    ɵɵtemplate(2, Dropdown_span_5_ng_container_2_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c102, ctx_r2.label == null || ctx_r2.label.length === 0))("pTooltip", ctx_r2.tooltip)("tooltipPosition", ctx_r2.tooltipPosition)("positionStyle", ctx_r2.tooltipPositionStyle)("tooltipStyleClass", ctx_r2.tooltipStyleClass);
    ɵɵattribute("id", ctx_r2.labelId);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.selectedItemTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.selectedItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(11, _c23, ctx_r2.selectedOption));
  }
}
var _c11 = function(a1) {
  return {
    "p-dropdown-label p-inputtext p-placeholder": true,
    "p-dropdown-label-empty": a1
  };
};
function Dropdown_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 16);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(2, _c11, ctx_r3.placeholder == null || ctx_r3.placeholder.length === 0));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r3.placeholder || "empty");
  }
}
function Dropdown_input_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 17, 18);
    ɵɵlistener("input", function Dropdown_input_7_Template_input_input_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.onEditableInputChange($event));
    })("focus", function Dropdown_input_7_Template_input_focus_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.onEditableInputFocus($event));
    })("blur", function Dropdown_input_7_Template_input_blur_0_listener($event) {
      ɵɵrestoreView(_r14);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.onInputBlur($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("disabled", ctx_r4.disabled);
    ɵɵattribute("maxlength", ctx_r4.maxlength)("placeholder", ctx_r4.placeholder)("aria-expanded", ctx_r4.overlayVisible);
  }
}
function Dropdown_ng_container_8_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 21);
    ɵɵlistener("click", function Dropdown_ng_container_8_TimesIcon_1_Template_TimesIcon_click_0_listener($event) {
      ɵɵrestoreView(_r20);
      const ctx_r19 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r19.clear($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-clear-icon");
  }
}
function Dropdown_ng_container_8_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_container_8_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_container_8_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_container_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 22);
    ɵɵlistener("click", function Dropdown_ng_container_8_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r24);
      const ctx_r23 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r23.clear($event));
    });
    ɵɵtemplate(1, Dropdown_ng_container_8_span_2_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r18.clearIconTemplate);
  }
}
function Dropdown_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_container_8_TimesIcon_1_Template, 1, 1, "TimesIcon", 19);
    ɵɵtemplate(2, Dropdown_ng_container_8_span_2_Template, 2, 1, "span", 20);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r5.clearIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r5.clearIconTemplate);
  }
}
function Dropdown_ng_container_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 26);
  }
  if (rf & 2) {
    const ctx_r25 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", ctx_r25.dropdownIcon);
  }
}
function Dropdown_ng_container_10_ChevronDownIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-trigger-icon");
  }
}
function Dropdown_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_container_10_span_1_Template, 1, 1, "span", 24);
    ɵɵtemplate(2, Dropdown_ng_container_10_ChevronDownIcon_2_Template, 1, 1, "ChevronDownIcon", 25);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r6.dropdownIcon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r6.dropdownIcon);
  }
}
function Dropdown_span_11_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_span_11_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_span_11_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_span_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 28);
    ɵɵtemplate(1, Dropdown_span_11_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.dropdownIconTemplate);
  }
}
function Dropdown_ng_template_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_14_div_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c122 = function(a0) {
  return {
    options: a0
  };
};
function Dropdown_ng_template_14_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_14_div_2_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r36 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r36.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, ctx_r36.filterOptions));
  }
}
function Dropdown_ng_template_14_div_2_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 27);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-dropdown-filter-icon");
  }
}
function Dropdown_ng_template_14_div_2_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function Dropdown_ng_template_14_div_2_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_14_div_2_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Dropdown_ng_template_14_div_2_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 41);
    ɵɵtemplate(1, Dropdown_ng_template_14_div_2_ng_template_2_span_4_1_Template, 1, 0, null, 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r42 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r42.filterIconTemplate);
  }
}
function Dropdown_ng_template_14_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 37)(1, "input", 38, 39);
    ɵɵlistener("keydown.enter", function Dropdown_ng_template_14_div_2_ng_template_2_Template_input_keydown_enter_1_listener($event) {
      return $event.preventDefault();
    })("keydown", function Dropdown_ng_template_14_div_2_ng_template_2_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r47);
      const ctx_r46 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r46.onKeydown($event, false));
    })("input", function Dropdown_ng_template_14_div_2_ng_template_2_Template_input_input_1_listener($event) {
      ɵɵrestoreView(_r47);
      const ctx_r48 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r48.onFilterInputChange($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, Dropdown_ng_template_14_div_2_ng_template_2_SearchIcon_3_Template, 1, 1, "SearchIcon", 25);
    ɵɵtemplate(4, Dropdown_ng_template_14_div_2_ng_template_2_span_4_Template, 2, 1, "span", 40);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r38 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r38.filterValue || "");
    ɵɵattribute("placeholder", ctx_r38.filterPlaceholder)("aria-label", ctx_r38.ariaFilterLabel)("aria-activedescendant", ctx_r38.overlayVisible ? "p-highlighted-option" : ctx_r38.labelId);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r38.filterIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r38.filterIconTemplate);
  }
}
function Dropdown_ng_template_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 34);
    ɵɵlistener("click", function Dropdown_ng_template_14_div_2_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    ɵɵtemplate(1, Dropdown_ng_template_14_div_2_ng_container_1_Template, 2, 4, "ng-container", 35);
    ɵɵtemplate(2, Dropdown_ng_template_14_div_2_ng_template_2_Template, 5, 6, "ng-template", null, 36, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r37 = ɵɵreference(3);
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r30.filterTemplate)("ngIfElse", _r37);
  }
}
function Dropdown_ng_template_14_p_scroller_4_ng_template_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c132 = function(a0, a1) {
  return {
    $implicit: a0,
    options: a1
  };
};
function Dropdown_ng_template_14_p_scroller_4_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_14_p_scroller_4_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const items_r53 = ctx.$implicit;
    const scrollerOptions_r54 = ctx.options;
    ɵɵnextContext(2);
    const _r33 = ɵɵreference(7);
    ɵɵproperty("ngTemplateOutlet", _r33)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c132, items_r53, scrollerOptions_r54));
  }
}
function Dropdown_ng_template_14_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_14_p_scroller_4_ng_container_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_14_p_scroller_4_ng_container_3_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const scrollerOptions_r57 = ctx.options;
    const ctx_r56 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r56.loaderTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c122, scrollerOptions_r57));
  }
}
function Dropdown_ng_template_14_p_scroller_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_14_p_scroller_4_ng_container_3_ng_template_1_Template, 1, 4, "ng-template", 44);
    ɵɵelementContainerEnd();
  }
}
function Dropdown_ng_template_14_p_scroller_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-scroller", 42, 43);
    ɵɵlistener("onLazyLoad", function Dropdown_ng_template_14_p_scroller_4_Template_p_scroller_onLazyLoad_0_listener($event) {
      ɵɵrestoreView(_r60);
      const ctx_r59 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r59.onLazyLoad.emit($event));
    });
    ɵɵtemplate(2, Dropdown_ng_template_14_p_scroller_4_ng_template_2_Template, 1, 5, "ng-template", 13);
    ɵɵtemplate(3, Dropdown_ng_template_14_p_scroller_4_ng_container_3_Template, 2, 0, "ng-container", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵstyleMap(ɵɵpureFunction1(8, _c03, ctx_r31.scrollHeight));
    ɵɵproperty("items", ctx_r31.optionsToDisplay)("itemSize", ctx_r31.virtualScrollItemSize || ctx_r31._itemSize)("autoSize", true)("lazy", ctx_r31.lazy)("options", ctx_r31.virtualScrollOptions);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r31.loaderTemplate);
  }
}
function Dropdown_ng_template_14_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c14 = function() {
  return {};
};
function Dropdown_ng_template_14_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_14_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r33 = ɵɵreference(7);
    const ctx_r32 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r33)("ngTemplateOutletContext", ɵɵpureFunction2(3, _c132, ctx_r32.optionsToDisplay, ɵɵpureFunction0(2, _c14)));
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const optgroup_r72 = ɵɵnextContext().$implicit;
    const ctx_r73 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate(ctx_r73.getOptionGroupLabel(optgroup_r72) || "empty");
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c15 = function(a0, a1) {
  return {
    $implicit: a0,
    selectedOption: a1
  };
};
function Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 50);
    ɵɵtemplate(1, Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_span_1_Template, 2, 1, "span", 8);
    ɵɵtemplate(2, Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_ng_container_2_Template, 1, 0, "ng-container", 15);
    ɵɵelementEnd();
    ɵɵtemplate(3, Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_ng_container_3_Template, 1, 0, "ng-container", 15);
  }
  if (rf & 2) {
    const optgroup_r72 = ctx.$implicit;
    const scrollerOptions_r63 = ɵɵnextContext(2).options;
    const _r67 = ɵɵreference(5);
    const ctx_r71 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(6, _c03, scrollerOptions_r63.itemSize + "px"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r71.groupTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r71.groupTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(8, _c23, optgroup_r72));
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r67)("ngTemplateOutletContext", ɵɵpureFunction2(10, _c15, ctx_r71.getOptionGroupChildren(optgroup_r72), ctx_r71.selectedOption));
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_14_ng_template_6_ng_container_2_ng_template_1_Template, 4, 13, "ng-template", 49);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const items_r62 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", items_r62);
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Dropdown_ng_template_14_ng_template_6_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const items_r62 = ɵɵnextContext().$implicit;
    const _r67 = ɵɵreference(5);
    const ctx_r66 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", _r67)("ngTemplateOutletContext", ɵɵpureFunction2(2, _c15, items_r62, ctx_r66.selectedOption));
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_template_4_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r87 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-dropdownItem", 51);
    ɵɵlistener("onClick", function Dropdown_ng_template_14_ng_template_6_ng_template_4_ng_template_0_Template_p_dropdownItem_onClick_0_listener($event) {
      ɵɵrestoreView(_r87);
      const ctx_r86 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r86.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r84 = ctx.$implicit;
    const selectedOption_r82 = ɵɵnextContext().selectedOption;
    const ctx_r83 = ɵɵnextContext(3);
    ɵɵproperty("option", option_r84)("selected", selectedOption_r82 == option_r84)("label", ctx_r83.getOptionLabel(option_r84))("disabled", ctx_r83.isOptionDisabled(option_r84))("template", ctx_r83.itemTemplate);
  }
}
function Dropdown_ng_template_14_ng_template_6_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Dropdown_ng_template_14_ng_template_6_ng_template_4_ng_template_0_Template, 1, 5, "ng-template", 49);
  }
  if (rf & 2) {
    const options_r81 = ctx.$implicit;
    ɵɵproperty("ngForOf", options_r81);
  }
}
function Dropdown_ng_template_14_ng_template_6_li_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r89 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r89.emptyFilterMessageLabel, " ");
  }
}
function Dropdown_ng_template_14_ng_template_6_li_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 53);
  }
}
function Dropdown_ng_template_14_ng_template_6_li_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 52);
    ɵɵtemplate(1, Dropdown_ng_template_14_ng_template_6_li_6_ng_container_1_Template, 2, 1, "ng-container", 35);
    ɵɵtemplate(2, Dropdown_ng_template_14_ng_template_6_li_6_ng_container_2_Template, 2, 0, "ng-container", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r63 = ɵɵnextContext().options;
    const ctx_r69 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c03, scrollerOptions_r63.itemSize + "px"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r69.emptyFilterTemplate && !ctx_r69.emptyTemplate)("ngIfElse", ctx_r69.emptyFilter);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r69.emptyFilterTemplate || ctx_r69.emptyTemplate);
  }
}
function Dropdown_ng_template_14_ng_template_6_li_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r93 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r93.emptyMessageLabel, " ");
  }
}
function Dropdown_ng_template_14_ng_template_6_li_7_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, null, 54);
  }
}
function Dropdown_ng_template_14_ng_template_6_li_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 52);
    ɵɵtemplate(1, Dropdown_ng_template_14_ng_template_6_li_7_ng_container_1_Template, 2, 1, "ng-container", 35);
    ɵɵtemplate(2, Dropdown_ng_template_14_ng_template_6_li_7_ng_container_2_Template, 2, 0, "ng-container", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r63 = ɵɵnextContext().options;
    const ctx_r70 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c03, scrollerOptions_r63.itemSize + "px"));
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r70.emptyTemplate)("ngIfElse", ctx_r70.empty);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r70.emptyTemplate);
  }
}
function Dropdown_ng_template_14_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 45, 46);
    ɵɵtemplate(2, Dropdown_ng_template_14_ng_template_6_ng_container_2_Template, 2, 1, "ng-container", 8);
    ɵɵtemplate(3, Dropdown_ng_template_14_ng_template_6_ng_container_3_Template, 2, 5, "ng-container", 8);
    ɵɵtemplate(4, Dropdown_ng_template_14_ng_template_6_ng_template_4_Template, 1, 1, "ng-template", null, 47, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, Dropdown_ng_template_14_ng_template_6_li_6_Template, 3, 6, "li", 48);
    ɵɵtemplate(7, Dropdown_ng_template_14_ng_template_6_li_7_Template, 3, 6, "li", 48);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const scrollerOptions_r63 = ctx.options;
    const ctx_r34 = ɵɵnextContext(2);
    ɵɵstyleMap(scrollerOptions_r63.contentStyle);
    ɵɵproperty("ngClass", scrollerOptions_r63.contentStyleClass);
    ɵɵattribute("id", ctx_r34.listId);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r34.group);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r34.group);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r34.filterValue && ctx_r34.isEmpty());
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r34.filterValue && ctx_r34.isEmpty());
  }
}
function Dropdown_ng_template_14_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dropdown_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 29);
    ɵɵtemplate(1, Dropdown_ng_template_14_ng_container_1_Template, 1, 0, "ng-container", 23);
    ɵɵtemplate(2, Dropdown_ng_template_14_div_2_Template, 4, 2, "div", 30);
    ɵɵelementStart(3, "div", 31);
    ɵɵtemplate(4, Dropdown_ng_template_14_p_scroller_4_Template, 4, 10, "p-scroller", 32);
    ɵɵtemplate(5, Dropdown_ng_template_14_ng_container_5_Template, 2, 6, "ng-container", 8);
    ɵɵtemplate(6, Dropdown_ng_template_14_ng_template_6_Template, 8, 8, "ng-template", null, 33, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵtemplate(8, Dropdown_ng_template_14_ng_container_8_Template, 1, 0, "ng-container", 23);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext();
    ɵɵclassMap(ctx_r9.panelStyleClass);
    ɵɵproperty("ngClass", "p-dropdown-panel p-component")("ngStyle", ctx_r9.panelStyle);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r9.headerTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.filter);
    ɵɵadvance(1);
    ɵɵstyleProp("max-height", ctx_r9.virtualScroll ? "auto" : ctx_r9.scrollHeight || "auto");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r9.virtualScroll);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r9.virtualScroll);
    ɵɵadvance(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r9.footerTemplate);
  }
}
var _c16 = function(a1, a2, a3, a4) {
  return {
    "p-dropdown p-component": true,
    "p-disabled": a1,
    "p-dropdown-open": a2,
    "p-focus": a3,
    "p-dropdown-clearable": a4
  };
};
var DROPDOWN_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Dropdown),
  multi: true
};
var DropdownItem = class {
  constructor() {
    this.onClick = new EventEmitter();
  }
  onOptionClick(event) {
    this.onClick.emit({
      originalEvent: event,
      option: this.option
    });
  }
};
DropdownItem.ɵfac = function DropdownItem_Factory(t) {
  return new (t || DropdownItem)();
};
DropdownItem.ɵcmp = ɵɵdefineComponent({
  type: DropdownItem,
  selectors: [["p-dropdownItem"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    option: "option",
    selected: "selected",
    label: "label",
    disabled: "disabled",
    visible: "visible",
    itemSize: "itemSize",
    template: "template"
  },
  outputs: {
    onClick: "onClick"
  },
  decls: 3,
  vars: 15,
  consts: [["role", "option", "pRipple", "", 3, "ngStyle", "id", "ngClass", "click"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function DropdownItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "li", 0);
      ɵɵlistener("click", function DropdownItem_Template_li_click_0_listener($event) {
        return ctx.onOptionClick($event);
      });
      ɵɵtemplate(1, DropdownItem_span_1_Template, 2, 1, "span", 1);
      ɵɵtemplate(2, DropdownItem_ng_container_2_Template, 1, 0, "ng-container", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngStyle", ɵɵpureFunction1(8, _c03, ctx.itemSize + "px"))("id", ctx.selected ? "p-highlighted-option" : "")("ngClass", ɵɵpureFunction2(10, _c13, ctx.selected, ctx.disabled));
      ɵɵattribute("aria-label", ctx.label)("aria-selected", ctx.selected);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.template);
      ɵɵadvance(1);
      ɵɵproperty("ngTemplateOutlet", ctx.template)("ngTemplateOutletContext", ɵɵpureFunction1(13, _c23, ctx.option));
    }
  },
  dependencies: [NgClass, NgIf, NgTemplateOutlet, NgStyle, Ripple],
  encapsulation: 2
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownItem, [{
    type: Component,
    args: [{
      selector: "p-dropdownItem",
      template: `
        <li
            (click)="onOptionClick($event)"
            role="option"
            pRipple
            [attr.aria-label]="label"
            [attr.aria-selected]="selected"
            [ngStyle]="{ height: itemSize + 'px' }"
            [id]="selected ? 'p-highlighted-option' : ''"
            [ngClass]="{ 'p-dropdown-item': true, 'p-highlight': selected, 'p-disabled': disabled }"
        >
            <span *ngIf="!template">{{ label ?? 'empty' }}</span>
            <ng-container *ngTemplateOutlet="template; context: { $implicit: option }"></ng-container>
        </li>
    `,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    option: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    onClick: [{
      type: Output
    }]
  });
})();
var Dropdown = class {
  constructor(el, renderer, cd, zone, filterService, config) {
    this.el = el;
    this.renderer = renderer;
    this.cd = cd;
    this.zone = zone;
    this.filterService = filterService;
    this.config = config;
    this.scrollHeight = "200px";
    this.resetFilterOnHide = false;
    this.optionGroupChildren = "items";
    this.autoDisplayFirst = true;
    this.emptyFilterMessage = "";
    this.emptyMessage = "";
    this.lazy = false;
    this.filterMatchMode = "contains";
    this.tooltip = "";
    this.tooltipPosition = "right";
    this.tooltipPositionStyle = "absolute";
    this.autofocusFilter = true;
    this.overlayDirection = "end";
    this.onChange = new EventEmitter();
    this.onFilter = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onClick = new EventEmitter();
    this.onShow = new EventEmitter();
    this.onHide = new EventEmitter();
    this.onClear = new EventEmitter();
    this.onLazyLoad = new EventEmitter();
    this.onModelChange = () => {
    };
    this.onModelTouched = () => {
    };
    this.id = UniqueComponentId();
  }
  get disabled() {
    return this._disabled;
  }
  set disabled(_disabled) {
    if (_disabled) {
      this.focused = false;
      if (this.overlayVisible)
        this.hide();
    }
    this._disabled = _disabled;
    if (!this.cd.destroyed) {
      this.cd.detectChanges();
    }
  }
  get itemSize() {
    return this._itemSize;
  }
  set itemSize(val) {
    this._itemSize = val;
    console.warn("The itemSize property is deprecated, use virtualScrollItemSize property instead.");
  }
  get autoZIndex() {
    return this._autoZIndex;
  }
  set autoZIndex(val) {
    this._autoZIndex = val;
    console.warn("The autoZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  get baseZIndex() {
    return this._baseZIndex;
  }
  set baseZIndex(val) {
    this._baseZIndex = val;
    console.warn("The baseZIndex property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  get showTransitionOptions() {
    return this._showTransitionOptions;
  }
  set showTransitionOptions(val) {
    this._showTransitionOptions = val;
    console.warn("The showTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  get hideTransitionOptions() {
    return this._hideTransitionOptions;
  }
  set hideTransitionOptions(val) {
    this._hideTransitionOptions = val;
    console.warn("The hideTransitionOptions property is deprecated since v14.2.0, use overlayOptions property instead.");
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "selectedItem":
          this.selectedItemTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "footer":
          this.footerTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterTemplate = item.template;
          break;
        case "empty":
          this.emptyTemplate = item.template;
          break;
        case "group":
          this.groupTemplate = item.template;
          break;
        case "loader":
          this.loaderTemplate = item.template;
          break;
        case "dropdownicon":
          this.dropdownIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngOnInit() {
    this.optionsToDisplay = this.options;
    this.updateSelectedOption(null);
    this.labelId = this.id + "_label";
    this.listId = this.id + "_list";
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterInputChange(value),
        reset: () => this.resetFilter()
      };
    }
  }
  get options() {
    return this._options;
  }
  set options(val) {
    this._options = val;
    this.optionsToDisplay = this._options;
    this.updateSelectedOption(this.value);
    this.selectedOption = this.findOption(this.value, this.optionsToDisplay);
    if (!this.selectedOption && ObjectUtils.isNotEmpty(this.value) && !this.editable) {
      this.value = null;
      this.onModelChange(this.value);
    }
    this.optionsChanged = true;
    if (this._filterValue && this._filterValue.length) {
      this.activateFilter();
    }
  }
  get filterValue() {
    return this._filterValue;
  }
  set filterValue(val) {
    this._filterValue = val;
    this.activateFilter();
  }
  ngAfterViewInit() {
    if (this.editable) {
      this.updateEditableLabel();
    }
  }
  get label() {
    if (typeof this.selectedOption === "number") {
      this.selectedOption = this.selectedOption.toString();
    }
    return this.selectedOption ? this.getOptionLabel(this.selectedOption) : null;
  }
  get emptyMessageLabel() {
    return this.emptyMessage || this.config.getTranslation(TranslationKeys.EMPTY_MESSAGE);
  }
  get emptyFilterMessageLabel() {
    return this.emptyFilterMessage || this.config.getTranslation(TranslationKeys.EMPTY_FILTER_MESSAGE);
  }
  get filled() {
    if (typeof this.value === "string")
      return !!this.value;
    return this.value || this.value != null || this.value != void 0;
  }
  get isVisibleClearIcon() {
    return this.value != null && this.value !== "" && this.showClear && !this.disabled;
  }
  updateEditableLabel() {
    if (this.editableInputViewChild && this.editableInputViewChild.nativeElement) {
      this.editableInputViewChild.nativeElement.value = this.selectedOption ? this.getOptionLabel(this.selectedOption) : this.value || "";
    }
  }
  getOptionLabel(option) {
    return this.optionLabel ? ObjectUtils.resolveFieldData(option, this.optionLabel) : option && option.label !== void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? ObjectUtils.resolveFieldData(option, this.optionValue) : !this.optionLabel && option && option.value !== void 0 ? option.value : option;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? ObjectUtils.resolveFieldData(option, this.optionDisabled) : option && option.disabled !== void 0 ? option.disabled : false;
  }
  getOptionGroupLabel(optionGroup) {
    return this.optionGroupLabel ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupLabel) : optionGroup && optionGroup.label !== void 0 ? optionGroup.label : optionGroup;
  }
  getOptionGroupChildren(optionGroup) {
    return this.optionGroupChildren ? ObjectUtils.resolveFieldData(optionGroup, this.optionGroupChildren) : optionGroup.items;
  }
  onItemClick(event) {
    const option = event.option;
    if (!this.isOptionDisabled(option)) {
      this.selectItem(event.originalEvent, option);
      this.accessibleViewChild.nativeElement.focus({
        preventScroll: true
      });
    }
    setTimeout(() => {
      this.hide();
    }, 1);
  }
  selectItem(event, option) {
    if (this.selectedOption != option) {
      this.selectedOption = option;
      this.value = this.getOptionValue(option);
      this.onModelChange(this.value);
      this.updateEditableLabel();
      this.onChange.emit({
        originalEvent: event,
        value: this.value
      });
    }
  }
  ngAfterViewChecked() {
    if (this.optionsChanged && this.overlayVisible) {
      this.optionsChanged = false;
      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          if (this.overlayViewChild) {
            this.overlayViewChild.alignOverlay();
          }
        }, 1);
      });
    }
    if (this.selectedOptionUpdated && this.itemsWrapper) {
      let selectedItem = DomHandler.findSingle(this.overlayViewChild.overlayViewChild.nativeElement, "li.p-highlight");
      if (selectedItem) {
        DomHandler.scrollInView(this.itemsWrapper, selectedItem);
      }
      this.selectedOptionUpdated = false;
    }
  }
  writeValue(value) {
    if (this.filter) {
      this.resetFilter();
    }
    this.value = value;
    this.updateSelectedOption(value);
    this.updateEditableLabel();
    this.cd.markForCheck();
  }
  resetFilter() {
    this._filterValue = null;
    if (this.filterViewChild && this.filterViewChild.nativeElement) {
      this.filterViewChild.nativeElement.value = "";
    }
    this.optionsToDisplay = this.options;
  }
  updateSelectedOption(val) {
    this.selectedOption = this.findOption(val, this.optionsToDisplay);
    if (this.autoDisplayFirst && !this.placeholder && !this.selectedOption && this.optionsToDisplay && this.optionsToDisplay.length && !this.editable) {
      if (this.group) {
        this.selectedOption = this.optionsToDisplay[0].items[0];
      } else {
        this.selectedOption = this.optionsToDisplay[0];
      }
      this.value = this.getOptionValue(this.selectedOption);
      this.onModelChange(this.value);
    }
    this.selectedOptionUpdated = true;
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
  onMouseclick(event) {
    if (this.disabled || this.readonly || this.isInputClick(event)) {
      return;
    }
    this.onClick.emit(event);
    this.accessibleViewChild.nativeElement.focus({
      preventScroll: true
    });
    if (this.overlayVisible)
      this.hide();
    else
      this.show();
    this.cd.detectChanges();
  }
  isInputClick(event) {
    return DomHandler.hasClass(event.target, "p-dropdown-clear-icon") || event.target.isSameNode(this.accessibleViewChild.nativeElement) || this.editableInputViewChild && event.target.isSameNode(this.editableInputViewChild.nativeElement);
  }
  isEmpty() {
    return !this.optionsToDisplay || this.optionsToDisplay && this.optionsToDisplay.length === 0;
  }
  onEditableInputFocus(event) {
    this.focused = true;
    this.hide();
    this.onFocus.emit(event);
  }
  onEditableInputChange(event) {
    this.value = event.target.value;
    this.updateSelectedOption(this.value);
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
  }
  show() {
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  onOverlayAnimationStart(event) {
    if (event.toState === "visible") {
      this.itemsWrapper = DomHandler.findSingle(this.overlayViewChild.overlayViewChild.nativeElement, this.virtualScroll ? ".p-scroller" : ".p-dropdown-items-wrapper");
      this.virtualScroll && this.scroller.setContentEl(this.itemsViewChild.nativeElement);
      if (this.options && this.options.length) {
        if (this.virtualScroll) {
          const selectedIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
          if (selectedIndex !== -1) {
            this.scroller.scrollToIndex(selectedIndex);
          }
        } else {
          let selectedListItem = DomHandler.findSingle(this.itemsWrapper, ".p-dropdown-item.p-highlight");
          if (selectedListItem) {
            selectedListItem.scrollIntoView({
              block: "nearest",
              inline: "center"
            });
          }
        }
      }
      if (this.filterViewChild && this.filterViewChild.nativeElement) {
        this.preventModelTouched = true;
        if (this.autofocusFilter) {
          this.filterViewChild.nativeElement.focus();
        }
      }
      this.onShow.emit(event);
    }
    if (event.toState === "void") {
      this.itemsWrapper = null;
      this.onModelTouched();
      this.onHide.emit(event);
    }
  }
  hide() {
    this.overlayVisible = false;
    if (this.filter && this.resetFilterOnHide) {
      this.resetFilter();
    }
    this.cd.markForCheck();
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    if (!this.preventModelTouched) {
      this.onModelTouched();
    }
    this.preventModelTouched = false;
  }
  findPrevEnabledOption(index) {
    let prevEnabledOption;
    if (this.optionsToDisplay && this.optionsToDisplay.length) {
      for (let i = index - 1; 0 <= i; i--) {
        let option = this.optionsToDisplay[i];
        if (this.isOptionDisabled(option)) {
          continue;
        } else {
          prevEnabledOption = option;
          break;
        }
      }
      if (!prevEnabledOption) {
        for (let i = this.optionsToDisplay.length - 1; i >= index; i--) {
          let option = this.optionsToDisplay[i];
          if (this.isOptionDisabled(option)) {
            continue;
          } else {
            prevEnabledOption = option;
            break;
          }
        }
      }
    }
    return prevEnabledOption;
  }
  findNextEnabledOption(index) {
    let nextEnabledOption;
    if (this.optionsToDisplay && this.optionsToDisplay.length) {
      for (let i = index + 1; i < this.optionsToDisplay.length; i++) {
        let option = this.optionsToDisplay[i];
        if (this.isOptionDisabled(option)) {
          continue;
        } else {
          nextEnabledOption = option;
          break;
        }
      }
      if (!nextEnabledOption) {
        for (let i = 0; i < index; i++) {
          let option = this.optionsToDisplay[i];
          if (this.isOptionDisabled(option)) {
            continue;
          } else {
            nextEnabledOption = option;
            break;
          }
        }
      }
    }
    return nextEnabledOption;
  }
  onKeydown(event, search) {
    if (this.readonly || !this.optionsToDisplay || this.optionsToDisplay.length === null) {
      return;
    }
    switch (event.which) {
      case 40:
        if (!this.overlayVisible && event.altKey) {
          this.show();
        } else {
          if (this.group) {
            let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
            if (selectedItemIndex !== -1) {
              let nextItemIndex = selectedItemIndex.itemIndex + 1;
              if (nextItemIndex < this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex]).length) {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[nextItemIndex]);
                this.selectedOptionUpdated = true;
              } else if (this.optionsToDisplay[selectedItemIndex.groupIndex + 1]) {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex + 1])[0]);
                this.selectedOptionUpdated = true;
              }
            } else {
              if (this.optionsToDisplay && this.optionsToDisplay.length > 0) {
                this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[0])[0]);
              }
            }
          } else {
            let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
            let nextEnabledOption = this.findNextEnabledOption(selectedItemIndex);
            if (nextEnabledOption) {
              this.selectItem(event, nextEnabledOption);
              this.selectedOptionUpdated = true;
            }
          }
        }
        event.preventDefault();
        break;
      case 38:
        if (this.group) {
          let selectedItemIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
          if (selectedItemIndex !== -1) {
            let prevItemIndex = selectedItemIndex.itemIndex - 1;
            if (prevItemIndex >= 0) {
              this.selectItem(event, this.getOptionGroupChildren(this.optionsToDisplay[selectedItemIndex.groupIndex])[prevItemIndex]);
              this.selectedOptionUpdated = true;
            } else if (prevItemIndex < 0) {
              let prevGroup = this.optionsToDisplay[selectedItemIndex.groupIndex - 1];
              if (prevGroup) {
                this.selectItem(event, this.getOptionGroupChildren(prevGroup)[this.getOptionGroupChildren(prevGroup).length - 1]);
                this.selectedOptionUpdated = true;
              }
            }
          }
        } else {
          let selectedItemIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
          let prevEnabledOption = this.findPrevEnabledOption(selectedItemIndex);
          if (prevEnabledOption) {
            this.selectItem(event, prevEnabledOption);
            this.selectedOptionUpdated = true;
          }
        }
        event.preventDefault();
        break;
      case 32:
        if (search) {
          if (!this.overlayVisible) {
            this.show();
          } else {
            this.hide();
          }
          event.preventDefault();
        }
        break;
      case 13:
        if (this.overlayVisible && (!this.filter || this.optionsToDisplay && this.optionsToDisplay.length > 0)) {
          this.hide();
        } else if (!this.overlayVisible) {
          this.show();
        }
        event.preventDefault();
        break;
      case 27:
      case 9:
        this.hide();
        break;
      default:
        if (search && !event.metaKey && event.which !== 17) {
          this.search(event);
        }
        break;
    }
  }
  search(event) {
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    const char = event.key;
    this.previousSearchChar = this.currentSearchChar;
    this.currentSearchChar = char;
    if (this.previousSearchChar === this.currentSearchChar)
      this.searchValue = this.currentSearchChar;
    else
      this.searchValue = this.searchValue ? this.searchValue + char : char;
    let newOption;
    if (this.group) {
      let searchIndex = this.selectedOption ? this.findOptionGroupIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : {
        groupIndex: 0,
        itemIndex: 0
      };
      newOption = this.searchOptionWithinGroup(searchIndex);
    } else {
      let searchIndex = this.selectedOption ? this.findOptionIndex(this.getOptionValue(this.selectedOption), this.optionsToDisplay) : -1;
      newOption = this.searchOption(++searchIndex);
    }
    if (newOption && !this.isOptionDisabled(newOption)) {
      this.selectItem(event, newOption);
      this.selectedOptionUpdated = true;
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = null;
    }, 250);
  }
  searchOption(index) {
    let option;
    if (this.searchValue) {
      option = this.searchOptionInRange(index, this.optionsToDisplay.length);
      if (!option) {
        option = this.searchOptionInRange(0, index);
      }
    }
    return option;
  }
  searchOptionInRange(start, end) {
    for (let i = start; i < end; i++) {
      let opt = this.optionsToDisplay[i];
      if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
        return opt;
      }
    }
    return null;
  }
  searchOptionWithinGroup(index) {
    let option;
    if (this.searchValue) {
      for (let i = index.groupIndex; i < this.optionsToDisplay.length; i++) {
        for (let j = index.groupIndex === i ? index.itemIndex + 1 : 0; j < this.getOptionGroupChildren(this.optionsToDisplay[i]).length; j++) {
          let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
          if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
            return opt;
          }
        }
      }
      if (!option) {
        for (let i = 0; i <= index.groupIndex; i++) {
          for (let j = 0; j < (index.groupIndex === i ? index.itemIndex : this.getOptionGroupChildren(this.optionsToDisplay[i]).length); j++) {
            let opt = this.getOptionGroupChildren(this.optionsToDisplay[i])[j];
            if (this.getOptionLabel(opt).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)) && !this.isOptionDisabled(opt)) {
              return opt;
            }
          }
        }
      }
    }
    return null;
  }
  findOptionIndex(val, opts) {
    let index = -1;
    if (opts) {
      for (let i = 0; i < opts.length; i++) {
        if (val == null && this.getOptionValue(opts[i]) == null || ObjectUtils.equals(val, this.getOptionValue(opts[i]), this.dataKey)) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  findOptionGroupIndex(val, opts) {
    let groupIndex, itemIndex;
    if (opts) {
      for (let i = 0; i < opts.length; i++) {
        groupIndex = i;
        itemIndex = this.findOptionIndex(val, this.getOptionGroupChildren(opts[i]));
        if (itemIndex !== -1) {
          break;
        }
      }
    }
    if (itemIndex !== -1) {
      return {
        groupIndex,
        itemIndex
      };
    } else {
      return -1;
    }
  }
  findOption(val, opts, inGroup) {
    if (this.group && !inGroup) {
      let opt;
      if (opts && opts.length) {
        for (let optgroup of opts) {
          opt = this.findOption(val, this.getOptionGroupChildren(optgroup), true);
          if (opt) {
            break;
          }
        }
      }
      return opt;
    } else {
      let index = this.findOptionIndex(val, opts);
      return index != -1 ? opts[index] : null;
    }
  }
  onFilterInputChange(event) {
    let inputValue = event.target.value;
    if (inputValue && inputValue.length) {
      this._filterValue = inputValue;
      this.activateFilter();
    } else {
      this._filterValue = null;
      this.optionsToDisplay = this.options;
    }
    this.virtualScroll && this.scroller.scrollToIndex(0);
    this.optionsChanged = true;
    this.onFilter.emit({
      originalEvent: event,
      filter: this._filterValue
    });
  }
  activateFilter() {
    let searchFields = (this.filterBy || this.optionLabel || "label").split(",");
    if (this.options && this.options.length) {
      if (this.group) {
        let filteredGroups = [];
        for (let optgroup of this.options) {
          let filteredSubOptions = this.filterService.filter(this.getOptionGroupChildren(optgroup), searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
          if (filteredSubOptions && filteredSubOptions.length) {
            filteredGroups.push(__spreadValues(__spreadValues({}, optgroup), {
              [this.optionGroupChildren]: filteredSubOptions
            }));
          }
        }
        this.optionsToDisplay = filteredGroups;
      } else {
        this.optionsToDisplay = this.filterService.filter(this.options, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
      }
      this.optionsChanged = true;
    }
  }
  applyFocus() {
    if (this.editable)
      DomHandler.findSingle(this.el.nativeElement, ".p-dropdown-label.p-inputtext").focus();
    else
      DomHandler.findSingle(this.el.nativeElement, "input[readonly]").focus();
  }
  focus() {
    this.applyFocus();
  }
  clear(event) {
    this.value = null;
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.updateSelectedOption(this.value);
    this.updateEditableLabel();
    this.onClear.emit(event);
  }
};
Dropdown.ɵfac = function Dropdown_Factory(t) {
  return new (t || Dropdown)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(PrimeNGConfig));
};
Dropdown.ɵcmp = ɵɵdefineComponent({
  type: Dropdown,
  selectors: [["p-dropdown"]],
  contentQueries: function Dropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function Dropdown_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c33, 5);
      ɵɵviewQuery(_c43, 5);
      ɵɵviewQuery(_c53, 5);
      ɵɵviewQuery(_c63, 5);
      ɵɵviewQuery(_c73, 5);
      ɵɵviewQuery(_c82, 5);
      ɵɵviewQuery(_c92, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.accessibleViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.editableInputViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsViewChild = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.scroller = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.overlayViewChild = _t.first);
    }
  },
  hostAttrs: [1, "p-element", "p-inputwrapper"],
  hostVars: 4,
  hostBindings: function Dropdown_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused || ctx.overlayVisible);
    }
  },
  inputs: {
    scrollHeight: "scrollHeight",
    filter: "filter",
    name: "name",
    style: "style",
    panelStyle: "panelStyle",
    styleClass: "styleClass",
    panelStyleClass: "panelStyleClass",
    readonly: "readonly",
    required: "required",
    editable: "editable",
    appendTo: "appendTo",
    tabindex: "tabindex",
    placeholder: "placeholder",
    filterPlaceholder: "filterPlaceholder",
    filterLocale: "filterLocale",
    inputId: "inputId",
    selectId: "selectId",
    dataKey: "dataKey",
    filterBy: "filterBy",
    autofocus: "autofocus",
    resetFilterOnHide: "resetFilterOnHide",
    dropdownIcon: "dropdownIcon",
    optionLabel: "optionLabel",
    optionValue: "optionValue",
    optionDisabled: "optionDisabled",
    optionGroupLabel: "optionGroupLabel",
    optionGroupChildren: "optionGroupChildren",
    autoDisplayFirst: "autoDisplayFirst",
    group: "group",
    showClear: "showClear",
    emptyFilterMessage: "emptyFilterMessage",
    emptyMessage: "emptyMessage",
    lazy: "lazy",
    virtualScroll: "virtualScroll",
    virtualScrollItemSize: "virtualScrollItemSize",
    virtualScrollOptions: "virtualScrollOptions",
    overlayOptions: "overlayOptions",
    ariaFilterLabel: "ariaFilterLabel",
    ariaLabel: "ariaLabel",
    ariaLabelledBy: "ariaLabelledBy",
    filterMatchMode: "filterMatchMode",
    maxlength: "maxlength",
    tooltip: "tooltip",
    tooltipPosition: "tooltipPosition",
    tooltipPositionStyle: "tooltipPositionStyle",
    tooltipStyleClass: "tooltipStyleClass",
    autofocusFilter: "autofocusFilter",
    overlayDirection: "overlayDirection",
    disabled: "disabled",
    itemSize: "itemSize",
    autoZIndex: "autoZIndex",
    baseZIndex: "baseZIndex",
    showTransitionOptions: "showTransitionOptions",
    hideTransitionOptions: "hideTransitionOptions",
    options: "options",
    filterValue: "filterValue"
  },
  outputs: {
    onChange: "onChange",
    onFilter: "onFilter",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onClick: "onClick",
    onShow: "onShow",
    onHide: "onHide",
    onClear: "onClear",
    onLazyLoad: "onLazyLoad"
  },
  features: [ɵɵProvidersFeature([DROPDOWN_VALUE_ACCESSOR])],
  decls: 15,
  vars: 33,
  consts: [[3, "ngClass", "ngStyle", "click"], ["container", ""], [1, "p-hidden-accessible"], ["type", "text", "readonly", "", "aria-haspopup", "listbox", "aria-haspopup", "listbox", "pAutoFocus", "", "role", "combobox", 3, "disabled", "autofocus", "focus", "blur", "keydown"], ["in", ""], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "text", "class", "p-dropdown-label p-inputtext", "aria-haspopup", "listbox", 3, "disabled", "input", "focus", "blur", 4, "ngIf"], [4, "ngIf"], ["role", "button", "aria-label", "dropdown trigger", "aria-haspopup", "listbox", 1, "p-dropdown-trigger"], ["class", "p-dropdown-trigger-icon", 4, "ngIf"], [3, "visible", "options", "target", "appendTo", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "visibleChange", "onAnimationStart", "onHide"], ["overlay", ""], ["pTemplate", "content"], [3, "ngClass", "pTooltip", "tooltipPosition", "positionStyle", "tooltipStyleClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngClass"], ["type", "text", "aria-haspopup", "listbox", 1, "p-dropdown-label", "p-inputtext", 3, "disabled", "input", "focus", "blur"], ["editableInput", ""], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-dropdown-clear-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-dropdown-clear-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-dropdown-trigger-icon", 3, "ngClass", 4, "ngIf"], [3, "styleClass", 4, "ngIf"], [1, "p-dropdown-trigger-icon", 3, "ngClass"], [3, "styleClass"], [1, "p-dropdown-trigger-icon"], [3, "ngClass", "ngStyle"], ["class", "p-dropdown-header", 3, "click", 4, "ngIf"], [1, "p-dropdown-items-wrapper"], [3, "items", "style", "itemSize", "autoSize", "lazy", "options", "onLazyLoad", 4, "ngIf"], ["buildInItems", ""], [1, "p-dropdown-header", 3, "click"], [4, "ngIf", "ngIfElse"], ["builtInFilterElement", ""], [1, "p-dropdown-filter-container"], ["type", "text", "autocomplete", "off", 1, "p-dropdown-filter", "p-inputtext", "p-component", 3, "value", "keydown.enter", "keydown", "input"], ["filter", ""], ["class", "p-dropdown-filter-icon", 4, "ngIf"], [1, "p-dropdown-filter-icon"], [3, "items", "itemSize", "autoSize", "lazy", "options", "onLazyLoad"], ["scroller", ""], ["pTemplate", "loader"], ["role", "listbox", 1, "p-dropdown-items", 3, "ngClass"], ["items", ""], ["itemslist", ""], ["class", "p-dropdown-empty-message", 3, "ngStyle", 4, "ngIf"], ["ngFor", "", 3, "ngForOf"], [1, "p-dropdown-item-group", 3, "ngStyle"], [3, "option", "selected", "label", "disabled", "template", "onClick"], [1, "p-dropdown-empty-message", 3, "ngStyle"], ["emptyFilter", ""], ["empty", ""]],
  template: function Dropdown_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0, 1);
      ɵɵlistener("click", function Dropdown_Template_div_click_0_listener($event) {
        return ctx.onMouseclick($event);
      });
      ɵɵelementStart(2, "div", 2)(3, "input", 3, 4);
      ɵɵlistener("focus", function Dropdown_Template_input_focus_3_listener($event) {
        return ctx.onInputFocus($event);
      })("blur", function Dropdown_Template_input_blur_3_listener($event) {
        return ctx.onInputBlur($event);
      })("keydown", function Dropdown_Template_input_keydown_3_listener($event) {
        return ctx.onKeydown($event, true);
      });
      ɵɵelementEnd()();
      ɵɵtemplate(5, Dropdown_span_5_Template, 3, 13, "span", 5);
      ɵɵtemplate(6, Dropdown_span_6_Template, 2, 4, "span", 6);
      ɵɵtemplate(7, Dropdown_input_7_Template, 2, 4, "input", 7);
      ɵɵtemplate(8, Dropdown_ng_container_8_Template, 3, 2, "ng-container", 8);
      ɵɵelementStart(9, "div", 9);
      ɵɵtemplate(10, Dropdown_ng_container_10_Template, 3, 2, "ng-container", 8);
      ɵɵtemplate(11, Dropdown_span_11_Template, 2, 1, "span", 10);
      ɵɵelementEnd();
      ɵɵelementStart(12, "p-overlay", 11, 12);
      ɵɵlistener("visibleChange", function Dropdown_Template_p_overlay_visibleChange_12_listener($event) {
        return ctx.overlayVisible = $event;
      })("onAnimationStart", function Dropdown_Template_p_overlay_onAnimationStart_12_listener($event) {
        return ctx.onOverlayAnimationStart($event);
      })("onHide", function Dropdown_Template_p_overlay_onHide_12_listener() {
        return ctx.hide();
      });
      ɵɵtemplate(14, Dropdown_ng_template_14_Template, 9, 11, "ng-template", 13);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngClass", ɵɵpureFunction4(28, _c16, ctx.disabled, ctx.overlayVisible, ctx.focused, ctx.showClear && !ctx.disabled))("ngStyle", ctx.style);
      ɵɵadvance(3);
      ɵɵproperty("disabled", ctx.disabled)("autofocus", ctx.autofocus);
      ɵɵattribute("id", ctx.inputId)("placeholder", ctx.placeholder)("aria-label", ctx.ariaLabel)("aria-expanded", false)("aria-labelledby", ctx.ariaLabelledBy)("tabindex", ctx.tabindex)("aria-activedescendant", ctx.overlayVisible ? ctx.labelId : null);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", !ctx.editable && ctx.label != null);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.editable && ctx.label == null);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.editable);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.isVisibleClearIcon);
      ɵɵadvance(1);
      ɵɵattribute("aria-expanded", ctx.overlayVisible);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", !ctx.dropdownIconTemplate);
      ɵɵadvance(1);
      ɵɵproperty("ngIf", ctx.dropdownIconTemplate);
      ɵɵadvance(1);
      ɵɵproperty("visible", ctx.overlayVisible)("options", ctx.overlayOptions)("target", "@parent")("appendTo", ctx.appendTo)("autoZIndex", ctx.autoZIndex)("baseZIndex", ctx.baseZIndex)("showTransitionOptions", ctx.showTransitionOptions)("hideTransitionOptions", ctx.hideTransitionOptions);
    }
  },
  dependencies: function() {
    return [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Overlay, PrimeTemplate, Tooltip, Scroller, AutoFocus, TimesIcon, ChevronDownIcon, SearchIcon, DropdownItem];
  },
  styles: [".p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dropdown, [{
    type: Component,
    args: [{
      selector: "p-dropdown",
      template: `
        <div
            #container
            [ngClass]="{ 'p-dropdown p-component': true, 'p-disabled': disabled, 'p-dropdown-open': overlayVisible, 'p-focus': focused, 'p-dropdown-clearable': showClear && !disabled }"
            (click)="onMouseclick($event)"
            [ngStyle]="style"
            [class]="styleClass"
        >
            <div class="p-hidden-accessible">
                <input
                    #in
                    [attr.id]="inputId"
                    type="text"
                    readonly
                    (focus)="onInputFocus($event)"
                    aria-haspopup="listbox"
                    [attr.placeholder]="placeholder"
                    aria-haspopup="listbox"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-expanded]="false"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    (blur)="onInputBlur($event)"
                    (keydown)="onKeydown($event, true)"
                    [disabled]="disabled"
                    [attr.tabindex]="tabindex"
                    pAutoFocus
                    [autofocus]="autofocus"
                    [attr.aria-activedescendant]="overlayVisible ? labelId : null"
                    role="combobox"
                />
            </div>
            <span
                [attr.id]="labelId"
                [ngClass]="{ 'p-dropdown-label p-inputtext': true, 'p-dropdown-label-empty': label == null || label.length === 0 }"
                *ngIf="!editable && label != null"
                [pTooltip]="tooltip"
                [tooltipPosition]="tooltipPosition"
                [positionStyle]="tooltipPositionStyle"
                [tooltipStyleClass]="tooltipStyleClass"
            >
                <ng-container *ngIf="!selectedItemTemplate">{{ label || 'empty' }}</ng-container>
                <ng-container *ngTemplateOutlet="selectedItemTemplate; context: { $implicit: selectedOption }"></ng-container>
            </span>
            <span [ngClass]="{ 'p-dropdown-label p-inputtext p-placeholder': true, 'p-dropdown-label-empty': placeholder == null || placeholder.length === 0 }" *ngIf="!editable && label == null">{{ placeholder || 'empty' }}</span>
            <input
                #editableInput
                type="text"
                [attr.maxlength]="maxlength"
                class="p-dropdown-label p-inputtext"
                *ngIf="editable"
                [disabled]="disabled"
                [attr.placeholder]="placeholder"
                aria-haspopup="listbox"
                [attr.aria-expanded]="overlayVisible"
                (input)="onEditableInputChange($event)"
                (focus)="onEditableInputFocus($event)"
                (blur)="onInputBlur($event)"
            />

            <ng-container *ngIf="isVisibleClearIcon">
                <TimesIcon [styleClass]="'p-dropdown-clear-icon'" (click)="clear($event)" *ngIf="!clearIconTemplate" />
                <span class="p-dropdown-clear-icon" (click)="clear($event)" *ngIf="clearIconTemplate">
                    <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                </span>
            </ng-container>
           

            <div class="p-dropdown-trigger" role="button" aria-label="dropdown trigger" aria-haspopup="listbox" [attr.aria-expanded]="overlayVisible">
                <ng-container *ngIf="!dropdownIconTemplate">
                    <span class="p-dropdown-trigger-icon" *ngIf="dropdownIcon" [ngClass]="dropdownIcon"></span>
                    <ChevronDownIcon *ngIf="!dropdownIcon" [styleClass]="'p-dropdown-trigger-icon'" />
                </ng-container>
                <span *ngIf="dropdownIconTemplate" class="p-dropdown-trigger-icon">
                    <ng-template *ngTemplateOutlet="dropdownIconTemplate"></ng-template>
                </span>
            </div>
            
            <p-overlay
                #overlay
                [(visible)]="overlayVisible"
                [options]="overlayOptions"
                [target]="'@parent'"
                [appendTo]="appendTo"
                [autoZIndex]="autoZIndex"
                [baseZIndex]="baseZIndex"
                [showTransitionOptions]="showTransitionOptions"
                [hideTransitionOptions]="hideTransitionOptions"
                (onAnimationStart)="onOverlayAnimationStart($event)"
                (onHide)="hide()"
            >
                <ng-template pTemplate="content">
                    <div [ngClass]="'p-dropdown-panel p-component'" [ngStyle]="panelStyle" [class]="panelStyleClass">
                        <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                        <div class="p-dropdown-header" *ngIf="filter" (click)="$event.stopPropagation()">
                            <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                                <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                            </ng-container>
                            <ng-template #builtInFilterElement>
                                <div class="p-dropdown-filter-container">
                                    <input
                                        #filter
                                        type="text"
                                        autocomplete="off"
                                        [value]="filterValue || ''"
                                        class="p-dropdown-filter p-inputtext p-component"
                                        [attr.placeholder]="filterPlaceholder"
                                        (keydown.enter)="$event.preventDefault()"
                                        (keydown)="onKeydown($event, false)"
                                        (input)="onFilterInputChange($event)"
                                        [attr.aria-label]="ariaFilterLabel"
                                        [attr.aria-activedescendant]="overlayVisible ? 'p-highlighted-option' : labelId"
                                    />
                                    <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-dropdown-filter-icon'" />
                                    <span *ngIf="filterIconTemplate" class="p-dropdown-filter-icon">
                                        <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                                    </span>
                                </div>
                            </ng-template>
                        </div>
                        <div class="p-dropdown-items-wrapper" [style.max-height]="virtualScroll ? 'auto' : scrollHeight || 'auto'">
                            <p-scroller
                                *ngIf="virtualScroll"
                                #scroller
                                [items]="optionsToDisplay"
                                [style]="{ height: scrollHeight }"
                                [itemSize]="virtualScrollItemSize || _itemSize"
                                [autoSize]="true"
                                [lazy]="lazy"
                                (onLazyLoad)="onLazyLoad.emit($event)"
                                [options]="virtualScrollOptions"
                            >
                                <ng-template pTemplate="content" let-items let-scrollerOptions="options">
                                    <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: items, options: scrollerOptions }"></ng-container>
                                </ng-template>
                                <ng-container *ngIf="loaderTemplate">
                                    <ng-template pTemplate="loader" let-scrollerOptions="options">
                                        <ng-container *ngTemplateOutlet="loaderTemplate; context: { options: scrollerOptions }"></ng-container>
                                    </ng-template>
                                </ng-container>
                            </p-scroller>
                            <ng-container *ngIf="!virtualScroll">
                                <ng-container *ngTemplateOutlet="buildInItems; context: { $implicit: optionsToDisplay, options: {} }"></ng-container>
                            </ng-container>

                            <ng-template #buildInItems let-items let-scrollerOptions="options">
                                <ul #items [attr.id]="listId" class="p-dropdown-items" [ngClass]="scrollerOptions.contentStyleClass" [style]="scrollerOptions.contentStyle" role="listbox">
                                    <ng-container *ngIf="group">
                                        <ng-template ngFor let-optgroup [ngForOf]="items">
                                            <li class="p-dropdown-item-group" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                                <span *ngIf="!groupTemplate">{{ getOptionGroupLabel(optgroup) || 'empty' }}</span>
                                                <ng-container *ngTemplateOutlet="groupTemplate; context: { $implicit: optgroup }"></ng-container>
                                            </li>
                                            <ng-container *ngTemplateOutlet="itemslist; context: { $implicit: getOptionGroupChildren(optgroup), selectedOption: selectedOption }"></ng-container>
                                        </ng-template>
                                    </ng-container>
                                    <ng-container *ngIf="!group">
                                        <ng-container *ngTemplateOutlet="itemslist; context: { $implicit: items, selectedOption: selectedOption }"></ng-container>
                                    </ng-container>
                                    <ng-template #itemslist let-options let-selectedOption="selectedOption">
                                        <ng-template ngFor let-option let-i="index" [ngForOf]="options">
                                            <p-dropdownItem
                                                [option]="option"
                                                [selected]="selectedOption == option"
                                                [label]="getOptionLabel(option)"
                                                [disabled]="isOptionDisabled(option)"
                                                (onClick)="onItemClick($event)"
                                                [template]="itemTemplate"
                                            ></p-dropdownItem>
                                        </ng-template>
                                    </ng-template>
                                    <li *ngIf="filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyFilterTemplate && !emptyTemplate; else emptyFilter">
                                            {{ emptyFilterMessageLabel }}
                                        </ng-container>
                                        <ng-container #emptyFilter *ngTemplateOutlet="emptyFilterTemplate || emptyTemplate"></ng-container>
                                    </li>
                                    <li *ngIf="!filterValue && isEmpty()" class="p-dropdown-empty-message" [ngStyle]="{ height: scrollerOptions.itemSize + 'px' }">
                                        <ng-container *ngIf="!emptyTemplate; else empty">
                                            {{ emptyMessageLabel }}
                                        </ng-container>
                                        <ng-container #empty *ngTemplateOutlet="emptyTemplate"></ng-container>
                                    </li>
                                </ul>
                            </ng-template>
                        </div>
                        <ng-container *ngTemplateOutlet="footerTemplate"></ng-container>
                    </div>
                </ng-template>
            </p-overlay>
        </div>
    `,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-inputwrapper-focus]": "focused || overlayVisible"
      },
      providers: [DROPDOWN_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: [".p-dropdown{display:inline-flex;cursor:pointer;position:relative;-webkit-user-select:none;user-select:none}.p-dropdown-clear-icon{position:absolute;top:50%;margin-top:-.5rem}.p-dropdown-trigger{display:flex;align-items:center;justify-content:center;flex-shrink:0}.p-dropdown-label{display:block;white-space:nowrap;overflow:hidden;flex:1 1 auto;width:1%;text-overflow:ellipsis;cursor:pointer}.p-dropdown-label-empty{overflow:hidden;visibility:hidden}input.p-dropdown-label{cursor:default}.p-dropdown-items-wrapper{overflow:auto}.p-dropdown-item{cursor:pointer;font-weight:400;white-space:nowrap;position:relative;overflow:hidden}.p-dropdown-items{margin:0;padding:0;list-style-type:none}.p-dropdown-filter{width:100%}.p-dropdown-filter-container{position:relative}.p-dropdown-filter-icon{position:absolute;top:50%;margin-top:-.5rem}.p-fluid .p-dropdown{display:flex}.p-fluid .p-dropdown .p-dropdown-label{width:1%}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }, {
      type: NgZone
    }, {
      type: FilterService
    }, {
      type: PrimeNGConfig
    }];
  }, {
    scrollHeight: [{
      type: Input
    }],
    filter: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    panelStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    panelStyleClass: [{
      type: Input
    }],
    readonly: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    selectId: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    filterBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input
    }],
    resetFilterOnHide: [{
      type: Input
    }],
    dropdownIcon: [{
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
    optionGroupLabel: [{
      type: Input
    }],
    optionGroupChildren: [{
      type: Input
    }],
    autoDisplayFirst: [{
      type: Input
    }],
    group: [{
      type: Input
    }],
    showClear: [{
      type: Input
    }],
    emptyFilterMessage: [{
      type: Input
    }],
    emptyMessage: [{
      type: Input
    }],
    lazy: [{
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
    overlayOptions: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    maxlength: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    tooltipPosition: [{
      type: Input
    }],
    tooltipPositionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    autofocusFilter: [{
      type: Input
    }],
    overlayDirection: [{
      type: Input
    }],
    onChange: [{
      type: Output
    }],
    onFilter: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onClick: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onLazyLoad: [{
      type: Output
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    accessibleViewChild: [{
      type: ViewChild,
      args: ["in"]
    }],
    editableInputViewChild: [{
      type: ViewChild,
      args: ["editableInput"]
    }],
    itemsViewChild: [{
      type: ViewChild,
      args: ["items"]
    }],
    scroller: [{
      type: ViewChild,
      args: ["scroller"]
    }],
    overlayViewChild: [{
      type: ViewChild,
      args: ["overlay"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    disabled: [{
      type: Input
    }],
    itemSize: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    options: [{
      type: Input
    }],
    filterValue: [{
      type: Input
    }]
  });
})();
var DropdownModule = class {
};
DropdownModule.ɵfac = function DropdownModule_Factory(t) {
  return new (t || DropdownModule)();
};
DropdownModule.ɵmod = ɵɵdefineNgModule({
  type: DropdownModule,
  declarations: [Dropdown, DropdownItem],
  imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon],
  exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule]
});
DropdownModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon, OverlayModule, SharedModule, ScrollerModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, OverlayModule, SharedModule, TooltipModule, RippleModule, ScrollerModule, AutoFocusModule, TimesIcon, ChevronDownIcon, SearchIcon],
      exports: [Dropdown, OverlayModule, SharedModule, ScrollerModule],
      declarations: [Dropdown, DropdownItem]
    }]
  }], null, null);
})();

export {
  Scroller,
  ScrollerModule,
  DROPDOWN_VALUE_ACCESSOR,
  DropdownItem,
  Dropdown,
  DropdownModule
};
//# sourceMappingURL=chunk-BGN3WWXG.js.map