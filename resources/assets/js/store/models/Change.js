import Obstruction from "./Obstruction"
export default class Change {
    constructor(apiChange) {
        if (apiChange.type === 'Obstruction')  {
            this.payload = new Obstruction(apiChange.payload);
        }
    }
}