import config from "./config.json";

class Class1 {
    initialise(){
        console.log(config.configSection2.siteKey);
    }
}

export default Class1;