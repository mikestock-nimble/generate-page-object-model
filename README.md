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
    ],
    "prefix": "with"
}

Please note the tool is expecting words to be lower case, separated by a space in the case of multiple, e.g. first address line

```
To run:

`yarn install`

`yarn start`

Format the file in your favourite editor

The pages have been set to target elements that do not exist, to try and avoid false positives by accident, you will have to insert your specific id for it to work

Outputs in the following to the root of the project:

```
export class PersonPage
{
public withName(value: string): this
{
Logger.Log(`With name ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

public withFirstAddressLine(value: string): this
{
Logger.Log(`With first address line ${value}`);

cy.getByTestId(`not-an-element`);

return this;
}

}

```