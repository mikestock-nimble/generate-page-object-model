export type Configuration =
{
    className: string;
    fileName: string;
    fields: Array<FieldConfiguration>;
}

export type FieldConfiguration =
{
    name: string;
}

export type PageObjectModel =
{
    className: string;
    fileName: string;
    functions: Array<PageObjectModelFunction>
}

export type PageObjectModelFunction =
{
    name: string;
    log: string;
    command: string;
}