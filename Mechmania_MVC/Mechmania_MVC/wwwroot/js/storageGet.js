export default function getStorage() {
    const storage = JSON.parse(localStorage.getItem('mechanics'));
    if (storage) {
        return storage;
    }
    else {
        return [];
    }
}

