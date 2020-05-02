import { escapeModuleName } from "../lib/names";
import { expect } from "chai";

const testModuleNames = ["@vue/devtools", "@test/legal_package_name", "also.legal", "still-legal"];
const expectedNames = ["vue__devtools", "test__legal_package_name", "also.legal", "still-legal"];

describe("Module names", () => {
    it("Escapes scoped modules", () => {
        const result = testModuleNames.map(escapeModuleName);
        expect(result).to.deep.equal(expectedNames);
    });
});