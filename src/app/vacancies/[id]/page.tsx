import type {Metadata, ResolvingMetadata} from 'next'
import {vacancies} from "@/entities/Vacancy/mocks/vacancies";
import {VacancyPage} from "@/pages/vacancy";

type Props = {
    params: { id: string }
}

export async function generateMetadata(
    {params}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.id
    return {
        title: `Вакансия ${id}`,
    }
}


const Vacancy = ({params}: Props) => {
    const vacancyData = vacancies.find(vacancy => vacancy.id.toString() === params.id)
    return (
        <>
            Вакансия {params.id}
            {
                vacancyData ?
                    <>
                        <VacancyPage vacancyData={vacancyData}/>
                    </>
                    :
                    <>Нет данных по вакансии</>
            }
        </>
    )
}

export default Vacancy