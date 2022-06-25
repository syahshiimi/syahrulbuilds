export async function loadContent(value) {
    // fetch data (local)
    const res = await fetch(`https://syahrulbuilds.herokuapp.com/api/${value}`);

    // return the data as json with async
    const data = await res.json();
    // return the data
    return data?.data.attributes
}
