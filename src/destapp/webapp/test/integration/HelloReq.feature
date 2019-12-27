Feature: Hello Text

    We just playing around with Gherkin

    Background: Start App
        Given I start my app

    Scenario: Check hello text
        Then on hello page: i should see hello text

    Scenario: Greet a user
        When on hello page: i input name
        Then on hello page: i see greetings

