export const GameOver = ({endGame, gameIsLost, onClick}) => {
    const window__winning = (
        <p>you won!</p>
    )

    const window__losing = (
        <p>you lost!</p>
    )

    if(endGame) {
        return (
            <>  
                {gameIsLost ? window__losing : window__winning}
                <button onClick={onClick}>Restart</button>
            </>
        )
    }
} 