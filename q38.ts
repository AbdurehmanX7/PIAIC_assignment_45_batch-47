function describe_city(name:string,country:string='Unknown'){
    console.log(`${name} is in ${country}`)
}

describe_city('Lahore', 'Pakistan')
describe_city('Paris', 'France')
describe_city('London')