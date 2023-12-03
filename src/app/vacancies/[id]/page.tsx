import type {Metadata, ResolvingMetadata} from 'next'
import {vacancies} from "@/entities/Vacancy/mocks/vacancies";
import {VacancyHeader, VacancyDescription, ActionsPlan} from "@/entities/Vacancy";

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
    console.log(vacancyData)
    // @ts-ignore
    const {vacancyName, requireSkills, format, address, employmentType, workSchedule} = vacancyData
    return (
        <>
            Вакансия {params.id}
            {
                vacancyData ?
                    <div>
                        <div className='flex flex-col gap-[20px] max-w-[890px]'>
                            <VacancyHeader
                                vacancyName={vacancyName}
                                date={'1 октября'}
                                requiredSkills={requireSkills}
                                format={format}
                                address={address}
                                employmentType={employmentType}
                                workSchedule={workSchedule}
                            />
                            <VacancyDescription />
                            <ActionsPlan />
                        </div>
                    </div>

                    :
                    <>Нет данных по вакансии</>
            }

        </>
    )
}

export default Vacancy