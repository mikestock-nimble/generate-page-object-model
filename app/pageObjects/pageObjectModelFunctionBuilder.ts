import { PageObjectModelFunction, FieldConfiguration } from "../domain/types";

export class PageObjectModelFunctionBuilder implements IPageObjectModelFunctionBuilder
{
    public build(params: PageObjectModelFunctionBuilderParams): PageObjectModelFunction
    {
        const field = params.field;

        const nameTokens = field.name.split(" ");

        const result: PageObjectModelFunction =
        {
            name: `${params.prefix}${this.buildName(nameTokens)}`,
            log: "Logger.Log(\`" + `${this.toTitleCase(params.prefix)} ` + field.name + " ${value}\`)" ,
            command: "cy.getByTestId('not-an-element')"
        };

        return result;
    }
    
    private buildName(values: Array<string>)
    {
        return values.map(v => this.toTitleCase(v)).join("");
    }

    private toTitleCase(value: string)
    {
        const firstLetter = value.slice(0, 1);
        const result = firstLetter.toLocaleUpperCase() + value.substring(1);

        return result;
    }
}

export interface IPageObjectModelFunctionBuilder
{
    build(params: PageObjectModelFunctionBuilderParams): PageObjectModelFunction
}

export type PageObjectModelFunctionBuilderParams =
{
    field: FieldConfiguration;
    prefix: string;
}