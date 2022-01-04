// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

const SOCIAL_LINKS = ["Web", "LinkedIn", "Twitter", "Instagram", "Facebook"];

describe("Signature layout", () => {
  it("Test for header and footer", () => {
    cy.visit("/");
    cy.findByRole("banner", { name: "Kin + Carta" });
    cy.findByRole("contentinfo").within(() => {
      cy.findByText("© 2021 KIN AND CARTA PLC. ALL RIGHTS RESERVED");
    });
  });
});

describe("Signature form", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays form fields for signature", () => {
    cy.findByRole("heading", { name: "Signature generator" });
    cy.findByText(
      "Fill in the form and review the generated signature in the preview as you type. You can then copy the generated signature for Gmail or the raw HTML."
    );

    cy.findByRole("textbox", { name: /name/i }).shouldHaveAttributes({
      name: "name",
      id: "name",
      type: "text",
    });
    cy.findByRole("textbox", { name: /job title/i }).shouldHaveAttributes({
      name: "jobTitle",
      id: "jobTitle",
      type: "text",
    });
    cy.findByRole("textbox", { name: /pronouns/i }).shouldHaveAttributes({
      name: "pronouns",
      id: "pronouns",
      type: "text",
      "aria-describedby": "name-pronouns",
    });
    cy.findByText(
      'e.g. "he / him / his", "she / her / hers", "they / them / theirs"'
    ).should("have.attr", "id", "name-pronouns");
    cy.findByRole("group", { name: /region/i });
    cy.findByRole("radio", { name: /europe/i }).should("be.checked");
    cy.findByRole("radio", { name: /americas/i }).should("not.be.checked");
    cy.findByRole("combobox", { name: /location/i });

    cy.findByRole("group", { name: /telephone numbers/i });
    cy.findByRole("button", { name: /add a new number/i });

    cy.findByRole("group", { name: /marketing link/i });
    cy.findByRole("radio", { name: /none/i }).should("be.checked");
    cy.findByRole("radio", { name: /awards/i }).should("not.be.checked");
  });
});

describe("Signature preview", () => {
  it("Default preview elements", () => {
    cy.visit("/");
    cy.findByRole("heading", { name: /preview/i });
    cy.findByText(/your name/i).should("have.attr", "style");
    cy.findByText(/your job title/i).should("have.attr", "style");
    cy.findByTestId("brandName").should("have.attr", "style");
    cy.findByTestId("socialLinks").within(() => {
      SOCIAL_LINKS.forEach((links) => {
        cy.findByText(links).should("have.attr", "style");
      });
    });
    cy.findByTestId("marketingLinks").should("not.exist");
    /**
     * @todo Need to merge these two checks
     */
    cy.findByText(/explore open roles at kin \+ carta europe/i).should(
      "have.attr",
      "style"
    );
    cy.findByText(/explore open roles at kin \+ carta europe/i).should(
      "have.attr",
      "href",
      "https://www.kinandcarta.com/en/careers/"
    );

    cy.findByTestId("signatureFooter").should("have.attr", "style");
    cy.findByRole("button", { name: /copy signature for gmail/i }).should(
      "be.disabled"
    );
    cy.findByRole("button", { name: /copy html/i }).should("be.disabled");
  });
});

describe("Signature form completion", () => {
  it("Fills out user information and updates preview", () => {
    cy.visit("/");
    cy.findByRole("textbox", { name: /name/i }).type("john");
    cy.findByText("john");

    cy.findByRole("textbox", { name: /job title/i }).type("manager");
    cy.findByText("manager");

    cy.findByRole("textbox", { name: /pronouns/i }).type("he/him");
    cy.findByText("he/him");

    cy.findByText(/americas/i).click();
    cy.findByTestId("socialLinks").should("not.exist");
    cy.findByTestId("signatureFooter").should("not.exist");

    cy.findByRole("combobox", { name: /location/i }).select("Bath");
    cy.findByLabelText(/include office number/i).click();

    cy.findByRole("button", { name: /add a new number/i }).click();
    cy.findByRole("group", { name: /telephone field 1/i }).within(() => {
      cy.findByRole("textbox", { name: /name/i }).type("connor");
      cy.findByRole("textbox", { name: /number/i }).type("123456");
    });
    cy.findByText("connor: 123456");
    cy.findByRole("button", { name: /delete this number/i }).click();
    cy.findByText("connor: 123456").should("not.exist");

    cy.findByRole("group", { name: /marketing link/i }).within(() => {
      cy.findByText(/awards/i).click();
    });
    cy.findByTestId("marketingLinks").within(() => {
      cy.findAllByRole("link").should((link) => {
        expect(link).to.have.lengthOf(1);
      });
    });

    cy.findByRole("button", { name: /copy signature for gmail/i }).should(
      "not.be.disabled"
    );
    cy.findByRole("button", { name: /copy html/i }).should("not.be.disabled");
  });
});
