# generate-page-object-model
Generates fluent page object models based of field names provided in the configuration



## Supports

- Frameworks
    - Cypress

- Lanugages
    - Typescript

## Instructions

Create a configuration file, example:
```
{
    "className": "PersonPage",
    "fileName": "personPage.ts",
    "fields": 
    [
        {
            "name": "name"
        },
        {
            "name": "first address line"
        }
    ]
}

```
To run:

`yarn install`
`yarn start`

Format the file in your favourite editor

The pages have been set to target elements that do not exist, to try and avoid false positives by accident, you will have to insert your specific id for it to work

Outputs in the following:

```
export class LiftNtiPage
{
public withSubmissionDecisionId(value: string): this
{
Logger.Log(`With submission decision id ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

public withDateLifted(value: string): this
{
Logger.Log(`With date lifted ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

public withNotes(value: string): this
{
Logger.Log(`With notes ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

public hasSubmissionDecisionId(value: string): this
{
Logger.Log(`Has submission decision id ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

public hasDateLifted(value: string): this
{
Logger.Log(`Has date lifted ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

public hasNotes(value: string): this
{
Logger.Log(`Has notes ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

}

```