export function Sorter(object) {
    const Sorted = Object.entries(object);
    const SortArr = []
    Sorted.map((item) => {
        SortArr.push(item[1]);
        SortArr.sort();
    })
    return SortArr;

}

