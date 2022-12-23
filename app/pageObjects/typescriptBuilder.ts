import { PageObjectModel } from "../domain/types";

export class TypescriptBuilder
{
    public build(pageObjectModel: PageObjectModel): Array<string>
    {
        const result: Array<string> = [];

        result.push(`export class ${pageObjectModel.className}`);
        result.push("{");

        pageObjectModel.functions.forEach(methodDefinition =>
        {
            result.push(`public ${methodDefinition.name}(value: string): this`);
            result.push("{");
            result.push(`${methodDefinition.log};`);
            result.push("");
            result.push(`${methodDefinition.command};`);
            result.push("");
            result.push(`return this;`);
            result.push("}");
            result.push("");
        });

        result.push("}")

        return result;
    }
}