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

        const withMethods: Array<PageObjectModelFunction> = [];
        const hasMethods: Array<PageObjectModelFunction> = [];

        configuration.fields.forEach(field =>
        {
            const withMethod = this.pageObjectFunctionModelBuilder.build({ field: field, prefix: 'with'});
            withMethods.push(withMethod);

            const hasMethod = this.pageObjectFunctionModelBuilder.build({ field: field, prefix: "has" });
            hasMethods.push(hasMethod);
        })

        result.functions.push(...withMethods);
        result.functions.push(...hasMethods);

        return result;
    }
}