import fs from 'fs'
import path from 'path'
class JSONProvider {
    constructor() {
        let rawdata = fs.readFileSync(path.resolve(__dirname, '../mapping.json'))
        let _obj = JSON.parse(rawdata.toString());
        this.Mapping = _obj.responseMapping;
        this.IgnoreTexts = _obj.ignoreTexts;

        rawdata = fs.readFileSync(path.resolve(__dirname, '../response.json'))
        this.ResponseTexts = JSON.parse(rawdata.toString());
    }
    public Mapping: {};
    public IgnoreTexts: {};
    public ResponseTexts: any;
}

export const DataProvider = new JSONProvider()