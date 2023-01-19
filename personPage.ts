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
