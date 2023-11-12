
interface Props {
    params: {
        id: string
    }
}

const Vacancy = ({params}: Props) => {
    return (
        <>Вакансия {params.id}
        </>
    )
}

export default Vacancy