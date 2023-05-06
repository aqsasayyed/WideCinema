class ApiService {
    static async shows() {
        const resp = await fetch("https://api.tvmaze.com/search/shows?q=all");
        const json = await resp.json();
        return json;
    }

    static async show(id) {
        const resp = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const json = await resp.json();
        return json;
    }
}

export default ApiService;