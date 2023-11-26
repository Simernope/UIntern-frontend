"use client"
import {DrawerPanel, VacancyCard} from "@/entities/Vacancy";
import {vacancies, Vacancy} from "@/entities/Vacancy/mocks/vacancies";
import {Col, Row} from "antd";
import {useState} from "react";

const VacanciesList = () => {
    const [open, setOpen] = useState(false)
    const [clickedVacancy, setClickedVacancy] = useState<Vacancy | null>(null)

    const onClose = () => {
        setOpen(false)
        setClickedVacancy(null)
    };
    return (
        <>
            <DrawerPanel onClose={onClose} open={open} vacancyData={clickedVacancy}/>
            <Row>
                {
                    vacancies.map((vacancy, index) =>
                        <Col key={index}
                             lg={8}
                             md={12}
                             xs={24}
                        >
                            <div onClick={() => {
                                setOpen(true)
                                setClickedVacancy(vacancy)
                            }}
                            >
                                <VacancyCard
                                    companyName={vacancy.companyName}
                                    params={vacancy.params}
                                    vacancyName={vacancy.vacancyName}
                                    image={vacancy.image}
                                />
                            </div>
                        </Col>
                    )
                }
            </Row>
        </>
    )
}

export {VacanciesList}