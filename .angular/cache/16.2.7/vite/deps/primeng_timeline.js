import {
  PrimeTemplate,
  SharedModule
} from "./chunk-FSVIF75D.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-YSU6UL2H.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction7,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-X7KDTYUN.js";
import "./chunk-CQXG3EQT.js";
import "./chunk-AOF462FV.js";
import "./chunk-SU2WE4RP.js";

// node_modules/primeng/fesm2020/primeng-timeline.mjs
function Timeline_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var _c0 = function(a0) {
  return {
    $implicit: a0
  };
};
function Timeline_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Timeline_div_1_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const event_r1 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.markerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c0, event_r1));
  }
}
function Timeline_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 10);
  }
}
function Timeline_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 11);
  }
}
function Timeline_div_1_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3);
    ɵɵtemplate(2, Timeline_div_1_ng_container_2_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 5);
    ɵɵtemplate(4, Timeline_div_1_ng_container_4_Template, 2, 4, "ng-container", 6);
    ɵɵtemplate(5, Timeline_div_1_ng_template_5_Template, 1, 0, "ng-template", null, 7, ɵɵtemplateRefExtractor);
    ɵɵtemplate(7, Timeline_div_1_div_7_Template, 1, 0, "div", 8);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div", 9);
    ɵɵtemplate(9, Timeline_div_1_ng_container_9_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    const _r5 = ɵɵreference(6);
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.oppositeTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(7, _c0, event_r1));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.markerTemplate)("ngIfElse", _r5);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !last_r2);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c0, event_r1));
  }
}
var _c1 = function(a1, a2, a3, a4, a5, a6, a7) {
  return {
    "p-timeline p-component": true,
    "p-timeline-left": a1,
    "p-timeline-right": a2,
    "p-timeline-top": a3,
    "p-timeline-bottom": a4,
    "p-timeline-alternate": a5,
    "p-timeline-vertical": a6,
    "p-timeline-horizontal": a7
  };
};
var Timeline = class {
  constructor(el) {
    this.el = el;
    this.align = "left";
    this.layout = "vertical";
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this.contentTemplate = item.template;
          break;
        case "opposite":
          this.oppositeTemplate = item.template;
          break;
        case "marker":
          this.markerTemplate = item.template;
          break;
      }
    });
  }
};
Timeline.ɵfac = function Timeline_Factory(t) {
  return new (t || Timeline)(ɵɵdirectiveInject(ElementRef));
};
Timeline.ɵcmp = ɵɵdefineComponent({
  type: Timeline,
  selectors: [["p-timeline"]],
  contentQueries: function Timeline_ContentQueries(rf, ctx, dirIndex) {
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
    value: "value",
    style: "style",
    styleClass: "styleClass",
    align: "align",
    layout: "layout"
  },
  decls: 2,
  vars: 13,
  consts: [[3, "ngStyle", "ngClass"], ["class", "p-timeline-event", 4, "ngFor", "ngForOf"], [1, "p-timeline-event"], [1, "p-timeline-event-opposite"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-timeline-event-separator"], [4, "ngIf", "ngIfElse"], ["marker", ""], ["class", "p-timeline-event-connector", 4, "ngIf"], [1, "p-timeline-event-content"], [1, "p-timeline-event-marker"], [1, "p-timeline-event-connector"]],
  template: function Timeline_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, Timeline_div_1_Template, 10, 11, "div", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngStyle", ctx.style)("ngClass", ɵɵpureFunction7(5, _c1, ctx.align === "left", ctx.align === "right", ctx.align === "top", ctx.align === "bottom", ctx.align === "alternate", ctx.layout === "vertical", ctx.layout === "horizontal"));
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.value);
    }
  },
  dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
  styles: [".p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:column-reverse}\n"],
  encapsulation: 2,
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{
      selector: "p-timeline",
      template: `
        <div
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                'p-timeline p-component': true,
                'p-timeline-left': align === 'left',
                'p-timeline-right': align === 'right',
                'p-timeline-top': align === 'top',
                'p-timeline-bottom': align === 'bottom',
                'p-timeline-alternate': align === 'alternate',
                'p-timeline-vertical': layout === 'vertical',
                'p-timeline-horizontal': layout === 'horizontal'
            }"
        >
            <div *ngFor="let event of value; let last = last" class="p-timeline-event">
                <div class="p-timeline-event-opposite">
                    <ng-container *ngTemplateOutlet="oppositeTemplate; context: { $implicit: event }"></ng-container>
                </div>
                <div class="p-timeline-event-separator">
                    <ng-container *ngIf="markerTemplate; else marker">
                        <ng-container *ngTemplateOutlet="markerTemplate; context: { $implicit: event }"></ng-container>
                    </ng-container>
                    <ng-template #marker>
                        <div class="p-timeline-event-marker"></div>
                    </ng-template>
                    <div *ngIf="!last" class="p-timeline-event-connector"></div>
                </div>
                <div class="p-timeline-event-content">
                    <ng-container *ngTemplateOutlet="contentTemplate; context: { $implicit: event }"></ng-container>
                </div>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: [".p-timeline{display:flex;flex-grow:1;flex-direction:column}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;position:relative;min-height:70px}.p-timeline-event:last-child{min-height:0}.p-timeline-event-opposite,.p-timeline-event-content{flex:1;padding:0 1rem}.p-timeline-event-separator{flex:0;display:flex;align-items:center;flex-direction:column}.p-timeline-event-marker{display:flex;align-self:baseline}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex-direction:column;flex:1}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event{flex-direction:column-reverse}.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even){flex-direction:column-reverse}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    value: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TimelineModule = class {
};
TimelineModule.ɵfac = function TimelineModule_Factory(t) {
  return new (t || TimelineModule)();
};
TimelineModule.ɵmod = ɵɵdefineNgModule({
  type: TimelineModule,
  declarations: [Timeline],
  imports: [CommonModule],
  exports: [Timeline, SharedModule]
});
TimelineModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, SharedModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Timeline, SharedModule],
      declarations: [Timeline]
    }]
  }], null, null);
})();
export {
  Timeline,
  TimelineModule
};
//# sourceMappingURL=primeng_timeline.js.map
