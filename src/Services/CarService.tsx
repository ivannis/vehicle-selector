import {useQuery, UseQueryResult} from 'react-query';
import {DefinitionType, MakeType, ModelType, YearType} from "../Models";
import {YearRepository} from "./gql/YearRepository";
import {MakeRepository} from "./gql/MakeRepository";
import {ModelRepository} from "./gql/ModelRepository";
import {CarRepository} from "./gql/CarRepository";
import {apiClient} from "./ApiService";

async function getYears(model: ModelType | null): Promise<YearType[]> {
    if (model !== null) {
        const {
            uvdb: { vehicle_selector: { uvdb_years: { items } } }
        } = await apiClient().request(
            YearRepository.findYearsByModel,
            {
                model: model.id,
                limit: 500
            }
        );

        return items.map((item) => ({id: item.id, name: String(item.id) }));
    }

    const {
        uvdb: { vehicle_selector: { uvdb_years: { items } } }
    } = await apiClient().request(
        YearRepository.findYears,
        {
            limit: 500
        }
    );

    return items.map((item) => ({id: item.id, name: String(item.id) }));
}

const useGetYears = (model: ModelType | null, filterRequired: boolean): UseQueryResult<YearType[] | unknown, Error> => {
    return useQuery<YearType[], Error>(['years', model?.id], () => getYears(model), {
        // `model` would be `null` at first (falsy),
        // so the query will not execute until the model exists
        enabled: !filterRequired || model !== null
    })
}

async function getMakes(year: YearType | null): Promise<MakeType[]> {
    if (year !== null) {
        const {
            uvdb: { vehicle_selector: { uvdb_makes: { items } } }
        } = await apiClient().request(
            MakeRepository.findMakesByYear,
            {
                year: year.id,
                limit: 500
            }
        );

        return items;
    }

    const {
        uvdb: { vehicle_selector: { uvdb_makes: { items } } }
    } = await apiClient().request(
        MakeRepository.findMakes,
        {
            limit: 500
        }
    );

    return items;
}

const useGetMakes = (year: YearType | null, filterRequired: boolean): UseQueryResult<MakeType[] | unknown, Error> => {
    return useQuery<MakeType[], Error>(['makes', year?.id], () => getMakes(year), {
        // `year` would be `null` at first (falsy),
        // so the query will not execute until the year exists
        enabled: !filterRequired || year !== null
    })
}

async function getModels(make: MakeType): Promise<ModelType[]> {
    const {
        uvdb: { vehicle_selector: { uvdb_models: { items } } }
    } = await apiClient().request(
        ModelRepository.findModelsByMake,
        {
            make: make.id,
            limit: 500
        }
    );

    return items;
}

const useGetModels = (make: MakeType | null, _: boolean): UseQueryResult<ModelType[] | unknown, Error> => {
    return useQuery<ModelType[], Error>(['models', make?.id], () => getModels(make), {
        // `make` would be `null` at first (falsy),
        // so the query will not execute until the make exists
        enabled: make !== null
    })
}

async function getDefinitions(model: ModelType, year: YearType): Promise<DefinitionType[]> {
    const {
        uvdb: { vehicle_selector: { uvdb_vehicle_definitions: { items } } }
    } = await apiClient().request(
        CarRepository.findDefinitions,
        {
            model: model.id,
            year: year.id,
            limit: 500
        }
    );

    return items.map((item) => ({
        id: item.id,
        name: item.name,
        description: item.description,
        make: item.uvdb_make.name,
        model: item.uvdb_model.name,
    }));
}

const useGetDefinitions = (model: ModelType | null, year: YearType | null): UseQueryResult<DefinitionType[] | unknown, Error> => {
    return useQuery<DefinitionType[], Error>(['definitions', model?.id, year?.id], () => getDefinitions(model, year), {
        // `model` and `year` would be `null` at first (falsy),
        // so the query will not execute until the model and year exists
        enabled: model !== null && year !== null
    })
}

export const CarService = {
    useGetYears,
    useGetMakes,
    useGetModels,
    useGetDefinitions,
}