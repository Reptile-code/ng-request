import {
  AngleDownIcon,
  AngleRightIcon
} from "./chunk-MTXVLY7I.js";
import {
  ChevronDownIcon
} from "./chunk-W4GQVWQH.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-PCISQTO5.js";
import {
  ChevronRightIcon
} from "./chunk-BZLC2QWV.js";
import {
  Tooltip,
  TooltipModule
} from "./chunk-OC22UFRG.js";
import "./chunk-2ALXQHTC.js";
import {
  DomHandler
} from "./chunk-QTPZL35D.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-FSVIF75D.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-GY2GJSDX.js";
import "./chunk-O33IQ5JN.js";
import "./chunk-5BVE6MKB.js";
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
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Input,
  NgModule,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-X7KDTYUN.js";
import "./chunk-CQXG3EQT.js";
import "./chunk-AOF462FV.js";
import "./chunk-SU2WE4RP.js";

// node_modules/primeng/fesm2020/primeng-panelmenu.mjs
function PanelMenuSub_ng_template_1_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 4);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 17);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(5).$implicit;
    ɵɵproperty("styleClass", "p-panelmenu-icon")("ngStyle", child_r1.iconStyle);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 17);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(5).$implicit;
    ɵɵproperty("styleClass", "p-panelmenu-icon")("ngStyle", child_r1.iconStyle);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 16);
    ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.expanded);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !child_r1.expanded);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10);
    ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_2_Template, 1, 0, null, 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r7 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r7.panelMenu.submenuIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r7.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", child_r1.icon)("ngStyle", child_r1.iconStyle);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(child_r1.label);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", child_r1.label, ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", child_r1.badgeStyleClass);
    ɵɵadvance(1);
    ɵɵtextInterpolate(child_r1.badge);
  }
}
var _c0 = function(a0) {
  return {
    "p-disabled": a0
  };
};
function PanelMenuSub_ng_template_1_li_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 9);
    ɵɵlistener("keydown", function PanelMenuSub_ng_template_1_li_1_a_1_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r25 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r25.onItemKeyDown($event));
    })("click", function PanelMenuSub_ng_template_1_li_1_a_1_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r26);
      const child_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r27 = ɵɵnextContext();
      return ɵɵresetView(ctx_r27.handleClick($event, child_r1));
    });
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_ng_container_1_Template, 3, 2, "ng-container", 10);
    ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_1_span_2_Template, 1, 2, "span", 11);
    ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_1_span_3_Template, 2, 1, "span", 12);
    ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 13, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PanelMenuSub_ng_template_1_li_1_a_1_span_6_Template, 2, 2, "span", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r10 = ɵɵreference(5);
    const child_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c0, child_r1.disabled))("target", child_r1.target);
    ɵɵattribute("href", child_r1.url, ɵɵsanitizeUrl)("tabindex", !ctx_r4.item.expanded || !ctx_r4.parentExpanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("title", child_r1.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.items);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r10);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", child_r1.badge);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 17);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(5).$implicit;
    ɵɵproperty("styleClass", "p-panelmenu-icon")("ngStyle", child_r1.iconStyle);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 17);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(5).$implicit;
    ɵɵproperty("styleClass", "p-panelmenu-icon")("ngStyle", child_r1.iconStyle);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 16);
    ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.expanded);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !child_r1.expanded);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 10);
    ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_2_Template, 1, 0, null, 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r30 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r30.panelMenu.submenuIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r30.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", child_r1.icon)("ngStyle", child_r1.iconStyle);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 19);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(child_r1.label);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 20);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", child_r1.label, ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_1_li_1_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 21);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", child_r1.badgeStyleClass);
    ɵɵadvance(1);
    ɵɵtextInterpolate(child_r1.badge);
  }
}
var _c1 = function() {
  return {
    exact: false
  };
};
function PanelMenuSub_ng_template_1_li_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 22);
    ɵɵlistener("keydown", function PanelMenuSub_ng_template_1_li_1_a_2_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r49);
      const ctx_r48 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r48.onItemKeyDown($event));
    })("click", function PanelMenuSub_ng_template_1_li_1_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r49);
      const child_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r50 = ɵɵnextContext();
      return ɵɵresetView(ctx_r50.handleClick($event, child_r1));
    });
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_2_ng_container_1_Template, 3, 2, "ng-container", 10);
    ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_span_2_Template, 1, 2, "span", 11);
    ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_a_2_span_3_Template, 2, 1, "span", 12);
    ɵɵtemplate(4, PanelMenuSub_ng_template_1_li_1_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 23, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PanelMenuSub_ng_template_1_li_1_a_2_span_6_Template, 2, 2, "span", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r33 = ɵɵreference(5);
    const child_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("routerLink", child_r1.routerLink)("queryParams", child_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", child_r1.routerLinkActiveOptions || ɵɵpureFunction0(21, _c1))("ngClass", ɵɵpureFunction1(22, _c0, child_r1.disabled))("target", child_r1.target)("fragment", child_r1.fragment)("queryParamsHandling", child_r1.queryParamsHandling)("preserveFragment", child_r1.preserveFragment)("skipLocationChange", child_r1.skipLocationChange)("replaceUrl", child_r1.replaceUrl)("state", child_r1.state);
    ɵɵattribute("tabindex", !ctx_r5.item.expanded || !ctx_r5.parentExpanded ? null : child_r1.disabled ? null : "0")("id", child_r1.id)("aria-expanded", child_r1.expanded)("title", child_r1.title);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.items);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.escape !== false)("ngIfElse", _r33);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", child_r1.badge);
  }
}
function PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-panelMenuSub", 24);
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("item", child_r1)("parentExpanded", ctx_r6.expanded && ctx_r6.parentExpanded)("expanded", child_r1.expanded)("transitionOptions", ctx_r6.transitionOptions);
  }
}
function PanelMenuSub_ng_template_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 5);
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_a_1_Template, 7, 14, "a", 6);
    ɵɵtemplate(2, PanelMenuSub_ng_template_1_li_1_a_2_Template, 7, 24, "a", 7);
    ɵɵtemplate(3, PanelMenuSub_ng_template_1_li_1_p_panelMenuSub_3_Template, 1, 4, "p-panelMenuSub", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const child_r1 = ɵɵnextContext().$implicit;
    ɵɵclassProp("p-hidden", child_r1.visible === false);
    ɵɵproperty("ngClass", child_r1.styleClass)("ngStyle", child_r1.style)("tooltipOptions", child_r1.tooltipOptions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !child_r1.routerLink);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.routerLink);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", child_r1.items);
  }
}
function PanelMenuSub_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_1_li_0_Template, 1, 0, "li", 2);
    ɵɵtemplate(1, PanelMenuSub_ng_template_1_li_1_Template, 4, 8, "li", 3);
  }
  if (rf & 2) {
    const child_r1 = ctx.$implicit;
    ɵɵproperty("ngIf", child_r1.separator);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !child_r1.separator);
  }
}
var _c2 = function(a1, a2) {
  return {
    "p-submenu-list": true,
    "p-panelmenu-root-submenu": a1,
    "p-submenu-expanded": a2
  };
};
function PanelMenu_ng_container_1_div_1_a_2_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-panelmenu-icon");
  }
}
function PanelMenu_ng_container_1_div_1_a_2_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-panelmenu-icon");
  }
}
function PanelMenu_ng_container_1_div_1_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_1_div_1_a_2_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 15);
    ɵɵtemplate(2, PanelMenu_ng_container_1_div_1_a_2_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.expanded);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !item_r1.expanded);
  }
}
function PanelMenu_ng_container_1_div_1_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_1_div_1_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_1_div_1_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_1_div_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_1_div_1_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9);
    ɵɵtemplate(2, PanelMenu_ng_container_1_div_1_a_2_ng_container_1_2_Template, 1, 0, null, 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r8.submenuIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r8.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_1_div_1_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r1.icon)("ngStyle", item_r1.iconStyle);
  }
}
function PanelMenu_ng_container_1_div_1_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r1.label);
  }
}
function PanelMenu_ng_container_1_div_1_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", item_r1.label, ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_1_div_1_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r1.badgeStyleClass);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r1.badge);
  }
}
function PanelMenu_ng_container_1_div_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 8);
    ɵɵlistener("click", function PanelMenu_ng_container_1_div_1_a_2_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r26);
      const item_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r24 = ɵɵnextContext();
      return ɵɵresetView(ctx_r24.handleClick($event, item_r1));
    })("keydown", function PanelMenu_ng_container_1_div_1_a_2_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r26);
      const ctx_r27 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r27.onItemKeyDown($event));
    });
    ɵɵtemplate(1, PanelMenu_ng_container_1_div_1_a_2_ng_container_1_Template, 3, 2, "ng-container", 9);
    ɵɵtemplate(2, PanelMenu_ng_container_1_div_1_a_2_span_2_Template, 1, 2, "span", 10);
    ɵɵtemplate(3, PanelMenu_ng_container_1_div_1_a_2_span_3_Template, 2, 1, "span", 11);
    ɵɵtemplate(4, PanelMenu_ng_container_1_div_1_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PanelMenu_ng_container_1_div_1_a_2_span_6_Template, 2, 2, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r11 = ɵɵreference(5);
    const item_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("target", item_r1.target);
    ɵɵattribute("href", item_r1.url, ɵɵsanitizeUrl)("tabindex", item_r1.disabled ? null : "0")("id", item_r1.id)("title", item_r1.title)("aria-expanded", item_r1.expanded)("id", item_r1.id + "_header")("aria-controls", item_r1.id + "_content");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.items);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r11);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r1.badge);
  }
}
function PanelMenu_ng_container_1_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-panelmenu-icon");
  }
}
function PanelMenu_ng_container_1_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 16);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-panelmenu-icon");
  }
}
function PanelMenu_ng_container_1_div_1_a_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_1_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 15);
    ɵɵtemplate(2, PanelMenu_ng_container_1_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(4).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.expanded);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !item_r1.expanded);
  }
}
function PanelMenu_ng_container_1_div_1_a_3_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_1_div_1_a_3_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_1_div_1_a_3_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_1_div_1_a_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_1_div_1_a_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 9);
    ɵɵtemplate(2, PanelMenu_ng_container_1_div_1_a_3_ng_container_1_2_Template, 1, 0, null, 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r29.submenuIconTemplate);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r29.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_1_div_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 17);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r1.icon)("ngStyle", item_r1.iconStyle);
  }
}
function PanelMenu_ng_container_1_div_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 18);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r1.label);
  }
}
function PanelMenu_ng_container_1_div_1_a_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("innerHTML", item_r1.label, ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_1_div_1_a_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(3).$implicit;
    ɵɵproperty("ngClass", item_r1.badgeStyleClass);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r1.badge);
  }
}
function PanelMenu_ng_container_1_div_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "a", 21);
    ɵɵlistener("click", function PanelMenu_ng_container_1_div_1_a_3_Template_a_click_0_listener($event) {
      ɵɵrestoreView(_r47);
      const item_r1 = ɵɵnextContext(2).$implicit;
      const ctx_r45 = ɵɵnextContext();
      return ɵɵresetView(ctx_r45.handleClick($event, item_r1));
    })("keydown", function PanelMenu_ng_container_1_div_1_a_3_Template_a_keydown_0_listener($event) {
      ɵɵrestoreView(_r47);
      const ctx_r48 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r48.onItemKeyDown($event));
    });
    ɵɵtemplate(1, PanelMenu_ng_container_1_div_1_a_3_ng_container_1_Template, 3, 2, "ng-container", 9);
    ɵɵtemplate(2, PanelMenu_ng_container_1_div_1_a_3_span_2_Template, 1, 2, "span", 10);
    ɵɵtemplate(3, PanelMenu_ng_container_1_div_1_a_3_span_3_Template, 2, 1, "span", 11);
    ɵɵtemplate(4, PanelMenu_ng_container_1_div_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 22, ɵɵtemplateRefExtractor);
    ɵɵtemplate(6, PanelMenu_ng_container_1_div_1_a_3_span_6_Template, 2, 2, "span", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r32 = ɵɵreference(5);
    const item_r1 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("routerLink", item_r1.routerLink)("queryParams", item_r1.queryParams)("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", item_r1.routerLinkActiveOptions || ɵɵpureFunction0(19, _c1))("target", item_r1.target)("fragment", item_r1.fragment)("queryParamsHandling", item_r1.queryParamsHandling)("preserveFragment", item_r1.preserveFragment)("skipLocationChange", item_r1.skipLocationChange)("replaceUrl", item_r1.replaceUrl)("state", item_r1.state);
    ɵɵattribute("title", item_r1.title)("id", item_r1.id)("tabindex", item_r1.disabled ? null : "0");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.items);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.icon);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.escape !== false)("ngIfElse", _r32);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", item_r1.badge);
  }
}
var _c3 = function(a0) {
  return {
    "p-panelmenu-expanded": a0
  };
};
function PanelMenu_ng_container_1_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 23);
    ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_1_div_1_div_4_Template_div_animation_rootItem_done_0_listener() {
      ɵɵrestoreView(_r51);
      const ctx_r50 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r50.onToggleDone());
    });
    ɵɵelementStart(1, "div", 24);
    ɵɵelement(2, "p-panelMenuSub", 25);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(9, _c3, item_r1.expanded))("@rootItem", ctx_r7.getAnimation(item_r1));
    ɵɵadvance(1);
    ɵɵattribute("id", item_r1.id + "_content")("aria-labelledby", item_r1.id + "_header");
    ɵɵadvance(1);
    ɵɵproperty("item", item_r1)("parentExpanded", item_r1.expanded)("expanded", true)("transitionOptions", ctx_r7.transitionOptions)("root", true);
  }
}
var _c4 = function(a1, a2) {
  return {
    "p-component p-panelmenu-header": true,
    "p-highlight": a1,
    "p-disabled": a2
  };
};
function PanelMenu_ng_container_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtemplate(2, PanelMenu_ng_container_1_div_1_a_2_Template, 7, 13, "a", 5);
    ɵɵtemplate(3, PanelMenu_ng_container_1_div_1_a_3_Template, 7, 20, "a", 6);
    ɵɵelementEnd();
    ɵɵtemplate(4, PanelMenu_ng_container_1_div_1_div_4_Template, 3, 11, "div", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    ɵɵadvance(1);
    ɵɵclassMap(item_r1.styleClass);
    ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c4, item_r1.expanded, item_r1.disabled))("ngStyle", item_r1.style)("tooltipOptions", item_r1.tooltipOptions);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !item_r1.routerLink);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.routerLink);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", item_r1.items);
  }
}
function PanelMenu_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_1_div_1_Template, 5, 11, "div", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.visible(item_r1));
  }
}
var BasePanelMenuItem = class {
  constructor(ref) {
    this.ref = ref;
  }
  handleClick(event, item) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    item.expanded = !item.expanded;
    this.ref.detectChanges();
    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
  }
};
var PanelMenuSub = class extends BasePanelMenuItem {
  constructor(ref, panelMenu) {
    super(ref);
    this.panelMenu = panelMenu;
  }
  onItemKeyDown(event) {
    let listItem = event.currentTarget;
    switch (event.code) {
      case "Space":
      case "Enter":
        if (listItem && !DomHandler.hasClass(listItem, "p-disabled")) {
          listItem.click();
        }
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  getAnimation() {
    return this.expanded ? {
      value: "visible",
      params: {
        transitionParams: this.transitionOptions,
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
};
PanelMenuSub.ɵfac = function PanelMenuSub_Factory(t) {
  return new (t || PanelMenuSub)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PanelMenu));
};
PanelMenuSub.ɵcmp = ɵɵdefineComponent({
  type: PanelMenuSub,
  selectors: [["p-panelMenuSub"]],
  hostAttrs: [1, "p-element"],
  inputs: {
    item: "item",
    expanded: "expanded",
    parentExpanded: "parentExpanded",
    transitionOptions: "transitionOptions",
    root: "root"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 6,
  consts: [["role", "tree", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "p-menu-separator", "role", "separator", 4, "ngIf"], ["class", "p-menuitem", "pTooltip", "", 3, "ngClass", "p-hidden", "ngStyle", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menu-separator"], ["pTooltip", "", 1, "p-menuitem", 3, "ngClass", "ngStyle", "tooltipOptions"], ["class", "p-menuitem-link", "role", "treeitem", 3, "ngClass", "target", "keydown", "click", 4, "ngIf"], ["class", "p-menuitem-link", "role", "treeitem", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "keydown", "click", 4, "ngIf"], [3, "item", "parentExpanded", "expanded", "transitionOptions", 4, "ngIf"], ["role", "treeitem", 1, "p-menuitem-link", 3, "ngClass", "target", "keydown", "click"], [4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "styleClass", "ngStyle"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], ["role", "treeitem", 1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "keydown", "click"], ["htmlRouteLabel", ""], [3, "item", "parentExpanded", "expanded", "transitionOptions"]],
  template: function PanelMenuSub_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ul", 0);
      ɵɵtemplate(1, PanelMenuSub_ng_template_1_Template, 2, 2, "ng-template", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵproperty("ngClass", ɵɵpureFunction2(3, _c2, ctx.root, ctx.expanded))("@submenu", ctx.getAnimation());
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.item.items);
    }
  },
  dependencies: function() {
    return [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, AngleDownIcon, AngleRightIcon, PanelMenuSub];
  },
  encapsulation: 2,
  data: {
    animation: [trigger("submenu", [state("hidden", style({
      height: "0"
    })), state("visible", style({
      height: "*"
    })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
  }
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuSub, [{
    type: Component,
    args: [{
      selector: "p-panelMenuSub",
      template: `
        <ul [ngClass]="{ 'p-submenu-list': true, 'p-panelmenu-root-submenu': root, 'p-submenu-expanded': expanded }" [@submenu]="getAnimation()" role="tree">
            <ng-template ngFor let-child [ngForOf]="item.items">
                <li *ngIf="child.separator" class="p-menu-separator" role="separator"></li>
                <li *ngIf="!child.separator" class="p-menuitem" [ngClass]="child.styleClass" [class.p-hidden]="child.visible === false" [ngStyle]="child.style" pTooltip [tooltipOptions]="child.tooltipOptions">
                    <a
                        *ngIf="!child.routerLink"
                        (keydown)="onItemKeyDown($event)"
                        [attr.href]="child.url"
                        class="p-menuitem-link"
                        [attr.tabindex]="!item.expanded || !parentExpanded ? null : child.disabled ? null : '0'"
                        [attr.id]="child.id"
                        [ngClass]="{ 'p-disabled': child.disabled }"
                        role="treeitem"
                        [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event, child)"
                        [target]="child.target"
                        [attr.title]="child.title"
                    >
                        <ng-container *ngIf="child.items">
                            <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                <AngleDownIcon [styleClass]="'p-panelmenu-icon'" *ngIf="child.expanded" [ngStyle]="child.iconStyle"/>
                                <AngleRightIcon [styleClass]="'p-panelmenu-icon'" *ngIf="!child.expanded" [ngStyle]="child.iconStyle"/>
                            </ng-container>
                            <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                        </ng-container>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlLabel">{{ child.label }}</span>
                        <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                    </a>
                    <a
                        *ngIf="child.routerLink"
                        (keydown)="onItemKeyDown($event)"
                        [routerLink]="child.routerLink"
                        [queryParams]="child.queryParams"
                        [routerLinkActive]="'p-menuitem-link-active'"
                        [routerLinkActiveOptions]="child.routerLinkActiveOptions || { exact: false }"
                        class="p-menuitem-link"
                        [ngClass]="{ 'p-disabled': child.disabled }"
                        [attr.tabindex]="!item.expanded || !parentExpanded ? null : child.disabled ? null : '0'"
                        [attr.id]="child.id"
                        role="treeitem"
                        [attr.aria-expanded]="child.expanded"
                        (click)="handleClick($event, child)"
                        [target]="child.target"
                        [attr.title]="child.title"
                        [fragment]="child.fragment"
                        [queryParamsHandling]="child.queryParamsHandling"
                        [preserveFragment]="child.preserveFragment"
                        [skipLocationChange]="child.skipLocationChange"
                        [replaceUrl]="child.replaceUrl"
                        [state]="child.state"
                    >
                        <ng-container *ngIf="child.items">
                            <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                <AngleDownIcon *ngIf="child.expanded" [styleClass]="'p-panelmenu-icon'" [ngStyle]="child.iconStyle"/>
                                <AngleRightIcon *ngIf="!child.expanded" [styleClass]="'p-panelmenu-icon'" [ngStyle]="child.iconStyle"/>
                            </ng-container>
                            <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                        </ng-container>
                        <span class="p-menuitem-icon" [ngClass]="child.icon" *ngIf="child.icon" [ngStyle]="child.iconStyle"></span>
                        <span class="p-menuitem-text" *ngIf="child.escape !== false; else htmlRouteLabel">{{ child.label }}</span>
                        <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="child.label"></span></ng-template>
                        <span class="p-menuitem-badge" *ngIf="child.badge" [ngClass]="child.badgeStyleClass">{{ child.badge }}</span>
                    </a>
                    <p-panelMenuSub [item]="child" [parentExpanded]="expanded && parentExpanded" [expanded]="child.expanded" [transitionOptions]="transitionOptions" *ngIf="child.items"></p-panelMenuSub>
                </li>
            </ng-template>
        </ul>
    `,
      animations: [trigger("submenu", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: PanelMenu
    }];
  }, {
    item: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    parentExpanded: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    root: [{
      type: Input
    }]
  });
})();
var PanelMenu = class extends BasePanelMenuItem {
  constructor(ref) {
    super(ref);
    this.multiple = true;
    this.transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this.submenuIconTemplate = item.template;
          break;
      }
    });
  }
  collapseAll() {
    for (let item of this.model) {
      if (item.expanded) {
        item.expanded = false;
      }
    }
  }
  handleClick(event, item) {
    if (!this.multiple) {
      for (let modelItem of this.model) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    this.animating = true;
    super.handleClick(event, item);
  }
  onToggleDone() {
    this.animating = false;
  }
  onItemKeyDown(event) {
    let listItem = event.currentTarget;
    switch (event.code) {
      case "Space":
      case "Enter":
        if (listItem && !DomHandler.hasClass(listItem, "p-disabled")) {
          listItem.click();
        }
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  visible(item) {
    return item.visible !== false;
  }
  getAnimation(item) {
    return item.expanded ? {
      value: "visible",
      params: {
        transitionParams: this.animating ? this.transitionOptions : "0ms",
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
};
PanelMenu.ɵfac = function PanelMenu_Factory(t) {
  return new (t || PanelMenu)(ɵɵdirectiveInject(ChangeDetectorRef));
};
PanelMenu.ɵcmp = ɵɵdefineComponent({
  type: PanelMenu,
  selectors: [["p-panelMenu"]],
  contentQueries: function PanelMenu_ContentQueries(rf, ctx, dirIndex) {
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
    model: "model",
    style: "style",
    styleClass: "styleClass",
    multiple: "multiple",
    transitionOptions: "transitionOptions"
  },
  features: [ɵɵInheritDefinitionFeature],
  decls: 2,
  vars: 5,
  consts: [[3, "ngStyle", "ngClass"], [4, "ngFor", "ngForOf"], ["class", "p-panelmenu-panel", 4, "ngIf"], [1, "p-panelmenu-panel"], ["pTooltip", "", 3, "ngClass", "ngStyle", "tooltipOptions"], ["class", "p-panelmenu-header-link", 3, "target", "click", "keydown", 4, "ngIf"], ["class", "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown", 4, "ngIf"], ["class", "p-toggleable-content", 3, "ngClass", 4, "ngIf"], [1, "p-panelmenu-header-link", 3, "target", "click", "keydown"], [4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-panelmenu-header-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "click", "keydown"], ["htmlRouteLabel", ""], [1, "p-toggleable-content", 3, "ngClass"], ["role", "region", 1, "p-panelmenu-content"], [3, "item", "parentExpanded", "expanded", "transitionOptions", "root"]],
  template: function PanelMenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, PanelMenu_ng_container_1_Template, 2, 1, "ng-container", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.styleClass);
      ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
      ɵɵadvance(1);
      ɵɵproperty("ngForOf", ctx.model);
    }
  },
  dependencies: function() {
    return [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, ChevronDownIcon, ChevronRightIcon, PanelMenuSub];
  },
  styles: [".p-panelmenu .p-panelmenu-header-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}\n"],
  encapsulation: 2,
  data: {
    animation: [trigger("rootItem", [state("hidden", style({
      height: "0"
    })), state("visible", style({
      height: "*"
    })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
  },
  changeDetection: 0
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenu, [{
    type: Component,
    args: [{
      selector: "p-panelMenu",
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-panelmenu p-component'">
            <ng-container *ngFor="let item of model; let f = first; let l = last">
                <div class="p-panelmenu-panel" *ngIf="visible(item)">
                    <div [ngClass]="{ 'p-component p-panelmenu-header': true, 'p-highlight': item.expanded, 'p-disabled': item.disabled }" [class]="item.styleClass" [ngStyle]="item.style" pTooltip [tooltipOptions]="item.tooltipOptions">
                        <a
                            *ngIf="!item.routerLink"
                            [attr.href]="item.url"
                            (click)="handleClick($event, item)"
                            (keydown)="onItemKeyDown($event)"
                            [attr.tabindex]="item.disabled ? null : '0'"
                            [attr.id]="item.id"
                            [target]="item.target"
                            [attr.title]="item.title"
                            class="p-panelmenu-header-link"
                            [attr.aria-expanded]="item.expanded"
                            [attr.id]="item.id + '_header'"
                            [attr.aria-controls]="item.id + '_content'"
                        >
                            <!--
                                <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{ 'pi-chevron-right': !item.expanded, 'pi-chevron-down': item.expanded }"></span>
                             -->
                            <ng-container *ngIf="item.items">
                                <ng-container *ngIf="!submenuIconTemplate">
                                    <ChevronDownIcon [styleClass]="'p-panelmenu-icon'" *ngIf="item.expanded" />
                                    <ChevronRightIcon [styleClass]="'p-panelmenu-icon'" *ngIf="!item.expanded" />
                                </ng-container>
                                <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                            </ng-container>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
                            <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                            <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ item.badge }}</span>
                        </a>
                        <a
                            *ngIf="item.routerLink"
                            [routerLink]="item.routerLink"
                            [queryParams]="item.queryParams"
                            [routerLinkActive]="'p-menuitem-link-active'"
                            [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                            (click)="handleClick($event, item)"
                            (keydown)="onItemKeyDown($event)"
                            [target]="item.target"
                            [attr.title]="item.title"
                            class="p-panelmenu-header-link"
                            [attr.id]="item.id"
                            [attr.tabindex]="item.disabled ? null : '0'"
                            [fragment]="item.fragment"
                            [queryParamsHandling]="item.queryParamsHandling"
                            [preserveFragment]="item.preserveFragment"
                            [skipLocationChange]="item.skipLocationChange"
                            [replaceUrl]="item.replaceUrl"
                            [state]="item.state"
                        >

                            <!-- 
                                <span *ngIf="item.items" class="p-panelmenu-icon pi" [ngClass]="{ 'pi-chevron-right': !item.expanded, 'pi-chevron-down': item.expanded }"></span>
                            -->
                            <ng-container *ngIf="item.items">
                                <ng-container *ngIf="!submenuIconTemplate">
                                    <ChevronDownIcon [styleClass]="'p-panelmenu-icon'" *ngIf="item.expanded" />
                                    <ChevronRightIcon [styleClass]="'p-panelmenu-icon'" *ngIf="!item.expanded" />
                                </ng-container>
                                <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                            </ng-container>
                            <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="item.iconStyle"></span>
                            <span class="p-menuitem-text" *ngIf="item.escape !== false; else htmlRouteLabel">{{ item.label }}</span>
                            <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="item.label"></span></ng-template>
                            <span class="p-menuitem-badge" *ngIf="item.badge" [ngClass]="item.badgeStyleClass">{{ item.badge }}</span>
                        </a>
                    </div>
                    <div *ngIf="item.items" class="p-toggleable-content" [ngClass]="{ 'p-panelmenu-expanded': item.expanded }" [@rootItem]="getAnimation(item)" (@rootItem.done)="onToggleDone()">
                        <div class="p-panelmenu-content" role="region" [attr.id]="item.id + '_content'" [attr.aria-labelledby]="item.id + '_header'">
                            <p-panelMenuSub [item]="item" [parentExpanded]="item.expanded" [expanded]="true" [transitionOptions]="transitionOptions" [root]="true"></p-panelMenuSub>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
      animations: [trigger("rootItem", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: [".p-panelmenu .p-panelmenu-header-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-link:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}\n"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }];
  }, {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var PanelMenuModule = class {
};
PanelMenuModule.ɵfac = function PanelMenuModule_Factory(t) {
  return new (t || PanelMenuModule)();
};
PanelMenuModule.ɵmod = ɵɵdefineNgModule({
  type: PanelMenuModule,
  declarations: [PanelMenu, PanelMenuSub],
  imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon],
  exports: [PanelMenu, RouterModule, TooltipModule, SharedModule]
});
PanelMenuModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon, RouterModule, TooltipModule, SharedModule]
});
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon],
      exports: [PanelMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [PanelMenu, PanelMenuSub]
    }]
  }], null, null);
})();
export {
  BasePanelMenuItem,
  PanelMenu,
  PanelMenuModule,
  PanelMenuSub
};
//# sourceMappingURL=primeng_panelmenu.js.map
