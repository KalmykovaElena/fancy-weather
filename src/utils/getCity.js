export function getCity(func) {

    fetch("https://ipinfo.io/json?token=9049a715d2ff07")
        .then(
            (response) => {
                if (!response.ok) {
                    throw new Error('location cannot be determined')
                }
                return response.json()
            }
        )
        .then(
            (jsonResponse) => {
                func(jsonResponse.region)
            }
        )
        .catch(error => {
            console.log(error)
        })
}
