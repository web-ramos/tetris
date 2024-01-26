import * as stylex from '@stylexjs/stylex'

const styles = stylex.create({
    section: {
        backgroundColor: 'black',
        backgroundImage: "url(/images/banner.webp)",
        height: '100dvh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 350,
        height: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        color: 'white',
        fontSize: '2rem',
        borderRadius: '2rem',
        border: 'none',
        outline: 'none',
        fontFamily: 'Press',
    }
})

const StartPage = () => {
    return (
        <>
            <section {...stylex.props(styles.section)}>
                <button {...stylex.props(styles.button)}>Start</button>
            </section>
        </>
    )
}

export default StartPage