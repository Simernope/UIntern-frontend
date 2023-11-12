import {VacancyCard} from "@/entities/Vacancy";
import {vacancies} from "@/entities/Vacancy/mocks/vacancies";

const VacanciesList = () => {
    return (
        <div>
            {
                vacancies.map((vacancy, index) =>
                    <VacancyCard
                        key={index}
                        companyName={vacancy.companyName}
                        params={vacancy.params}
                        vacancyName={vacancy.vacancyName}
                        image={vacancy.image}
                    />
                )
            }
        </div>
    )
}

export {VacanciesList}