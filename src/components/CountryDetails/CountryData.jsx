
const CountryData = ({country,handleVisitedCountry,handleVisitedCountriesFlags}) => {
    // const {country,handleVisitedCountry,handleVisitedCountriesFlags} = props
    
    console.log(handleVisitedCountriesFlags,handleVisitedCountry)
    return (
        <div>
            <p><small>Country Data : {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;