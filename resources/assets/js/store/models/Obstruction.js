export default class Obstruction {
    constructor(apiObstruction) {

        Object.keys(apiObstruction).forEach((key) => {
            this[key] = apiObstruction[key];
        });
        this.selected = false;
        this.created_at = new Date(this.created_at);
        this.updated_at = new Date(this.updated_at);
        this.deleted_at = this.deleted_at ? new Date(this.deleted_at) : null;
    }
    isSelectedInStore(store) {
        return store.state.browser.selection &&
            store.state.browser.selection.constructor.name ===
            this.constructor.name &&
            store.state.browser.selection.id === this.id;
    }
}