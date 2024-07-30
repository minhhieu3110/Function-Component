import { useEffect, useState } from "react";
import axios from "axios";

export default function Countries() {
    const [countries, setCountries] = useState([]);
    const [countriesSearch, setCountriesSearch] = useState([]);
    const [areaRange, setAreaRange] = useState({ from: "", to: "" });
    const [populationRange, setPopulationRange] = useState({ from: "", to: "" });
    const [option, setOption] = useState("");
    const [dataOption, setDataOption] = useState([]);
    
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
            setCountries(response.data);
            setDataOption(Object.keys(response.data[0]))
        });
    }, []);
    const filterCountries = countries.filter((country) => {
        const searchCountry = country.name.common.toLowerCase().includes(countriesSearch);
        const areaOfCountries = (areaRange.from === "" || country.area >= areaRange.from) && (areaRange.to === "" || country.area <= areaRange.to);
        const populationOfCountries = (populationRange.from === "" || country.population >= populationRange.from) && (populationRange.to === "" || country.population <= populationRange.to);
        return searchCountry && areaOfCountries && populationOfCountries;
    });
    
    const selectOption = (e) => {
        setOption(e.target.value);
    };
    
    return (
        <>
            <h2>Countries list</h2>
            <input
                onChange={(eName) => {
                    setCountriesSearch([eName.target.value]);
                }}
                placeholder={"Search countries"}
            />
            <div>
                <input
                    onChange={(e) => setAreaRange({ ...areaRange, from: e.target.value })}
                    value={areaRange.from}
                    placeholder={"Area From"}
                />
                <input
                    onChange={(e) => setAreaRange({ ...areaRange, to: e.target.value })}
                    value={areaRange.to}
                    placeholder={"Area To"}
                />
            </div>
            <div>
                <input
                    onChange={(ePopu) => setPopulationRange({ ...populationRange, from: ePopu.target.value })}
                    value={populationRange.from}
                    placeholder={"Population From"}
                />
                <input
                    onChange={(ePopu) => setPopulationRange({ ...populationRange, to: ePopu.target.value })}
                    value={populationRange.to}
                    placeholder={"Population To"}
                />
            </div>
            <select value={option} onChange={selectOption}>
                <option value="">Select option of Countries</option>
                {dataOption.map((data) => (
                    <option value={data}>{data}</option>
                ))}
            </select>
            <table>
                <tr>
                    <th>Flag</th>
                    <th>Name</th>
                    <th>Area</th>
                    <th>Population</th>
                    {option && <th>{option}</th>}
                </tr>
                {filterCountries.map((fCountry) => (
                    <tr>
                        <td>
                            <img src={fCountry.flags.png} alt={fCountry.name.common} width={"50px"} />
                        </td>
                        <td>{fCountry.name.common}</td>
                        <td>{fCountry.area}</td>
                        <td>{fCountry.population}</td>
                        {option && <td>{fCountry[option]}</td>}
                    </tr>
                ))}
            </table>
        </>
    );
}