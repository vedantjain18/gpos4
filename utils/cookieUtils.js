import Cookies from "js-cookie"

export function setCokies(key, value) {
    Cookies.set(key, value)
}

export function getCokies(key) {
    return Cookies.get(key)
}


