import Obstruction from "./Obstruction"
import { Photo } from "./Photo"
export default class Change {
    constructor(apiChange) {
        this.id = apiChange.id;
        this.type = apiChange.type;
        if (apiChange.type === 'Obstruction') {
            this.payload = new Obstruction(apiChange.payload);
        } else if (apiChange.type === 'Photo') {
            this.payload = new Photo(apiChange.payload);
        }
    }
}