/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   history-menu.html
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

/// <reference path="../polymer/types/polymer-element.d.ts" />
/// <reference path="../paper-item/paper-icon-item.d.ts" />
/// <reference path="../paper-item/paper-item-body.d.ts" />
/// <reference path="../paper-ripple/paper-ripple.d.ts" />
/// <reference path="../paper-progress/paper-progress.d.ts" />
/// <reference path="../iron-list/iron-list.d.ts" />
/// <reference path="../http-method-label/http-method-label.d.ts" />
/// <reference path="../history-list-mixin/history-list-mixin.d.ts" />
/// <reference path="../requests-list-mixin/requests-list-mixin.d.ts" />
/// <reference path="../requests-list-mixin/requests-list-styles.d.ts" />

declare namespace UiElements {

  /**
   * A list of history requests in the ARC main menu.
   *
   * The element uses direct implementation of the PouchDB to make a query to the
   * datastore. It also listens to events fired by the `arc-model` elements to
   * update state of the history requests.
   *
   * ### Example
   * ```
   * <history-menu></history-menu>
   * ```
   *
   * ### Sizing the element
   *
   * The element uses `<iron-list>` to render the data in the view. The list is set
   * to be flex vertically. It means that the element has to be sized directly by the
   * hosting application or otherwise it size will be 0px.
   *
   * It can be done using flex layout and making the element to be `flex: 1`.
   *
   * ## Changes in version 2
   *
   * - PouchDB is no longer included into the element. Each platform can have
   * different implementation of the library so this element will not make
   * assumtions about the platform.
   * - The element does not support "opened" attribute. Once inserted into the
   * DOM it queries datastore.
   *
   * ### Styling
   * `<history-menu>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--history-menu` | Mixin applied to the element | `{}`
   * `--history-menu-background-color` | Background color of the menu | `inherit`
   * `--history-menu-selected-post-method-color` | Font color of selected item POST method label | `#fff`
   * `--history-menu-focused-post-method-color` | Font color of focused item POST method label | `rgb(33, 150, 243)`
   * `--history-menu-selected-method-label-background-color` | Background color of the POST method label when the item is focused | `#fff`
   * `--history-menu-list` | Mixin applied to the list element. | `{}`
   * `--history-menu-list-item` | Mixin applied to each list item | `{}`
   * `--history-menu-selected-item-background-color` | Background color of the selected list item | `#FF9800`
   * `--history-menu-selected-item-color` | Color of the selected list item | `#fff`
   * `--history-menu-url-label` | Mixin applied to the URL label | `{}`
   * `--history-menu-history-group-header` | Mixin applied to the history list group header | `{}`
   * `--history-menu-history-group-header-font-weigth` | Group header border color | `bold`
   * `--history-menu-history-group-header-border-color` | Group header border color | `#ddd`
   * `--history-menu-history-group-header-color` | Font color of the group header` | `rgba(0, 0, 0, 0.54)`
   * `--arc-menu-empty-info-color` | Color applied to the empty info section | ``
   * `--arc-menu-empty-info-title-color` | Color applied to the title in the empty info section | ``
   */
  class HistoryMenu extends
    ArcComponents.RequestsListMixin(
    ArcComponents.HistoryListMixin(
    Object)) {

    /**
     * Database ID of the selected item.
     */
    selectedItem: string|null|undefined;
    connectedCallback(): void;
    disconnectedCallback(): void;

    /**
     * Computes class name for the HTML element representing a history item.
     */
    _computeItemClass(id: String|null, selectedItem: String|null): String|null;

    /**
     * Called every time the element changed it's scroll position. It will call the `makeQuery`
     * function when there's less than 120px left to scroll. (also it must be opened and must not
     * already querying).
     */
    _scrollHandler(): void;

    /**
     * Notifies the list that the resize event occurred.
     * Should be called whhen content of the list changed but the list wasn't
     * visible at the time.
     */
    notifyResize(): void;

    /**
     * Handler for the `click` event on the item.
     */
    _openHistory(e: any): void;
  }
}

interface HTMLElementTagNameMap {
  "history-menu": UiElements.HistoryMenu;
}
