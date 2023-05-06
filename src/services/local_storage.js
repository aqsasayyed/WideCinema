class LocalStorageService {
    static setTicketBooking = async (id) => {
        const shows = await this.getBookedShows();
        shows.push(id)
        localStorage.setItem('shows', JSON.stringify(shows))
    }
    static removeTicketBooking = async (id) => {
        const shows = await this.getBookedShows();
        const index = shows.indexOf(id);
        if (index > -1) {
            shows.splice(index, 1);
        }
        localStorage.setItem('shows', JSON.stringify(shows))
    }

    static getBookedShows = async () => {
        const json = localStorage.getItem('shows')
        const shows = JSON.parse(json) ?? [];
        return shows;
    }

    static checkIfBooked = async (id) => {
        const shows = await this.getBookedShows();
        return shows.includes(id);
    }
}

export default LocalStorageService;