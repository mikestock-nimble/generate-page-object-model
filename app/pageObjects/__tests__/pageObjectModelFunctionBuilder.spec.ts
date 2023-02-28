import { PageObjectModelFunctionBuilder, PageObjectModelFunctionBuilderParams } from "../pageObjectModelFunctionBuilder";

describe("Testing the page object model function builder", () =>
{
    describe("When the field has only one character", () =>
    {
        it("Should build the function definition correctly with a single word", () =>
        {
            const builder = new PageObjectModelFunctionBuilder();

            const input: PageObjectModelFunctionBuilderParams =
            {
                field: { name: "name" },
                prefix: "with"
            }

            const result = builder.build(input);

            expect(result.name).toBe("withName");
            expect(result.log).toBe("Logger.Log(`With name ${value}`)");
            expect(result.command).toBe("cy.getByTestId(`not-an-element`).should(`contain.text`, `not-exist`)");
        });

        it("Should build the function definition correctly with multiple words", () =>
        {
            const builder = new PageObjectModelFunctionBuilder();

            const input: PageObjectModelFunctionBuilderParams =
            {
                field: { name: "first address line" },
                prefix: "has"
            }

            const result = builder.build(input);

            expect(result.name).toBe("hasFirstAddressLine");
            expect(result.log).toBe("Logger.Log(`Has first address line ${value}`)");
            expect(result.command).toBe("cy.getByTestId(`not-an-element`).should(`contain.text`, `not-exist`)");
        });
    });
});