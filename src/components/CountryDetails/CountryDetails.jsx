import CountryData from "./CountryData";

const CountryDetails = (props) => {
    // const {country,handleVisitedCountry,handleVisitedCountriesFlags} = props
    // console.log(handleVisitedCountry,handleVisitedCountriesFlags);
    return (
        <div>
            <h4>Country Details</h4>
            <CountryData
            {...props}
            >
            </CountryData>
        </div>
    );
};

export default CountryDetails;