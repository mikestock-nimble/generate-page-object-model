import { Configuration, PageObjectModel, PageObjectModelFunction } from "../domain/types";
import { IPageObjectModelFunctionBuilder } from "./pageObjectModelFunctionBuilder";

export class PageObjectModelBuilder
{
    constructor(private pageObjectFunctionModelBuilder: IPageObjectModelFunctionBuilder)
    {

    }

    build(configuration: Configuration): PageObjectModel
    {
        const result: PageObjectModel = {
            className: configuration.className,
            fileName: configuration.fileName,
            functions: []
        };

        const functions: Array<PageObjectModelFunction> = [];

        configuration.fields.forEach(field =>
        {
            const createdFunction = this.pageObjectFunctionModelBuilder.build({ field: field, prefix: configuration.prefix});
            functions.push(createdFunction);
        })

        result.functions.push(...functions);

        return result;
    }
}