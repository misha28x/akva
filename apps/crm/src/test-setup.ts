import "jest-preset-angular";

import { handlers } from "@akva/crm/mocks";
import { setupServer } from "msw/node";

describe("Mocks", async () => {
  const server = setupServer(...handlers);

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
});
