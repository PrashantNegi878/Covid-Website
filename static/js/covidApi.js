const covidApi = {
    getSummary: async () => {
        return await fetchRequest(covidApiEndPoints.summary())
    },
    getWorldAllTimeCases: async () => {
        return await fetchRequest(covidApiEndPoints.worldAllTimeCases())
    },
    getCountryAllTimeCases: async (country, status) => {
        return await fetchRequest(covidApiEndPoints.countryAllTimeCases(country, status))
    },
}

const covid_api_base = 'https://api.covid19api.com/'

const covidApiEndPoints = {
    summary: () => {
        return getApiPath('summary')
    },
    worldAllTimeCases: () => {
        return getApiPath('world')
    },
    countryAllTimeCases: (country, status) => {
        let end_point = `dayone/country/${country}/status/${status}`
        return getApiPath(end_point)
    },
}


getApiPath = (end_point) => {
    return covid_api_base + end_point
}