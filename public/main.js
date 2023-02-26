"use strict";
(self["webpackChunkbot_config_generator"] = self["webpackChunkbot_config_generator"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _models_btn_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/btn.model */ 7021);
/* harmony import */ var _modules_button_components_create_button_popup_create_button_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/button/components/create-button-popup/create-button-popup.component */ 7002);
/* harmony import */ var _models_dialog_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/dialog.model */ 2144);
/* harmony import */ var _common_helpers_update_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/helpers/update.helper */ 7074);
/* harmony import */ var _modules_menu_components_create_menu_popup_create_menu_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu/components/create-menu-popup/create-menu-popup.component */ 589);
/* harmony import */ var _modules_comfirmation_components_remove_confirmation_popup_remove_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comfirmation/components/remove-confirmation-popup/remove-confirmation-popup.component */ 1208);
/* harmony import */ var _modules_snackbar_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/snackbar/components/snackbar/snackbar.component */ 4122);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.clonedeep */ 6428);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_config_dialog_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/config/dialog.config */ 2690);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _modules_menu_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/menu/components/menu/menu.component */ 6762);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _modules_button_button_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/button/button.directive */ 3334);

















function AppComponent_app_menu_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "app-menu", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("addButton", function AppComponent_app_menu_16_Template_app_menu_addButton_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const menu_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r2.onOpenButtonCreationPopup(menu_r1.id));
    })("openButtonEditingPopup", function AppComponent_app_menu_16_Template_app_menu_openButtonEditingPopup_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const menu_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.onOpenButtonEditingPopup(menu_r1.id, $event));
    })("openMenuEditingPopup", function AppComponent_app_menu_16_Template_app_menu_openMenuEditingPopup_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const menu_r1 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r5.onOpenMenuEditingPopup(menu_r1.id));
    })("removeMenu", function AppComponent_app_menu_16_Template_app_menu_removeMenu_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const menu_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r6.onRemoveMenu(menu_r1.id));
    })("removeButton", function AppComponent_app_menu_16_Template_app_menu_removeButton_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r3);
      const menu_r1 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r7.onRemoveButton(menu_r1.id, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const menu_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("caption", menu_r1.caption)("buttons", menu_r1.btn_elements);
  }
}
const MENUS = "MENUS_MAP";
class AppComponent {
  constructor(dialog, snackBar) {
    this.dialog = dialog;
    this.snackBar = snackBar;
    this.menusMap = new Map();
    this.dialogConfig = _common_config_dialog_config__WEBPACK_IMPORTED_MODULE_8__.dialogConfig;
  }
  ngOnInit() {
    this.loadMenusFromStorage();
    console.log("Menus was loaded from localStorage");
  }
  get menus() {
    return [...this.menusMap.values()];
  }
  copyJSONtoClipboard() {
    const menus = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_7___default()(this.getMenus());
    menus.flatMap(menu => menu.btn_elements).forEach(button => {
      button.type = this.translateButtonType(button.type);
      button.type += `_${button.id}`;
    });
    try {
      globalThis.navigator.clipboard.writeText(JSON.stringify(menus, undefined, 2));
      this.openNotification("JSON скопирован в буффер обмена");
    } catch (error) {
      this.openNotification("Что-то пошло не так");
      console.error("Error is", {
        error
      });
    }
  }
  onOpenMenuCreationPopup() {
    this.openMenuCreationPopup();
  }
  onOpenMenuEditingPopup(menuId) {
    this.openMenuCreationPopup(menuId);
  }
  onOpenButtonCreationPopup(menuId) {
    this.openButtonCreationPopup(menuId);
  }
  onOpenButtonEditingPopup(menuId, buttonId) {
    this.openButtonCreationPopup(menuId, buttonId);
  }
  clearStorage() {
    window.localStorage.clear();
  }
  onRemoveButton(menuId, buttonId) {
    const button = this.getButton(menuId, buttonId);
    if (button) {
      this.openRemoveConfirmationPopup(button, "button", () => {
        this.removeButton(menuId, buttonId);
        this.openNotification(`Кнопка "${button.caption}" удалена`);
      });
    }
  }
  onRemoveMenu(menuId) {
    const menu = this.getMenu(menuId);
    if (menu) {
      this.openRemoveConfirmationPopup(menu, "menu", () => {
        this.removeMenu(menuId);
        this.openNotification(`Меню "${menu.caption}" удалено`);
      });
    }
  }
  openRemoveConfirmationPopup(removingItem, entityName, whenRemoveClicked) {
    const dialogRef = this.dialog.open(_modules_comfirmation_components_remove_confirmation_popup_remove_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_5__.RemoveConfirmationPopupComponent, {
      ...this.dialogConfig,
      data: {
        mode: _models_dialog_model__WEBPACK_IMPORTED_MODULE_2__.PopupMode.REMOVE,
        [entityName]: removingItem
      }
    });
    dialogRef.afterClosed().subscribe(isRemoved => {
      if (isRemoved) {
        whenRemoveClicked();
      }
    });
  }
  openMenuCreationPopup(menuId) {
    const editMode = Boolean(menuId);
    const menu = this.getMenu(menuId);
    const dialogRef = this.dialog.open(_modules_menu_components_create_menu_popup_create_menu_popup_component__WEBPACK_IMPORTED_MODULE_4__.CreateMenuPopupComponent, {
      ...this.dialogConfig,
      data: {
        mode: editMode ? _models_dialog_model__WEBPACK_IMPORTED_MODULE_2__.PopupMode.EDIT : _models_dialog_model__WEBPACK_IMPORTED_MODULE_2__.PopupMode.CREATION,
        menu
      }
    });
    dialogRef.afterClosed().subscribe(newMenu => {
      if (!newMenu) {
        return;
      }
      if (editMode && menu) {
        this.menusMap.set(newMenu.id, _common_helpers_update_helper__WEBPACK_IMPORTED_MODULE_3__.UpdateHelper.update(menu, newMenu.parameters));
        this.openNotification(`Меню "${menu.caption}" изменено`);
      } else {
        this.menusMap.set(newMenu.id, {
          id: newMenu.id,
          ...newMenu.parameters
        });
        this.openNotification(`Меню "${newMenu.parameters.caption}" создано`);
      }
      this.save();
    });
  }
  openButtonCreationPopup(menuId, buttonId) {
    const editMode = Boolean(buttonId);
    const menu = this.getMenu(menuId);
    const buttons = menu.btn_elements;
    const buttonIndex = buttons.findIndex(button => button.id === buttonId);
    const button = buttons[buttonIndex];
    const dialogRef = this.dialog.open(_modules_button_components_create_button_popup_create_button_popup_component__WEBPACK_IMPORTED_MODULE_1__.CreateButtonPopupComponent, {
      ...this.dialogConfig,
      data: {
        mode: editMode ? _models_dialog_model__WEBPACK_IMPORTED_MODULE_2__.PopupMode.EDIT : _models_dialog_model__WEBPACK_IMPORTED_MODULE_2__.PopupMode.CREATION,
        button,
        menus: this.getMenus(),
        currentMenu: menu
      }
    });
    dialogRef.afterClosed().subscribe(newButton => {
      if (!newButton) {
        return;
      }
      if (editMode) {
        if (buttonIndex !== -1) {
          buttons[buttonIndex] = _common_helpers_update_helper__WEBPACK_IMPORTED_MODULE_3__.UpdateHelper.update(button, newButton?.parameters);
          this.openNotification(`Кнопка "${button.caption}" изменена`);
        }
      } else {
        buttons.push({
          id: newButton.id,
          ...newButton.parameters
        });
        this.openNotification(`Кнопка "${newButton.parameters.caption}" создана`);
      }
      this.save();
    });
  }
  getButton(menuId, buttonId) {
    const menu = this.getMenu(menuId);
    return menu ? menu.btn_elements.find(button => button.id === buttonId) : null;
  }
  getMenu(menuId) {
    return this.menusMap.get(menuId);
  }
  getMenus() {
    return [...this.menusMap.values()];
  }
  removeButton(menuId, buttonId) {
    const menu = this.getMenu(menuId);
    const index = menu.btn_elements.findIndex(btn => btn.id === buttonId);
    menu.btn_elements.splice(index, 1);
    this.save();
  }
  removeMenu(menuId) {
    this.menusMap.delete(menuId);
    this.clearAllMenuReferences(menuId);
    this.save();
  }
  loadMenusFromStorage() {
    const entriesString = window.localStorage.getItem(MENUS) ?? "[]";
    const entries = JSON.parse(entriesString);
    this.menusMap = new Map(entries);
  }
  clearAllMenuReferences(menuId) {
    for (const menu of this.menusMap.values()) {
      menu.btn_elements.forEach(button => {
        if (button.src === menuId) {
          button.src = "";
        }
      });
    }
  }
  save() {
    const menusEntries = [...this.menusMap.entries()];
    window.localStorage.setItem(MENUS, JSON.stringify(menusEntries));
  }
  translateButtonType(value) {
    switch (value) {
      case _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MENU:
        return _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonTranslatedType.MENU;
      case _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.TEXT:
        return _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonTranslatedType.TEXT;
      case _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.LINK:
        return _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonTranslatedType.LINK;
      case _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.FILE:
        return _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonTranslatedType.FILE;
      case _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MAIL:
        return _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonTranslatedType.MAIL;
      case _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.CSV:
        return _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonTranslatedType.CSV;
    }
    return value;
  }
  openNotification(message) {
    this.snackBar.openFromComponent(_modules_snackbar_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_6__.SnackbarComponent, {
      data: {
        message
      },
      horizontalPosition: "left",
      verticalPosition: "bottom",
      duration: 5000,
      panelClass: "notification"
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBar));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 17,
  vars: 1,
  consts: [[1, "wrapper"], [1, "actions"], ["mat-button", "", "button", "", 3, "click"], [1, "container", "f-wrap", "center"], ["class", "menu", 3, "caption", "buttons", "addButton", "openButtonEditingPopup", "openMenuEditingPopup", "removeMenu", "removeButton", 4, "ngFor", "ngForOf"], [1, "menu", 3, "caption", "buttons", "addButton", "openButtonEditingPopup", "openMenuEditingPopup", "removeMenu", "removeButton"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() {
        return ctx.onOpenMenuCreationPopup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0431\u043B\u043E\u043A \u043A\u043D\u043E\u043F\u043E\u043A ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
        return ctx.copyJSONtoClipboard();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "content_copy");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " \u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C JSON ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() {
        return ctx.clearStorage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, " \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0435 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, AppComponent_app_menu_16_Template, 1, 2, "app-menu", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.menus);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _modules_menu_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__.MenuComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__.MatIcon, _modules_button_button_directive__WEBPACK_IMPORTED_MODULE_10__.ButtonDirective],
  styles: [".wrapper {\n  margin: 16px auto;\n  width: 100%;\n  height: calc(100vh - 32px);\n}\n.wrapper .actions {\n  display: flex;\n  justify-content: center;\n  column-gap: 16px;\n}\n@media (max-width: 610px) {\n  .wrapper .actions {\n    flex-direction: column;\n    align-items: center;\n  }\n  .wrapper .actions button {\n    min-width: 80%;\n  }\n  .wrapper .actions button + button {\n    margin-left: 0;\n    margin-top: 8px;\n  }\n}\n\n.container {\n  margin: 0 auto;\n  width: 80%;\n  display: flex;\n  column-gap: 16px;\n}\n\n.center {\n  justify-content: center;\n  align-items: center;\n}\n\n.f-wrap {\n  flex-wrap: wrap;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.menu {\n  margin-top: 16px;\n  width: 575px;\n}\n\n.mat-mdc-button {\n  background-color: #F0F1F3;\n}\n\n.notification {\n  --mdc-snackbar-container-color: #005ff9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vJUQwJUEwJUQwJTkwJUQwJTkxJUQwJTlFJUQwJUEyJUQwJTkwL2JvdC1jb25maWctZ2VuZXJhdG9yL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7QUNESjtBREdJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JFREM7QURBVDtBREdRO0VBTEo7SUFNUSxzQkFBQTtJQUNBLG1CQUFBO0VDQVY7RURFVTtJQUNJLGNBQUE7RUNBZDtFREdVO0lBQ0ksY0FBQTtJQUNBLGVFaEJQO0VEZVA7QUFDRjs7QURNQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCRXZCSztBRG9CVDs7QURNQTtFQUNJLHVCQUFBO0VBQ0EsbUJBQUE7QUNISjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLHNCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkV4Q0s7RUZ5Q0wsWUVsQ1M7QUQrQmI7O0FETUE7RUFDSSx5QkFBQTtBQ0hKOztBRE1BO0VBQ0ksdUNBQUE7QUNISiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi9hc3NldHMvc3R5bGVzL3ZhcnNcIjtcclxuXHJcbi53cmFwcGVyIHtcclxuICAgIG1hcmdpbjogJHNpemUtbSBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAkc2l6ZS1tICogMik7XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgY29sdW1uLWdhcDogJHNpemUtbTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbiArIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6ICRzaXplLXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGNvbHVtbi1nYXA6ICRzaXplLW07XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZi13cmFwIHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAkc2l6ZS1tO1xyXG4gICAgd2lkdGg6ICRjYXJkLXdpZHRoO1xyXG59XHJcblxyXG4ubWF0LW1kYy1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjFGMztcclxufVxyXG5cclxuLm5vdGlmaWNhdGlvbiB7XHJcbiAgICAtLW1kYy1zbmFja2Jhci1jb250YWluZXItY29sb3I6ICMwMDVmZjk7XHJcbn1cclxuIiwiLndyYXBwZXIge1xuICBtYXJnaW46IDE2cHggYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDMycHgpO1xufVxuLndyYXBwZXIgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sdW1uLWdhcDogMTZweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MTBweCkge1xuICAud3JhcHBlciAuYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC53cmFwcGVyIC5hY3Rpb25zIGJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA4MCU7XG4gIH1cbiAgLndyYXBwZXIgLmFjdGlvbnMgYnV0dG9uICsgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2x1bW4tZ2FwOiAxNnB4O1xufVxuXG4uY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubWVudSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHdpZHRoOiA1NzVweDtcbn1cblxuLm1hdC1tZGMtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjFGMztcbn1cblxuLm5vdGlmaWNhdGlvbiB7XG4gIC0tbWRjLXNuYWNrYmFyLWNvbnRhaW5lci1jb2xvcjogIzAwNWZmOTtcbn0iLCIkaGVhZGVyLWhlaWdodDogODBweDtcclxuJGZvb3Rlci1oZWlnaHQ6IDYwcHg7XHJcblxyXG4kc2l6ZS14czogNHB4O1xyXG4kc2l6ZS14eHM6IDJweDtcclxuJHNpemUtc3g6IDZweDtcclxuJHNpemUtczogOHB4O1xyXG4kc2l6ZS1zbTogMTBweDtcclxuJHNpemUtY29tbW9uOiAxMnB4O1xyXG4kc2l6ZS1tOiAxNnB4O1xyXG4kc2l6ZS1seDogMjBweDtcclxuJHNpemUtbDogMjRweDtcclxuJHNpemUteGw6IDMycHg7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiRjYXJkLXdpZHRoOiA1NzVweDtcclxuJGNhcmQtaGVpZ2h0OiA3MHZoO1xyXG5cclxuJHByaW1hcnktY29sb3I6ICMwMDVmZjk7XHJcbiR3YXJuLWNvbG9yOiAjZjM0ZDRkO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjZjBmMWYzO1xyXG4kYm94LXNoYWRvdzogMHB4IDBweCAxcHggLTFweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMXB4IDFweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCAzcHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu/menu.module */ 3988);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _modules_comfirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/comfirmation/confirmation.module */ 450);
/* harmony import */ var _modules_button_button_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/button/button.module */ 8107);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _modules_snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/snackbar/snackbar.module */ 7407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_2__.MenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _modules_comfirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_3__.ConfirmationModule, _modules_button_button_module__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, _modules_snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_5__.SnackbarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_2__.MenuModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBarModule, _modules_comfirmation_confirmation_module__WEBPACK_IMPORTED_MODULE_3__.ConfirmationModule, _modules_button_button_module__WEBPACK_IMPORTED_MODULE_4__.ButtonModule, _modules_snackbar_snackbar_module__WEBPACK_IMPORTED_MODULE_5__.SnackbarModule]
  });
})();

/***/ }),

/***/ 2690:
/*!************************************************!*\
  !*** ./src/app/common/config/dialog.config.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dialogConfig": () => (/* binding */ dialogConfig)
/* harmony export */ });
const dialogConfig = {
  minWidth: "40vw"
};

/***/ }),

/***/ 4150:
/*!**************************************************!*\
  !*** ./src/app/common/helpers/general.helper.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralHelper": () => (/* binding */ GeneralHelper)
/* harmony export */ });
class GeneralHelper {
  static isObject(value) {
    return value !== null && typeof value === "object";
  }
}

/***/ }),

/***/ 7074:
/*!*************************************************!*\
  !*** ./src/app/common/helpers/update.helper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateHelper": () => (/* binding */ UpdateHelper)
/* harmony export */ });
/* harmony import */ var _general_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.helper */ 4150);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.clonedeep */ 6428);
/* harmony import */ var lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1__);


const isObject = _general_helper__WEBPACK_IMPORTED_MODULE_0__.GeneralHelper.isObject;
const isArray = Array.isArray;
const isEntityObject = value => isObject(value) && Object.hasOwn(value, "id");
class UpdateHelper {
  static update(source, parameters) {
    if (!isObject(source) || !isObject(parameters)) {
      return source;
    }
    source = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(source);
    parameters = lodash_clonedeep__WEBPACK_IMPORTED_MODULE_1___default()(parameters);
    if (isArray(source) && isArray(parameters)) {
      return this.updateArray(source, parameters);
    }
    if (isObject(source) && isObject(parameters)) {
      return this.updateObject(source, parameters);
    }
    return parameters ? parameters : source;
  }
  static updateObject(source, parameters) {
    const result = source;
    Object.entries(parameters).forEach(([key, value]) => {
      const sourceValue = source[key];
      if (isArray(sourceValue) && isArray(value)) {
        result[key] = this.updateArray(sourceValue, value);
      } else if (isObject(sourceValue) && isObject(value)) {
        result[key] = this.updateObject(sourceValue, value);
      } else {
        result[key] = value;
      }
    });
    return result;
  }
  static updateArray(source, parameter) {
    if (!isArray(source) && !isArray(parameter)) {
      return undefined;
    }
    if (!isArray(source)) {
      return parameter;
    }
    if (!isArray(parameter)) {
      return source;
    }
    if (this.isArrayOfEntities(source) && this.isArrayOfEntities(parameter)) {
      const result = this.getMapFormEntitiesArray(source);
      parameter.forEach(entity => {
        if (entity) {
          const item = result.get(entity.id);
          if (!item) {
            result.set(entity.id, entity);
          } else {
            const updatedItem = this.update(item, entity);
            result.set(updatedItem.id, updatedItem);
          }
        }
      });
      return [...result.values()];
    }
    return parameter;
  }
  static isArrayOfEntities(array) {
    if (!isArray(array)) {
      return false;
    }
    if (array.length === 0) {
      return true;
    }
    return isEntityObject(array[0]);
  }
  static getMapFormEntitiesArray(array) {
    return array.reduce((map, item) => map.set(item.id, item), new Map());
  }
}

/***/ }),

/***/ 7021:
/*!*************************************!*\
  !*** ./src/app/models/btn.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonTranslatedType": () => (/* binding */ ButtonTranslatedType),
/* harmony export */   "ButtonType": () => (/* binding */ ButtonType)
/* harmony export */ });
var ButtonType;
(function (ButtonType) {
  ButtonType["MENU"] = "\u043C\u0435\u043D\u044E";
  ButtonType["LINK"] = "\u0441\u0441\u044B\u043B\u043A\u0430";
  ButtonType["FILE"] = "\u0444\u0430\u0439\u043B";
  ButtonType["MAIL"] = "\u043F\u043E\u0447\u0442\u0430";
  ButtonType["TEXT"] = "\u0442\u0435\u043A\u0441\u0442";
  ButtonType["CSV"] = "csv";
})(ButtonType || (ButtonType = {}));
var ButtonTranslatedType;
(function (ButtonTranslatedType) {
  ButtonTranslatedType["MENU"] = "menu";
  ButtonTranslatedType["LINK"] = "link";
  ButtonTranslatedType["FILE"] = "file";
  ButtonTranslatedType["MAIL"] = "mail";
  ButtonTranslatedType["TEXT"] = "text";
  ButtonTranslatedType["CSV"] = "csv";
})(ButtonTranslatedType || (ButtonTranslatedType = {}));

/***/ }),

/***/ 2144:
/*!****************************************!*\
  !*** ./src/app/models/dialog.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupMode": () => (/* binding */ PopupMode)
/* harmony export */ });
var PopupMode;
(function (PopupMode) {
  PopupMode["CREATION"] = "creation";
  PopupMode["EDIT"] = "edit";
  PopupMode["REMOVE"] = "remove";
})(PopupMode || (PopupMode = {}));

/***/ }),

/***/ 3334:
/*!****************************************************!*\
  !*** ./src/app/modules/button/button.directive.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonDirective": () => (/* binding */ ButtonDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ButtonDirective {
  constructor() {
    this.borderRadius = "6px";
    this.fontWeight = "400";
    this.letterSpacing = "normal";
    this.padding = "10px";
  }
  get bgColor() {
    if (!this.flat) {
      return "#F0F1F3";
    }
    return null;
  }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) {
  return new (t || ButtonDirective)();
};
ButtonDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ButtonDirective,
  selectors: [["", "button", ""]],
  hostVars: 10,
  hostBindings: function ButtonDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.bgColor)("border-radius", ctx.borderRadius)("font-weight", ctx.fontWeight)("letter-spacing", ctx.letterSpacing)("padding", ctx.padding);
    }
  },
  inputs: {
    flat: "flat"
  }
});

/***/ }),

/***/ 8107:
/*!*************************************************!*\
  !*** ./src/app/modules/button/button.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonModule": () => (/* binding */ ButtonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_create_button_popup_create_button_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/create-button-popup/create-button-popup.component */ 7002);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/button.component */ 7184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.directive */ 3334);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);


















class ButtonModule {}
ButtonModule.ɵfac = function ButtonModule_Factory(t) {
  return new (t || ButtonModule)();
};
ButtonModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ButtonModule
});
ButtonModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ButtonModule, {
    declarations: [_components_create_button_popup_create_button_popup_component__WEBPACK_IMPORTED_MODULE_0__.CreateButtonPopupComponent, _components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _button_directive__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_17__.CdkDrag, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule],
    exports: [_components_button_button_component__WEBPACK_IMPORTED_MODULE_1__.ButtonComponent, _button_directive__WEBPACK_IMPORTED_MODULE_2__.ButtonDirective]
  });
})();

/***/ }),

/***/ 7184:
/*!**********************************************************************!*\
  !*** ./src/app/modules/button/components/button/button.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": () => (/* binding */ ButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);






function ButtonComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: ", ctx_r0.buttonSrc, " ");
  }
}
class ButtonComponent {
  constructor() {
    this.buttonEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.buttonRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  onDeleteClick(event) {
    event.stopPropagation();
    this.buttonRemove.emit();
  }
  onEditClick(event) {
    event.stopPropagation();
    this.buttonEdit.emit();
  }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
  return new (t || ButtonComponent)();
};
ButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ButtonComponent,
  selectors: [["app-button"]],
  inputs: {
    type: "type",
    caption: "caption",
    buttonSrc: "buttonSrc",
    first: "first",
    last: "last"
  },
  outputs: {
    buttonEdit: "buttonEdit",
    buttonRemove: "buttonRemove"
  },
  decls: 13,
  vars: 7,
  consts: [["cdkDrag", "", "hideToggle", "", 1, "button-panel"], [3, "title"], ["mat-icon-button", "", "aria-label", "Edit icon", 1, "button-panel__action", 3, "click"], ["mat-icon-button", "", "aria-label", "Delete icon", 1, "button-panel__action", 3, "click"], ["matExpansionPanelContent", ""]],
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0)(1, "mat-expansion-panel-header")(2, "mat-panel-title", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-panel-description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_6_listener($event) {
        return ctx.onEditClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_9_listener($event) {
        return ctx.onDeleteClick($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ButtonComponent_ng_template_12_Template, 1, 1, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_first", ctx.first)("_last", ctx.last);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.caption);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.caption.length > 20 ? ctx.caption.slice(0, 20) + "..." : ctx.caption);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.type);
    }
  },
  dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelTitle, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelDescription, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__.MatExpansionPanelContent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__.CdkDrag],
  styles: [".button-panel[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n  box-shadow: none;\n  border: 1px solid #f0f1f3;\n}\n.button-panel._first[_ngcontent-%COMP%] {\n  border-radius: 4px 4px 0 0 !important;\n}\n.button-panel._last[_ngcontent-%COMP%] {\n  border-radius: 0 0 4px 4px !important;\n}\n.button-panel__action[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 18px !important;\n  width: 18px !important;\n  font-size: 18px !important;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  padding: 0 0 0 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9idXR0b24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vJUQwJUEwJUQwJTkwJUQwJTkxJUQwJTlFJUQwJUEyJUQwJTkwL2JvdC1jb25maWctZ2VuZXJhdG9yL3NyYy9hcHAvbW9kdWxlcy9idXR0b24vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDSEo7QURLSTtFQUNJLHFDQUFBO0FDSFI7QURNSTtFQUNJLHFDQUFBO0FDSlI7QURRUTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ05aOztBRFdBO0VBQ0ksbUJBQUE7QUNSSiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcnNcIjtcclxuXHJcbiRpY29uLXNpemU6IDE4cHg7XHJcblxyXG4uYnV0dG9uLXBhbmVsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG5cclxuICAgICYuX2ZpcnN0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgICYuX2xhc3Qge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYWN0aW9uIHtcclxuICAgICAgICAubWF0LWljb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6ICRpY29uLXNpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6ICRpY29uLXNpemUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkaWNvbi1zaXplICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMCAwIDAgJHNpemUtbDtcclxufVxyXG4iLCIuYnV0dG9uLXBhbmVsIHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMWYzO1xufVxuLmJ1dHRvbi1wYW5lbC5fZmlyc3Qge1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMCAhaW1wb3J0YW50O1xufVxuLmJ1dHRvbi1wYW5lbC5fbGFzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA0cHggNHB4ICFpbXBvcnRhbnQ7XG59XG4uYnV0dG9uLXBhbmVsX19hY3Rpb24gLm1hdC1pY29uIHtcbiAgaGVpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBwYWRkaW5nOiAwIDAgMCAyNHB4O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7002:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/button/components/create-button-popup/create-button-popup.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateButtonPopupComponent": () => (/* binding */ CreateButtonPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _models_btn_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/btn.model */ 7021);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _button_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../button.directive */ 3334);

















function CreateButtonPopupComponent_mat_chip_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-chip-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const buttonType_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matTooltip", ctx_r0.buttonTypeHints[buttonType_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](buttonType_r3);
  }
}
function CreateButtonPopupComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateButtonPopupComponent_mat_form_field_11_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function CreateButtonPopupComponent_mat_form_field_11_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateButtonPopupComponent_mat_form_field_11_mat_option_7_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const menu_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.setChosenMenu(menu_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const menu_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", menu_r8.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](menu_r8.caption);
  }
}
function CreateButtonPopupComponent_mat_form_field_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 5)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, CreateButtonPopupComponent_mat_form_field_11_mat_error_4_Template, 2, 0, "mat-error", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-autocomplete", null, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, CreateButtonPopupComponent_mat_form_field_11_mat_option_7_Template, 3, 2, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.labeles[ctx_r2.typeControl.value]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matAutocomplete", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.srcControl == null ? null : ctx_r2.srcControl.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.filteredMenus);
  }
}
class CreateButtonPopupComponent {
  get typeControl() {
    return this.formGroup.get("type");
  }
  get captionControl() {
    return this.formGroup.get("caption");
  }
  get srcControl() {
    return this.formGroup.get("src");
  }
  onDialogClick() {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.button);
    }
  }
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.buttonTypesEnum = _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType;
    this.buttonTypeHints = {
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MENU]: "Переход к другому блоку кнопок",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.LINK]: "Ссылка на ресурс",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.FILE]: "Загрузка файла",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MAIL]: "Почта",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.TEXT]: undefined,
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.CSV]: "Добавить CSV файл"
    };
    this.labeles = {
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MENU]: "Название блока",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.LINK]: "Адрес ссылки",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.FILE]: "Путь к файлу",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MAIL]: "Адрес получения",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.TEXT]: "Текст",
      [_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.CSV]: "Путь к файлу"
    };
    this.buttonTypes = Object.values(_models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType);
    this.editMode = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
  }
  ngOnInit() {
    const button = this.data.button ?? {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__["default"])()
    };
    this.menus = this.data.menus?.filter(menu => menu !== this.data.currentMenu) ?? [];
    this.editMode = Boolean(this.data.button);
    this.buttonId = button.id;
    if (this.isMenu(button.type)) {
      this.chosenMenu = this.menus.find(menu => menu.id === button.src);
    }
    const btnSource = this.isMenu(button.type) ? this.chosenMenu?.caption ?? "" : button.src;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
      caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(button.caption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      src: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(btnSource, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(button.type ?? _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MENU)
    });
    this.filterMenusForAutocomplete();
    this.formGroup.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$)).subscribe(() => {
      if (this.formGroup.value.type !== _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MENU) {
        this.chosenMenu = null;
      }
      this.updateButtonData();
      this.filterMenusForAutocomplete();
    });
    this.typeControl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.destroy$), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)()).subscribe(() => {
      this.srcControl.setValue("");
      this.srcControl.markAsUntouched();
      this.srcControl.markAsPristine();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  setChosenMenu(menu) {
    this.chosenMenu = menu;
    this.updateButtonData();
  }
  onCancelClick() {
    this.dialogRef.close();
  }
  filterMenusForAutocomplete() {
    const type = this.formGroup.get("type").value;
    if (type === _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MENU) {
      const value = this.formGroup.get("src").value ?? "";
      this.filteredMenus = this.menus.filter(menu => this.checkIncludes(menu.caption, value) || this.checkIncludes(menu.id, value));
    } else {
      this.filteredMenus = [];
    }
  }
  updateButtonData() {
    if (this.formGroup.valid) {
      this.button = {
        id: this.buttonId,
        parameters: {
          ...this.formGroup.value,
          src: this.getSource()
        }
      };
    }
  }
  getSource() {
    return this.chosenMenu ? this.chosenMenu.id : this.formGroup.value.src;
  }
  isMenu(value) {
    return _models_btn_model__WEBPACK_IMPORTED_MODULE_0__.ButtonType.MENU === value;
  }
  checkIncludes(sourceString, value) {
    return new RegExp(value, "i").test(sourceString);
  }
}
CreateButtonPopupComponent.ɵfac = function CreateButtonPopupComponent_Factory(t) {
  return new (t || CreateButtonPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
};
CreateButtonPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: CreateButtonPopupComponent,
  selectors: [["app-create-button-popup"]],
  hostBindings: function CreateButtonPopupComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.Enter", function CreateButtonPopupComponent_keyup_Enter_HostBindingHandler() {
        return ctx.onDialogClick();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    }
  },
  decls: 17,
  vars: 9,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "create-button-form", 3, "formGroup"], ["formControlName", "type", "aria-label", "Fish selection", 1, "create-button-form__button-types"], [3, "matTooltip", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "create-button-form__control"], ["matInput", "", "formControlName", "caption"], [4, "ngIf"], ["class", "create-button-form__control", "appearance", "outline", 4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "button", "", 3, "click"], ["mat-flat-button", "", "button", "", "color", "primary", "cdkFocusInitial", "", 3, "flat", "mat-dialog-close", "disabled"], [3, "matTooltip"], ["matInput", "", "formControlName", "src", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"]],
  template: function CreateButtonPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "mat-chip-listbox", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CreateButtonPopupComponent_mat_chip_option_5_Template, 2, 2, "mat-chip-option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 5)(7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CreateButtonPopupComponent_mat_error_10_Template, 2, 0, "mat-error", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CreateButtonPopupComponent_mat_form_field_11_Template, 8, 4, "mat-form-field", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreateButtonPopupComponent_Template_button_click_13_listener() {
        return ctx.onCancelClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u041E\u0442\u043C\u0435\u043D\u0430");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.editMode ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438" : "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043D\u043E\u043F\u043A\u0438");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.buttonTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.captionControl == null ? null : ctx.captionControl.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.typeControl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flat", true)("mat-dialog-close", ctx.button)("disabled", ctx.formGroup.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.editMode ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _button_directive__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective],
  styles: [".create-button-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 4px;\n}\n.create-button-form__control[_ngcontent-%COMP%]    + .create-button-form__control[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.create-button-form__button-types[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9idXR0b24vY29tcG9uZW50cy9jcmVhdGUtYnV0dG9uLXBvcHVwL2NyZWF0ZS1idXR0b24tcG9wdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy92YXJzLnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8lRDAlQTAlRDAlOTAlRDAlOTElRDAlOUUlRDAlQTIlRDAlOTAvYm90LWNvbmZpZy1nZW5lcmF0b3Ivc3JjL2FwcC9tb2R1bGVzL2J1dHRvbi9jb21wb25lbnRzL2NyZWF0ZS1idXR0b24tcG9wdXAvY3JlYXRlLWJ1dHRvbi1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVDRk07QUNDVjtBRkdJO0VBQ0ksZ0JBQUE7QUVEUjtBRklJO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBRUZSIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFycy5zY3NzXCI7XHJcblxyXG4uY3JlYXRlLWJ1dHRvbi1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogJHNpemUteHM7XHJcblxyXG4gICAgJl9fY29udHJvbCArICZfX2NvbnRyb2wge1xyXG4gICAgICAgIG1hcmdpbi10b3A6ICRzaXplLWNvbW1vbjtcclxuICAgIH1cclxuXHJcbiAgICAmX19idXR0b24tdHlwZXMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuIiwiJGhlYWRlci1oZWlnaHQ6IDgwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuJHNpemUteHM6IDRweDtcclxuJHNpemUteHhzOiAycHg7XHJcbiRzaXplLXN4OiA2cHg7XHJcbiRzaXplLXM6IDhweDtcclxuJHNpemUtc206IDEwcHg7XHJcbiRzaXplLWNvbW1vbjogMTJweDtcclxuJHNpemUtbTogMTZweDtcclxuJHNpemUtbHg6IDIwcHg7XHJcbiRzaXplLWw6IDI0cHg7XHJcbiRzaXplLXhsOiAzMnB4O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kY2FyZC13aWR0aDogNTc1cHg7XHJcbiRjYXJkLWhlaWdodDogNzB2aDtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA1ZmY5O1xyXG4kd2Fybi1jb2xvcjogI2YzNGQ0ZDtcclxuJHNlY29uZGFyeS1jb2xvcjogI2YwZjFmMztcclxuJGJveC1zaGFkb3c6IDBweCAwcHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMHB4IDFweCAxcHggMHB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAxcHggM3B4IDBweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4iLCIuY3JlYXRlLWJ1dHRvbi1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmNyZWF0ZS1idXR0b24tZm9ybV9fY29udHJvbCArIC5jcmVhdGUtYnV0dG9uLWZvcm1fX2NvbnRyb2wge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmNyZWF0ZS1idXR0b24tZm9ybV9fYnV0dG9uLXR5cGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1208:
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/comfirmation/components/remove-confirmation-popup/remove-confirmation-popup.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveConfirmationPopupComponent": () => (/* binding */ RemoveConfirmationPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _button_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../button/button.directive */ 3334);






const NAME = Symbol("NAME");
class RemoveConfirmationPopupComponent {
  get entityName() {
    return this.removingItem[NAME];
  }
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    if (this.data.button) {
      this.removingItem = {
        ...this.data.button,
        [NAME]: "Кнопку"
      };
    }
    if (this.data.menu) {
      this.removingItem = {
        ...this.data.menu,
        [NAME]: "Меню"
      };
    }
  }
  onCancelClick() {
    this.dialogRef.close(false);
  }
  onRemoveClick() {
    this.dialogRef.close(true);
  }
}
RemoveConfirmationPopupComponent.ɵfac = function RemoveConfirmationPopupComponent_Factory(t) {
  return new (t || RemoveConfirmationPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
};
RemoveConfirmationPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: RemoveConfirmationPopupComponent,
  selectors: [["app-remove-confirmation-popup"]],
  decls: 12,
  vars: 4,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "button", "", 3, "click"], ["mat-flat-button", "", "button", "", "color", "warn", "cdkFocusInitial", "", 3, "flat", "click"]],
  template: function RemoveConfirmationPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2)(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RemoveConfirmationPopupComponent_Template_button_click_6_listener() {
        return ctx.onCancelClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u041E\u0442\u043C\u0435\u043D\u0430");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RemoveConfirmationPopupComponent_Template_button_click_8_listener() {
        return ctx.onRemoveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\u0412\u044B \u0442\u043E\u0447\u043D\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0431\u0435\u0437\u0432\u043E\u0437\u0432\u0440\u0430\u0442\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u0442\u044C ", ctx.entityName, ": ", ctx.removingItem.caption, "?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("id: ", ctx.removingItem.id, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flat", true);
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _button_button_directive__WEBPACK_IMPORTED_MODULE_0__.ButtonDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 450:
/*!*************************************************************!*\
  !*** ./src/app/modules/comfirmation/confirmation.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationModule": () => (/* binding */ ConfirmationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_remove_confirmation_popup_remove_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/remove-confirmation-popup/remove-confirmation-popup.component */ 1208);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button.module */ 8107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class ConfirmationModule {}
ConfirmationModule.ɵfac = function ConfirmationModule_Factory(t) {
  return new (t || ConfirmationModule)();
};
ConfirmationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ConfirmationModule
});
ConfirmationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_1__.ButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ConfirmationModule, {
    declarations: [_components_remove_confirmation_popup_remove_confirmation_popup_component__WEBPACK_IMPORTED_MODULE_0__.RemoveConfirmationPopupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_1__.ButtonModule]
  });
})();

/***/ }),

/***/ 589:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/menu/components/create-menu-popup/create-menu-popup.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateMenuPopupComponent": () => (/* binding */ CreateMenuPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ 2535);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _button_button_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../button/button.directive */ 3334);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);












function CreateMenuPopupComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u042D\u0442\u043E \u043F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class CreateMenuPopupComponent {
  get captionControl() {
    return this.formGroup.get("caption");
  }
  onDialogClick() {
    if (this.formGroup.valid) {
      this.dialogRef.close(this.menu);
    }
  }
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.editMode = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    const menu = this.data.menu ?? {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__["default"])()
    };
    this.editMode = Boolean(this.data.menu);
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      caption: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(menu.caption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required)
    });
    this.formGroup.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      if (this.formGroup.valid) {
        this.menu = {
          id: menu.id,
          parameters: {
            ...this.formGroup.value,
            ...(this.editMode ? {
              btn_elements: menu.btn_elements
            } : {
              btn_elements: []
            })
          }
        };
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onCancelClick() {
    this.dialogRef.close();
  }
}
CreateMenuPopupComponent.ɵfac = function CreateMenuPopupComponent_Factory(t) {
  return new (t || CreateMenuPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA));
};
CreateMenuPopupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CreateMenuPopupComponent,
  selectors: [["app-create-menu-popup"]],
  hostBindings: function CreateMenuPopupComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.Enter", function CreateMenuPopupComponent_keyup_Enter_HostBindingHandler() {
        return ctx.onDialogClick();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    }
  },
  decls: 14,
  vars: 7,
  consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "create-menu-form", 3, "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "caption"], [4, "ngIf"], ["mat-dialog-actions", "", "align", "end"], ["mat-button", "", "button", "", 3, "click"], ["button", "", "mat-flat-button", "", "color", "primary", "cdkFocusInitial", "", 3, "flat", "mat-dialog-close", "disabled"]],
  template: function CreateMenuPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "mat-form-field", 3)(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u0422\u0435\u043A\u0441\u0442 \u043D\u0430\u0434 \u0431\u043B\u043E\u043A\u043E\u043C \u043A\u043D\u043E\u043F\u043E\u043A");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CreateMenuPopupComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMenuPopupComponent_Template_button_click_10_listener() {
        return ctx.onCancelClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editMode ? "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430 \u043A\u043D\u043E\u043F\u043E\u043A" : "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0431\u043B\u043E\u043A\u0430 \u043A\u043D\u043E\u043F\u043E\u043A");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.captionControl == null ? null : ctx.captionControl.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("flat", true)("mat-dialog-close", ctx.menu)("disabled", ctx.formGroup.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.editMode ? "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C" : "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _button_button_directive__WEBPACK_IMPORTED_MODULE_0__.ButtonDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError],
  styles: [".create-menu-form[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tZW51L2NvbXBvbmVudHMvY3JlYXRlLW1lbnUtcG9wdXAvY3JlYXRlLW1lbnUtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8lRDAlQTAlRDAlOTAlRDAlOTElRDAlOUUlRDAlQTIlRDAlOTAvYm90LWNvbmZpZy1nZW5lcmF0b3Ivc3JjL2FwcC9tb2R1bGVzL21lbnUvY29tcG9uZW50cy9jcmVhdGUtbWVudS1wb3B1cC9jcmVhdGUtbWVudS1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNESiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcnMuc2Nzc1wiO1xyXG5cclxuLmNyZWF0ZS1tZW51LWZvcm0ge1xyXG4gICAgbWFyZ2luLXRvcDogJHNpemUteHM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iLCIuY3JlYXRlLW1lbnUtZm9ybSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6762:
/*!****************************************************************!*\
  !*** ./src/app/modules/menu/components/menu/menu.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _button_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../button/components/button/button.component */ 7184);
/* harmony import */ var _button_button_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../button/button.directive */ 3334);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ 7591);











function MenuComponent_app_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("buttonEdit", function MenuComponent_app_button_7_Template_app_button_buttonEdit_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const button_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onButtonEditClick(button_r1.id));
    })("buttonRemove", function MenuComponent_app_button_7_Template_app_button_buttonRemove_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const button_r1 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onButtonRemoveClick(button_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const button_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    const last_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("type", button_r1.type)("caption", button_r1.caption)("buttonSrc", button_r1.src)("first", first_r2)("last", last_r3);
  }
}
class MenuComponent {
  constructor() {
    this.openMenuEditingPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.removeMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.openButtonEditingPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.removeButton = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.addButton = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
  }
  drop(event) {
    if (event.previousContainer === event.container) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  onAddButton() {
    this.addButton.emit();
  }
  onRemoveClick() {
    this.removeMenu.emit();
  }
  onMenuEditClick() {
    this.openMenuEditingPopup.emit();
  }
  onButtonEditClick(buttonId) {
    this.openButtonEditingPopup.emit(buttonId);
  }
  onButtonRemoveClick(buttonId) {
    this.removeButton.emit(buttonId);
  }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) {
  return new (t || MenuComponent)();
};
MenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MenuComponent,
  selectors: [["app-menu"]],
  inputs: {
    caption: "caption",
    buttons: "buttons"
  },
  outputs: {
    openMenuEditingPopup: "openMenuEditingPopup",
    removeMenu: "removeMenu",
    openButtonEditingPopup: "openButtonEditingPopup",
    removeButton: "removeButton",
    addButton: "addButton"
  },
  decls: 21,
  vars: 5,
  consts: [[1, "menu-card"], [1, "menu-card__header"], [1, "menu-card__content"], ["multi", "", "cdkDropList", "", 1, "menu-card__buttons-accordion", 3, "cdkDropListData", "cdkDropListDropped"], [3, "type", "caption", "buttonSrc", "first", "last", "buttonEdit", "buttonRemove", 4, "ngFor", "ngForOf"], ["mat-button", "", "button", "", 3, "click"], [1, "mat-18"], ["align", "end", 1, "menu-card__actions"], ["mat-flat-button", "", "button", "", "color", "primary", 3, "flat", "click"], ["mat-flat-button", "", "button", "", "color", "warn", 3, "flat", "click"], [3, "type", "caption", "buttonSrc", "first", "last", "buttonEdit", "buttonRemove"]],
  template: function MenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card", 0)(2, "mat-card-header", 1)(3, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content", 2)(6, "mat-accordion", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function MenuComponent_Template_mat_accordion_cdkDropListDropped_6_listener($event) {
        return ctx.drop($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MenuComponent_app_button_7_Template, 1, 5, "app-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_8_listener() {
        return ctx.onAddButton();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043D\u043E\u043F\u043A\u0443 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-card-actions", 7)(13, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_13_listener() {
        return ctx.onMenuEditClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "mode_edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_17_listener() {
        return ctx.onRemoveClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.caption);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.buttons);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.buttons);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flat", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("flat", true);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _button_components_button_button_component__WEBPACK_IMPORTED_MODULE_0__.ButtonComponent, _button_button_directive__WEBPACK_IMPORTED_MODULE_1__.ButtonDirective, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__.MatAccordion, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList],
  styles: [".menu-card {\n  height: 100%;\n  justify-content: space-between;\n  box-shadow: 0px 0px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n.menu-card__header {\n  flex-grow: 0;\n  margin-bottom: 8px;\n}\n.menu-card__content {\n  flex-grow: 1;\n}\n.menu-card__content.mat-mdc-card-menu {\n  padding: 0 0 0 16px;\n}\n.menu-card__actions {\n  flex-grow: 0;\n}\n.menu-card__actions button + button {\n  margin-left: 16px;\n}\n.menu-card__buttons-accordion {\n  box-shadow: none;\n}\n.menu-card__buttons-accordion + button {\n  margin-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9tZW51L2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvdmFycy5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vJUQwJUEwJUQwJTkwJUQwJTkxJUQwJTlFJUQwJUEyJUQwJTkwL2JvdC1jb25maWctZ2VuZXJhdG9yL3NyYy9hcHAvbW9kdWxlcy9tZW51L2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBRUEseUhDZ0JTO0FDbEJiO0FGSUk7RUFDSSxZQUFBO0VBQ0Esa0JDSkM7QUNFVDtBRktJO0VBQ0ksWUFBQTtBRUhSO0FGS1E7RUFDSSxtQkFBQTtBRUhaO0FGT0k7RUFDSSxZQUFBO0FFTFI7QUZPUTtFQUNJLGlCQ2hCSDtBQ1dUO0FGU0k7RUFDSSxnQkFBQTtBRVBSO0FGVUk7RUFDSSxlQzVCQztBQ29CVCIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3ZhcnNcIjtcclxuXHJcbi5tZW51LWNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG5cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICRzaXplLXM7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICAgICAmLm1hdC1tZGMtY2FyZC1tZW51IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYWN0aW9ucyB7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG5cclxuICAgICAgICBidXR0b24gKyBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogJHNpemUtbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9ucy1hY2NvcmRpb24ge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9ucy1hY2NvcmRpb24gKyBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6ICRzaXplLXM7XHJcbiAgICB9XHJcbn1cclxuIiwiJGhlYWRlci1oZWlnaHQ6IDgwcHg7XHJcbiRmb290ZXItaGVpZ2h0OiA2MHB4O1xyXG5cclxuJHNpemUteHM6IDRweDtcclxuJHNpemUteHhzOiAycHg7XHJcbiRzaXplLXN4OiA2cHg7XHJcbiRzaXplLXM6IDhweDtcclxuJHNpemUtc206IDEwcHg7XHJcbiRzaXplLWNvbW1vbjogMTJweDtcclxuJHNpemUtbTogMTZweDtcclxuJHNpemUtbHg6IDIwcHg7XHJcbiRzaXplLWw6IDI0cHg7XHJcbiRzaXplLXhsOiAzMnB4O1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4kY2FyZC13aWR0aDogNTc1cHg7XHJcbiRjYXJkLWhlaWdodDogNzB2aDtcclxuXHJcbiRwcmltYXJ5LWNvbG9yOiAjMDA1ZmY5O1xyXG4kd2Fybi1jb2xvcjogI2YzNGQ0ZDtcclxuJHNlY29uZGFyeS1jb2xvcjogI2YwZjFmMztcclxuJGJveC1zaGFkb3c6IDBweCAwcHggMXB4IC0xcHggcmdiKDAgMCAwIC8gMjAlKSwgMHB4IDFweCAxcHggMHB4IHJnYigwIDAgMCAvIDE0JSksIDBweCAxcHggM3B4IDBweCByZ2IoMCAwIDAgLyAxMiUpO1xyXG4iLCIubWVudS1jYXJkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4ubWVudS1jYXJkX19oZWFkZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5tZW51LWNhcmRfX2NvbnRlbnQge1xuICBmbGV4LWdyb3c6IDE7XG59XG4ubWVudS1jYXJkX19jb250ZW50Lm1hdC1tZGMtY2FyZC1tZW51IHtcbiAgcGFkZGluZzogMCAwIDAgMTZweDtcbn1cbi5tZW51LWNhcmRfX2FjdGlvbnMge1xuICBmbGV4LWdyb3c6IDA7XG59XG4ubWVudS1jYXJkX19hY3Rpb25zIGJ1dHRvbiArIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm1lbnUtY2FyZF9fYnV0dG9ucy1hY2NvcmRpb24ge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLm1lbnUtY2FyZF9fYnV0dG9ucy1hY2NvcmRpb24gKyBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 3988:
/*!*********************************************!*\
  !*** ./src/app/modules/menu/menu.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuModule": () => (/* binding */ MenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/menu/menu.component */ 6762);
/* harmony import */ var _components_create_menu_popup_create_menu_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/create-menu-popup/create-menu-popup.component */ 589);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.module */ 8107);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);















class MenuModule {}
MenuModule.ɵfac = function MenuModule_Factory(t) {
  return new (t || MenuModule)();
};
MenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: MenuModule
});
MenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _button_button_module__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MenuModule, {
    declarations: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent, _components_create_menu_popup_create_menu_popup_component__WEBPACK_IMPORTED_MODULE_1__.CreateMenuPopupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _button_button_module__WEBPACK_IMPORTED_MODULE_2__.ButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__.MatExpansionModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__.CdkDropList, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__.MatCheckboxModule],
    exports: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent]
  });
})();

/***/ }),

/***/ 4122:
/*!****************************************************************************!*\
  !*** ./src/app/modules/snackbar/components/snackbar/snackbar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarComponent": () => (/* binding */ SnackbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);






class SnackbarComponent {
  constructor(data) {
    this.data = data;
    this.snackBarRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarRef);
  }
}
SnackbarComponent.ɵfac = function SnackbarComponent_Factory(t) {
  return new (t || SnackbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DATA));
};
SnackbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SnackbarComponent,
  selectors: [["app-snackbar"]],
  decls: 6,
  vars: 1,
  consts: [["matSnackBarLabel", "", 1, "snackbar-title"], ["matSnackBarActions", ""], ["mat-button", "", "matSnackBarAction", "", 3, "click"], [1, "mat-18"]],
  template: function SnackbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1)(3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SnackbarComponent_Template_button_click_3_listener() {
        return ctx.snackBarRef.dismissWithAction();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, "\n");
    }
  },
  dependencies: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarLabel, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarActions, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBarAction, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  border: 1px solid #f0f1f3;\n  background-color: white;\n  --mat-mdc-snack-bar-button-color: $primary-color;\n  --mdc-snackbar-supporting-text-color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zbmFja2Jhci9jb21wb25lbnRzL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vJUQwJUEwJUQwJTkwJUQwJTkxJUQwJTlFJUQwJUEyJUQwJTkwL2JvdC1jb25maWctZ2VuZXJhdG9yL3NyYy9hcHAvbW9kdWxlcy9zbmFja2Jhci9jb21wb25lbnRzL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUVBLHlCQUFBO0VBQ0EsdUJBQUE7RUFFQSxnREFBQTtFQUNBLDJDQUFBO0FDSEoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJzXCI7XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAtLW1hdC1tZGMtc25hY2stYmFyLWJ1dHRvbi1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAtLW1kYy1zbmFja2Jhci1zdXBwb3J0aW5nLXRleHQtY29sb3I6IGJsYWNrO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZjFmMztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC0tbWF0LW1kYy1zbmFjay1iYXItYnV0dG9uLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgLS1tZGMtc25hY2tiYXItc3VwcG9ydGluZy10ZXh0LWNvbG9yOiBibGFjaztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7407:
/*!*****************************************************!*\
  !*** ./src/app/modules/snackbar/snackbar.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackbarModule": () => (/* binding */ SnackbarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/snackbar/snackbar.component */ 4122);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button.module */ 8107);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);







class SnackbarModule {}
SnackbarModule.ɵfac = function SnackbarModule_Factory(t) {
  return new (t || SnackbarModule)();
};
SnackbarModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SnackbarModule
});
SnackbarModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_1__.ButtonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SnackbarModule, {
    declarations: [_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_0__.SnackbarComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _button_button_module__WEBPACK_IMPORTED_MODULE_1__.ButtonModule]
  });
})();

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map