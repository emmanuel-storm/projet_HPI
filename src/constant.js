export const fetchURL = "https://6053736845e4b30017291b83.mockapi.io/tasks";

export const getItems = () => fetch(fetchURL).then(res => res.json());
