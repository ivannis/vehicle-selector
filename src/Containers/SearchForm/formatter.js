import {CarService} from "../../Services/CarService";

const formatter = {
    MMY: [
        {
            type: "make",
            placeholder: "Select the vehicle maker",
            filterBy: "",
            query: CarService.useGetMakes
        },
        {
            type: "model",
            placeholder: "Select the vehicle model",
            filterBy: "make",
            query: CarService.useGetModels
        },
        {
            type: "year",
            placeholder: "Select the year",
            filterBy: "model",
            query: CarService.useGetYears
        },
    ],
    YMM: [
        {
            type: "year",
            placeholder: "Select the year",
            filterBy: "",
            query: CarService.useGetYears
        },
        {
            type: "make",
            placeholder: "Select the vehicle maker",
            filterBy: "year",
            query: CarService.useGetMakes
        },
        {
            type: "model",
            placeholder: "Select the vehicle model",
            filterBy: "make",
            query: CarService.useGetModels
        },
    ],
};

export default formatter;