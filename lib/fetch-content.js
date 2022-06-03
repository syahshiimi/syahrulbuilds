export async function loadContent(value) {
    const res = await fetch(`http://localhost:1337/api/${value}`);
    const data = await res.json();
    return data
}
