interface PropsI {
    data: any;
}
const PokemanCard = ({ data }: PropsI) => {

    return (
        <section className="flex flex-wrap gap-6 py-12 items-center justify-center">
            {data &&
                data.length > 0 ?
                (
                    data?.map((item: any, index: any) =>
                    (
                        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow bg-slate-50" key={index}>
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-24 h-24 mb-3 rounded-full shadow-lg bg-blue-50" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} alt="" />
                                <h5 className="mb-1 text-xl font-medium text-gray-900 ">{item.name}</h5>
                            </div>
                        </div>
                    )
                    )) : (
                    <h1 className="text-white text-xl">No data</h1>
                )
            }
        </section>
    )
}

export default PokemanCard