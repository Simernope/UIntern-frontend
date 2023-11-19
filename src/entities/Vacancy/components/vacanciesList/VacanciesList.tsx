import {VacancyCard} from "@/entities/Vacancy";
import {vacancies} from "@/entities/Vacancy/mocks/vacancies";
import {Col, Row} from "antd";

const VacanciesList = () => {
    return (
        <Row>
            {
                vacancies.map((vacancy, index) =>
                    <Col key={index}
                         xl={6}
                         md={8}
                         sm={12}
                         xs={24}
                    >
                        <VacancyCard
                            companyName={vacancy.companyName}
                            params={vacancy.params}
                            vacancyName={vacancy.vacancyName}
                            image={vacancy.image}
                        />
                    </Col>
                )
            }
        </Row>
    )
}

export {VacanciesList}