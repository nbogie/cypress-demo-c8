describe("tvshows spec", () => {
    it("shows main page", () => {
        cy.visit("https://tv-show-team5.onrender.com/");
        cy.contains("Main Page").should("be.visible");
    });

    it("should show GOT episodes", () => {
        cy.visit("https://tv-show-team5.onrender.com/");
        cy.contains("Main Page").should("be.visible");

        const link = cy.contains("Game of Thrones");
        link.click();
        cy.contains("Displaying 73 episodes of 73");
        cy.get("table").find("tr").should("have.length", 74);
    });

    it("should allow search of episodes", () => {
        cy.visit("https://tv-show-team5.onrender.com/GOT");
        cy.get("input").type("arya");
        cy.get("button").click();
        cy.contains("Displaying 23 episodes of 73");
        cy.get("table").find("tr").should("have.length", 24);

        //try clicking a search result link
        cy.contains("a", "The Pointy End").click();
        cy.contains("Tyrion joins his father's army with unexpected allies");
    });

    it("should show the Episode code for The Pointy End in the search results", () => {
        cy.visit("https://tv-show-team5.onrender.com/GOT");
        cy.get("input").type("pointy");
        cy.get("button").click();
        cy.contains("Displaying 1 episodes of 73");
        cy.get("table").find("tr").should("have.length", 2);

        //TODO: you need to do this bit
    });
});
