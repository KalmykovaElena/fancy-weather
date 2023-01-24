export function getCity(func) {

    fetch("https://ipinfo.io/json?token=9049a715d2ff07")
        .then(
            (response) => response.json()
        )
        .then(
            (jsonResponse) => {
                func(jsonResponse.region)
            }
        )
}
