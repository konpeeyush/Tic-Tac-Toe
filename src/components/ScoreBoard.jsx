const ScoreBoard = ({ scores, xPlaying }) => {
    const { X, O } = scores
    return (
        <div className="flex w-1/2 md:w-1/4 items-center justify-evenly mb-10 bg-white rounded-md text-2xl shadow-lg font-bold">
            <span className={`score x-score ${!xPlaying && 'inactive'}  h-full w-full mx-auto text-center p-5`}>X - {X}</span>

            <span className={`score o-score ${xPlaying && 'inactive'} h-full w-full text-center p-5`}>O - {O}</span>
        </div>
    );
};

export default ScoreBoard;
