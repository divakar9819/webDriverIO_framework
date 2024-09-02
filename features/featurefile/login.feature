Feature: Login functionality

  Scenario Outline: Verify login functionality for valid user
    Given user click login button
    And user enter valid <userame> and <password>
    And user click submit button for login
    Then user should be login successfully

    Examples:
      | userame | password |
      | test     | test@123 |
