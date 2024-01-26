import tetraminos from "./tetrominos"

/**
 *
 * @returns random tetramino array
 */
export const randomTetromino = () => {
    const number = Math.round(Math.random() * tetraminos.length)
    return tetraminos[number]
}