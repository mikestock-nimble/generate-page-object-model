import { Configuration, PageObjectModel, PageObjectModelFunction } from "../../domain/types";
import { PageObjectModelBuilder } from "../pageObjectModelBuilder";
import { IPageObjectModelFunctionBuilder, PageObjectModelFunctionBuilder } from "../pageObjectModelFunctionBuilder";

describe("Given a configuration with fields", () =>
{
    it("Should build a page object model for each field in the configuration", () =>
    {
        const builder = new PageObjectModelBuilder(new PageObjectModelFunctionBuilder());

        const configuration: Configuration = {
            className: "EditDecision",
            fileName: "editDecision",
            fields: [
                {
                    name: "name"
                }
            ],
            prefix: "with"
        };

        const result = builder.build(configuration);
        expect(result.functions.length).toBe(1);

        expect(result.className).toBe("EditDecision");
        expect(result.fileName).toBe("editDecision");

        const withFunction = result.functions[0];

        // With function
        expect(withFunction.name).toBe("withName");
        expect(withFunction.log).toBe("Logger.Log(`With name ${value}`)");
        expect(withFunction.command).toBe("cy.getByTestId(`not-an-element`).should(`contain.text`, `not-exist`)");
    });
});

