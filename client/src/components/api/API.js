import axios from "axios";

export default {
    searchBooks: function(query) {
        //google api
        const URL = "https://www.googleapis.com/books/v1/volumes?q=";
        //remove spaces from query
        const spaces = query.replace(/\s/g,"+");
        console.log(`${URL}${spaces}`);
        return axios.get(`${URL}${spaces}`);

    }
};