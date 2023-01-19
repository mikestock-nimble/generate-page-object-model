import { PageObjectModel } from "../../domain/types";
import { TypescriptBuilder } from "../typescriptBuilder";

describe("Tests converting a page object definition into a typescript class", () =>
{
    it("should convert into a valid typescript file", () =>
    {
        const pageObjectModel: PageObjectModel = {
            className: "EditDecisionPage",
            fileName: "editDecision",
            functions: [
                {
                    name: "withName",
                    log: "Logger.Log(`with name ${value}`",
                    command: "cy.getByTestId(`not-an-element`)"
                },
                {
                    name: "withAddress",
                    log: "Logger.Log(`with address ${value}`)",
                    command: "cy.getByTestId(`not-an-element`)"
                }
            ]
        }

        const expected: Array<string> =
        [
            "export class EditDecisionPage",
            "{",
                "public withName(value: string): this",
                "{",
                    "Logger.Log(`with name ${value}`;",
                    "",
                    "cy.getByTestId(`not-an-element`);",
                    "",
                    "return this;",
                "}",
                "",
                "public withAddress(value: string): this",
                "{",
                    "Logger.Log(`with address ${value}`);",
                    "",
                    "cy.getByTestId(`not-an-element`);",
                    "",
                    "return this;",
                "}",
                "",
            "}"
        ];

        const builder = new TypescriptBuilder();
        const result = builder.build(pageObjectModel);

        expect(result).toEqual(expected);
    });
});