export interface YearType {
    id: number
    name: string
}

export interface MakeType {
    id: number
    name: string
}

export interface ModelType {
    id: number
    name: string
}

export interface UserType {
    name: string,
    img: string
}

export interface DefinitionType {
    id: number
    name: string,
    description: string,
    make: string,
    model: string,
}
