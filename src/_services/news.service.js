import { handleResponse3 } from "../_helpers/handle-response";

export const newsService = {
    getNews
}

async function getNews() {
    const url = 'http://hn.algolia.com/api/v1/search_by_date'

    const requestOptions = {
        method: 'GET',
        timeoutInterval: 15000,
    }

    return fetch(url, requestOptions)
            .then(handleResponse3)
            .then(news => {
                return Promise.resolve(news)
            }).catch((err) => {
                const { status } = err
                return Promise.reject(err)
            })
}