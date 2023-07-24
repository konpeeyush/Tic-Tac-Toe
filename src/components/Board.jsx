import Box from "./Box";
const Board = ({ board, onClick }) => {
    return (
        <div className="grid grid-cols-board items-center justify-center  md:max-w-screen-lg mx-auto ">
            {board.map((val, index) => (
                <Box key={index} value={val} onClick={() => val === null && onClick(index)} />
            ))}
        </div>
    );
};

export default Board;
