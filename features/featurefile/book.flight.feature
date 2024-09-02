Feature: Book flight

  Scenario: Verify book flight functionality
    Given user click book flight link
    When user enter all valid details
    And user click continue button for book flight
    Then user should be flight available page
