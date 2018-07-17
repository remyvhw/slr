import Obstruction from "./Obstruction"
export default class Change {
    constructor(apiChange) {
        this.id = apiChange.id;
        this.type = apiChange.type;
        if (apiChange.type === 'Obstruction') {
            this.payload = new Obstruction(apiChange.payload);
        }
    }
}