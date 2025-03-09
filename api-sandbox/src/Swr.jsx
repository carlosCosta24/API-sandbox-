import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Swr = () => {
    const {
        data: countries,
        error,
        isValidating,
    } = useSWR('https://restcountries.com/v2/all', fetcher);

    if (error) return <div className='failed'>failed to load the data  </div>;
    if (isValidating) return <div className='loading'>...............loading</div>;



    return (

        <div className='container'>
            {countries &&
                countries.map((country, index) => (
                    <img key={index} src={country.flags.png} alt='flag' width={100} />
                ))}
        </div>
    );
};

export default Swr