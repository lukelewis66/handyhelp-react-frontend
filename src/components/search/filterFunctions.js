import { distance } from "../../gmaps/distance";

export function filterByDistance(currentList, filterDistance, filterLocation) {
    let filteredDistance = [];
    currentList.forEach(item => {
        item["distance"] = distance(filterLocation[1], filterLocation[0], item.location[1], item.location[0]);
        if (item["distance"] <= filterDistance) {
            filteredDistance.push(item);
        }
    });
    return filteredDistance;
}

export function filterByTags(currentList, tags) {
    let filteredTags = [];
    currentList.forEach(item => {
        let i = 0;
        while (i < item.skilltags.length) {
            //current items skill tag is in the filter
            if (tags.some((tag) => tag === item.skilltags[i])) {
                filteredTags.push(item);
                break;
            }
            i++;
        }
    });
    return filteredTags;
}