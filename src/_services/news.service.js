import { handleResponse3 } from "../_helpers/handle-response";
import { BehaviorSubject } from "rxjs";

const currentFilterSubject = new BehaviorSubject([]);

export const newsService = {
    getNews,
    setFilter,
    getFilter: currentFilterSubject.asObservable()
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


async function setFilter(filter) {
    new Promise(( resolve, reject ) => {
        try {
            currentFilterSubject.next(filter)
            resolve("filter is saved")
        }catch(err)
        {
            reject("an error was occurred seting the filter")
            throw err;
        }
    })
}