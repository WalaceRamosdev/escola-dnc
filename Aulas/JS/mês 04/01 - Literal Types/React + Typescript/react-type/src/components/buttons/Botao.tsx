interface BotaoProps {
    text: string,
}

export const Botao = ({text}: BotaoProps) => {
    return (
        <>
        <button>
            {text}
        </button>
        </>
    )
}