import assert from "assert";

describe("frontend", function () {
  it("package.json has correct name", async function () {
    const { name } = await import("../frontend/package.json");
    assert.strictEqual(name, "frontend");
  });

  if (Meteor.isClient) {
    it("client is not server", function () {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function () {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
