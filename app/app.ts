import { createWriteStream, readFileSync } from "fs";
import { join } from "path";
import { Configuration } from "./domain/types";
import { PageObjectModelBuilder } from "./pageObjects/pageObjectModelBuilder";
import { PageObjectModelFunctionBuilder } from "./pageObjects/pageObjectModelFunctionBuilder";
import { TypescriptBuilder } from "./pageObjects/typescriptBuilder";

function execute()
{
    var configurationPath = join(__dirname, "configuration.json");

    const configData = readFileSync(configurationPath, "utf-8");
    const config: Configuration = JSON.parse(configData);
    
    const pageObjectModelBuilder = new PageObjectModelBuilder(new PageObjectModelFunctionBuilder());
    const typescriptBuilder = new TypescriptBuilder();
    
    const pageObject = pageObjectModelBuilder.build(config);
    const lines = typescriptBuilder.build(pageObject);
    
    const writer = createWriteStream(pageObject.fileName, { flags: 'w' });
    
    // TODO: Handle async if it ever becomes an issue
    lines.forEach(line =>
    {
        writer.write(line + '\n');
    });
    
    writer.end();
}

execute();

