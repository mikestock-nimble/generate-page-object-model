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
                    command: "cy.getByTestId('not-an-element')"
                },
                {
                    name: "hasName",
                    log: "Logger.Log(`has name ${value}`",
                    command: "cy.getByTestId('not-an-element')"
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
                    "cy.getByTestId('not-an-element');",
                    "return this;",
                "}",
                "public hasName(value: string): this",
                "{",
                    "Logger.Log(`has name ${value}`;",
                    "cy.getByTestId('not-an-element');",
                    "return this;",
                "}",
            "}"
        ];

        const builder = new TypescriptBuilder();
        const result = builder.build(pageObjectModel);

        expect(result).toEqual(expected);
    });
});